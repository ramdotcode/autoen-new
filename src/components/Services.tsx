import { m, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { Link } from 'react-router'
import { contactHref } from '../lib/inquiry'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

function Marquee() {
  const { t } = useI18n()
  const items = [...t.services.marquee, ...t.services.marquee]
  return (
    <div className="relative mt-20 overflow-hidden border-y border-line py-5" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg to-transparent" />
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 font-mono text-xs uppercase tracking-[0.2em] text-dim">
            {item}
            <span className="h-1 w-1 rounded-full bg-accent-red/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function Services() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  return (
    <section id="products" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
          />
        </div>

        <m.ul
          variants={reduce ? undefined : stagger(0.1, 0.08)}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((s) => {
            const Icon = s.icon
            return (
              <m.li
                key={s.title}
                variants={reduce ? undefined : fadeUp}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-glow group relative rounded-xl border border-line bg-surface transition-colors hover:bg-surface-2"
              >
                <Link
                  to={contactHref(s.title)}
                  className="flex h-full flex-col rounded-xl p-6 md:p-7"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white/[0.03] text-accent-soft">
                    <Icon size={20} strokeWidth={1.75} aria-hidden />
                  </span>
                  <h3 className="mt-6 text-lg font-medium tracking-tight text-fg">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.a11y.capabilities}>
                    {s.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-dim transition-colors group-hover:border-line-strong group-hover:text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-accent-soft transition-colors group-hover:text-fg">
                    {t.services.ask}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </m.li>
            )
          })}
        </m.ul>
      </div>
      <Marquee />
    </section>
  )
}
