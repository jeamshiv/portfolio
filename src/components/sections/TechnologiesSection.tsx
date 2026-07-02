import { motion } from 'framer-motion'
import { technologyColumns } from '../../data/technologies'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { SectionHeader } from '../ui/SectionHeader'

export function TechnologiesSection() {
  return (
    <section id="technologies" aria-label="Technologies" className="py-24 md:py-32">
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
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 lg:gap-6"
        >
          {technologyColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col gap-3 sm:gap-5 lg:gap-6"
            >
              {column.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  className="flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 shadow-lg shadow-black/5 ring-1 ring-black/5 sm:h-28 sm:w-32 lg:h-32 lg:w-44 dark:shadow-black/40 dark:ring-white/15"
                >
                  <img
                    src={tech.image}
                    alt={tech.name}
                    title={tech.name}
                    loading="lazy"
                    className="max-h-8 w-auto object-contain transition-transform duration-300 sm:max-h-10 lg:max-h-12"
                  />
                  <span className="text-center text-[11px] font-semibold text-zinc-700 sm:text-xs">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
