import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp, viewportOnce } from '../../lib/motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'p' | 'span'
}

export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const reduce = useReducedMotion()
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      variants={reduce ? undefined : fadeUp}
      initial={reduce ? undefined : 'hidden'}
      whileInView={reduce ? undefined : 'visible'}
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </Tag>
  )
}
