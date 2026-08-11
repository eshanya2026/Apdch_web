import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Award,
  ChevronDown,
  FileText,
  ArrowRight,
  Filter,
  Microscope,
  UserCheck,
  Copyright,
  Archive,
} from 'lucide-react'

import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const TABS = [
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'ongoing', label: 'Ongoing Research', icon: Microscope },
  { id: 'reviewer', label: 'Reviewer', icon: UserCheck },
  { id: 'intellectualProperty', label: 'Patents & Copyrights', icon: Copyright },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'studentAchievements', label: 'UG/PG Achievements', icon: Award },
  { id: 'recognition', label: 'Faculty Achievements', icon: Award },
  { id: 'books', label: 'Books', icon: BookOpen },
]

// Extract only genuine research, publication, award, and achievement data for this department
function getDepartmentResearchData(department) {
  if (department?.customResearchData) {
    return department.customResearchData
  }

  return {
    publications: department?.publications ?? [],
    ongoing: (department?.research ?? []).map((item, index) => ({
      id: item.id ?? `research-${index + 1}`,
      year: item.year ?? 'Current',
      title: item.title,
      authors: item.authors ?? 'Department Research Team',
      journal: item.journal ?? 'Department Research Project',
      abstract: item.abstract ?? item.description,
    })),
    reviewer: department?.reviewers ?? [],
    intellectualProperty: department?.intellectualProperty ?? [],
    awards: department?.awards ?? [],
    studentAchievements: department?.studentAchievements ?? [],
    recognition: (department?.achievements ?? []).map((item, index) => ({
      id: item.id ?? `achievement-${index + 1}`,
      year: item.year ?? 'Current',
      title: item.title,
      authors: item.authors ?? department.name,
      journal: item.journal ?? 'Department Achievement',
      abstract: item.abstract ?? item.description,
    })),
    books: department?.books ?? [],
  }
}

