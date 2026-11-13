#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { spawn, spawnSync } = require('child_process')
const { ROOT, loadPages, pageDone, usage, takeOpt, takeFlag } = require('./lib/common')

const USAGE = `
Run a translation relay: one fresh Claude Code session per task, until the ledger is done.
The orchestrating session runs this (usually with --once, in the background) and reports to the user.

usage: node tools/relay.js <relays/name.md> [--status | --dry-run | --once] [--max N] [--model M]

The ledger lists books as \`## <book>\` headings, in order; the text under a heading is passed to
the session as notes. For the first book that is not finished, the next task is:
  start-book    when research/pages.json is missing or its first page is not in the README yet
  translate     the first page of pages.json not marked [x] in the book's README
  finish-book   when every page is [x] but book.json is missing, has "preview", or the book is not
                in the work list of static/index.html
A task that is still pending after its session ends is retried (3 times, 5 minutes apart); a usage
limit waits until the limit resets and does not count. Logs go to cache/relay-logs/.

--status   print the progress of every book and the next task, and exit
--dry-run  print the next task and the prompt it would get, and exit
--once     run one task (with its retries) and exit
--max N    stop after N tasks                --model M  pass --model to claude
Exit code: 0 done or stopped normally, 1 a task failed 3 times or the work tree is left dirty.
`

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
const now = () => new Date().toTimeString().slice(0, 5)
const read = (p) => fs.readFileSync(p, 'utf8')

function parseLedger (file) {
  const books = []
  let cur = null
  for (const line of read(file).split('\n')) {
    const m = /^## (?:books\/)?([a-z0-9-]+)(?:$|[\s　（(—])/.exec(line)
    if (m) {
      cur = { book: m[1], notes: [] }
      books.push(cur)
    } else if (cur) cur.notes.push(line)
  }
  for (const b of books) b.notes = b.notes.join('\n').trim()
  return books
}

function finished (book) {
  const bj = path.join(ROOT, 'books', book, 'book.json')
  if (!fs.existsSync(bj) || JSON.parse(read(bj)).preview) return false
  return read(path.join(ROOT, 'static', 'index.html')).includes(`./${book}/`)
}

function started (book, data) {
  if (!data || !data.pages || !data.pages.length) return false
  const readme = path.join(ROOT, 'books', book, 'README.md')
  return fs.existsSync(readme) && read(readme).includes(data.pages[0].id)
}

function nextTask (books) {
  for (const b of books) {
    const book = b.book
    if (finished(book)) continue
    const data = loadPages(book)
    if (!started(book, data)) return { kind: 'start-book', book, notes: b.notes, key: `start ${book}` }
    const p = data.pages.find((x) => !pageDone(book, x.id))
    if (p) return { kind: 'translate', book, page: p.id, spec: p.spec, notes: b.notes, key: `${book} ${p.id}` }
    return { kind: 'finish-book', book, notes: b.notes, key: `finish ${book}` }
  }
  return null
}

const COMMON = 'このセッションはリレーの一部として自動で起動された。ユーザーには質問できず、承認が要る操作は自動で断られる。' +
  '決めきれないことは、ルートと本の AGENTS.md、既存の訳と記録に照らして推奨の判断をとり、理由を記録に残す。' +
  '終わったらコミットして push し、次の作業には進まずに終了する。'

function promptFor (t) {
  const notes = t.notes ? `\n\nリレーの進捗表にあるこの本の注意：\n${t.notes}` : ''
  let body
  if (t.kind === 'translate') body = `translate-page スキルで、books/${t.book} のページ ${t.page}（範囲 ${t.spec}）を訳す。レビューの適用と README の進捗の [x] までがこのセッションの仕事。`
  else if (t.kind === 'start-book') body = `start-book スキルで、books/${t.book} の準備をする（research/pages.json と README の進捗表を作るところまで）。ページの訳には進まない。`
  else body = `finish-book スキルで、books/${t.book} の完了処理をする。`
  return body + '\n\n' + COMMON + notes
}

function show (ev) {
  if (ev.type === 'assistant') {
    for (const c of ev.message?.content || []) {
      if (c.type === 'text' && c.text.trim()) console.log('  ' + c.text.trim().split('\n')[0].slice(0, 160))
      else if (c.type === 'tool_use') {
        const i = c.input || {}
        const what = String(i.description || i.command || i.file_path || i.skill || '').split('\n')[0].slice(0, 140)
        console.log(`  → ${c.name}: ${what}`)
      }
    }
  } else if (ev.type === 'result') {
    console.log(`  = ${ev.subtype} turns=${ev.num_turns} min=${Math.round((ev.duration_ms || 0) / 6000) / 10}`)
  }
}

