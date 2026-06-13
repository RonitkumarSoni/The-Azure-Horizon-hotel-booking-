'use client'

import Reveal from '@/components/motion/Reveal'

type Capability = { num: string; label: string; href?: string }

const CAPS: Capability[] = [
  { num: '01', label: 'Hurricane-rated glazing', href: 'https://www.neuffer.de/sites/en/windows/profiles/alu/hurricane-window-profile-section.jpg' },
  { num: '02', label: 'Multi-track sliding walls', href: 'https://www.andersenwindows.com/windows-and-doors/doors/big-doors' },
  { num: '03', label: 'Folding glass walls', href: 'https://www.nanawall.com/glass-walls/folding' },
  { num: '04', label: 'Pivot doors, custom hardware', href: 'https://www.fritsjurgens.com/pivot-hinge' },
  { num: '05', label: 'Storefront & curtain wall', href: 'https://www.kawneer.com/products/curtain-wall/1600-wall-system1-curtain-wall/' },
  { num: '06', label: 'Historic-district installs', href: 'https://cityofkeywest-fl.gov/480/Historic-Windows' },
  { num: '07', label: 'Field templating', href: 'https://www.prodim-systems.com/industries/doors-windows/' },
  { num: '08', label: 'Permitting & inspection', href: 'https://safeguardimpact.com/broward-county-impact-window-permit-guide/' },
  { num: '09', label: 'Stucco / trim restoration', href: 'https://1800remodel.com/exterior-window-trim-on-stucco/' },
  { num: '10', label: 'Phased night-shift install', href: 'https://centralglassinc.com/apartment-complex-window-replacement-retrofit/' },
  { num: '11', label: 'Manufacturer coordination', href: 'https://www.wdma.com/' },
  { num: '12', label: '20-year service relationships', href: 'https://www.thisoldhouse.com/windows/window-warranties' },
]

export default function CapabilitiesGrid() {
  return (
    <section className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal>
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-8">
            — Capabilities
          </div>
        </Reveal>
        <Reveal>
          <h2 className="font-display font-light text-pivot-black text-balance text-[10vw] md:text-[5.5vw] leading-[0.95] mb-20">
            What we&apos;re known for.
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-concrete/30 border-y border-concrete/30">
          {CAPS.map((c) => {
            const cellClass = 'bg-travertine p-6 md:p-8 flex flex-col gap-3 group hover:bg-travertine-deep transition-colors duration-500'
            const inner = (
              <>
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete tabular-nums">
                  / {c.num}
                </span>
                <span className="font-display font-light text-xl md:text-2xl text-pivot-black leading-snug group-hover:italic transition-all">
                  {c.label}
                </span>
              </>
            )
            return c.href ? (
              <a
                key={c.num}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cellClass}
              >
                {inner}
              </a>
            ) : (
              <div key={c.num} className={cellClass}>
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
