import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'motion/react'
import { stats } from '../data/content'
import { stagger, fadeUp, viewportOnce } from '../lib/motion'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView || reduce) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, reduce, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}

export function Stats() {
  const reduce = useReducedMotion()
  return (
    <section className="border-y border-line bg-bg" aria-label="Company statistics">
      <motion.dl
        variants={reduce ? undefined : stagger(0, 0.1)}
        initial={reduce ? undefined : 'hidden'}
        whileInView={reduce ? undefined : 'visible'}
        viewport={viewportOnce}
        className="mx-auto grid max-w-7xl grid-cols-2 divide-line md:grid-cols-4 md:divide-x"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={reduce ? undefined : fadeUp}
            className="px-6 py-10 md:px-10 md:py-14"
          >
            <dd className="text-4xl font-medium tracking-[-0.03em] text-fg md:text-5xl">
              <Counter value={s.value} suffix={s.suffix} />
            </dd>
            <dt className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-dim">{s.label}</dt>
          </motion.div>
        ))}
      </motion.dl>
    </section>
  )
}
