import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router'
import { useI18n } from '../i18n'

const ease = [0.22, 1, 0.36, 1] as const

/** Opening block of every inner page: breadcrumb, large title, one-line intro. */
export function PageIntro({ title, text }: { title: string; text: string }) {
  const reduce = useReducedMotion()
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden bg-bg pt-36 pb-4 md:pt-48 md:pb-8">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.nav
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim"
        >
          <Link to="/" className="transition-colors hover:text-fg">
            {t.pages.home}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-accent-soft" aria-current="page">
            {title}
          </span>
        </motion.nav>
        <h1 className="mt-6 overflow-hidden text-[2.75rem] font-medium leading-[1.02] tracking-[-0.035em] text-fg sm:text-6xl md:text-7xl">
          <motion.span
            initial={reduce ? false : { y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="block"
          >
            {title}
          </motion.span>
        </h1>
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg"
        >
          {text}
        </motion.p>
        <motion.span
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease, delay: 0.45 }}
          className="mt-12 block h-px origin-left bg-gradient-to-r from-accent-red via-violet-500 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  )
}
