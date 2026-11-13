#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const { usage, fail, takeOpt } = require('./lib/common')

const USAGE = `
Work with page images and PDFs locally (for scans that the IIIF server cannot crop).

usage:
  node tools/image.js crop <image> <region> <out> [--scale N]
      region: x,y,w,h (pixels) or pct:x,y,w,h (percent). --scale enlarges the result (e.g. 2).
  node tools/image.js pdf <file.pdf> <page> <out.png> [--scale N]
      Render one PDF page (1-based) to PNG. --scale defaults to 2 (about 150 dpi).
  node tools/image.js info <image|file.pdf>
      Print the image size, or the PDF page count.
`

async function crop (input, region, out, scale) {
  const sharp = require('sharp')
  const img = sharp(input)
  const { width, height } = await img.metadata()
  let [x, y, w, h] = region.replace(/^pct:/, '').split(',').map(Number)
  if (region.startsWith('pct:')) {
    x = Math.round(width * x / 100)
    y = Math.round(height * y / 100)
    w = Math.round(width * w / 100)
    h = Math.round(height * h / 100)
  }
  w = Math.min(w, width - x)
  h = Math.min(h, height - y)
  let pipe = img.extract({ left: x, top: y, width: w, height: h })
  if (scale !== 1) pipe = pipe.resize(Math.round(w * scale), Math.round(h * scale))
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true })
  await pipe.toFile(out)
  console.log(out, `${Math.round(w * scale)}x${Math.round(h * scale)}`)
}

async function openPdf (file) {
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs')
  const dist = path.dirname(require.resolve('pdfjs-dist/package.json'))
  return pdfjs.getDocument({
    data: new Uint8Array(fs.readFileSync(file)),
    verbosity: 0,
    wasmUrl: path.join(dist, 'wasm') + path.sep,
    iccUrl: path.join(dist, 'iccs') + path.sep,
    cMapUrl: path.join(dist, 'cmaps') + path.sep,
    standardFontDataUrl: path.join(dist, 'standard_fonts') + path.sep
  }).promise
}

async function pdfPage (file, pageNo, out, scale) {
  const { createCanvas } = require('@napi-rs/canvas')
  const doc = await openPdf(file)
  if (pageNo < 1 || pageNo > doc.numPages) fail(`page ${pageNo} out of 1-${doc.numPages}`)
  const page = await doc.getPage(pageNo)
  const viewport = page.getViewport({ scale })
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height))
  await page.render({ canvas, canvasContext: canvas.getContext('2d'), viewport }).promise
  fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true })
  fs.writeFileSync(out, await canvas.encode('png'))
  console.log(out, `${canvas.width}x${canvas.height}`)
}

async function info (file) {
  if (file.toLowerCase().endsWith('.pdf')) {
    const doc = await openPdf(file)
    console.log(`${doc.numPages} pages`)
  } else {
    const { width, height } = await require('sharp')(file).metadata()
    console.log(`${width}x${height}`)
  }
}

async function main () {
  const args = process.argv.slice(2)
  const scaleOpt = takeOpt(args, '--scale')
  const [cmd, ...rest] = args
  if (cmd === 'crop' && rest.length === 3) return crop(rest[0], rest[1], rest[2], scaleOpt ? Number(scaleOpt) : 1)
  if (cmd === 'pdf' && rest.length === 3) return pdfPage(rest[0], parseInt(rest[1], 10), rest[2], scaleOpt ? Number(scaleOpt) : 2)
  if (cmd === 'info' && rest.length === 1) return info(rest[0])
  usage(USAGE, false)
}

main().catch((e) => fail(e.message))
