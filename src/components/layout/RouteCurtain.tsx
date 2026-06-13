'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

/**
 * Travertine curtain that wipes across on route change with a golden
 * hairline drawing through it. Plays once per pathname change.
 */
export default function RouteCurtain({ pathname }: { pathname: string }) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    const overlay = overlayRef.current
    const line = lineRef.current
    const label = labelRef.current
    if (!overlay || !line || !label) return

    const tl = gsap.timeline()
    tl.set(overlay, { yPercent: 100, display: 'block' })
      .set(line, { scaleX: 0, transformOrigin: 'left center' })
      .set(label, { opacity: 0, y: 8 })
      .to(overlay, { yPercent: 0, duration: 0.55, ease: 'power3.inOut' })
      .to(line, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .to(label, { opacity: 1, y: 0, duration: 0.3 }, '-=0.4')
      .to({}, { duration: 0.15 })
      .to(label, { opacity: 0, y: -8, duration: 0.3 })
      .to(line, { scaleX: 0, duration: 0.4, transformOrigin: 'right center', ease: 'power2.in' }, '-=0.3')
      .to(overlay, { yPercent: -100, duration: 0.6, ease: 'power3.inOut' }, '-=0.2')
      .set(overlay, { display: 'none' })
    return () => {
      tl.kill()
    }
  }, [pathname])

  const label = pathname === '/'
    ? '— Home'
    : `— ${pathname.replace(/^\//, '').split('/')[0]}`

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="fixed inset-0 z-[80] hidden bg-travertine"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 grain animate-grain-shift" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6">
        <div
          ref={lineRef}
          className="h-px w-[60vw] bg-golden-amber"
          style={{ willChange: 'transform' }}
        />
        <div
          ref={labelRef}
          className="font-mono text-[10px] tracking-[0.4em] uppercase text-ink/70"
        >
          {label}
        </div>
      </div>
    </div>
  )
}
