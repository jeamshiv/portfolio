import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { experienceData } from '../../data/experience'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { cn } from '../../lib/utils'
import { Card } from '../ui/Card'

const experienceBackgrounds = [
  {
    image: "bg-[url('/assets/bg-experience1.png')]",
    position: 'bg-right-top',
  },
  {
    image: "bg-[url('/assets/bg-experience2.png')]",
    position: 'bg-right-bottom',
  },
  {
    image: "bg-[url('/assets/bg-experience3.png')]",
    position: 'bg-right-top',
  },
] as const

export function ExperienceCardList() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="space-y-4"
    >
      {experienceData.map((item, index) => {
        const bg = experienceBackgrounds[index % experienceBackgrounds.length]

        return (
          <motion.div key={`${item.company}-${item.period}`} variants={fadeInUp}>
            <Card
              className={cn(
                'bg-no-repeat p-5 sm:p-6',
                bg.image,
                bg.position,
                'dark:!bg-none',
              )}
            >
              <div className="flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center self-center rounded-xl',
                    'bg-accent-muted text-accent transition-colors duration-300',
                    'group-hover:text-[#f05d7b]',
                  )}
                >
                  <Code2 className="h-5 w-5" />
                </div>

                <div className="relative min-w-0 flex-1 pr-20 sm:pr-24 lg:pr-28 dark:pr-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.period}
                  </span>
                  <h4 className="mt-1 font-display text-base font-semibold transition-colors duration-300 group-hover:text-accent">
                    {item.company}
                  </h4>
                  <p className="mt-1 text-sm font-medium text-muted">{item.role}</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2 text-sm leading-relaxed text-muted"
                      >
                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
