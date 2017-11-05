const {REPOS_DIR, PUBLIC_DIR} = require('./consts')
const fs = require('fs')
const {join} = require('path')

class Repository {
  constructor (repos) {
    this.repos = repos
  }

  get destDir () {
    const {repos} = this
    return join(PUBLIC_DIR, repos)
  }

  get articleNames () {
    const {repos} = this
    return fs.readdirSync(join(REPOS_DIR, repos, 'src')).filter((name) => fs.existsSync(join(REPOS_DIR, repos, 'src', name, 'jp.md')))
  }

  get title () {
    const {repos} = this
    const readme = fs.readFileSync(join(REPOS_DIR, repos, 'README.md')).toString()
    // '# title' => 'title'
    const siteTitle = readme.split('\n')[0].slice(1).trim()
    return siteTitle
  }

  get book () {
    const {repos} = this
    try {
      return require(join(REPOS_DIR, repos, 'book.json'))
    } catch (e) {
      return null
    }
  }

  get completed () {
    return Boolean(this.book)
  }

  get epubPath () {
    const {repos} = this
    return join(PUBLIC_DIR, 'epub', `${repos}.epub`)
  }

  get pdfPath () {
    const {repos} = this
    return join(PUBLIC_DIR, 'pdf', `${repos}.pdf`)
  }

  get url () {
    const {repos} = this
    return `https://github.com/christian-classics-jp/${repos}`
  }

  get epubUrl () {
    const {repos} = this
    return `https://christian-classics-jp.github.io/site/epub/${repos}.epub`
  }

  get pdfUrl () {
    const {repos} = this
    return `https://christian-classics-jp.github.io/site/pdf/${repos}.pdf`
  }

  htmlPath (name) {
    const {repos} = this
    return join(PUBLIC_DIR, repos, `${name}.html`)
  }

  readArticleMarkdown (name) {
    const {repos} = this
    return fs.readFileSync(join(REPOS_DIR, repos, 'src', name, 'jp.md')).toString()
  }
}

module.exports = Repository
