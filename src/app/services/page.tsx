import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import PillarStack from '@/components/sections/services/PillarStack'
import ProcessSteps from '@/components/sections/services/ProcessSteps'
import CapabilitiesGrid from '@/components/sections/services/CapabilitiesGrid'
import CtaBlock from '@/components/sections/CtaBlock'

export const metadata: Metadata = {
  title: 'Services — The Azure Horizon',
  description:
    'Custom residential, commercial, and high-end window and door installation. Process, capabilities, and how we work in Central Florida.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        pageNumber="03"
        pageLabel="Services"
        title="Three rooms"
        italicTitle="of one practice."
        intro="From whole-house glazing replacements to commercial storefront — we run every job through the same six-phase process and the same crew leadership. Specialized in installation of high-end, custom windows and doors."
        meta={['Residential', 'Commercial', 'Installation', 'Aesthetics · Functionality · Security']}
      />

      <PillarStack />
      <ProcessSteps />
      <CapabilitiesGrid />

      <CtaBlock
        heading="Tell us about the opening."
        emphasis="We'll spec it."
        ctaLabel="Request a survey"
      />
    </>
  )
}
