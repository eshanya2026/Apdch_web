import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Landmark, GraduationCap, FlaskConical, Monitor, Globe } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { MILESTONES } from '@/lib/aboutConstants'
import { cn } from '@/lib/utils'

const ICONS = { Landmark, GraduationCap, FlaskConical, Monitor, Globe }

function useScrollDirection() {
  const [direction, setDirection] = useState('down')
  const lastY = useRef(typeof window !== 'undefined' ? window.scrollY : 0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - lastY.current) < 4) return
      setDirection(y > lastY.current ? 'down' : 'up')
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return direction
}

function TimelineItem({ item, index, scrollDirection }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.35, margin: '-10% 0px -10% 0px' })
  const isLeft = index % 2 === 0
  const Icon = ICONS[item.icon]
  const fromBottom = scrollDirection === 'up'

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid gap-8 md:grid-cols-2 md:gap-12',
        isLeft ? '' : 'md:[&>*:first-child]:order-2'
      )}
      style={{ perspective: 1200 }}
    >
      <div className={cn('md:pb-4', isLeft ? 'md:text-right' : 'md:text-left')}>
        <motion.article
          initial={false}
          animate={
            isInView
              ? { opacity: 1, rotateX: 0, y: 0 }
              : {
                  opacity: 0,
                  rotateX: fromBottom ? -85 : 85,
                  y: fromBottom ? 40 : -40,
                }
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: isInView ? 0.05 : 0,
          }}
          style={{
            transformOrigin: fromBottom ? 'bottom center' : 'top center',
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
          className="inline-block w-full max-w-md rounded-3xl border border-border/80 bg-white p-6 text-left shadow-brand-xs will-change-transform md:p-7"
        >
          <div className="mb-3 flex items-center gap-2.5">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
              {item.label}
            </span>
          </div>
          <span className="font-display text-3xl text-primary md:text-4xl">{item.year}</span>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        </motion.article>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
        <motion.span
          initial={false}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.12 }}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-accent/40"
        >
          <Icon className="h-4 w-4" />
        </motion.span>
      </div>

      <div className="hidden md:block" />
    </div>
  )
}

export default function MilestonesTimeline() {
  const lineRef = useRef(null)
  const scrollDirection = useScrollDirection()
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 80%', 'end 20%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="relative overflow-hidden bg-foreground px-5 py-24 md:px-8 md:py-32">
      <div className="pointer-events-none absolute inset-0 glow-radial-t" />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Milestones"
            title="A Timeline of Purpose and Progress"
          />
        </Reveal>

        <div ref={lineRef} className="relative mt-16 space-y-10 md:space-y-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-accent via-primary to-secondary"
            />
          </div>

          {MILESTONES.map((item, index) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={index}
              scrollDirection={scrollDirection}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
