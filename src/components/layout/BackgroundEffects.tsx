import { motion } from 'framer-motion'

export function BackgroundEffects() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Noise texture */}
      <div className="noise-overlay absolute inset-0" />

      {/* Gradient blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-32 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[100px]"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[90px]"
      />
    </div>
  )
}
