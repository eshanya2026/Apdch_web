import { AnimatePresence } from 'framer-motion'
import DepartmentCard from '@/components/departments/DepartmentCard'

export default function DepartmentGrid({ departments }) {
  if (departments.length === 0) {
    return (
      <div className="rounded-[1.75rem] border border-dashed border-border bg-white px-6 py-20 text-center">
        <p className="font-display text-2xl text-foreground">No departments match your search</p>
        <p className="mt-2 text-sm text-muted">
          Try another keyword or select a different filter.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {departments.map((dept, index) => (
          <DepartmentCard key={dept.id} department={dept} index={index} />
        ))}
      </AnimatePresence>
    </div>
  )
}
