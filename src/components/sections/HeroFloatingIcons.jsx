import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  Brain,
  ClipboardPlus,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Hospital,
  Microscope,
  Pill,
  ShieldPlus,
  Smile,
  Stethoscope,
  Syringe,
} from 'lucide-react'

const ICON_SET = [
  GraduationCap,
  BookOpen,
  Stethoscope,
  Microscope,
  Syringe,
  HeartPulse,
  Hospital,
  FlaskConical,
  Award,
  Brain,
  ClipboardPlus,
  Smile,
  Pill,
  ShieldPlus,
]

function rand(min, max) {
  return min + Math.random() * (max - min)
}

function FloatingIcon({ Icon, size, left, top, driftX, driftY, duration, delay, rotate }) {
  const [push, setPush] = useState({ x: 0, y: 0 })

  const recoil = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    // Force from pointer → icon; reaction = opposite direction (Newton III)
    const fx = e.clientX - cx
    const fy = e.clientY - cy
    const len = Math.hypot(fx, fy) || 1
    const strength = 48
    setPush({
      x: (-fx / len) * strength,
      y: (-fy / len) * strength,
    })
  }

  return (
    <motion.span
      className="pointer-events-auto absolute text-white/35 drop-shadow-[0_0_12px_rgba(196,181,253,0.25)] transition-colors hover:text-accent"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0.25, 0.55, 0.35, 0.5],
        x: [0, driftX, -driftX * 0.6, driftX * 0.4, 0],
        y: [0, driftY, driftY * -0.5, driftY * 0.7, 0],
        rotate: [rotate, rotate + 12, rotate - 8, rotate],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <motion.span
        className="flex h-full w-full cursor-pointer items-center justify-center"
        animate={{ x: push.x, y: push.y }}
        transition={{ type: 'spring', stiffness: 380, damping: 14, mass: 0.55 }}
        onMouseEnter={recoil}
        onMouseMove={recoil}
        onMouseLeave={() => setPush({ x: 0, y: 0 })}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.92 }}
      >
        <Icon strokeWidth={1.35} className="h-full w-full" aria-hidden />
      </motion.span>
    </motion.span>
  )
}

export default function HeroFloatingIcons() {
  const icons = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const Icon = ICON_SET[i % ICON_SET.length]
        // Keep clear of center content band roughly
        const band = i % 2 === 0
        return {
          id: i,
          Icon,
          size: Math.round(rand(30, 50)),
          left: band ? rand(2, 22) : rand(78, 96),
          top: rand(8, 88),
          driftX: rand(18, 55) * (Math.random() > 0.5 ? 1 : -1),
          driftY: rand(22, 70) * (Math.random() > 0.5 ? 1 : -1),
          duration: rand(10, 18),
          delay: rand(0, 4),
          rotate: rand(-25, 25),
        }
      }),
    []
  )

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden
    >
      {icons.map((item) => (
        <FloatingIcon key={item.id} {...item} />
      ))}
    </div>
  )
}
