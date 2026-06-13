'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '@/components/motion/Reveal'
import { PROCESS } from '@/lib/data/services'

export default function ProcessSteps() {
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const line = lineRef.current
    if (!line) return
    const tween = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: line.parentElement!,
          start: 'top 60%',
          end: 'bottom 40%',
          scrub: 0.8,
        },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section id="process" className="relative bg-ink text-travertine py-28 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-20 md:mb-28">
          <Reveal className="md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — Process
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
              Six steps. <em className="italic text-golden-amber">No surprises.</em>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="font-body text-base md:text-lg text-travertine/70 leading-relaxed text-pretty max-w-[44ch]">
              Every project moves through the same six phases. Some go fast.
              Some take a year. None of them skip a phase.
            </p>
          </Reveal>
        </div>

        <div className="relative grid md:grid-cols-12 gap-px">
          <div
            ref={lineRef}
            className="absolute left-6 md:left-1/2 -translate-x-px top-0 w-px bottom-0 bg-golden-amber origin-top"
          />

          {PROCESS.map((step, i) => (
            <div
              key={step.num}
              className={`relative col-span-12 md:col-span-6 ${
                i % 2 === 0 ? 'md:col-start-1 md:pr-16' : 'md:col-start-7 md:pl-16'
              } pb-16 md:pb-24`}
            >
              <Reveal delay={i * 0.04}>
                <div
                  className={`absolute top-1 left-[19px] h-2.5 w-2.5 rounded-full bg-golden-amber z-10 ${
                    i % 2 === 0
                      ? 'md:left-auto md:right-[-5px]'
                      : 'md:left-[-5px]'
                  }`}
                />
                <div className="pl-12 md:pl-0">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/50 mb-4 tabular-nums">
                    {step.num}
                  </div>
                  <h3 className="font-display font-light text-3xl md:text-4xl mb-4 leading-tight">
                    {step.name}
                  </h3>
                  <p className="font-body text-sm md:text-base text-travertine/70 leading-relaxed text-pretty max-w-[42ch]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
