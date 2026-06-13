import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import BrandHero from '@/components/sections/products/BrandHero'
import BrandSeries from '@/components/sections/products/BrandSeries'
import { BRANDS, getBrand } from '@/lib/data/brands'

type Props = { params: Promise<{ brand: string }> }

export async function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand } = await params
  const b = getBrand(brand)
  if (!b) return { title: 'Not found' }
  return {
    title: `${b.name} — The Azure Horizon`,
    description: b.tagline,
  }
}

export default async function BrandPage({ params }: Props) {
  const { brand } = await params
  const b = getBrand(brand)
  if (!b) notFound()
  const idx = BRANDS.findIndex((x) => x.slug === b.slug)
  const next = BRANDS[(idx + 1) % BRANDS.length]

  return (
    <>
      <PageHero
        pageNumber={`04 / ${String(idx + 1).padStart(2, '0')}`}
        pageLabel={`Brand · ${b.name}`}
        title={b.name}
        italicTitle={b.tagline}
        intro={b.blurb}
        meta={b.specs.map((s) => `${s.label} — ${s.value}`)}
      />

      <BrandHero brand={b} />

      <section className="relative bg-travertine py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
                — Why we install it
              </div>
              <h2 className="font-display font-light text-pivot-black text-[10vw] md:text-[4.5vw] leading-[0.95] text-balance">
                The case for <em className="italic">{b.name}.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 flex flex-col gap-6 max-w-[60ch] font-body text-base md:text-lg text-pivot-black leading-relaxed text-pretty">
            {b.copy.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BrandSeries brand={b} />

      {/* Spec sheet */}
      <section className="relative bg-ink text-travertine py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Reveal>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — Spec sheet
            </div>
            <h2 className="font-display font-light text-balance text-[10vw] md:text-[5vw] leading-[0.95] mb-16">
              The numbers, without the marketing.
            </h2>
          </Reveal>
          <dl className="grid md:grid-cols-2 gap-px bg-travertine/15 border-y border-travertine/15">
            {b.specs.map((s) => (
              <div key={s.label} className="bg-ink p-8 flex flex-col gap-3">
                <dt className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/50">
                  — {s.label}
                </dt>
                <dd className="font-display font-light text-2xl md:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Next brand */}
      <section className="relative bg-travertine border-t border-concrete/20">
        <Link
          href={`/products/${next.slug}`}
          data-cursor-hover
          data-cursor-label="next"
          className="group relative grid md:grid-cols-12 items-center gap-6 px-6 md:px-10 py-16 md:py-24"
        >
          <span className="md:col-span-2 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            — Up next
          </span>
          <span className="md:col-span-7 font-display text-5xl md:text-7xl font-light text-pivot-black leading-none">
            {next.name}
          </span>
          <span className="md:col-span-3 md:text-right font-mono text-[10px] tracking-[0.3em] uppercase text-pivot-black flex md:justify-end items-center gap-3">
            <span className="h-px w-12 bg-pivot-black group-hover:bg-golden-amber transition-colors" />
            Open
            <span>→</span>
          </span>
        </Link>
      </section>

      <CtaBlock
        heading={`Specifying ${b.name}?`}
        emphasis="Let's draw the schedule together."
        ctaLabel="Begin a project"
      />
    </>
  )
}
