import type { Transition, Variants } from 'motion/react'

export const easeOutExpo = [0.22, 1, 0.36, 1] as const

export const baseTransition: Transition = {
  duration: 0.6,
  ease: easeOutExpo,
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
}

export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
})

export const viewportOnce = { once: true, margin: '-10% 0px -10% 0px' } as const
