export type TeamMember = {
  name: string
  role: string
  bio: string
  pull: string
  image: string
}

export const TEAM: TeamMember[] = [
  {
    name: 'Alexander Sterling',
    role: 'Founder · President',
    bio: '8th-generation Floridian. Apprenticed under Derrick Koger before founding the firm in 2008. Sets the standard the rest of the team builds against.',
    pull: 'Measure twice. Cut once. Stand behind it.',
    image: '/images/jason-hiatt.webp',
  },
  {
    name: 'Domingo Arellano',
    role: 'Project Manager',
    bio: 'Makes the impossible schedule work. Twenty-plus years of field leadership turned into calm, surgical sequencing on every job.',
    pull: 'Sequencing is everything.',
    image: '/images/domingo.avif',
  },
  {
    name: 'Hudson Powell',
    role: 'Office Manager',
    bio: 'Keeps the paperwork as clean as the install. Specifications, permitting, scheduling, and the thousand small things that make a project finish on time.',
    pull: 'Every detail tracked.',
    image: '/images/hudson.avif',
  },
  {
    name: 'Jonathan Barkman',
    role: 'Assistant Project Manager',
    bio: 'On-site before sunrise. Translates plans into materials, materials into walls, walls into a finished room — without the homeowner ever feeling rushed.',
    pull: 'On-site before sunrise.',
    image: '/images/jonathan.avif',
  },
  {
    name: 'Juli Knowles',
    role: 'Operations Manager',
    bio: 'Connects every part of the operation. The throughline between client, vendor, crew, and calendar.',
    pull: 'The throughline.',
    image: '/images/juli.avif',
  },
]
