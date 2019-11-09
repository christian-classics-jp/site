#!/usr/bin/env node
const { join } = require('path')
const { execSync } = require('child_process')
const fs = require('fs')
const mkdirp = require('mkdirp')

process.chdir(join(__dirname, '..'))

mkdirp.sync('repos')

const repos = [
  'ever-increasing-faith',
  'faith-that-prevails',
  'andrew-murray-humility',
  'first-clement',
  'pilgrims-progress',
  'incarnation',
  'christian-pilgrim',
  'wesley-sermons'
]

const cloned = fs.readdirSync('repos')

repos.forEach(repo => {
  if (cloned.includes(repo)) {
    return
  }
  const command = `git clone https://github.com/christian-classics-jp/${repo}.git`
  console.log('>', command)
  const out = execSync(command, {
    cwd: join(__dirname, '../repos')
  }).toString()
  console.log(out)
})
