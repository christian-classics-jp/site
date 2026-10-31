const marked = require('marked')
const markUprightDigits = require('./markUprightDigits')

const markVerseNumbers = (html) => html.replace(/(^|\n|<p>)((?:\d+|[A-Z]+)(?::\d+)+) /g, '$1<span class="verse-number">$2</span> ')

const noteAttrs = (epub) => epub
  ? {
      ref: ' epub:type="noteref" role="doc-noteref"',
      section: ' epub:type="endnotes" role="doc-endnotes"',
      item: ' epub:type="endnote"',
      back: ' role="doc-backlink"'
    }
  : {ref: '', section: '', item: '', back: ''}

const markNotes = (html, idPrefix, epub) => {
  const attrs = noteAttrs(epub)
  const notes = []
  const body = html.replace(/\^\[([^\[\]]+)\]/g, (_, note) => {
    notes.push(note)
    const n = notes.length
    return `<sup class="note-ref"><a id="${idPrefix}noteref-${n}" href="#${idPrefix}note-${n}"${attrs.ref}>${n}</a></sup>`
  })
  if (notes.length === 0) return html
  const items = notes.map((note, i) => {
    const n = i + 1
    return `<li id="${idPrefix}note-${n}"${attrs.item}><a class="note-back" href="#${idPrefix}noteref-${n}"${attrs.back}>${n}</a>${note}</li>`
  })
  return `${body}<section class="notes"${attrs.section}><h2>訳注</h2><ol>${items.join('')}</ol></section>\n`
}

function compileMarkdown (markdown, {idPrefix = '', epub = false} = {}) {
  const html = markVerseNumbers(marked(markdown, {headerIds: !epub, xhtml: epub}))
  return markNotes(epub ? markUprightDigits(html) : html, idPrefix, epub)
}

module.exports = compileMarkdown
