import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  BookOpen,
  Stethoscope,
  Activity,
  HeartPulse,
  Sparkles,
  Microscope,
  Award,
  ShieldCheck,
  Brain,
  Syringe,
  Smile,
} from 'lucide-react'

// Education & Dental Hospital Line Icons
const HERO_ICONS = [
  { icon: GraduationCap, label: 'Education', size: 36, defaultTop: '18%', defaultLeft: '12%', delay: 0 },
  { icon: Stethoscope, label: 'Oral Medicine', size: 42, defaultTop: '25%', defaultLeft: '78%', delay: 1.2 },
  { icon: BookOpen, label: 'Academics', size: 34, defaultTop: '62%', defaultLeft: '8%', delay: 0.7 },
  { icon: HeartPulse, label: 'Patient Care', size: 40, defaultTop: '70%', defaultLeft: '84%', delay: 2.1 },
  { icon: Microscope, label: 'Research', size: 38, defaultTop: '14%', defaultLeft: '48%', delay: 1.5 },
  { icon: Sparkles, label: 'Excellence', size: 32, defaultTop: '82%', defaultLeft: '40%', delay: 0.4 },
  { icon: Award, label: 'Accreditation', size: 38, defaultTop: '35%', defaultLeft: '90%', delay: 1.8 },
  { icon: ShieldCheck, label: 'Quality', size: 34, defaultTop: '45%', defaultLeft: '5%', delay: 2.5 },
  { icon: Brain, label: 'Knowledge', size: 36, defaultTop: '12%', defaultLeft: '85%', delay: 0.9 },
  { icon: Smile, label: 'Dental Care', size: 44, defaultTop: '75%', defaultLeft: '72%', delay: 1.1 },
  { icon: Syringe, label: 'Clinical', size: 32, defaultTop: '32%', defaultLeft: '22%', delay: 1.7 },
  { icon: Activity, label: 'Diagnostics', size: 36, defaultTop: '84%', defaultLeft: '58%', delay: 2.3 },
]

function FloatingIconItem({ item, index, mousePos }) {
  const IconComponent = item.icon
  const itemRef = useRef(null)
  const [repulsion, setRepulsion] = useState({ x: 0, y: 0, rotate: 0 })

  // Calculate Newton's Third Law (Equal & Opposite Reaction) when mouse approaches
  useEffect(() => {
    if (!itemRef.current || !mousePos.x || !mousePos.y) return

    const rect = itemRef.current.getBoundingClientRect()
    const iconCenterX = rect.left + rect.width / 2
    const iconCenterY = rect.top + rect.height / 2

    const dx = mousePos.x - iconCenterX
    const dy = mousePos.y - iconCenterY
    const distance = Math.hypot(dx, dy)

    const triggerRadius = 140 // Interaction threshold in pixels

    if (distance < triggerRadius && distance > 0) {
      // Equal & opposite force magnitude
      const force = (1 - distance / triggerRadius) * 60
      const angle = Math.atan2(dy, dx)

      // Repel away from cursor (Newton's 3rd Law: opposite vector direction)
      const pushX = -Math.cos(angle) * force
      const pushY = -Math.sin(angle) * force
      const pushRotate = (pushX > 0 ? 1 : -1) * force * 0.6

      setRepulsion({ x: pushX, y: pushY, rotate: pushRotate })
    } else {
      setRepulsion({ x: 0, y: 0, rotate: 0 })
    }
  }, [mousePos])

  // Random floating drift path parameters
  const floatX = [0, (index % 2 === 0 ? 12 : -12), (index % 3 === 0 ? -16 : 10), 0]
  const floatY = [0, (index % 3 === 0 ? -18 : 14), (index % 2 === 0 ? 15 : -12), 0]

  return (
    <motion.div
      ref={itemRef}
      style={{
        top: item.defaultTop,
        left: item.defaultLeft,
        width: `${item.size}px`,
        height: `${item.size}px`,
      }}
      className="absolute z-20 flex cursor-pointer items-center justify-center pointer-events-auto"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: [0.35, 0.65, 0.45, 0.35],
        x: floatX,
        y: floatY,
        scale: [1, 1.06, 0.96, 1],
      }}
      transition={{
        duration: 8 + (index % 4) * 2,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: item.delay,
      }}
    >
      <motion.div
        animate={{
          x: repulsion.x,
          y: repulsion.y,
          rotate: repulsion.rotate,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 18,
          mass: 0.6,
        }}
        whileHover={{
          scale: 1.35,
          boxShadow: '0 0 25px rgba(234, 179, 8, 0.6)',
        }}
        className="group relative flex h-full w-full items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md shadow-lg transition-colors duration-300 hover:border-accent hover:bg-accent/30 hover:text-accent"
        title={`${item.label} (Push to test Newton's 3rd Law)`}
      >
        <IconComponent className="h-1/2 w-1/2 transition-transform duration-300 group-hover:scale-115" />

        {/* Pulse glow background ring */}
        <span className="absolute -inset-1 -z-10 rounded-full bg-accent/20 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      </motion.div>
    </motion.div>
  )
}

export default function FloatingHeroIcons() {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: null, y: null })

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: null, y: null })
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {HERO_ICONS.map((item, index) => (
        <FloatingIconItem
          key={item.label}
          item={item}
          index={index}
          mousePos={mousePos}
        />
      ))}
    </div>
  )
}
