import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import ContactBlock from '@/components/sections/contact/ContactBlock'

export const metadata: Metadata = {
  title: 'Contact — The Azure Horizon',
  description:
    'Begin a project with The Azure Horizon. Custom windows and doors in Orlando, FL.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        pageNumber="06"
        pageLabel="Contact"
        title="Begin a"
        italicTitle="conversation."
        intro="Tell us about the opening, the building, the timeline, or just the idea. We pick up the phone and we read every form."
        meta={['Orlando, FL', 'Mon — Fri · 8a — 5p EST', '407 · 488 · 5620']}
      />
      <ContactBlock />
    </>
  )
}
