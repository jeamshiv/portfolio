import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.25 } } : undefined}
      className={cn(
        'glass group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300',
        hover && 'hover:shadow-xl hover:shadow-accent/5',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  )
}
