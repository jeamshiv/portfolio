import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { fadeInUp, slideInRight, staggerContainer } from '../../lib/animations'
import { scrollToSection } from '../../lib/utils'
import { Button } from '../ui/Button'

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center pt-24"
    >
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={fadeInUp} className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-sm text-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Available for freelance & full-time
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
            >
              {siteConfig.greeting}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="text-foreground">{siteConfig.title.split(' ')[0]}</span>
              <br />
              <span className="text-gradient">{siteConfig.title.split(' ').slice(1).join(' ') || 'Developer'}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('contact')}>Contact Me</Button>
              <Button
                variant="outline"
                onClick={() => window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer')}
              >
                <Download className="h-4 w-4" />
                Get CV
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Done' },
                { value: '8+', label: 'Technologies' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            variants={slideInRight}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-accent/20"
              />
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative overflow-hidden rounded-3xl border border-border bg-surface-elevated p-2 shadow-2xl shadow-accent/10"
              >
                <div className="aspect-square w-full max-w-md overflow-hidden rounded-2xl bg-linear-to-br from-accent/20 via-surface to-accent-muted">
                  <img
                    src="https://raw.githubusercontent.com/jeamshiv/portfolio/master/public/assets/boywithcomputerpink.png"
                    alt="Jeamshiv — Web Developer illustration"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg"
              >
                <p className="text-xs text-muted">Specializing in</p>
                <p className="font-display text-sm font-bold text-accent">React & React Native</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          type="button"
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          aria-label="Scroll to about section"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
