'use client'

import { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import type { Project } from '@/lib/data/projects'

const FILTERS = ['All', 'Residential', 'Commercial'] as const
type Filter = (typeof FILTERS)[number]

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.type === filter)),
    [filter, projects]
  )

  return (
    <section className="relative bg-travertine py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-12">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            — Filter
          </span>
          {FILTERS.map((f) => {
            const active = f === filter
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                data-cursor-hover
                className={`font-mono text-[11px] tracking-[0.3em] uppercase px-4 py-2 border transition-colors duration-300 ${
                  active
                    ? 'border-pivot-black bg-pivot-black text-travertine'
                    : 'border-concrete/40 text-pivot-black hover:border-pivot-black'
                }`}
              >
                {f}
              </button>
            )
          })}
          <span className="ml-auto font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
            {visible.length.toString().padStart(2, '0')} / {projects.length.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {visible.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const span = (() => {
    const order = index % 6
    if (order === 0) return 'col-span-12 md:col-span-8'
    if (order === 1) return 'col-span-12 md:col-span-4'
    if (order === 2) return 'col-span-12 md:col-span-5'
    if (order === 3) return 'col-span-12 md:col-span-7'
    if (order === 4) return 'col-span-12 md:col-span-6'
    return 'col-span-12 md:col-span-6'
  })()
  const aspect = project.ratio === '3/4' ? 'aspect-[3/4]' : project.ratio === '16/9' ? 'aspect-video' : 'aspect-[4/3]'

  return (
    <Reveal delay={index * 0.04} className={span}>
      <Link
        href={`/portfolio/${project.slug}`}
        data-cursor-hover
        data-cursor-label="open"
        onMouseEnter={() => videoRef.current?.play().catch(() => {})}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0
          }
        }}
        className={`group relative block ${aspect} overflow-hidden bg-ink`}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover scale-[1.02] group-hover:scale-100 transition-transform duration-1000 ease-exhale"
          src={project.cover}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-ink/15 group-hover:bg-ink/40 transition-colors duration-500" />
        <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-8 text-travertine">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.3em] uppercase">
            <span>— {project.type}</span>
            <span className="tabular-nums">{project.year}</span>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h3 className="font-display font-light text-2xl md:text-3xl leading-tight">
                {project.title}
              </h3>
              <div className="mt-1 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/70">
                {project.city}
              </div>
            </div>
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-exhale">
              Read →
            </span>
          </div>
        </div>
        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-golden-amber group-hover:scale-x-100 transition-transform duration-700 ease-exhale" />
      </Link>
    </Reveal>
  )
}
