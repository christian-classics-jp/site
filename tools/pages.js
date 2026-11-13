#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { ROOT, loadPages, savePages, pageDone, bookDir, usage, fail, takeOpt, takeFlag } = require('./lib/common')

const USAGE = `
Manage books/<book>/research/pages.json, the page list of a book translated from the original.

usage:
  node tools/pages.js new <book> <plan.txt> --base <path> --language <ギリシア語|ラテン語> [--digitized]
      plan.txt: one page per line, \`<spec> [words]\` (the output of tools/plan-pages.js, edited as needed).
      Page ids are generated (chapter-01-05, or NN-<spec>); rename them in pages.json before translating.
  node tools/pages.js locate <book> <english|print> <text file> <regex> [--from N] [--to N] [--prefix P]
      Fill each page's english or print location (\`path:first-last\`) from the lines where <regex> matches.
      Group 1 of <regex> is the chapter number (Arabic or Roman). --from/--to limit the lines searched.
      --prefix P: only pages whose spec starts with \`P.\`; the chapter is then the label part after P.
  node tools/pages.js next <book>
      Print the first page not marked [x] in the README progress table (\`<id> <spec>\`); exit 1 if none.
  node tools/pages.js readme <book>
      Print the README progress table for all pages.

pages.json fields: title, language, base (repo-relative), digitized (true when the base text is a
digitization of a printed edition, so each page gets a collation), english_name, print_name, and
pages: [{id, spec, base?, english?, print?, images?}]. english/print are \`path:first-last\`
(several joined with \`; \`); images is \`<archive.org identifier>:<first>-<last>\` IIIF page numbers.
`

const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }

function toInt (s) {
  s = s.trim().replace(/\.$/, '')
  if (/^\d+$/.test(s)) return parseInt(s, 10)
  s = s.toUpperCase()
  if (!s || [...s].some((ch) => !(ch in ROMAN))) return null
  let total = 0
  for (let i = 0; i < s.length; i++) {
    const v = ROMAN[s[i]]
    total += i + 1 < s.length && ROMAN[s[i + 1]] > v ? -v : v
  }
  return total
}

function genId (spec, n, width) {
  const m = /^(\d+)(?:-(\d+))?$/.exec(spec)
  if (m) {
    const a = m[1].padStart(width, '0')
    return !m[2] || m[2] === m[1] ? `chapter-${a}` : `chapter-${a}-${m[2].padStart(width, '0')}`
  }
  return `${String(n).padStart(2, '0')}-` + spec.replace(/[^0-9A-Za-z]+/g, '-').replace(/^-+|-+$/g, '')
}

function describe (spec) {
  return spec.split(',').map((item) => {
    const [a, b] = item.split('-')
    const pa = a.split('.')
    const pb = b ? b.split('.') : null
    if (!pb) return pa.length === 1 ? `${pa[0]} 章` : pa.join('.')
    if (pa.length === 1 && pb.length === 1) return `${pa[0]}〜${pb[0]} 章`
    if (pa.length === 2 && pb.length === 2 && pa[0] === pb[0]) return `${pa[0]} 章 ${pa[1]}〜${pb[1]} 節`
    return `${a}〜${b}`
  }).join('、')
}

function cmdNew (args) {
  const base = takeOpt(args, '--base')
  const language = takeOpt(args, '--language')
  const digitized = takeFlag(args, '--digitized')
  usage(USAGE, args.length === 2 && base && language)
  const [book, plan] = args
  if (loadPages(book)) fail(`books/${book}/research/pages.json exists; edit it instead`)
  const specs = fs.readFileSync(plan, 'utf8').split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((l) => l.split(/\s+/)[0])
  const nums = specs.flatMap((sp) => (sp.match(/\d+/g) || []).map(Number))
  const width = nums.length ? Math.max(2, String(Math.max(...nums)).length) : 2
  const readme = path.join(bookDir(book), 'README.md')
  const title = fs.existsSync(readme) ? fs.readFileSync(readme, 'utf8').split('\n')[0].replace(/^#+\s*/, '').trim() : ''
  const data = {
    title, language, base, digitized, english_name: '', print_name: '',
    pages: specs.map((sp, i) => ({ id: genId(sp, i + 1, width), spec: sp }))
  }
  fs.mkdirSync(path.join(bookDir(book), 'research'), { recursive: true })
  savePages(book, data)
  for (const p of data.pages) console.log(p.id, p.spec)
}

function cmdLocate (args) {
  const lo = parseInt(takeOpt(args, '--from', '1'), 10)
  const hiOpt = takeOpt(args, '--to')
  const prefix = takeOpt(args, '--prefix')
  usage(USAGE, args.length === 4 && ['english', 'print'].includes(args[1]))
  const [book, field, text, regex] = args
  const data = loadPages(book)
  if (!data) fail(`no pages.json for ${book}`)
  const lines = fs.readFileSync(path.resolve(ROOT, text), 'utf8').split('\n')
  const hi = hiOpt ? parseInt(hiOpt, 10) : lines.length
  const pat = new RegExp(regex)
  const starts = new Map()
  for (let n = lo; n <= hi && n - 1 < lines.length; n++) {
    const m = pat.exec(lines[n - 1])
    if (m) {
      const ch = toInt(m[1])
      if (ch !== null && !starts.has(ch)) starts.set(ch, n)
    }
  }
  if (!starts.size) fail('no match')
  console.log('found chapters:', [...starts].sort((x, y) => x[0] - y[0]).map(([k, v]) => `${k}@${v}`).join(' '))
  const rel = path.relative(ROOT, path.resolve(ROOT, text))
  const plen = prefix ? prefix.split('.').length : 0
  for (const p of data.pages) {
    if (prefix && !p.spec.startsWith(prefix + '.')) continue
    const chapters = []
    for (const item of p.spec.split(',')) {
      for (const end of item.split('-')) {
        const parts = end.split('.').slice(plen)
        if (parts.length && /^\d+$/.test(parts[0])) chapters.push(parseInt(parts[0], 10))
      }
    }
    if (!chapters.length) continue
    const a = Math.min(...chapters)
    const b = Math.max(...chapters)
    if (!starts.has(a)) {
      console.log(`${p.id}: chapter ${a} not found, left as is`)
      continue
    }
    const later = [...starts].filter(([k]) => k > b).map(([, v]) => v)
    const end = later.length ? Math.min(...later) - 1 : hi
    p[field] = `${rel}:${starts.get(a)}-${end}`
    console.log(`${p.id}: ${p[field]}`)
  }
  savePages(book, data)
}

function cmdNext (args) {
  usage(USAGE, args.length === 1)
  const data = loadPages(args[0])
  if (!data) fail(`no pages.json for ${args[0]}`)
  const p = data.pages.find((x) => !pageDone(args[0], x.id))
  if (!p) process.exit(1)
  console.log(p.id, p.spec)
}

function cmdReadme (args) {
  usage(USAGE, args.length === 1)
  const data = loadPages(args[0])
  if (!data) fail(`no pages.json for ${args[0]}`)
  console.log('| 節 | 範囲 | 訳 |')
  console.log('|---|---|---|')
  for (const p of data.pages) console.log(`| ${p.id} | ${describe(p.spec)} | ${pageDone(args[0], p.id) ? '[x]' : '[ ]'} |`)
}

const [cmd, ...rest] = process.argv.slice(2)
const run = { new: cmdNew, locate: cmdLocate, next: cmdNext, readme: cmdReadme }[cmd]
usage(USAGE, Boolean(run))
run(rest)
