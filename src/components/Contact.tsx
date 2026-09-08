import { useState, type FormEvent } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/content'
import { useI18n } from '../i18n'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const inputCls =
  'w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-fg placeholder:text-dim transition-colors focus:border-accent-soft focus:outline-none'

export function Contact() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const companyName = String(data.get('company') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(t.contact.mailSubject(name, companyName))
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}\n${companyName}`)
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
    <section id="contact" className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} text={t.contact.text} />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <motion.ul
            variants={reduce ? undefined : stagger(0.05, 0.08)}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
          >
            {info.map((item) => {
              const Icon = item.icon
              return (
                <motion.li key={item.label} variants={reduce ? undefined : fadeUp} className="flex gap-4">
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
                </motion.li>
              )
            })}
          </motion.ul>

          <motion.form
            onSubmit={onSubmit}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="rounded-2xl border border-line bg-surface p-6 md:p-8 lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.name}</span>
                <input name="name" required autoComplete="name" className={inputCls} placeholder={t.contact.form.namePlaceholder} />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.email}</span>
                <input name="email" type="email" required autoComplete="email" className={inputCls} placeholder={t.contact.form.emailPlaceholder} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{t.contact.form.company}</span>
                <input name="company" autoComplete="organization" className={inputCls} placeholder={t.contact.form.companyPlaceholder} />
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
          </motion.form>
        </div>
      </div>
    </section>
  )
}
