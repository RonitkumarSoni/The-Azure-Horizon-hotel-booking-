import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import CtaBlock from '@/components/sections/CtaBlock'
import ProjectHero from '@/components/sections/portfolio/ProjectHero'
import { PROJECTS, getProject } from '@/lib/data/projects'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) return { title: 'Not found' }
  return {
    title: `${p.title} — The Azure Horizon`,
    description: p.brief,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const p = getProject(slug)
  if (!p) notFound()
  const idx = PROJECTS.findIndex((x) => x.slug === p.slug)
  const next = PROJECTS[(idx + 1) % PROJECTS.length]

  return (
    <>
      <ProjectHero project={p} />

      {/* Brief + facts */}
      <section className="relative bg-travertine py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
                — Brief
              </div>
              <h2 className="font-display font-light text-pivot-black text-[10vw] md:text-[4vw] leading-[1] text-balance">
                What we did, why we did it.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 flex flex-col gap-10">
            <Reveal delay={0.05}>
              <p className="font-display italic text-2xl md:text-3xl text-pivot-black leading-tight max-w-[44ch]">
                {p.brief}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-px bg-concrete/30 border-y border-concrete/30">
                {p.facts.map((f) => (
                  <div key={f.label} className="bg-travertine p-6 flex flex-col gap-2">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
                      — {f.label}
                    </span>
                    <span className="font-display font-light text-2xl md:text-3xl text-pivot-black tabular-nums">
                      {f.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="relative bg-ink text-travertine py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — Scope
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[4vw] leading-[1]">
              The spec, in order.
            </h2>
          </Reveal>
          <div className="md:col-span-8">
            <ol className="flex flex-col">
              {p.scope.map((s, i) => (
                <Reveal
                  key={s}
                  delay={i * 0.04}
                  className="grid grid-cols-12 items-center gap-6 py-6 border-b border-travertine/15"
                >
                  <span className="col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/50 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="col-span-10 font-display font-light text-2xl md:text-3xl">
                    {s}
                  </span>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                {p.brands.map((b) => (
                  <span key={b} className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine border border-travertine/40 px-3 py-2">
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {p.gallery.length > 0 && (
        <section className="relative bg-travertine py-24 md:py-32">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-12 gap-4 md:gap-6">
            {p.gallery.map((g, i) => (
              <Reveal
                key={i}
                delay={i * 0.05}
                className={i % 3 === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4'}
              >
                <figure className={`relative overflow-hidden bg-ink ${
                  g.ratio === '3/4' ? 'aspect-[3/4]' : g.ratio === '16/9' ? 'aspect-video' : 'aspect-[4/3]'
                }`}>
                  {g.src.endsWith('.mp4') ? (
                    <video
                      className="absolute inset-0 h-full w-full object-cover"
                      src={g.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                    />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={g.src} alt={g.caption || ''} className="absolute inset-0 h-full w-full object-cover" />
                  )}
                  <div className="absolute inset-0 bg-ink/10" />
                  {g.caption && (
                    <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine">
                      — {g.caption}
                    </figcaption>
                  )}
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* Next */}
      <section className="relative bg-travertine border-t border-concrete/20">
        <Link
          href={`/portfolio/${next.slug}`}
          data-cursor-hover
          data-cursor-label="next"
          className="group relative grid md:grid-cols-12 items-center gap-6 px-6 md:px-10 py-16 md:py-24"
        >
          <span className="md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            — Next project
          </span>
          <span className="md:col-span-7 font-display text-5xl md:text-7xl font-light text-pivot-black leading-none italic">
            {next.title}
          </span>
          <span className="md:col-span-3 md:text-right font-mono text-[10px] tracking-[0.3em] uppercase text-pivot-black flex md:justify-end items-center gap-3">
            <span className="h-px w-12 bg-pivot-black group-hover:bg-golden-amber transition-colors" />
            Read
            <span>→</span>
          </span>
        </Link>
      </section>

      <CtaBlock heading="Have a project of your own?" emphasis="Let's talk." />
    </>
  )
}
