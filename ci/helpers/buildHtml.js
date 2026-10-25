const marked = require('marked')
const compileMarkdown = require('./compileMarkdown')
const {SITE_URL, INDEX_TEMPLATE_PATH, SINGLEPAGE_TMPLE_PATH, ARTICLE_TEMPLATE_PATH, STYLE_PATH, SCRIPT_PATH} = require('./consts')
const fs = require('fs')
const {join} = require('path')
const hbs = require('handlebars')
const loc = require('../../assets/info/loc.json')
const mkdirp = require('mkdirp')
const Repository = require('./Repository')

// title は最初にヒットする h1 要素である
const markdownTitle = (markdown) => markdown.match(/# (.+)/)[1]
const markVerse = (html) => html.replace(/<p>((?:(?!<\/?p>)[\s\S])*)<\/p>/g, (paragraph, body) => {
  const lines = body.split(/<br\s*\/?>\s*/)
  if (lines.length < 2) return paragraph
  return `<p class="verse">${lines.map((line) => `<span class="verse-line">${line}</span>`).join('')}</p>`
})
const markChapterNumber = (html) => html.replace(/(<h1[^>]*>)(（[^）]+）)\s*/, '$1<span class="chapter-number">$2</span>')
const readTmpl = (tmplPath) => hbs.compile(fs.readFileSync(tmplPath, {encoding: 'utf-8'}).toString())
const ENTITIES = {'&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'"}
const DESCRIPTION_LENGTH = 120
const describe = (html) => {
  const text = html
    .replace(/<section class="notes">[\s\S]*?<\/section>/g, '')
    .replace(/<sup[^>]*>[\s\S]*?<\/sup>/g, '')
    .replace(/<span class="verse-number">[^<]*<\/span> /g, '')
    .replace(/<h\d[^>]*>[\s\S]*?<\/h\d>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity])
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > DESCRIPTION_LENGTH ? `${text.slice(0, DESCRIPTION_LENGTH)}…` : text
}

/**
 * MarkdownファイルからHTMLファイルを生成し、生成したページのURLを返す
 */
function buildHtml (reposName, options = {}) {
  const {
    singlePage = false
  } = options
  const repos = new Repository(reposName)
  const articleNames = repos.articleNames
  if (articleNames.length === 0) return []

  const bookUrl = `${SITE_URL}${repos.repos}/`
  mkdirp.sync(join(repos.destDir, 'css'))
  fs.copyFileSync(STYLE_PATH, join(repos.destDir, 'css', 'main.css'))
  mkdirp.sync(join(repos.destDir, 'js'))
  fs.copyFileSync(SCRIPT_PATH, join(repos.destDir, 'js', 'theme.js'))

  const siteTitle = repos.title

  const markdowns = articleNames.map(repos.readArticleMarkdown.bind(repos))
  const titles = markdowns.map(markdownTitle)
  const htmls = markdowns.map((m, i) => markChapterNumber(markVerse(compileMarkdown(m, {idPrefix: `${articleNames[i]}-`}))))
  const fileNames = articleNames.map((name) => `${name}.html`)

  const articleTmpl = readTmpl(ARTICLE_TEMPLATE_PATH)
  const datasets = articleNames.map((name, i) => ({
    topUrl: SITE_URL,
    repos: repos.repos,
    siteTitle,
    loc,
    url: `${bookUrl}${fileNames[i]}`,
    description: describe(htmls[i]),
    title: titles[i],
    article: htmls[i],
    fileName: fileNames[i],
    prev: {
      title: titles[i - 1],
      fileName: fileNames[i - 1]
    },
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
    const intro = repos.intro && marked(repos.intro)
    const {
      completed,
      epubUrl,
      pdfUrl
    } = repos
    const indexPage = indexTmpl({
      topUrl: SITE_URL,
      url: bookUrl,
      description: intro ? describe(intro) : `${siteTitle}。日本語訳を章ごとに無料で公開しています。`,
      intro,
      siteTitle,
      repos: repos.repos,
      loc,
      completed,
      epubUrl,
      pdfUrl,
      nav: articleNames.map((name, i) => ({
        fileName: fileNames[i],
        title: titles[i]
      }))
    })
    const indexPath = join(repos.destDir, 'index.html')
    fs.writeFileSync(indexPath, indexPage)
    return [bookUrl, ...datasets.map((data) => data.url)]
  } else {
    const singlePageTmpl = readTmpl(SINGLEPAGE_TMPLE_PATH)
    const page = singlePageTmpl(datasets[0])
    const indexPath = join(repos.destDir, 'index.html')
    fs.writeFileSync(indexPath, page)
    return [bookUrl]
  }
}

module.exports = buildHtml
