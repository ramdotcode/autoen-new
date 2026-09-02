import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { coreValues } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function CoreValues() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const current = coreValues[active]

  return (
    <section id="values" className="relative bg-bg-deep py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Core values"
          title="What we stand for in every project."
          text="These values empower us to deliver technology that drives real growth for clients and partners."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ul className="divide-y divide-line border-y border-line" role="tablist" aria-label="Core values">
              {coreValues.map((v, i) => {
                const isActive = i === active
                return (
                  <li key={v.title}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls={`value-panel-${i}`}
                      id={`value-tab-${i}`}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group flex w-full items-center justify-between py-5 text-left transition-colors ${
                        isActive ? 'text-fg' : 'text-dim hover:text-muted'
                      }`}
                    >
                      <span className="flex items-baseline gap-5">
                        <span className="font-mono text-xs">0{i + 1}</span>
                        <span className="text-2xl font-medium tracking-[-0.02em] md:text-3xl">{v.title}</span>
                      </span>
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                          isActive ? 'scale-100 bg-accent-red' : 'scale-0 bg-transparent'
                        }`}
                        aria-hidden
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div
              className="relative min-h-[220px] overflow-hidden rounded-xl border border-line bg-surface p-8 md:min-h-[260px] md:p-10"
              role="tabpanel"
              id={`value-panel-${active}`}
              aria-labelledby={`value-tab-${active}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/15 blur-3xl" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="eyebrow">Value 0{active + 1}</p>
                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-fg md:text-4xl">{current.title}</h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{current.text}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
