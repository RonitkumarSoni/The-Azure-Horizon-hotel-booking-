'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import type { Project } from '@/lib/data/projects'

export default function ProjectHero({ project }: { project: Project }) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!titleRef.current) return
    const lines = titleRef.current.querySelectorAll('.h-line')
    gsap.fromTo(
      lines,
      { yPercent: 110 },
      { yPercent: 0, duration: 1.1, stagger: 0.1, ease: 'expo.out', delay: 0.4 }
    )
  }, [])

  return (
    <section className="relative h-[100svh] overflow-hidden bg-ink">
      {project.cover.endsWith('.mp4') ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={project.cover}
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={project.cover} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-ink/35" />
      <div className="absolute inset-0 vignette" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 text-travertine">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber tabular-nums">
            — Case study
          </span>
          <span className="h-px w-16 bg-travertine/40" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/70">
            {project.type} · {project.year}
          </span>
        </div>
        <h1
          ref={titleRef}
          className="font-display font-light leading-[0.95] tracking-tight text-balance"
        >
          <span className="block overflow-hidden">
            <span className="h-line block text-[14vw] md:text-[8vw]">{project.title}</span>
          </span>
        </h1>
        <div className="mt-6 flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/70">
          <span>{project.city}</span>
          <span>·</span>
          <span>{project.brands.join(' · ')}</span>
        </div>
      </div>
    </section>
  )
}
