#!/usr/bin/env node
const { join } = require('path')
const buildHtml = require('./helpers/buildHtml')
const buildCSS = require('./helpers/buildCss')
const pull = require('./helpers/pull')

const repos = process.argv[2]
const singlePage = process.argv[3] === 'single'
build(repos, {singlePage}).catch(console.error)

async function build (repos, options = {}) {
  const {
    singlePage
  } = options
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
  await buildCSS(cssDistDir)
}

function showUsage () {
  console.log(`
Build repository in the CCJ project.
Usage:
  $ ./ci/build.js {repository-name}
Example:
  $ ./ci/build.js ever-increasing-faith
`)
}
