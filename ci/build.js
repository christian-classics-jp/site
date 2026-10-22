#!/usr/bin/env node
const fs = require('fs')
const { join } = require('path')
const buildHtml = require('./helpers/buildHtml')
const { BOOKS_DIR, STATIC_DIR, PUBLIC_DIR, STYLE_PATH, SCRIPT_PATH } = require('./helpers/consts')

const book = process.argv[2]
const singlePage = process.argv[3] === 'single'
const books = book ? [book] : fs.readdirSync(BOOKS_DIR)

fs.rmSync(PUBLIC_DIR, { recursive: true, force: true })
fs.cpSync(STATIC_DIR, PUBLIC_DIR, { recursive: true })
fs.mkdirSync(join(PUBLIC_DIR, 'css'), { recursive: true })
fs.copyFileSync(STYLE_PATH, join(PUBLIC_DIR, 'css', 'main.css'))
fs.mkdirSync(join(PUBLIC_DIR, 'js'), { recursive: true })
fs.copyFileSync(SCRIPT_PATH, join(PUBLIC_DIR, 'js', 'theme.js'))

for (const name of books) {
  console.log(`> ${name}`)
  buildHtml(name, { singlePage })
}
