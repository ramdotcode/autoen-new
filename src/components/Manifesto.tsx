import { useRef } from 'react'
import { m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react'
import { useI18n } from '../i18n'

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
    <m.span style={{ opacity, color }} className="inline-block">
      {word}&nbsp;
    </m.span>
  )
}

const REVEAL_END = 0.85

export function Manifesto() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { t } = useI18n()
  // Progress runs from the section reaching mid-screen until the sticky block is
  // about to scroll away, so the sentence is complete while it is still pinned.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.5', 'end end'] })
  const words = t.manifesto.text.split(' ')

  return (
    <section ref={ref} id="about" className="relative bg-bg-deep" aria-label={t.a11y.vision}>
      <div className="sticky top-0 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-8">
          <p className="eyebrow mb-8">{t.manifesto.eyebrow}</p>
          {reduce ? (
            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.02em] text-fg sm:text-3xl md:text-[2.75rem] md:leading-[1.2] lg:text-[3.25rem]">
              {t.manifesto.text}
            </p>
          ) : (
            <p className="max-w-5xl text-2xl font-medium leading-[1.25] tracking-[-0.02em] sm:text-3xl md:text-[2.75rem] md:leading-[1.2] lg:text-[3.25rem]">
              {words.map((w, i) => {
                // The last word lights up at 85%; the rest of the runway holds the
                // finished sentence on screen before the page moves on.
                const step = REVEAL_END / words.length
                const start = i * step
                const end = start + step
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
