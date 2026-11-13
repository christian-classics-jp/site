#!/usr/bin/env node
const fs = require('fs')
const { usage, fail } = require('./lib/common')

const USAGE = `
Move words between labeled lines of a base text, as listed in a JSON file.

usage: node tools/relabel.js <base.txt> <moves.json>

moves.json: [{"from": label, "to": label, "words": n, "pos": "head"|"tail", "expect": "…"?}]
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 2)
const [file, spec] = args
const moves = JSON.parse(fs.readFileSync(spec, 'utf8'))
const lines = fs.readFileSync(file, 'utf8').split('\n').filter(Boolean)
const order = lines.map((l) => l.split(' ', 1)[0])
const text = new Map(lines.map((l) => {
  const i = l.indexOf(' ')
  return [l.slice(0, i), l.slice(i + 1)]
}))
for (const m of moves) {
  const { from: src, to: dst, words: n, pos } = m
  const w = text.get(src).split(' ')
  let frag
  if (pos === 'head') {
    frag = w.slice(0, n).join(' ')
    text.set(src, w.slice(n).join(' '))
  } else {
    frag = w.slice(-n).join(' ')
    text.set(src, w.slice(0, -n).join(' '))
  }
  if (m.expect && m.expect !== frag) fail(`mismatch ${src}->${dst}: '${frag}'`)
  if (!text.has(dst)) {
    text.set(dst, frag)
    order.splice(order.indexOf(src) + (pos === 'tail' ? 1 : 0), 0, dst)
  } else if (pos === 'head') text.set(dst, text.get(dst) + ' ' + frag)
  else text.set(dst, frag + ' ' + text.get(dst))
  console.log(src, '->', dst, frag)
}
fs.writeFileSync(file, order.map((k) => `${k} ${text.get(k)}`).join('\n') + '\n')
