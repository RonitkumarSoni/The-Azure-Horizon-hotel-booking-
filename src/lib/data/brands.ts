export type Brand = {
  slug: string
  name: string
  tagline: string
  blurb: string
  copy: string[]
  series: { name: string; description: string }[]
  specs: { label: string; value: string }[]
  video: string
  poster?: string
  accent: string
}

export const BRANDS: Brand[] = [
  {
    slug: 'pgt',
    name: 'PGT',
    tagline: 'Impact-resistant windows and doors, engineered for Florida.',
    blurb:
      'The standard for hurricane-rated glazing in coastal Florida. We install PGT for the homes and buildings that have to perform when the storm shows up.',
    copy: [
      'PGT pioneered the impact-resistant residential window. We have installed every major series in their catalog — from the WinGuard line that defined the category to the more recent Diamond Composite frames designed for high-load openings.',
      'The strength of a PGT install is in the framing, the anchoring, and the sealant detail. We field-template, we shim by hand, and we pull-test every fastener. The window is only as good as the rough opening that holds it.',
    ],
    series: [
      { name: 'WinGuard Vinyl', description: 'Impact-rated, energy-efficient — Florida residential standard.' },
      { name: 'WinGuard Aluminum', description: 'Slimmer sightlines, large-opening capability, coastal-proven finish.' },
      { name: 'Diamond Composite', description: 'High-performance composite frames for architectural openings.' },
      { name: 'Eze-Breeze', description: 'Vinyl glazing for porches, lanais, and three-season rooms.' },
    ],
    specs: [
      { label: 'Impact Rating', value: 'Up to Large Missile, Level D' },
      { label: 'Wind Load', value: 'Up to +/- 80 PSF design pressure' },
      { label: 'Energy', value: 'ENERGY STAR rated, U-factor as low as 0.27' },
      { label: 'Origin', value: 'North Venice, FL · since 1980' },
    ],
    video: '/videos-compressed/pgt.mp4',
    accent: '#D4A24C',
  },
  {
    slug: 'andersen',
    name: 'Andersen',
    tagline: 'Where craftsmanship meets glass.',
    blurb:
      'A century of joinery, redrawn for the architecture of right now. Andersen is our default for projects where the window is part of the millwork.',
    copy: [
      'We work across the Andersen catalog — from the wood-clad warmth of the 400 Series to the architectural reach of E-Series, drawn to fit. The hardware is honest, the casing is tight, and the glass is dialed for the climate.',
      'For renovations, the A-Series Coastal package gives us impact-rated glazing in a window that still belongs in a 1920s neighborhood. For new construction, E-Series lets the architect specify almost anything.',
    ],
    series: [
      { name: 'A-Series', description: 'Architecturally true profiles, engineered for performance.' },
      { name: 'E-Series', description: 'Custom anything — color, size, hardware, glass package.' },
      { name: '400 Series', description: 'Wood-interior, vinyl-clad — the workhorse.' },
      { name: 'Big Doors', description: 'Folding, multi-slide, lift-and-slide, up to 60 ft.' },
    ],
    specs: [
      { label: 'Materials', value: 'Fibrex® composite · pine · maple · oak · vinyl-clad' },
      { label: 'Custom', value: '50,000+ standard configurations · full custom on E-Series' },
      { label: 'Warranty', value: '20-yr glass · 10-yr non-glass (transferable)' },
      { label: 'Origin', value: 'Bayport, MN · since 1903' },
    ],
    video: '/videos-compressed/andersen.mp4',
    accent: '#D4A24C',
  },
  {
    slug: 'superhouse',
    name: 'SuperHouse',
    tagline: 'Architectural glass walls for modern Florida living.',
    blurb:
      'Floor-to-ceiling, wall-to-wall, designed to disappear. SuperHouse is the answer when the architect wants the house to read as one continuous room with the lanai.',
    copy: [
      'Steel-look slim profiles. Multi-track sliding walls. Pivot doors that swing on bearings, not hinges. SuperHouse units are the kind of detail that show up on the cover of a magazine — and they ship the way the architect drew them.',
      'They are also unforgiving to install. The track has to be flat. The header has to be square. We pre-survey openings, we shim under load, and we test every leaf at every position before signoff.',
    ],
    series: [
      { name: 'Slim Steel-Look', description: 'Thermally-broken aluminum that reads like steel.' },
      { name: 'Multi-Slide', description: 'Pocketing or stacking walls up to 50+ feet.' },
      { name: 'Pivot Doors', description: 'Up to 12 ft tall, custom hardware, no visible frame.' },
      { name: 'Fixed Walls', description: 'Floor-to-ceiling glazing without sightline interruption.' },
    ],
    specs: [
      { label: 'Sightlines', value: 'As narrow as 1-3/8"' },
      { label: 'Heights', value: 'Up to 12 ft standard · 16 ft custom' },
      { label: 'Glass', value: 'Low-E, laminated, impact, switchable' },
      { label: 'Origin', value: 'Designed in Italy · assembled to order' },
    ],
    video: '/videos/superhouse.mp4',
    accent: '#A8B5BC',
  },
  {
    slug: 'euro-wall',
    name: 'Euro-Wall',
    tagline: 'Superior by design.',
    blurb:
      'American-made folding and sliding walls with European hardware. The disappearing-wall product we reach for when the install has to be precise and budget matters.',
    copy: [
      'Euro-Wall has been doing folding glass walls since before the rest of the U.S. caught up. Their hardware is the smoothest in the price bracket, their thresholds are flush, and their support reps actually pick up the phone.',
      'We use Euro-Wall on residential renovations where the homeowner wants a 16-foot opening to stack into a pocket and forget it exists. The result is a wall, then a breeze, then a wall again — all on a single low-profile track.',
    ],
    series: [
      { name: '4400 Folding', description: 'Top-hung folding wall, panels stack at one or both ends.' },
      { name: '7700 Sliding', description: 'Multi-track sliding system, pocketing or stacking.' },
      { name: '5400 Pivot', description: 'Center- or offset-pivot doors with concealed hardware.' },
      { name: 'Screen Wall', description: 'Retractable screen built into the same track as the panels.' },
    ],
    specs: [
      { label: 'Heights', value: 'Up to 10 ft standard' },
      { label: 'Threshold', value: 'ADA-flush option, no trip ledge' },
      { label: 'Hardware', value: 'European-sourced, top-hung, low rolling resistance' },
      { label: 'Origin', value: 'Naples, FL · since 1996' },
    ],
    video: '/videos/euro-wall.mp4',
    accent: '#8B6F47',
  },
]

export const getBrand = (slug: string) => BRANDS.find((b) => b.slug === slug)
