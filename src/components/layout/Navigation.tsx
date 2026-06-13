'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const NAV = [
  { href: '/', label: 'Index' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/portfolio', label: 'Work' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  // Pages with a dark video hero need light nav text until the user scrolls
  // past the hero. Right now that's just home and individual project pages.
  const darkHero =
    !scrolled &&
    !open &&
    (pathname === '/' || pathname.startsWith('/portfolio/'))

  const text = 'text-golden-amber'
  const subtle = 'text-golden-amber/60'
  const accentLine = 'bg-golden-amber/40'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-500 ease-exhale ${
          scrolled || open
            ? 'backdrop-blur-md bg-travertine/85 border-b border-concrete/15'
            : darkHero
              ? 'bg-gradient-to-b from-ink/50 to-transparent'
              : 'bg-transparent'
        }`}
      >
        <div className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10 h-[88px] ${text}`}>
          <Link href="/" aria-label="The Azure Horizon — Home" className="group flex items-center gap-3">
            <Image
              src="/logos/Logo-removebg-preview.png"
              alt="The Azure Horizon"
              width={318}
              height={158}
              priority
              className="h-[120px] w-auto scale-125 origin-left transition-[filter] duration-500"
              style={{
                filter: 'brightness(0) invert(1)',
              }}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative font-mono text-[11px] tracking-[0.3em] uppercase"
              >
                <span className={`mr-2 ${subtle} tabular-nums`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {item.label}
                <span
                  className={`absolute -bottom-2 left-0 right-0 h-px origin-left transition-transform duration-500 ease-exhale ${
                    isActive(item.href)
                      ? 'bg-golden-amber scale-x-100'
                      : `bg-golden-amber scale-x-0 group-hover:scale-x-100`
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:407-488-5620"
              className="font-mono text-[10px] tracking-[0.3em] uppercase hover:text-golden-amber transition-colors"
            >
              407 · 488 · 5620
            </a>
            <Link
              href="/contact"
              className={`group relative inline-flex items-center gap-2 px-5 py-2.5 border font-mono text-[10px] tracking-[0.3em] uppercase overflow-hidden border-golden-amber`}
              data-cursor-hover
            >
              <span className={`relative z-10 transition-colors duration-300 group-hover:text-pivot-black`}>
                Begin a Project
              </span>
              <span className={`absolute inset-0 z-0 origin-left scale-x-0 transition-transform duration-500 ease-exhale group-hover:scale-x-100 bg-golden-amber`} />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 transition-transform duration-300 bg-golden-amber ${open ? 'translate-y-[3px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-6 transition-transform duration-300 bg-golden-amber ${open ? '-translate-y-[3px] -rotate-45' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-travertine" />
        <div className="absolute inset-0 grain animate-grain-shift opacity-50" />
        <div className="relative h-full flex flex-col justify-between px-8 pt-28 pb-10">
          <nav className="flex flex-col gap-6">
            {NAV.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-baseline gap-4 border-b border-concrete/20 pb-6"
              >
                <span className="font-mono text-[10px] text-concrete tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`font-display text-4xl font-light ${
                    isActive(item.href) ? 'italic text-golden-amber' : 'text-pivot-black'
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
            <a href="tel:407-488-5620" className="text-pivot-black">407 · 488 · 5620</a>
            <a href="mailto:info@azurehorizon.com" className="text-pivot-black">
              info@azurehorizon.com
            </a>
            <span>1453 W. Landstreet Rd, Ste 302 — Orlando FL</span>
          </div>
        </div>
      </div>
    </>
  )
}
