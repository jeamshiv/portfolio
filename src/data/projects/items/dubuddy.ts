import type { ProjectDetail } from '../types'

export const dubuddy: ProjectDetail = {
  id: 'dubuddy',
  legacyId: '7',
  type: 'website',
  title: 'DuBuddy — App Showcase',
  shortDescription:
    'PHP & Bootstrap showcase website for Delhi University aspirants. Android app on Google Play.',
  description:
    'Website created using PHP and Bootstrap. DU BUDDY helps Delhi University aspirants with admission needs. The Android app is available on Google Play Store.',
  liveUrl: 'https://www.dubuddy.in/',
  featureImage: '/projects/dubuddy/feature.webp',
  technologies: ['html', 'css', 'javascript', 'php', 'bootstrap'],
  features: [
    { title: 'Mobile First', description: 'Responsive design for students on any device.' },
    { title: 'App Showcase', description: 'Highlights DU BUDDY Android app features and downloads.' },
    { title: 'Clean Navigation', description: 'Simple, intuitive site structure for aspirants.' },
    { title: 'Fast Loading', description: 'Optimized assets for quick page loads.' },
  ],
  mainContent: [
    {
      heading: 'Why DuBuddy',
      body: 'Brings all basic needs of a Delhi University aspirant into one platform.',
    },
    {
      heading: 'Tech stack',
      body: 'Built with PHP backend and Bootstrap frontend for rapid development.',
    },
  ],
  screenshots: [],
  order: 7,
}
