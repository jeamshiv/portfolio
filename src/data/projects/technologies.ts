/**
 * Single source of truth for all project technologies.
 * Projects reference these ids — never free-form strings.
 */
export const TECHNOLOGIES = {
  html: { id: 'html', label: 'HTML' },
  css: { id: 'css', label: 'CSS' },
  javascript: { id: 'javascript', label: 'JavaScript' },
  typescript: { id: 'typescript', label: 'TypeScript' },
  react: { id: 'react', label: 'React' },
  'react-native': { id: 'react-native', label: 'React Native' },
  nextjs: { id: 'nextjs', label: 'Next.js' },
  bootstrap: { id: 'bootstrap', label: 'Bootstrap' },
  php: { id: 'php', label: 'PHP' },
  jquery: { id: 'jquery', label: 'jQuery' },
  slick: { id: 'slick', label: 'Slick' },
  wowjs: { id: 'wowjs', label: 'Wow.js' },
} as const

export type TechnologyId = keyof typeof TECHNOLOGIES

export function getTechnologyLabel(id: TechnologyId): string {
  return TECHNOLOGIES[id].label
}

export function resolveTechnologies(ids: TechnologyId[]): string[] {
  return ids.map(getTechnologyLabel)
}
