import { useState, useEffect, useId } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Plus,
  Search,
  Edit3,
  Trash2,
  Copy,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Download,
  Upload,
  RefreshCw,
  LogOut,
  Lock,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Clock,
  X,
  ExternalLink,
  Calendar,
  Layers,
  ChevronRight,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import careerData from '@/data/careers.json'
import {
  getJobPostings,
  saveJobPosting,
  deleteJobPosting,
  toggleJobStatus,
  duplicateJobPosting,
  getApplications,
  updateApplicationStatus,
  deleteApplication,
  exportCareersDatabase,
  importCareersDatabase,
  resetCareersToDefaults,
} from '@/lib/careersStore'

const POSITIONS = careerData.positions || []
const DEPARTMENTS = careerData.departments || []
const QUALIFICATIONS = careerData.qualifications || []
const EXPERIENCE_LEVELS = careerData.experienceLevels || []

const EMPLOYMENT_TYPES = ['Full Time', 'Part Time', 'Contract', 'Visiting / Adjunct', 'Internship']

const STATUS_BADGES = {
  active: { label: 'Active', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  draft: { label: 'Draft', bg: 'bg-amber-50 text-amber-700 border-amber-200' },
  closed: { label: 'Closed', bg: 'bg-slate-100 text-slate-600 border-slate-200' },
}

const APP_STATUS_BADGES = {
  new: { label: 'New Application', bg: 'bg-sky-50 text-sky-800 border-sky-200 ring-1 ring-sky-300/30', dot: 'bg-sky-500 animate-pulse' },
  reviewing: { label: 'Under Review', bg: 'bg-indigo-50 text-indigo-800 border-indigo-200 ring-1 ring-indigo-300/30', dot: 'bg-indigo-500' },
  shortlisted: { label: 'Shortlisted', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200 ring-1 ring-emerald-300/30', dot: 'bg-emerald-500' },
  interviewed: { label: 'Interview Scheduled', bg: 'bg-amber-50 text-amber-800 border-amber-200 ring-1 ring-amber-300/30', dot: 'bg-amber-500' },
  selected: { label: 'Selected / Offer', bg: 'bg-emerald-100 text-emerald-950 border-emerald-300 font-bold ring-1 ring-emerald-400/40', dot: 'bg-emerald-600' },
  rejected: { label: 'Archived / Rejected', bg: 'bg-slate-100 text-slate-600 border-slate-200', dot: 'bg-slate-400' },
}

export default function CareerCms() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('apdch_hr_auth') === 'true'
  })
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authError, setAuthError] = useState('')

  // CMS Navigation Tab
  const [activeTab, setActiveTab] = useState('jobs') // 'jobs' | 'applications' | 'settings'

  // Data state
  const [jobs, setJobs] = useState([])
  const [applications, setApplications] = useState([])

  // Filters for Jobs
  const [jobSearch, setJobSearch] = useState('')
  const [jobStatusFilter, setJobStatusFilter] = useState('all')
  const [jobDeptFilter, setJobDeptFilter] = useState('all')

  // Filters for Applications
  const [appSearch, setAppSearch] = useState('')
  const [appStatusFilter, setAppStatusFilter] = useState('all')
  const [appJobFilter, setAppJobFilter] = useState('all')

  // Modal States
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const [editingJob, setEditingJob] = useState(null)
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  // Load initial data
  const loadData = () => {
    setJobs(getJobPostings())
    setApplications(getApplications())
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadData()
    }
  }, [isAuthenticated, activeTab])

  const showToast = (text) => {
    setToastMessage(text)
    setTimeout(() => setToastMessage(null), 3500)
  }

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault()
    if (
      (authEmail === 'hr@apdch.edu.in' || authEmail === 'admin@apdch.edu.in' || authEmail === 'hr') &&
      (authPassword === 'apdch2026' || authPassword === 'apdch@2026' || authPassword === 'admin')
    ) {
      sessionStorage.setItem('apdch_hr_auth', 'true')
      setIsAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('Invalid credentials. Use official email hr@apdch.edu.in and authorized password.')
    }
  }

  const handleLogout = () => {
    sessionStorage.removeItem('apdch_hr_auth')
    setIsAuthenticated(false)
  }

  // Job Actions
  const handleOpenCreateModal = () => {
    setEditingJob({
      title: '',
      department: DEPARTMENTS[0] || 'Conservative Dentistry & Endodontics',
      positionLevel: POSITIONS[0] || 'Professor / Reader',
      employmentType: 'Full Time',
      experience: '1 to 3 Years',
      qualification: 'MDS (Master of Dental Surgery)',
      vacancies: 1,
      location: 'Melmaruvathur Campus, APDCH',
      salary: 'As per DCI & Trust Norms',
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'active',
      featured: false,
      tags: ['Urgent Requirement', 'Faculty Opening'],
      description: '',
      responsibilities: ['Conduct undergraduate and postgraduate academic lectures.', 'Supervise clinical training in the dental hospital.'],
      requirements: ['Recognized MDS/BDS degree from a DCI approved institution.', 'Valid State Dental Council Registration.'],
    })
    setIsJobModalOpen(true)
  }

  const handleOpenEditModal = (job) => {
    setEditingJob({
      ...job,
      responsibilities: job.responsibilities || [],
      requirements: job.requirements || [],
      tags: job.tags || [],
    })
    setIsJobModalOpen(true)
  }

  const handleSaveJob = (e) => {
    e.preventDefault()
    if (!editingJob.title.trim()) {
      alert('Please enter a job title.')
      return
    }

    saveJobPosting(editingJob)
    loadData()
    setIsJobModalOpen(false)
    setEditingJob(null)
    showToast(editingJob.id ? 'Job Opening updated successfully!' : 'New Job Opening published successfully!')
  }

  const handleDeleteJob = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the job opening: "${title}"?`)) {
      deleteJobPosting(id)
      loadData()
      showToast('Job opening deleted.')
    }
  }

  const handleToggleStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === 'active' ? 'draft' : currentStatus === 'draft' ? 'closed' : 'active'
    toggleJobStatus(id, nextStatus)
    loadData()
    showToast(`Status changed to ${nextStatus.toUpperCase()}`)
  }

  const handleDuplicateJob = (id) => {
    duplicateJobPosting(id)
    loadData()
    showToast('Job opening duplicated as draft.')
  }

  // Application Actions
  const handleUpdateAppStatus = (appId, newStatus) => {
    updateApplicationStatus(appId, newStatus)
    loadData()
    if (selectedApplication && selectedApplication.id === appId) {
      setSelectedApplication((prev) => ({ ...prev, status: newStatus }))
    }
    showToast(`Application marked as ${newStatus}`)
  }

  const handleSaveAppNotes = (appId, notes) => {
    updateApplicationStatus(appId, selectedApplication.status, notes)
    loadData()
    showToast('HR remarks saved.')
  }

  const handleDeleteApp = (appId) => {
    if (window.confirm('Are you sure you want to remove this application record?')) {
      deleteApplication(appId)
      loadData()
      setSelectedApplication(null)
      showToast('Application deleted.')
    }
  }

  const handleViewResume = (app, e) => {
    if (e) e.stopPropagation()

    if (app.resumeDataUrl) {
      const win = window.open(app.resumeDataUrl, '_blank')
      if (!win) {
        const link = document.createElement('a')
        link.href = app.resumeDataUrl
        link.download = app.resumeName || `Resume_${app.fullName.replace(/\s+/g, '_')}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } else {
      const content =
        `==================================================\n` +
        `       APDCH CANDIDATE APPLICATION & RESUME SUMMARY\n` +
        `==================================================\n\n` +
        `Candidate Name: ${app.fullName}\n` +
        `Position Applied: ${app.jobTitle || 'Faculty Opening'}\n` +
        `Specialty/Department: ${app.department || 'APDCH Dental College'}\n` +
        `Email: ${app.email}\n` +
        `Phone: ${app.phone}\n` +
        `Highest Qualification: ${app.qualification || 'Not specified'}\n` +
        `Experience: ${app.experience || 'Not specified'}\n` +
        `Current Institution: ${app.currentOrg || 'N/A'}\n` +
        `Date Applied: ${app.appliedDate}\n` +
        `File Name: ${app.resumeName || 'Resume.pdf'}\n\n` +
        `--------------------------------------------------\n` +
        `CANDIDATE COVER NOTE / RESEARCH STATEMENT:\n` +
        `--------------------------------------------------\n` +
        `${app.message || 'No additional note provided.'}\n\n` +
        `--------------------------------------------------\n` +
        `INTERNAL HR STATUS:\n` +
        `--------------------------------------------------\n` +
        `Status: ${app.status ? app.status.toUpperCase() : 'NEW'}\n` +
        `HR Review Notes: ${app.hrNotes || 'Pending review'}\n\n` +
        `==================================================\n` +
        `Adhiparasakthi Dental College & Hospital - HR Directorate\n`

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `Resume_${app.fullName.replace(/\s+/g, '_')}.txt`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }
  }

  // Export Applications to CSV
  const handleExportCSV = () => {
    if (applications.length === 0) {
      alert('No applications to export.')
      return
    }
    const headers = ['Application ID', 'Applied Date', 'Job Title', 'Candidate Name', 'Email', 'Phone', 'Qualification', 'Experience', 'Current Org', 'Status', 'HR Remarks']
    const rows = applications.map((a) => [
      `"${a.id}"`,
      `"${a.appliedDate}"`,
      `"${a.jobTitle || ''}"`,
      `"${a.fullName || ''}"`,
      `"${a.email || ''}"`,
      `"${a.phone || ''}"`,
      `"${a.qualification || ''}"`,
      `"${a.experience || ''}"`,
      `"${a.currentOrg || ''}"`,
      `"${a.status || 'new'}"`,
      `"${(a.hrNotes || '').replace(/"/g, '""')}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `APDCH_Job_Applications_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast('Applications exported to CSV.')
  }

  // Backup & Restore
  const handleExportDatabase = () => {
    const jsonStr = exportCareersDatabase()
    const blob = new Blob([jsonStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `APDCH_Careers_Backup_${new Date().toISOString().split('T')[0]}.json`
    a.click()
    URL.revokeObjectURL(url)
    showToast('Full database backup exported.')
  }

  const handleImportDatabase = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      const res = importCareersDatabase(event.target.result)
      if (res.success) {
        loadData()
        showToast('Database imported successfully!')
      } else {
        alert(`Failed to import database: ${res.error}`)
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const handleResetDefaults = () => {
    if (window.confirm('Reset all job postings and applications to default official APDCH records? Custom additions will be reset.')) {
      resetCareersToDefaults()
      loadData()
      showToast('Database restored to default records.')
    }
  }

  // Filter calculations
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
      job.department.toLowerCase().includes(jobSearch.toLowerCase()) ||
      (job.location && job.location.toLowerCase().includes(jobSearch.toLowerCase()))
    const matchesStatus = jobStatusFilter === 'all' || job.status === jobStatusFilter
    const matchesDept = jobDeptFilter === 'all' || job.department === jobDeptFilter
    return matchesSearch && matchesStatus && matchesDept
  })

  const filteredApplications = applications.filter((app) => {
    const matchesSearch =
      (app.fullName && app.fullName.toLowerCase().includes(appSearch.toLowerCase())) ||
      (app.email && app.email.toLowerCase().includes(appSearch.toLowerCase())) ||
      (app.phone && app.phone.includes(appSearch)) ||
      (app.jobTitle && app.jobTitle.toLowerCase().includes(appSearch.toLowerCase()))
    const matchesStatus = appStatusFilter === 'all' || app.status === appStatusFilter
    const matchesJob = appJobFilter === 'all' || app.jobId === appJobFilter
    return matchesSearch && matchesStatus && matchesJob
  })

  const activeJobsCount = jobs.filter((j) => j.status === 'active').length
  const draftJobsCount = jobs.filter((j) => j.status === 'draft').length
  const closedJobsCount = jobs.filter((j) => j.status === 'closed').length
  const shortlistedCount = applications.filter((a) => a.status === 'shortlisted' || a.status === 'selected').length

  // Unique IDs for accessibility
  const titleId = useId()
  const deptId = useId()
  const posId = useId()
  const typeId = useId()
  const expId = useId()
  const qualId = useId()
  const vacId = useId()
  const locId = useId()
  const salId = useId()
  const deadId = useId()
  const statId = useId()
  const descId = useId()
  const tagsId = useId()

  // --------------------------------------------------------------------------
  // AUTHENTICATION SCREEN
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fdf8f9] px-4 py-12">
        <div className="pointer-events-none absolute inset-0 glow-radial-center opacity-60" />
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-primary/20 bg-white p-8 shadow-brand-lg md:p-10">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-primary/5 p-2 ring-1 ring-primary/20 shadow-sm">
              <img
                src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                alt="APDCH Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground">
              APDCH Career Portal
            </h1>
            <p className="mt-1.5 text-xs text-muted">
              Sign in to manage faculty &amp; staff job openings, publish postings, and review candidate applications.
            </p>
          </div>

          {authError && (
            <div className="mt-6 flex items-start gap-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-700">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Official HR Email
              </label>
              <div className="relative mt-1.5">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="text"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="hr@apdch.edu.in"
                  className="w-full rounded-xl border border-primary/20 bg-slate-50/70 py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                Password / Access Key
              </label>
              <div className="relative mt-1.5">
                <Lock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-primary/20 bg-slate-50/70 py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="mt-2 w-full rounded-xl bg-primary text-white font-bold shadow-brand hover:bg-primary/90"
            >
              Sign In to HR Portal
            </Button>
          </form>
        </div>
      </div>
    )
  }

  // --------------------------------------------------------------------------
  // MAIN HR CMS DASHBOARD
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#f7f4f5] text-foreground">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-foreground px-4 py-3 text-xs font-semibold text-white shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 border-b border-primary/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-primary/5 p-1 ring-1 ring-primary/15">
                <img
                  src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                  alt="APDCH"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <span className="block font-display text-sm font-bold leading-tight text-foreground">
                  APDCH Career CMS
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-wider text-primary">
                  HR Directorate &amp; Recruitment
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex rounded-xl text-xs gap-1.5">
              <Link to="/careers" target="_blank" rel="noopener noreferrer">
                <span>Live Careers Page</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleLogout}
              className="rounded-xl text-xs text-rose-600 hover:bg-rose-50 hover:text-rose-700 gap-1.5"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-t border-border/50 bg-white px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto py-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('jobs')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'jobs'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:bg-primary/5 hover:text-foreground'
              }`}
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>Job Postings ({jobs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('applications')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'applications'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:bg-primary/5 hover:text-foreground'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Applications Inbox ({applications.length})</span>
              {applications.filter((a) => a.status === 'new').length > 0 && (
                <span className="rounded-full bg-emerald-400 px-1.5 py-0.5 text-[9px] font-bold text-white">
                  {applications.filter((a) => a.status === 'new').length} New
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                activeTab === 'settings'
                  ? 'bg-primary text-white shadow-sm'
                  : 'text-muted hover:bg-primary/5 hover:text-foreground'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Data Backup &amp; Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* KPI Metrics Dashboard */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Active Openings</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Briefcase className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-foreground">{activeJobsCount}</span>
              <span className="text-xs text-muted">of {jobs.length} total</span>
            </div>
            <p className="mt-1 text-[11px] text-emerald-600 font-medium">Currently visible to candidates</p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Drafts / Closed</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-foreground">{draftJobsCount + closedJobsCount}</span>
              <span className="text-xs text-muted">({draftJobsCount} drafts, {closedJobsCount} closed)</span>
            </div>
            <p className="mt-1 text-[11px] text-muted">Hidden from public view</p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Total Applicants</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-foreground">{applications.length}</span>
              <span className="text-xs text-muted">resumes received</span>
            </div>
            <p className="mt-1 text-[11px] text-blue-600 font-medium">
              {applications.filter((a) => a.status === 'new').length} unreviewed applications
            </p>
          </div>

          <div className="rounded-2xl border border-primary/15 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Shortlisted</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <TrendingUp className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-foreground">{shortlistedCount}</span>
              <span className="text-xs text-muted">candidates</span>
            </div>
            <p className="mt-1 text-[11px] text-purple-600 font-medium">Ready for interview / review</p>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            TAB 1: JOB POSTINGS MANAGEMENT
            ------------------------------------------------------------------ */}
        {activeTab === 'jobs' && (
          <div className="mt-8 space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 rounded-2xl border border-primary/15 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative min-w-[220px] flex-1 sm:max-w-xs">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                    placeholder="Search job title or department..."
                    className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2 pl-9 pr-3 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={jobStatusFilter}
                  onChange={(e) => setJobStatusFilter(e.target.value)}
                  className="rounded-xl border border-primary/15 bg-[#faf7f8] py-2 px-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Statuses ({jobs.length})</option>
                  <option value="active">Active Only ({activeJobsCount})</option>
                  <option value="draft">Drafts ({draftJobsCount})</option>
                  <option value="closed">Closed ({closedJobsCount})</option>
                </select>

                {/* Department Filter */}
                <select
                  value={jobDeptFilter}
                  onChange={(e) => setJobDeptFilter(e.target.value)}
                  className="max-w-[200px] truncate rounded-xl border border-primary/15 bg-[#faf7f8] py-2 px-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="all">All Departments</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Create Job Action */}
              <Button
                onClick={handleOpenCreateModal}
                className="gap-1.5 rounded-xl bg-primary font-bold text-white shadow-brand hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                <span>Create Job Opening</span>
              </Button>
            </div>

            {/* Job Openings List */}
            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-12 text-center">
                <Briefcase className="mx-auto h-10 w-10 text-muted/50" />
                <h3 className="mt-3 font-display text-lg font-bold text-foreground">No Job Openings Found</h3>
                <p className="mt-1 text-xs text-muted">Try adjusting your filters or create a new job opening.</p>
                <Button onClick={handleOpenCreateModal} className="mt-4 gap-1.5 rounded-xl bg-primary text-white text-xs">
                  <Plus className="h-3.5 w-3.5" /> Post Job Opening
                </Button>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredJobs.map((job) => {
                  const statusInfo = STATUS_BADGES[job.status] || STATUS_BADGES.active
                  const appCount = applications.filter((a) => a.jobId === job.id).length

                  return (
                    <div
                      key={job.id}
                      className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-primary/15 bg-white p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:flex-row md:items-center"
                    >
                      <div className="min-w-0 flex-1 space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${statusInfo.bg}`}
                          >
                            {statusInfo.label}
                          </span>
                          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                            {job.employmentType || 'Full Time'}
                          </span>
                          {job.vacancies > 1 && (
                            <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-bold text-primary">
                              {job.vacancies} Vacancies
                            </span>
                          )}
                          <span className="text-[11px] text-muted">
                            Posted: {job.postedDate || 'Recent'}
                          </span>
                        </div>

                        <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                          <span className="flex items-center gap-1 font-medium text-foreground">
                            <Building className="h-3.5 w-3.5 text-primary" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <GraduationCap className="h-3.5 w-3.5 text-primary" />
                            {job.qualification}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-primary" />
                            {job.experience}
                          </span>
                          {job.deadline && (
                            <span className="flex items-center gap-1 text-amber-700 font-semibold">
                              <Calendar className="h-3.5 w-3.5" />
                              Deadline: {job.deadline}
                            </span>
                          )}
                        </div>

                        {job.tags && job.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {job.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary/80"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Actions Bar */}
                      <div className="flex flex-wrap items-center gap-2 border-t border-border/60 pt-3 md:border-t-0 md:pt-0 shrink-0">
                        {/* Applicants Badge */}
                        <button
                          type="button"
                          onClick={() => {
                            setAppJobFilter(job.id)
                            setActiveTab('applications')
                          }}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary/10 transition-colors"
                        >
                          <Users className="h-3.5 w-3.5" />
                          <span>{appCount} {appCount === 1 ? 'Applicant' : 'Applicants'}</span>
                        </button>

                        {/* Status Toggle */}
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(job.id, job.status)}
                          title={`Toggle status (currently ${job.status})`}
                          className="inline-flex items-center gap-1 rounded-xl border border-border bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-muted hover:bg-slate-100 hover:text-foreground"
                        >
                          <RefreshCw className="h-3.5 w-3.5" />
                          <span>Toggle</span>
                        </button>

                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(job)}
                          title="Edit Job Opening"
                          className="inline-flex items-center gap-1 rounded-xl border border-primary/20 bg-white px-2.5 py-1.5 text-xs font-bold text-primary hover:bg-primary/5"
                        >
                          <Edit3 className="h-3.5 w-3.5" />
                          <span>Edit</span>
                        </button>

                        {/* Duplicate */}
                        <button
                          type="button"
                          onClick={() => handleDuplicateJob(job.id)}
                          title="Duplicate Job Opening"
                          className="rounded-xl border border-border bg-white p-2 text-muted hover:bg-slate-50 hover:text-foreground"
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => handleDeleteJob(job.id, job.title)}
                          title="Delete Job Opening"
                          className="rounded-xl border border-rose-200 bg-rose-50/50 p-2 text-rose-600 hover:bg-rose-100"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------
            TAB 2: CANDIDATE APPLICATIONS INBOX
            ------------------------------------------------------------------ */}
        {activeTab === 'applications' && (
          <div className="mt-8 space-y-6">
            {/* Quick Status Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {[
                { id: 'all', label: 'All Applications', count: applications.length, badgeBg: 'bg-primary/10 text-primary' },
                { id: 'new', label: 'New', count: applications.filter((a) => a.status === 'new').length, badgeBg: 'bg-sky-100 text-sky-800' },
                { id: 'reviewing', label: 'Under Review', count: applications.filter((a) => a.status === 'reviewing').length, badgeBg: 'bg-indigo-100 text-indigo-800' },
                { id: 'shortlisted', label: 'Shortlisted', count: applications.filter((a) => a.status === 'shortlisted').length, badgeBg: 'bg-emerald-100 text-emerald-800' },
                { id: 'interviewed', label: 'Interviewed', count: applications.filter((a) => a.status === 'interviewed').length, badgeBg: 'bg-amber-100 text-amber-800' },
                { id: 'selected', label: 'Offered', count: applications.filter((a) => a.status === 'selected').length, badgeBg: 'bg-green-100 text-green-800' },
                { id: 'rejected', label: 'Archived', count: applications.filter((a) => a.status === 'rejected').length, badgeBg: 'bg-slate-200 text-slate-700' },
              ].map((tab) => {
                const isActive = appStatusFilter === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setAppStatusFilter(tab.id)}
                    className={`flex shrink-0 items-center gap-2 rounded-2xl px-4 py-2 text-xs font-bold transition-all border ${
                      isActive
                        ? 'bg-primary text-white border-primary shadow-brand-button'
                        : 'bg-white text-muted border-primary/15 hover:bg-primary/5 hover:text-foreground'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                        isActive ? 'bg-white/20 text-white' : tab.badgeBg
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Toolbar: Search & Position Filter */}
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/15 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search Input */}
                <div className="relative min-w-[240px] flex-1">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                  <input
                    type="text"
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    placeholder="Search candidate name, email, phone..."
                    className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                {/* Job Position Filter */}
                <div className="relative">
                  <select
                    value={appJobFilter}
                    onChange={(e) => setAppJobFilter(e.target.value)}
                    className="max-w-[240px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-medium text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    <option value="all">All Vacancy Positions</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Export to CSV Action */}
              <Button
                onClick={handleExportCSV}
                variant="outline"
                className="gap-2 rounded-2xl border-primary/20 bg-white py-2.5 text-xs font-bold text-primary shadow-sm hover:bg-primary/5 hover:text-primary shrink-0"
              >
                <Download className="h-4 w-4 text-primary" />
                <span>Export Applications (CSV)</span>
              </Button>
            </div>

            {/* Applications List */}
            {filteredApplications.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-12 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">No Applications Found</h3>
                <p className="mt-1 text-xs text-muted max-w-sm mx-auto leading-relaxed">
                  No candidate submissions match your current search criteria or filter stage.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {filteredApplications.map((app) => {
                  const statusInfo = APP_STATUS_BADGES[app.status] || APP_STATUS_BADGES.new
                  const initials = (app.fullName || 'Candidate')
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .toUpperCase()
                    .slice(0, 2)

                  // Left Accent border color based on status
                  const statusLeftBorder =
                    app.status === 'new'
                      ? 'border-l-sky-500'
                      : app.status === 'reviewing'
                      ? 'border-l-indigo-500'
                      : app.status === 'shortlisted'
                      ? 'border-l-emerald-500'
                      : app.status === 'interviewed'
                      ? 'border-l-amber-500'
                      : app.status === 'selected'
                      ? 'border-l-green-600'
                      : 'border-l-slate-400'

                  return (
                    <div
                      key={app.id}
                      onClick={() => setSelectedApplication(app)}
                      className={`group cursor-pointer rounded-3xl border border-primary/15 border-l-[6px] ${statusLeftBorder} bg-white p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-brand`}
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        {/* Candidate Avatar & Main Info */}
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#590016] text-sm font-bold text-white shadow-brand-button">
                            {initials}
                          </div>

                          <div className="space-y-1.5">
                            <div className="flex flex-wrap items-center gap-2.5">
                              <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                                {app.fullName}
                              </h3>

                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[10px] font-bold ${statusInfo.bg}`}
                              >
                                <span className={`h-1.5 w-1.5 rounded-full ${statusInfo.dot}`} />
                                {statusInfo.label}
                              </span>

                              <span className="text-[11px] font-medium text-muted">
                                Applied {app.appliedDate}
                              </span>
                            </div>

                            {/* Position & Department Badge */}
                            <div className="flex flex-wrap items-center gap-2 text-xs">
                              <span className="font-semibold text-primary">
                                {app.jobTitle || 'General Faculty Application'}
                              </span>
                              {app.department && (
                                <span className="rounded-md bg-primary/5 px-2 py-0.5 text-[10px] font-bold text-primary">
                                  {app.department}
                                </span>
                              )}
                            </div>

                            {/* Contact & Criteria Metadata Chips */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-muted">
                              <a
                                href={`mailto:${app.email}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
                              >
                                <Mail className="h-3.5 w-3.5 text-primary" />
                                <span>{app.email}</span>
                              </a>
                              <a
                                href={`tel:${app.phone}`}
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-1.5 font-medium hover:text-primary transition-colors"
                              >
                                <Phone className="h-3.5 w-3.5 text-primary" />
                                <span>{app.phone}</span>
                              </a>
                              {app.qualification && (
                                <span className="flex items-center gap-1.5 font-medium">
                                  <GraduationCap className="h-3.5 w-3.5 text-primary" />
                                  <span>{app.qualification}</span>
                                </span>
                              )}
                              {app.experience && (
                                <span className="flex items-center gap-1.5 font-medium">
                                  <Clock className="h-3.5 w-3.5 text-primary" />
                                  <span>{app.experience}</span>
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-2.5 self-end md:self-center shrink-0">
                          {app.resumeName && (
                            <button
                              type="button"
                              onClick={(e) => handleViewResume(app, e)}
                              className="inline-flex items-center gap-1.5 rounded-2xl border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                              title="View candidate resume document"
                            >
                              <Download className="h-4 w-4" />
                              <span>View Resume</span>
                            </button>
                          )}

                          <Button
                            size="sm"
                            className="rounded-2xl bg-slate-100 text-foreground hover:bg-primary hover:text-white gap-1.5 text-xs font-bold border border-border shadow-sm transition-all"
                          >
                            <span>Review Record</span>
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------
            TAB 3: SETTINGS & DATABASE BACKUP
            ------------------------------------------------------------------ */}
        {activeTab === 'settings' && (
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {/* Backup & Restore Card */}
            <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-primary">
                <Layers className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-foreground">Database Backup &amp; Restore</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Export all published job openings, candidate resumes data, and HR notes into a single portable JSON file. You can restore this file anytime across any browser.
              </p>

              <div className="mt-6 space-y-3">
                <Button
                  onClick={handleExportDatabase}
                  className="w-full gap-2 rounded-xl bg-primary text-white font-bold shadow-brand hover:bg-primary/90"
                >
                  <Download className="h-4 w-4" />
                  <span>Download Full Database Backup (JSON)</span>
                </Button>

                <div className="relative">
                  <label className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5 text-xs font-bold text-primary transition-colors hover:bg-primary/10">
                    <Upload className="h-4 w-4" />
                    <span>Upload &amp; Restore JSON Backup</span>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportDatabase}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Reset / Demo Management */}
            <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-amber-700">
                <RefreshCw className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-foreground">Reset &amp; Sample Data</h3>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                Restore the default APDCH verified job postings (Prosthodontics, Orthodontics, OMFS, Conservative Dentistry, Nursing, and Research Fellow) and sample applications.
              </p>

              <div className="mt-6">
                <Button
                  onClick={handleResetDefaults}
                  variant="outline"
                  className="w-full gap-2 rounded-xl border-amber-300 text-amber-800 hover:bg-amber-50 font-bold"
                >
                  <RefreshCw className="h-4 w-4 text-amber-600" />
                  <span>Reset Database to Official APDCH Defaults</span>
                </Button>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 border border-border text-xs text-muted">
                <p className="font-semibold text-foreground">HR Directorate Access:</p>
                <p className="mt-1">Official Email: <strong className="text-foreground">hr@apdch.edu.in</strong></p>
                <p>Default Password: <strong className="text-foreground">apdch2026</strong></p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ------------------------------------------------------------------
          MODAL: CREATE / EDIT JOB OPENING
          ------------------------------------------------------------------ */}
      {isJobModalOpen && editingJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-primary/10 bg-[#f5eef0] p-5 sm:px-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Briefcase className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {editingJob.id ? 'Edit Job Opening' : 'Create New Job Opening'}
                  </h3>
                  <p className="text-xs text-muted">
                    Publish or update vacancy details on the official APDCH Careers portal.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsJobModalOpen(false)}
                className="rounded-full p-1.5 text-muted hover:bg-black/5 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveJob} className="max-h-[75vh] overflow-y-auto p-5 sm:p-7 space-y-5">
              {/* Row 1: Title */}
              <div>
                <label htmlFor={titleId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Job Title <span className="text-primary">*</span>
                </label>
                <input
                  id={titleId}
                  type="text"
                  required
                  value={editingJob.title}
                  onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                  placeholder="e.g. Professor / Reader in Prosthodontics"
                  className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                />
              </div>

              {/* Row 2: Department & Position Level */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={deptId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Department / Specialty <span className="text-primary">*</span>
                  </label>
                  <select
                    id={deptId}
                    value={editingJob.department}
                    onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    {DEPARTMENTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={posId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Position Level <span className="text-primary">*</span>
                  </label>
                  <select
                    id={posId}
                    value={editingJob.positionLevel}
                    onChange={(e) => setEditingJob({ ...editingJob, positionLevel: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    {POSITIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 3: Employment Type & Experience */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={typeId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Employment Type
                  </label>
                  <select
                    id={typeId}
                    value={editingJob.employmentType}
                    onChange={(e) => setEditingJob({ ...editingJob, employmentType: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    {EMPLOYMENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={expId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Experience Required
                  </label>
                  <select
                    id={expId}
                    value={editingJob.experience}
                    onChange={(e) => setEditingJob({ ...editingJob, experience: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    {EXPERIENCE_LEVELS.map((exp) => (
                      <option key={exp} value={exp}>
                        {exp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Minimum Qualification & Vacancies */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={qualId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Minimum Qualification
                  </label>
                  <select
                    id={qualId}
                    value={editingJob.qualification}
                    onChange={(e) => setEditingJob({ ...editingJob, qualification: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  >
                    {QUALIFICATIONS.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={vacId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Number of Vacancies
                  </label>
                  <input
                    id={vacId}
                    type="number"
                    min="1"
                    value={editingJob.vacancies}
                    onChange={(e) => setEditingJob({ ...editingJob, vacancies: parseInt(e.target.value, 10) || 1 })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Row 5: Location, Salary & Deadline */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label htmlFor={locId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Job Location
                  </label>
                  <input
                    id={locId}
                    type="text"
                    value={editingJob.location}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                    placeholder="Melmaruvathur Campus, APDCH"
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={salId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Salary / Compensation
                  </label>
                  <input
                    id={salId}
                    type="text"
                    value={editingJob.salary}
                    onChange={(e) => setEditingJob({ ...editingJob, salary: e.target.value })}
                    placeholder="As per DCI & Trust Norms"
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label htmlFor={deadId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Application Deadline
                  </label>
                  <input
                    id={deadId}
                    type="date"
                    value={editingJob.deadline}
                    onChange={(e) => setEditingJob({ ...editingJob, deadline: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Status & Featured */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={statId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Publishing Status
                  </label>
                  <select
                    id={statId}
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-bold text-primary"
                  >
                    <option value="active">Active (Visible on Careers Page)</option>
                    <option value="draft">Draft (Private, not published)</option>
                    <option value="closed">Closed (Archived)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor={tagsId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Tags (Comma Separated)
                  </label>
                  <input
                    id={tagsId}
                    type="text"
                    value={(editingJob.tags || []).join(', ')}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        tags: e.target.value
                          .split(',')
                          .map((s) => s.trim())
                          .filter(Boolean),
                      })
                    }
                    placeholder="Urgent, DCI Approved, Immediate Joining"
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor={descId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Job Overview / Summary
                </label>
                <textarea
                  id={descId}
                  rows="3"
                  value={editingJob.description}
                  onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                  placeholder="Provide a brief overview of the vacancy and departmental context..."
                  className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] p-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                />
              </div>

              {/* Responsibilities & Requirements Bullets */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Key Responsibilities (One per line)
                  </label>
                  <textarea
                    rows="4"
                    value={(editingJob.responsibilities || []).join('\n')}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        responsibilities: e.target.value.split('\n').filter(Boolean),
                      })
                    }
                    placeholder="Conduct lectures&#10;Supervise clinical work&#10;Participate in audits"
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] p-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Eligibility &amp; Requirements (One per line)
                  </label>
                  <textarea
                    rows="4"
                    value={(editingJob.requirements || []).join('\n')}
                    onChange={(e) =>
                      setEditingJob({
                        ...editingJob,
                        requirements: e.target.value.split('\n').filter(Boolean),
                      })
                    }
                    placeholder="Recognized MDS degree&#10;Valid DCI registration&#10;Relevant teaching experience"
                    className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] p-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 border-t border-border pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsJobModalOpen(false)}
                  className="rounded-xl text-xs"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="rounded-xl bg-primary text-white font-bold shadow-brand hover:bg-primary/90 text-xs"
                >
                  {editingJob.id ? 'Save & Update Job' : 'Publish Job Opening'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------
          DRAWER / MODAL: APPLICATION DETAILS & HR REVIEW
          ------------------------------------------------------------------ */}
      {selectedApplication && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative my-8 w-full max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl animate-in fade-in zoom-in-95">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary/10 bg-[#f5eef0] p-5 sm:px-7">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-primary">
                  Candidate Application
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">
                  {selectedApplication.fullName}
                </h3>
                <p className="text-xs text-muted">Applied for: {selectedApplication.jobTitle || 'Faculty Position'}</p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedApplication(null)}
                className="rounded-full p-1.5 text-muted hover:bg-black/5 hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Application Body */}
            <div className="max-h-[75vh] overflow-y-auto p-5 sm:p-7 space-y-6">
              {/* Contact Info Card */}
              <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 border border-border sm:grid-cols-2 text-xs">
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Email Address</span>
                  <a href={`mailto:${selectedApplication.email}`} className="font-semibold text-primary hover:underline flex items-center gap-1 mt-0.5">
                    <Mail className="h-3.5 w-3.5" />
                    {selectedApplication.email}
                  </a>
                </div>
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Phone Number</span>
                  <a href={`tel:${selectedApplication.phone}`} className="font-semibold text-primary hover:underline flex items-center gap-1 mt-0.5">
                    <Phone className="h-3.5 w-3.5" />
                    {selectedApplication.phone}
                  </a>
                </div>
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Highest Qualification</span>
                  <span className="font-semibold text-foreground mt-0.5 block">{selectedApplication.qualification}</span>
                </div>
                <div>
                  <span className="text-muted block text-[10px] uppercase font-bold">Experience Level</span>
                  <span className="font-semibold text-foreground mt-0.5 block">{selectedApplication.experience}</span>
                </div>
                {selectedApplication.currentOrg && (
                  <div className="sm:col-span-2">
                    <span className="text-muted block text-[10px] uppercase font-bold">Current / Previous Organization</span>
                    <span className="font-semibold text-foreground mt-0.5 block">{selectedApplication.currentOrg}</span>
                  </div>
                )}
              </div>

              {/* Cover Message */}
              {selectedApplication.message && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Candidate Cover Note</h4>
                  <div className="mt-1.5 rounded-2xl bg-[#faf7f8] p-4 text-xs leading-relaxed text-foreground border border-primary/10">
                    {selectedApplication.message}
                  </div>
                </div>
              )}

              {/* Resume File */}
              {selectedApplication.resumeName && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Attached Resume Document</h4>
                  <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-xs">
                    <div className="flex items-center gap-2.5 font-medium text-foreground">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <span className="font-bold block text-xs sm:text-sm">{selectedApplication.resumeName}</span>
                        <span className="text-[10px] text-muted">Candidate Uploaded Document</span>
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={(e) => handleViewResume(selectedApplication, e)}
                      className="gap-1.5 rounded-xl bg-primary text-white text-xs font-bold px-4 py-2 hover:bg-primary/90 shadow-sm"
                    >
                      <Download className="h-4 w-4" />
                      <span>View / Download Resume</span>
                    </Button>
                  </div>
                </div>
              )}

              {/* Application Status Updater */}
              <div className="border-t border-border pt-4">
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Update Candidate Stage
                </label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {Object.entries(APP_STATUS_BADGES).map(([key, info]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleUpdateAppStatus(selectedApplication.id, key)}
                      className={`rounded-xl border px-3 py-1.5 text-xs font-bold transition-all ${
                        selectedApplication.status === key
                          ? `${info.bg} ring-2 ring-primary/40`
                          : 'border-border bg-white text-muted hover:bg-slate-50'
                      }`}
                    >
                      {info.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Internal HR Remarks */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Internal HR Remarks &amp; Interview Notes
                </label>
                <textarea
                  rows="3"
                  defaultValue={selectedApplication.hrNotes || ''}
                  onBlur={(e) => handleSaveAppNotes(selectedApplication.id, e.target.value)}
                  placeholder="Add internal feedback, interview schedule date, committee review remarks..."
                  className="mt-1.5 w-full rounded-xl border border-primary/15 bg-[#faf7f8] p-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                />
                <span className="mt-1 text-[11px] text-muted block">Notes are auto-saved upon clicking outside the box.</span>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <button
                  type="button"
                  onClick={() => handleDeleteApp(selectedApplication.id)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 hover:underline"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  <span>Delete Application Record</span>
                </button>

                <Button
                  type="button"
                  onClick={() => setSelectedApplication(null)}
                  className="rounded-xl bg-primary text-white font-bold text-xs"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
