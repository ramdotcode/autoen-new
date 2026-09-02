import { motion, useReducedMotion } from 'motion/react'
import { approach } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export function Approach() {
  const reduce = useReducedMotion()
  return (
    <section className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we value most"
              title="Smart solutions for a connected future."
              text="We are a team of experienced professionals who design, integrate and support automation and IoT systems — from the first assessment to years after go-live."
            />
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mt-10 overflow-hidden rounded-xl border border-line"
            >
              <img
                src="/img/about.jpg"
                alt="Autoen engineers discussing an IoT and automation workflow"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
            </motion.div>
          </div>

          <motion.ul
            variants={reduce ? undefined : stagger(0.1, 0.1)}
            initial={reduce ? undefined : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:mt-14"
          >
            {approach.map((item) => (
              <motion.li
                key={item.title}
                variants={reduce ? undefined : fadeUp}
                whileHover={reduce ? undefined : { y: -3 }}
                transition={{ duration: 0.3 }}
                className="card-glow group rounded-xl border border-line bg-surface p-6 transition-colors hover:bg-surface-2"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white/[0.04]">
                  <img src={item.image} alt="" width={40} height={40} className="h-10 w-10 object-contain" loading="lazy" />
                </div>
                <h3 className="mt-5 text-lg font-medium tracking-tight text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
