import type { ProjectDetail } from '../types'

export const ecommerceProductPage: ProjectDetail = {
  id: 'ecommerce-product-page',
  legacyId: '8',
  type: 'website',
  title: 'Ecommerce Product Page',
  shortDescription:
    'Frontend Mentor challenge — a polished ecommerce product page built with Next.js and Bootstrap.',
  description:
    'It was a Frontend Mentor challenge — Ecommerce Product Page. I created this page using Next.js and Bootstrap. It was my first project with Next.js.',
  liveUrl: 'https://ecommerce-product-page-main-frontendmentor-jeamshiv.vercel.app/',
  headerImage:
    'https://raw.githubusercontent.com/jeamshiv/portfolio/master/src/MemoryData/image/web/ecommerce-product-page-main-frontendmentor.webp',
  technologies: ['html', 'css', 'react', 'nextjs', 'bootstrap'],
  features: [
    { title: 'Mobile First', description: 'Responsive layout optimized for all screen sizes.' },
    { title: 'Optimized Code', description: 'Clean component structure with reusable UI patterns.' },
    { title: 'Interactive Gallery', description: 'Product image gallery with thumbnail navigation.' },
    { title: 'Cart UI', description: 'Add-to-cart flow with quantity controls.' },
  ],
  mainContent: [
    {
      heading: 'What is interesting here?',
      body: 'It was my first Next.js project. I built it the same day after watching a YouTube tutorial.',
    },
    {
      heading: 'Key learning',
      body: 'Learned Next.js routing, component composition, and responsive ecommerce UI patterns.',
    },
  ],
  screenshots: [],
  fullScreenshot: null,
  order: 8,
}
