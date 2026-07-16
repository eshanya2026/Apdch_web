import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import FacultyToolbar from '@/components/faculty/FacultyToolbar'
import FacultyGrid from '@/components/faculty/FacultyGrid'
import FacultyProfileModal from '@/components/faculty/FacultyProfileModal'
import { FACULTY } from '@/lib/facultyConstants'

export default function Faculty() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return FACULTY.filter((member) => {
      const matchesDept =
        activeFilter === 'all' || member.departmentId === activeFilter
      if (!matchesDept) return false
      if (!q) return true
      const haystack = [
        member.name,
        member.role,
        member.department,
        member.qualification,
        member.research,
        member.email,
        member.office,
        member.bio,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, activeFilter])

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <>
      <Navbar />
      <main className="min-h-svh bg-background">
        <section className="border-b border-border/60 bg-white px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
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
                Faculty
              </h1>
              <p className="mt-4 text-base text-muted md:text-lg">
                Clinicians and teachers shaping dental education at Adhiparasakthi Dental College
                and Hospital.
              </p>
            </motion.div>

            <div className="mt-10 md:mt-12">
              <FacultyToolbar
                query={query}
                onQueryChange={setQuery}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                resultCount={filtered.length}
              />
            </div>
          </div>
        </section>

        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <FacultyGrid members={filtered} onOpen={setSelected} />
          </div>
        </section>
      </main>
      <Footer />
      <FacultyProfileModal member={selected} onClose={() => setSelected(null)} />
    </>
  )
}
