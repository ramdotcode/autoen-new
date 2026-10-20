import { m, useReducedMotion } from 'motion/react'
import { ClipboardList, Headset, PenTool, Wrench } from 'lucide-react'
import { useI18n } from '../i18n'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const CYCLE_SECONDS = 10
// SVG geometry: a ring of radius R centred in a 400 × 400 viewBox.
const C = 200
const R = 140
const CIRCUMFERENCE = 2 * Math.PI * R
const TRAIL = 150
const TRAIL_DEG = (TRAIL / CIRCUMFERENCE) * 360
const stepIcons = [ClipboardList, PenTool, Wrench, Headset]
// Clockwise from the top, as fractions of the box (R / 400 = 35%).
const stepPositions = [
  { left: '50%', top: '15%' },
  { left: '85%', top: '50%' },
  { left: '50%', top: '85%' },
  { left: '15%', top: '50%' },
]

/**
 * Survey → design → install → support, drawn as a loop with one marker going
 * round it: the same team carries a project all the way through and back again.
 * Each step glows as the marker passes it.
 */
function WorkCycle() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  const cycle = t.whyUs.cycle

  return (
    <div role="img" aria-label={cycle.label} className="relative mx-auto aspect-square w-full max-w-[480px]">
      <div className="absolute inset-[18%] rounded-full bg-accent/15 blur-[80px]" aria-hidden />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="cycle-trail" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e0413f" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <circle cx={C} cy={C} r={R - 34} fill="none" stroke="rgba(255,255,255,0.05)" strokeDasharray="2 6" />
        <m.g
          style={{ transformOrigin: `${C}px ${C}px`, transformBox: 'view-box' }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: CYCLE_SECONDS, ease: 'linear', repeat: Infinity }}
        >
          {/* trail ends exactly at the marker, which sits at the top */}
          <circle
            cx={C}
            cy={C}
            r={R}
            fill="none"
            stroke="url(#cycle-trail)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`${TRAIL} ${CIRCUMFERENCE}`}
            transform={`rotate(${-90 - TRAIL_DEG} ${C} ${C})`}
          />
          <circle cx={C} cy={C - R} r="10" fill="#60a5fa" opacity="0.25" />
          <circle cx={C} cy={C - R} r="5" fill="#f3f4f6" />
        </m.g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <p className="text-2xl font-medium tracking-[-0.03em] text-fg sm:text-3xl">{cycle.center}</p>
        <p className="mt-1 max-w-[9rem] font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-dim sm:max-w-[11rem] sm:text-[11px]">
          {cycle.caption}
        </p>
      </div>

      {cycle.steps.map((label, i) => {
        const Icon = stepIcons[i]!
        return (
          <div
            key={label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={stepPositions[i]}
          >
            <div className="relative flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-fg sm:px-4 sm:py-2 sm:text-sm">
              <m.span
                className="absolute -inset-px rounded-full border border-accent-soft/70 shadow-[0_0_24px_-2px_rgba(96,165,250,0.6)]"
                initial={{ opacity: 0 }}
                animate={reduce ? { opacity: 0 } : { opacity: [0, 1, 1, 0, 0] }}
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: CYCLE_SECONDS,
                        // start from 0 so steps waiting on their delay stay dark
                        times: [0, 0.01, 0.06, 0.22, 1],
                        repeat: Infinity,
                        ease: 'easeOut',
                        delay: (i * CYCLE_SECONDS) / cycle.steps.length,
                      }
                }
                aria-hidden
              />
              <Icon size={14} strokeWidth={1.75} className="relative text-accent-soft" aria-hidden />
              <span className="relative whitespace-nowrap">{label}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function WhyUs() {
  const reduce = useReducedMotion()
  const { t } = useI18n()
  return (
    <section className="relative overflow-hidden bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <m.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <WorkCycle />
          </m.div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow={t.whyUs.eyebrow}
              title={t.whyUs.title}
            />
            <m.ul
              variants={reduce ? undefined : stagger(0.15, 0.08)}
              initial={reduce ? undefined : 'hidden'}
              whileInView={reduce ? undefined : 'visible'}
              viewport={viewportOnce}
              className="mt-10 divide-y divide-line border-y border-line"
            >
              {t.whyUs.items.map((w, i) => (
                <m.li
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
                </m.li>
              ))}
            </m.ul>
          </div>
        </div>
      </div>
    </section>
  )
}
