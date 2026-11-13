#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const {
  ROOT, loadPages, pageDone, parseLoc, parseSpec, inSpec, keyTuple, cmpTuple, sourceLines, usage, fail, takeOpt
} = require('./lib/common')

const USAGE = `
Gather what one page of a book needs, and fill the subagent prompts for it.

usage: node tools/page-context.js <book> <page id> <outdir> [--through <page id>]

Writes into <outdir>:
  base.txt                   the base-text lines of the page(s)
  print-<id>.txt             the printed edition's OCR lines (from pages.json \`print\`), numbered
  english-<id>.txt           the public-domain English translation lines (pages.json \`english\`), numbered
  cruxes-<id>.md             for books with one research/cruxes.md: the entries of this page
  crux-prompt.md             filled prompt for the crux-list subagent (pages <id>..<through>)
  collate-prompt.md          filled prompt for the collation subagent (pages <id>..<through>)
  review-prompt.md           filled prompt for the review subagent (page <id> only)
and prints a summary: what exists, what is missing, what to run next.
`

const PROMPTS = path.join(ROOT, '.claude', 'skills', 'translate-page', 'prompts')
const HEAD_LABEL = /^([0-9A-Z]+(?:[.:][0-9]+)*)/
const rel = (p) => path.relative(ROOT, p)
const abs = (p) => path.resolve(ROOT, p)
const write = (file, text) => fs.writeFileSync(file, text)

function excerpt (locs, out) {
  const parts = locs.map(([file, a, b]) => {
    const full = abs(file)
    if (!fs.existsSync(full)) return `# ${file}: not found\n`
    const lines = fs.readFileSync(full, 'utf8').split('\n')
    const body = []
    for (let n = a; n <= Math.min(b, lines.length); n++) body.push(`${n}\t${lines[n - 1]}`)
    return `# ${file} l. ${a}-${b}\n` + body.join('\n')
  })
  write(out, parts.join('\n\n') + '\n')
}

function labelHits (token, items, first) {
  token = token.replaceAll(':', '.')
  const ends = token.split('〜')
  if (ends.some((e) => e && inSpec(e, items))) return true
  if (ends.length === 2 && ends[0] && ends[1] && first) {
    const a = keyTuple(ends[0].split('.'))
    const b = keyTuple(ends[1].split('.'))
    const f = keyTuple(first.split('.'))
    return cmpTuple(a, f.slice(0, a.length)) <= 0 && cmpTuple(f.slice(0, b.length), b) <= 0
  }
  return false
}

function legacyCruxes (file, spec, firstLabel) {
  const items = parseSpec(spec)
  const out = []
  const shown = new Set()
  let section = ''
  let heading = ''
  let tableHead = []
  let keep = false
  const lines = fs.readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    if (line.startsWith('#')) heading = line
    if (line.startsWith('## ')) {
      section = line
      keep = false
      return
    }
    if (line.startsWith('### ')) {
      const tok = line.slice(4).split(' ', 1)[0]
      const tokens = tok.split(/[、,]/).filter(Boolean)
      keep = tokens.some((t) => HEAD_LABEL.test(t) && labelHits(t, items, firstLabel))
      if (keep) {
        if (section && !shown.has(section)) {
          out.push(section)
          shown.add(section)
        }
        out.push(line)
      }
      return
    }
    if (line.startsWith('|')) {
      if (i > 0 && !lines[i - 1].startsWith('|')) {
        tableHead = [line]
        return
      }
      if (line.startsWith('|---') || line.startsWith('| ---')) {
        tableHead.push(line)
        return
      }
      const cell = line.replace(/^[| ]+|[| ]+$/g, '').split('|')[0].trim()
      const m = HEAD_LABEL.exec(cell)
      if (m && labelHits(m[1], items, firstLabel)) {
        const key = heading + tableHead.join('\n')
        if (!shown.has(key)) {
          if (shown.has(heading)) out.push('', ...tableHead)
          else out.push('', heading, ...tableHead)
          shown.add(key)
          shown.add(heading)
        }
        out.push(line)
      }
      return
    }
    if (keep) out.push(line)
  })
  return out.join('\n').trim()
}

