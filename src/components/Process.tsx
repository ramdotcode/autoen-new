import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react'
import { Check } from 'lucide-react'
import { process } from '../data/content'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Process() {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.7'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const scaleY = useTransform(smooth, [0, 1], [0, 1])

  return (
    <section id="process" className="relative bg-bg-deep py-24 md:py-32">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="How we work"
                title="A clear path from problem to running system."
                text="Every engagement follows five steps, so you always know what happens next and who is responsible."
              />
            </div>
          </div>

          <ol ref={ref} className="relative lg:col-span-8" aria-label="Our process">
            {/* track */}
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line md:left-[19px]" aria-hidden />
            <motion.div
              style={{ scaleY: reduce ? 1 : scaleY }}
              className="absolute left-[15px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-accent-red via-violet-500 to-accent md:left-[19px]"
              aria-hidden
            />

            {process.map((p, i) => (
              <Reveal key={p.step} as="li" className="relative pl-12 md:pl-16" delay={i * 0.03}>
                <div className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-line bg-bg-deep font-mono text-[11px] text-muted md:h-10 md:w-10 md:text-xs">
                  {p.step}
                </div>
                <div className={i === process.length - 1 ? 'pb-0' : 'pb-12'}>
                  <h3 className="text-xl font-medium tracking-tight text-fg md:text-2xl">{p.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">{p.text}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
                          <Check size={10} strokeWidth={3} aria-hidden />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
