export const siteConfig = {
  name: 'Jeamshiv',
  fullName: 'Shivam Kumar',
  title: 'Full Stack & React Native Developer',
  tagline:
    'I craft scalable, high-performance web and mobile applications with React, Next.js, React Native, and the MERN stack — from pixel-perfect UIs to robust APIs and payment integrations.',
  description:
    'Shivam Kumar (Jeamshiv) — Full Stack & React Native developer with 5+ years building scalable web and mobile apps using React, Next.js, Node.js, GraphQL, and AWS.',
  siteUrl: 'https://jeamshiv.netlify.app',
  greeting: 'Hello, I\'m',
  email: 'jeamshiv@gmail.com',
  phone: '+91 8750303073',
  location: 'Faridabad, Haryana',
  resumeUrl: '/assets/Shivam-Kumar-Resume.pdf',
  social: {
    github: 'https://github.com/jeamshiv',
    linkedin: 'https://linkedin.com/in/jeamshiv',
    blog: 'https://jeamshiv.blogspot.com',
  },
} as const

export const navLinks = [
  { label: 'Home', href: 'hero' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Projects', href: 'projects' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contact', href: 'contact' },
] as const