function fill (template, values) {
  let text = fs.readFileSync(path.join(PROMPTS, template), 'utf8')
  for (const [k, v] of Object.entries(values)) text = text.replaceAll(`{{${k}}}`, v)
  const left = text.match(/\{\{[^}]+\}\}/g)
  if (left) fail(`${template}: unfilled ${left.join(' ')}`)
  return text
}

const args = process.argv.slice(2)
const through = takeOpt(args, '--through')
usage(USAGE, args.length === 3)
const [book, pageId, outdir] = args
const data = loadPages(book)
if (!data) fail(`books/${book}/research/pages.json not found (create it with tools/pages.js new)`)
const ids = data.pages.map((p) => p.id)
if (!ids.includes(pageId) || (through && !ids.includes(through))) fail(`unknown page; pages: ${ids.join(' ')}`)
const i0 = ids.indexOf(pageId)
const i1 = through ? ids.indexOf(through) : i0
const group = data.pages.slice(i0, i1 + 1)
const page = data.pages[i0]
fs.mkdirSync(outdir, { recursive: true })
const research = path.join(ROOT, 'books', book, 'research')
const baseOf = (p) => p.base || data.base
const base = baseOf(page)

const baseLines = group.flatMap((p) => sourceLines(abs(baseOf(p)), p.spec).map(([, l]) => l))
write(path.join(outdir, 'base.txt'), baseLines.join('\n') + '\n')

const pageLines = group.map((p) => {
  const bits = [`範囲 \`${p.spec}\``]
  if (p.base && p.base !== data.base) bits.push(`底本 \`${p.base}\``)
  if (p.print) {
    excerpt(parseLoc(p.print), path.join(outdir, `print-${p.id}.txt`))
    bits.push(`印刷版 OCR \`${p.print}\`（抜粋 \`${outdir}/print-${p.id}.txt\`）`)
  } else bits.push('印刷版 OCR の行範囲は未記入（自分で探す）')
  if (p.images) bits.push(`画像 \`${p.images}\``)
  if (p.english) excerpt(parseLoc(p.english), path.join(outdir, `english-${p.id}.txt`))
  return `- \`${p.id}\`：` + bits.join('、')
})

const cruxdir = path.join(research, 'cruxes')
const legacy = path.join(research, 'cruxes.md')
const collationDir = path.join(research, 'collation')

function cruxRef (p) {
  const f = path.join(cruxdir, `${p.id}.md`)
  if (fs.existsSync(f)) return [`\`${rel(f)}\`（略号は \`${rel(path.join(cruxdir, 'README.md'))}\`）`, true]
  if (fs.existsSync(legacy)) {
    const first = sourceLines(abs(baseOf(p)), p.spec)
    const text = legacyCruxes(legacy, p.spec, first.length ? first[0][0] : '')
    if (text) {
      const out = path.join(outdir, `cruxes-${p.id}.md`)
      write(out, `# ${rel(legacy)} から ${p.spec} の項目を切り出したもの\n\n${text}\n`)
      return [`\`${out}\`（\`${rel(legacy)}\` から、この範囲の項目と表の行を切り出したもの。冒頭の略号の説明が要るときだけ元のファイルの先頭 40 行を読む）`, true]
    }
  }
  return ['まだない', false]
}

function collationRef (p) {
  if (!data.digitized) return ['不要（底本は電子化ではない）', null]
  const f = path.join(collationDir, `${p.id}.md`)
  if (fs.existsSync(f)) return [`\`${rel(f)}\``, true]
  if (fs.existsSync(legacy) && cruxRef(p)[1]) return ['論点一覧の抜粋の中の「電子化の入力の誤り」の表', true]
  return ['まだない', false]
}

