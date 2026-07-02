import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { educationData } from '../../data/experience'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { Card } from '../ui/Card'
import { SectionHeader } from '../ui/SectionHeader'
import { ExperienceCardList } from './ExperienceCard'

export function AboutSection() {
  return (
    <section id="about" aria-label="About and qualifications" className="py-24 md:py-32">
      <div className="section-container">
        <SectionHeader
          eyebrow="Qualification"
          title="Education & Experience"
          description="A journey through academic foundations and professional growth in web and mobile development."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Experience */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">My Experience</h3>
            </div>

            <ExperienceCardList />
          </div>

          {/* Education timeline */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-muted text-accent">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">My Education</h3>
            </div>

            <div className="relative space-y-0">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="relative flex gap-6 pb-8 last:pb-0"
                >
                  {/* Timeline line & dot */}
                  <div className="flex flex-col items-center">
                    <div className="z-10 h-3 w-3 rounded-full border-2 border-accent bg-background" />
                    {index < educationData.length - 1 && (
                      <div className="w-px flex-1 bg-border" />
                    )}
                  </div>

                  <Card className="flex-1 -mt-1" hover={false}>
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-display text-base font-semibold">{item.title}</h4>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
