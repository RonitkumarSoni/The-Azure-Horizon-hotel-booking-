export type Pillar = {
  id: string
  num: string
  name: string
  blurb: string
  details: string[]
  video: string
  href: string
}

export const PILLARS: Pillar[] = [
  {
    id: 'residential',
    num: '01',
    name: 'Custom Residential',
    blurb: 'Building your home from the ground up or transforming the one you already love.',
    details: [
      'Whole-house glazing',
      'Renovation and additions',
      'Historic-district sensitive installs',
      'New construction package management',
    ],
    video: '/videos-compressed/custom-residential.mp4',
    href: '/services#residential',
  },
  {
    id: 'commercial',
    num: '02',
    name: 'Commercial',
    blurb: 'General contracting and construction management for the buildings that have to keep working.',
    details: [
      'Storefront and curtain wall',
      'Tenant build-out coordination',
      'Phased and night-shift installs',
      'Code compliance and permitting',
    ],
    video: '/videos-compressed/commercial.mp4',
    href: '/services#commercial',
  },
  {
    id: 'installation',
    num: '03',
    name: 'Installation',
    blurb: 'High-end, custom windows and doors specified, ordered, installed, and stood behind.',
    details: [
      'Field templating and shop drawings',
      'Impact-rated glazing for hurricane zones',
      'Multi-track sliding and folding wall systems',
      'Pivot doors and custom millwork integration',
    ],
    video: '/videos-compressed/oceanfront-euro-wall-installation.mp4',
    href: '/services#installation',
  },
]

export type ProcessStep = { num: string; name: string; description: string }

export const PROCESS: ProcessStep[] = [
  {
    num: '01',
    name: 'Discovery',
    description:
      'We sit down with the homeowner, the architect, or the GC. We ask the boring questions: how the house breathes, how the family lives, where the storms come from. The answers shape the spec.',
  },
  {
    num: '02',
    name: 'Survey',
    description:
      'On-site templating. Every opening measured at three points minimum. We catch out-of-square framing, deflected headers, and stucco belly before they cost the project a week.',
  },
  {
    num: '03',
    name: 'Specification',
    description:
      'Brand, series, glass package, hardware, finish, screen, and threshold — drawn into a schedule. The spec is signed before anything ships.',
  },
  {
    num: '04',
    name: 'Order & Stage',
    description:
      'Lead times tracked, deliveries staged off-site, units inspected on receipt. Damage finds in the warehouse, never on the wall.',
  },
  {
    num: '05',
    name: 'Install',
    description:
      'Crew leadership on site every day. Pull-tested fasteners. Flashing detail per manufacturer spec. Sealant beads continuous and visible. Photo-documented from rough-opening to finish.',
  },
  {
    num: '06',
    name: 'Walkthrough',
    description:
      'Operate every leaf with the client. Hand off the warranty, the maintenance schedule, and the manufacturer paperwork. We pick up the phone for years afterward.',
  },
]

export type Value = { num: string; name: string; description: string }

export const VALUES: Value[] = [
  {
    num: '01',
    name: 'Integrity',
    description:
      'Measure twice, cut once. The job is done when it would pass our inspection — not when it would pass the client’s.',
  },
  {
    num: '02',
    name: 'Collaboration',
    description:
      'We work alongside architects, builders, and homeowners as partners on the same project — not as a vendor handing off a box.',
  },
  {
    num: '03',
    name: 'Stewardship',
    description:
      'Florida homes face hurricanes, humidity, and time. We install with that future in mind, and we stand behind what we put in the wall.',
  },
]

export type Era = { year: string; name: string; description: string }

export const HERITAGE: Era[] = [
  {
    year: '1900s',
    name: 'Eight Generations on the Same Coast',
    description:
      'The Hiatts have been Floridians since the orange-grove era. Construction was learned on the job — and passed down without ceremony.',
  },
  {
    year: '2003',
    name: 'Apprenticeship',
    description:
      'Jason came up under Derrick Koger, learning rough-framing, finish carpentry, and how to manage a crew that respects the work.',
  },
  {
    year: '2008',
    name: 'The Azure Horizon',
    description:
      'Founded in the middle of a recession. Built on referrals from architects, GCs, and homeowners who liked the way the trim was set.',
  },
  {
    year: 'Today',
    name: 'A Crew, Not a Roster',
    description:
      'Project managers, an operations lead, an office manager — the same names on every job. Built on relationships, not transactions.',
  },
]
