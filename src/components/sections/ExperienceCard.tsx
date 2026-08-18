import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'
import { experienceData } from '../../data/experience'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { cn } from '../../lib/utils'
import { Card } from '../ui/Card'

// Decorative backgrounds only apply from md+ so mobile copy isn't cramped.
const experienceBackgrounds = [
  {
    image: "md:bg-[url('/assets/bg-experience1.png')]",
    position: 'md:bg-right-top',
  },
  {
    image: "md:bg-[url('/assets/bg-experience2.png')]",
    position: 'md:bg-right-bottom',
  },
  {
    image: "md:bg-[url('/assets/bg-experience3.png')]",
    position: 'md:bg-right-top',
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
                'bg-none p-4 sm:p-5 md:bg-no-repeat md:bg-[length:160px_auto] md:p-6',
                bg.image,
                bg.position,
                'dark:!bg-none',
              )}
            >
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl sm:h-12 sm:w-12',
                    'bg-accent-muted text-accent transition-colors duration-300',
                    'group-hover:text-[#f05d7b]',
                  )}
                >
                  <Code2 className="h-5 w-5" />
                </div>

                <div className="relative min-w-0 flex-1 space-y-2 md:pr-20 dark:md:pr-0">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {item.period}
                  </span>
                  <h4 className="font-display text-sm font-semibold leading-snug transition-colors duration-300 group-hover:text-accent sm:text-base">
                    {item.company}
                  </h4>
                  <p className="text-sm font-medium text-muted">{item.role}</p>
                  <ul className="space-y-2 pt-0.5">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                        />
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
