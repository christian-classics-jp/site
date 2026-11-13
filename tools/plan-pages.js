#!/usr/bin/env node
const fs = require('fs')
const { usage } = require('./lib/common')

const USAGE = `
Group a labeled base text into pages of about TARGET words.

usage: node tools/plan-pages.js <base.txt> <chapter-depth> [target] [filter-prefix]

chapter-depth: how many label parts make a chapter (2 for 1.1.1 = book.chapter.unit).
A chapter longer than 1.5 x target is split at unit boundaries, and each piece is a page of its own.
Pages never cross a book (the label parts before the chapter number). Prints \`<spec> <words>\` per page.
`

const args = process.argv.slice(2)
usage(USAGE, args.length >= 2)
const [file, depthS, targetS, prefix] = args
const depth = parseInt(depthS, 10)
const target = targetS ? parseInt(targetS, 10) : 1000
const LABEL = /^([0-9A-Z]+(?:\.[0-9]+)+) (.*)/

const chapters = []
for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
  const m = LABEL.exec(line)
  if (!m || (prefix && !(m[1] + '.').startsWith(prefix + '.'))) continue
  const key = m[1].split('.').slice(0, depth).join('.')
  if (!chapters.length || chapters.at(-1)[0] !== key) chapters.push([key, []])
  chapters.at(-1)[1].push([m[1], m[2].split(/\s+/).filter(Boolean).length])
}

function halfEven (x) {
  const f = Math.floor(x)
  if (x - f === 0.5) return f % 2 === 0 ? f : f + 1
  return Math.round(x)
}

const pieces = []
for (const [key, units] of chapters) {
  const total = units.reduce((a, [, w]) => a + w, 0)
  if (total <= target * 1.5) {
    pieces.push([key, key, total, false])
    continue
  }
  const n = halfEven(total / target)
  const size = total / n
  let cur = []
  let acc = 0
  for (const [label, w] of units) {
    cur.push(label)
    acc += w
    if (acc >= size && label !== units.at(-1)[0]) {
      pieces.push([cur[0], cur.at(-1), acc, true])
      cur = []
      acc = 0
    }
  }
  if (cur.length) pieces.push([cur[0], cur.at(-1), acc, true])
}

const book = (label) => label.split('.').slice(0, depth - 1).join('.')
const pages = []
let cur = []
for (const p of pieces) {
  const words = cur.reduce((a, x) => a + x[2], 0)
  if (cur.length && (p[3] || cur.at(-1)[3] || words + p[2] > target * 1.3 ||
      book(cur[0][0]) !== book(p[0]) || words >= target * 0.85)) {
    pages.push(cur)
    cur = []
  }
  cur.push(p)
}
if (cur.length) pages.push(cur)

for (const page of pages) {
  const a = page[0][0]
  const b = page.at(-1)[1]
  console.log(a === b ? a : `${a}-${b}`, page.reduce((s, x) => s + x[2], 0))
}
process.stderr.write(`${pages.length} pages\n`)
