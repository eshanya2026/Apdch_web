import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartHandshake,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  Search,
  Sparkles,
  ArrowRight,
  GraduationCap,
  Clock,
  RotateCcw,
  Smile,
  Stethoscope,
  Building,
  Microscope,
  Award,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import careerData from '@/data/careers.json'
import { getActiveJobPostings } from '@/lib/careersStore'

const DEPARTMENTS = careerData.departments || []
const EMPLOYMENT_TYPES = ['Full Time', 'Part Time', 'Contract', 'Internship']
const EXPERIENCE_LEVELS = [
  'Fresh Graduate / 0 – 1 Year',
  '1 to 3 Years',
  '3 to 5 Years',
  '5 to 10 Years',
]

const DEPARTMENT_ICONS = {
  'Orthodontics & Dentofacial Orthopaedics': { icon: Smile, bg: 'bg-rose-100/80 text-rose-700 border-rose-200' },
  'Conservative Dentistry & Endodontics': { icon: Sparkles, bg: 'bg-sky-100/80 text-sky-700 border-sky-200' },
  'Oral & Maxillofacial Surgery': { icon: Stethoscope, bg: 'bg-purple-100/80 text-purple-700 border-purple-200' },
  'Hospital Administration & Support': { icon: Building, bg: 'bg-emerald-100/80 text-emerald-700 border-emerald-200' },
  'Central Library & IT Services': { icon: Microscope, bg: 'bg-amber-100/80 text-amber-700 border-amber-200' },
  'Prosthodontics & Crown & Bridge': { icon: Award, bg: 'bg-indigo-100/80 text-indigo-700 border-indigo-200' },
}

