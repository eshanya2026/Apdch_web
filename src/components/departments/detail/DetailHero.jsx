import { Link } from 'react-router-dom'
import { motion, useTransform } from 'framer-motion'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import { ArrowLeft, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function DetailHero({ department }) {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[62svh] items-end overflow-hidden pb-16 pt-28 md:min-h-[70svh] md:pb-24 will-change-[clip-path]"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <img
          src={department.image}
          alt={department.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <Link
          to="/departments"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          All departments
        </Link>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {department.shortName} · Department
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
          {department.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/75 md:text-xl">{department.tagline}</p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href="#appointment">
              <CalendarDays className="h-4 w-4" />
              Book Appointment
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  )
}
