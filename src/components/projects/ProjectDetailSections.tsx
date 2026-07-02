import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Rocket, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectDetail } from '../../data/projects/types'
import { getProjectTechnologyLabels } from '../../data/projects'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '../../lib/animations'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

interface ProjectDetailHeroProps {
  project: ProjectDetail
  ctaLabel: string
}

export function ProjectDetailHero({ project, ctaLabel }: ProjectDetailHeroProps) {
  const techLabels = getProjectTechnologyLabels(project)

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">
              {project.type === 'app' ? 'Mobile App' : 'Website'}
            </span>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {techLabels.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-muted px-3 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Button
                variant="primary"
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
              >
                {ctaLabel}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-accent/20 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-2xl">
              <img
                src={project.headerImage}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

interface ProjectFeaturesProps {
  project: ProjectDetail
  title?: string
}

export function ProjectFeatures({ project, title = 'Key Features' }: ProjectFeaturesProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeader eyebrow="Highlights" title={title} />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {project.features.map((feature) => (
            <motion.div key={feature.title} variants={fadeInUp}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectContentSectionProps {
  project: ProjectDetail
  headline?: string
}

export function ProjectContentSection({
  project,
  headline = 'About this project',
}: ProjectContentSectionProps) {
  if (project.mainContent.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex justify-center"
          >
            <div className="glass max-w-sm rounded-3xl p-8">
              <Sparkles className="h-8 w-8 text-accent" />
              <p className="mt-4 font-display text-2xl font-bold">{headline}</p>
              <p className="mt-2 text-sm text-muted">
                Crafted with attention to detail, performance, and user experience.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {project.mainContent.map((block) => (
              <motion.div key={block.heading} variants={fadeInUp}>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {block.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{block.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function ProjectScreenshots({ project }: { project: ProjectDetail }) {
  const validScreenshots = project.screenshots.filter((s) => s.image)

  if (validScreenshots.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <SectionHeader eyebrow="Gallery" title="App Screenshots" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {validScreenshots.map((shot, index) => (
            <motion.div key={`${shot.image}-${index}`} variants={fadeInUp}>
              <Card className="overflow-hidden p-0" hover={false}>
                <img
                  src={shot.image}
                  alt={shot.caption || `Screenshot ${index + 1}`}
                  className="aspect-[9/16] w-full object-cover"
                  loading="lazy"
                />
                {shot.caption && (
                  <p className="p-4 text-sm text-muted">{shot.caption}</p>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function ProjectContactCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <Card className="overflow-hidden p-8 sm:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Let&apos;s work together
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-muted">
              I&apos;m available for freelance and full-time opportunities. Let&apos;s build
              something great.
            </p>
            <div className="mt-8">
              <Link to="/#contact">
                <Button variant="primary">Contact Me</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
