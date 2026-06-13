'use client'

import Reveal from '@/components/motion/Reveal'
import { HERITAGE } from '@/lib/data/services'

export default function HeritageTimeline() {
  return (
    <section className="relative bg-ink text-travertine py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-16 md:mb-24 gap-6">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
                — Heritage
              </div>
              <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
                A long line of <em className="italic text-golden-amber">Floridians.</em>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-2 border-t border-travertine/15">
          {HERITAGE.map((era, i) => (
            <Reveal key={era.year} delay={i * 0.05} className="relative md:border-r border-travertine/15 last:border-r-0 pt-8 pb-2 md:p-8 group">
              <div className="absolute top-0 left-0 h-px w-0 bg-golden-amber transition-all duration-700 group-hover:w-full" />
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/50 mb-6 tabular-nums">
                {era.year}
              </div>
              <h3 className="font-display font-light text-2xl md:text-3xl mb-4 leading-tight text-balance">
                {era.name}
              </h3>
              <p className="font-body text-sm text-travertine/70 leading-relaxed text-pretty max-w-[40ch]">
                {era.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
