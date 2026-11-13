#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')
const { ROOT, usage, fail, escapeRe } = require('./lib/common')

const USAGE = `
Look up the Japanese Colloquial Bible (口語訳, 1955) in ../bible-api.

usage:
  node tools/bible.js <ref> [<ref> ...]     e.g. Gen.18.1-3 Rom.8.18 Ps.90.4
  node tools/bible.js --find <語句>          print the verses that contain the phrase

A ref is <Book>.<chapter>.<verse>[-<last verse>] with the English abbreviations of bible-api
(Gen, Exod, Lev, Num, Deut, Josh, Judg, Ruth, 1Sam, 2Sam, 1Kgs, 2Kgs, 1Chr, 2Chr, Ezra, Neh,
Esth, Job, Ps, Prov, Eccl, Song, Isa, Jer, Lam, Ezek, Dan, Hos, Joel, Amos, Obad, Jonah, Mic,
Nah, Hab, Zeph, Hag, Zech, Mal, Matt, Mark, Luke, John, Acts, Rom, 1Cor, 2Cor, Gal, Eph, Phil,
Col, 1Thess, 2Thess, 1Tim, 2Tim, Titus, Phlm, Heb, Jas, 1Pet, 2Pet, 1John, 2John, 3John, Jude, Rev).
The apocrypha are not in 口語訳; quote them from the Septuagint.
`

const DATA = path.join(path.dirname(ROOT), 'bible-api', 'mysql', 'sql', 'create-table.sql.tar.gz')
const args = process.argv.slice(2)
usage(USAGE, args.length > 0)
if (!fs.existsSync(DATA)) fail(`${DATA} not found. Clone it first: git clone https://github.com/FujiHaruka/bible-api.git ../bible-api`)

const search = (pattern) => spawnSync('rg', ['-z', '-a', '-o', pattern, DATA], { encoding: 'utf8', maxBuffer: 1 << 26 })
  .stdout.split('\n').filter(Boolean)
const unpack = (line) => {
  const body = line.slice(2, -1)
  const i = body.indexOf("', '")
  return [body.slice(0, i), body.slice(i + 4)]
}

if (args[0] === '--find') {
  usage(USAGE, args.length > 1)
  const phrase = escapeRe(args.slice(1).join(' '))
  for (const line of search(`\\('[^']+', '[^']*${phrase}[^']*'`)) console.log(unpack(line).join('\t'))
} else {
  const keys = []
  for (const ref of args) {
    const m = /^([1-3]?[A-Za-z]+)\.(\d+)\.(\d+)(?:-(\d+))?$/.exec(ref)
    if (!m) fail(`bad ref '${ref}'\n${USAGE}`)
    const a = parseInt(m[3], 10)
    const b = parseInt(m[4] || m[3], 10)
    for (let v = a; v <= b; v++) keys.push(`${m[1]}.${m[2]}.${v}`)
  }
  const found = new Map()
  for (const line of search(`\\('(?:${keys.map(escapeRe).join('|')})', '[^']*'`)) {
    const [k, text] = unpack(line)
    if (!found.has(k)) found.set(k, text)
  }
  for (const k of keys) console.log(`${k}\t${found.get(k) ?? '(not found)'}`)
}
