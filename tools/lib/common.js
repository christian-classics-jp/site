const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..', '..')
const LABEL = /^([0-9A-Z]+(?:\.[0-9]+)+) /

function parseSpec (spec) {
  return spec.split(',').map((item) => {
    if (item.includes('-')) {
      const [a, b] = item.split('-')
      return { kind: 'range', a: a.split('.'), b: b.split('.') }
    }
    return { kind: 'key', a: item.split('.'), b: null }
  })
}

function keyTuple (parts) {
  return parts.map((p) => (/^\d+$/.test(p) ? parseInt(p, 10) : -1))
}

function cmpTuple (x, y) {
  const n = Math.min(x.length, y.length)
  for (let i = 0; i < n; i++) {
    if (x[i] !== y[i]) return x[i] < y[i] ? -1 : 1
  }
  return x.length - y.length
}

function inSpec (label, items) {
  const parts = label.split('.')
  for (const { kind, a, b } of items) {
    const head = parts.slice(0, a.length)
    if (kind === 'key' && head.join('.') === a.join('.')) return true
    if (kind === 'range' && head.every((p) => /^\d+$/.test(p)) &&
        cmpTuple(keyTuple(a), keyTuple(head)) <= 0 && cmpTuple(keyTuple(head), keyTuple(b)) <= 0) return true
  }
  return false
}

function sourceLines (file, spec) {
  const items = parseSpec(spec)
  const out = []
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const m = LABEL.exec(line)
    if (m && inSpec(m[1], items)) out.push([m[1], line])
  }
  return out
}

const jaLabel = (label) => label.replaceAll('.', ':')
const jaPrefix = (label) => (/^[A-Za-z]/.test(label) ? '% ' : '')
const group = (label) => label.slice(0, label.lastIndexOf('.'))
const bookDir = (book) => path.join(ROOT, 'books', book)
const pagesPath = (book) => path.join(bookDir(book), 'research', 'pages.json')

function loadPages (book) {
  const p = pagesPath(book)
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : null
}

function savePages (book, data) {
  fs.writeFileSync(pagesPath(book), JSON.stringify(data, null, 2) + '\n')
}

function escapeRe (s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function pageDone (book, pageId) {
  const readme = path.join(bookDir(book), 'README.md')
  if (!fs.existsSync(readme)) return false
  const pat = new RegExp('(^|[\\s|`\\[])' + escapeRe(pageId) + '([\\s|`\\]]|$)')
  return fs.readFileSync(readme, 'utf8').split('\n').some((l) => pat.test(l) && l.includes('[x]'))
}

function parseLoc (loc) {
  return (loc || '').split(';').map((s) => s.trim()).filter(Boolean).map((part) => {
    const i = part.lastIndexOf(':')
    const [a, b] = part.slice(i + 1).split('-')
    return [part.slice(0, i), parseInt(a, 10), parseInt(b || a, 10)]
  })
}

function usage (text, ok) {
  if (!ok) {
    process.stderr.write(text.trim() + '\n')
    process.exit(1)
  }
}

function fail (msg) {
  process.stderr.write(msg + '\n')
  process.exit(1)
}

function takeOpt (args, name, fallback = null) {
  const i = args.indexOf(name)
  if (i === -1) return fallback
  const v = args[i + 1]
  args.splice(i, 2)
  return v
}

function takeFlag (args, name) {
  const i = args.indexOf(name)
  if (i === -1) return false
  args.splice(i, 1)
  return true
}

const chars = (s) => [...s].length

module.exports = {
  ROOT, LABEL, parseSpec, keyTuple, cmpTuple, inSpec, sourceLines, jaLabel, jaPrefix, group,
  bookDir, loadPages, savePages, pageDone, parseLoc, escapeRe, usage, fail, takeOpt, takeFlag, chars
}
