#!/usr/bin/env node

const {chromium} = require('playwright')
const {PDFDocument, ReadingDirection} = require('pdf-lib')
const fs = require('fs')
const {dirname} = require('path')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const pdfOption = require('../assets/pdf/config')
const compileMarkdown = require('./helpers/compileMarkdown')
const {BOOKS_DIR, EPUB_BOOK_PATH, PDF_TEMPLATE_PATH, PDF_CSS_PATH, SURFACE_TEMPLATE_PATH} = require('./helpers/consts')
const {AUTHOR, LANG} = require(EPUB_BOOK_PATH)
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
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
  const {articleNames, book} = repos
  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))
  const surfaceHtml = readTmpl(SURFACE_TEMPLATE_PATH)({
    reposUrl: repos.url
  })
  const chapterHtmls = markdowns.map((markdown, i) => compileMarkdown(markdown, {idPrefix: `${articleNames[i]}-`, vertical: true}))
  const sections = [`<section class="surface-page">${surfaceHtml}</section>`]
    .concat(chapterHtmls.map((html) => `<section class="chapter">${html}</section>`))

  const html = readTmpl(PDF_TEMPLATE_PATH)({
    lang: LANG,
    title: book.title,
    css: fs.readFileSync(PDF_CSS_PATH, {encoding: 'utf-8'}),
    data: sections.join('\n')
  })
  const page = await browser.newPage()
  await page.setContent(html)
  await page.evaluate(() => document.fonts.ready)
  const printed = await page.pdf({
    ...pdfOption,
    outline: true,
    tagged: true,
    displayHeaderFooter: true,
    headerTemplate: marginTemplate(hbs.escapeExpression(repos.title)),
    footerTemplate: marginTemplate('- <span class="pageNumber"></span> -')
  })
  await page.close()

  const doc = await PDFDocument.load(printed)
  doc.setTitle(book.title, {showInWindowTitleBar: true})
  doc.setAuthor(`${book.author}（${AUTHOR} 訳）`)
  doc.setLanguage(LANG)
  doc.catalog.getOrCreateViewerPreferences().setReadingDirection(ReadingDirection.R2L)
  fs.mkdirSync(dirname(repos.pdfPath), {recursive: true})
  fs.writeFileSync(repos.pdfPath, await doc.save())
}
