import type { ProjectDetail, ProjectScreenshot } from '../types'

// Play Store CDN screenshots. `=w1920` returns the full native resolution
// (1242×2208) portrait images.
const SHOT_BASE = 'https://play-lh.googleusercontent.com'
const SHOT_IDS = [
  'utC-MX4rnf3ipyxrd2vwIYPB_vgSQWeODWd7K5xQBmate7I2LWqepEFEmcDi6C5MwYUxhmsAEPD0qRNOpi8Q',
  '7OrB6KqzTe0z6uDJRGPQyUyYulwrzPIS3Da8n30wyHjyFX1J-yj-as09jmvgBAextJU3THj9025Xv7-2-QJN6A',
  'ucBs-Kxw4wCBmPHMpc7GD6FJkzKnqVBfW39Ga9UBFhop1BaAw-S3Amx5EVsPaoEDTz-T3EibwzFcbkTgqyONHoY',
  'EZwWgEk8M_IQ_l80RmGF63E1FtOVfAWWwB71yBN7It36npkt4-mz8H-VyDB6IvwNIA16ANdgvKnUUUirIHkgQw',
  'AVGeSLDSi7xPsjfh80RElzs8xVKK1p2wiMivE5tmUMuyNzpEmSmpXtX37oxQovPE99fgraPmMo2_BqJ-VlOH6w',
  'mjz6P3xT3xKo4kcygxzjgLf9HhmG2OYCNDCSXvie9scn8JD_EPguzt0fLgeEY929gRP0Gu4GHq9b_5-O7vao3A',
  'HkYOBlsdyFQgU3HdyyhWDyGBwbaYaxfv4I987_JdRXlPpqKzTGxRom_B9YAYARSNgXhrP3rQTe3qmOgg5kW6pw',
  'tD8K8uw69yo8xo3AFu-fpoftprPNlYkNr14WrupbuiEYVPuyOluWkaUTJxfebivLDN75-PinvZAo-6CiZI3aAA'
]

const screenshots: ProjectScreenshot[] = SHOT_IDS.map((id) => ({
  image: `${SHOT_BASE}/${id}=w1920`,
  caption: '',
}))

export const ncertNewBooks: ProjectDetail = {
  id: 'ncert-new-books',
  legacyId: '11',
  type: 'app',
  title: 'NCERT New Books',
  shortDescription:
    'React Native app to read, listen, and revise NCERT books for Class 1–12 — with audiobooks, QR scan, syllabus, and offline access.',
  description:
    'NCERT New Books puts the entire NCERT library (Class 1–12) in your pocket. Read rationalised chapters, listen to audiobooks with read-along transcripts, scan the QR in your textbook to jump straight to a chapter, and check official term-wise syllabus PDFs. Built with React Native and NativeWind, powered by Firebase for Remote Config, Analytics, and Crashlytics, with WebView-based content flows.',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.ncertnewbooks.app',
  featureImage: '/projects/ncert-new-books/feature.png',
  technologies: ['react-native', 'react', 'nativewind', 'firebase', 'webview'],
  features: [
    {
      title: 'Read Class 1–12',
      description: 'Every subject and class, chapter by chapter, from official NCERT sources.',
    },
    {
      title: 'Audiobooks',
      description: 'Listen to NCERT-aligned chapters (Class 6–12) with read-along transcripts.',
    },
    {
      title: 'Scan Textbook QR',
      description: 'Scan the QR printed in your book to jump straight to that chapter.',
    },
    {
      title: 'Syllabus PDFs',
      description: 'Official term-wise syllabus for every class in Hindi, English, and Urdu.',
    },
    {
      title: 'Offline & Dark Mode',
      description: 'Reopen viewed chapters offline and read comfortably at night.',
    },
    {
      title: 'Remote Config & Analytics',
      description: 'Firebase Remote Config, Analytics, and Crashlytics for safe, data-driven releases.',
    },
  ],
  mainContent: [
    {
      heading: 'Built with React Native & NativeWind',
      body: 'A lightweight, fast cross-platform app built in React Native and styled with NativeWind (Tailwind for React Native) for a clean, distraction-free reading experience on every phone.',
    },
    {
      heading: 'Firebase-powered',
      body: 'Firebase Remote Config drives feature flags and safe rollouts, Analytics captures usage insights, and Crashlytics surfaces stability issues in real time. Selected content is rendered through WebView for flexibility.',
    },
    {
      heading: 'Everything in one app',
      body: 'Read, listen, scan, and check syllabus — with bookmarks, recently viewed, and QR scanning — so students spend less time searching and more time learning.',
    },
  ],
  // Screenshots are served from the Play Store CDN at full resolution.
  screenshots,
  order: 11,
  featured: true,
}
