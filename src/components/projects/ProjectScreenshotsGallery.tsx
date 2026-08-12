import { useState, type CSSProperties } from 'react'
import type { Swiper as SwiperClass } from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import type { ProjectDetail, ProjectScreenshot } from '../../data/projects/types'

interface ProjectScreenshotsGalleryProps {
  project: ProjectDetail
  screenshots: ProjectScreenshot[]
  onReady: (api: { slidePrev: () => void; slideNext: () => void }) => void
  style?: CSSProperties
}

export function ProjectScreenshotsGallery({
  project,
  screenshots,
  onReady,
  style,
}: ProjectScreenshotsGalleryProps) {
  const [, setSwiper] = useState<SwiperClass | null>(null)

  return (
    <Swiper
      onSwiper={(instance) => {
        setSwiper(instance)
        onReady({
          slidePrev: () => instance.slidePrev(),
          slideNext: () => instance.slideNext(),
        })
      }}
      modules={[Autoplay, Pagination]}
      grabCursor
      rewind
      speed={600}
      spaceBetween={20}
      autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      breakpoints={{
        0: { slidesPerView: 1.25, spaceBetween: 16 },
        480: { slidesPerView: 1.8, spaceBetween: 20 },
        640: { slidesPerView: 2.4, spaceBetween: 24 },
        768: { slidesPerView: 3, spaceBetween: 28 },
        1024: { slidesPerView: 4, spaceBetween: 32 },
      }}
      style={style}
      className="pb-12!"
    >
      {screenshots.map((shot, index) => (
        <SwiperSlide key={`${shot.image}-${index}`} className="h-auto!">
          <div className="group overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-lg transition-transform duration-300 hover:-translate-y-1.5 dark:shadow-black/30">
            <img
              src={shot.image}
              alt={shot.caption || `${project.title} screenshot ${index + 1}`}
              className="aspect-9/19 w-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
          {shot.caption && (
            <p className="mt-4 text-center text-sm font-medium text-muted">{shot.caption}</p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