function run (t, model) {
  const logdir = path.join(ROOT, 'cache', 'relay-logs')
  fs.mkdirSync(logdir, { recursive: true })
  const stamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14)
  const log = path.join(logdir, `${stamp}-${t.key.replace(/[^a-z0-9-]+/g, '-')}.jsonl`)
  const cmd = ['-p', promptFor(t), '--dangerously-skip-permissions', '--permission-prompts', 'none',
    '--output-format', 'stream-json', '--verbose', '--name', `relay ${t.key}`]
  if (model) cmd.push('--model', model)
  console.log(`[${now()}] ${t.kind}: ${t.key}  (log ${path.relative(ROOT, log)})`)
  return new Promise((resolve) => {
    const out = fs.createWriteStream(log)
    const child = spawn('claude', cmd, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'] })
    let resultText = ''
    let limit = null
    let buf = ''
    const onData = (chunk) => {
      out.write(chunk)
      buf += chunk.toString()
      let i
      while ((i = buf.indexOf('\n')) !== -1) {
        const line = buf.slice(0, i)
        buf = buf.slice(i + 1)
        let ev
        try {
          ev = JSON.parse(line)
        } catch {
          if (line.trim()) console.log('  ' + line.slice(0, 200))
          resultText += line
          continue
        }
        show(ev)
        if (ev.type === 'rate_limit_event') limit = ev.rate_limit_info || {}
        if (ev.type === 'result') resultText += String(ev.result || '') + String(ev.subtype || '')
      }
    }
    child.stdout.on('data', onData)
    child.stderr.on('data', onData)
    child.on('close', () => {
      out.end()
      resolve({ text: resultText, limit })
    })
  })
}

function status (books) {
  for (const b of books) {
    const data = loadPages(b.book)
    if (finished(b.book)) console.log(`${b.book}: finished`)
    else if (!started(b.book, data)) console.log(`${b.book}: not started`)
    else {
      const done = data.pages.filter((p) => pageDone(b.book, p.id)).length
      console.log(`${b.book}: ${done}/${data.pages.length} pages`)
    }
  }
  const t = nextTask(books)
  console.log(t ? `next: ${t.kind} ${t.key}` : 'next: none (every book is finished)')
}

function treeClean () {
  const dirty = spawnSync('git', ['status', '--porcelain'], { cwd: ROOT, encoding: 'utf8' }).stdout.trim()
  const ahead = spawnSync('git', ['rev-list', '--count', '@{u}..HEAD'], { cwd: ROOT, encoding: 'utf8' }).stdout.trim()
  return { dirty, ahead: ahead && ahead !== '0' ? ahead : '' }
}

async function main () {
  const args = process.argv.slice(2)
  const model = takeOpt(args, '--model')
  const max = takeOpt(args, '--max')
  const dry = takeFlag(args, '--dry-run')
  const once = takeFlag(args, '--once')
  const stat = takeFlag(args, '--status')
  usage(USAGE, args.length === 1)
  const books = parseLedger(path.resolve(ROOT, args[0]))
  if (!books.length) {
    console.error('no `## <book>` headings in the ledger')
    return 1
  }
  if (stat) {
    status(books)
    return 0
  }
  let done = 0
  let failures = 0
  let waits = 0
  let lastKey = null
  for (;;) {
    const t = nextTask(books)
    if (!t) {
      const { dirty, ahead } = treeClean()
      if (dirty || ahead) {
        console.log('every task is done, but the work tree has uncommitted or unpushed changes:')
        console.log(dirty || `${ahead} commits not pushed`)
        return 1
      }
      console.log('relay finished: every book in the ledger is done')
      return 0
    }
    if (dry) {
      console.log(t.kind, t.key)
      console.log('---')
      console.log(promptFor(t))
      return 0
    }
    if (max !== null && done >= parseInt(max, 10)) {
      console.log(`stopped after ${done} tasks (--max)`)
      return 0
    }
    if (t.key === lastKey) {
      failures++
      if (failures >= 3) {
        console.log(`stopped: ${t.key} is still pending after 3 attempts; see cache/relay-logs/`)
        return 1
      }
      console.log(`retrying ${t.key} in 5 minutes (attempt ${failures + 1})`)
      await sleep(300000)
    } else {
      if (once && lastKey !== null) return 0
      failures = 0
    }
    const { text, limit } = await run(t, model)
    done++
    lastKey = t.key
    const still = nextTask(books)
    const blocked = limit && !String(limit.status || 'allowed').startsWith('allowed')
    if (still && still.key === t.key && (blocked || /usage limit|rate limit|limit reached/i.test(text))) {
      waits++
      if (waits > 20) {
        console.log('stopped: the usage limit did not clear')
        return 1
      }
      const until = (limit && limit.resetsAt) ? limit.resetsAt * 1000 : Date.now() + 3600000
      const ms = Math.max(300000, until - Date.now() + 120000)
      console.log(`usage limit: waiting until ${new Date(Date.now() + ms).toLocaleString('sv-SE').slice(5, 16)}`)
      await sleep(ms)
      lastKey = null
      continue
    }
    if (once && (!still || still.key !== t.key)) return 0
  }
}

main().then((code) => process.exit(code))
