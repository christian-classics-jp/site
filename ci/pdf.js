#!/usr/bin/env node

const Pdf = require('html-pdf')
const marked = require('marked')
const fs = require('fs')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const pdfOption = require('../assets/pdf/config')
const convertToHtml = (markdown) => marked(markdown)
const {PDF_TEMPLATE_PATH, PDF_CSS_PATH, SURFACE_TEMPLATE_PATH} = require('./helpers/consts')
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
const pageSpliter = '<div class="page-split"></div>\n'

const repos = process.argv[2]
if (!repos) {
  console.log(`
Usage:
  $ ./ci/pdf.js <repos>
`)
  process.exit()
}

pdf(repos)

async function pdf (reposName) {
  const repos = new Repository(reposName)

  const markdowns = repos.articleNames.map(repos.readArticleMarkdown.bind(repos))
  const surfaceHtml = readTmpl(SURFACE_TEMPLATE_PATH)({
    reposUrl: repos.url
  })
  const htmls = [surfaceHtml].concat(markdowns.map(convertToHtml))
  const combined = htmls.join(pageSpliter)

  const html = readTmpl(PDF_TEMPLATE_PATH)({
    cssPath: PDF_CSS_PATH,
    data: combined
  })
  const header = {
    height: '20mm',
    contents: {
      default: `<div class="page-header">${repos.title}</div>`
    }
  }
  await new Promise((resolve, reject) => {
    Pdf.create(html, {header, ...pdfOption}).toFile(repos.pdfPath, (err) => err ? reject(err) : resolve())
  })
}
