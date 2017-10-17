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
    return require(join(REPOS_DIR, repos, 'book.json'))
  }

  get epubPath () {
    const {repos} = this
    return join(PUBLIC_DIR, 'epub', `${repos}.epub`)
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
