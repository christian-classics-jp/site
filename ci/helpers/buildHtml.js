const marked = require('marked')
const {REPOS_DIR, INDEX_TEMPLATE_PATH, ARTICLE_TEMPLATE_PATH, PUBLIC_DIR} = require('./consts')
const fs = require('fs')
const {join} = require('path')
const hbs = require('handlebars')
const loc = require('../../src/info/loc.json')
const mkdirp = require('mkdirp')
const siteTitleFromReadme = require('./siteTitleFromReadme')

// title は最初にヒットする h1 要素である
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const about = (repos) => ({
  getDestDir: () => join(PUBLIC_DIR, repos),
  getArticleNames: () => fs.readdirSync(join(REPOS_DIR, repos, 'src')).filter((name) => fs.existsSync(join(REPOS_DIR, repos, 'src', name, 'jp.md'))),
  // jp.md に記事がある
  readMarkdown: (name) => fs.readFileSync(join(REPOS_DIR, repos, 'src', name, 'jp.md')).toString(),
  getHtmlPath: (name) => join(PUBLIC_DIR, repos, `${name}.html`)
})
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())

/**
 * MarkdownファイルからHTMLファイルを生成する
 */
async function buildHtml (repos, options = {}) {
  const {
    index = true
  } = options
  const {
    getDestDir,
    getArticleNames,
    readMarkdown,
    getHtmlPath
  } = about(repos)

  mkdirp.sync(getDestDir())

  const siteTitle = siteTitleFromReadme(repos)

  const articleNames = getArticleNames(repos)
  const markdowns = articleNames.map(readMarkdown)
  const titles = markdowns.map(markdownTitle)
  const htmls = markdowns.map((m) => marked(m))
  const fileNames = articleNames.map((name) => `${name}.html`)

  const articleTmpl = readTmpl(ARTICLE_TEMPLATE_PATH)
  const datasets = articleNames.map((name, i) => ({
    siteTitle,
    loc,
    title: titles[i],
    article: htmls[i],
    next: {
      title: titles[i + 1],
      fileName: fileNames[i + 1]
    }
  }))
  const pages = datasets.map((data) => articleTmpl(data))

  articleNames.forEach((name, i) => {
    const htmlPath = getHtmlPath(name)
    const page = pages[i]
    fs.writeFileSync(htmlPath, page)
  })

  if (index) {
    const indexTmpl = readTmpl(INDEX_TEMPLATE_PATH)
    const indexPage = indexTmpl({
      siteTitle,
      repos,
      loc,
      nav: articleNames.map((name, i) => ({
        fileName: fileNames[i],
        title: titles[i]
      }))
    })
    const indexPath = join(getDestDir(), 'index.html')
    fs.writeFileSync(indexPath, indexPage)
  }
}

module.exports = buildHtml
