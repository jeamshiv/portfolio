import type { ProjectDetail } from '../types'

export const movieSearch: ProjectDetail = {
  id: 'movie-search',
  legacyId: '4',
  type: 'website',
  title: 'Movie Search',
  shortDescription: 'Web app to search and get brief information about any movie.',
  description:
    'The Movie Search website helps you get all information about a searched movie — brief summaries, posters, and more.',
  liveUrl: 'https://jeamshiv.github.io/movie/',
  headerImage:
    'https://raw.githubusercontent.com/jeamshiv/portfolio/master/src/MemoryData/image/web/first-movie.webp',
  technologies: ['html', 'css', 'javascript', 'bootstrap'],
  features: [
    { title: 'Movie Search', description: 'Search any movie and get instant results.' },
    { title: 'Detailed Info', description: 'Brief summaries and metadata for each film.' },
    { title: 'Responsive', description: 'Works on desktop and mobile browsers.' },
    { title: 'Lightweight', description: 'Fast, minimal JavaScript implementation.' },
  ],
  mainContent: [
    {
      heading: 'Early project',
      body: 'One of my early JavaScript projects exploring API integration and dynamic UI.',
    },
  ],
  screenshots: [],
  fullScreenshot: null,
  order: 4,
}
