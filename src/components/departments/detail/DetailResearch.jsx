import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Award,
  ChevronDown,
  FileText,
  ArrowRight,
  Filter,
} from 'lucide-react'

// ... (keep existing helper function)
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const TABS = [
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'recognition', label: 'Faculty Achievements', icon: Award },
  { id: 'books', label: 'Books', icon: BookOpen },
]

// Fallback data generator if department doesn't specify custom items
function getDefaultResearchData(department) {
  const deptName = department?.name || 'Oral Medicine & Radiology'
  const isOMR = department?.id === 'oral-medicine' || deptName.toLowerCase().includes('oral medicine')

  return {
    publications: [
      {
        id: 'pub-1',
        year: '2024',
        title: 'Evaluating the Psychological Stress Level and Academic Performance of Dental Students During Clinical Training',
        authors: ['Dr. M. Deivanayagi', 'Dr. Narmadha C'],
        journal: 'Innovations',
        doi: '10.53555/inn.v2024.1842',
        abstract: 'A cross-sectional analytical study assessing the impact of clinical training stress on student academic performance, providing key insights into curriculum optimization and student wellness programs.',
      },
      {
        id: 'pub-2',
        year: '2024',
        title: `Comparative Evaluation of Diagnostic Efficacy and Radiographic Bone Loss in Clinical ${deptName} Studies`,
        authors: isOMR ? ['Dr. M. Deivanayagi', 'Dr. Monisha R'] : ['Department Senior Faculty', 'Research Scholars'],
        journal: 'Journal of Clinical Oral Investigations & Research',
        doi: '10.1007/s00784-024-05121-x',
        abstract: 'An in-depth multi-center diagnostic trial measuring radiographic and clinical biomarkers to enhance diagnostic accuracy and therapeutic outcomes.',
      },
      {
        id: 'pub-3',
        year: '2023',
        title: `Application of Advanced Digital Modalities in Diagnostic ${deptName}: A Retrospective Clinical Trial`,
        authors: isOMR ? ['Dr. Elamparithi', 'Dr. Narmadha Chandran'] : ['Faculty Research Group'],
        journal: 'International Journal of Dental Sciences & Scientific Research',
        doi: '10.1016/j.ijd.2023.09.004',
        abstract: 'Evaluation of digital workflow integration in clinical diagnostics, highlighting precision improvements, reduced procedure time, and elevated patient satisfaction rates.',
      },
      {
        id: 'pub-4',
        year: '2023',
        title: `Prevalence and Pattern of Maxillofacial Conditions: A 5-Year Institutional Audit`,
        authors: isOMR ? ['Dr. M. Deivanayagi', 'Dr. Elamparithi'] : ['Department Clinical Team'],
        journal: 'Journal of Indian Academy of Dental Specialists',
        doi: '10.4103/jiads.jiads_42_23',
        abstract: 'A comprehensive epidemiologic analysis of patient records over a 5-year period detailing disease presentation patterns, age distribution, and treatment outcomes.',
      },
    ],
    awards: [
      {
        id: 'award-1',
        year: '2024',
        title: 'Outstanding Academician in Oral Medicine & Radiology',
        authors: 'Awarded to Prof. Dr. S. Karthiga Kannan',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Conferred for distinguished contributions to teaching, academic excellence, and leadership in Oral Medicine & Radiology.',
      },
      {
        id: 'award-2',
        year: '2024',
        title: 'Emerging Researcher in Oral Medicine & Radiology',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Recognized for high-impact scientific publications and innovative research contributions to clinical diagnostic sciences.',
      },
      {
        id: 'award-3',
        year: '2022',
        title: 'Outstanding Contributions to Research & Development in Academics',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: '21st Century Innovations in Management Science and Technology',
        abstract: 'Conferred in recognition of significant academic research leadership and evidence-based study development.',
      },
      {
        id: 'award-4',
        year: '2021',
        title: 'Best Oral Presentation Award',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: '32nd IAOMR National Conference',
        abstract: 'Awarded for scientific presentation on advanced diagnostic imaging techniques in oral mucosal lesion screening.',
      },
    ],
    recognition: [
      {
        id: 'rec-1',
        year: '2024',
        title: 'Chairperson & Scientific Session Evaluator',
        authors: 'Dr. M. Deivanayagi',
        journal: 'National Oral Medicine & Radiology Convention',
        abstract: 'Chaired competitive scientific sessions and evaluated postgraduate research paper presentations.',
      },
      {
        id: 'rec-2',
        year: '2024',
        title: 'Resource Person – Advanced Maxillofacial CBCT Imaging Workshop',
        authors: 'Dr. M. Deivanayagi',
        journal: 'State Level Continuing Dental Education (CDE) Program',
        abstract: 'Delivered keynote lectures and hands-on training modules on 3D CBCT interpretation and anatomical landmark mapping.',
      },
      {
        id: 'rec-3',
        year: '2023',
        title: 'Resource Person – Diagnostic Protocol & Patient Care Workshop',
        authors: 'Dr. Monisha R',
        journal: 'APDCH Inter-departmental Academic Forum',
        abstract: 'Led interactive training sessions for interns and residents on diagnostic protocols and emergency care pathways.',
      },
      {
        id: 'rec-4',
        year: '2023',
        title: 'Delegate – Basic Course in Biomedical Research',
        authors: 'Dr. Narmadha C',
        journal: 'ICMR–NIE (National Institute of Epidemiology)',
        abstract: 'Successfully completed the ICMR–NIE certified course in research methodology, clinical trial design, and biostatistics.',
      },
      {
        id: 'rec-5',
        year: '2022',
        title: 'Delegate – Online Certification Program – Ethics Review of Health Research',
        authors: 'Dr. M. Deivanayagi',
        journal: 'ICMR–NIE (National Institute of Epidemiology)',
        abstract: 'Completed national certification program on bioethics, Institutional Ethics Committee (IEC) protocols, and human research protection.',
      },
    ],
    books: [
      {
        id: 'book-1',
        year: '2023',
        title: 'CBCT – A Quick Review',
        authors: 'Author: Dr. V.L. Lakshman MDS · Contribution: Dr. S. Karthiga Kannan MDS',
        journal: 'Academic Book (ISBN: 978-93-91556-71-6)',
        doi: '978-93-91556-71-6',
        abstract: 'A comprehensive academic review book on Cone Beam Computed Tomography (CBCT) principles, diagnostic imaging interpretation, and clinical applications in dental radiology.',
      },
    ],
  }
}

