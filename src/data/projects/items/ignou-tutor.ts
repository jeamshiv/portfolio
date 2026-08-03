import type { ProjectDetail } from '../types'

export const ignouTutor: ProjectDetail = {
  id: 'ignou-tutor',
  legacyId: '9',
  type: 'website',
  title: 'IGNOU Tutor',
  shortDescription:
    'All-in-one IGNOU companion built with Next.js and Tailwind CSS — study materials, question papers, assignments, and grade cards.',
  description:
    'IGNOU Tutor is a complete learning companion for IGNOU students that centralizes academic resources in one place. Built with Next.js and Tailwind CSS, it gives students quick access to study materials, previous year question papers, solved assignments, grade cards, hall tickets, and announcements — with offline access support. Trusted by 40k+ active students with a 4.7/5 rating.',
  liveUrl: 'https://ignoututor.com/',
  featureImage: '/projects/ignou-tutor/feature.png',
  technologies: ['nextjs', 'react', 'typescript', 'tailwind'],
  features: [
    {
      title: 'Study Materials',
      description: 'Course books and study materials sorted by semester and session.',
    },
    {
      title: 'Question Papers',
      description: "Download previous years' exam papers organized by course code.",
    },
    {
      title: 'Assignments',
      description: 'Solved assignments with deadline tracking for classic and new portals.',
    },
    {
      title: 'Grade Card',
      description: 'Check academic performance and results with a single click.',
    },
    {
      title: 'Offline Access',
      description: 'Download resources and keep studying without an internet connection.',
    },
    {
      title: 'Notifications',
      description: 'Never miss updates on exam dates, results, or assignment deadlines.',
    },
  ],
  mainContent: [
    {
      heading: 'Your complete IGNOU companion',
      body: 'IGNOU Tutor consolidates every essential IGNOU resource into one seamless experience — study materials, assignments, grade cards, hall tickets, and more — so students can focus on learning instead of hunting for content.',
    },
    {
      heading: 'Built for scale',
      body: 'Developed with Next.js and Tailwind CSS for a fast, responsive, and modern UI. Trusted by 40k+ active students with 25k+ study resources and a 4.7/5 app rating.',
    },
  ],
  screenshots: [],
  order: 9,
}
