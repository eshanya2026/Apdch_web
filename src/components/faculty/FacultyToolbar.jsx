import { motion } from 'framer-motion'
import { FACULTY_FILTERS } from '@/lib/facultyConstants'
import { cn } from '@/lib/utils'

export default function FacultyToolbar({
  activeFilter,
  onFilterChange,
  resultCount,
}) {
  const activeFilterObj = FACULTY_FILTERS.find((f) => f.id === activeFilter)
  const departmentName = activeFilterObj ? activeFilterObj.label : ''

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
        {FACULTY_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={cn(
                'relative rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-colors duration-300 outline-none select-none',
                isActive
                  ? 'text-white'
                  : 'bg-white text-foreground/75 ring-1 ring-border/80 hover:text-primary hover:ring-primary/40 hover:bg-surface-soft'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="activeDepartmentTab"
                  className="absolute inset-0 z-0 rounded-full bg-[#521822] shadow-[0_4px_14px_rgba(82,24,34,0.32)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter.label}</span>
            </button>
          )
        })}
      </div>

      <p className="mt-7 text-center text-sm font-medium text-muted/90 md:text-base">
        Showing <span className="font-bold text-foreground">{resultCount}</span> faculty{' '}
        {resultCount === 1 ? 'member' : 'members'} in{' '}
        <span className="font-semibold text-primary">{departmentName}</span>
      </p>
    </div>
  )
}
