import { featuredProjectConfig } from './featured'
import { bestRestaurant } from './items/best-restaurant'
import { dubuddy } from './items/dubuddy'
import { ecommerceProductPage } from './items/ecommerce-product-page'
import { foodTaxi } from './items/food-taxi'
import { jeamshivBlogspot } from './items/jeamshiv-blogspot'
import { movieappShiv } from './items/movieapp-shiv'
import { movieSearch } from './items/movie-search'
import { studyHub } from './items/study-hub'
import { resolveTechnologies } from './technologies'
import type { ProjectDetail, ProjectSummary } from './types'

/** Registry — add new projects here after creating their file in items/ */
export const allProjects: ProjectDetail[] = [
  ecommerceProductPage,
  dubuddy,
  foodTaxi,
  movieappShiv,
  movieSearch,
  jeamshivBlogspot,
  bestRestaurant,
  studyHub,
].sort((a, b) => b.order - a.order)

const projectMap = new Map(allProjects.map((p) => [p.id, p]))
const legacyMap = new Map(
  allProjects.filter((p) => p.legacyId).map((p) => [p.legacyId!, p]),
)

export function toProjectSummary(project: ProjectDetail): ProjectSummary {
  return {
    id: project.id,
    type: project.type,
    title: project.title,
    shortDescription: project.shortDescription,
    liveUrl: project.liveUrl,
    headerImage: project.headerImage,
    technologies: project.technologies,
    order: project.order,
  }
}

export function getAllProjectSummaries(): ProjectSummary[] {
  return allProjects.map(toProjectSummary)
}

export function getProjectById(id: string): ProjectDetail | undefined {
  return projectMap.get(id)
}

export function getProjectByLegacyId(legacyId: string): ProjectDetail | undefined {
  return legacyMap.get(legacyId)
}

/** Resolve featured project with optional config overrides */
export function getFeaturedProject() {
  const project = getProjectById(featuredProjectConfig.projectId)
  if (!project) return null

  return {
    ...toProjectSummary(project),
    description: featuredProjectConfig.description ?? project.description,
    ctaLabel: featuredProjectConfig.ctaLabel ?? 'View Project',
    detailPath: getProjectDetailPath(project),
    techLabels: resolveTechnologies(project.technologies),
    features: project.features,
  }
}

/** Route path: /website/:legacyId or /app/:legacyId (matches old portfolio) */
export function getProjectDetailPath(project: ProjectDetail | ProjectSummary): string {
  const full = getProjectById(project.id) ?? (project as ProjectDetail)
  const segment = full.type === 'app' ? 'app' : 'website'
  return `/${segment}/${full.legacyId ?? full.id}`
}

/** @deprecated Use getProjectDetailPath */
export function getLegacyDetailPath(project: ProjectDetail): string {
  return getProjectDetailPath(project)
}

export function getProjectTechnologyLabels(project: ProjectDetail | ProjectSummary): string[] {
  return resolveTechnologies(project.technologies)
}

export { featuredProjectConfig } from './featured'
export { TECHNOLOGIES, getTechnologyLabel, resolveTechnologies } from './technologies'
export type {
  FeaturedProjectConfig,
  ProjectContentBlock,
  ProjectDetail,
  ProjectFeature,
  ProjectScreenshot,
  ProjectSummary,
  ProjectType,
} from './types'
export type { TechnologyId } from './technologies'
