import { motion, useReducedMotion } from 'motion/react'
import { useI18n } from '../i18n'
import { clients } from '../data/clients'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

/** Logos of companies Autoen has worked with. Renders nothing while the list is empty. */
export function Clients() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  if (clients.length === 0) return null

  return (
    <section id="clients" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow={t.clients.eyebrow} title={t.clients.title} align="center" />
        <motion.ul
          variants={reduce ? undefined : stagger(0.1, 0.08)}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap justify-center gap-4"
          aria-label={t.a11y.clients}
        >
          {clients.map((c) => (
            <motion.li
              key={c.name}
              variants={reduce ? undefined : fadeUp}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.3 }}
              className="card-glow flex h-28 w-full items-center justify-center rounded-2xl border border-line bg-surface px-8 transition-colors hover:bg-surface-2 sm:w-64"
            >
              <img src={c.logo} alt={c.name} title={c.name} className="max-h-12 w-auto max-w-full object-contain" loading="lazy" />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
