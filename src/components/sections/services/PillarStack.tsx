'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '@/components/motion/Reveal'
import { PILLARS } from '@/lib/data/services'

export default function PillarStack() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const panels = wrap.querySelectorAll<HTMLElement>('.pillar-panel')
    const triggers: ScrollTrigger[] = []
    panels.forEach((panel) => {
      const video = panel.querySelector('video')
      if (video) video.pause()
    })
    panels.forEach((panel) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: panel,
          start: 'top 60%',
          end: 'bottom 40%',
          onEnter: () => panel.querySelector('video')?.play().catch(() => {}),
          onEnterBack: () => panel.querySelector('video')?.play().catch(() => {}),
          onLeave: () => panel.querySelector('video')?.pause(),
          onLeaveBack: () => panel.querySelector('video')?.pause(),
        })
      )
      const lines = panel.querySelectorAll('.line-anim')
      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          stagger: 0.08,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: { trigger: panel, start: 'top 75%', once: true },
        }
      )
    })
    return () => triggers.forEach((t) => t.kill())
  }, [])

  return (
    <div ref={wrapRef}>
      {PILLARS.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className="pillar-panel relative bg-travertine border-t border-concrete/20"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10 py-24 md:py-32">
            <div className={`md:col-span-7 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative aspect-[4/3] overflow-hidden bg-ink">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  src={p.video}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-ink/15" />
                <div className="absolute inset-0 grain animate-grain-shift opacity-15" />
                <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.4em] uppercase text-travertine">
                  — {p.num}
                </div>
              </div>
            </div>

            <div className={`md:col-span-5 flex flex-col gap-8 md:py-12 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
                — Pillar {p.num}
              </div>
              <h2 className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[4.5vw] leading-[0.95]">
                <span className="block overflow-hidden">
                  <span className="line-anim block">{p.name}</span>
                </span>
              </h2>
              <p className="font-body text-base md:text-lg text-concrete leading-relaxed text-pretty max-w-[44ch]">
                {p.blurb}
              </p>
              <Reveal>
                <ul className="mt-2 flex flex-col divide-y divide-concrete/20 border-y border-concrete/20">
                  {p.details.map((d) => (
                    <li key={d} className="py-3 flex items-center gap-4 font-body text-sm text-pivot-black">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-concrete">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
