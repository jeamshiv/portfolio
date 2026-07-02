import { motion } from 'framer-motion'
import { ArrowDown, Download, Sparkles } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { fadeInUp, slideInRight, staggerContainer } from '../../lib/animations'
import { scrollToSection } from '../../lib/utils'
import { Button } from '../ui/Button'
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '../ui/SocialIcons'

const socials = [
  { label: 'GitHub', href: siteConfig.social.github, Icon: GithubIcon },
  { label: 'LinkedIn', href: siteConfig.social.linkedin, Icon: LinkedinIcon },
  { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
  { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Done' },
  { value: '13+', label: 'Technologies' },
]

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      {/* Decorative animated glows */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-accent/25 blur-3xl md:h-96 md:w-96"
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-light/20 blur-3xl md:h-96 md:w-96"
      />

      <div className="section-container relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20"
        >
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-sm text-muted"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              Available for freelance &amp; full-time
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent"
            >
              {siteConfig.greeting}
            </motion.p>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            >
              <span className="text-foreground">{siteConfig.fullName.split(' ')[0]}</span>{' '}
              <span className="text-gradient">
                {siteConfig.fullName.split(' ').slice(1).join(' ')}
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 font-display text-xl font-semibold text-muted sm:text-2xl"
            >
              {siteConfig.title}
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-9 flex flex-wrap items-center gap-4">
              <Button onClick={() => scrollToSection('contact')}>Contact Me</Button>
              <Button
                variant="outline"
                onClick={() => window.open(siteConfig.resumeUrl, '_blank', 'noopener,noreferrer')}
              >
                <Download className="h-4 w-4" />
                Get CV
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4.5 w-4.5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual — profile photo */}
          <motion.div
            variants={slideInRight}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Rotating dashed ring — same size as the photo, doubles as the orbit track */}
              <motion.div
                aria-hidden="true"
                animate={{ rotate: 360 }}
                transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-full border border-dashed border-accent/25"
              />

              {/* Photo frame */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-full bg-linear-to-br from-accent via-accent-light to-accent p-1 shadow-2xl shadow-accent/25"
              >
                <div className="overflow-hidden rounded-full bg-surface-elevated">
                  <img
                    src="/assets/shivam-photo.jpg"
                    alt={`${siteConfig.fullName} — ${siteConfig.title}`}
                    className="h-64 w-64 object-cover object-top sm:h-80 sm:w-80 lg:h-104 lg:w-104"
                    loading="eager"
                  />
                </div>
              </motion.div>

              {/* Badges orbiting slowly around the photo's border */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 360 }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.6 },
                  rotate: { duration: 90, repeat: Infinity, ease: 'linear' },
                }}
                className="pointer-events-none absolute -inset-2"
              >
                {/* 4+ Years — orbit anchor top */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border/70 bg-surface/85 px-4 py-2.5 shadow-xl backdrop-blur-2xl"
                  >
                    <Sparkles className="h-4 w-4 text-accent" />
                    <div>
                      <p className="font-display text-sm font-bold leading-tight text-foreground">5+ Years</p>
                      <p className="text-[11px] text-muted">Experience</p>
                    </div>
                  </motion.div>
                </div>

                {/* Specializing in — orbit anchor bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
                    className="whitespace-nowrap rounded-full border border-border/70 bg-surface/85 px-5 py-3 text-center shadow-xl backdrop-blur-2xl"
                  >
                    <p className="text-xs text-muted">Specializing in</p>
                    <p className="font-display text-sm font-bold text-accent">React &amp; React Native</p>
                  </motion.div>
                </div>
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
          className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-accent md:block"
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
