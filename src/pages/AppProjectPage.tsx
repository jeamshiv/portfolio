import { motion } from 'framer-motion'
import { Smartphone } from 'lucide-react'
import { Navigate, useParams } from 'react-router-dom'
import { BlogSection } from '../components/sections/BlogSection'
import { ContactSection } from '../components/sections/ContactSection'
import {
  ProjectContactCta,
  ProjectContentSection,
  ProjectDetailHero,
  ProjectFeatures,
  ProjectScreenshots,
} from '../components/projects/ProjectDetailSections'
import { getProjectByLegacyId } from '../data/projects'
import { pageReveal } from '../lib/animations'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'

export function AppProjectPage() {
  const { id } = useParams<{ id: string }>()
  const project = id ? getProjectByLegacyId(id) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  // Redirect website projects to /website/:id (same as old portfolio)
  if (project.type === 'website') {
    return <Navigate to={`/website/${id}`} replace />
  }

  return (
    <motion.main
      variants={pageReveal}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <ProjectDetailHero project={project} ctaLabel="View App" />
      <ProjectFeatures project={project} title="App Features" />
      <ProjectContentSection project={project} headline="Built for mobile" />

      {/* Download CTA */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <Card className="p-8 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Download
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                  Get the app
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Experience the full feature set on your device. Available for testing and
                  download.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Button
                  variant="secondary"
                  className="justify-center"
                  onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                >
                  <Smartphone className="h-4 w-4" />
                  Google Play
                </Button>
                <Button
                  variant="outline"
                  className="justify-center"
                  onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                >
                  App Store
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <ProjectScreenshots project={project} />
      <ProjectContactCta />
      <BlogSection />
      <ContactSection />
    </motion.main>
  )
}
