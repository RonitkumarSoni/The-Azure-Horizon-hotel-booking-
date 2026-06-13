'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Brand } from '@/lib/data/brands'

export default function BrandGallery({ brands }: { brands: Brand[] }) {
  return (
    <section className="relative bg-travertine py-20 md:py-28">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 flex flex-col gap-px bg-concrete/30 border-y border-concrete/30">
        {brands.map((b, i) => (
          <BrandRow key={b.slug} brand={b} index={i} />
        ))}
      </div>
    </section>
  )
}

function BrandRow({ brand, index }: { brand: Brand; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  return (
    <Link
      href={`/products/${brand.slug}`}
      data-cursor-hover
      data-cursor-label="open"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
      }}
      className="group relative grid md:grid-cols-12 items-stretch gap-0 bg-travertine min-h-[60vh]"
    >
      <Reveal className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
        <div className="relative h-[40vh] md:h-full overflow-hidden bg-ink">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover scale-[1.04] group-hover:scale-100 transition-transform duration-1000 ease-exhale"
            src={brand.video}
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/0 transition-colors duration-700" />
          <div className="absolute inset-0 grain animate-grain-shift opacity-15" />
          <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.4em] uppercase text-travertine">
            — Brand {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </Reveal>
      <div className={`md:col-span-5 flex flex-col justify-between p-8 md:p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-concrete/40" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            Manufacturer partner
          </span>
        </div>
        <div className="flex flex-col gap-6 my-12">
          <h2 className="font-display font-light text-pivot-black text-[14vw] md:text-[7vw] leading-[0.9]">
            {brand.name}
          </h2>
          <p className="font-display italic text-2xl md:text-3xl text-golden-amber max-w-[28ch] leading-tight">
            {brand.tagline}
          </p>
          <p className="font-body text-base text-concrete leading-relaxed text-pretty max-w-[44ch]">
            {brand.blurb}
          </p>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-pivot-black group-hover:text-golden-amber transition-colors">
          <span>Open the spec</span>
          <span className="h-px w-10 bg-pivot-black group-hover:bg-golden-amber transition-colors" />
          <span>↗</span>
        </div>
      </div>
    </Link>
  )
}
