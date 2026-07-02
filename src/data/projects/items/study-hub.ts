import type { ProjectDetail } from '../types'

export const studyHub: ProjectDetail = {
  id: 'study-hub',
  legacyId: '1',
  type: 'website',
  title: 'Study Hub',
  shortDescription: 'Educational one-page HTML template for learning platforms.',
  description:
    "HTML template for educational purposes using HTML, CSS, and JavaScript. One-page website for educational platforms.",
  liveUrl: 'https://jeamshiv.github.io/studyhub.io/',
  headerImage:
    'https://raw.githubusercontent.com/jeamshiv/portfolio/master/src/MemoryData/image/web/StudyHub.webp',
  technologies: ['html', 'css', 'javascript'],
  features: [
    { title: 'Educational Focus', description: 'Layout designed for courses and learning content.' },
    { title: 'One Page', description: 'All sections accessible from a single page.' },
    { title: 'Clean Design', description: 'Simple navigation and readable typography.' },
    { title: 'Lightweight', description: 'Pure HTML, CSS, and JavaScript — no framework overhead.' },
  ],
  mainContent: [
    {
      heading: 'Why Study Hub',
      body: 'Gradient colors and theme shapes make Study Hub unique with simple navigation.',
    },
  ],
  screenshots: [],
  fullScreenshot: null,
  order: 1,
}
