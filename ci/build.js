#!/usr/bin/env node
const { execSync } = require('child_process')
const { join } = require('path')
const fs = require('fs')
const co = require('co')
const buildHtml = require('./helpers/build-html')
const buildCSS = require('./helpers/build-css')

co(function * () {
  let repos = process.argv[2]
  if (!repos) {
    showUsage()
    process.exit(0)
  }

  let message = execSync('git pull', { cwd: join(__dirname, `../repos/${repos}`) })
  console.log(message.toString())

  // --- Build HTML ---

  // 各レポジトリの src/{chapter名等}/jp.md に記事がある
  let names = fs.readdirSync(join(__dirname, `../repos/${repos}/src`))
  let markdowns = names.map((name) => ({
    path: join(__dirname, `../repos/${repos}/src/${name}/jp.md`),
    name
  }))

  let readme = fs.readFileSync(join(__dirname, `../repos/${repos}/README.md`)).toString()
  // '# title' => 'title'
  let siteTitle = readme.split('\n')[0].slice(1).trim()
  let distDir = join(__dirname, `../doc/${repos}`)
  yield buildHtml(siteTitle, markdowns, distDir)

  // --- Build CSS ---

  let cssDistDir = join(__dirname, `../doc/${repos}/css`)
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
