import type { TechnologyId } from './technologies'

export type ProjectType = 'website' | 'app'

export interface ProjectFeature {
  title: string
  description: string
}

export interface ProjectContentBlock {
  heading: string
  body: string
}

export interface ProjectScreenshot {
  image: string
  caption: string
}

/** Full project record — one file per project */
export interface ProjectDetail {
  /** Stable slug used in routes: /projects/movieapp-shiv */
  id: string
  /** Legacy numeric id from old portfolio (optional) */
  legacyId?: string
  type: ProjectType
  title: string
  /** Card / list view */
  shortDescription: string
  /** Detail page hero */
  description: string
  liveUrl: string
  headerImage: string
  technologies: TechnologyId[]
  features: ProjectFeature[]
  mainContent: ProjectContentBlock[]
  screenshots: ProjectScreenshot[]
  fullScreenshot?: string | null
  /** Display order (higher = shown first) */
  order: number
  featured?: boolean
}

/** Lightweight shape for grids — derived from ProjectDetail */
export interface ProjectSummary {
  id: string
  type: ProjectType
  title: string
  shortDescription: string
  liveUrl: string
  headerImage: string
  technologies: TechnologyId[]
  order: number
}

export interface FeaturedProjectConfig {
  /** References a project id from items/ */
  projectId: string
  /** Optional spotlight copy override */
  description?: string
  ctaLabel?: string
}
