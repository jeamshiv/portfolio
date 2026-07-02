export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export const experienceData: Experience[] = [
  {
    company: 'Programming.com',
    role: 'Software Developer',
    period: 'Sep 2025 — Present',
    description:
      'Building scalable web apps with Next.js and React — responsive UI, performance, and accessibility.',
  },
  {
    company: 'ScaleupAlly',
    role: 'Jr. Software Engineer',
    period: 'Dec 2021 — Aug 2025',
    description: 'The passionate mind behind MERN Stack development and scalable product features.',
  },
  {
    company: 'Cyberflow',
    role: 'Web Developer',
    period: 'May — Dec 2021',
    description:
      'Working with latest technologies — UI design, React, and React Native app development.',
  },
  {
    company: 'Innovatia',
    role: 'Web Developer',
    period: 'Oct — Nov 2020',
    description: 'PHP, WordPress & Frontend Web Developer building client-facing websites.',
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
    title: 'BA Graduation',
    description: 'Completed graduation from IGNOU.',
  },
  {
    period: '2018 — 2020',
    title: 'IT Expert | Diploma in IT',
    description: 'Joined Arth Institute for fundamental web development knowledge.',
  },
  {
    period: '2018',
    title: '12th Passed | CBSE Board',
    description: 'Completed 12th from Government School.',
  },
  {
    period: '2016',
    title: '10th Passed | CBSE Board',
    description: 'Completed 10th from the same Government School.',
  },
]
