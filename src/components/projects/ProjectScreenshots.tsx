import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import type { ProjectDetail } from '../../data/projects/types'

const SwiperGallery = lazy(() =>
  import('./ProjectScreenshotsGallery').then((m) => ({ default: m.ProjectScreenshotsGallery })),
)

export function ProjectScreenshots({ project }: { project: ProjectDetail }) {
  const validScreenshots = project.screenshots.filter((s) => s.image)
  const [swiperApi, setSwiperApi] = useState<{
    slidePrev: () => void
    slideNext: () => void
  } | null>(null)

  if (validScreenshots.length === 0) return null

  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between md:mb-12">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Gallery
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              App Screenshots
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted md:text-lg">
              Swipe through the interface and core screens of the app.
            </p>
          </div>

          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => swiperApi?.slidePrev()}
              aria-label="Previous screenshots"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperApi?.slideNext()}
              aria-label="Next screenshots"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface-elevated text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense
            fallback={
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-9/19 animate-pulse rounded-3xl bg-surface-elevated"
                  />
                ))}
              </div>
            }
          >
            <SwiperGallery
              project={project}
              screenshots={validScreenshots}
              onReady={setSwiperApi}
              style={
                {
                  '--swiper-theme-color': 'var(--color-accent)',
                  '--swiper-pagination-bottom': '0px',
                } as CSSProperties
              }
            />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
