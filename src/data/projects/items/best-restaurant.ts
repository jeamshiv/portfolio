import type { ProjectDetail } from '../types'

export const bestRestaurant: ProjectDetail = {
  id: 'best-restaurant',
  legacyId: '2',
  type: 'website',
  title: 'Best Restaurant',
  shortDescription:
    'One-page restaurant template with Bootstrap, Wow.js, and Slick carousel.',
  description:
    "HTML template for restaurant purposes using HTML, CSS, JavaScript, Bootstrap, Wow.js, and Slick. One-page website for restaurants or pizza shops.",
  liveUrl: 'https://jeamshiv.github.io/restaurant/',
  headerImage:
    'https://raw.githubusercontent.com/jeamshiv/portfolio/master/src/MemoryData/image/web/Resturant.webp',
  technologies: ['html', 'css', 'javascript', 'bootstrap', 'jquery', 'slick', 'wowjs'],
  features: [
    { title: 'One Page', description: 'Complete restaurant site on a single scrollable page.' },
    { title: 'Menu Section', description: 'Showcase dishes with attractive layout.' },
    { title: 'Animations', description: 'Wow.js scroll animations and Slick carousels.' },
    { title: 'Mobile Ready', description: 'Bootstrap responsive grid system.' },
  ],
  mainContent: [
    {
      heading: 'Template purpose',
      body: 'Designed as a reusable one-page template for restaurants and food businesses.',
    },
  ],
  screenshots: [],
  fullScreenshot: null,
  order: 2,
}