export default function DetailResearch({ department }) {
  const [activeTab, setActiveTab] = useState('publications')
  const [selectedYear, setSelectedYear] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)
  const [expandedId, setExpandedId] = useState(null)

  const data = useMemo(() => getDepartmentResearchData(department), [department])
  const availableTabs = useMemo(
    () => TABS
      .filter((tab) => (data[tab.id] ?? []).length > 0)
      .map((tab) => ({
        ...tab,
        label: department.researchTabLabels?.[tab.id] ?? tab.label,
      })),
    [data, department.researchTabLabels]
  )
  const categoryItems = useMemo(() => data[activeTab] || [], [data, activeTab])

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(availableTabs[0].id)
      setSelectedYear('')
      setVisibleCount(6)
      setExpandedId(null)
    }
  }, [activeTab, availableTabs])

  // Keep the newest three years visible and move earlier records to the archive.
  const availableYears = useMemo(() => {
    const yearsSet = new Set(categoryItems.map((item) => item.year || '2024'))
    return Array.from(yearsSet).sort((a, b) => {
      const yearA = Number.parseInt(String(a).match(/\d{4}/)?.[0] || '0', 10)
      const yearB = Number.parseInt(String(b).match(/\d{4}/)?.[0] || '0', 10)
      return yearB - yearA
    })
  }, [categoryItems])
  const latestYears = availableYears.slice(0, 3)
  const archivedYears = availableYears.slice(3)
  const activeYear = selectedYear || latestYears[0]

  useEffect(() => {
    if (selectedYear && !availableYears.includes(selectedYear)) {
      setSelectedYear('')
      setVisibleCount(6)
      setExpandedId(null)
    }
  }, [availableYears, selectedYear])

  // Filter items by year
  const filteredItems = useMemo(() => {
    return categoryItems.filter((item) => (item.year || '2024') === activeYear)
  }, [activeYear, categoryItems])

  const displayedItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSelectedYear('')
    setVisibleCount(6)
    setExpandedId(null)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  // Group filtered items by year for the timeline
  const groupedByYear = displayedItems.reduce((acc, item) => {
    const yr = item.year || '2024'
    if (!acc[yr]) acc[yr] = []
    acc[yr].push(item)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))

  if (availableTabs.length === 0) return null

  return (
    <section id="research-academic-excellence" className="bg-background px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Research & Academic Excellence"
            title="Research & Academic Excellence"
            description={`Scientific publications, awards, textbooks, and academic events contributed by the ${department?.name || 'department'} faculty and scholars.`}
          />
        </Reveal>

        {/* Category Filter Tabs with Sliding Indicator */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 rounded-full bg-slate-100/90 p-1.5 border border-slate-200/80 max-w-max mx-auto shadow-inner">
            {availableTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors duration-300 md:text-sm ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeResearchTab"
                      className="absolute inset-0 z-[-1] rounded-full bg-primary shadow-brand-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`h-4 w-4 relative z-10 ${isActive ? 'text-white' : 'text-primary'}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Year Filter Bar */}
        <Reveal delay={0.12}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-muted">
              <Filter className="h-3.5 w-3.5 text-primary/80" />
              Filter by year:
            </span>
            {latestYears.map((year) => {
              const isSelected = activeYear === year
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setSelectedYear(year)
                    setVisibleCount(6)
                    setExpandedId(null)
                  }}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-primary text-white shadow-xs'
                      : 'border border-border/60 bg-white text-muted hover:border-primary/20 hover:text-foreground'
                  }`}
                >
                  {year}
                </button>
              )
            })}
            {archivedYears.length > 0 && (
              <label className={`relative inline-flex items-center rounded-full border transition-colors ${
                archivedYears.includes(activeYear)
                  ? 'border-primary bg-primary text-white shadow-xs'
                  : 'border-border/60 bg-white text-muted hover:border-primary/20 hover:text-foreground'
              }`}>
                <Archive className="pointer-events-none absolute left-3 h-3.5 w-3.5" />
                <select
                  aria-label="View archived academic year"
                  value={archivedYears.includes(activeYear) ? activeYear : ''}
                  onChange={(event) => {
                    if (!event.target.value) return
                    setSelectedYear(event.target.value)
                    setVisibleCount(6)
                    setExpandedId(null)
                  }}
                  className="cursor-pointer appearance-none bg-transparent py-1 pl-8 pr-7 text-xs font-semibold outline-none"
                >
                  <option value="" disabled className="text-foreground">View Archive</option>
                  {archivedYears.map((year) => (
                    <option key={year} value={year} className="text-foreground">
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5" />
              </label>
            )}
          </div>
        </Reveal>

        {/* Academic Timeline Container */}
        <div className="mt-12 pl-1 sm:pl-4 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeYear}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="relative border-l-2 border-primary/20 pl-4 sm:pl-6 md:pl-8 space-y-8"
            >
              {sortedYears.map((year) => (
                <div key={year} className="relative">
                  {/* Year Node Badge */}
                  <div className="absolute -left-[11px] top-0 flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold tracking-wider text-white shadow-brand-sm">
                      {year}
                    </span>
                  </div>

                  {/* Shorter, Compact Branch Items List */}
                  <div className="pt-7 space-y-3">
                    {groupedByYear[year].map((item, itemIdx) => {
                      const isExpanded = expandedId === item.id

                      return (
                        <Reveal key={item.id || itemIdx} delay={itemIdx * 0.03}>
                          <article
                            className={`group relative flex flex-col justify-between gap-2.5 rounded-xl border transition-all duration-300 p-3.5 sm:p-4 ${
                              isExpanded
                                ? 'border-primary/40 bg-surface-soft/60 shadow-brand-sm'
                                : 'border-border/80 bg-white hover:border-primary/30 hover:shadow-brand-sm'
                            }`}
                          >
                            {/* Branch connector line */}
                            <div className="hidden sm:block absolute -left-6 md:-left-8 top-6 h-0.5 w-6 md:w-8 bg-primary/20" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              {/* Compact Info Block */}
                              <div className="min-w-0 flex-1">
                                <h3 className="font-display text-xs sm:text-sm md:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                                  {item.title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-muted">
                                  {Array.isArray(item.authors)
                                    ? item.authors.join(', ')
                                    : item.authors || item.recipient || ''}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
                                  <span className="font-semibold text-accent">
                                      {activeTab === 'events'
                                        ? 'Venue:'
                                        : activeTab === 'books'
                                        ? 'Publisher / ISBN:'
                                        : activeTab === 'awards'
                                        ? 'Award / Forum:'
                                        : activeTab === 'studentAchievements'
                                        ? 'Conference / Organizer:'
                                        : activeTab === 'recognition'
                                        ? 'Forum / Event:'
                                        : activeTab === 'ongoing'
                                        ? 'Project / Forum:'
                                        : activeTab === 'reviewer'
                                        ? 'Journal / Publisher:'
                                        : activeTab === 'intellectualProperty'
                                        ? 'Record Type:'
                                        : 'Journal:'}
                                  </span>
                                  <span className="font-medium text-foreground/80">
                                    {item.journal || item.event || item.forum || ''}
                                  </span>
                                </div>
                              </div>

                              {/* Toggle Inline Drawer Button */}
                              <div className="shrink-0">
                                <Button
                                  type="button"
                                  variant={isExpanded ? 'default' : 'soft'}
                                  size="sm"
                                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                  className="w-full rounded-full px-3.5 py-1 text-xs font-semibold sm:w-auto transition-all"
                                >
                                  <span>
                                    {isExpanded
                                      ? 'Hide'
                                      : activeTab === 'publications'
                                        ? 'View Publication'
                                        : activeTab === 'ongoing'
                                          ? 'View Ongoing Study'
                                          : activeTab === 'reviewer'
                                            ? 'View Reviewer Role'
                                            : activeTab === 'intellectualProperty'
                                              ? department.researchTabLabels?.intellectualProperty === 'Copyrights'
                                                ? 'View Copyright'
                                                : 'View IP Record'
                                          : activeTab === 'awards'
                                            ? 'View Award'
                                            : activeTab === 'studentAchievements'
                                              ? 'View Achievement'
                                            : 'View Details'}
                                  </span>
                                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </Button>
                              </div>
                            </div>

                            {/* Inline Smooth Drawer Panel */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                                  className="overflow-hidden border-t border-border/70 pt-3 mt-1.5"
                                >
                                  <div className="rounded-lg bg-white p-3 text-xs space-y-2 border border-border/50 shadow-xs">
                                    {item.abstract && (
                                      <div>
                                        <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-0.5">
                                          Abstract & Summary:
                                        </span>
                                        <p className="leading-relaxed text-foreground/80">
                                          {item.abstract}
                                        </p>
                                      </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-[11px]">
                                      {item.doi ? (
                                        <span className="font-mono text-primary font-semibold">
                                          DOI: {item.doi}
                                        </span>
                                      ) : (
                                        <span className="text-muted font-medium">
                                          Official Institutional Record
                                        </span>
                                      )}

                                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                        Peer Reviewed & Index Accredited
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </article>
                        </Reveal>
                      )
                    })}
                  </div>
                </div>
              ))}
              {displayedItems.length === 0 && (
                <div className="rounded-2xl border border-border/70 bg-white p-7 text-center shadow-brand-xs">
                  <p className="font-display text-lg font-semibold text-foreground">No verified entries published</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    The existing APDCH department source does not currently provide records for this category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Load More / View All Button */}
        {hasMore && (
          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                onClick={handleLoadMore}
                size="lg"
                className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-brand transition-all duration-300 hover:bg-primary-dark hover:shadow-brand-lg hover:-translate-y-0.5"
              >
                <span>
                  {activeTab === 'recognition'
                    ? 'View All Faculty Achievements'
                    : 'Load More Publications'}
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
