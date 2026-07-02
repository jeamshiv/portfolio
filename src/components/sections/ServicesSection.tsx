import { motion } from 'framer-motion'
import { servicesData } from '../../data/services'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'

export function ServicesSection() {
  return (
    <section id="services" aria-label="Services" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Good Skills In"
          title="Services"
          description="End-to-end digital solutions — from design to deployment, tailored for modern businesses."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {servicesData.map((service) => {
            const Icon = service.icon
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card className="h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-muted text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
