#!/usr/bin/env node
const co = require('co')
const fs = require('fs')
const { execSync } = require('child_process')
const { join } = require('path')
const mkdirp = require('mkdirp')
const compiler = require('node-sass')
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const { STYLE_DIR } = require('./consts')

function buildCSS (distDir) {
  return co(function * () {
    mkdirp.sync(distDir)
    execSync(`cp node_modules/spectre.css/dist/spectre.min.css ${distDir}`)
    let styleNames = fs.readdirSync(STYLE_DIR)
    let scssList = styleNames.map(file => {
      let scss = fs.readFileSync(join(STYLE_DIR, file)).toString()
      return scss
    })

    let cssNames = styleNames.map(file => file.split('.')[0] + '.css')
    let cssList = yield scssList.map(scss => co(function * () {
      return yield compile(scss)
    }))

    for (let i = 0; i < cssNames.length; i++) {
      fs.writeFileSync(join(distDir, cssNames[i]), cssList[i])
    }
  }).catch(err => console.error(err))
}

/**
 * scss to css
 */
function compile (scss) {
  return co(function * () {
    let { css } = yield new Promise((resolve, reject) =>
      compiler.render({ data: scss }, (err, result) =>
        err ? reject(err) : resolve(result)
      )
    )
    let prefixedCss = yield postcss([ autoprefixer ]).process(css.toString())
    return prefixedCss.css
  })
}

if (!module.parent) {
  buildCSS(join(__dirname, '../..', 'docs/css'))
}

module.exports = buildCSS
