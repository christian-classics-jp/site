const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function download (url, out, attempts = 5) {
  if (fs.existsSync(out)) return
  fs.mkdirSync(path.dirname(out), { recursive: true })
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'christian-classics-jp-research' } })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = Buffer.from(await res.arrayBuffer())
      fs.writeFileSync(out + '.part', data)
      fs.renameSync(out + '.part', out)
      return
    } catch (e) {
      if (i === attempts - 1) throw new Error(`failed: ${url}: ${e.message}`)
      await sleep(15000 * (i + 1))
    }
  }
}

const sha16 = (file) => crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 16)

module.exports = { download, sha16 }
