import { useEffect, useRef, useState, type FormEvent } from 'react'
import { m, useReducedMotion } from 'motion/react'
import { Clock, Mail, MapPin, Phone, X } from 'lucide-react'
import { company } from '../data/content'
import { useI18n } from '../i18n'
import { useLocation, useSearchParams } from 'react-router'
import { Button } from './ui/Button'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const inputCls =
  'w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-fg placeholder:text-dim transition-colors focus:border-accent-soft focus:outline-none'

/** Contact details and form. Lives on /contact, below the page intro. */
export function Contact() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  const [sent, setSent] = useState(false)
  const [params, setParams] = useSearchParams()
  const topic = params.get('topic') ?? ''
  const clearTopic = () => setParams({}, { replace: true })
  const nameRef = useRef<HTMLInputElement>(null)
  const location = useLocation()

  // Arriving from a CTA inside the site (not a fresh page load): put the cursor
  // in the first field once the page transition has finished.
  useEffect(() => {
    if (location.key === 'default') return
    const timer = window.setTimeout(() => nameRef.current?.focus({ preventScroll: true }), 450)
    return () => window.clearTimeout(timer)
  }, [location.key])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const contact = String(data.get('contact') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(t.contact.mailSubject(name, topic))
    const lines = [message, '', '--', name, contact]
    if (topic) lines.push(`${t.contact.form.topic}: ${topic}`)
    const body = encodeURIComponent(lines.join('\n'))
    window.location.href = `mailto:${company.emails[0]}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const info = [
    { icon: MapPin, label: t.contact.labels.address, lines: company.address },
    { icon: Phone, label: t.contact.labels.phone, lines: [company.phone], href: company.phoneHref },
    { icon: Mail, label: t.contact.labels.email, lines: company.emails, href: `mailto:${company.emails[0]}` },
    { icon: Clock, label: t.contact.labels.hours, lines: [t.contact.hours] },
  ]

  return (
    <section id="contact" className="relative overflow-hidden bg-bg pt-10 pb-24 md:pt-14 md:pb-32">
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <m.ul
            variants={reduce ? undefined : stagger(0.05, 0.08)}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
          >
            {info.map((item) => {
              const Icon = item.icon
              return (
                <m.li key={item.label} variants={reduce ? undefined : fadeUp} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-accent-soft">
                    <Icon size={18} strokeWidth={1.75} aria-hidden />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{item.label}</p>
                    <div className="mt-1.5 text-sm leading-relaxed text-muted">
                      {item.lines.map((line) =>
                        item.href ? (
                          <a key={line} href={item.href.startsWith('mailto') ? `mailto:${line}` : item.href} className="block text-fg hover:text-accent-soft">
                            {line}
                          </a>
                        ) : (
                          <span key={line} className="block">
                            {line}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </m.li>
              )
            })}
          </m.ul>

          <m.form
            onSubmit={onSubmit}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-first rounded-2xl border border-line bg-surface p-6 md:p-8 lg:order-none lg:col-span-7"
          >
            {topic && (
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.topic}</span>
                <m.span
                  key={topic}
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent/10 py-1 pl-3 pr-1 text-sm text-accent-soft"
                >
                  {topic}
                  <button
                    type="button"
                    onClick={clearTopic}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-accent-soft transition-colors hover:bg-white/10 hover:text-fg"
                    aria-label={t.contact.form.clearTopic}
                  >
                    <X size={12} aria-hidden />
                  </button>
                </m.span>
              </div>
            )}
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.name}</span>
                <input ref={nameRef} name="name" required autoComplete="name" className={inputCls} placeholder={t.contact.form.namePlaceholder} />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.contact}</span>
                <input name="contact" required autoComplete="on" className={inputCls} placeholder={t.contact.form.contactPlaceholder} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.message}</span>
                <textarea name="message" required rows={5} className={`${inputCls} resize-y`} placeholder={t.contact.form.messagePlaceholder} />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" arrow>
                {t.contact.form.submit}
              </Button>
              <p className="text-xs text-dim" aria-live="polite">
                {sent ? t.contact.form.sentHint : t.contact.form.hint}
              </p>
            </div>
          </m.form>
        </div>
      </div>
    </section>
  )
}
