import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { RESEARCH_TIMELINE } from '@/lib/researchConstants'
import { cn } from '@/lib/utils'

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-70px' })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid gap-8 md:grid-cols-2 md:gap-12',
        !isLeft && 'md:[&>*:first-child]:order-2'
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -32 : 32, filter: 'blur(6px)' }}
        animate={isInView ? { opacity: 1, x: 0, filter: 'blur(0px)' } : undefined}
        transition={{ duration: 0.65, delay: 0.08 }}
        className={cn(isLeft ? 'md:text-right' : 'md:text-left')}
      >
        <article className="inline-block w-full max-w-md rounded-3xl border border-border/80 bg-white p-6 text-left shadow-brand-xs">
          <span className="font-display text-3xl text-primary">{item.year}</span>
          <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
        </article>
      </motion.div>
      <div className="pointer-events-none absolute left-1/2 top-8 hidden -translate-x-1/2 md:block">
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : undefined}
          transition={{ type: 'spring', stiffness: 260, damping: 18 }}
          className="flex h-4 w-4 rounded-full bg-primary ring-4 ring-accent/40"
        />
      </div>
      <div className="hidden md:block" />
    </div>
  )
}

export default function ResearchTimeline() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 80%', 'end 20%'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Milestones"
            title="Timeline"
            description="A decade-plus arc of building systems for ethical, useful dental research."
          />
        </Reveal>
        <div ref={lineRef} className="relative mt-16 space-y-10 md:space-y-14">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>
          {RESEARCH_TIMELINE.map((item, index) => (
            <TimelineItem key={item.year} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
