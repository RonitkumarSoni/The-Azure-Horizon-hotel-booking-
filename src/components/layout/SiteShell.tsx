'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import PageLoader from '@/components/PageLoader'
import RouteCurtain from '@/components/layout/RouteCurtain'
import AmbientGrain from '@/components/motion/AmbientGrain'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
    })
    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => lenis.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)

    const timer = setTimeout(() => setLoaded(true), 1800)
    return () => {
      clearTimeout(timer)
      lenis.destroy()
      gsap.ticker.remove(tick)
    }
  }, [])

  // Reset scroll + refresh ScrollTrigger on route change
  useEffect(() => {
    if (!lenisRef.current) return
    lenisRef.current.scrollTo(0, { immediate: true })
    requestAnimationFrame(() => ScrollTrigger.refresh())
  }, [pathname])

  return (
    <>
      <AmbientGrain />
      <ScrollProgress />
      <PageLoader visible={!loaded} />
      <Navigation />
      <RouteCurtain pathname={pathname} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
