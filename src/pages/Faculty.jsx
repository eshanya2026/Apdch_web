import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FacultyToolbar from '@/components/faculty/FacultyToolbar'
import FacultyGrid from '@/components/faculty/FacultyGrid'
import PgStudentGrid from '@/components/faculty/PgStudentGrid'
import { FACULTY } from '@/lib/facultyConstants'
import { PG_STUDENTS, PG_STUDENTS_FILTERS } from '@/lib/pgStudentConstants'
import { cn } from '@/lib/utils'

export default function Faculty({ activeTab = 'faculty' }) {
  const [activeFilter, setActiveFilter] = useState('oral-medicine')
  const [pgFilter, setPgFilter] = useState('conservative-dentistry')

  const filteredFaculty = useMemo(() => {
    return FACULTY.filter((member) => member.departmentId === activeFilter)
  }, [activeFilter])

  const filteredPgStudents = useMemo(() => {
    return PG_STUDENTS.filter((student) => student.departmentId === pgFilter)
  }, [pgFilter])

  const isPgTab = activeTab === 'pg-students'

  return (
    <>
      <Navbar />
      <main className="min-h-svh bg-background">
        <section className="border-b border-border/60 bg-white px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                People
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                {isPgTab ? 'PG Students Details' : 'Faculty Details'}
              </h1>
              <p className="mt-4 text-base text-muted md:text-lg">
                {isPgTab
                  ? 'Postgraduate scholars and MDS research residents pursuing specialized clinical training at Adhiparasakthi Dental College & Hospital.'
                  : 'Clinicians and teachers shaping dental education at Adhiparasakthi Dental College and Hospital.'}
              </p>

            </motion.div>

            <div className="mt-12 md:mt-14">
              {!isPgTab ? (
                <FacultyToolbar
                  activeFilter={activeFilter}
                  onFilterChange={setActiveFilter}
                  resultCount={filteredFaculty.length}
                />
              ) : (
                <div className="mx-auto w-full max-w-5xl">
                  <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5">
                    {PG_STUDENTS_FILTERS.map((filter) => {
                      const isActive = pgFilter === filter.id
                      return (
                        <button
                          key={filter.id}
                          type="button"
                          onClick={() => setPgFilter(filter.id)}
                          className={cn(
                            'relative rounded-full px-4 py-2 text-xs md:text-sm font-semibold transition-colors duration-300 outline-none select-none',
                            isActive
                              ? 'text-white'
                              : 'bg-white text-foreground/75 ring-1 ring-border/80 hover:text-primary hover:ring-primary/40 hover:bg-surface-soft'
                          )}
                        >
                          {isActive && (
                            <motion.span
                              layoutId="activePgTab"
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
                    Showing <span className="font-bold text-foreground">{filteredPgStudents.length}</span> PG{' '}
                    {filteredPgStudents.length === 1 ? 'scholar' : 'scholars'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="px-5 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            {!isPgTab ? (
              <FacultyGrid members={filteredFaculty} activeFilter={activeFilter} />
            ) : (
              <PgStudentGrid students={filteredPgStudents} activeFilter={pgFilter} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
