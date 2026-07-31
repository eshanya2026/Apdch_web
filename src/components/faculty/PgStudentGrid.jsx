import { motion, AnimatePresence } from 'framer-motion'

export default function PgStudentGrid({ students, activeFilter }) {
  if (students.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-border bg-white px-6 py-16 text-center">
        <p className="font-display text-2xl text-foreground">No PG scholars found</p>
        <p className="mt-2 text-sm text-muted">Try selecting a different specialty filter.</p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFilter || 'pg-grid'}
        initial={{ opacity: 0, y: 14, scale: 0.995 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.995 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {students.map((student, index) => (
          <motion.article
            key={student.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.15), ease: 'easeOut' }}
            className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm"
          >
            {/* Top Photo */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/60">
              <img
                src={student.image}
                alt={student.name}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Info: Name, Year & Department */}
            <div className="flex flex-1 flex-col p-5">
              {student.year && (
                <span className="mb-1.5 inline-block text-[11px] font-bold uppercase tracking-wider text-primary">
                  {student.year}
                </span>
              )}
              <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                {student.name}
              </h3>
              <p className="mt-1 text-sm font-medium leading-snug text-muted">
                {student.department}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
