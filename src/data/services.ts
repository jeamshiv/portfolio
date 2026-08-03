import { Globe, Server, Smartphone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const servicesData: Service[] = [
  {
    id: 'react-next',
    title: 'React / Next.js Development',
    description:
      'Modern, high-performance web applications using React and Next.js for fast, SEO-friendly experiences.',
    icon: Globe,
  },
  {
    id: 'mern-stack',
    title: 'MERN & API Engineering',
    description:
      'Full-stack development with Node.js, Express, MySQLi, REST and GraphQL APIs to power scalable backend systems.',
    icon: Server,
  },
  {
    id: 'mobile-app',
    title: 'React Native Mobile Apps',
    description:
      'Cross-platform mobile applications built with React Native, focusing on polished UI, performance, and native feel.',
    icon: Smartphone,
  },
]
