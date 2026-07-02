import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl font-bold tracking-tight"
            >
              <span className="text-gradient">Jeamshiv</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="h-0.5 rounded-full bg-linear-to-r from-accent to-accent-light"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
