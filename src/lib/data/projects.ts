export type Project = {
  slug: string
  title: string
  city: string
  year: number
  type: 'Residential' | 'Commercial'
  cover: string
  ratio: '4/3' | '3/4' | '16/9' | '1/1'
  brief: string
  scope: string[]
  brands: string[]
  gallery: { src: string; ratio: '4/3' | '3/4' | '16/9' | '1/1'; caption?: string }[]
  facts: { label: string; value: string }[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'isleworth-residence',
    title: 'Isleworth Residence',
    city: 'Windermere, FL',
    year: 2024,
    type: 'Residential',
    cover: '/videos-compressed/isleworth-residence.mp4',
    ratio: '4/3',
    brief:
      'A whole-house glazing replacement on a Mediterranean-revival estate. Forty-two openings, six folding walls, one continuous threshold from kitchen to lanai.',
    scope: [
      'Survey and template every opening',
      'Demolition and removal of legacy aluminum',
      'Custom Andersen E-Series fenestration',
      'Euro-Wall 7700 multi-slide on the great room',
      'Re-stuccoing and trim restoration',
    ],
    brands: ['Andersen', 'Euro-Wall', 'PGT'],
    gallery: [
      { src: '/videos-compressed/isleworth-residence.mp4', ratio: '16/9', caption: 'Great room — fully retracted' },
      { src: '/images/kitchen-casement.webp', ratio: '4/3', caption: 'Kitchen casement reset' },
    ],
    facts: [
      { label: 'Openings', value: '42' },
      { label: 'Glass area', value: '1,840 sq ft' },
      { label: 'Duration', value: '14 weeks' },
      { label: 'Wind rating', value: 'Large Missile, Level D' },
    ],
  },
  {
    slug: 'lake-nona-residence',
    title: 'Lake Nona Residence',
    city: 'Lake Nona, FL',
    year: 2024,
    type: 'Residential',
    cover: '/videos-compressed/lakenona-residence.mp4',
    ratio: '3/4',
    brief:
      'New construction modern. SuperHouse slim-steel walls front and back, with a 12-foot pivot door at the entry that swings on a single floor bearing.',
    scope: [
      'Coordination with architect on glazing schedule',
      'SuperHouse slim-steel multi-slide system',
      '12 ft custom pivot at entry',
      'Concealed motorized shades integration',
    ],
    brands: ['SuperHouse'],
    gallery: [
      { src: '/images/front-elevation-of-lake-nona.webp', ratio: '16/9', caption: 'Front elevation' },
    ],
    facts: [
      { label: 'Tallest leaf', value: '12 ft' },
      { label: 'Slim-line sightline', value: '1-3/8"' },
      { label: 'Duration', value: '20 weeks' },
    ],
  },
  {
    slug: 'winter-park-bungalow',
    title: 'Winter Park Bungalow',
    city: 'Winter Park, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos-compressed/winter-park-bungalow.mp4',
    ratio: '16/9',
    brief:
      'Historic bungalow restoration. The challenge was hurricane-rating the windows without changing how the house reads from the street.',
    scope: [
      'Andersen A-Series Coastal package',
      'Custom muntin layouts to match originals',
      'Trim and casing restoration in heart pine',
    ],
    brands: ['Andersen'],
    gallery: [{ src: '/videos-compressed/winter-park-bungalow.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Era', value: '1924' },
      { label: 'Historic district', value: 'Yes' },
      { label: 'Duration', value: '8 weeks' },
    ],
  },
  {
    slug: 'oceanfront-euro-wall-installation',
    title: 'Oceanfront Euro-Wall Installation',
    city: 'New Smyrna Beach, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos-compressed/oceanfront-euro-wall-installation.mp4',
    ratio: '4/3',
    brief:
      'A direct-oceanfront Euro-Wall install staged from the beach side. Crane-lifted the great-room panels over the dune line and set them on a single continuous threshold.',
    scope: [
      'Crane-staged delivery over the dune',
      'Euro-Wall 7700 multi-slide on the great room',
      'Continuous floor track set flush to the deck',
      'Marine-grade hardware specified for salt exposure',
    ],
    brands: ['Euro-Wall'],
    gallery: [{ src: '/videos-compressed/oceanfront-euro-wall-installation.mp4', ratio: '16/9' }],
    facts: [
      { label: 'Heaviest panel', value: '780 lb' },
      { label: 'Lift method', value: 'Crane over dune' },
      { label: 'Duration', value: '9 weeks' },
    ],
  },
  {
    slug: 'baldwin-park-renovation',
    title: 'Baldwin Park Renovation',
    city: 'Baldwin Park, FL',
    year: 2023,
    type: 'Residential',
    cover: '/videos-compressed/baldwin-park-renovation.mp4',
    ratio: '3/4',
    brief:
      'A whole-back-of-house openness. Two folding walls and a kitchen pass-through replaced what used to be three small windows.',
    scope: ['Euro-Wall 4400 folding system', 'New header structural', 'Bi-parting kitchen pass-through'],
    brands: ['Euro-Wall'],
    gallery: [{ src: '/videos-compressed/baldwin-park-renovation.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Opening width', value: '24 ft' },
      { label: 'Folded stack', value: '14"' },
      { label: 'Duration', value: '10 weeks' },
    ],
  },
  {
    slug: 'cocoa-beach-coastal',
    title: 'Cocoa Beach Coastal Home',
    city: 'Cocoa Beach, FL',
    year: 2022,
    type: 'Residential',
    cover: '/videos-compressed/cocoa-beach-coastal-home.mp4',
    ratio: '4/3',
    brief:
      'Direct ocean exposure. Every assembly tested to Large Missile, Level D, with hardware specified for salt-air longevity.',
    scope: ['PGT WinGuard Aluminum throughout', 'Marine-grade hardware', 'Re-stucco and re-finish'],
    brands: ['PGT'],
    gallery: [{ src: '/videos-compressed/cocoa-beach-coastal-home.mp4', ratio: '4/3' }],
    facts: [
      { label: 'Wind exposure', value: 'Direct ocean' },
      { label: 'Wind rating', value: 'Large Missile, Level D' },
      { label: 'Duration', value: '12 weeks' },
    ],
  },
]

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)
