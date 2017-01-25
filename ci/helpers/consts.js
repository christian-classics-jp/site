const { join } = require('path')

module.exports = {
  INDEX_TEMPLATE_PATH: join(__dirname, '../../src/templates/index.html.hbs'),
  ARTICLE_TEMPLATE_PATH: join(__dirname, '../../src/templates/article.html.hbs'),
  STYLE_DIR: join(__dirname, '../../src/stylesheets')
}
