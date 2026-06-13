'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

type Props = {
  pageNumber: string
  pageLabel: string
  title: string
  italicTitle?: string
  meta?: string[]
  intro?: string
}

export default function PageHero({
  pageNumber,
  pageLabel,
  title,
  italicTitle,
  meta = [],
  intro,
}: Props) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    const lines = titleRef.current.querySelectorAll('.h-line')
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', delay: 0.4 }
    )
  }, [])

  return (
    <section className="relative pt-44 md:pt-52 pb-24 md:pb-32 bg-travertine">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber tabular-nums">
                — {pageNumber}
              </span>
              <span className="h-px w-16 bg-concrete/40" />
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete">
                {pageLabel}
              </span>
            </div>
            <h1
              ref={titleRef}
              className="font-display font-light text-pivot-black leading-[0.95] tracking-tight text-balance"
            >
              <span className="block overflow-hidden">
                <span className="h-line block text-[14vw] md:text-[8vw]">{title}</span>
              </span>
              {italicTitle && (
                <span className="block overflow-hidden">
                  <span className="h-line block text-[14vw] md:text-[8vw] italic text-golden-amber">
                    {italicTitle}
                  </span>
                </span>
              )}
            </h1>
          </div>

          <div className="md:col-span-4 flex flex-col gap-4">
            {intro && (
              <p className="font-body text-base md:text-lg text-concrete leading-relaxed max-w-[44ch] text-pretty">
                {intro}
              </p>
            )}
            {meta.length > 0 && (
              <ul className="mt-6 flex flex-col gap-1 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
                {meta.map((m) => (
                  <li key={m} className="flex items-center gap-3">
                    <span className="h-px w-6 bg-concrete/40" />
                    {m}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
