import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Building,
  MapPin,
  Calendar,
  CheckCircle2,
  Check,
  ArrowLeft,
  ArrowRight,
  Share2,
  Mail,
  Phone,
  Sparkles,
  AlertCircle,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { getJobPostingById } from '@/lib/careersStore'

export default function JobDetail() {
  const { jobId } = useParams()
  const navigate = useNavigate()
  const [job, setJob] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (jobId) {
      const foundJob = getJobPostingById(jobId)
      setJob(foundJob)
    }
  }, [jobId])

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  if (!job) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#faf7f8] pt-36 pb-20 px-4">
          <div className="mx-auto max-w-2xl text-center rounded-3xl border border-primary/20 bg-white p-12 shadow-sm">
            <AlertCircle className="mx-auto h-12 w-12 text-rose-500" />
            <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
              Job Vacancy Not Found
            </h1>
            <p className="mt-2 text-xs text-muted leading-relaxed">
              The requested job posting may have expired, closed, or been removed by the APDCH HR Directorate.
            </p>
            <Button
              onClick={() => navigate('/careers')}
              className="mt-6 rounded-xl bg-primary text-white text-xs font-bold gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Active Careers Directory</span>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO HEADER & BREADCRUMBS
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44 border-b border-primary/10">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-6xl">
            <Reveal>
              {/* Back to All Openings & Breadcrumbs */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to All Openings</span>
                </Link>

                <nav className="flex items-center gap-2 text-xs font-semibold text-muted">
                  <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                  <span>/</span>
                  <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
                  <span>/</span>
                  <span className="text-foreground truncate max-w-[200px]">{job.title}</span>
                </nav>
              </div>

              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-3.5 max-w-3xl">
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      {job.department}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                      {job.employmentType || 'Full Time'}
                    </span>
                    {job.vacancies > 1 && (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                        {job.vacancies} Positions Available
                      </span>
                    )}
                  </div>

                  {/* Job Title */}
                  <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {job.title}
                  </h1>

                  {/* Location & Metadata */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted">
                    <span className="flex items-center gap-1.5 text-foreground font-semibold">
                      <Building className="h-4 w-4 text-primary" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                      {job.location || 'Melmaruvathur Campus, APDCH'}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      Posted: {job.postedDate || 'Recent'}
                    </span>
                  </div>
                </div>

                {/* Hero Actions */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={handleShare}
                    className="relative flex h-11 items-center gap-2 rounded-xl border border-primary/20 bg-white px-4 text-xs font-bold text-foreground shadow-sm transition-all hover:bg-primary/5"
                  >
                    <Share2 className="h-4 w-4 text-primary" />
                    <span>{copied ? 'Link Copied!' : 'Share Opening'}</span>
                  </button>

                  <Button
                    onClick={() => navigate(`/careers/${job.id}/apply`)}
                    className="h-11 gap-2 rounded-xl bg-primary px-6 text-xs font-bold text-white shadow-brand-button hover:bg-primary/90"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================
            MAIN DETAILS GRID
            ================================================== */}
        <section className="px-5 py-10 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
              {/* Left Column: Job Description & Criteria */}
              <div className="space-y-8">
                {/* Role Overview */}
                {job.description && (
                  <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm sm:p-9">
                    <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      Role Overview
                    </h2>
                    <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                      {job.description}
                    </p>
                  </div>
                )}

                {/* Key Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm sm:p-9">
                    <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      Key Responsibilities
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-foreground sm:text-sm">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mt-0.5">
                            <Check className="h-3.5 w-3.5 font-bold" />
                          </span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Eligibility & Criteria */}
                {job.requirements && job.requirements.length > 0 && (
                  <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm sm:p-9">
                    <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                      Eligibility &amp; Requirements
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-foreground sm:text-sm">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                          </span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Compensation & Workplace */}
                {job.salary && (
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-7 text-xs sm:text-sm text-emerald-900 shadow-sm">
                    <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm sm:text-base">
                      <Sparkles className="h-5 w-5 text-emerald-600" />
                      <span>Compensation &amp; Remuneration</span>
                    </div>
                    <p className="mt-2 leading-relaxed">
                      {job.salary}
                    </p>
                  </div>
                )}

                {/* Bottom Back Navigation */}
                <div className="pt-2">
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors bg-white px-5 py-3 rounded-2xl border border-primary/15 shadow-sm"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to All Openings</span>
                  </Link>
                </div>
              </div>

              {/* Right Sidebar: Quick Summary & Action Box */}
              <div className="space-y-6">
                {/* Summary Card */}
                <div className="sticky top-28 rounded-3xl border border-primary/20 bg-white p-6 shadow-brand">
                  <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted">
                    JOB DETAILS
                  </h3>

                  <div className="mt-4 space-y-3.5 text-xs divide-y divide-border">
                    <div className="pt-2 flex justify-between items-center gap-2">
                      <span className="text-muted font-medium">Qualification</span>
                      <span className="font-bold text-foreground text-right">{job.qualification}</span>
                    </div>
                    <div className="pt-3 flex justify-between items-center gap-2">
                      <span className="text-muted font-medium">Experience</span>
                      <span className="font-bold text-foreground text-right">{job.experience}</span>
                    </div>
                    <div className="pt-3 flex justify-between items-center gap-2">
                      <span className="text-muted font-medium">Department</span>
                      <span className="font-bold text-primary text-right truncate max-w-[170px]">{job.department}</span>
                    </div>
                    <div className="pt-3 flex justify-between items-center gap-2">
                      <span className="text-muted font-medium">Employment Type</span>
                      <span className="font-bold text-foreground text-right">{job.employmentType || 'Full Time'}</span>
                    </div>
                    <div className="pt-3 flex justify-between items-center gap-2">
                      <span className="text-muted font-medium">Open Positions</span>
                      <span className="font-bold text-foreground text-right">{job.vacancies || 1}</span>
                    </div>
                    {job.deadline && (
                      <div className="pt-3 flex justify-between items-center gap-2">
                        <span className="text-muted font-medium">Application Deadline</span>
                        <span className="font-bold text-amber-700 text-right">
                          {(() => {
                            try {
                              const d = new Date(job.deadline)
                              return isNaN(d.getTime())
                                ? job.deadline
                                : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                            } catch {
                              return job.deadline
                            }
                          })()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Primary CTA */}
                  <div className="mt-6 pt-2">
                    <Button
                      onClick={() => navigate(`/careers/${job.id}/apply`)}
                      className="w-full gap-2 rounded-xl bg-primary py-3.5 text-xs font-bold text-white shadow-brand-button hover:bg-primary/90"
                    >
                      <span>Apply for this Position</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Helpdesk Contacts */}
                  <div className="mt-6 border-t border-border pt-5 space-y-2.5 text-[11px] text-muted">
                    <span className="block font-bold uppercase tracking-wider text-foreground text-[10px]">
                      HR Helpdesk &amp; Submission
                    </span>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>044-2752 8082 / 8083</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-primary" />
                      <span>admissions@apdch.edu.in</span>
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
