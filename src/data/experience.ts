export interface Experience {
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experienceData: Experience[] = [
  {
    company: 'Programming.com',
    role: 'Software Developer',
    period: 'Sep 2025 — Present',
    highlights: [
      'Building scalable web apps with Next.js and React.',
      'Responsive UI, performance, accessibility and cross-browser support.',
    ],
  },
  {
    company: 'ScaleupAlly',
    role: 'Jr. Software Engineer → Software Engineer → SDE-II',
    period: 'Dec 2021 — Aug 2025',
    highlights: [
      'Full-stack MERN development across frontend and backend.',
      'Shipped scalable apps with cross-functional teams and clean code.',
    ],
  },
  {
    company: 'Cyberflow',
    role: 'Frontend & React Native Developer',
    period: 'May 2021 — Dec 2021',
    highlights: [
      'Built responsive UIs in React and mobile apps in React Native.',
      'Collaborated on new features and performance improvements.',
    ],
  },
  {
    company: 'Innovatia Marketing & Technology Solutions',
    role: 'PHP, WordPress & Frontend Developer',
    period: 'Oct 2020',
    highlights: [
      'PHP, WordPress and frontend development for client websites.',
      'Focused on performance and cross-browser compatibility.',
    ],
  },
]

export interface Education {
  period: string
  title: string
  description: string
}

export const educationData: Education[] = [
  {
    period: '2018 — 2021',
    title: 'Bachelor of Arts (BA)',
    description: 'Indira Gandhi National Open University (IGNOU).',
  },
  {
    period: '2018 — 2020',
    title: 'IT-Expert Diploma in IT',
    description: 'Arth Institute — foundations in web development.',
  },
  {
    period: '2018',
    title: '12th — CBSE Board',
    description: 'Senior secondary, Government School.',
  },
  {
    period: '2016',
    title: '10th — CBSE Board',
    description: 'Secondary, Government School.',
  },
]
