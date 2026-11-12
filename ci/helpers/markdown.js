const {Marked} = require('marked')

const ENTITIES = {'&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'"}
const unescapeHtml = (text) => text.replace(/&(?:amp|lt|gt|quot|#39);/g, (entity) => ENTITIES[entity])

const slugify = (seen, value) => {
  const base = value
    .toLowerCase()
    .trim()
    .replace(/[ -⁯⸀-⹿\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-')
  let slug = base
  if (Object.hasOwn(seen, slug)) {
    do {
      seen[base]++
      slug = `${base}-${seen[base]}`
    } while (Object.hasOwn(seen, slug))
  }
  seen[slug] = 0
  return slug
}

const headingIds = () => {
  let seen = {}
  return {
    hooks: {
      preprocess (src) {
        seen = {}
        return src
      }
    },
    renderer: {
      heading ({tokens, depth}) {
        const text = this.parser.parseInline(tokens)
        const raw = unescapeHtml(this.parser.parseInline(tokens, this.parser.textRenderer))
        return `<h${depth} id="${slugify(seen, raw)}">${text}</h${depth}>\n`
      }
    }
  }
}

const cjkStrong = {
  tokenizer: {
    emStrong (src) {
      const match = /^\*\*([^\s*]|[^\s][\s\S]*?[^\s])\*\*(?!\*)/.exec(src)
      if (!match) return false
      return {type: 'strong', raw: match[0], text: match[1], tokens: this.lexer.inlineTokens(match[1])}
    }
  }
}

const xhtml = {
  renderer: {
    br () {
      return '<br/>'
    },
    hr () {
      return '<hr/>\n'
    }
  }
}

const web = new Marked(cjkStrong, headingIds())
const epub = new Marked(cjkStrong, xhtml)

module.exports = {
  toHtml: (markdown) => web.parse(markdown),
  toXhtml: (markdown) => epub.parse(markdown)
}
