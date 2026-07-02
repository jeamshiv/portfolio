import { motion } from 'framer-motion'
import { Navigate, useParams } from 'react-router-dom'
import { ContactSection } from '../components/sections/ContactSection'
import {
  ProjectContentSection,
  ProjectDetailHero,
  ProjectFeatures,
} from '../components/projects/ProjectDetailSections'
import { getProjectByLegacyId } from '../data/projects'
import { pageReveal } from '../lib/animations'

export function WebsiteProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectByLegacyId(id) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  if (project.type === 'app') {
    return <Navigate to={`/app/${id}`} replace />
  }

  return (
    <motion.main
      variants={pageReveal}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <ProjectDetailHero project={project} ctaLabel="Live Preview" />
      <ProjectFeatures project={project} title="Website Features" />
      <ProjectContentSection project={project} headline="Built for the web" />
      <ContactSection />
    </motion.main>
  )
}
