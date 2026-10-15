import { motion, useReducedMotion } from 'motion/react'
import { UserRound } from 'lucide-react'
import { useI18n } from '../i18n'
import { team, type TeamMember } from '../data/team'
import { SectionHeading } from './ui/SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
}

function MemberCard({ member, lead }: { member: TeamMember; lead: boolean }) {
  const { lang, t } = useI18n()
  const reduce = useReducedMotion()
  const role = member.role[lang]

  return (
    <motion.li
      variants={reduce ? undefined : fadeUp}
      whileHover={reduce ? undefined : { y: -4 }}
      transition={{ duration: 0.3 }}
      className={`card-glow relative flex w-full items-center gap-4 rounded-xl border border-line bg-surface p-4 transition-colors hover:bg-surface-2 ${
        lead ? 'sm:w-[280px]' : 'sm:w-[240px]'
      }`}
    >
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-white/[0.04] text-sm font-medium text-muted">
        {member.photo ? (
          <img src={member.photo} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : member.name ? (
          initials(member.name)
        ) : (
          <UserRound size={20} strokeWidth={1.5} className="text-dim" aria-hidden />
        )}
      </span>
      <div className="min-w-0">
        <p className={`truncate pr-1 text-sm font-medium ${member.name ? 'text-fg' : 'italic text-dim'}`}>
          {member.name || t.team.namePending}
        </p>
        <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-soft">{role}</p>
      </div>
    </motion.li>
  )
}

export function Team() {
  const reduce = useReducedMotion()
  const { t } = useI18n()

  return (
    <section id="team" className="relative bg-bg-deep py-24 md:py-32" aria-label={t.a11y.team}>
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-50" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading eyebrow={t.team.eyebrow} title={t.team.title} text={t.team.text} align="center" />

        <div className="mt-16 flex flex-col items-center">
          {team.map((tier, i) => (
            <div key={i} className="flex w-full flex-col items-center">
              {i > 0 && (
                <motion.span
                  initial={reduce ? false : { scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-10 w-px origin-top bg-gradient-to-b from-accent-red via-violet-500 to-accent"
                  aria-hidden
                />
              )}
              <motion.ul
                variants={reduce ? undefined : stagger(0.1, 0.08)}
                initial={reduce ? undefined : 'hidden'}
                whileInView={reduce ? undefined : 'visible'}
                viewport={viewportOnce}
                className="flex w-full flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
              >
                {tier.map((m) => (
                  <MemberCard key={m.role.en} member={m} lead={i === 0} />
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
