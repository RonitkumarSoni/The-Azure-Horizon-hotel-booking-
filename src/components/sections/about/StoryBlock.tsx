'use client'

import Reveal from '@/components/motion/Reveal'

export default function StoryBlock() {
  return (
    <section id="story" className="relative bg-travertine py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
            — Founder
          </div>
          <Reveal>
            <h2 className="font-display font-light text-pivot-black text-balance text-[12vw] md:text-[5vw] leading-[0.95]">
              Jason <em className="italic">Hiatt.</em>
            </h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img
                src="/images/jason-hiatt.webp"
                alt="Alexander Sterling, founder"
                className="absolute inset-0 h-full w-full object-cover grayscale animate-kenburns"
              />
              <div className="absolute inset-0 bg-florida-oak/15 mix-blend-multiply" />
              <div className="absolute inset-0 grain animate-grain-shift opacity-25" />
            </div>
            <div className="mt-3 font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
              Alexander Sterling · Founder
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col gap-10 md:pt-20">
          <Reveal>
            <p className="font-display italic font-light text-pivot-black text-3xl md:text-4xl leading-[1.2] text-balance">
              &ldquo;Eight generations on the same coast. The trade was never the
              point — the work was.&rdquo;
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 max-w-[60ch] font-body text-base md:text-lg text-pivot-black leading-relaxed text-pretty">
            <Reveal delay={0.05}>
              <p>
                Jason grew up around construction. Saturdays were spent on
                jobsites with his father — the smell of cut pine and wet stucco,
                a thermos of coffee on the tailgate. The trade was never spoken
                about with reverence. It was just what the family did.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                After high school he apprenticed under Derrick Koger, learning
                the difference between framing a wall and framing it well.
                Derrick had a phrase he repeated when something was off by an
                eighth of an inch: <em>&ldquo;Make it look like you meant it.&rdquo;</em>
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                In 2008, in the middle of a recession, Jason set out on his
                own. The work came in slowly — referral by referral, project by
                project — from architects and builders who recognized the
                difference between a window company and a craftsman.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                The team that has gathered around him since has been built the
                same way. Hudson, Domingo, Jonathan, Juli — all of them are
                here because they care about the trim line and the sealant
                bead. None of them are here because of a job board.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.25}>
            <div className="mt-6 grid grid-cols-3 gap-6 border-y border-concrete/30 py-8">
              <Stat value="8th" label="Generation Floridian" />
              <Stat value="2008" label="Founded in Orlando" />
              <Stat value="14yr" label="Median crew tenure" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-display font-light text-4xl md:text-5xl text-pivot-black tabular-nums">
        {value}
      </div>
      <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
        — {label}
      </div>
    </div>
  )
}
