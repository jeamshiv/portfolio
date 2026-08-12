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
  /**
   * Local path (e.g. `/projects/<id>/screenshot-1.jpg`) or a remote URL.
   * Store app screenshots under `public/projects/<id>/`.
   */
  image: string
  caption: string
}

/**
 * Full project record — one file per project.
 *
 * Image fields (`featureImage`, `screenshots[].image`) accept either:
 *   - a local path served from `public/`, e.g. `/projects/<id>/feature.webp`, or
 *   - a remote URL from the live site, e.g. `https://.../image.webp`.
 *
 * Convention: keep every project's assets in `public/projects/<id>/`:
 *   - `feature.<ext>`      → the single feature image (websites & apps)
 *   - `screenshot-1..N.<ext>` → app screenshots (apps only)
 */
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
  liveUrl?: string
  /** Google Play listing — only render the Play button when set */
  playStoreUrl?: string
  /** App Store listing — only render the App Store button when set */
  appStoreUrl?: string
  /** Single feature image shown on cards and the detail hero. */
  featureImage: string
  technologies: TechnologyId[]
  features: ProjectFeature[]
  mainContent: ProjectContentBlock[]
  /** App screenshots for the gallery slider. Leave empty `[]` for websites. */
  screenshots: ProjectScreenshot[]
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
  liveUrl?: string
  featureImage: string
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
