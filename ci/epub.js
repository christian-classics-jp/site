#!/usr/bin/env node

const fs = require('fs')
const {dirname} = require('path')
const hbs = require('handlebars')
const {zipSync, strToU8} = require('fflate')
const Repository = require('./helpers/Repository')
const compileMarkdown = require('./helpers/compileMarkdown')
const markUprightDigits = require('./helpers/markUprightDigits')
const {
  BOOKS_DIR,
  SITE_URL,
  SURFACE_TEMPLATE_PATH,
  EPUB_BOOK_PATH,
  EPUB_STYLE_PATH,
  EPUB_CONTAINER_PATH,
  EPUB_OPF_TEMPLATE_PATH,
  EPUB_NAV_TEMPLATE_PATH,
  EPUB_NCX_TEMPLATE_PATH,
  EPUB_DOCUMENT_TEMPLATE_PATH
} = require('./helpers/consts')
const {AUTHOR, PUBLISHER, LANG, TOC_TITLE} = require(EPUB_BOOK_PATH)

const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const readText = (path) => fs.readFileSync(path, {encoding: 'utf-8'})
const readTmpl = (path) => hbs.compile(readText(path))

const renderOpf = readTmpl(EPUB_OPF_TEMPLATE_PATH)
const renderNav = readTmpl(EPUB_NAV_TEMPLATE_PATH)
const renderNcx = readTmpl(EPUB_NCX_TEMPLATE_PATH)
const renderDocument = readTmpl(EPUB_DOCUMENT_TEMPLATE_PATH)
const renderSurface = readTmpl(SURFACE_TEMPLATE_PATH)

const book = process.argv[2]
const books = book ? [book] : fs.readdirSync(BOOKS_DIR)

for (const name of books) {
  const repos = new Repository(name)
  if (!repos.completed) continue
  console.log(`> ${name}`)
  epub(repos)
}

function epub (repos) {
  const {articleNames, book} = repos
  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))

  const surface = {
    name: 'about',
    title: '本の情報',
    type: 'frontmatter',
    sectionType: 'copyright-page',
    body: renderSurface({reposUrl: repos.url})
  }
  const chapters = articleNames.map((name, i) => ({
    name,
    title: markdownTitle(markdowns[i]),
    type: 'bodymatter',
    sectionType: 'chapter',
    body: compileMarkdown(markdowns[i], {idPrefix: `${name}-`, epub: true, vertical: true})
  }))
  const documents = [surface, ...chapters].map((doc, i) => ({
    ...doc,
    id: `doc-${i}`,
    href: `${doc.name}.xhtml`,
    titleHtml: markUprightDigits(hbs.escapeExpression(doc.title)),
    playOrder: i + 2
  }))

  const now = new Date()
  const meta = {
    lang: LANG,
    tocTitle: TOC_TITLE,
    identifier: `${SITE_URL}${repos.repos}/`,
    title: book.title,
    author: book.author,
    translator: AUTHOR,
    publisher: PUBLISHER,
    description: (repos.intro || book.title).trim(),
    year: now.getFullYear(),
    modified: now.toISOString().replace(/\.\d+Z$/, 'Z'),
    documents,
    bodyStart: documents[1]
  }

  const files = {
    mimetype: [strToU8('application/epub+zip'), {level: 0}],
    'META-INF/container.xml': strToU8(readText(EPUB_CONTAINER_PATH)),
    'OEBPS/content.opf': strToU8(renderOpf(meta)),
    'OEBPS/nav.xhtml': strToU8(renderNav(meta)),
    'OEBPS/toc.ncx': strToU8(renderNcx(meta)),
    'OEBPS/style.css': strToU8(readText(EPUB_STYLE_PATH))
  }
  for (const doc of documents) {
    files[`OEBPS/${doc.href}`] = strToU8(renderDocument({...doc, lang: LANG}))
  }

  fs.mkdirSync(dirname(repos.epubPath), {recursive: true})
  fs.writeFileSync(repos.epubPath, zipSync(files, {level: 9}))
}