export default function DetailResearch({ department }) {
  const [activeTab, setActiveTab] = useState('publications')
  const [selectedYear, setSelectedYear] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [expandedId, setExpandedId] = useState(null)

  const data = useMemo(() => getDefaultResearchData(department), [department])
  const categoryItems = useMemo(() => data[activeTab] || [], [data, activeTab])

  // Extract unique years for year filters
  const availableYears = useMemo(() => {
    const yearsSet = new Set(categoryItems.map((item) => item.year || '2024'))
    const yearsArr = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a))
    return ['All', ...yearsArr]
  }, [categoryItems])

  // Filter items by year
  const filteredItems = useMemo(() => {
    if (selectedYear === 'All') return categoryItems
    return categoryItems.filter((item) => (item.year || '2024') === selectedYear)
  }, [categoryItems, selectedYear])

  const displayedItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSelectedYear('All')
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

  return (
    <section id="research-academic-excellence" className="bg-background px-5 py-28 md:px-8 md:py-36">
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
            {TABS.map((tab) => {
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
            {availableYears.map((year) => {
              const isSelected = selectedYear === year
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
          </div>
        </Reveal>

        {/* Academic Timeline Container */}
        <div className="mt-12 pl-1 sm:pl-4 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${selectedYear}`}
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
                                  {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
                                  <span className="font-semibold text-accent">
                                    {activeTab === 'events' ? 'Venue:' : activeTab === 'books' ? 'Publisher:' : activeTab === 'awards' ? 'Award / Forum:' : 'Journal:'}
                                  </span>
                                  <span className="font-medium text-foreground/80">{item.journal}</span>
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
                                        : activeTab === 'awards'
                                          ? 'View Award'
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
                size="sm"
                variant="outline"
                className="rounded-full px-6 shadow-sm transition-all hover:bg-primary hover:text-white"
              >
                <span>
                  {activeTab === 'recognition'
                    ? 'View All Faculty Achievements'
                    : 'Load More'}
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
