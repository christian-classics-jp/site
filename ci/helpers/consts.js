const { join } = require('path')

module.exports = {
  INDEX_TEMPLATE_PATH: join(__dirname, '../../assets/templates/index.html.hbs'),
  ARTICLE_TEMPLATE_PATH: join(__dirname, '../../assets/templates/article.html.hbs'),
  SINGLEPAGE_TMPLE_PATH: join(__dirname, '../../assets/templates/single-article.html.hbs'),
  SURFACE_TEMPLATE_PATH: join(__dirname, '../../assets/templates/surface.html.hbs'),
  PDF_TEMPLATE_PATH: join(__dirname, '../../assets/templates/pdf.html.hbs'),
  PDF_CSS_PATH: 'file://' + join(__dirname, '../../assets/pdf/pdf-style.css'),
  EPUB_BOOK_PATH: join(__dirname, '../../assets/epub/book.json'),
  EPUB_OPF_PATH: join(__dirname, '../../assets/epub/content.opf'),
  EPUB_STYLE_PATH: join(__dirname, '../../assets/epub/style.css'),
  STYLE_DIR: join(__dirname, '../../assets/stylesheets'),
  REPOS_DIR: join(__dirname, '../../repos'),
  PUBLIC_DIR: join(__dirname, '../../docs')
}
