const fs = require('fs')
const {join} = require('path')
const {REPOS_DIR} = require('./consts')

function siteTitleFromReadme (repos) {
  const readme = fs.readFileSync(join(REPOS_DIR, repos, 'README.md')).toString()
  // '# title' => 'title'
  const siteTitle = readme.split('\n')[0].slice(1).trim()
  return siteTitle
}

module.exports = siteTitleFromReadme
