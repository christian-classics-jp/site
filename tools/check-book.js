#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')
const { ROOT, loadPages, pageDone, usage, fail } = require('./lib/common')

const USAGE = `
Check that a book is ready to publish as finished.

usage: node tools/check-book.js <book>

Rebuilds every jp.md with ci/jp.js and reports any that changed, then checks the README progress,
book.json, intro.md, the work list in static/index.html, CANDIDATES.md, and leftover paths
outside the repository. Exit 1 when any check fails.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 1)
const book = args[0]
const bdir = path.join(ROOT, 'books', book)
if (!fs.existsSync(bdir)) fail(`no such book: ${book}`)
const oks = []
const fails = []
const check = (ok, msg) => (ok ? oks : fails).push(msg)
const read = (p) => fs.readFileSync(p, 'utf8')

const readme = read(path.join(bdir, 'README.md'))
const pages = loadPages(book)
if (pages) {
  const left = pages.pages.filter((p) => !pageDone(book, p.id)).map((p) => p.id)
  check(!left.length, 'all pages marked [x] in README' + (left.length ? ` (not yet: ${left.join(' ')})` : ''))
}
check(!readme.includes('[ ]'), 'no [ ] left in README')

const srcdir = path.join(bdir, 'src')
for (const d of fs.readdirSync(srcdir).sort()) {
  const full = path.join(srcdir, d)
  if (fs.existsSync(path.join(full, 'both.md'))) spawnSync('node', [path.join(ROOT, 'ci', 'jp.js'), full], { cwd: ROOT })
}
const changed = spawnSync('git', ['status', '--porcelain', '--', `books/${book}/src`], { cwd: ROOT, encoding: 'utf8' }).stdout
const stale = changed.split('\n').filter((l) => l.endsWith('jp.md')).map((l) => l.slice(3))
check(!stale.length, 'every jp.md matches its both.md' + (stale.length ? ` (rebuilt now, commit them: ${stale.join(' ')})` : ''))

let title
const bjPath = path.join(bdir, 'book.json')
if (fs.existsSync(bjPath)) {
  const bj = JSON.parse(read(bjPath))
  check(Boolean(bj.author && bj.title), 'book.json has author and title')
  check(['CC0', 'CC BY-SA'].includes(bj.license), `book.json license is CC0 or CC BY-SA (got ${JSON.stringify(bj.license)})`)
  check(!bj.preview, 'book.json has no "preview"')
  const ai = readme.includes('全文を Claude Code')
  check(!ai || Boolean(bj.aiTranslation), 'book.json has aiTranslation (README says the book was translated with Claude Code)')
  const inherits = /First1KGreek|Open Apostolic Fathers/.test(readme)
  if (ai) {
    const want = inherits ? 'CC BY-SA' : 'CC0'
    check(bj.license === want, `license is ${want} (${inherits ? 'the base text is CC BY-SA' : 'AI translation'})`)
  }
  title = bj.title || ''
} else {
  check(false, 'book.json exists')
  title = readme.split('\n')[0].replace(/^#+\s*/, '').trim()
}

const intro = path.join(bdir, 'intro.md')
if (fs.existsSync(intro)) {
  const text = read(intro)
  check(!text.includes('翻訳中'), 'intro.md does not say the book is in progress')
  const n = (text.match(/[。！]/g) || []).length
  check(n >= 2 && n <= 4, `intro.md has 2–4 sentences (has ${n})`)
} else check(false, 'intro.md exists')

check(read(path.join(ROOT, 'static', 'index.html')).includes(`./${book}/`), 'static/index.html links to the book')
const short = title.includes('『') ? title.replace(/^.*『|』.*$/g, '') : title
check(!(short && read(path.join(ROOT, 'CANDIDATES.md')).includes(short)), `CANDIDATES.md no longer lists 「${short}」`)
check(!readme.includes('.claude/handoffs'), 'README has no path outside the repository')

for (const m of oks) console.log('OK  ', m)
for (const m of fails) console.log('FAIL', m)
process.exit(fails.length ? 1 : 0)
