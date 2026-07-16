import { useMemo, useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DepartmentsHero from '@/components/departments/DepartmentsHero'
import DepartmentToolbar from '@/components/departments/DepartmentToolbar'
import DepartmentGrid from '@/components/departments/DepartmentGrid'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { DEPARTMENTS } from '@/lib/departmentsConstants'

export default function Departments() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return DEPARTMENTS.filter((dept) => {
      const matchesFilter = activeFilter === 'all' || dept.category === activeFilter
      if (!matchesFilter) return false
      if (!q) return true
      const haystack = [
        dept.name,
        dept.overview,
        dept.details,
        dept.shortName,
        ...dept.highlights,
      ]
        .join(' ')
        .toLowerCase()
      return haystack.includes(q)
    })
  }, [query, activeFilter])

  return (
    <>
      <Navbar />
      <main>
        <DepartmentsHero />
        <DepartmentToolbar
          query={query}
          onQueryChange={setQuery}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          resultCount={filtered.length}
        />

        <section className="mesh-bg px-5 pb-24 pt-12 md:px-8 md:pb-32 md:pt-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Browse specialities"
                title="Our Departments"
                description="Explore each clinical department — filter by category or search by name and focus area."
              />
            </Reveal>
            <div className="mt-12">
              <DepartmentGrid departments={filtered} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
