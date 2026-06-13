'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Project } from '@/lib/data/projects'

export default function PortfolioStrip({ projects }: { projects: Project[] }) {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex items-end justify-between mb-12 md:mb-20 gap-6">
          <Reveal>
            <div className="flex flex-col gap-6">
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete">
                — Selected work
              </div>
              <h2 className="font-display font-light text-balance text-[10vw] md:text-[5.5vw] leading-[0.95]">
                A glimpse of <em className="italic text-golden-amber">what we&apos;ve built.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-pivot-black hover:text-golden-amber transition-colors"
              data-cursor-hover
            >
              <span className="h-px w-12 bg-pivot-black" />
              View all work
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-px bg-concrete/30">
          {projects.slice(0, 4).map((p, i) => (
            <PortfolioCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-pivot-black"
          >
            <span className="h-px w-12 bg-pivot-black" />
            View all work
          </Link>
        </div>
      </div>
    </section>
  )
}

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const span = index === 0 || index === 3 ? 'col-span-12 md:col-span-7' : 'col-span-12 md:col-span-5'
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-cursor-hover
      data-cursor-label="open"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        videoRef.current?.pause()
        if (videoRef.current) videoRef.current.currentTime = 0
      }}
      className={`group relative bg-travertine ${span} aspect-[4/3] overflow-hidden`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover scale-[1.02] transition-transform duration-1000 group-hover:scale-100"
        src={project.cover}
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/35 transition-colors duration-500" />
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-travertine">
        <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase">
          <span>— {project.type}</span>
          <span>{project.year}</span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
              {project.title}
            </h3>
            <div className="mt-2 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/70">
              {project.city}
            </div>
          </div>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-exhale">
            Read →
          </span>
        </div>
      </div>
    </Link>
  )
}
