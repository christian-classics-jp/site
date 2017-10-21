#!/usr/bin/env node

const Epub = require('epub-gen')
const marked = require('marked')
const fs = require('fs')
const hbs = require('handlebars')
const Repository = require('./helpers/Repository')
const convertToHtml = (markdown) => marked(markdown)
const {EPUB_OPF_PATH, EPUB_BOOK_PATH, EPUB_STYLE_PATH, SURFACE_TEMPLATE_PATH} = require('./helpers/consts')
const {AUTHOR, PUBLISHER, EPUB_VERSION, LANG, TOC_TITLE} = require(EPUB_BOOK_PATH)
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())

const repos = process.argv[2]
if (!repos) {
  console.log(`
Usage:
  $ ./ci/epub.js <repos>
`)
  process.exit()
}

epub(repos)

async function epub (reposName) {
  const repos = new Repository(reposName)
  const {
    articleNames,
    book
  } = repos

  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))
  const surfaceHtml = readTmpl(SURFACE_TEMPLATE_PATH)({
    reposUrl: repos.url
  })
  const articleHtmls = markdowns.map(convertToHtml)
  const content = [{title: '本の情報', data: surfaceHtml}].concat(
    articleHtmls.map((html, i) => ({title: markdownTitle(markdowns[i]), data: html}))
  )

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
  })
}
