import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { CalendarDays, Phone, Siren } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HOSPITAL_HERO } from '@/lib/hospitalConstants'
import { INSTITUTION } from '@/lib/constants'

export default function HospitalHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[85svh] items-end overflow-hidden pb-20 pt-32 md:min-h-[92svh] md:items-center md:pb-28 will-change-[clip-path]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={HOSPITAL_HERO.image}
          alt="APDCH Teaching Hospital"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 glow-radial-accent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute right-[12%] top-36 h-40 w-40 rounded-full border border-white/15 animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-28 left-[8%] h-56 w-56 rounded-full bg-secondary/20 blur-3xl animate-[float_8s_ease-in-out_1s_infinite]" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-accent"
        >
          {HOSPITAL_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.08 }}
          className="max-w-4xl font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[4.75rem]"
        >
          Luxury care.{' '}
          <span className="italic text-accent">Clinical</span> mastery.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {HOSPITAL_HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild size="lg">
            <a href="#appointment">
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#emergency">
              <Siren className="h-4 w-4" />
              Emergency
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${INSTITUTION.phone}`}>
              <Phone className="h-4 w-4" />
              {INSTITUTION.phone}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
