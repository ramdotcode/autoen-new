import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const MotionLink = motion.create(Link)

/** Home-page links to the inner pages. */
export function Explore() {
  const reduce = useReducedMotion()
  const { t } = useI18n()

  return (
    <section className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow={t.pages.explore.eyebrow} title={t.pages.explore.title} />
        <motion.ul
          variants={reduce ? undefined : stagger(0.1, 0.08)}
          initial={reduce ? undefined : 'hidden'}
          whileInView={reduce ? undefined : 'visible'}
          viewport={viewportOnce}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {t.pages.explore.items.map((item, i) => (
            <motion.li key={item.to} variants={reduce ? undefined : fadeUp}>
              <MotionLink
                to={item.to}
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ duration: 0.3 }}
                className="card-glow group flex h-full min-h-[170px] flex-col md:min-h-[220px] justify-between rounded-2xl border border-line bg-surface p-7 transition-colors hover:bg-surface-2 md:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-xs text-dim">0{i + 1}</span>
                  <ArrowUpRight
                    size={22}
                    className="text-dim transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fg"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.03em] text-fg">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              </MotionLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
