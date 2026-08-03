import { motion } from 'framer-motion'
import { PenLine } from 'lucide-react'
import { Link } from 'react-router-dom'
import { navLinks, siteConfig } from '../../data/site'
import {
  GithubIcon,
  LinkedinIcon,
} from '../ui/SocialIcons'

const socialLinks = [
  { icon: GithubIcon, href: siteConfig.social.github, label: 'GitHub' },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: 'LinkedIn' },
  { icon: PenLine, href: siteConfig.social.blog, label: 'Blog' },
]

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-surface/50">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-2xl font-bold">
              <span className="text-gradient">{siteConfig.name}</span>
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline} Building thoughtful digital products with
              clean code and premium design.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Footer navigation"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={`/#${link.href}`}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-elevated text-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
