import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative min-h-[100svh] bg-travertine flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 grain animate-grain-shift opacity-30" />
      <div className="relative z-10 mx-auto max-w-[1100px] w-full grid md:grid-cols-12 gap-10 items-end pt-32">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber tabular-nums">
              — 404
            </span>
            <span className="h-px w-20 bg-concrete/40" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-concrete">
              Off the schedule
            </span>
          </div>
          <h1 className="font-display font-light text-pivot-black leading-[0.95] text-balance text-[16vw] md:text-[8vw]">
            This opening <em className="italic text-golden-amber">isn&apos;t framed.</em>
          </h1>
          <p className="mt-8 font-body text-base md:text-lg text-concrete max-w-[44ch] text-pretty">
            The page you were looking for either moved, got renamed during
            spec, or never made it onto the order. Try one of these.
          </p>
        </div>
        <div className="md:col-span-5 flex flex-col gap-4 md:items-end">
          {[
            { href: '/', label: 'Home' },
            { href: '/portfolio', label: 'Selected work' },
            { href: '/products', label: 'Products' },
            { href: '/contact', label: 'Begin a project' },
          ].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="group inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-pivot-black hover:text-golden-amber transition-colors"
              data-cursor-hover
            >
              <span className="tabular-nums">{String(i + 1).padStart(2, '0')}</span>
              <span className="h-px w-12 bg-pivot-black group-hover:bg-golden-amber transition-colors" />
              {l.label}
              <span>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
