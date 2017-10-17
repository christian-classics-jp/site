const marked = require('marked')
const {INDEX_TEMPLATE_PATH, SINGLEPAGE_TMPLE_PATH, ARTICLE_TEMPLATE_PATH} = require('./consts')
const fs = require('fs')
const {join} = require('path')
const hbs = require('handlebars')
const loc = require('../../assets/info/loc.json')
const mkdirp = require('mkdirp')
const Repository = require('./Repository')

// title は最初にヒットする h1 要素である
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
const TOP_URL = 'https://christian-classics-jp.github.io/site/'

/**
 * MarkdownファイルからHTMLファイルを生成する
 */
async function buildHtml (reposName, options = {}) {
  const {
    singlePage = false
  } = options
  const repos = new Repository(reposName)

  mkdirp.sync(repos.destDir)

  const siteTitle = repos.title

  const articleNames = repos.articleNames
  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))
  const titles = markdowns.map(markdownTitle)
  const htmls = markdowns.map((m) => marked(m))
  const fileNames = articleNames.map((name) => `${name}.html`)

  const articleTmpl = readTmpl(ARTICLE_TEMPLATE_PATH)
  const datasets = articleNames.map((name, i) => ({
    topUrl: TOP_URL,
    repos: repos.repos,
    siteTitle,
    loc,
    title: titles[i],
    article: htmls[i],
    fileName: fileNames[i],
    next: {
      title: titles[i + 1],
      fileName: fileNames[i + 1]
    }
  }))

  if (!singlePage) {
    const pages = datasets.map((data) => articleTmpl(data))
    articleNames.forEach((name, i) => {
      const htmlPath = repos.htmlPath(name)
      const page = pages[i]
      fs.writeFileSync(htmlPath, page)
    })

    const indexTmpl = readTmpl(INDEX_TEMPLATE_PATH)
    const indexPage = indexTmpl({
      topUrl: TOP_URL,
      siteTitle,
      repos: repos.repos,
      loc,
      nav: articleNames.map((name, i) => ({
        fileName: fileNames[i],
        title: titles[i]
      }))
    })
    const indexPath = join(repos.destDir, 'index.html')
    fs.writeFileSync(indexPath, indexPage)
  } else {
    const singlePageTmpl = readTmpl(SINGLEPAGE_TMPLE_PATH)
    const page = singlePageTmpl(datasets[0])
    const indexPath = join(repos.destDir, 'index.html')
    fs.writeFileSync(indexPath, page)
  }
}

module.exports = buildHtml
