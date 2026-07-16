import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { ADMISSION_PROCESS } from '@/lib/admissionsConstants'

function ProcessCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
      animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : undefined}
      transition={{ duration: 0.65, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full rounded-[1.5rem] border border-border/80 bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm"
    >
      <span className="font-display text-4xl text-primary/20 transition-colors group-hover:text-primary/40">
        {item.step}
      </span>
      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
    </motion.article>
  )
}

export default function AdmissionProcess() {
  return (
    <section id="process" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="How to join"
            title="Admission Process"
            description="A clear six-step pathway from eligibility to enrolment at APDCH."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADMISSION_PROCESS.map((item, i) => (
            <ProcessCard key={item.step} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
