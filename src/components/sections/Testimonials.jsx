import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { TESTIMONIALS } from '@/lib/constants'
import { TESTIMONIALS_HOME } from '@/lib/homeConstants'

const AUTO_SCROLL_MS = 10000

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }, (_, i) => {
          const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100
          return (
            <span key={i} className="relative inline-flex h-4 w-4 shrink-0">
              <Star className="h-4 w-4 fill-amber-100 text-amber-200" />
              {fillPercent > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${fillPercent}%` }}
                >
                  <Star className="h-4 w-4 min-w-[16px] fill-amber-400 text-amber-400" />
                </span>
              )}
            </span>
          )
        })}
      </div>
      <span className="ml-1 rounded-md bg-amber-50 px-2 py-0.5 text-xs font-bold text-amber-900 border border-amber-200/60">
        {rating.toFixed(1)} / 5.0
      </span>
    </div>
  )
}

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const count = TESTIMONIALS.length
  const safeIndex = index % count
  const current = TESTIMONIALS[safeIndex] || TESTIMONIALS[0]

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % count)
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + count) % count)
  }

  useEffect(() => {
    if (isPaused || count <= 1) return undefined
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, AUTO_SCROLL_MS)

    return () => clearInterval(timer)
  }, [isPaused, count])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-surface-soft/40 to-background px-5 py-20 md:px-8 md:py-28">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <Reveal>
          <SectionHeading
            eyebrow={TESTIMONIALS_HOME.eyebrow}
            title={TESTIMONIALS_HOME.title}
            description={TESTIMONIALS_HOME.description}
          />
        </Reveal>

        {/* Main Testimonial Spotlight Showcase */}
        <Reveal delay={0.08}>
          <div
            className="relative mx-auto mt-12 max-w-4xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Showcase Card */}
            <div className="relative overflow-hidden rounded-[2.2rem] border border-border/90 bg-white/95 p-8 shadow-xl backdrop-blur-md md:p-12">
              {/* Giant background quote icon watermark */}
              <Quote className="pointer-events-none absolute -right-4 -top-4 h-44 w-44 text-primary/[0.04] rotate-180" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative z-10 flex flex-col justify-between"
                >
                  {/* Top Bar: Rating & Category Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 pb-6">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        {current.type}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                        Verified {current.type}
                      </span>
                    </div>
                    <StarRating rating={current.rating} />
                  </div>

                  {/* Testimonial Quote */}
                  <div className="my-8">
                    <Quote className="mb-3 h-8 w-8 text-primary/30" />
                    <p className="font-display text-lg leading-relaxed text-foreground md:text-2xl font-medium">
                      “{current.quote}”
                    </p>
                  </div>

                  {/* Author Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-display text-xl font-bold text-white shadow-brand-icon">
                        {(current.name.replace(/^Dr\.\s*/i, '').trim()[0] || '?').toUpperCase()}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-bold text-foreground md:text-lg">
                          {current.name}
                        </h4>
                        <p className="text-xs font-medium text-muted md:text-sm">{current.role}</p>
                      </div>
                    </div>

                    {/* Controls & Slide Counter */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-wider text-muted">
                        <span className="text-primary font-bold">{safeIndex + 1}</span> / {count}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={handlePrev}
                          aria-label="Previous testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface-soft text-foreground transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary active:scale-95"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleNext}
                          aria-label="Next testimonial"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-surface-soft text-foreground transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary active:scale-95"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Quick Author Selector Bar below showcase */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {TESTIMONIALS.map((t, idx) => {
                const isSelected = idx === safeIndex
                return (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setIndex(idx)}
                    className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-primary/40 bg-white shadow-brand-sm ring-1 ring-primary/20 scale-[1.02]'
                        : 'border-border/60 bg-white/60 hover:border-primary/25 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-sm transition-colors ${
                        isSelected
                          ? 'bg-primary text-white'
                          : 'bg-surface-soft text-foreground group-hover:bg-primary/10 group-hover:text-primary'
                      }`}
                    >
                      {(t.name.replace(/^Dr\.\s*/i, '').trim()[0] || '?').toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-xs font-bold ${isSelected ? 'text-primary' : 'text-foreground'}`}>
                        {t.name}
                      </p>
                      <p className="truncate text-[11px] text-muted">{t.type}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
