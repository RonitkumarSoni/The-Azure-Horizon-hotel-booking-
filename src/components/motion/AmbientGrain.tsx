'use client'

export default function AmbientGrain({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[55] mix-blend-multiply animate-grain-shift"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.7 0'/></filter><rect width='240' height='240' filter='url(%23n)'/></svg>\")",
      }}
    />
  )
}
