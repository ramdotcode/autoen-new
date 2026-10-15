import { motion, useReducedMotion } from 'motion/react'
import { useI18n } from '../i18n'
import { Reveal } from './ui/Reveal'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export function Profile() {
  const reduce = useReducedMotion()
  const { t } = useI18n()

  return (
    <section id="profile" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">{t.profile.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] text-fg sm:text-4xl md:text-5xl md:leading-[1.05]">
              {t.profile.title}
            </h2>
          </Reveal>
          {t.profile.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">{p}</p>
            </Reveal>
          ))}

          <motion.dl
            variants={reduce ? undefined : stagger(0.15, 0.08)}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3"
          >
            {t.profile.facts.map((f) => (
              <motion.div key={f.label} variants={reduce ? undefined : fadeUp} className="bg-surface p-5">
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{f.label}</dt>
                <dd className="mt-2 text-sm text-fg">{f.value}</dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        <div className="lg:col-span-6 lg:pt-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-line bg-surface p-7 md:p-10">
              <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-accent-red/10 blur-3xl" aria-hidden />
              <p className="eyebrow">{t.profile.missionTitle}</p>
              <motion.ol
                variants={reduce ? undefined : stagger(0.1, 0.1)}
                initial={reduce ? undefined : 'hidden'}
                whileInView={reduce ? undefined : 'visible'}
                viewport={viewportOnce}
                className="relative mt-6 divide-y divide-line"
              >
                {t.profile.mission.map((m, i) => (
                  <motion.li
                    key={m}
                    variants={reduce ? undefined : fadeUp}
                    className="flex gap-5 py-5 first:pt-0 last:pb-0"
                  >
                    <span className="text-gradient font-mono text-sm">0{i + 1}</span>
                    <p className="text-base leading-relaxed text-fg md:text-lg">{m}</p>
                  </motion.li>
                ))}
              </motion.ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
