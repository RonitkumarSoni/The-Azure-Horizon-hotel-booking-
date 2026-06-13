import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import CtaBlock from '@/components/sections/CtaBlock'
import StoryBlock from '@/components/sections/about/StoryBlock'
import HeritageTimeline from '@/components/sections/about/HeritageTimeline'
import TeamGrid from '@/components/sections/about/TeamGrid'
import PhilosophyGrid from '@/components/sections/about/PhilosophyGrid'

export const metadata: Metadata = {
  title: 'About — The Azure Horizon',
  description:
    'Eight generations of Florida. The story behind The Azure Horizon — Jason, the team, the philosophy, the work.',
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        pageNumber="02"
        pageLabel="About"
        title="The studio"
        italicTitle="behind the install."
        intro="The Azure Horizon is a small Orlando practice run by an 8th-generation Floridian and the people he chose to work with. We design, specify, and install custom windows and doors for the homes and buildings of Central Florida."
        meta={['Founded 2008', 'Orlando, FL', 'Licensed · Insured · CGC1521543']}
      />

      <StoryBlock />
      <HeritageTimeline />
      <TeamGrid />
      <PhilosophyGrid />

      <CtaBlock heading="Work with us." emphasis="Quietly, properly." />
    </>
  )
}