export default function Careers() {
  const [activeJobs, setActiveJobs] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDept, setSelectedDept] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedExp, setSelectedExp] = useState('all')
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    setActiveJobs(getActiveJobPostings())
  }, [])

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedDept('all')
    setSelectedType('all')
    setSelectedExp('all')
  }

  const filteredJobs = activeJobs.filter((job) => {
    const matchesSearch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesDept = selectedDept === 'all' || job.department === selectedDept
    const matchesType = selectedType === 'all' || job.employmentType === selectedType
    const matchesExp = selectedExp === 'all' || job.experience === selectedExp
    return matchesSearch && matchesDept && matchesType && matchesExp
  })

  const displayedJobs = filteredJobs.slice(0, visibleCount)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO HEADER
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-10 pt-36 md:px-8 md:pb-14 md:pt-44 border-b border-primary/10">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <HeartHandshake className="h-4 w-4" /> Official Career Portal
              </span>

              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Careers at APDCH
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Join a premier dental institution dedicated to clinical excellence, innovative research, compassionate patient care, and transformative healthcare education.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ==================================================
            FILTER TOOLBAR & JOBS DIRECTORY
            ================================================== */}
        <section className="px-5 py-8 md:px-8 md:py-14">
          <div className="mx-auto max-w-7xl space-y-8">
            {/* Top Search & Filter Bar */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-primary/15 bg-white p-4 shadow-sm">
                {/* Search Input */}
                <div className="relative min-w-[220px] flex-1">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search job title or keyword"
                    className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                {/* Department Filter */}
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="max-w-[200px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                >
                  <option value="all">All Departments</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>

                {/* Employment Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="max-w-[170px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                >
                  <option value="all">All Job Types</option>
                  {EMPLOYMENT_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>

                {/* Experience Filter */}
                <select
                  value={selectedExp}
                  onChange={(e) => setSelectedExp(e.target.value)}
                  className="max-w-[170px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                >
                  <option value="all">All Experience</option>
                  {EXPERIENCE_LEVELS.map((exp) => (
                    <option key={exp} value={exp}>
                      {exp}
                    </option>
                  ))}
                </select>

                {/* Clear Filters Button */}
                {(searchQuery || selectedDept !== 'all' || selectedType !== 'all' || selectedExp !== 'all') && (
                  <Button
                    onClick={handleClearFilters}
                    variant="outline"
                    className="gap-1.5 rounded-2xl border-rose-200 bg-rose-50/80 px-4 py-2.5 text-xs font-bold text-rose-700 hover:bg-rose-100 shrink-0"
                  >
                    <RotateCcw className="h-3.5 w-3.5 text-rose-600" />
                    <span>Clear Filters</span>
                  </Button>
                )}
              </div>
            </Reveal>

            {/* Current Openings Header */}
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  <span className="border-b-2 border-primary pb-0.5">Current</span> Openings
                </h2>
              </div>
              <span className="text-xs font-extrabold text-primary uppercase tracking-wider">
                {filteredJobs.length} Active Positions
              </span>
            </div>

            {/* Jobs Grid (Spacious 3-Column Large Cards Layout) */}
            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-12 text-center shadow-sm">
                <Briefcase className="mx-auto h-12 w-12 text-muted/40" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">No Matching Vacancies Found</h3>
                <p className="mt-1 text-xs text-muted max-w-sm mx-auto leading-relaxed">
                  No open positions match your selected filter criteria. Try clearing filters or submit a general application below.
                </p>
                <Button
                  onClick={handleClearFilters}
                  className="mt-5 rounded-2xl bg-primary text-white text-xs font-bold px-6 py-2.5"
                >
                  Reset All Filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {displayedJobs.map((job) => {
                  const iconInfo = DEPARTMENT_ICONS[job.department] || {
                    icon: Briefcase,
                    bg: 'bg-primary/10 text-primary border-primary/20',
                  }
                  const IconComp = iconInfo.icon

                  return (
                    <Reveal key={job.id}>
                      <div
                        id={job.id}
                        className="group flex flex-col justify-between h-full rounded-3xl border border-primary/15 bg-white p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/30"
                      >
                        <div className="space-y-4">
                          {/* Top Header: Icon + Badges + Share Button */}
                          <div className="flex items-start justify-between gap-3">
                            {/* Specialty Icon Badge */}
                            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${iconInfo.bg} border shadow-xs transition-transform group-hover:scale-105`}>
                              <IconComp className="h-7 w-7" />
                            </div>

                            {/* Right Badges */}
                            <div className="flex flex-wrap items-center justify-end gap-1.5">
                              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 border border-emerald-200/80">
                                {job.employmentType || 'Full Time'}
                              </span>
                              {job.vacancies > 1 && (
                                <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold text-rose-700 border border-rose-200/80">
                                  {job.vacancies} Vacancies
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Job Title */}
                          <h3 className="font-display text-xs sm:text-sm font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug min-h-[3.75rem] flex items-center">
                            {job.title}
                          </h3>

                          {/* Department Subtitle */}
                          <div className="flex items-center gap-2 text-xs font-semibold text-muted">
                            <Briefcase className="h-4 w-4 text-primary/70 shrink-0" />
                            <span className="truncate">{job.department}</span>
                          </div>

                          {/* Divider Line */}
                          <div className="border-b border-border/60" />

                          {/* Meta Info Vertical List */}
                          <div className="space-y-2 text-xs font-medium text-muted">
                            <div className="flex items-center gap-2.5">
                              <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                              <span className="truncate">{job.qualification || 'MDS / BDS'}</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                              <Clock className="h-4 w-4 text-primary shrink-0" />
                              <span>{job.experience}</span>
                            </div>
                          </div>
                        </div>

                        {/* Card Bottom Buttons */}
                        <div className="space-y-2.5 pt-6 mt-auto">
                          <Button
                            asChild
                            variant="outline"
                            className="w-full rounded-2xl border-primary/20 bg-white text-xs sm:text-sm font-bold text-foreground hover:bg-slate-50 py-2.5 h-11"
                          >
                            <Link to={`/careers/${job.id}`}>View Details</Link>
                          </Button>
                          <Button
                            asChild
                            className="w-full gap-2 rounded-2xl bg-primary text-white text-xs sm:text-sm font-bold shadow-brand-button hover:bg-primary/90 py-2.5 h-11"
                          >
                            <Link to={`/careers/${job.id}/apply`}>
                              <span>Apply Now</span>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Reveal>
                  )
                })}
              </div>
            )}

            {/* View All Open Positions Button */}
            {filteredJobs.length > visibleCount && (
              <div className="text-center pt-4">
                <Button
                  onClick={() => setVisibleCount((prev) => prev + 4)}
                  variant="outline"
                  className="gap-2 rounded-2xl border-primary/30 bg-white px-7 py-3 text-xs font-bold text-foreground hover:bg-primary/5 hover:border-primary shadow-sm"
                >
                  <span>View All Open Positions</span>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Button>
              </div>
            )}

            {/* ==================================================
                DON'T SEE THE RIGHT ROLE? BANNER (MATCHING IMAGE)
                ================================================== */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-primary/95 to-[#590016] p-8 sm:p-12 text-white shadow-brand-lg my-12">
              <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1.5">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                    Don&apos;t see the right role?
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                    We are always interested in hearing from talented professionals.
                  </p>
                </div>

                <Button
                  asChild
                  className="gap-2 rounded-2xl bg-white text-primary hover:bg-white/90 font-bold text-xs py-3 px-6 shadow-lg transition-transform active:scale-95 shrink-0"
                >
                  <Link to="/careers/apply">
                    <span>Submit General Application</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* ==================================================
                RECRUITMENT HELPDESK FOOTER CARD (MATCHING IMAGE)
                ================================================== */}
            <div className="rounded-3xl border border-primary/15 bg-white p-7 sm:p-9 shadow-sm">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-1 max-w-md">
                  <span className="block text-[11px] font-extrabold uppercase tracking-widest text-muted">
                    NEED HELP?
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Our Recruitment Helpdesk is here for you.
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    For career queries and application assistance, contact our recruitment team.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:gap-6 border-t lg:border-t-0 lg:border-l border-border/60 pt-4 lg:pt-0 lg:pl-6">
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-foreground">Location</span>
                      <span className="block text-xs text-muted leading-snug">Melmaruvathur, Tamil Nadu 603319</span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-foreground">Phone</span>
                      <span className="block text-xs text-muted leading-snug">044 2752 8082<br />044 2752 8083</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 border border-rose-200/80">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-foreground">Email</span>
                      <span className="block text-xs text-muted break-all">careers@apdch.edu.in</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

