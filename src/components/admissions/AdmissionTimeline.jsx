import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ADMISSION_TIMELINE } from '@/lib/admissionsConstants'

function TimelineNode({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 md:block md:min-w-[200px] md:flex-1 md:gap-0"
    >
      <div className="relative z-10 flex flex-col items-center md:mb-6">
        <motion.span
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : undefined}
          transition={{ type: 'spring', stiffness: 280, damping: 18, delay: index * 0.08 + 0.1 }}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white shadow-brand-pill ring-4 ring-accent/30"
        >
          {String(index + 1).padStart(2, '0')}
        </motion.span>
      </div>
      <div className="pb-10 md:pb-0 md:text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {item.month}
        </p>
        <h3 className="mt-2 text-base font-semibold text-foreground md:text-lg">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
      </div>
    </motion.div>
  )
}

export default function AdmissionTimeline() {
  const lineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 75%', 'end 40%'],
  })
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="timeline" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Academic calendar"
            title="Admissions Timeline"
            description="An indicative yearly rhythm — always confirm exact dates with official NEET and counselling notifications."
          />
        </Reveal>

        <div ref={lineRef} className="relative mt-16">
          {/* Mobile vertical line */}
          <div className="absolute bottom-8 left-[21px] top-2 w-px bg-border md:hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>

          {/* Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-border md:block">
            <motion.div
              style={{ scaleX, originX: 0 }}
              className="h-full w-full bg-gradient-to-r from-primary via-secondary to-accent"
            />
          </div>

          <div className="relative flex flex-col md:flex-row md:justify-between md:gap-4">
            {ADMISSION_TIMELINE.map((item, i) => (
              <TimelineNode key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
