#!/usr/bin/env node

const Epub = require('epub-gen')
const fs = require('fs')
const {dirname} = require('path')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const compileMarkdown = require('./helpers/compileMarkdown')
const {BOOKS_DIR, EPUB_OPF_PATH, EPUB_BOOK_PATH, EPUB_STYLE_PATH, SURFACE_TEMPLATE_PATH} = require('./helpers/consts')
const {AUTHOR, PUBLISHER, EPUB_VERSION, LANG, TOC_TITLE} = require(EPUB_BOOK_PATH)
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())

const book = process.argv[2]
const books = book ? [book] : fs.readdirSync(BOOKS_DIR)

main()

async function main () {
  for (const name of books) {
    const repos = new Repository(name)
    if (!repos.completed) continue
    console.log(`> ${name}`)
    await epub(repos)
  }
}

async function epub (repos) {
  const {
    articleNames,
    book
  } = repos

  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))
  const surfaceHtml = readTmpl(SURFACE_TEMPLATE_PATH)({
    reposUrl: repos.url
  })
  const articleHtmls = markdowns.map((markdown, i) => compileMarkdown(markdown, {idPrefix: `${articleNames[i]}-`}))
  const content = [{title: '本の情報', data: surfaceHtml}].concat(
    articleHtmls.map((html, i) => ({title: markdownTitle(markdowns[i]), data: html}))
  )

  fs.mkdirSync(dirname(repos.epubPath), {recursive: true})
  await new Epub({
    title: book.title,
    author: [book.author, AUTHOR],
    publisher: PUBLISHER,
    output: repos.epubPath,
    version: EPUB_VERSION,
    css: fs.readFileSync(EPUB_STYLE_PATH),
    lang: LANG,
    customOpfTemplatePath: EPUB_OPF_PATH,
    content,
    appendChapterTitles: false,
    tocTitle: TOC_TITLE
  }).promise
}
