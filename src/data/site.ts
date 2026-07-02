export const siteConfig = {
  name: 'Jeamshiv',
  title: 'React, Next.js & React Native Developer',
  tagline: 'Building scalable web applications and mobile experiences with React, Next.js, and MERN architecture.',
  description:
    'Experienced full stack developer skilled in React, Next.js, React Native, Node.js, and AWS, delivering polished digital products and business-grade UX.',
  siteUrl: 'https://jeamshiv.netlify.app',
  greeting: 'Hello, I\'m Jeamshiv',
  email: 'shivamkumar06952@gmail.com',
  phone: '+91 8750303073',
  location: 'Faridabad, Haryana',
  resumeUrl: '/assets/Shivam-Kumar-Resume.pdf',
  social: {
    github: 'https://github.com/jeamshiv',
    linkedin: 'https://linkedin.com/in/jeamshiv',
    instagram: 'https://instagram.com/jeamshiv',
    facebook: 'https://facebook.com/jeamshiv',
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
