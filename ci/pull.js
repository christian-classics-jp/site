#!/usr/bin/env node
const pull = require('./helpers/pull')

const repos = process.argv[2]
if (!repos) {
  console.log(`
Usage:
  $ ./ci/pull.js <repos>
`)
  process.exit()
}
pull(repos)
