import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  getAllProjectSummaries,
  getProjectDetailPath,
  getProjectTechnologyLabels,
} from '../../data/projects'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

export function ProjectsSection() {
  const projects = getAllProjectSummaries()

  return (
    <section id="projects" aria-label="Projects portfolio" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Portfolio"
          title="My Projects"
          description="A selection of web and mobile projects showcasing clean code, modern design, and real-world impact."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const techLabels = getProjectTechnologyLabels(project)
            const detailPath = getProjectDetailPath(project)

            return (
              <motion.div key={project.id} variants={fadeInUp}>
                <Link to={detailPath} className="block h-full">
                  <Card className="flex h-full flex-col">
                    <div className="relative mb-5 overflow-hidden rounded-xl border border-border/60">
                      <div className="aspect-video">
                        <img
                          src={project.featureImage}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.type === 'app' ? 'App' : 'Website'}
                    </span>

                    <h3 className="mt-2 font-display text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                      {project.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                      {project.shortDescription}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {techLabels.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-accent-muted px-2.5 py-0.5 text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                      {techLabels.length > 4 && (
                        <span className="rounded-full bg-surface-elevated px-2.5 py-0.5 text-xs font-medium text-muted">
                          +{techLabels.length - 4}
                        </span>
                      )}
                    </div>

                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                      View details
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/jeamshiv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-light"
          >
            View more on GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
