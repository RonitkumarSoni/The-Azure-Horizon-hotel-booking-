'use client'

import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'figure' | 'header' | 'p' | 'span'
} & Omit<HTMLMotionProps<'div'>, 'children'>

const ease = [0.16, 1, 0.3, 1] as const

export default function Reveal({
  children,
  delay = 0,
  y = 30,
  className,
  as = 'div',
  ...rest
}: RevealProps) {
  const Cmp = motion[as] as typeof motion.div
  return (
    <Cmp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      className={className}
      {...rest}
    >
      {children}
    </Cmp>
  )
}
