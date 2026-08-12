import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { AboutSection } from '../components/sections/AboutSection'
import { BlogSection } from '../components/sections/BlogSection'
import { ContactSection } from '../components/sections/ContactSection'
import { FeaturedWorkSection } from '../components/sections/FeaturedWorkSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { TechnologiesSection } from '../components/sections/TechnologiesSection'
import { siteConfig } from '../data/site'
import { pageReveal } from '../lib/animations'
import { scrollToSection } from '../lib/utils'

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => scrollToSection(id))
    }
  }, [hash])

  return (
    <motion.div
      variants={pageReveal}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <title>{`${siteConfig.fullName} | ${siteConfig.title}`}</title>
      <meta name="description" content={siteConfig.description} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedWorkSection />
      <ProjectsSection />
      <TechnologiesSection />
      <BlogSection />
      <ContactSection />
    </motion.div>
  )
}
