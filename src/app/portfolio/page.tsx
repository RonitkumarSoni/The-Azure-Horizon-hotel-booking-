import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import PortfolioGrid from '@/components/sections/portfolio/PortfolioGrid'
import CtaBlock from '@/components/sections/CtaBlock'
import { PROJECTS } from '@/lib/data/projects'

export const metadata: Metadata = {
  title: 'Work — The Azure Horizon',
  description:
    "Selected projects: residential, commercial, and the in-between. The Azure Horizon's portfolio across Central Florida.",
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        pageNumber="05"
        pageLabel="Work"
        title="A glimpse of"
        italicTitle="what we've built."
        intro="A small selection of recent projects across residential and commercial. Each one ran through the same six-phase process. Each one stayed in touch."
        meta={[`${PROJECTS.length} projects`, 'Central Florida', '2008 — present']}
      />

      <PortfolioGrid projects={PROJECTS} />

      <CtaBlock
        heading="Got an opening in mind?"
        emphasis="Let's draw the schedule."
        ctaLabel="Begin a project"
      />
    </>
  )
}
