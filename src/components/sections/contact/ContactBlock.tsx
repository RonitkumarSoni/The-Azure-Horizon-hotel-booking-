'use client'

import { useState } from 'react'
import Reveal from '@/components/motion/Reveal'

const PROJECT_TYPES = [
  { value: 'residential', label: 'Residential — new build or renovation' },
  { value: 'commercial', label: 'Commercial — office, retail, hospitality' },
  { value: 'install-only', label: 'Install only — windows / doors I already have' },
  { value: 'consult', label: 'Consult — I want a second set of eyes' },
]

export default function ContactBlock() {
  const [field, setField] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="relative bg-ink text-travertine overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="/videos/contact.mp4"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
      />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0 grain animate-grain-shift opacity-15" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-5 flex flex-col gap-10">
          <Reveal>
            <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
              — Begin a project
            </div>
            <h2 className="font-display font-light text-balance text-[12vw] md:text-[5vw] leading-[0.95]">
              Tell us about <em className="italic text-golden-amber">the opening.</em>
            </h2>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex flex-col gap-6 mt-6">
              <InfoLine label="Studio" value="1453 W. Landstreet Rd, Ste 302" />
              <InfoLine label="City" value="Orlando, FL 32824" />
              <InfoLine label="Phone" value="407 · 488 · 5620" href="tel:407-488-5620" />
              <InfoLine label="Email" value="info@azurehorizon.com" href="mailto:info@azurehorizon.com" />
              <InfoLine label="Hours" value="Mon — Fri · 8a — 5p EST" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-6 aspect-[4/3] relative overflow-hidden border border-travertine/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.857793048042!2d-81.3807!3d28.4492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI2JzU3LjEiTiA4McKwMjInNTAuNSJX!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: 'grayscale(100%) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HDC location"
              />
              <div className="pointer-events-none absolute inset-0 bg-golden-amber/10 mix-blend-overlay" />
            </div>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Reveal>
            {sent ? (
              <div className="bg-travertine text-pivot-black p-10 md:p-14">
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber mb-6">
                  — Sent
                </div>
                <h3 className="font-display font-light text-3xl md:text-4xl leading-tight max-w-[20ch]">
                  Got it. We&apos;ll be in touch within <em className="italic">24 hours.</em>
                </h3>
                <p className="mt-6 font-body text-base text-concrete max-w-[44ch]">
                  In the meantime, take a walk through the work or read about
                  the people behind the install.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="bg-travertine text-pivot-black p-10 md:p-14 flex flex-col gap-8">
                <div className="font-mono text-[10px] tracking-[0.4em] uppercase text-golden-amber">
                  — Request
                </div>
                <Field label="Name" id="name" focused={field === 'name'} setFocus={setField} required />
                <Field label="Email" id="email" type="email" focused={field === 'email'} setFocus={setField} required />
                <Field label="Phone" id="phone" type="tel" focused={field === 'phone'} setFocus={setField} />
                <Field label="City / Project address" id="city" focused={field === 'city'} setFocus={setField} />

                <div className="flex flex-col gap-3">
                  <label htmlFor="type" className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
                    — Project type
                  </label>
                  <select
                    id="type"
                    name="type"
                    onFocus={() => setField('type')}
                    onBlur={() => setField(null)}
                    className="w-full bg-transparent border-0 border-b border-concrete/40 focus:border-golden-amber outline-none py-2 font-body text-base text-pivot-black transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Select project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete">
                    — Tell us about it
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    onFocus={() => setField('message')}
                    onBlur={() => setField(null)}
                    className="w-full bg-transparent border-0 border-b border-concrete/40 focus:border-golden-amber outline-none py-2 font-body text-base text-pivot-black resize-none transition-colors"
                    placeholder="The house, the timeline, the dream"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor-hover
                  className="group relative inline-flex items-center justify-between gap-3 px-6 py-4 border border-pivot-black font-mono text-[11px] tracking-[0.3em] uppercase text-pivot-black overflow-hidden mt-4"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-travertine">
                    Send the request
                  </span>
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-travertine">
                    →
                  </span>
                  <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-pivot-black transition-transform duration-700 ease-exhale group-hover:scale-x-100" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type = 'text',
  focused,
  setFocus,
  required,
}: {
  label: string
  id: string
  type?: string
  focused: boolean
  setFocus: (id: string | null) => void
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-3">
      <label htmlFor={id} className="font-mono text-[10px] tracking-[0.3em] uppercase text-concrete flex items-center gap-3">
        <span className="h-px w-6 bg-concrete/40" />
        {label}
        {required && <span className="text-golden-amber">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        onFocus={() => setFocus(id)}
        onBlur={() => setFocus(null)}
        className="w-full bg-transparent border-0 border-b py-2 font-body text-base text-pivot-black outline-none transition-colors"
        style={{
          borderBottomWidth: 1,
          borderBottomColor: focused ? '#D4A24C' : 'rgba(107,107,107,0.4)',
        }}
      />
    </div>
  )
}

function InfoLine({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="grid grid-cols-12 items-baseline gap-4 py-3 border-b border-travertine/15">
      <span className="col-span-3 font-mono text-[10px] tracking-[0.3em] uppercase text-travertine/50">
        — {label}
      </span>
      <span className="col-span-9 font-display font-light text-xl md:text-2xl">
        {value}
      </span>
    </div>
  )
  return href ? (
    <a href={href} className="block hover:text-golden-amber transition-colors" data-cursor-hover>
      {inner}
    </a>
  ) : (
    inner
  )
}
