import { motion, AnimatePresence } from 'framer-motion'
import FacultyCard from '@/components/faculty/FacultyCard'

export default function FacultyGrid({ members, activeFilter }) {
  if (members.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-border bg-white px-6 py-16 text-center">
        <p className="font-display text-2xl text-foreground">No faculty found</p>
        <p className="mt-2 text-sm text-muted">Try another search or department filter.</p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFilter || 'grid'}
        initial={{ opacity: 0, y: 14, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.995 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {members.map((member, index) => (
          <FacultyCard key={member.id} member={member} index={index} />
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
