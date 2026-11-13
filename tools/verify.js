#!/usr/bin/env node
const fs = require('fs')
const { LABEL, sourceLines, jaLabel, jaPrefix, usage, chars } = require('./lib/common')

const USAGE = `
Check a both.md against the base text and the notation rules of the root AGENTS.md.

usage: node tools/verify.js <both.md> <source.txt> <spec>

ERROR (fix before review): base-text lines changed, missing or reordered; a base-text line not
followed by its translation; forbidden marks (？ ―― … and half-width ? !); no full-width space
after ！ when the sentence goes on; brackets unbalanced over the whole file.
WARN (fix unless the book's AGENTS.md says otherwise): sentences over 60 characters; footnotes
over 40 characters; a citation with Arabic numerals, 章・節, or a full book name; a citation
placed after 。; words the root AGENTS.md writes in kana (全て, 出来る, 下さい, 頂く, 又); 「 inside 「;
brackets unbalanced in one line.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 3)
const [both, src, spec] = args
const expectedLines = sourceLines(src, spec).map(([, l]) => l)
const lines = fs.readFileSync(both, 'utf8').split('\n')
const errors = []
const warnings = []

const found = lines.map((l, i) => [i, l]).filter(([, l]) => LABEL.test(l))
const got = found.map(([, l]) => l)
if (got.join('\n') !== expectedLines.join('\n')) {
  for (let n = 0; n < expectedLines.length; n++) {
    const a = expectedLines[n]
    const b = got[n] ?? ''
    if (a !== b) {
      errors.push(`base text differs at verse #${n + 1}:\n  expected: ${a.slice(0, 100)}\n  got:      ${b.slice(0, 100)}`)
      break
    }
  }
  if (got.length !== expectedLines.length) errors.push(`base text has ${expectedLines.length} verses, both.md has ${got.length}`)
}

for (const [i, l] of found) {
  const label = LABEL.exec(l)[1]
  const nxt = lines[i + 1] ?? ''
  if (!nxt.startsWith(jaPrefix(label) + jaLabel(label) + ' ')) {
    errors.push(`line ${i + 2}: translation for ${label} missing (got '${nxt.slice(0, 40)}')`)
  }
}

const KN = '一二三四五六七八九十〇'
const PAIRS = ['「」', '『』', '（）']
const ARABIC_CITE = /（[^）]*[ぁ-んァ-ヶ一-龥][0-9０-９]+[:：・][0-9０-９]+[^）]*）/
const CHAPTER_VERSE = new RegExp(`[${KN}]+章[${KN}]+節`)
const FULL_NAME = new RegExp(`（[^）]*(使徒行伝|[ァ-ヶ]{2,6}書|[ァ-ヶ]{2,6}による福音書)[${KN}]+[・章]`)
const CITE_AFTER_STOP = new RegExp(`。（[^）]*[${KN}]+[・章]`)
const HIRAKU = /全て|出来(?:る|ない|ず|ま|た|て|れ)|下さ(?:い|る|っ|ら)|頂(?:く|き|い|け)|又(?:、|は|も)/
const BANG = /！(?=[^\s」』）！　])|！ /
const FOOTNOTE = /\^\[([^\]]*)\]/g
const count = (s, c) => s.split(c).length - 1

function nestedKagi (text) {
  const stack = []
  for (const ch of text) {
    if (ch === '「' || ch === '『') {
      if (ch === '「' && stack.at(-1) === '「') return true
      stack.push(ch)
    } else if ((ch === '」' || ch === '』') && stack.length) stack.pop()
  }
  return false
}

lines.forEach((l, i) => {
  if (LABEL.test(l) || l.startsWith('// ') || l.startsWith('#') || !l.trim()) return
  const n = i + 1
  for (const mark of ['？', '――', '…', '?', '!']) if (l.includes(mark)) errors.push(`line ${n}: forbidden ${mark}`)
  if (BANG.test(l.trimEnd())) errors.push(`line ${n}: put a full-width space after ！ when the sentence goes on`)
  for (const m of l.matchAll(FOOTNOTE)) {
    if (chars(m[1]) > 40) warnings.push(`line ${n}: footnote ${chars(m[1])} chars (max 40): ${[...m[1]].slice(0, 20).join('')}…`)
  }
  const plain = l.replace(FOOTNOTE, '')
  let m
  if ((m = ARABIC_CITE.exec(plain))) warnings.push(`line ${n}: citation with Arabic numerals: ${m[0]}`)
  if ((m = CHAPTER_VERSE.exec(plain))) warnings.push(`line ${n}: write 章・節 citations as 書名 + 漢数字・漢数字: ${m[0]}`)
  if ((m = FULL_NAME.exec(plain))) warnings.push(`line ${n}: use the short book name in citations: ${m[1]}`)
  if ((m = HIRAKU.exec(plain))) warnings.push(`line ${n}: write in kana (ひらく語): ${m[0]}`)
  if (CITE_AFTER_STOP.test(plain)) warnings.push(`line ${n}: citation after 。 (put it before 。)`)
  if (nestedKagi(plain)) warnings.push(`line ${n}: 「 inside 「 (a quotation inside a quotation takes 『』)`)
  for (const [o, c] of PAIRS) {
    if (count(plain, o) !== count(plain, c)) warnings.push(`line ${n}: unbalanced ${o}${c} (fine only if a quotation spans verses)`)
  }
  const body = plain.replace(/^\S+ /, '')
  for (let s of body.split(/(?<=[。！])/)) {
    s = s.replace(/（[^）]*）/g, '')
    if (chars(s) > 60) warnings.push(`line ${n}: ${chars(s)} chars: ${[...s].slice(0, 30).join('')}…`)
  }
})

const jaText = lines.filter((l) => !LABEL.test(l) && !l.startsWith('// ')).map((l) => l.replace(FOOTNOTE, '')).join('\n')
for (const [o, c] of PAIRS) {
  if (count(jaText, o) !== count(jaText, c)) errors.push(`whole file: unbalanced ${o}${c}`)
}

for (const w of warnings) console.log('WARN', w)
for (const e of errors) console.log('ERROR', e)
console.log(errors.length ? `${errors.length} errors` : 'OK')
process.exit(errors.length ? 1 : 0)
