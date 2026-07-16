import { AnimatePresence } from 'framer-motion'
import FacultyCard from '@/components/faculty/FacultyCard'

export default function FacultyGrid({ members, onOpen }) {
  if (members.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-border bg-white px-6 py-16 text-center">
        <p className="font-display text-2xl text-foreground">No faculty found</p>
        <p className="mt-2 text-sm text-muted">Try another search or department filter.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <AnimatePresence mode="popLayout">
        {members.map((member, index) => (
          <FacultyCard key={member.id} member={member} index={index} onOpen={onOpen} />
        ))}
      </AnimatePresence>
    </div>
  )
}
