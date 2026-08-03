import type { ProjectDetail } from '../types'

export const jeamshivBlogspot: ProjectDetail = {
  id: 'jeamshiv-blogspot',
  legacyId: '3',
  type: 'website',
  title: 'Jeamshiv Blogspot',
  shortDescription: 'Highly customized blog with creative UI features and smooth navigation.',
  description:
    'My blogspot site — highly customized with creative UI features and simple navigation.',
  liveUrl: 'https://jeamshiv.blogspot.com',
  featureImage: '/projects/jeamshiv-blogspot/feature.webp',
  technologies: ['html', 'css', 'javascript', 'bootstrap', 'jquery', 'slick', 'wowjs'],
  features: [
    { title: 'Custom Theme', description: 'Unique gradient colors and theme shapes.' },
    { title: 'Smooth Navigation', description: 'Simple, intuitive blog navigation.' },
    { title: 'Animations', description: 'Wow.js and Slick carousel for engaging UX.' },
    { title: 'Responsive', description: 'Readable on all devices.' },
  ],
  mainContent: [
    {
      heading: 'Why Jeamshiv Blogspot',
      body: 'The gradient color and theme shape make this blog unique with simple navigation.',
    },
  ],
  screenshots: [],
  order: 3,
}
