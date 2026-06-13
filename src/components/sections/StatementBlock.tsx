'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

type Props = {
  eyebrow: string
  body: string
  emphasis?: string
  align?: 'left' | 'center'
}

export default function StatementBlock({ eyebrow, body, emphasis, align = 'left' }: Props) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const split = new SplitType(el, { types: 'lines,words' })
    const words = split.words || []
    gsap.set(words, { opacity: 0.18 })
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 75%',
      end: 'bottom 40%',
      scrub: 0.6,
      onUpdate: (self) => {
        const idx = Math.floor(self.progress * words.length)
        words.forEach((w, i) => {
          ;(w as HTMLElement).style.opacity = i <= idx ? '1' : '0.18'
        })
      },
    })
    return () => {
      st.kill()
      split.revert()
    }
  }, [body])

  return (
    <section className={`relative bg-travertine py-32 md:py-48 ${align === 'center' ? 'text-center' : ''}`}>
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className={`flex flex-col gap-10 ${align === 'center' ? 'items-center' : ''}`}>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
            — {eyebrow}
          </div>
          <p
            ref={ref}
            className="font-display font-light text-pivot-black text-[7vw] md:text-[3.6vw] leading-[1.1] tracking-tight max-w-[24ch] text-balance"
          >
            {body}
          </p>
          {emphasis && (
            <div className="font-display italic text-2xl md:text-3xl text-golden-amber">
              — {emphasis}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
