#!/usr/bin/env node
const fs = require('fs')
const { usage, fail, takeFlag } = require('./lib/common')

const USAGE = `
Apply [old, new] pairs to a file, in order. Each old must match exactly once at its turn.

usage: node tools/replace.js [--dry-run] <file> <pairs.json>

--dry-run: check every pair against a copy in memory and report, without writing.
`

const args = process.argv.slice(2)
const dry = takeFlag(args, '--dry-run')
usage(USAGE, args.length === 2)
const [file, pairsPath] = args
let text = fs.readFileSync(file, 'utf8')
const pairs = JSON.parse(fs.readFileSync(pairsPath, 'utf8'))
const bad = []
pairs.forEach((pair, i) => {
  if (!Array.isArray(pair) || pair.length !== 2 || !pair.every((x) => typeof x === 'string')) {
    bad.push(`pair ${i + 1}: not an [old, new] pair of strings`)
    return
  }
  const [oldS, newS] = pair
  const n = oldS ? text.split(oldS).length - 1 : 0
  if (n !== 1) {
    bad.push(`pair ${i + 1}: ${n} matches: ${oldS}`)
    return
  }
  text = text.replace(oldS, () => newS)
})
if (bad.length) fail(bad.join('\n'))
if (dry) console.log(`OK: ${pairs.length} pairs apply cleanly`)
else {
  fs.writeFileSync(file, text)
  console.log(`${pairs.length} replacements`)
}
