import HeroHome from '@/components/sections/HeroHome'
import PillarTiles from '@/components/sections/PillarTiles'
import StatementBlock from '@/components/sections/StatementBlock'
import BrandRoster from '@/components/sections/BrandRoster'
import PortfolioStrip from '@/components/sections/PortfolioStrip'
import CtaBlock from '@/components/sections/CtaBlock'
import { PILLARS } from '@/lib/data/services'
import { BRANDS } from '@/lib/data/brands'
import { PROJECTS } from '@/lib/data/projects'

export default function HomePage() {
  return (
    <>
      <HeroHome />

      <StatementBlock
        eyebrow="The practice"
        body={
          'We don’t sell windows. We install conviction. Every opening surveyed by hand. Every fastener pull-tested. Every threshold detailed for a building that has to live in Florida weather, for a long time.'
        }
        emphasis="Custom windows & doors, installed with conviction."
      />

      <PillarTiles
        pillars={PILLARS.map((p) => ({
          num: p.num,
          name: p.name,
          blurb: p.blurb,
          href: p.href,
          video: p.video,
        }))}
      />

      <BrandRoster
        brands={BRANDS}
        eyebrow="Manufacturer partners"
        heading="Specified across four houses."
      />

      <PortfolioStrip projects={PROJECTS} />

      <CtaBlock
        heading="Bring us a drawing,"
        emphasis="a site, or an idea."
      />
    </>
  )
}
