'use client'

import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Props = {
  children: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
  stagger?: number
  delay?: number
  trigger?: 'scroll' | 'mount'
}

export default function SplitHeading({
  children,
  className,
  as: Tag = 'h2',
  stagger = 0.04,
  delay = 0,
  trigger = 'scroll',
}: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const split = new SplitType(el, { types: 'lines,words' })
    if (split.lines) {
      split.lines.forEach((line) => {
        line.style.overflow = 'hidden'
        line.style.paddingBottom = '0.08em'
      })
    }
    const targets = split.words || []
    gsap.set(targets, { yPercent: 110 })
    let st: ScrollTrigger | undefined
    const anim = gsap.to(targets, {
      yPercent: 0,
      duration: 1.1,
      ease: 'expo.out',
      stagger,
      delay,
      paused: trigger === 'scroll',
    })
    if (trigger === 'scroll') {
      st = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => anim.play(),
      })
    } else {
      anim.play()
    }
    return () => {
      anim.kill()
      st?.kill()
      split.revert()
    }
  }, [children, stagger, delay, trigger])

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  )
}
