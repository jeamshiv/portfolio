import type { ProjectDetail } from '../types'

export const foodTaxi: ProjectDetail = {
  id: 'food-taxi',
  legacyId: '6',
  type: 'website',
  title: 'Food Taxi',
  shortDescription: 'React website for food and taxi services provider.',
  description: 'Website created in React for a food and taxi services provider.',
  liveUrl: 'https://ahooptie.herokuapp.com/',
  featureImage: '/projects/food-taxi/feature.webp',
  technologies: ['html', 'css', 'javascript', 'react', 'bootstrap'],
  features: [
    { title: 'Service Booking', description: 'Browse and book food or taxi services.' },
    { title: 'Responsive UI', description: 'Works seamlessly across desktop and mobile.' },
    { title: 'React Components', description: 'Modular, reusable component architecture.' },
    { title: 'Modern Layout', description: 'Clean, user-friendly interface design.' },
  ],
  mainContent: [
    {
      heading: 'Project overview',
      body: 'A dual-service platform combining food delivery and taxi booking in one React application.',
    },
  ],
  screenshots: [],
  order: 6,
}
