#!/usr/bin/env node
const fs = require('fs')
const { DOMParser } = require('@xmldom/xmldom')
const { usage, takeOpt, takeFlag } = require('./lib/common')

const USAGE = `
Convert a First1KGreek TEI edition into a labeled base text for tools/build.js and tools/verify.js.

usage: node tools/tei2labeled.js <edition.xml> <out.txt> [--split] [--prefix N]

Each output line is \`<label> <text>\`. Labels come from the nested textpart divs
(book, chapter, section) and from <milestone unit="section|subsection">.
--split: a textpart with no smaller division is cut at sentence ends (. ;) into
         units of at least 25 words, numbered 1, 2, ... (this translation's own numbering).
         Without it, every textpart is one line. Use it only for editions without sections.
Non-numeric labels (prooemium, opener) become 0; a one-level label gets .1.
Square brackets holding any Latin letter (editors' references, folio numbers) are removed.
--prefix N: prepend N to every label (e.g. a book number when the file holds one book).
Prints the word count per top-level division to stderr, for planning pages.
`

const args = process.argv.slice(2)
const split = takeFlag(args, '--split')
const prefix = takeOpt(args, '--prefix')
usage(USAGE, args.length === 2)
const [src, out] = args

const ELEMENT = 1
const TEXT = 3
const CDATA = 4
const doc = new DOMParser().parseFromString(fs.readFileSync(src, 'utf8'), 'text/xml')

const tag = (el) => el.localName
const kids = (el) => Array.from(el.childNodes).filter((n) => n.nodeType === ELEMENT)

function leadText (el) {
  let s = ''
  for (const n of Array.from(el.childNodes)) {
    if (n.nodeType === ELEMENT) break
    if (n.nodeType === TEXT || n.nodeType === CDATA) s += n.data
  }
  return s
}

function tailText (el) {
  let s = ''
  for (let n = el.nextSibling; n; n = n.nextSibling) {
    if (n.nodeType === ELEMENT) break
    if (n.nodeType === TEXT || n.nodeType === CDATA) s += n.data
  }
  return s
}

function descendants (el) {
  const outList = []
  const stack = kids(el).reverse()
  while (stack.length) {
    const n = stack.pop()
    outList.push(n)
    stack.push(...kids(n).reverse())
  }
  return outList
}

const clean = (text) => text.replace(/\s+/g, ' ').trim()
const EDITORIAL = /\s*\[[^\]]*[A-Za-z][^\]]*\]/g
const units = []
const stripped = []

function flush (labels, buf, leaf = false) {
  let text = clean(buf.text.join(' '))
  stripped.push(...(text.match(EDITORIAL) || []))
  text = clean(text.replace(EDITORIAL, ''))
  if (text) {
    const lab = labels.concat(buf.sub ? [buf.sub] : [])
    units.push([lab, text, leaf && !buf.sub])
  }
  buf.text = []
  if (buf.sub && !text) return
  buf.sub = null
}

function walk (el, labels, buf) {
  for (const child of kids(el)) {
    const t = tag(child)
    if (t === 'div' && child.getAttribute('type') === 'textpart') {
      flush(labels, buf)
      const n = child.getAttribute('n')
      walk(child, labels.concat([n]), buf)
      const hasSub = descendants(child).some((c) => tag(c) === 'div' ||
        (tag(c) === 'milestone' && ['section', 'subsection'].includes(c.getAttribute('unit'))))
      flush(labels.concat([n]), buf, !hasSub)
    } else if (t === 'milestone' && ['section', 'subsection'].includes(child.getAttribute('unit'))) {
      flush(labels, buf)
      buf.sub = child.getAttribute('unit') === 'section' && labels.length && child.getAttribute('n') === labels.at(-1)
        ? '1'
        : child.getAttribute('n')
    } else if (['pb', 'lb', 'head', 'note', 'bibl', 'milestone'].includes(t)) {
    } else {
      buf.text.push(leadText(child))
      walk(child, labels, buf)
      buf.text.push('')
    }
    if (t !== 'div') buf.text.push(tailText(child))
  }
}

const body = doc.getElementsByTagNameNS('http://www.tei-c.org/ns/1.0', 'body')[0]
const edition = kids(body).find((c) => tag(c) === 'div')
const buf = { text: [], sub: null }
walk(edition, [], buf)
flush([], buf)

function sentences (text) {
  const parts = text.split(/(?<=[.;])\s+/)
  const res = []
  let cur = []
  const words = (a) => a.join(' ').split(/\s+/).filter(Boolean).length
  for (const p of parts) {
    cur.push(p)
    if (words(cur) >= 25) {
      res.push(cur.join(' '))
      cur = []
    }
  }
  if (cur.length) {
    if (res.length && words(cur) < 12) res[res.length - 1] += ' ' + cur.join(' ')
    else res.push(cur.join(' '))
  }
  return res
}

const lines = []
const words = new Map()
const add = (k, n) => words.set(k, (words.get(k) || 0) + n)
for (let [lab, text, leaf] of units) {
  if (prefix) lab = [prefix].concat(lab)
  lab = lab.map((x) => (/^\d+$/.test(x || '') ? x : '0'))
  if (leaf && split) {
    sentences(text).forEach((chunk, i) => lines.push(`${lab.concat([String(i + 1)]).join('.')} ${chunk}`))
  } else {
    if (lab.length < 2) lab = lab.concat(['1'])
    lines.push(`${lab.join('.')} ${text}`)
  }
  add((leaf && split ? lab : lab.slice(0, -1)).join('.'), text.split(/\s+/).filter(Boolean).length)
}

fs.writeFileSync(out, lines.join('\n') + '\n')
for (const [k, v] of words) process.stderr.write(`${k} ${v}\n`)
if (stripped.length) process.stderr.write(`stripped ${stripped.length} editorial brackets, e.g. ${JSON.stringify(stripped.slice(0, 3))}\n`)
process.stderr.write(`wrote ${out}: ${lines.length} lines, ${[...words.values()].reduce((a, b) => a + b, 0)} words\n`)
