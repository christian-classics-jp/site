#!/usr/bin/env node

const {chromium} = require('playwright')
const {PDFDocument, ReadingDirection} = require('pdf-lib')
const fs = require('fs')
const {dirname} = require('path')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const pdfOption = require('../assets/pdf/config')
const compileMarkdown = require('./helpers/compileMarkdown')
const markUprightDigits = require('./helpers/markUprightDigits')
const {BOOKS_DIR, SITE_URL, EPUB_BOOK_PATH, PDF_TEMPLATE_PATH, PDF_MATTER_TEMPLATE_PATH, PDF_CSS_PATH} = require('./helpers/consts')
const {AUTHOR, PUBLISHER, LANG} = require(EPUB_BOOK_PATH)
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
const renderPage = readTmpl(PDF_TEMPLATE_PATH)
const renderMatter = readTmpl(PDF_MATTER_TEMPLATE_PATH)
const css = fs.readFileSync(PDF_CSS_PATH, {encoding: 'utf-8'})
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
  const chapters = markdowns.map((markdown, i) => `<section class="chapter">${compileMarkdown(markdown, {idPrefix: `${articleNames[i]}-`, vertical: true})}</section>`)
  const now = new Date()
  const matter = renderMatter({
    title: book.title,
    author: book.author,
    translator: AUTHOR,
    publisher: PUBLISHER,
    edition: markUprightDigits(`${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日版`),
    siteUrl: `${SITE_URL}${repos.repos}/`,
    reposUrl: repos.url
  })

  const body = await PDFDocument.load(await print(browser, book.title, chapters.join('\n'), {
    outline: true,
    displayHeaderFooter: true,
    headerTemplate: marginTemplate(hbs.escapeExpression(repos.title)),
    footerTemplate: marginTemplate('- <span class="pageNumber"></span> -')
  }))
  const matterDoc = await PDFDocument.load(await print(browser, book.title, matter, {}))
  const [titlePage, colophonPage] = await body.copyPages(matterDoc, [0, 1])
  body.insertPage(0, titlePage)
  body.addPage(colophonPage)

  body.setTitle(book.title, {showInWindowTitleBar: true})
  body.setAuthor(`${book.author}（${AUTHOR} 訳）`)
  body.setLanguage(LANG)
  body.catalog.getOrCreateViewerPreferences().setReadingDirection(ReadingDirection.R2L)
  fs.mkdirSync(dirname(repos.pdfPath), {recursive: true})
  fs.writeFileSync(repos.pdfPath, await body.save())
}

async function print (browser, title, data, options) {
  const page = await browser.newPage()
  await page.setContent(renderPage({lang: LANG, title, css, data}))
  await page.evaluate(() => document.fonts.ready)
  const printed = await page.pdf({...pdfOption, tagged: true, ...options})
  await page.close()
  return printed
}
