'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function PageLoader({ visible }: { visible: boolean }) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const id = setInterval(() => {
      start += Math.random() * 7 + 2
      if (start >= 100) {
        start = 100
        clearInterval(id)
      }
      setCount(Math.floor(start))
    }, 80)
    return () => clearInterval(id)
  }, [visible])

  useEffect(() => {
    if (!visible && loaderRef.current) {
      loaderRef.current.style.transform = 'translateY(-100%)'
      loaderRef.current.style.transition = 'transform 0.9s cubic-bezier(0.83, 0, 0.17, 1)'
    }
  }, [visible])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-travertine"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute inset-0 grain animate-grain-shift" />

      <div className="relative flex flex-col items-center gap-12">
        <div className="relative w-40 h-40 flex items-center justify-center">
          <Image
            src="/logos/Logo-removebg-preview.png"
            alt="The Azure Horizon"
            width={318}
            height={158}
            priority
            className="w-28 h-auto relative z-10"
          />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="78"
              fill="none"
              stroke="#8B6F47"
              strokeWidth="1"
              strokeDasharray="490"
              strokeDashoffset="490"
              style={{
                animation: visible
                  ? 'drawStroke 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                  : 'none',
              }}
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete">
            The Azure Horizon
          </div>
          <div className="relative h-px w-[220px] bg-concrete/20">
            <div
              className="absolute inset-y-0 left-0 bg-pivot-black"
              style={{ width: `${count}%`, transition: 'width 80ms linear' }}
            />
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-pivot-black tabular-nums">
            {String(count).padStart(3, '0')} / 100
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawStroke { to { stroke-dashoffset: 0; } }
      `}</style>
    </div>
  )
}
