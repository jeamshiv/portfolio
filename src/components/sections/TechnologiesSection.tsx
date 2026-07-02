import { motion } from 'framer-motion'
import { technologiesData } from '../../data/technologies'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { SectionHeader } from '../ui/SectionHeader'

export function TechnologiesSection() {
  return (
    <section aria-label="Technologies" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="I Love Latest"
          title="Technologies"
          description="Tools and frameworks I use to build fast, scalable, and beautiful digital products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:gap-6"
        >
          {technologiesData.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="glass group flex flex-col items-center gap-3 rounded-2xl p-4 sm:p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className="text-center text-xs font-medium text-muted transition-colors group-hover:text-foreground sm:text-sm">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
