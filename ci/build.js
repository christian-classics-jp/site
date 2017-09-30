#!/usr/bin/env node
const { join } = require('path')
const co = require('co')
const buildHtml = require('./helpers/buildHtml')
const buildCSS = require('./helpers/buildCss')
const pull = require('./helpers/pull')

co(function * () {
  const repos = process.argv[2]
  const singlePage = process.argv[3] === 'single'
  if (singlePage) {
    console.log('Single page mode')
  }
  if (!repos) {
    showUsage()
    process.exit(0)
  }

  pull(repos)

  buildHtml(repos, {singlePage})

  const cssDistDir = join(__dirname, `../docs/${repos}/css`)
  yield buildCSS(cssDistDir)
}).catch(e => console.error(e))

function showUsage () {
  console.log(`
Build repository in the CCJ project.
Usage:
  $ ./ci/build.js {repository-name}
Example:
  $ ./ci/build.js ever-increasing-faith
`)
}
