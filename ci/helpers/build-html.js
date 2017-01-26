#!/usr/bin/env node

const fs = require('fs')
const { join } = require('path')
const co = require('co')
const mkdirp = require('mkdirp')
const Handlebars = require('handlebars')
const mdToHtml = require('./md-to-html.js')
const loc = require('../../src/info/loc.json')
const {
  INDEX_TEMPLATE_PATH,
  ARTICLE_TEMPLATE_PATH
} = require('./consts')

/**
 * MarkdownファイルからHTMLファイルを生成する
 * @param siteTitle サイトのタイトル
 * @param markdowns markdownファイルの { path, name } の配列
 * @param distDir HTMLファイル出力先のディレクトリ
 * @param repos リポジトリ名
 */
function buildHtml (siteTitle, markdowns, distDir, repos) {
  return co(function * () {
    mkdirp.sync(distDir)
    // Markdown articles to HTML
    let articles = yield markdowns.map(({path, name}) => co(function * () {
      let html = yield mdToHtml(path)
      let fileName = name + '.html'
      // title は最初にヒットする h1 要素である
      let title = html.match(/<h1 id=".+">(.+)<\/h1>/)[1]
      return {
        html,
        fileName,
        title
      }
    }))

    // template to html
    let articleHbs = fs.readFileSync(ARTICLE_TEMPLATE_PATH, { encoding: 'utf-8' })
    let articleTmpl = Handlebars.compile(articleHbs)
    let pages = articles.reduce((pageObj, article, i) => {
      let {title, html, fileName} = article
      let data = {
        siteTitle,
        title,
        loc,
        article: html,
        next: articles[i + 1]
      }
      return Object.assign(pageObj, {
        [fileName]: articleTmpl(data)
      })
    }, {})
    // write in dist
    articles.forEach(({ fileName }) => {
      fs.writeFileSync(join(distDir, fileName), pages[fileName])
    })

    // Index page
    let indexHbs = fs.readFileSync(INDEX_TEMPLATE_PATH, { encoding: 'utf-8' })
    let indexTmpl = Handlebars.compile(indexHbs)
    let indexPage = indexTmpl({
      siteTitle,
      repos,
      loc,
      nav: articles
    })
    fs.writeFileSync(join(distDir, 'index.html'), indexPage)
  }).catch(err => console.error(err))
}

module.exports = buildHtml
