#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')
const { ROOT, usage } = require('./lib/common')

const USAGE = `
Turn a pandoc EPUB from bkv.unifr.ch (Bibliothek der Kirchenväter) into a text file with one
section per line, for reading a translation by line range.

usage: node tools/epub2txt.js <book.epub> <out.txt>

Headings: h2 (parts) become \`## <title>\`; h3 (chapters, Roman numerals) and h4 (sections) give
each paragraph the label \`<chapter>.<section>\` in Arabic numerals. Page links become [S. n],
footnote references [n], and the footnotes follow at the end as \`[n] <text>\`.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 2)
const [epub, out] = args.map((a) => path.resolve(ROOT, a))

const list = execFileSync('unzip', ['-Z1', epub], { encoding: 'utf8' }).split('\n')
const files = list.filter((f) => /\.xhtml$/.test(f) && !/nav\.xhtml$|title_page/.test(f)).sort()
const html = files.map((f) => execFileSync('unzip', ['-p', epub, f], { encoding: 'utf8', maxBuffer: 1 << 26 })).join('\n')

const roman = (s) => {
  const v = { I: 1, V: 5, X: 10, L: 50, C: 100 }
  let n = 0
  for (let i = 0; i < s.length; i++) n += v[s[i]] < (v[s[i + 1]] || 0) ? -v[s[i]] : v[s[i]]
  return n
}
const entities = (s) => s.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(+d))
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&')
const text = (s) => entities(s
  .replace(/<a [^>]*class="footnote-ref"[^>]*>(.*?)<\/a>/g, '[$1]')
  .replace(/<a [^>]*class="footnote-back"[^>]*>.*?<\/a>/g, '')
  .replace(/<a [^>]*href="[^"]*scans[^"]*"[^>]*>(.*?)<\/a>/g, '[$1]')
  .replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim()

const [body, notes = ''] = html.split(/<section[^>]*class="footnotes"[^>]*>/)
const lines = []
let chapter = 0
let section = 0
const re = /<h2[^>]*>([\s\S]*?)<\/h2>|<h3[^>]*>([\s\S]*?)<\/h3>|<h4[^>]*>([\s\S]*?)<\/h4>|<p[^>]*>([\s\S]*?)<\/p>/g
for (let m; (m = re.exec(body));) {
  if (m[1] !== undefined) lines.push(`## ${text(m[1])}`)
  else if (m[2] !== undefined) {
    const t = text(m[2])
    chapter = /^[IVXLC]+$/.test(t) ? roman(t) : chapter
    section = 0
  } else if (m[3] !== undefined) section = parseInt(text(m[3]), 10) || section
  else {
    const t = text(m[4])
    if (t) lines.push(chapter ? `${chapter}.${section} ${t}` : t)
  }
}
lines.push('', '## Anmerkungen')
const notesRe = /<li[^>]*id="fn(\d+)"[^>]*>([\s\S]*?)<\/li>/g
for (let m; (m = notesRe.exec(notes));) lines.push(`[${m[1]}] ${text(m[2])}`)
fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, lines.join('\n') + '\n')
console.log(`wrote ${path.relative(ROOT, out)}: ${lines.length} lines`)
