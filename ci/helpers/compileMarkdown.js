const marked = require('marked')

/**
 * compile markedown to html string
 * @param {string} html - html string
 * @param {object} options - compile options
 */
function compileMarkdown (html, options = {}) {
  marked.setOptions({})
  return marked(html)
}

module.exports = compileMarkdown
