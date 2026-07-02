import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant
  asChild?: boolean
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:bg-accent/90',
  secondary:
    'bg-surface-elevated text-foreground border border-border hover:border-accent/40 hover:bg-accent-muted',
  ghost: 'text-muted hover:text-foreground hover:bg-surface-elevated',
  outline:
    'border border-accent/50 text-accent hover:bg-accent-muted hover:border-accent',
}

export function Button({
  className,
  variant = 'primary',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}
