'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'

type Props = React.HTMLAttributes<HTMLDivElement> & {
  strength?: number
  children: React.ReactNode
}

export default function MagneticLink({
  strength = 0.35,
  children,
  className,
  ...rest
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' })
  }
  const onLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={className}
      {...rest}
    >
      {children}
    </div>
  )
}
