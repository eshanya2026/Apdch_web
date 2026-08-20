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
  Share2,
  GraduationCap,
  Clock,
  ChevronRight,
  FileText,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import careerData from '@/data/careers.json'
import { getActiveJobPostings } from '@/lib/careersStore'

const DEPARTMENTS = careerData.departments || []

export default function Careers() {
  // Active Job Postings from Store
  const [activeJobs, setActiveJobs] = useState([])

  // Job Search & Department Filter
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDept, setSelectedDept] = useState('all')
  const [copiedJobId, setCopiedJobId] = useState(null)

  useEffect(() => {
    setActiveJobs(getActiveJobPostings())
  }, [])

  const handleShareJob = (job) => {
    const url = `${window.location.origin}/careers/${job.id}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url)
      setCopiedJobId(job.id)
      setTimeout(() => setCopiedJobId(null), 2500)
    }
  }

  // Filter job openings
  const filteredJobs = activeJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (job.location && job.location.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesDept = selectedDept === 'all' || job.department === selectedDept
    return matchesSearch && matchesDept
  })

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO SECTION
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                  <HeartHandshake className="h-4 w-4" /> Career Opportunities
                </span>
              </div>

              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Careers at APDCH
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Join a premier dental institution dedicated to clinical excellence, innovative research, compassionate patient care, and transformative healthcare education.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-muted">
                <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-sm">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                  {activeJobs.length} Active Positions Open for Recruitment
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ==================================================
            CURRENT OPENINGS DIRECTORY
            ================================================== */}
        <section className="px-5 py-8 md:px-8 md:py-14">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                    <Briefcase className="h-3.5 w-3.5" /> Recruitment Directory
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Current Openings
                  </h2>
                </div>

                {/* Search & Department Filter Toolbar */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative min-w-[200px] flex-1 sm:w-64">
                    <Search className="pointer-events-none absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search title or specialty..."
                      className="w-full rounded-xl border border-primary/15 bg-white py-2 pl-9 pr-3 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
                    />
                  </div>

                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="max-w-[220px] truncate rounded-xl border border-primary/15 bg-white py-2 px-3 text-xs text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm font-medium"
                  >
                    <option value="all">All Departments ({activeJobs.length})</option>
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </Reveal>

            {/* Jobs List */}
            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-12 text-center shadow-sm">
                <Briefcase className="mx-auto h-10 w-10 text-muted/50" />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">No Matching Openings</h3>
                <p className="mt-1 text-xs text-muted">
                  No active vacancies match your current search filters. You can submit a general application below.
                </p>
                <Button
                  asChild
                  className="mt-4 rounded-xl bg-primary text-white text-xs font-bold"
                >
                  <Link to="/careers/apply">
                    Submit General Application
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <Reveal key={job.id}>
                    <div
                      id={job.id}
                      className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
                    >
                      {/* Job Header Bar */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-bold text-primary">
                              {job.department}
                            </span>
                            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 border border-emerald-200/60">
                              {job.employmentType || 'Full Time'}
                            </span>
                            {job.vacancies > 1 && (
                              <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800 border border-amber-200/60">
                                {job.vacancies} Vacancies
                              </span>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => handleShareJob(job)}
                            title="Share job opening"
                            className="rounded-lg p-1.5 text-muted/70 hover:bg-slate-50 hover:text-primary transition-colors"
                          >
                            <Share2 className="h-3.5 w-3.5" />
                            {copiedJobId === job.id && (
                              <span className="absolute right-4 -top-6 rounded-md bg-foreground px-2 py-0.5 text-[10px] text-white">
                                Link Copied!
                              </span>
                            )}
                          </button>
                        </div>

                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-display text-xl font-bold leading-tight text-foreground group-hover:text-primary transition-colors">
                            {job.title}
                          </h3>

                          <div className="flex items-center gap-2 text-xs">
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-2.5 py-1 text-slate-700 font-medium">
                              <GraduationCap className="h-3.5 w-3.5 text-primary" />
                              {job.qualification}
                            </span>
                            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100/80 px-2.5 py-1 text-slate-700 font-medium">
                              <Clock className="h-3.5 w-3.5 text-primary" />
                              {job.experience}
                            </span>
                          </div>
                        </div>

                        {job.description && (
                          <p className="text-xs leading-relaxed text-muted line-clamp-2">
                            {job.description}
                          </p>
                        )}
                      </div>

                      {/* Job Action Row */}
                      <div className="flex items-center justify-between gap-3 border-t border-border/60 bg-slate-50/50 px-5 py-3.5">
                        <Link
                          to={`/careers/${job.id}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                        >
                          <span>View Job Description</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </Link>

                        <Button
                          asChild
                          className="gap-1.5 rounded-xl bg-primary text-white text-xs font-bold shadow-brand-button hover:bg-primary/90"
                        >
                          <Link to={`/careers/${job.id}/apply`}>
                            <span>Apply Now</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {/* ==================================================
                GENERAL APPLICATION BANNER
                ================================================== */}
            <div className="my-16 border-t border-border/80 pt-12">
              <Reveal>
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-primary/5 p-8 text-center shadow-sm sm:p-12">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <FileText className="h-6 w-6" />
                  </div>
                  
                  <h3 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Can&apos;t find a suitable opening?
                  </h3>
                  
                  <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
                    We&apos;re always interested in hearing from qualified academic and healthcare professionals.
                  </p>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="rounded-full bg-primary px-8 py-3 text-xs font-bold text-white shadow-brand-button hover:bg-primary/90"
                    >
                      <Link to="/careers/apply">
                        Submit General Application
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ==================================================
                RECRUITMENT HELPDESK SECTION
                ================================================== */}
            <div className="pt-4 pb-10">
              <Reveal>
                <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm sm:p-9">
                  <div className="mb-6 text-center sm:text-left">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      <Phone className="h-3.5 w-3.5" />
                      Helpdesk
                    </span>
                    <h3 className="mt-2.5 font-display text-xl font-bold text-foreground sm:text-2xl">
                      Recruitment Helpdesk
                    </h3>
                    <p className="mt-1 text-xs text-muted sm:text-sm">
                      For career queries, faculty appointments, or direct profile submissions, get in touch with our office:
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {/* Address */}
                    <div className="flex flex-col justify-between rounded-2xl border border-primary/10 bg-[#faf7f8] p-4.5">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                          <MapPin className="h-4 w-4 shrink-0" />
                          <span>Address</span>
                        </div>
                        <p className="mt-2.5 text-xs font-medium leading-relaxed text-foreground">
                          Melmaruvathur, Tamilnadu - 603319.
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col justify-between rounded-2xl border border-primary/10 bg-[#faf7f8] p-4.5">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                          <Phone className="h-4 w-4 shrink-0" />
                          <span>Phone</span>
                        </div>
                        <div className="mt-2.5 space-y-1 text-xs font-medium text-foreground">
                          <a
                            href="tel:04427528082"
                            className="block transition-colors hover:text-primary"
                          >
                            044-2752 8082
                          </a>
                          <a
                            href="tel:04427528083"
                            className="block transition-colors hover:text-primary"
                          >
                            044-2752 8083
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col justify-between rounded-2xl border border-primary/10 bg-[#faf7f8] p-4.5">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                          <Mail className="h-4 w-4 shrink-0" />
                          <span>Email</span>
                        </div>
                        <div className="mt-2.5 text-xs font-medium text-foreground">
                          <a
                            href="mailto:contact@apdch.edu.in"
                            className="break-all transition-colors hover:text-primary"
                          >
                            contact@apdch.edu.in
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
