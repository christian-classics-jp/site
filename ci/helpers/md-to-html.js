const Markdown = require('markdown-to-html').Markdown
const concat = require('concat-stream')

/**
 * markdown ファイルを html 文字列に変換する。
 * @returns Promise<string>
 */
function mdToHtml (path) {
  return new Promise((resolve, reject) => {
    let md = new Markdown()
    let concatStream = concat(resolve)
    md.bufmax = 2048
    md.on('error', (err) => { console.error(err) })
    md.render(path, {}, err => {
      if (err) {
        reject(err)
      }
      md.pipe(concatStream)
    })
  })
}

module.exports = mdToHtml
