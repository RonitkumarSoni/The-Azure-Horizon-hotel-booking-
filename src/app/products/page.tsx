import type { Metadata } from 'next'
import PageHero from '@/components/sections/PageHero'
import BrandGallery from '@/components/sections/products/BrandGallery'
import CtaBlock from '@/components/sections/CtaBlock'
import { BRANDS } from '@/lib/data/brands'

export const metadata: Metadata = {
  title: 'Products — The Azure Horizon',
  description:
    'PGT, Andersen, SuperHouse, and Euro-Wall — the four manufacturers we install across Central Florida.',
}

export default function ProductsPage() {
  return (
    <>
      <PageHero
        pageNumber="04"
        pageLabel="Products"
        title="The catalog,"
        italicTitle="quietly curated."
        intro="We do not carry every line. We carry the four that perform in Florida — for hurricane zones, architectural openings, and the in-between."
        meta={['PGT', 'Andersen', 'SuperHouse', 'Euro-Wall']}
      />

      <BrandGallery brands={BRANDS} />

      <CtaBlock
        heading="Not sure which line fits?"
        emphasis="We'll walk it with you."
        ctaLabel="Request a consult"
      />
    </>
  )
}
