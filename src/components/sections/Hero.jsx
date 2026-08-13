import { motion, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/shared/Reveal'
import { HERO, HERO_STATS } from '@/lib/homeConstants'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'

export default function Hero() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()

  // Background moves slower than scroll → parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  // Content drifts up + fades as you leave the hero
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <motion.section
      id="top"
      ref={ref}
      style={{ clipPath }}
      className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pb-20 pt-36 will-change-[clip-path] md:pb-24 md:pt-40"
    >
      {/* Parallax background layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 -top-[12%] h-[125%] will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=2000&q=80&auto=format&fit=crop"
          alt="Adhiparasakthi Dental College and Hospitals"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />
      </motion.div>

      {/* Newton's 3rd Law Interactive Floating Line Icons */}
      <FloatingHeroIcons />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl translate-y-6 flex-col items-center px-5 md:translate-y-10 md:px-8"
      >
        <div className="max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="hero-heading-gradient font-display text-[2.35rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Where Future Dentists Learn.
            <br />
            Where Smiles Begin.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mx-auto mt-5 max-w-xl font-sans text-base leading-relaxed text-white/80 md:text-lg"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild size="lg">
              <Link to="/contact">
                Apply for Admission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/academics">
                <GraduationCap className="h-4 w-4" />
                Explore Programs
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:mt-14 sm:gap-8 md:grid-cols-4"
        >
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold text-white md:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-white/65 uppercase sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
