const marked = require('marked')

const markVerseNumbers = (html) => html.replace(/(^|\n|<p>)((?:\d+|[A-Z]+):\d+) /g, '$1<span class="verse-number">$2</span> ')

const markNotes = (html, idPrefix) => {
  const notes = []
  const body = html.replace(/\^\[([^\[\]]+)\]/g, (_, note) => {
    notes.push(note)
    const n = notes.length
    return `<sup class="note-ref"><a id="${idPrefix}noteref-${n}" href="#${idPrefix}note-${n}">${n}</a></sup>`
  })
  if (notes.length === 0) return html
  const items = notes.map((note, i) => {
    const n = i + 1
    return `<li id="${idPrefix}note-${n}"><a class="note-back" href="#${idPrefix}noteref-${n}">${n}</a>${note}</li>`
  })
  return `${body}<section class="notes"><h2>訳注</h2><ol>${items.join('')}</ol></section>\n`
}

function compileMarkdown (markdown, {idPrefix = ''} = {}) {
  return markNotes(markVerseNumbers(marked(markdown)), idPrefix)
}

module.exports = compileMarkdown
