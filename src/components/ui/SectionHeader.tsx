import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'mx-auto max-w-2xl text-center',
        className,
      )}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}
