import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { useI18n } from '../i18n'
import { clients, projects, type Project } from '../data/portfolio'
import { contactHref } from '../lib/inquiry'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Reveal } from './ui/Reveal'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

type Filter = 'all' | Project['status']
const filters: Filter[] = ['all', 'done', 'ongoing']
const ease = [0.22, 1, 0.36, 1] as const

function StatusBadge({ status }: { status: Project['status'] }) {
  const { t } = useI18n()
  if (status === 'done') {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-300">
        <CheckCircle2 size={11} aria-hidden />
        {t.portfolio.status.done}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-soft">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-soft opacity-75 motion-reduce:hidden" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-soft" />
      </span>
      {t.portfolio.status.ongoing}
    </span>
  )
}

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>('all')
  const reduce = useReducedMotion()
  const { lang, t } = useI18n()
  const shown = projects.filter((p) => filter === 'all' || p.status === filter)
  const slots = clients.length > 0 ? clients : Array.from({ length: 6 }, () => null)

  return (
    <section id="portfolio" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t.portfolio.eyebrow} title={t.portfolio.title} text={t.portfolio.text} />
          <Reveal className="shrink-0">
            <div
              className="inline-flex rounded-lg border border-line p-1"
              role="group"
              aria-label={t.a11y.portfolioFilter}
            >
              {filters.map((f) => {
                const active = f === filter
                return (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(f)}
                    className={`relative whitespace-nowrap rounded-md px-3.5 py-2 text-sm transition-colors sm:px-4 ${
                      active ? 'text-fg' : 'text-dim hover:text-muted'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="portfolio-filter"
                        transition={reduce ? { duration: 0 } : { duration: 0.35, ease }}
                        className="absolute inset-0 rounded-md bg-white/[0.08]"
                        aria-hidden
                      />
                    )}
                    <span className="relative">{t.portfolio.filters[f]}</span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        <motion.ul layout={!reduce} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((p) => (
              <motion.li
                key={p.title.en}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease }}
                className="card-glow group relative flex flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:bg-surface-2"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={p.status} />
                  {p.sample && (
                    <span className="rounded-full border border-dashed border-line-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-dim">
                      {t.portfolio.sample}
                    </span>
                  )}
                </div>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{p.sector[lang]}</p>
                <h3 className="mt-2 text-lg font-medium tracking-tight text-fg">{p.title[lang]}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.summary[lang]}</p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-sm">
                  <span className={p.client ? 'text-fg' : 'italic text-dim'}>{p.client || t.portfolio.clientPending}</span>
                  <span className="font-mono text-xs text-dim">{p.year}</span>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-20">
          <Reveal>
            <p className="eyebrow text-center">{t.portfolio.clientsTitle}</p>
          </Reveal>
          <motion.ul
            variants={reduce ? undefined : stagger(0.1, 0.06)}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="mt-8 flex flex-wrap justify-center gap-3"
            aria-label={t.a11y.clients}
          >
            {slots.map((c, i) => (
              <motion.li
                key={c?.name ?? i}
                variants={reduce ? undefined : fadeUp}
                className={`flex h-24 w-[calc(50%-0.375rem)] items-center justify-center rounded-xl px-5 sm:w-48 ${
                  c ? 'border border-line bg-surface' : 'border border-dashed border-line-strong'
                }`}
              >
                {c ? (
                  c.logo ? (
                    <img
                      src={c.logo}
                      alt={c.name}
                      className="max-h-12 w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-center text-lg font-semibold uppercase tracking-[0.12em] text-fg">{c.name}</span>
                  )
                ) : (
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-dim">{t.portfolio.clientSlot}</span>
                )}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Button to={contactHref(t.portfolio.eyebrow)} arrow>
            {t.portfolio.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
