import puppeteer from 'puppeteer-core'
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] })
const results = {}
// 1. mobile menu
{
  const page = await browser.newPage()
  await page.setViewport({ width: 360, height: 780 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1500))
  await page.click('button[aria-controls="mobile-menu"]')
  await new Promise((r) => setTimeout(r, 500))
  results.mobileMenuOpen = await page.evaluate(() => !!document.getElementById('mobile-menu') && document.body.style.overflow === 'hidden')
  await page.screenshot({ path: process.argv[2] + '/mobile-menu.png' })
  await page.click('#mobile-menu a[href="#services"]')
  await new Promise((r) => setTimeout(r, 1800))
  results.mobileMenuClosedAfterNav = await page.evaluate(() => !document.getElementById('mobile-menu') && document.body.style.overflow === '')
  results.scrolledToServices = await page.evaluate(() => Math.abs(document.getElementById('services').getBoundingClientRect().top - 80) < 5)
  await page.close()
}
// 2. core values tabs + keyboard
{
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto('http://localhost:5173/#values', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1500))
  await page.hover('#value-tab-2')
  await new Promise((r) => setTimeout(r, 600))
  results.tabHoverSwitches = await page.evaluate(() => document.getElementById('value-panel-2')?.textContent.includes('Security'))
  await page.focus('#value-tab-4')
  await new Promise((r) => setTimeout(r, 600))
  results.tabFocusSwitches = await page.evaluate(() => document.getElementById('value-panel-4')?.textContent.includes('Integrity'))
  await page.screenshot({ path: process.argv[2] + '/values-tab4.png' })
  await page.close()
}
// 3. reduced motion: all content visible without scrolling animations
{
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 800))
  results.reducedMotion = await page.evaluate(() => {
    const els = [...document.querySelectorAll('h1, h2, h3, section li')]
    const hidden = els.filter((e) => parseFloat(getComputedStyle(e).opacity) < 0.99)
    return { checked: els.length, hidden: hidden.length, statsShowFinal: document.querySelector('dd')?.textContent }
  })
  await page.close()
}
// 4. keyboard reachability: tab through first 12 focusables
{
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 1500))
  const order = []
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab')
    order.push(await page.evaluate(() => { const a = document.activeElement; return a.tagName + ':' + (a.textContent.trim().slice(0, 20) || a.getAttribute('aria-label')) }))
  }
  results.tabOrder = order
  await page.close()
}
console.log(JSON.stringify(results, null, 1))
await browser.close()
