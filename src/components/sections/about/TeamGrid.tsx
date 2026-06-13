'use client'

import Reveal from '@/components/motion/Reveal'
import { TEAM } from '@/lib/data/team'

export default function TeamGrid() {
  return (
    <section id="team" className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 items-end gap-10 mb-16 md:mb-24">
          <Reveal className="md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — The crew
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
              Built on relationships, <em className="italic text-golden-amber">not transactions.</em>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="font-body text-base md:text-lg text-concrete leading-relaxed text-pretty max-w-[42ch]">
              The same names on every job. We have been at this long enough to
              know each other&apos;s rhythms — and to finish each other&apos;s
              schedules.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-12 gap-px bg-concrete/30 border-y border-concrete/30">
          {TEAM.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.05}
              className={`group relative bg-travertine ${
                i === 0 ? 'md:col-span-6 md:row-span-2' : 'md:col-span-3'
              } p-8 md:p-10 flex flex-col gap-8`}
            >
              <div className="aspect-square relative overflow-hidden bg-concrete/20">
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="absolute inset-0 h-full w-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute inset-0 bg-florida-oak/10 mix-blend-multiply" />
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display font-light text-3xl md:text-4xl text-pivot-black leading-tight">
                    {m.name}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-golden-amber">
                  {m.role}
                </div>
                {i === 0 && (
                  <p className="font-display italic text-xl md:text-2xl text-pivot-black mt-3 leading-snug max-w-[28ch]">
                    {m.pull}
                  </p>
                )}
                <p className="font-body text-sm text-concrete leading-relaxed text-pretty max-w-[42ch] mt-1">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
