'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import SplitHeading from '@/components/motion/SplitHeading'

type Pillar = {
  num: string
  name: string
  blurb: string
  href: string
  video: string
}

export default function PillarTiles({ pillars }: { pillars: Pillar[] }) {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete mb-6">
            — What we do
          </div>
        </Reveal>
        <SplitHeading
          as="h2"
          className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[6vw] leading-[0.95] mb-20"
        >
          {`Three rooms of one practice.`}
        </SplitHeading>

        <div className="grid gap-px bg-concrete/30 border-y border-concrete/30 md:grid-cols-3">
          {pillars.map((p) => (
            <Tile key={p.num} pillar={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tile({ pillar }: { pillar: Pillar }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <Link
      href={pillar.href}
      data-cursor-hover
      data-cursor-label="open"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 1.15
          videoRef.current.play().catch(() => {})
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.playbackRate = 1
          videoRef.current.pause()
        }
      }}
      className="group relative bg-travertine overflow-hidden aspect-[3/4] md:aspect-auto md:h-[520px]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        src={pillar.video}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/40 transition-colors duration-700" />

      <div className="relative z-10 h-full p-8 flex flex-col justify-between">
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete group-hover:text-travertine transition-colors duration-500">
            — Pillar {pillar.num}
          </span>
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete/70 group-hover:text-travertine/70 transition-colors duration-500">
            ↗
          </span>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="font-display text-4xl md:text-5xl font-light text-pivot-black group-hover:text-travertine transition-colors duration-500 leading-[1.05]">
            {pillar.name}
          </h3>
          <p className="font-body text-base text-concrete group-hover:text-travertine/85 transition-colors duration-500 max-w-[36ch]">
            {pillar.blurb}
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-pivot-black group-hover:text-golden-amber transition-colors duration-500">
              Explore
            </span>
            <span className="h-px w-10 bg-pivot-black group-hover:bg-golden-amber transition-colors duration-500" />
          </div>
        </div>
      </div>

      {/* Hover hairline accent */}
      <span className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 bg-golden-amber group-hover:scale-x-100 transition-transform duration-700 ease-exhale" />
    </Link>
  )
}
