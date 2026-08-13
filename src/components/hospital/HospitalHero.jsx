import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { CalendarDays, Phone, Siren } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HOSPITAL_HERO } from '@/lib/hospitalConstants'
import { INSTITUTION } from '@/lib/constants'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'

export default function HospitalHero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[88svh] items-end overflow-hidden pb-20 pt-32 will-change-[clip-path] md:min-h-[92svh] md:items-center md:pb-28"
    >
      <div className="absolute inset-0">
        <img
          src={HOSPITAL_HERO.image}
          alt="APDCH Dental Hospital"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
      </div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
        >
          {HOSPITAL_HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.85, delay: 0.08 }}
          className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          Compassionate Care.
          <br />
          <span className="italic text-accent">Clinical Excellence.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          {HOSPITAL_HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-9 flex flex-wrap gap-3"
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
              Emergency Care
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${INSTITUTION.phone}`}>
              <Phone className="h-4 w-4" />
              Call Hospital
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/15 pt-8"
        >
          {HOSPITAL_HERO.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-2xl font-semibold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
