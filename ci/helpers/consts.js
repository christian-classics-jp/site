const { join } = require('path')

module.exports = {
  SITE_URL: 'https://christian-classics-jp.github.io/site/',
  INDEX_TEMPLATE_PATH: join(__dirname, '../../assets/templates/index.html.hbs'),
  ARTICLE_TEMPLATE_PATH: join(__dirname, '../../assets/templates/article.html.hbs'),
  SINGLEPAGE_TMPLE_PATH: join(__dirname, '../../assets/templates/single-article.html.hbs'),
  SURFACE_TEMPLATE_PATH: join(__dirname, '../../assets/templates/surface.html.hbs'),
  PDF_TEMPLATE_PATH: join(__dirname, '../../assets/templates/pdf.html.hbs'),
  PDF_MATTER_TEMPLATE_PATH: join(__dirname, '../../assets/templates/pdf-matter.html.hbs'),
  PDF_CSS_PATH: join(__dirname, '../../assets/pdf/pdf-style.css'),
  EPUB_BOOK_PATH: join(__dirname, '../../assets/epub/book.json'),
  EPUB_STYLE_PATH: join(__dirname, '../../assets/epub/style.css'),
  EPUB_CONTAINER_PATH: join(__dirname, '../../assets/epub/container.xml'),
  EPUB_OPF_TEMPLATE_PATH: join(__dirname, '../../assets/epub/content.opf.hbs'),
  EPUB_NAV_TEMPLATE_PATH: join(__dirname, '../../assets/epub/nav.xhtml.hbs'),
  EPUB_NCX_TEMPLATE_PATH: join(__dirname, '../../assets/epub/toc.ncx.hbs'),
  EPUB_DOCUMENT_TEMPLATE_PATH: join(__dirname, '../../assets/epub/document.xhtml.hbs'),
  STYLE_PATH: join(__dirname, '../../assets/css/main.css'),
  SCRIPT_PATH: join(__dirname, '../../assets/js/theme.js'),
  BOOKS_DIR: join(__dirname, '../../books'),
  STATIC_DIR: join(__dirname, '../../static'),
  PUBLIC_DIR: join(__dirname, '../../dist')
}
