#!/usr/bin/env node
const path = require('path')
const { usage, fail } = require('./lib/common')
const { download, sha16 } = require('./lib/download')

const USAGE = `
Fetch one page image (or a region of it) from the archive.org IIIF server.

usage: node tools/iiif-crop.js <identifier> <page> <region> <outdir>

page: the IIIF page number (e.g. 0369). region: full | x,y,w,h (pixels) | pct:x,y,w,h (percent).
Saves <outdir>/<page>_<region>.jpg (not fetched again if it exists) and prints its path and the
first 16 hex digits of its SHA-256.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 4)
const [ident, page, region, outdir] = args
const out = path.join(outdir, `${page}_${region}.jpg`)
const url = `https://iiif.archive.org/iiif/${ident}$${page}/${region}/full/0/default.jpg`
download(url, out, 6)
  .then(() => console.log(out, sha16(out)))
  .catch((e) => fail(e.message))
