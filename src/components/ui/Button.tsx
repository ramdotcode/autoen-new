import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  arrow?: boolean
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export function Button({
  href,
  children,
  variant = 'primary',
  arrow = false,
  type = 'button',
  className = '',
  onClick,
}: Props) {
  const reduce = useReducedMotion()
  const base =
    'group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-300 select-none'
  const styles =
    variant === 'primary'
      ? 'bg-accent text-white hover:bg-accent-soft shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_-10px_rgba(59,130,246,0.6)]'
      : 'border border-line text-fg hover:border-line-strong hover:bg-white/[0.03]'
  const cls = `${base} ${styles} ${className}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden
        />
      )}
    </>
  )
  const hover = reduce ? undefined : { y: -2 }
  const tap = reduce ? undefined : { scale: 0.98 }

  if (href) {
    return (
      <motion.a href={href} className={cls} whileHover={hover} whileTap={tap} onClick={onClick}>
        {content}
      </motion.a>
    )
  }
  return (
    <motion.button type={type} className={cls} whileHover={hover} whileTap={tap} onClick={onClick}>
      {content}
    </motion.button>
  )
}
