#!/usr/bin/env node
const fs = require('fs')
const { join } = require('path')
const buildHtml = require('./helpers/buildHtml')
const Repository = require('./helpers/Repository')
const { SITE_URL, BOOKS_DIR, STATIC_DIR, PUBLIC_DIR, STYLE_PATH, SCRIPT_PATH } = require('./helpers/consts')

const book = process.argv[2]
const singlePage = process.argv[3] === 'single'
const books = book ? [book] : fs.readdirSync(BOOKS_DIR).filter((name) => new Repository(name).published)

fs.rmSync(PUBLIC_DIR, { recursive: true, force: true })
fs.cpSync(STATIC_DIR, PUBLIC_DIR, { recursive: true })
fs.mkdirSync(join(PUBLIC_DIR, 'css'), { recursive: true })
fs.copyFileSync(STYLE_PATH, join(PUBLIC_DIR, 'css', 'main.css'))
fs.mkdirSync(join(PUBLIC_DIR, 'js'), { recursive: true })
fs.copyFileSync(SCRIPT_PATH, join(PUBLIC_DIR, 'js', 'theme.js'))

const urls = [SITE_URL]
for (const name of books) {
  console.log(`> ${name}`)
  urls.push(...buildHtml(name, { singlePage }))
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  ''
].join('\n')
fs.writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), sitemap)
