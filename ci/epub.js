#!/usr/bin/env node

const Epub = require('epub-gen')
const marked = require('marked')
const fs = require('fs')
const Repository = require('./helpers/Repository')
const convertToHtml = (markdown) => marked(markdown)
const {EPUB_OPF_PATH, EPUB_BOOK_PATH, EPUB_STYLE_PATH} = require('./helpers/consts')
const {AUTHOR, PUBLISHER, EPUB_VERSION, LANG, TOC_TITLE} = require(EPUB_BOOK_PATH)
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]

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
  const htmls = markdowns.map(convertToHtml)

  await new Epub({
    title: book.title,
    author: [book.author, AUTHOR],
    publisher: PUBLISHER,
    output: repos.epubPath,
    version: EPUB_VERSION,
    css: fs.readFileSync(EPUB_STYLE_PATH),
    lang: LANG,
    customOpfTemplatePath: EPUB_OPF_PATH,
    content: htmls.map((html, i) => ({
      title: markdownTitle(markdowns[i]),
      data: html
    })),
    appendChapterTitles: false,
    tocTitle: TOC_TITLE
  })
  // fs.writeFileSync('tmp/index.html', htmls[0])
}
