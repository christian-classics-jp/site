#!/usr/bin/env node
const fs = require('fs')
const { usage, fail } = require('./lib/common')

const USAGE = `
Join line ranges of an OCR text (archive.org _djvu.txt) into one line of running text, as the
starting point of a base text that is then corrected against the page images with tools/replace.js.
Use it where writing a long passage out in full is not possible (a well-known passage can be
stopped by the output filter); the corrections stay short pairs.

usage: node tools/ocr-lines.js <djvu.txt> <ranges> [--label L]

ranges: comma-separated line numbers or ranges of the OCR file, e.g. \`10504-10511,10526-10530\`.
Lines are taken in the given order. A leading line number (\`20 Ideo …\`) and a trailing marginal
number (\`una-10\`, \`col- 5\`) are dropped; a word broken at a line end with a hyphen is joined.
Blank lines are skipped. Everything else (apparatus, running heads inside a range, OCR misreadings)
is kept as it is, to be removed or corrected with tools/replace.js.
--label L: print \`L \` before the text (e.g. the chapter number, for tools/split-units.js).
Prints one line to stdout.
`

const args = process.argv.slice(2)
let label = null
const i = args.indexOf('--label')
if (i >= 0) { label = args[i + 1]; args.splice(i, 2) }
usage(USAGE, args.length === 2)
const [src, spec] = args

const lines = fs.readFileSync(src, 'utf8').split('\n')
const picked = []
for (const part of spec.split(',')) {
  const m = part.match(/^(\d+)(?:-(\d+))?$/)
  if (!m) fail(`bad range: ${part}`)
  const a = Number(m[1])
  const b = Number(m[2] || m[1])
  if (b < a || b > lines.length) fail(`range out of order or past the end: ${part}`)
  for (let n = a; n <= b; n++) picked.push(lines[n - 1])
}

let text = ''
for (let line of picked) {
  line = line.trim().replace(/^\d+\s+/, '').replace(/(\S)-\s*\d+$/, '$1-').replace(/\s+\d+$/, '').trim()
  if (!line) continue
  if (text.endsWith('-')) text = text.slice(0, -1) + line
  else text += (text ? ' ' : '') + line
}
console.log((label ? `${label} ` : '') + text)
