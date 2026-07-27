import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Award,
  ChevronDown,
  FileText,
  ArrowRight,
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
        type: 'Publication Card',
        year: '2024',
        title: 'Evaluating the Psychological Stress Level and Academic Performance of Dental Students During Clinical Training',
        authors: ['Dr. M. Deivanayagi', 'Dr. Narmadha C'],
        journal: 'Innovations',
        doi: '10.53555/inn.v2024.1842',
        abstract: 'A cross-sectional analytical study assessing the impact of clinical training stress on student academic performance, providing key insights into curriculum optimization and student wellness programs.',
      },
      {
        id: 'pub-2',
        type: 'Publication Card',
        year: '2024',
        title: `Comparative Evaluation of Diagnostic Efficacy and Radiographic Bone Loss in Clinical ${deptName} Studies`,
        authors: isOMR ? ['Dr. M. Deivanayagi', 'Dr. Monisha R'] : ['Department Senior Faculty', 'Research Scholars'],
        journal: 'Journal of Clinical Oral Investigations & Research',
        doi: '10.1007/s00784-024-05121-x',
        abstract: 'An in-depth multi-center diagnostic trial measuring radiographic and clinical biomarkers to enhance diagnostic accuracy and therapeutic outcomes.',
      },
      {
        id: 'pub-3',
        type: 'Publication Card',
        year: '2023',
        title: `Application of Advanced Digital Modalities in Diagnostic ${deptName}: A Retrospective Clinical Trial`,
        authors: isOMR ? ['Dr. Elamparithi', 'Dr. Narmadha Chandran'] : ['Faculty Research Group'],
        journal: 'International Journal of Dental Sciences & Scientific Research',
        doi: '10.1016/j.ijd.2023.09.004',
        abstract: 'Evaluation of digital workflow integration in clinical diagnostics, highlighting precision improvements, reduced procedure time, and elevated patient satisfaction rates.',
      },
      {
        id: 'pub-4',
        type: 'Publication Card',
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
        type: 'Award Card',
        year: '2024',
        title: 'Outstanding Academician in Oral Medicine & Radiology',
        authors: 'Awarded to Prof. Dr. S. Karthiga Kannan',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Conferred for distinguished contributions to teaching, academic excellence, and leadership in Oral Medicine & Radiology.',
      },
      {
        id: 'award-2',
        type: 'Award Card',
        year: '2024',
        title: 'Emerging Researcher in Oral Medicine & Radiology',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Recognized for high-impact scientific publications and innovative research contributions to clinical diagnostic sciences.',
      },
      {
        id: 'award-3',
        type: 'Award Card',
        year: '2022',
        title: 'Outstanding Contributions to Research & Development in Academics',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: '21st Century Innovations in Management Science and Technology',
        abstract: 'Conferred in recognition of significant academic research leadership and evidence-based study development.',
      },
      {
        id: 'award-4',
        type: 'Award Card',
        year: '2021',
        title: 'Best Principal of the Year – 2021',
        authors: 'Awarded to Prof. Dr. S. Karthiga Kannan',
        journal: '21st Century Innovations in Management Science and Technology',
        abstract: 'Awarded for exemplary institutional governance, academic advancement, and clinical hospital leadership.',
      },
      {
        id: 'award-5',
        type: 'Award Card',
        year: '2021',
        title: 'Felicitation for Contribution to Dental Fraternity',
        authors: 'Awarded to Prof. Dr. S. Karthiga Kannan',
        journal: 'IDA Meeting, IDA Madras Branch',
        abstract: 'Honored by the Indian Dental Association (IDA Madras Branch) for outstanding service to the dental profession.',
      },
    ],
    recognition: [
      {
        id: 'rec-1',
        type: 'Faculty Achievement',
        year: '2024',
        title: 'Chairperson – 11th World Dental Sciences and Oral Health Conference',
        authors: 'Dr. M. Deivanayagi',
        journal: 'CynoDent & ISD',
        abstract: 'Served as Conference Chairperson guiding international scientific sessions, keynote panels, and oral health diagnostic advancements.',
      },
      {
        id: 'rec-2',
        type: 'Faculty Achievement',
        year: '2024',
        title: 'Chairperson – MOKSHA 24',
        authors: 'Dr. Narmadha C',
        journal: 'Sri Venkateswara Dental College & Hospital',
        abstract: 'Chaired scientific sessions and paper presentations at MOKSHA 24 annual inter-collegiate dental conference.',
      },
      {
        id: 'rec-3',
        type: 'Faculty Achievement',
        year: '2023',
        title: 'Delegate – 6th International Conference on Dentistry and Oral Health',
        authors: 'Dr. Elamparithi B',
        journal: 'Bio Leagues',
        abstract: 'Represented APDCH as delegate contributing to global deliberations on clinical innovations and diagnostic radiology.',
      },
      {
        id: 'rec-4',
        type: 'Faculty Achievement',
        year: '2023',
        title: 'Delegate – Basic Course in Biomedical Research',
        authors: 'Dr. Narmadha C',
        journal: 'ICMR–NIE (National Institute of Epidemiology)',
        abstract: 'Successfully completed the ICMR–NIE certified course in research methodology, clinical trial design, and biostatistics.',
      },
      {
        id: 'rec-5',
        type: 'Faculty Achievement',
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
        type: 'Book Card',
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
  const [visibleCount, setVisibleCount] = useState(6)
  const [expandedId, setExpandedId] = useState(null)

  const data = getDefaultResearchData(department)
  const currentItems = data[activeTab] || []
  const displayedItems = currentItems.slice(0, visibleCount)
  const hasMore = visibleCount < currentItems.length

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setVisibleCount(6)
    setExpandedId(null)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  // Group items by year for the academic timeline
  const groupedByYear = displayedItems.reduce((acc, item) => {
    const yr = item.year || '2024'
    if (!acc[yr]) acc[yr] = []
    acc[yr].push(item)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))

  return (
    <section id="research-academic-excellence" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Research & Academic Excellence"
            title="Research & Academic Excellence"
            description={`Scientific publications, awards, textbooks, and academic events contributed by the ${department?.name || 'department'} faculty and scholars.`}
          />
        </Reveal>

        {/* Category Filter Tabs */}
        <Reveal delay={0.08}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            {TABS.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`group relative flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-all duration-300 md:text-sm ${
                    isActive
                      ? 'bg-primary text-white shadow-brand-sm scale-105'
                      : 'border border-border/80 bg-white text-muted hover:border-primary/30 hover:bg-surface-soft hover:text-foreground'
                  }`}
                >
                  <Icon className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'text-white' : 'text-primary'}`} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Academic Timeline Container */}
        <div className="mt-14 pl-2 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="relative border-l-2 border-primary/20 pl-6 md:pl-10 space-y-12"
            >
              {sortedYears.map((year) => (
                <div key={year} className="relative">
                  {/* Year Node Badge */}
                  <div className="absolute -left-[33px] md:-left-[49px] top-0 flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="rounded-full bg-primary px-3.5 py-1 text-xs font-bold tracking-wider text-white shadow-brand-sm">
                      {year}
                    </span>
                  </div>

                  {/* Branch Items List */}
                  <div className="pt-8 space-y-4">
                    {groupedByYear[year].map((item, itemIdx) => {
                      const isExpanded = expandedId === item.id

                      return (
                        <Reveal key={item.id || itemIdx} delay={itemIdx * 0.04}>
                          <article
                            className={`group relative flex flex-col justify-between gap-4 rounded-2xl border transition-all duration-300 p-4 md:p-5 ${
                              isExpanded
                                ? 'border-primary/40 bg-surface-soft/60 shadow-brand-sm'
                                : 'border-border/80 bg-white hover:border-primary/30 hover:shadow-brand-sm'
                            }`}
                          >
                            {/* Branch connector line */}
                            <div className="hidden sm:block absolute -left-6 md:-left-10 top-7 h-0.5 w-6 md:w-10 bg-primary/20" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                              {/* Info Block */}
                              <div className="min-w-0 flex-1">
                                <h3 className="font-display text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-primary md:text-base">
                                  {item.title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-muted">
                                  {Array.isArray(item.authors) ? item.authors.join(', ') : item.authors}
                                </p>
                                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                                  <span className="font-semibold text-accent">
                                    {activeTab === 'events' ? 'Venue:' : activeTab === 'books' ? 'Publisher:' : activeTab === 'awards' ? 'Award / Forum:' : 'Journal:'}
                                  </span>
                                  <span className="font-medium text-foreground/80">{item.journal}</span>
                                </div>
                              </div>

                              {/* Toggle Inline Drawer Button */}
                              <div className="shrink-0 pt-2 sm:pt-0">
                                <Button
                                  type="button"
                                  variant={isExpanded ? 'default' : 'soft'}
                                  size="sm"
                                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                  className="w-full rounded-full px-4 py-1.5 text-xs font-semibold sm:w-auto transition-all"
                                >
                                  <span>
                                    {isExpanded
                                      ? 'Hide Details'
                                      : activeTab === 'publications'
                                        ? 'View Publication'
                                        : activeTab === 'awards'
                                          ? 'View Award Details'
                                          : 'View Details'}
                                  </span>
                                  <ChevronDown className={`ml-1.5 h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
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
                                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                                  className="overflow-hidden border-t border-border/70 pt-4 mt-2"
                                >
                                  <div className="rounded-xl bg-white p-4 text-xs md:text-sm space-y-3 border border-border/50 shadow-xs">
                                    {item.abstract && (
                                      <div>
                                        <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-1">
                                          Abstract & Summary:
                                        </span>
                                        <p className="leading-relaxed text-foreground/80">
                                          {item.abstract}
                                        </p>
                                      </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-border/40 text-xs">
                                      {item.doi ? (
                                        <span className="font-mono text-primary font-semibold">
                                          DOI: {item.doi}
                                        </span>
                                      ) : (
                                        <span className="text-muted font-medium">
                                          Official Institutional Record
                                        </span>
                                      )}

                                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[11px]">
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
            <div className="mt-12 flex justify-center">
              <Button
                type="button"
                onClick={handleLoadMore}
                size="lg"
                variant="outline"
                className="rounded-full px-8 shadow-sm transition-all hover:bg-primary hover:text-white"
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