const cruxFiles = fs.existsSync(cruxdir) ? fs.readdirSync(cruxdir).filter((f) => f !== 'README.md').sort() : []
const model = cruxFiles.length
  ? `\`${rel(path.join(cruxdir, cruxFiles[0]))}\` と \`${rel(path.join(cruxdir, 'README.md'))}\``
  : '`books/didache/research/cruxes.md` の冒頭（略号の説明）と 2〜3 項目。見出しと各欄の形をこれに揃える'

const prev = i0 > 0 ? data.pages[i0 - 1].id : null
const prevRef = prev ? `\`books/${book}/src/${prev}/jp.md\`` : 'なし（本の最初のページ。本の AGENTS.md が引き継ぎを指定していればその本の訳）'
const eng = page.english
  ? `${data.english_name || '英訳'}：\`${outdir}/english-${page.id}.txt\`（\`${page.english}\` の切り出し）`
  : '未記入。`research/sources.md` にある著作権の切れた英訳から該当箇所を探して読み、行範囲を報告する'
let prt = page.print ? `\`${outdir}/print-${page.id}.txt\`（\`${page.print}\` の切り出し）` : '行範囲は未記入。`research/sources.md` の印刷版の OCR から探す'
let imgs = page.images ? `\`${page.images}\`（archive.org の識別子と IIIF のページ番号）` : '番号は未記入。`research/sources.md` の archive.org の識別子から探す'
if (group.length > 1) {
  prt = '各ページの行範囲と抜粋は上の一覧のとおり'
  imgs = '各ページの番号は上の一覧のとおり（未記入なら `research/sources.md` から探す）'
}

const values = {
  書名: data.title || book,
  原語: data.language || '原',
  本: book,
  節: group.length === 1 ? pageId : `${pageId}〜${group.at(-1).id}`,
  範囲: group.length === 1 ? page.spec : group.map((p) => p.spec).join('、'),
  底本: base,
  抜粋: outdir,
  今日: new Date().toLocaleDateString('sv-SE'),
  ページの一覧: pageLines.join('\n'),
  印刷版: prt,
  画像: imgs,
  手本: model,
  書き込み先: group.map((p) => `\`books/${book}/research/cruxes/${p.id}.md\``).join('、'),
  照合の書き込み先: group.map((p) => `\`books/${book}/research/collation/${p.id}.md\``).join('、')
}
write(path.join(outdir, 'crux-prompt.md'), fill('crux.md', values))
if (data.digitized) write(path.join(outdir, 'collate-prompt.md'), fill('collate.md', values))

const pairs = path.join(outdir, `${book}-${pageId}-pairs.json`)
write(path.join(outdir, 'review-prompt.md'), fill('review.md', {
  ...values, 節: pageId, 範囲: page.spec, 前のページ: prevRef, 論点一覧: cruxRef(page)[0], 照合: collationRef(page)[0], 英訳: eng, pairs
}))

console.log(`book: ${book}  page: ${pageId}  spec: ${page.spec}  base: ${base}`)
console.log(`done in README: ${pageDone(book, pageId) ? 'yes' : 'no'}`)
console.log(`previous page: ${prevRef}`)
for (const p of group) {
  const c = cruxRef(p)[1]
  const l = collationRef(p)[1]
  const yn = (v) => (v ? 'yes' : 'unset')
  console.log(`  ${p.id}: cruxes ${c ? 'yes' : 'MISSING'}, collation ${l === null ? 'n/a' : (l ? 'yes' : 'MISSING')}, ` +
    `print ${yn(p.print)}, english ${yn(p.english)}, images ${yn(p.images)}`)
}
console.log(`wrote: ${outdir}/base.txt, crux-prompt.md${data.digitized ? ', collate-prompt.md' : ''}, review-prompt.md and excerpts`)
console.log(`pairs file for the reviewer: ${pairs}`)
