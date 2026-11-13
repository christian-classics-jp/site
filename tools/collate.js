#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { diffArrays } = require('diff')
const { ROOT, sourceLines, usage, fail, takeOpt, takeFlag } = require('./lib/common')

const USAGE = `
List where a digitized base text differs from the OCR of its printed edition.

usage: node tools/collate.js <base.txt> <spec> <ocr.txt> <first>-<last> [options]

<first>-<last>: the OCR lines that hold the printed text of <spec> (from pages.json \`print\`).
Prints one candidate per line: base label, kind, base words, OCR words, OCR line. Each candidate
is only a lead: OCR errs more often than the digitization, so check every one on the page image
before recording it. The last line (stderr) gives the similarity; below 0.75 the OCR is too poor
for a full candidate list.

options:
  --skip REGEX       drop OCR lines matching REGEX (running heads, apparatus); repeatable
  --keep-latin       keep OCR lines with more Latin than Greek letters (dropped by default
                     when the base text is Greek, since they are notes and apparatus)
  --ignore-accents   compare without accents and breathings (first pass on a poor OCR)
  --ignore-punct     compare without punctuation
  --max-gap N        report OCR-only or base-only runs longer than N words as one line (default 6)
`

const GREEK = /[Ͱ-Ͽἀ-῿]/g
const LATIN = /[A-Za-z]/g
const PUNCT = '.,·;:·;'
const PUNCT_SET = new Set(PUNCT)
const SPLIT = new RegExp(`[^${PUNCT}]+|[${PUNCT}]`, 'g')
const NOISE = /^[\dΙΧVXLC.,·;:\s͂]*$/
const APOS = { '᾽': '᾿', '’': '᾿', "'": '᾿', 'ʼ': '᾿', '‘': '᾿', '̓': '᾿' }
const countOf = (s, re) => (s.match(re) || []).length
const isUpper = (c) => c !== c.toLowerCase() && c === c.toUpperCase()
const stripMarks = (s) => s.normalize('NFD').replace(/\p{M}/gu, '').normalize('NFC')

function norm (s, accents) {
  s = s.normalize('NFC').replaceAll('ϑ', 'θ').replaceAll('ϕ', 'φ').replaceAll('ϰ', 'κ').replaceAll('ϱ', 'ρ')
    .replaceAll('·', '·').replaceAll(';', ';')
  for (const [a, b] of Object.entries(APOS)) s = s.replaceAll(a, b)
  if (/^[᾿῾][\p{L}\p{N}_]/u.test(s)) s = s.slice(1)
  const first = [...s][0] || ''
  if (isUpper(first)) {
    const head = first.normalize('NFD').replace(/[̓̔]/g, '').normalize('NFC')
    s = head + s.slice(first.length)
  }
  if (!accents) s = stripMarks(s).toLowerCase()
  return s
}

function tokens (text, accents, punct) {
  const out = []
  for (const raw of text.replaceAll('"', '·').split(/\s+/).filter(Boolean)) {
    for (let p of raw.match(SPLIT) || []) {
      if (PUNCT_SET.has(p) && !punct) continue
      p = norm(p, accents)
      if (p.trim()) out.push(p)
    }
  }
  return out
}

const args = process.argv.slice(2)
const skips = []
let s
while ((s = takeOpt(args, '--skip'))) skips.push(new RegExp(s))
const maxGap = parseInt(takeOpt(args, '--max-gap', '6'), 10)
const accents = !takeFlag(args, '--ignore-accents')
const punct = !takeFlag(args, '--ignore-punct')
const keepLatin = takeFlag(args, '--keep-latin')
usage(USAGE, args.length === 4 && args[3].includes('-'))
const [base, spec, ocr, rng] = args
const [first, last] = rng.split('-').map((x) => parseInt(x, 10))

const bTok = []
const bLab = []
let greekBase = 0
for (const [label, line] of sourceLines(path.resolve(ROOT, base), spec)) {
  const text = line.includes(' ') ? line.slice(line.indexOf(' ') + 1) : ''
  if (countOf(text, GREEK) > countOf(text, LATIN)) greekBase++
  for (const t of tokens(text, accents, punct)) {
    bTok.push(t)
    bLab.push(label)
  }
}
if (!bTok.length) fail(`no base text for ${spec}`)
const greekMode = greekBase > 0 && !keepLatin

const oTok = []
const oLine = []
const lines = fs.readFileSync(path.resolve(ROOT, ocr), 'utf8').split('\n')
let carry = ''
let dropped = 0
for (let n = first; n <= Math.min(last, lines.length); n++) {
  let line = lines[n - 1].trim()
  if (!line || /^[\dIVXLCivxlc\s.\-—*]+$/.test(line) || skips.some((re) => re.test(line))) {
    if (line) dropped++
    continue
  }
  if (greekMode && countOf(line, LATIN) > countOf(line, GREEK)) {
    dropped++
    continue
  }
  if (carry) {
    line = carry + line
    carry = ''
  }
  if (line.endsWith('-') && !line.endsWith(' -')) {
    const body = line.slice(0, -1)
    const i = body.lastIndexOf(' ')
    carry = i === -1 ? body : body.slice(i + 1)
    line = i === -1 ? '' : body.slice(0, i)
  }
  for (const t of tokens(line, accents, punct)) {
    oTok.push(t)
    oLine.push(n)
  }
}
if (carry) {
  for (const t of tokens(carry, accents, punct)) {
    oTok.push(t)
    oLine.push(last)
  }
}

const parts = diffArrays(bTok, oTok)
const ops = []
let a = 0
let c = 0
let matched = 0
for (let i = 0; i < parts.length; i++) {
  const p = parts[i]
  if (!p.added && !p.removed) {
    a += p.count
    c += p.count
    matched += p.count
    continue
  }
  const a1 = a
  const c1 = c
  while (i < parts.length && (parts[i].added || parts[i].removed)) {
    if (parts[i].removed) a += parts[i].count
    else c += parts[i].count
    i++
  }
  i--
  ops.push([a > a1 && c > c1 ? 'replace' : (a > a1 ? 'delete' : 'insert'), a1, a, c1, c])
}

let count = 0
for (const [op, a1, a2, c1, c2] of ops) {
  const label = a1 < bLab.length ? bLab[a1] : bLab.at(-1)
  const where = c1 < oLine.length ? `l. ${oLine[c1]}` : (oLine.length ? `l. ${oLine.at(-1)}` : '')
  const bw = bTok.slice(a1, a2).join(' ')
  const ow = oTok.slice(c1, c2).join(' ')
  if ((op === 'insert' || op === 'delete') && NOISE.test(bw + ow)) continue
  if (op === 'insert' && c2 - c1 > maxGap) console.log(`${label}\tOCR only\t${c2 - c1} words\t${where}–${oLine[c2 - 1]}`)
  else if (op === 'delete' && a2 - a1 > maxGap) console.log(`${label}\tbase only\t${a2 - a1} words: ${bTok.slice(a1, a1 + 4).join(' ')} …\t${where}`)
  else console.log(`${label}\t${op}\t${bw || '—'}\t${ow || '—'}\t${where}`)
  count++
}
const ratio = (2 * matched) / (bTok.length + oTok.length)
process.stderr.write(`${count} candidates; base ${bTok.length} tokens, OCR ${oTok.length} tokens, ${dropped} OCR lines dropped; similarity ${ratio.toFixed(2)}\n`)
