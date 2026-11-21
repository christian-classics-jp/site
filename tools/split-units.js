#!/usr/bin/env node
const fs = require('fs')
const { usage, fail } = require('./lib/common')

const USAGE = `
Cut chapters transcribed from an edition without sections into numbered units, and append them
to a labeled base text (this translation's own section numbering).

usage: node tools/split-units.js <chapters.txt> <base.txt>

chapters.txt: one chapter per line, \`<chapter> <text>\` (e.g. \`2 Si certum est denique …\`).
Each chapter is cut at sentence ends (. ? ! and a closing quote after them; not at ; or :) into
units of at least 25 words, numbered 1, 2, …; a last piece under 12 words joins the unit before it.
A period after a praenomen abbreviation (M. Aemilius, Cn., Ti., Sex.), after Kal./Kalend., or after
a Roman numeral before a date word (XII. Kalend., III. Non., IV. Id.) is not a sentence end, nor is
an end followed by a dash (an exclamation inside — … ! — that the sentence goes on after).
The same word counts as tools/tei2labeled.js --split.
The lines \`<chapter>.<n> <unit>\` are appended to base.txt (created if missing). A chapter that is
already in base.txt, or one not after the last chapter there, is refused.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 2)
const [src, base] = args

const ABBR = /(?:^|\s)(?:[A-Z]|Cn|Ti|Sex|Sp|Ap|Kal|Kalend)\.$/
const DATE_NUM = /(?:^|\s)[IVXL]+\.$/
const DATE_WORD = /^(?:Kal|Non(?:as|is|ae)\b|Id(?:us|ibus)\b)/
const joins = (prev, next) => /^[—–]/.test(next) || ABBR.test(prev) || (DATE_NUM.test(prev) && DATE_WORD.test(next))
const words = (a) => a.join(' ').split(/\s+/).filter(Boolean).length

function units (text) {
  const parts = []
  for (const p of text.split(/(?<=[.?!][“”"'’]?)\s+/)) {
    if (parts.length && joins(parts[parts.length - 1], p)) parts[parts.length - 1] += ' ' + p
    else parts.push(p)
  }
  const res = []
  let cur = []
  for (const p of parts) {
    cur.push(p)
    if (words(cur) >= 25) {
      res.push(cur.join(' '))
      cur = []
    }
  }
  if (cur.length) {
    if (res.length && words(cur) < 12) res[res.length - 1] += ' ' + cur.join(' ')
    else res.push(cur.join(' '))
  }
  return res
}

const existing = fs.existsSync(base) ? fs.readFileSync(base, 'utf8').split('\n').filter(Boolean) : []
const have = new Set(existing.map((l) => l.split('.', 1)[0]))
let last = existing.length ? parseInt(existing[existing.length - 1].split('.', 1)[0], 10) : -1

const out = []
for (const line of fs.readFileSync(src, 'utf8').split('\n')) {
  const m = line.trim().match(/^(\d+)\s+(.+)$/)
  if (!m) {
    if (line.trim()) fail(`not \`<chapter> <text>\`: ${line.slice(0, 60)}`)
    continue
  }
  const ch = parseInt(m[1], 10)
  if (have.has(String(ch))) fail(`chapter ${ch} is already in ${base}`)
  if (ch <= last) fail(`chapter ${ch} does not come after chapter ${last}`)
  last = ch
  const text = m[2].replace(/\s+/g, ' ').trim()
  const us = units(text)
  us.forEach((u, i) => out.push(`${ch}.${i + 1} ${u}`))
  process.stdout.write(`${ch}: ${us.length} units, ${words([text])} words\n`)
}

const prefix = existing.length ? existing.join('\n') + '\n' : ''
fs.writeFileSync(base, prefix + out.join('\n') + '\n')
process.stdout.write(`wrote ${base}: ${existing.length + out.length} lines\n`)
