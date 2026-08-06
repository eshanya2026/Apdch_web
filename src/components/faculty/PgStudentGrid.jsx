import { motion, AnimatePresence } from 'framer-motion'

const YEAR_ORDER = ['1st Year PG', '2nd Year PG', '3rd Year PG']

function groupStudents(students) {
  const departments = new Map()

  students.forEach((student) => {
    if (!departments.has(student.department)) departments.set(student.department, new Map())

    const yearLabel = YEAR_ORDER.find((year) => student.year?.startsWith(year)) ?? student.year ?? 'PG Students'
    const yearGroups = departments.get(student.department)
    if (!yearGroups.has(yearLabel)) yearGroups.set(yearLabel, [])
    yearGroups.get(yearLabel).push(student)
  })

  return Array.from(departments, ([department, years]) => ({
    department,
    years: Array.from(years, ([year, members]) => ({ year, members })).sort(
      (a, b) => YEAR_ORDER.indexOf(a.year) - YEAR_ORDER.indexOf(b.year)
    ),
  }))
}

export default function PgStudentGrid({ students, activeFilter }) {
  if (students.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-border bg-white px-6 py-16 text-center">
        <p className="font-display text-2xl text-foreground">No PG scholars found</p>
        <p className="mt-2 text-sm text-muted">Try selecting a different specialty filter.</p>
      </div>
    )
  }

  const departmentGroups = groupStudents(students)
  const showDepartmentHeadings = activeFilter === 'all'

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeFilter || 'pg-grid'}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-16"
      >
        {departmentGroups.map((departmentGroup) => (
          <section key={departmentGroup.department}>
            {showDepartmentHeadings && (
              <div className="mb-8 border-b border-border pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Department</p>
                <h2 className="mt-2 font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {departmentGroup.department}
                </h2>
              </div>
            )}

            <div className="space-y-12">
              {departmentGroup.years.map((yearGroup) => (
                <section key={yearGroup.year}>
                  <div className="mb-6 flex flex-wrap items-center gap-3 sm:gap-4">
                    <h3 className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
                      {yearGroup.year}
                    </h3>
                    <span className="h-px flex-1 bg-border" />
                    <span className="text-xs font-semibold text-muted">
                      {yearGroup.members.length} {yearGroup.members.length === 1 ? 'Scholar' : 'Scholars'}
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {yearGroup.members.map((student, index) => (
                      <motion.article
                        key={student.id}
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: Math.min(index * 0.025, 0.15), ease: 'easeOut' }}
                        className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/20 hover:shadow-brand-sm"
                      >
                        <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/60">
                          <img
                            src={student.image}
                            alt={student.name}
                            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {student.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium leading-snug text-muted">
                            {student.department}
                          </p>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
