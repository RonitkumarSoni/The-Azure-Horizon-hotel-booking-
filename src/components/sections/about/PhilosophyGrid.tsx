'use client'

import Reveal from '@/components/motion/Reveal'
import { VALUES } from '@/lib/data/services'

export default function PhilosophyGrid() {
  return (
    <section id="philosophy" className="relative bg-travertine-deep py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <Reveal className="md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — Philosophy
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
              Three ideas. <em className="italic">Repeated for fifteen years.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-concrete/30 border-y border-concrete/30">
          {VALUES.map((v) => (
            <Reveal key={v.num} className="bg-travertine-deep p-10 md:p-12 flex flex-col gap-8 group">
              <div className="flex items-start justify-between">
                <ValueIcon name={v.name} />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
                  / {v.num}
                </span>
              </div>
              <div className="hairline-amber w-16" />
              <h3 className="font-display font-light text-4xl md:text-5xl text-pivot-black leading-tight">
                {v.name}
              </h3>
              <p className="font-body text-base text-concrete leading-relaxed text-pretty max-w-[42ch]">
                {v.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ValueIcon({ name }: { name: string }) {
  if (name === 'Integrity') {
    return (
      <svg width="44" height="44" viewBox="0 0 44 44" className="stroke-pivot-black group-hover:stroke-golden-amber transition-colors duration-500" fill="none">
        <path d="M22 4 L40 13 V25 C40 33 32 39 22 41 C12 39 4 33 4 25 V13 Z" strokeWidth="1" />
        <path d="M14 22 L20 28 L30 16" strokeWidth="1" />
      </svg>
    )
  }
  if (name === 'Collaboration') {
    return (
      <svg width="44" height="44" viewBox="0 0 44 44" className="stroke-pivot-black group-hover:stroke-golden-amber transition-colors duration-500" fill="none">
        <circle cx="14" cy="22" r="9" strokeWidth="1" />
        <circle cx="30" cy="22" r="9" strokeWidth="1" />
      </svg>
    )
  }
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" className="stroke-pivot-black group-hover:stroke-golden-amber transition-colors duration-500" fill="none">
      <path d="M22 4 C30 14 36 22 36 30 C36 36 30 40 22 40 C14 40 8 36 8 30 C8 22 14 14 22 4 Z" strokeWidth="1" />
    </svg>
  )
}
