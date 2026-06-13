'use client'

import Link from 'next/link'
import Reveal from '@/components/motion/Reveal'
import MagneticLink from '@/components/motion/MagneticLink'

type Props = {
  eyebrow?: string
  heading: string
  emphasis?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function CtaBlock({
  eyebrow = 'Begin a project',
  heading,
  emphasis,
  ctaLabel = 'Start the conversation',
  ctaHref = '/contact',
}: Props) {
  return (
    <section className="relative bg-travertine-deep py-32 md:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-8">
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-8">
              — {eyebrow}
            </div>
            <h2 className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[5.5vw] leading-[1] tracking-tight">
              {heading}{' '}
              {emphasis && <em className="italic text-golden-amber">{emphasis}</em>}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4 flex md:justify-end" delay={0.15}>
            <MagneticLink>
              <Link
                href={ctaHref}
                data-cursor-hover
                data-cursor-label="say hi"
                className="group relative inline-flex items-center gap-3 px-8 py-5 border border-pivot-black font-mono text-[11px] tracking-[0.3em] uppercase text-pivot-black overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-travertine">
                  {ctaLabel}
                </span>
                <span className="relative z-10 transition-colors duration-500 group-hover:text-travertine">
                  →
                </span>
                <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-pivot-black transition-transform duration-700 ease-exhale group-hover:scale-x-100" />
              </Link>
            </MagneticLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
