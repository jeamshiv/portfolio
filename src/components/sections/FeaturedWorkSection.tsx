import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getFeaturedProject } from '../../data/projects'
import { slideInLeft, slideInRight } from '../../lib/animations'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'

export function FeaturedWorkSection() {
  const featured = getFeaturedProject()
  if (!featured) return null

  return (
    <section aria-label="Featured work" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader eyebrow="Spotlight" title="Featured Work" align="left" />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-muted">{featured.description}</p>
            <div className="mt-8">
              <Link to={featured.detailPath}>
                <Button variant="primary">
                  {featured.ctaLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
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
