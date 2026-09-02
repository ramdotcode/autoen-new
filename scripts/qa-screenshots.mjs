import puppeteer from 'puppeteer-core'
const out = process.argv[2]
const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--hide-scrollbars'],
})
const sizes = [
  { name: 'desktop', w: 1440, h: 900 },
  { name: 'tablet', w: 768, h: 1024 },
  { name: 'mobile', w: 360, h: 780 },
]
const anchors = ['top', 'about', 'services', 'process', 'values', 'contact']
const errors = []
for (const s of sizes) {
  const page = await browser.newPage()
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${s.name}: ${m.text()}`) })
  page.on('pageerror', (e) => errors.push(`${s.name}: ${e.message}`))
  await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 1 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await page.evaluate(() => { document.documentElement.style.scrollBehavior = 'auto' })
  await new Promise((r) => setTimeout(r, 2200))
  await page.screenshot({ path: `${out}/${s.name}-hero.png` })
  // walk the page slowly so whileInView triggers, then capture anchors
  const total = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < total; y += Math.round(s.h * 0.6)) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y)
    await new Promise((r) => setTimeout(r, 120))
  }
  for (const a of anchors) {
    const y = await page.evaluate((id) => {
      const el = document.getElementById(id)
      return el ? el.getBoundingClientRect().top + window.scrollY : 0
    }, a)
    const off = a === 'about' ? 700 : 0 // land mid-manifesto so words are partially lit
    await page.evaluate((yy) => window.scrollTo(0, yy), y + off)
    await new Promise((r) => setTimeout(r, 900))
    await page.screenshot({ path: `${out}/${s.name}-${a}.png` })
  }
  // extra: stats + whyus + footer
  for (const [label, sel] of [['stats', 'dl'], ['whyus', 'img[src="/img/alt-features.png"]'], ['footer', 'footer']]) {
    await page.evaluate((q) => { const el = document.querySelector(q); if (el) window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY - 120) }, sel)
    await new Promise((r) => setTimeout(r, 900))
    await page.screenshot({ path: `${out}/${s.name}-${label}.png` })
  }
  const overflow = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }))
  console.log(s.name, 'overflow check:', overflow)
  await page.close()
}
console.log('errors:', errors.length ? errors : 'none')
await browser.close()
