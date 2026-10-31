#!/usr/bin/env node

/**
 * Create jp.md from both.md
 */
const fs = require('fs')
const { join } = require('path')
const separate = require('jesep')

const target = process.argv[2]
if (!target) {
  console.log(`
Usage: ci/jp.js <section dir>
`)
  process.exit()
}

build(target)

function build (target) {
  const srcPath = join(target, 'both.md')
  const destPath = join(target, 'jp.md')

  if (!fs.existsSync(srcPath)) {
    console.error(`${srcPath} not found`)
    return
  }
  const text = fs.readFileSync(srcPath).toString()
  const ja = separate(withoutOriginalLines(text))
  fs.writeFileSync(destPath, withLabelsOnOwnLines(ja, escapedVerseLabels(text)))
}

function escapedVerseLabels (text) {
  return text.split('\n')
    .map((line) => line.trim().match(/^% ([A-Z]+:\d+) /))
    .filter(Boolean)
    .map((match) => match[1])
}

function withLabelsOnOwnLines (ja, labels) {
  return labels.reduce((out, label) => out.replace(new RegExp(`([^\\n])(${label} )`), '$1\n$2'), ja)
}

function withoutOriginalLines (text) {
  return text.split('\n').filter((line) => !isOriginalLine(line)).join('\n')
}

function isOriginalLine (line) {
  const trimmed = line.trim()
  if (trimmed.startsWith('% ')) {
    return false
  }
  const firstLetter = trimmed.match(/[^\u0020-\u0040\u005b-\u0060\u007b-\u007e\u2000-\u206f]/)
  return Boolean(firstLetter) && /[A-Za-z\u00c0-\u024f\u0370-\u03ff\u1f00-\u1fff]/.test(firstLetter[0])
}
