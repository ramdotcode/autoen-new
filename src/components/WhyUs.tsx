import { motion, useReducedMotion } from 'motion/react'
import { whyUs } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export function WhyUs() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-accent/20 blur-[120px]" aria-hidden />
            <img
              src="/img/alt-features.png"
              alt="Illustration of secure, connected industrial systems"
              loading="lazy"
              className="w-full rounded-2xl border border-line object-cover"
            />
          </motion.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Why Autoen"
              title="A partner for the whole transformation, not just the install."
            />
            <motion.ul
              variants={reduce ? undefined : stagger(0.15, 0.08)}
              initial={reduce ? undefined : 'hidden'}
              whileInView={reduce ? undefined : 'visible'}
              viewport={viewportOnce}
              className="mt-10 divide-y divide-line border-y border-line"
            >
              {whyUs.map((w, i) => (
                <motion.li
                  key={w.title}
                  variants={reduce ? undefined : fadeUp}
                  className="group flex gap-5 py-5 transition-colors"
                >
                  <span className="pt-1 font-mono text-xs text-dim">0{i + 1}</span>
                  <div>
                    <h3 className="font-medium tracking-tight text-fg transition-colors group-hover:text-accent-soft">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{w.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
