#!/usr/bin/env node
const { join } = require('path')
const { execSync } = require('child_process')
const mkdirp = require('mkdirp')

process.chdir(join(__dirname, '..'))

mkdirp.sync('repos')

// TODO git clone ...
