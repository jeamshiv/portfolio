import type { ProjectDetail } from '../types'

export const movieappShiv: ProjectDetail = {
  id: 'movieapp-shiv',
  legacyId: '5',
  type: 'app',
  title: 'MovieApp Shiv',
  shortDescription:
    'React Native movie search app with posters, casts, trailers, and detailed information.',
  description:
    'Movie search app built with React Native. Find movies, posters, casts, trailers, and detailed cast information — all in one place.',
  liveUrl: 'https://www.google.com',
  featureImage: '/projects/movieapp-shiv/feature.webp',
  technologies: ['react-native', 'react'],
  features: [
    { title: 'User Friendly', description: 'Intuitive search and browse experience.' },
    { title: 'Rich Details', description: 'Posters, casts, trailers, and movie metadata.' },
    { title: 'Fast Search', description: 'Quick movie lookup with instant results.' },
    { title: 'Cross Platform', description: 'Built with React Native for Android.' },
  ],
  mainContent: [
    {
      heading: 'Why MovieApp Shiv',
      body: 'Designed to make discovering movie information fast and enjoyable on mobile.',
    },
    {
      heading: 'React Native',
      body: 'Leverages React Native for a native-feeling mobile experience with shared codebase.',
    },
  ],
  // App screenshots — stored in public/projects/movieapp-shiv/.
  // Add / remove screenshots freely — the slider is fully dynamic.
  screenshots: [
    { image: '/projects/movieapp-shiv/screenshot-1.jpg', caption: '' },
    { image: '/projects/movieapp-shiv/screenshot-2.jpg', caption: '' },
  ],
  order: 5,
}
