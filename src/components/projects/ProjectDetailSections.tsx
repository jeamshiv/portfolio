import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Gauge,
  Layers,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectDetail } from '../../data/projects/types'
import { getProjectTechnologyLabels } from '../../data/projects'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { scrollToSection } from '../../lib/utils'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

export { ProjectScreenshots } from './ProjectScreenshots'

interface ProjectDetailHeroProps {
  project: ProjectDetail
  ctaLabel: string
}

export function ProjectDetailHero({ project, ctaLabel }: ProjectDetailHeroProps) {
  const techLabels = getProjectTechnologyLabels(project)
  const isWebsite = project.type === 'website'

  let displayUrl: string
  try {
    displayUrl = project.liveUrl ? new URL(project.liveUrl).hostname.replace(/^www\./, '') : ''
  } catch {
    displayUrl = ''
  }

  return (
    <section className="pt-28 pb-8 md:pt-32 md:pb-12">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>
        </motion.div>

        {/* Centered intro */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"
          >
            {isWebsite ? 'Website' : 'Mobile App'}
          </motion.span>

          <motion.h1
            variants={fadeInUp}
            className="mt-5 font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {project.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap justify-center gap-2">
            {techLabels.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-8">
            {project.liveUrl ? (
              <Button
                variant="primary"
                onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
              >
                {ctaLabel}
                <ExternalLink className="h-4 w-4" />
              </Button>
            ) : null}
          </motion.div>
        </motion.div>

        {/* Large feature image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-14 overflow-hidden md:mt-16"
        >
          <div className="absolute -inset-6 rounded-4xl bg-linear-to-br from-accent/25 via-accent/5 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-2xl">
            {/* Browser chrome for websites */}
            {isWebsite && (
              <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
                {displayUrl && (
                  <div className="ml-3 hidden max-w-full truncate rounded-md bg-background/70 px-3 py-1 text-xs text-muted sm:block">
                    {displayUrl}
                  </div>
                )}
              </div>
            )}
            <img
              src={project.featureImage}
              alt={project.title}
              className="max-h-160 w-full object-cover object-top"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectFeaturesProps {
  project: ProjectDetail
  title?: string
}

const featureIcons = [Rocket, Zap, Layers, ShieldCheck, Gauge, Sparkles]

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
          {project.features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length]
            return (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
                </Card>
              </motion.div>
            )
          })}
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

export function ProjectContactCta() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-accent to-accent-light px-8 py-14 text-center shadow-2xl shadow-accent/25 sm:px-12"
        >
          {/* Decorative glows */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Hire Me
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind? Let&apos;s talk about it!
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
              I build fast, scalable web and mobile products with modern technologies —
              let&apos;s bring your idea to life.
            </p>
            <div className="mt-8">
              <Button
                variant="secondary"
                onClick={() => scrollToSection('contact')}
                className="border-transparent bg-white text-accent hover:bg-white/90 hover:text-accent"
              >
                Let&apos;s Talk Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
