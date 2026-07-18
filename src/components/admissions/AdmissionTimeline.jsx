import { useEffect, useRef } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ADMISSION_TIMELINE, ADMISSION_TIMELINE_SECTION } from '@/lib/admissionsConstants'
import { cn } from '@/lib/utils'

function buildSPath(count) {
  const points = Array.from({ length: count }, (_, i) => {
    const y = ((i + 0.5) / count) * 100
    const x = i % 2 === 0 ? 28 : 72
    return { x, y }
  })

  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const midY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`
  }
  return d
}

function TimelineCard({ title, index, isLeft }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={cn('relative z-10 flex w-full', isLeft ? 'justify-start' : 'justify-end')}
    >
      <article
        className={cn(
          'relative w-[min(100%,300px)] rounded-2xl border border-border/80 bg-white p-5 shadow-brand-xs md:w-[300px] md:p-6',
          isLeft ? 'md:mr-[calc(50%-10px)]' : 'md:ml-[calc(50%-10px)]'
        )}
      >
        <span
          className={cn(
            'absolute top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary ring-4 ring-accent/30 md:block',
            isLeft ? '-right-1' : '-left-1'
          )}
        />
        <div className="flex items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-brand-pill">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-base font-semibold leading-snug text-foreground md:text-lg">
            {title}
          </h3>
        </div>
      </article>
    </motion.div>
  )
}

export default function AdmissionTimeline() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)
  const pathD = buildSPath(ADMISSION_TIMELINE.length)

  const arrowLeft = useMotionValue('28%')
  const arrowTop = useMotionValue('6.25%')
  const arrowRotate = useMotionValue(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 0.92], [0, 1], { clamp: true })
  const mobileArrowTop = useTransform(pathLength, (v) => `${v * 100}%`)

  const updateArrow = (progress) => {
    const path = trackRef.current
    const box = containerRef.current
    if (!path || !box) return

    const total = path.getTotalLength()
    const at = Math.max(0, Math.min(1, progress)) * total
    const p1 = path.getPointAtLength(at)
    const p2 = path.getPointAtLength(Math.min(total, at + 0.8))

    const { width, height } = box.getBoundingClientRect()
    // Convert viewBox tangent into screen-space angle (SVG is stretched)
    const angle =
      (Math.atan2((p2.y - p1.y) * height, (p2.x - p1.x) * width) * 180) / Math.PI

    arrowLeft.set(`${p1.x}%`)
    arrowTop.set(`${p1.y}%`)
    arrowRotate.set(angle)
  }

  useMotionValueEvent(pathLength, 'change', updateArrow)

  useEffect(() => {
    updateArrow(pathLength.get())
    const onResize = () => updateArrow(pathLength.get())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [pathLength])

  return (
    <section id="timeline" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={ADMISSION_TIMELINE_SECTION.eyebrow}
            title={ADMISSION_TIMELINE_SECTION.title}
          />
        </Reveal>

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-4xl">
          <svg
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full overflow-visible md:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="timeline-s-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A3485A" />
                <stop offset="50%" stopColor="#842A3B" />
                <stop offset="100%" stopColor="#662222" />
              </linearGradient>
            </defs>

            <path
              d={pathD}
              fill="none"
              stroke="#E8DDE0"
              strokeWidth="0.18"
              strokeLinecap="round"
            />

            <motion.path
              d={pathD}
              fill="none"
              stroke="url(#timeline-s-gradient)"
              strokeWidth="0.26"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            {/* Hidden path used for arrow position sampling */}
            <path ref={trackRef} d={pathD} fill="none" stroke="none" />
          </svg>

          {/* Arrow follows the S-line */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute z-[5] hidden -translate-x-1/2 -translate-y-1/2 md:block"
            style={{
              left: arrowLeft,
              top: arrowTop,
              rotate: arrowRotate,
            }}
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4 drop-shadow-sm" aria-hidden>
              <path d="M2.5 2.2 L13.5 8 L2.5 13.8 Z" fill="#842A3B" />
            </svg>
          </motion.div>

          {/* Mobile vertical line + arrow */}
          <div className="absolute bottom-8 left-[21px] top-8 w-px bg-border md:hidden">
            <motion.div
              style={{ scaleY: pathLength, originY: 0 }}
              className="h-full w-full origin-top bg-gradient-to-b from-accent via-primary to-secondary"
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top: mobileArrowTop }}
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3 rotate-90" aria-hidden>
                <path d="M1 1 L11 6 L1 11 Z" fill="#842A3B" />
              </svg>
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col gap-10 md:gap-14">
            {ADMISSION_TIMELINE.map((title, i) => (
              <div key={title} className="relative flex items-start gap-4 md:block">
                <span className="relative z-10 mt-4 flex h-3 w-3 shrink-0 rounded-full bg-primary ring-4 ring-accent/30 md:hidden" />
                <TimelineCard title={title} index={i} isLeft={i % 2 === 0} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
