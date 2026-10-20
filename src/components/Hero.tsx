import { lazy, Suspense, useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { MousePointer2, Pointer } from 'lucide-react'
import { useI18n } from '../i18n'
import { Button } from './ui/Button'
import { contactHref } from '../lib/inquiry'

// three.js is heavy, so the robot loads in its own chunk after the page paints.
const RobotArm = lazy(() => import('./RobotArm'))

const ease = [0.22, 1, 0.36, 1] as const

/** Tells visitors the robot reacts to them; fades out after they have tried it. */
function RobotHint({ label, touch }: { label: string; touch: boolean }) {
  const Icon = touch ? Pointer : MousePointer2
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8, transition: { duration: 0.4, ease } }}
      transition={{ duration: 0.6, ease, delay: 0.8 }}
      className="flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/80 py-1 pl-1 pr-2.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.16em] text-fg shadow-lg shadow-black/30 backdrop-blur-md"
    >
      <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent-soft">
        <span className="absolute inset-0 animate-ping rounded-full bg-accent/30" />
        <motion.span
          animate={touch ? { y: [0, -2, 1, 0], scale: [1, 1, 0.88, 1] } : { x: [0, 3, -1, 0], y: [0, -2, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <Icon className="h-3 w-3" strokeWidth={2.25} />
        </motion.span>
      </span>
      {label}
    </motion.div>
  )
}

/** Wraps the highlighted phrase of a headline line in the gradient treatment. */
function HeadlineLine({ line, highlight }: { line: string; highlight: string }) {
  const at = line.indexOf(highlight)
  if (at === -1) return <>{line}</>
  return (
    <>
      {line.slice(0, at)}
      <span className="text-gradient">{highlight}</span>
      {line.slice(at + highlight.length)}
    </>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { t } = useI18n()
  const [robotReady, setRobotReady] = useState(false)
  const [robotTouched, setRobotTouched] = useState(false)
  const [finePointer] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  )
  const onRobotReady = useCallback(() => setRobotReady(true), [])
  // Keep the hint up a few seconds after the first move so it reads as confirmation too.
  const onRobotInteract = useCallback(() => {
    window.setTimeout(() => setRobotTouched(true), 4000)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 80])
  const robotY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
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
        style={{ y: robotY }}
        className="pointer-events-none absolute inset-x-0 top-[7%] h-[58svh] opacity-60 sm:opacity-90 lg:left-auto lg:right-0 lg:top-[6%] lg:h-[90%] lg:w-[58%] lg:opacity-100"
        aria-hidden
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease, delay: 0.1 }}
          className="h-full w-full"
        >
          <Suspense fallback={null}>
            <RobotArm className="h-full w-full" onReady={onRobotReady} onInteract={onRobotInteract} />
          </Suspense>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-24 z-10 flex justify-center px-6 sm:top-28 lg:inset-x-auto lg:right-[29%] lg:top-auto lg:bottom-[9%] lg:translate-x-1/2 lg:px-0">
        <AnimatePresence>
          {robotReady && !robotTouched && !reduce && (
            <RobotHint label={finePointer ? t.hero.robotHint.mouse : t.hero.robotHint.touch} touch={!finePointer} />
          )}
        </AnimatePresence>
      </div>

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
          {t.hero.eyebrow}
        </motion.p>

        <h1 className="max-w-4xl text-[2.75rem] font-medium leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {t.hero.titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={reduce ? undefined : lineVariants}
                initial={reduce ? undefined : 'hidden'}
                animate={reduce ? undefined : 'visible'}
                className="block"
              >
                <HeadlineLine line={line} highlight={t.hero.highlight} />
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
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.8 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button to={contactHref()} arrow>
            {t.hero.primaryCta}
          </Button>
          <Button to="/products" variant="ghost">
            {t.hero.secondaryCta}
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
        {t.hero.scroll}
        <span className="h-px w-8 bg-line-strong" />
      </motion.div>
    </section>
  )
}
