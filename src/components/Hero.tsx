import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { hero } from '../data/content'
import { Button } from './ui/Button'
import { NetworkGlobe } from './NetworkGlobe'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const globeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const lineVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease, delay: 0.25 + i * 0.1 },
    }),
  }

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-bg pt-24 lg:justify-center"
    >
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />

      <motion.div
        style={{ y: globeY }}
        className="pointer-events-none absolute -right-[10%] top-[8%] h-[70vmin] w-[70vmin] opacity-70 sm:opacity-100 sm:-right-[6%] sm:top-[6%] sm:h-[80vmin] sm:w-[80vmin] lg:right-[-2%] lg:top-[4%] lg:h-[92vh] lg:w-[92vh]"
        aria-hidden
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.1 }}
          className="h-full w-full"
        >
          <NetworkGlobe className="h-full w-full" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-16 md:px-8 md:pb-24 lg:py-16"
      >
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="eyebrow mb-6"
        >
          Automation · IoT · Smart Industry
        </motion.p>

        <h1 className="max-w-4xl text-[2.75rem] font-medium leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {hero.title.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={reduce ? undefined : lineVariants}
                initial={reduce ? undefined : 'hidden'}
                animate={reduce ? undefined : 'visible'}
                className="block"
              >
                {i === 2 ? (
                  <>
                    through <span className="text-gradient">smart solutions.</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.65 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.8 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button href={hero.primaryCta.href} arrow>
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-dim md:flex"
        aria-hidden
      >
        <span className="h-px w-8 bg-line-strong" />
        Scroll
        <span className="h-px w-8 bg-line-strong" />
      </motion.div>
    </section>
  )
}
