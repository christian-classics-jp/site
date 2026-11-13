#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { sourceLines, jaLabel, jaPrefix, group, usage, fail } = require('./lib/common')

const USAGE = `
Build both.md from the base text and a translation file.

usage: node tools/build.js <source.txt> <spec> <ja.txt> <out both.md>

spec: comma-separated chapter keys or ranges of the base text labels, e.g. \`11-15\`, \`3.1-3.3\`, \`20-22,EP\`.
ja.txt: \`# 見出し\` lines first, then one line per base-text verse starting with the label in
\`11:1\` form. \`// \` lines are kept right after the preceding translation line.
Labels that start with a letter get the \`% \` prefix in both.md automatically.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 4)
const [src, spec, jaPath, out] = args
const greek = sourceLines(src, spec)
if (!greek.length) fail(`no base-text lines match spec '${spec}' in ${src}`)
const headings = []
const ja = new Map()
let last = null
for (const line of fs.readFileSync(jaPath, 'utf8').split('\n')) {
  if (!line.trim()) continue
  if (line.startsWith('#')) headings.push(line)
  else if (line.startsWith('// ')) {
    if (last === null) fail('a // line comes before the first translation line')
    ja.get(last).push(line)
  } else {
    const label = line.split(' ', 1)[0]
    if (ja.has(label)) fail(`duplicate translation label ${label}`)
    ja.set(label, [line])
    last = label
  }
}

const wanted = new Set(greek.map(([l]) => jaLabel(l)))
const errors = greek.filter(([l]) => !ja.has(jaLabel(l))).map(([l]) => `missing translation for ${jaLabel(l)}`)
for (const l of ja.keys()) if (!wanted.has(l)) errors.push(`translation label not in base text: ${l}`)
if (errors.length) fail(errors.join('\n'))

const body = []
let prev = null
for (const [label, line] of greek) {
  if (prev !== null && group(label) !== group(prev)) body.push('')
  body.push(line)
  const [first, ...rest] = ja.get(jaLabel(label))
  body.push(jaPrefix(label) + first, ...rest)
  prev = label
}
const text = headings.join('\n') + (headings.length ? '\n\n' : '') + body.join('\n') + '\n'
fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true })
fs.writeFileSync(out, text)
console.log(`wrote ${out}: ${greek.length} verses`)
