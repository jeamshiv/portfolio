import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Globe, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getFeaturedProject } from '../../data/projects'
import { fadeInUp, slideInRight, staggerContainer } from '../../lib/animations'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

export function FeaturedWorkSection() {
  const featured = getFeaturedProject()
  if (!featured) return null

  const isApp = featured.type === 'app'
  const TypeIcon = isApp ? Smartphone : Globe
  const typeLabel = isApp ? 'Mobile App' : 'Website'

  return (
    <section aria-label="Featured work" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader eyebrow="Spotlight" title="Featured Work" align="left" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Project type badge — Mobile App or Website */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-muted px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent"
            >
              <TypeIcon className="h-3.5 w-3.5" />
              {typeLabel}
            </motion.div>

            <motion.h3
              variants={fadeInUp}
              className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {featured.title}
            </motion.h3>

            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-relaxed text-muted"
            >
              {featured.description}
            </motion.p>

            {/* Tech stack chips */}
            {featured.techLabels.length > 0 && (
              <motion.div variants={fadeInUp} className="mt-6 flex flex-wrap gap-2">
                {featured.techLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted"
                  >
                    {label}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Key features */}
            {featured.features.length > 0 && (
              <motion.ul variants={fadeInUp} className="mt-7 grid gap-3 sm:grid-cols-2">
                {featured.features.slice(0, 4).map((feature) => (
                  <li key={feature.title} className="flex gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground">{feature.title}</p>
                      <p className="text-xs leading-relaxed text-muted">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div variants={fadeInUp} className="mt-8">
              <Link to={featured.detailPath}>
                <Button variant="primary">
                  {featured.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <Link to={featured.detailPath} className="block">
              <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-accent/20 to-transparent blur-2xl" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-2xl"
              >
                <img
                  src={featured.headerImage}
                  alt={featured.title}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
