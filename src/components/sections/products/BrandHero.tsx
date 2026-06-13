'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { Brand } from '@/lib/data/brands'

export default function BrandHero({ brand }: { brand: Brand }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return
    video.play().catch(() => {})

    const tween = gsap.fromTo(
      video,
      { scale: 1.1 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.6,
        },
      }
    )
    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [])

  return (
    <section ref={wrapRef} className="relative h-[90vh] md:h-[110vh] overflow-hidden bg-ink">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={brand.video}
        muted
        loop
        playsInline
        preload="metadata"
        style={{ willChange: 'transform' }}
      />
      <div className="absolute inset-0 bg-ink/25" />
      <div className="absolute inset-0 grain animate-grain-shift opacity-15" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="flex items-end justify-between gap-6">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/80">
            — In situ · {brand.name}
          </div>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/80">
            {brand.specs[0]?.value}
          </div>
        </div>
      </div>
    </section>
  )
}
