import type { ProjectDetail } from '../types'

const SCREENSHOT_BASE = 'https://ignoututor.com/images/app-screenshots'

export const ignouTutorApp: ProjectDetail = {
  id: 'ignou-tutor-app',
  legacyId: '10',
  type: 'app',
  title: 'IGNOU Tutor — Android App',
  shortDescription:
    'React Native app for IGNOU students — study materials, question papers, assignments, grade cards, and offline access. 10k+ downloads on Google Play.',
  description:
    'IGNOU Tutor is a React Native mobile app that gives Indira Gandhi National Open University (IGNOU) students one-tap access to study materials, previous year question papers, assignments, grade cards, hall tickets, and announcements. Styled with NativeWind and powered by Firebase for Remote Config, Analytics, and Crashlytics, with WebView-based flows for select content. Available on Google Play with 10k+ downloads.',
  liveUrl: 'https://play.google.com/store/apps/details?id=com.ignoututor',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ignoututor',
  featureImage: '/projects/ignou-tutor-app/feature.png',
  technologies: ['react-native', 'react', 'nativewind', 'firebase', 'webview'],
  features: [
    {
      title: 'Personalized Access',
      description: 'Enter an enrollment number to auto-fetch program-specific content.',
    },
    {
      title: 'Study Materials & PYQs',
      description: 'Download course books and previous year question papers in PDF.',
    },
    {
      title: 'Grade Card',
      description: 'Check theory, assignment, and practical scores in a single tap.',
    },
    {
      title: 'Offline Access',
      description: 'Save materials and papers to read anytime without internet.',
    },
    {
      title: 'Remote Config & Analytics',
      description: 'Firebase Remote Config, Analytics, and Crashlytics for safe, data-driven releases.',
    },
    {
      title: 'Push Notifications',
      description: 'Stay updated on exam dates, results, and assignment deadlines.',
    },
  ],
  mainContent: [
    {
      heading: 'Built with React Native & NativeWind',
      body: 'A cross-platform mobile app built in React Native and styled with NativeWind (Tailwind for React Native) for a fast, consistent, and maintainable UI across screens.',
    },
    {
      heading: 'Firebase-powered',
      body: 'Firebase Remote Config drives feature flags and safe rollouts, Analytics captures usage insights, and Crashlytics surfaces stability issues in real time. Selected content is rendered through WebView for flexibility.',
    },
    {
      heading: 'Trusted by students',
      body: 'Published on Google Play with 10k+ downloads and a 4.7/5 rating, helping thousands of IGNOU students manage their academic journey.',
    },
  ],
  // App screenshots are hosted on the live site (public/images/app-screenshots).
  screenshots: [
    { image: `${SCREENSHOT_BASE}/ignou-tutor-app.png`, caption: 'Home dashboard' },
    { image: `${SCREENSHOT_BASE}/quick-access-ignou-study-material.png`, caption: 'Study materials' },
    {
      image: `${SCREENSHOT_BASE}/quick-access-ignou-question-paper-download.png`,
      caption: 'Question papers',
    },
    { image: `${SCREENSHOT_BASE}/download-assignments-ignou-tutor.png`, caption: 'Assignments' },
    {
      image: `${SCREENSHOT_BASE}/ignou-tutor-download-offline-access-study-material-question-paper.png`,
      caption: 'Offline downloads',
    },
    {
      image: `${SCREENSHOT_BASE}/add-ignou-student-onboarding-ignou-tutor.png`,
      caption: 'Fast enrollment onboarding',
    },
    {
      image: `${SCREENSHOT_BASE}/free-ignou-pdf-books-study-material-assignments-ignou-tutor.png`,
      caption: 'Free PDF books',
    },
    {
      image: `${SCREENSHOT_BASE}/view-ignou-result-grade-card-ignou-tutor.png`,
      caption: 'Grade card',
    },
    {
      image: `${SCREENSHOT_BASE}/unlock-everything-ignou-enrollment-number.png`,
      caption: 'Multiple enrollments',
    },
    { image: `${SCREENSHOT_BASE}/ignou-tutor-app-profile.png`, caption: 'Profile' },
  ],
  order: 10,
}
