#!/usr/bin/env node

const {chromium} = require('playwright')
const fs = require('fs')
const {dirname} = require('path')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const pdfOption = require('../assets/pdf/config')
const compileMarkdown = require('./helpers/compileMarkdown')
const {BOOKS_DIR, PDF_TEMPLATE_PATH, PDF_CSS_PATH, SURFACE_TEMPLATE_PATH} = require('./helpers/consts')
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
const pageSpliter = '<div class="page-split"></div>\n'
const marginTemplate = (html) => `<div style="width: 100%; font-family: 'Noto Serif CJK JP', serif; font-size: 9px; color: #444; text-align: center;">${html}</div>`

const book = process.argv[2]
const books = book ? [book] : fs.readdirSync(BOOKS_DIR)

main()

async function main () {
  const browser = await chromium.launch()
  try {
    for (const name of books) {
      const repos = new Repository(name)
      if (!repos.completed) continue
      console.log(`> ${name}`)
      await pdf(browser, repos)
    }
  } finally {
    await browser.close()
  }
}

async function pdf (browser, repos) {
  const markdowns = repos.articleNames.map(repos.readArticleMarkdown.bind(repos))
  const surfaceHtml = readTmpl(SURFACE_TEMPLATE_PATH)({
    reposUrl: repos.url
  })
  const htmls = [surfaceHtml].concat(markdowns.map((markdown, i) => compileMarkdown(markdown, {idPrefix: `${repos.articleNames[i]}-`})))
  const combined = htmls.join(pageSpliter)

  const html = readTmpl(PDF_TEMPLATE_PATH)({
    css: fs.readFileSync(PDF_CSS_PATH, {encoding: 'utf-8'}),
    data: combined
  })
  const page = await browser.newPage()
  await page.setContent(html)
  await page.evaluate(() => document.fonts.ready)
  fs.mkdirSync(dirname(repos.pdfPath), {recursive: true})
  await page.pdf({
    ...pdfOption,
    path: repos.pdfPath,
    displayHeaderFooter: true,
    headerTemplate: marginTemplate(hbs.escapeExpression(repos.title)),
    footerTemplate: marginTemplate('- <span class="pageNumber"></span> -')
  })
  await page.close()
}
