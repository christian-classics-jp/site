#!/usr/bin/env node

const fs = require('fs')
const { join } = require('path')
const { execFileSync } = require('child_process')
const { BOOKS_DIR } = require('./helpers/consts')

const SITE_PATHS = ['static/', 'assets/', 'ci/', 'package.json', 'yarn.lock', '.github/workflows/']

const [before, after] = process.argv.slice(2)
console.log(shouldPublish(before, after) ? 'true' : 'false')

function shouldPublish (before, after) {
  if (!before || /^0+$/.test(before)) {
    return true
  }
  const changed = execFileSync('git', ['diff', '--name-only', before, after], { encoding: 'utf-8' })
    .split('\n')
    .filter(Boolean)
  return changed.some((path) => SITE_PATHS.some((prefix) => path.startsWith(prefix)) || isPublishedBookPath(path))
}

function isPublishedBookPath (path) {
  const [top, name, sub] = path.split('/')
  return top === 'books' && sub !== 'research' && fs.existsSync(join(BOOKS_DIR, name, 'book.json'))
}
