import puppeteer from 'puppeteer-core'
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] })
for (const w of [360, 768]) {
  const page = await browser.newPage()
  await page.setViewport({ width: w, height: 800 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1500))
  const res = await page.evaluate(() => {
    const iw = window.innerWidth
    const bad = []
    for (const e of document.querySelectorAll('body *')) {
      const r = e.getBoundingClientRect()
      if (r.width === 0) continue
      // walk up: is it inside an overflow-hidden ancestor?
      let p = e.parentElement, clipped = false
      while (p && p !== document.body) { const o = getComputedStyle(p).overflowX; if (o === 'hidden' || o === 'clip') { clipped = true; break } p = p.parentElement }
      if (clipped) continue
      if (r.right > iw + 1 || r.left < -1) bad.push(`${e.tagName}.${(e.className || '').toString().slice(0, 70)} L=${Math.round(r.left)} R=${Math.round(r.right)}`)
    }
    return { iw, sw: document.documentElement.scrollWidth, bad: bad.slice(0, 12) }
  })
  console.log(w, JSON.stringify(res, null, 1))
  await page.close()
}
await browser.close()
