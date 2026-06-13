'use client'

import { useEffect, useRef } from 'react'

/**
 * Seamless infinite marquee that duplicates its children and translates
 * by exactly half the rendered width — no jump.
 */
export default function Marquee({
  children,
  speed = 60,
  reverse = false,
  className,
}: {
  children: React.ReactNode
  speed?: number
  reverse?: boolean
  className?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const half = track.scrollWidth / 2
    const duration = half / speed
    track.style.setProperty('--mq-duration', `${duration}s`)
  }, [children, speed])

  return (
    <div className={`relative w-full overflow-hidden ${className ?? ''}`}>
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap will-change-transform"
        style={{
          animation: `mq-scroll var(--mq-duration, 30s) linear infinite ${reverse ? 'reverse' : ''}`,
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>
          {children}
        </div>
      </div>
      <style>{`
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
