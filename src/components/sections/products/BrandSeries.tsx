'use client'

import Reveal from '@/components/motion/Reveal'
import type { Brand } from '@/lib/data/brands'

export default function BrandSeries({ brand }: { brand: Brand }) {
  return (
    <section className="relative bg-travertine-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
            — Series we install
          </div>
          <h2 className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[5vw] leading-[0.95] mb-16">
            From <em className="italic">workhorse</em> to <em className="italic">architectural.</em>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-px bg-concrete/30 border-y border-concrete/30">
          {brand.series.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 0.04}
              className="group relative bg-travertine-deep p-8 md:p-12 flex flex-col gap-4 hover:bg-travertine transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
                  / {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
                  {brand.name}
                </span>
              </div>
              <h3 className="font-display font-light text-3xl md:text-4xl text-pivot-black leading-tight group-hover:italic transition-all">
                {s.name}
              </h3>
              <p className="font-body text-sm md:text-base text-concrete leading-relaxed text-pretty max-w-[44ch]">
                {s.description}
              </p>
              <div className="hairline w-12 mt-4 group-hover:w-24 transition-all duration-700 ease-exhale group-hover:bg-golden-amber" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
