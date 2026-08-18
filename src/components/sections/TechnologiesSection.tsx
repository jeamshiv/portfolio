import { motion } from 'framer-motion'
import { technologyColumns } from '../../data/technologies'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { SectionHeader } from '../ui/SectionHeader'

const allTechnologies = technologyColumns.flat()

function TechCard({
  name,
  image,
  className = '',
}: {
  name: string
  image: string
  className?: string
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-3 shadow-lg shadow-black/5 ring-1 ring-black/5 dark:shadow-black/40 dark:ring-white/15 ${className}`}
    >
      <img
        src={image}
        alt={name}
        title={name}
        loading="lazy"
        className="max-h-9 w-auto object-contain transition-transform duration-300 sm:max-h-10 lg:max-h-12"
      />
      <span className="line-clamp-2 px-0.5 text-center text-[11px] font-semibold leading-tight text-zinc-700 sm:text-xs">
        {name}
      </span>
    </motion.div>
  )
}

export function TechnologiesSection() {
  return (
    <section id="technologies" aria-label="Technologies" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="I Love Latest"
          title="Technologies"
          description="Tools and frameworks I use to build fast, scalable, and beautiful digital products."
        />

        {/* Mobile / tablet: simple readable grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:hidden"
        >
          {allTechnologies.map((tech) => (
            <TechCard
              key={tech.name}
              name={tech.name}
              image={tech.image}
              className="aspect-square min-h-0 w-full p-4"
            />
          ))}
        </motion.div>

        {/* Desktop: staggered diamond columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="hidden items-center justify-center gap-5 lg:flex lg:gap-6"
        >
          {technologyColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-5 lg:gap-6">
              {column.map((tech) => (
                <TechCard
                  key={tech.name}
                  name={tech.name}
                  image={tech.image}
                  className="h-32 w-44 p-4"
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
