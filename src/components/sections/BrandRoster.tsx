'use client'

import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Brand } from '@/lib/data/brands'

export default function BrandRoster({ brands, eyebrow = 'Trusted partners', heading }: { brands: Brand[]; eyebrow?: string; heading: string }) {
  return (
    <section className="relative bg-ink text-travertine py-28 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
            — {eyebrow}
          </div>
        </Reveal>
        <Reveal>
          <h2 className="mt-6 font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
            {heading}
          </h2>
        </Reveal>

        <div className="mt-20 divide-y divide-travertine/15 border-y border-travertine/15">
          {brands.map((b, i) => (
            <Link
              key={b.slug}
              href={`/products/${b.slug}`}
              data-cursor-hover
              data-cursor-label="open"
              className="group relative grid grid-cols-12 items-center gap-6 py-8 md:py-10 px-2 transition-colors duration-500 hover:bg-travertine hover:text-ink"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-[11px] tracking-[0.3em] tabular-nums text-travertine/50 group-hover:text-ink/50 transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="col-span-10 md:col-span-4 font-display text-3xl md:text-5xl font-light leading-none z-10 relative">
                {b.name}
              </div>
              <div className="col-span-12 md:col-span-5 font-body text-sm md:text-base text-travertine/70 group-hover:text-ink/70 max-w-[40ch] transition-colors duration-500 z-10 relative">
                {b.tagline}
              </div>
              <div className="col-span-12 md:col-span-2 flex md:justify-end items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase z-10 relative opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                <span>Spec</span>
                <span className="h-px w-10 bg-travertine/40 group-hover:bg-golden-amber transition-colors" />
                <span>↗</span>
              </div>
              
              {/* Hover Image/Video */}
              <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 xl:w-48 xl:h-48 overflow-hidden opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none z-0">
                <video src={b.video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
