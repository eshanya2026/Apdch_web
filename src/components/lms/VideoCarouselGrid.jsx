import { useRef } from 'react'
import { PlayCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/shared/Reveal'

export default function VideoCarouselGrid({ videoIds = [], titlePrefix = 'Lesson' }) {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  if (!videoIds || videoIds.length === 0) return null

  return (
    <div className="mt-8 relative">
      {/* Navigation Controls */}
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll('left')}
          title="Scroll Left"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-white text-foreground shadow-xs transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          title="Scroll Right"
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/80 bg-white text-foreground shadow-xs transition-colors hover:bg-primary hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Horizontal Carousel Track */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {videoIds.map((videoId, i) => (
          <div
            key={videoId}
            className="w-[300px] sm:w-[360px] shrink-0 snap-start"
          >
            <Reveal delay={(i % 6) * 0.03}>
              <article className="overflow-hidden rounded-[1.75rem] border border-primary/15 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30">
                <div className="aspect-video bg-foreground relative">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title={`${titlePrefix} ${i + 1}`}
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="flex items-center gap-3 p-5 border-t border-border/60">
                  <PlayCircle className="h-5 w-5 shrink-0 text-primary" />
                  <h3 className="font-bold text-foreground text-sm truncate">
                    {titlePrefix} {i + 1}
                  </h3>
                </div>
              </article>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  )
}
