import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function DepartmentModal({ department, onClose }) {
  return (
    <AnimatePresence>
      {department && (
        <motion.div
          key={department.id}
          className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
            aria-label="Close dialog"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dept-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-border/80 bg-white shadow-[0_40px_100px_-40px_rgba(17,24,39,0.45)]"
          >
            <div className="relative aspect-[21/9] overflow-hidden sm:aspect-[21/8]">
              <img
                src={department.image}
                alt={department.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-foreground shadow-md hover:bg-white"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {department.shortName}
              </p>
              <h2
                id="dept-modal-title"
                className="mt-2 font-display text-3xl text-foreground md:text-4xl"
              >
                {department.name}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{department.details}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {department.highlights.map((h) => (
                  <li
                    key={h}
                    className="rounded-full bg-surface-soft px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/admissions">
                    Enquire now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
