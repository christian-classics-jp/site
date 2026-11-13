#!/usr/bin/env node
const path = require('path')
const { ROOT, usage, fail } = require('./lib/common')
const { download, sha16 } = require('./lib/download')

const USAGE = `
Download a public-domain source into cache/ once, and print the line for research/sources.md.

usage: node tools/fetch.js <url> [<path under cache/>]

Without a path, the file goes to cache/<host>/<path of the URL> (archive.org downloads go to
cache/archive.org/<identifier>/<file>). An existing file is not downloaded again.
Prints: the cache path, the first 16 hex digits of its SHA-256, and today's date.
`

const args = process.argv.slice(2)
usage(USAGE, args.length === 1 || args.length === 2)
const url = new URL(args[0])
let rel
if (args[1]) rel = args[1].startsWith('cache/') ? args[1] : path.join('cache', args[1])
else {
  const parts = decodeURIComponent(url.pathname).split('/').filter(Boolean)
  rel = url.hostname.endsWith('archive.org') && parts.length >= 3 && parts[0] === 'download'
    ? path.join('cache', 'archive.org', ...parts.slice(1))
    : path.join('cache', url.hostname, ...parts)
}
const out = path.join(ROOT, rel)
download(url.href, out)
  .then(() => console.log(`${rel}\t${sha16(out)}\t${new Date().toLocaleDateString('sv-SE')}`))
  .catch((e) => fail(e.message))
