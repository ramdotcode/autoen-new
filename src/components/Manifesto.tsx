import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { manifesto } from '../data/content'

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.12, 1])
  const color = useTransform(progress, range, ['#3d4556', '#f3f4f6'])
  return (
    <motion.span style={{ opacity, color }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  )
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.55'] })
  const words = manifesto.split(' ')

  return (
    <section ref={ref} id="about" className="relative bg-bg-deep" aria-label="Our vision">
      <div className="sticky top-0 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <p className="eyebrow mb-8">Our vision</p>
          {reduce ? (
            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-fg sm:text-3xl md:text-[2.75rem] md:leading-[1.2] lg:text-[3.25rem]">
              {manifesto}
            </p>
          ) : (
            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.02em] sm:text-3xl md:text-[2.75rem] md:leading-[1.2] lg:text-[3.25rem]">
              {words.map((w, i) => {
                const start = i / words.length
                const end = start + 1 / words.length
                return <Word key={`${w}-${i}`} word={w} progress={scrollYProgress} range={[start, end]} />
              })}
            </p>
          )}
        </div>
      </div>
      {/* scroll runway so the sticky block has room to animate */}
      <div className="h-[110vh]" aria-hidden />
    </section>
  )
}
