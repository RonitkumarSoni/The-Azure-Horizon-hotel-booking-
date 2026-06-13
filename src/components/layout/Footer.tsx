'use client'

import Link from 'next/link'
import Marquee from '@/components/motion/Marquee'

const COLUMNS = [
  {
    label: 'Site',
    items: [
      { href: '/', label: 'Index' },
      { href: '/about', label: 'About' },
      { href: '/services', label: 'Services' },
      { href: '/products', label: 'Products' },
      { href: '/portfolio', label: 'Work' },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    label: 'Brands',
    items: [
      { href: '/products/pgt', label: 'PGT' },
      { href: '/products/andersen', label: 'Andersen' },
      { href: '/products/superhouse', label: 'SuperHouse' },
      { href: '/products/euro-wall', label: 'Euro-Wall' },
    ],
  },
  {
    label: 'Studio',
    items: [
      { href: '/about#story', label: 'Story' },
      { href: '/about#team', label: 'Team' },
      { href: '/about#philosophy', label: 'Philosophy' },
      { href: '/services#process', label: 'Process' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative bg-ink text-travertine overflow-hidden">
      <div className="absolute inset-0 grain animate-grain-shift opacity-30" />

      <div className="relative border-y border-travertine/15 py-6">
        <Marquee speed={45} className="font-display text-[10vw] md:text-[7vw] italic font-light tracking-tight leading-none">
          <span className="px-8">Built in Orlando</span>
          <span className="px-8 text-golden-amber">·</span>
          <span className="px-8">Installed across Central Florida</span>
          <span className="px-8 text-golden-amber">·</span>
          <span className="px-8 not-italic font-normal">EST. 2008</span>
          <span className="px-8 text-golden-amber">·</span>
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
            — Begin a project
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-balance">
            Bring us a <em className="italic">drawing,</em> a <em className="italic">site,</em> or
            an <em className="italic">idea.</em> We&apos;ll bring the rest.
          </h2>
          <Link
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 text-travertine"
            data-cursor-hover
            data-cursor-label="say hi"
          >
            <span className="font-mono text-xs tracking-[0.3em] uppercase">Start the conversation</span>
            <span className="relative h-px w-16 bg-travertine/40 overflow-hidden">
              <span className="absolute inset-0 bg-golden-amber origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-exhale" />
            </span>
            <span className="font-mono text-xs">→</span>
          </Link>
        </div>

        <div className="md:col-span-7 grid gap-10 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.label} className="flex flex-col gap-4">
              <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-travertine/50">
                — {col.label}
              </div>
              <ul className="flex flex-col gap-2">
                {col.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className="font-display text-xl font-light hover:italic hover:text-golden-amber transition-colors"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 pb-10 grid gap-6 md:grid-cols-3 border-t border-travertine/15 pt-8">
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/60">
          © 2025 The Azure Horizon
        </div>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/60 md:text-center">
          Licensed &nbsp;·&nbsp; Insured &nbsp;·&nbsp; CGC1521543
        </div>
        <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/60 md:text-right">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-golden-amber">Instagram</a>
          <span className="mx-3 text-travertine/30">·</span>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-golden-amber">Facebook</a>
          <span className="mx-3 text-travertine/30">·</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-golden-amber">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
