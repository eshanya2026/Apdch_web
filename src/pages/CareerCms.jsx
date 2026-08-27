import { useState, useEffect, useId } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Briefcase,
  Plus,
  Search,
  Edit3,
  Trash2,
  CheckCircle2,
  AlertCircle,
  FileText,
  Users,
  Download,
  LogOut,
  Lock,
  Mail,
  Phone,
  Building,
  Clock,
  X,
  Calendar,
  Layers,
  ChevronRight,
  Star,
  Hourglass,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Video,
  MapPin,
  UserCheck,
  Globe,
  MoreVertical,
  Archive,
  Copy,
  Sliders,
  Save,
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
  updateInterviewSchedule,
  deleteApplication,
  getCmsSettings,
  saveCmsSettings,
} from '@/lib/careersStore'

const DEPARTMENTS = careerData.departments || []

const EMPLOYMENT_TYPES = ['Full Time', 'Part Time', 'Contract', 'Visiting / Adjunct', 'Internship']

const STATUS_BADGES = {
  active: { label: '● Active', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200 font-bold' },
  draft: { label: 'Draft', bg: 'bg-amber-50 text-amber-700 border-amber-200 font-bold' },
  closed: { label: 'Closed', bg: 'bg-slate-100 text-slate-600 border-slate-200 font-bold' },
  archived: { label: 'Archived', bg: 'bg-purple-50 text-purple-700 border-purple-200 font-bold' },
}

const APP_STATUS_BADGES = {
  new: { label: 'NEW', bg: 'bg-sky-50 text-sky-800 border-sky-200 ring-1 ring-sky-300/30 font-bold', dot: 'bg-sky-500 animate-pulse' },
  reviewing: { label: 'Under Review', bg: 'bg-indigo-50 text-indigo-800 border-indigo-200 ring-1 ring-indigo-300/30', dot: 'bg-indigo-500' },
  shortlisted: { label: 'Shortlisted', bg: 'bg-emerald-50 text-emerald-800 border-emerald-200 ring-1 ring-emerald-300/30', dot: 'bg-emerald-500' },
  interviewed: { label: 'Interview Scheduled', bg: 'bg-amber-50 text-amber-800 border-amber-200 ring-1 ring-amber-300/30', dot: 'bg-amber-500' },
  selected: { label: 'Selected / Offer', bg: 'bg-emerald-100 text-emerald-950 border-emerald-300 font-bold ring-1 ring-emerald-400/40', dot: 'bg-emerald-600' },
  rejected: { label: 'Archived / Rejected', bg: 'bg-slate-100 text-slate-600 border-slate-200', dot: 'bg-slate-400' },
}

export default function CareerCms() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem('apdch_hr_auth') === 'true'
    } catch {
      return false
    }
  })
  const [authEmail, setAuthEmail] = useState('')
  const [authPassword, setAuthPassword] = useState('')
  const [authError, setAuthError] = useState('')

  // CMS Navigation Tab
  const [activeTab, setActiveTab] = useState('dashboard') // 'dashboard' | 'jobs' | 'applications' | 'settings'

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
  const [recentlyUpdatedAppIds, setRecentlyUpdatedAppIds] = useState([])

  const selectStatusFilter = (status) => {
    setRecentlyUpdatedAppIds([])
    setAppStatusFilter(status)
  }

  // Modal States
  const [editingJob, setEditingJob] = useState(null)
  const [selectedApplication, setSelectedApplication] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  // CMS Settings State
  const [cmsSettings, setCmsSettings] = useState(() => getCmsSettings())
  const [cmsSettingsForm, setCmsSettingsForm] = useState(() => getCmsSettings())

  const handleSaveSettings = (e) => {
    if (e) e.preventDefault()
    saveCmsSettings(cmsSettingsForm)
    setCmsSettings(cmsSettingsForm)
    showToast('CMS Portal Settings saved successfully!')
  }

  // Interview Schedule Modal States
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false)
  const [interviewApp, setInterviewApp] = useState(null)
  const [interviewForm, setInterviewForm] = useState({
    interviewer: '',
    date: '',
    time: '',
    mode: 'online',
    meetingUrl: '',
    location: '',
    notes: '',
  })

  const handleOpenInterviewModal = (app, e) => {
    if (e) e.stopPropagation()
    const existing = app.interviewDetails || {}
    setInterviewApp(app)
    setInterviewForm({
      interviewer: existing.interviewer || '',
      date: existing.date || (typeof existing.dateTime === 'string' ? existing.dateTime.split('T')[0] : ''),
      time: existing.time || (typeof existing.dateTime === 'string' && existing.dateTime.includes('T') ? existing.dateTime.split('T')[1] : ''),
      mode: existing.mode || 'online',
      meetingUrl: existing.meetingUrl || '',
      location: existing.location || '',
      notes: existing.notes || '',
    })
    setIsInterviewModalOpen(true)
  }

  const handleSaveInterviewSchedule = (e) => {
    e.preventDefault()
    if (!interviewApp) return

    updateInterviewSchedule(interviewApp.id, interviewForm)
    loadData()

    if (selectedApplication && selectedApplication.id === interviewApp.id) {
      setSelectedApplication((prev) => ({
        ...prev,
        status: 'interviewed',
        interviewDetails: interviewForm,
      }))
    }

    setIsInterviewModalOpen(false)
    showToast(`Interview scheduled for ${interviewApp.fullName}`)
  }

  // Load initial data
  const loadData = () => {
    try {
      setJobs(getJobPostings())
      setApplications(getApplications())
    } catch (err) {
      console.error('Failed to load CMS data:', err)
    }
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
    const emailClean = (authEmail || '').trim().toLowerCase()
    const passClean = (authPassword || '').trim()

    if (
      (emailClean === 'hr@apdch.edu.in' || emailClean === 'admin@apdch.edu.in' || emailClean === 'hr' || emailClean === 'admin') &&
      (passClean === 'apdch2026' || passClean === 'apdch@2026' || passClean === 'admin')
    ) {
      try {
        sessionStorage.setItem('apdch_hr_auth', 'true')
      } catch {
        // Fallback
      }
      setIsAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('Invalid credentials. Please enter official HR email and password.')
    }
  }

  const handleLogout = () => {
    try {
      sessionStorage.removeItem('apdch_hr_auth')
    } catch {
      // Fallback
    }
    setIsAuthenticated(false)
  }

  // Job Actions
  const handleOpenCreateModal = () => {
    setEditingJob({
      jobRefNo: '',
      title: '',
      department: DEPARTMENTS[0] || '',
      positionLevel: '',
      employmentType: 'Full Time',
      experience: '',
      qualification: '',
      vacancies: 1,
      location: '',
      salary: '',
      deadline: '',
      status: 'active',
      featured: false,
      description: '',
      responsibilities: [],
      requirements: [],
    })
    setActiveTab('edit-job')
  }

  const handleOpenEditModal = (job) => {
    setEditingJob({
      ...job,
      responsibilities: job.responsibilities || [],
      requirements: job.requirements || [],
    })
    setActiveTab('edit-job')
  }

  const handleSaveJob = (e) => {
    e.preventDefault()
    if (!editingJob.title.trim()) {
      alert('Please enter a job title.')
      return
    }

    saveJobPosting(editingJob)
    loadData()
    setActiveTab('jobs')
    setEditingJob(null)
    showToast(editingJob.id ? 'Job Opening updated successfully!' : 'New Job Opening published successfully!')
  }

  const [openOverflowId, setOpenOverflowId] = useState(null)

  const handleDeleteJob = (id, title) => {
    setOpenOverflowId(null)
    const jobApps = applications.filter((a) => a.jobId === id)
    if (jobApps.length > 0) {
      const confirmArchive = window.confirm(
        `Delete "${title}"?\n\nThis vacancy already has ${jobApps.length} candidate application(s).\n\nTo prevent losing recruitment history, click OK to ARCHIVE this opening instead.\nClick CANCEL to exit.`
      )
      if (confirmArchive) {
        toggleJobStatus(id, 'archived')
        loadData()
        showToast(`Vacancy "${title}" archived to preserve candidate submissions.`)
      }
      return
    }

    if (window.confirm(`Delete this job opening?\n\n"${title}" will be removed from the careers portal.`)) {
      deleteJobPosting(id)
      loadData()
      showToast('Job opening deleted.')
    }
  }

  const handleArchiveJob = (id, title) => {
    setOpenOverflowId(null)
    toggleJobStatus(id, 'archived')
    loadData()
    showToast(`Vacancy "${title}" archived.`)
  }

  const handleDuplicateJob = (id, title) => {
    setOpenOverflowId(null)
    duplicateJobPosting(id)
    loadData()
    showToast(`Duplicated "${title}" as draft vacancy.`)
  }

  const handleToggleStatus = (id, currentStatus) => {
    const nextStatus = currentStatus === 'active' ? 'closed' : 'active'
    toggleJobStatus(id, nextStatus)
    loadData()
    showToast(`Vacancy status changed to ${nextStatus === 'active' ? 'ACTIVE' : 'DEACTIVATED'}`)
  }



  // Application Actions
  const handleUpdateAppStatus = (appId, newStatus) => {
    if (newStatus === 'interviewed') {
      const targetApp = applications.find((a) => a.id === appId) || selectedApplication
      if (targetApp) {
        handleOpenInterviewModal(targetApp)
        return
      }
    }
    const result = updateApplicationStatus(appId, newStatus)
    loadData()
    setRecentlyUpdatedAppIds((prev) => [...new Set([...prev, appId])])

    if (selectedApplication && selectedApplication.id === appId) {
      setSelectedApplication((prev) => ({ ...prev, status: newStatus }))
    }
    const statusLabel = APP_STATUS_BADGES[newStatus]?.label || newStatus
    const meta = result?.meta || {}

    if (meta.vacancyChanged) {
      if (meta.jobClosed) {
        showToast(`Candidate Selected! Job vacancy count reached 0. Position is now marked CLOSED.`)
      } else if (newStatus === 'selected') {
        showToast(`Candidate Selected! Vacancies automatically updated to ${meta.remainingVacancies}.`)
      } else {
        showToast(`Status updated to "${statusLabel}". Vacancies restored to ${meta.remainingVacancies}.`)
      }
    } else {
      showToast(`Status updated to "${statusLabel}". Saved successfully.`)
    }
  }

  const handleSaveAppNotes = (appId, notes) => {
    updateApplicationStatus(appId, selectedApplication.status, notes)
    loadData()
    showToast('HR remarks saved.')
  }

  const handleViewApplication = (app) => {
    setSelectedApplication(app)
    setActiveTab('view-application')
  }

  const handleDeleteApp = (appId) => {
    if (window.confirm('Are you sure you want to remove this application record?')) {
      deleteApplication(appId)
      loadData()
      setSelectedApplication(null)
      setActiveTab('applications')
      showToast('Application deleted.')
    }
  }

  const handleViewResume = (app, e) => {
    if (e) e.stopPropagation()

    if (app.resumeDataUrl) {
      try {
        if (app.resumeDataUrl.startsWith('data:')) {
          const parts = app.resumeDataUrl.split(',')
          const mimeMatch = parts[0].match(/:(.*?);/)
          const mime = mimeMatch ? mimeMatch[1] : 'application/pdf'
          const bstr = atob(parts[1])
          let n = bstr.length
          const u8arr = new Uint8Array(n)
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
          }
          const blob = new Blob([u8arr], { type: mime })
          const blobUrl = URL.createObjectURL(blob)
          const newTab = window.open(blobUrl, '_blank')
          if (!newTab) {
            alert('Please allow popups to view the resume document in a new tab.')
          }
          return
        } else {
          window.open(app.resumeDataUrl, '_blank')
          return
        }
      } catch (err) {
        console.error('Error opening resume data URL:', err)
      }
    }

    // Fallback: Open formatted Candidate Resume / Application Document in a new tab
    const htmlDocument = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Resume - ${app.fullName || 'Candidate'}</title>
        <style>
          body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f8fafc; color: #0f172a; padding: 40px 20px; line-height: 1.6; }
          .container { max-width: 800px; margin: 0 auto; background: #ffffff; padding: 48px; border-radius: 24px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .header { border-bottom: 2px solid #800020; padding-bottom: 24px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: flex-start; }
          .title { font-size: 28px; font-weight: 800; color: #800020; margin: 0; }
          .subtitle { font-size: 14px; font-weight: 600; color: #64748b; margin-top: 4px; }
          .badge { background: #fff1f2; color: #800020; padding: 6px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; border: 1px solid #fecdd3; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 32px; }
          .info-item { background: #f8fafc; padding: 16px; border-radius: 16px; border: 1px solid #f1f5f9; }
          .info-label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
          .info-value { font-size: 14px; font-weight: 600; color: #0f172a; }
          .section { margin-bottom: 32px; }
          .section-title { font-size: 16px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 16px; }
          .cover-note { background: #fffdfa; border-left: 4px solid #f59e0b; padding: 20px; border-radius: 12px; font-size: 14px; color: #334155; white-space: pre-wrap; }
          .footer { text-align: center; margin-top: 48px; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 24px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div>
              <h1 class="title">${app.fullName || 'Candidate Name'}</h1>
              <div class="subtitle">Applied Position: <strong>${app.jobTitle || 'Faculty Opening'}</strong></div>
            </div>
            <div class="badge">APDCH HR Document</div>
          </div>

          <div class="grid">
            <div class="info-item">
              <div class="info-label">Official Email</div>
              <div class="info-value">${app.email || 'N/A'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Contact Number</div>
              <div class="info-value">${app.phone || 'N/A'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Highest Qualification</div>
              <div class="info-value">${app.qualification || 'Not Specified'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Years of Experience</div>
              <div class="info-value">${app.experience || 'Not Specified'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Department / Specialty</div>
              <div class="info-value">${app.department || 'APDCH Dental College'}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Application Date</div>
              <div class="info-value">${app.appliedDate || 'Recent'}</div>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Candidate Statement / Cover Note</div>
            <div class="cover-note">${app.message || 'No additional cover statement provided.'}</div>
          </div>

          <div class="section">
            <div class="section-title">Internal HR Pipeline Status</div>
            <div class="info-item">
              <div class="info-label">Current Pipeline Status</div>
              <div class="info-value" style="color:#800020;">${(app.status || 'NEW').toUpperCase()}</div>
            </div>
            ${app.hrNotes ? `
              <div class="info-item" style="margin-top:12px;">
                <div class="info-label">HR Review Remarks</div>
                <div class="info-value">${app.hrNotes}</div>
              </div>
            ` : ''}
          </div>

          <div class="footer">
            Adhiparasakthi Dental College &amp; Hospital — Directorate of Human Resources
          </div>
        </div>
      </body>
      </html>
    `

    const htmlBlob = new Blob([htmlDocument], { type: 'text/html;charset=utf-8' })
    const htmlUrl = URL.createObjectURL(htmlBlob)
    const newTab = window.open(htmlUrl, '_blank')
    if (!newTab) {
      alert('Please allow popups to view the resume document in a new tab.')
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
    const matchesStatus =
      appStatusFilter === 'all' ||
      app.status === appStatusFilter ||
      recentlyUpdatedAppIds.includes(app.id)
    const matchesJob = appJobFilter === 'all' || app.jobId === appJobFilter
    return matchesSearch && matchesStatus && matchesJob
  })

  const activeJobsCount = jobs.filter((j) => j.status === 'active').length



  // Unique IDs for accessibility
  const titleId = useId()
  const deptId = useId()
  const posId = useId()
  const typeId = useId()
  const expId = useId()
  const qualId = useId()
  const vacId = useId()
  const salId = useId()
  const deadId = useId()
  const statId = useId()
  const descId = useId()
  const refId = useId()

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
                Email
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
                Password
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
    <div className="flex min-h-screen bg-[#faf7f8] text-foreground">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-foreground px-4 py-3 text-xs font-semibold text-white shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ====================================================================
          LEFT SIDEBAR NAVIGATION (Matching Reference Screenshot)
          ==================================================================== */}
      <aside className="hidden md:flex w-64 shrink-0 flex-col justify-between border-r border-primary/10 bg-white p-5 sticky top-0 h-screen overflow-y-auto">
        <div className="space-y-6">
          {/* Logo & Brand Header */}
          <div className="flex items-center gap-3 border-b border-border/60 pb-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-primary/10 p-1.5 ring-1 ring-primary/20 shadow-sm">
              <img
                src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png"
                alt="APDCH Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <h2 className="font-display text-sm font-bold text-foreground">APDCH CMS</h2>
              <p className="text-[11px] font-semibold text-primary">HR Directorate Portal</p>
            </div>
          </div>

          {/* MENU SECTION */}
          <div className="space-y-1">
            <span className="block px-3.5 text-[10px] font-bold uppercase tracking-wider text-muted/70">
              MENU
            </span>

            <button
              type="button"
              onClick={() => setActiveTab('dashboard')}
              className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-muted hover:bg-slate-50 hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('jobs')}
              className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                activeTab === 'jobs'
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-muted hover:bg-slate-50 hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Briefcase className="h-4 w-4" />
                <span>Job Vacancies</span>
              </div>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-extrabold text-primary">
                {activeJobsCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('applications')}
              className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-xs font-bold transition-all ${
                activeTab === 'applications'
                  ? 'bg-primary/10 text-primary shadow-sm'
                  : 'text-muted hover:bg-slate-50 hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="h-4 w-4" />
                <span>Applicants</span>
              </div>
              <span className="rounded-full bg-sky-100 px-2 py-0.5 text-[10px] font-extrabold text-sky-800">
                {applications.length}
              </span>
            </button>
          </div>

          {/* QUICK ACCESS SECTION */}
          <div className="space-y-1 pt-2 border-t border-border/60">
            <span className="block px-3.5 text-[10px] font-bold uppercase tracking-wider text-muted/70">
              QUICK ACCESS
            </span>

            <button
              type="button"
              onClick={() => {
                setAppStatusFilter('reviewing')
                setActiveTab('applications')
              }}
              className="flex w-full items-center justify-between rounded-2xl px-3.5 py-2 text-xs font-semibold text-muted hover:bg-slate-50 hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Hourglass className="h-4 w-4 text-amber-500" />
                <span>Pending Review</span>
              </div>
              <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200">
                {applications.filter((a) => a.status === 'reviewing').length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAppStatusFilter('shortlisted')
                setActiveTab('applications')
              }}
              className="flex w-full items-center justify-between rounded-2xl px-3.5 py-2 text-xs font-semibold text-muted hover:bg-slate-50 hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Star className="h-4 w-4 text-emerald-500" />
                <span>Shortlisted</span>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-200">
                {applications.filter((a) => a.status === 'shortlisted').length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAppStatusFilter('selected')
                setActiveTab('applications')
              }}
              className="flex w-full items-center justify-between rounded-2xl px-3.5 py-2 text-xs font-semibold text-muted hover:bg-slate-50 hover:text-foreground transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span>Selected</span>
              </div>
              <span className="rounded-full bg-green-50 px-2 py-0.5 text-[10px] font-bold text-green-700 border border-green-200">
                {applications.filter((a) => a.status === 'selected').length}
              </span>
            </button>

            {/* CMS Settings Button */}
            <button
              type="button"
              onClick={() => setActiveTab('settings')}
              className={`flex w-full items-center justify-between rounded-2xl px-3.5 py-2 text-xs font-semibold transition-all mt-2 ${
                activeTab === 'settings'
                  ? 'bg-primary/10 text-primary shadow-sm font-bold'
                  : 'text-muted hover:bg-slate-50 hover:text-foreground'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Sliders className="h-4 w-4 text-slate-500" />
                <span>CMS Settings</span>
              </div>
            </button>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="border-t border-border/60 pt-4">
          <div className="flex items-center justify-between rounded-2xl bg-[#faf7f8] p-3 border border-border/70">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#590016] text-xs font-bold text-white shadow-sm">
                HR
              </div>
              <div className="truncate">
                <span className="block text-xs font-bold text-foreground">HR Admin</span>
                <span className="block text-[10px] text-muted truncate">hr@apdch.edu.in</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              title="Logout"
              className="rounded-lg p-1.5 text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* ====================================================================
          RIGHT MAIN CONTENT CONTAINER
          ==================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Navbar */}
        <div className="flex items-center justify-between border-b border-primary/10 bg-white p-4 md:hidden">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 p-1">
              <img src="/f0229f1b-ddbb-46f5-ad40-c13d2676e8b2.png" alt="APDCH" className="h-full w-full object-contain" />
            </div>
            <span className="font-display text-sm font-bold">APDCH Portal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${activeTab === 'dashboard' ? 'bg-primary text-white' : 'bg-slate-100 text-muted'}`}
            >
              Dash
            </button>
            <button
              onClick={() => setActiveTab('jobs')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${activeTab === 'jobs' ? 'bg-primary text-white' : 'bg-slate-100 text-muted'}`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab('applications')}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${activeTab === 'applications' ? 'bg-primary text-white' : 'bg-slate-100 text-muted'}`}
            >
              Apps
            </button>
            <button onClick={handleLogout} className="text-rose-600 p-1">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 hidden md:flex items-center justify-between border-b border-primary/10 bg-white/95 px-8 py-5 backdrop-blur-md">
          <div>
            <h1 className="font-display text-2xl font-bold tracking-tight text-foreground capitalize">
              {activeTab === 'dashboard'
                ? 'Dashboard'
                : activeTab === 'jobs'
                ? 'Job Vacancies'
                : activeTab === 'applications'
                ? 'Applicants Inbox'
                : 'Settings & Backup'}
            </h1>
            <p className="text-xs text-muted">
              {activeTab === 'dashboard'
                ? 'Career portal overview'
                : activeTab === 'jobs'
                ? 'Manage active, draft & closed job vacancies'
                : activeTab === 'applications'
                ? 'Review & process candidate submissions'
                : 'System configuration and database backup'}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
              <input
                type="text"
                value={activeTab === 'applications' ? appSearch : jobSearch}
                onChange={(e) => {
                  if (activeTab === 'applications') setAppSearch(e.target.value)
                  else setJobSearch(e.target.value)
                }}
                placeholder="Search anything..."
                className="w-56 lg:w-72 rounded-2xl border border-primary/15 bg-[#faf7f8] py-2 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <Link
              to="/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors shadow-sm"
              title="View live APDCH Public Careers Page"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Live</span>
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-5 md:p-8 space-y-8 overflow-y-auto">
          {/* TAB 0: DASHBOARD OVERVIEW (EXECUTIVE BEAUTIFUL DESIGN) */}
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              {/* EXECUTIVE HERO WELCOME CARD */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#800020] via-[#590016] to-[#3a000e] p-6 sm:p-8 text-white shadow-brand-lg">
                <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute left-1/3 -bottom-10 h-40 w-40 rounded-full bg-amber-500/10 blur-2xl" />

                <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white/90 backdrop-blur-md border border-white/20">
                      <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                      <span>APDCH HR Directorate Portal</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
                      Faculty &amp; Staff Recruitment Dashboard
                    </h2>
                    <p className="text-xs sm:text-sm text-white/80 max-w-xl leading-relaxed">
                      Publish vacancy announcements, manage applicant portfolios, and evaluate dental specialty submissions seamlessly.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Button
                      onClick={handleOpenCreateModal}
                      className="gap-2 rounded-2xl bg-white text-primary hover:bg-white/90 font-bold text-xs py-3 px-5 shadow-lg transition-transform active:scale-95"
                    >
                      <Plus className="h-4 w-4" />
                      <span>Post New Position</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* 4 BEAUTIFUL GRADIENT KPI CARDS */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {/* Card 1: Active Positions */}
                <div className="group rounded-3xl border border-primary/20 bg-gradient-to-br from-[#fff5f7] via-white to-[#fff0f3] p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-button group-hover:scale-105 transition-transform">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-2.5 py-1 text-[10px] font-extrabold text-emerald-800 border border-emerald-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-4xl font-extrabold text-foreground">
                      {activeJobsCount}
                    </div>
                    <p className="mt-1 text-xs font-bold text-muted">Active Vacancies</p>
                  </div>
                </div>

                {/* Card 2: Interviews Scheduled (Replaced Total Postings) */}
                <div
                  onClick={() => {
                    setAppStatusFilter('interviewed')
                    setActiveTab('applications')
                  }}
                  className="group cursor-pointer rounded-3xl border border-purple-200/80 bg-gradient-to-br from-purple-50/80 via-white to-indigo-50/40 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 text-white shadow-sm group-hover:scale-105 transition-transform">
                      <UserCheck className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-purple-100/80 px-2.5 py-1 text-[10px] font-bold text-purple-800 border border-purple-200">
                      Scheduled
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-4xl font-extrabold text-foreground">
                      {applications.filter((a) => a.status === 'interviewed').length}
                    </div>
                    <p className="mt-1 text-xs font-bold text-muted">Interviews Scheduled</p>
                  </div>
                </div>

                {/* Card 3: Total Applicants */}
                <div
                  onClick={() => {
                    setAppStatusFilter('all')
                    setActiveTab('applications')
                  }}
                  className="group cursor-pointer rounded-3xl border border-sky-200/80 bg-gradient-to-br from-sky-50/80 via-white to-blue-50/40 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                      <Users className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-sky-100/80 px-2.5 py-1 text-[10px] font-bold text-sky-800 border border-sky-200">
                      <TrendingUp className="h-3 w-3" />
                      Inbox
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-4xl font-extrabold text-foreground">
                      {applications.length}
                    </div>
                    <p className="mt-1 text-xs font-bold text-muted">Total Applicants</p>
                  </div>
                </div>

                {/* Card 4: New Applications (Fixed Logic & Wording) */}
                <div
                  onClick={() => {
                    setAppStatusFilter('new')
                    setActiveTab('applications')
                  }}
                  className="group cursor-pointer rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-emerald-100/80 px-2.5 py-1 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                      Unread
                    </span>
                  </div>
                  <div className="mt-5">
                    <div className="font-display text-4xl font-extrabold text-foreground">
                      {applications.filter((a) => a.status === 'new').length}
                    </div>
                    <p className="mt-1 text-xs font-bold text-muted">New Applications</p>
                  </div>
                </div>
              </div>

              {/* RECRUITMENT PIPELINE PROGRESS BAR */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Layers className="h-4 w-4" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-foreground">Recruitment Funnel Breakdown</h3>
                  </div>
                  <span className="text-xs font-semibold text-muted">{applications.length} Total Submissions</span>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-5 text-center">
                  <button
                    type="button"
                    onClick={() => {
                      setAppStatusFilter('new')
                      setActiveTab('applications')
                    }}
                    className="rounded-2xl bg-slate-50 p-3.5 border border-slate-200/70 hover:bg-sky-50 hover:border-sky-300 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-sky-800">Applied (New)</span>
                    <span className="block mt-1 font-display text-xl font-bold text-sky-700">
                      {applications.filter((a) => a.status === 'new').length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAppStatusFilter('reviewing')
                      setActiveTab('applications')
                    }}
                    className="rounded-2xl bg-amber-50/70 p-3.5 border border-amber-200/60 hover:bg-amber-100/80 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-amber-800">Under Review</span>
                    <span className="block mt-1 font-display text-xl font-bold text-amber-700">
                      {applications.filter((a) => a.status === 'reviewing').length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAppStatusFilter('shortlisted')
                      setActiveTab('applications')
                    }}
                    className="rounded-2xl bg-purple-50/70 p-3.5 border border-purple-200/60 hover:bg-purple-100/80 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-purple-800">Shortlisted</span>
                    <span className="block mt-1 font-display text-xl font-bold text-purple-700">
                      {applications.filter((a) => a.status === 'shortlisted').length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAppStatusFilter('interviewed')
                      setActiveTab('applications')
                    }}
                    className="rounded-2xl bg-blue-50/70 p-3.5 border border-blue-200/60 hover:bg-blue-100/80 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-800">Interview Scheduled</span>
                    <span className="block mt-1 font-display text-xl font-bold text-blue-700">
                      {applications.filter((a) => a.status === 'interviewed').length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setAppStatusFilter('selected')
                      setActiveTab('applications')
                    }}
                    className="rounded-2xl bg-emerald-50/70 p-3.5 border border-emerald-200/60 hover:bg-emerald-100/80 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-800">Selected / Hired</span>
                    <span className="block mt-1 font-display text-xl font-bold text-emerald-700">
                      {applications.filter((a) => a.status === 'selected').length}
                    </span>
                  </button>
                </div>
              </div>

              {/* SPLIT 2-COLUMN SECTION: RECENT APPLICATIONS & OPEN POSITIONS */}
              <div className="grid gap-6 lg:grid-cols-12">
                {/* Left Card: Recent Applications */}
                <div className="lg:col-span-7 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Users className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-base font-bold text-foreground">Recent Candidate Submissions</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('applications')}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        <span>View All Inbox</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {applications.length === 0 ? (
                        <div className="p-8 text-center text-xs text-muted">No applications submitted yet.</div>
                      ) : (
                        applications.slice(0, 5).map((app) => {
                          const statusInfo = APP_STATUS_BADGES[app.status] || APP_STATUS_BADGES.new
                          const initials = (app.fullName || 'Candidate')
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .toUpperCase()
                            .slice(0, 2)

                          return (
                            <div
                              key={app.id}
                              onClick={() => handleViewApplication(app)}
                              className="group flex cursor-pointer flex-col gap-2.5 rounded-2xl bg-[#faf7f8] p-4 transition-all hover:bg-primary/5 border border-border/50 hover:border-primary/25 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#590016] text-xs font-extrabold text-white shadow-sm group-hover:scale-105 transition-transform">
                                    {initials}
                                  </div>
                                  <div className="min-w-0">
                                    <span className="block text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                      {app.fullName}
                                    </span>
                                    <span className="block text-[11px] font-medium text-muted truncate">
                                      {app.jobTitle || 'Faculty Opening'}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex flex-wrap items-center justify-between pt-2 border-t border-border/40 text-[11px]">
                                <span className="font-semibold text-muted">
                                  Applied: <strong className="text-foreground">{app.appliedDate || 'Recent'}</strong>
                                </span>

                                <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-extrabold uppercase ${statusInfo.bg}`}>
                                  {statusInfo.label}
                                </span>
                              </div>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Card: Open Positions */}
                <div className="lg:col-span-5 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                          <Briefcase className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-base font-bold text-foreground">Active Vacancies</h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTab('jobs')}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-800 hover:bg-amber-100 transition-colors"
                      >
                        <span>Manage All</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    <div className="mt-4 space-y-3">
                      {jobs.filter((j) => j.status === 'active').length === 0 ? (
                        <div className="p-8 text-center text-xs text-muted">No active positions currently.</div>
                      ) : (
                        jobs.filter((j) => j.status === 'active').slice(0, 5).map((job) => {
                          const applicantCount = applications.filter((a) => a.jobId === job.id).length
                          return (
                            <div
                              key={job.id}
                              onClick={() => setActiveTab('jobs')}
                              className="group flex cursor-pointer items-center justify-between rounded-2xl bg-[#faf7f8] p-3.5 transition-all hover:bg-primary/5 border border-border/50 hover:border-primary/25 shadow-sm hover:-translate-y-0.5"
                            >
                              <div className="truncate pr-2">
                                <span className="block text-xs font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                  {job.title}
                                </span>
                                <span className="block text-[11px] text-muted truncate">
                                  {job.department}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <span className="rounded-xl bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary border border-primary/15">
                                  {applicantCount} {applicantCount === 1 ? 'Applicant' : 'Applicants'}
                                </span>
                              </div>
                            </div>
                          )
                        })
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        {/* ------------------------------------------------------------------
            TAB 1: JOB POSTINGS MANAGEMENT
            ------------------------------------------------------------------ */}
        {activeTab === 'jobs' && (
          <div className="space-y-6">
            {/* Toolbar */}
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/15 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search */}
                <div className="relative min-w-[220px] flex-1 sm:max-w-xs">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={jobSearch}
                    onChange={(e) => setJobSearch(e.target.value)}
                    placeholder="Search job title or department..."
                    className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={jobStatusFilter}
                  onChange={(e) => setJobStatusFilter(e.target.value)}
                  className="rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm cursor-pointer"
                >
                  <option value="all">All Statuses ▾</option>
                  <option value="active">Active Only</option>
                  <option value="draft">Drafts</option>
                  <option value="closed">Closed / Expired</option>
                  <option value="archived">Archived</option>
                </select>

                {/* Department Filter */}
                <select
                  value={jobDeptFilter}
                  onChange={(e) => setJobDeptFilter(e.target.value)}
                  className="max-w-[200px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
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
                className="gap-2 rounded-2xl bg-primary px-4 py-2.5 text-xs font-bold text-white shadow-brand-button hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                <span>Create Job Opening</span>
              </Button>
            </div>

            {/* Job Openings Cards List */}
            {filteredJobs.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-primary/20 bg-white p-12 text-center shadow-sm">
                <Briefcase className="mx-auto h-12 w-12 text-muted/40" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">No Job Openings Found</h3>
                <p className="mt-1 text-xs text-muted">Try adjusting your filters or create a new job opening.</p>
                <Button onClick={handleOpenCreateModal} className="mt-5 gap-2 rounded-2xl bg-primary text-white text-xs font-bold py-2.5 px-4">
                  <Plus className="h-4 w-4" /> Post Job Opening
                </Button>
              </div>
            ) : (
              <div className="grid gap-5">
                {filteredJobs.map((job) => {
                  const isExpired = job.deadline && new Date(job.deadline) < new Date().setHours(0,0,0,0)
                  const effectiveStatus = isExpired ? 'closed' : job.status
                  const statusInfo = STATUS_BADGES[effectiveStatus] || STATUS_BADGES.active
                  const appCount = applications.filter((a) => a.jobId === job.id).length

                  return (
                    <div
                      key={job.id}
                      className="group relative flex flex-col justify-between gap-5 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center"
                    >
                      <div className="min-w-0 flex-1 space-y-3">
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span
                            className={`inline-flex items-center rounded-full border px-3 py-0.5 text-[11px] font-bold ${statusInfo.bg}`}
                          >
                            {statusInfo.label}
                          </span>
                          {job.vacancies > 0 && (
                            <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-extrabold text-primary">
                              {job.vacancies} {job.vacancies === 1 ? 'Opening' : 'Openings'}
                            </span>
                          )}
                          {job.jobRefNo && (
                            <span className="rounded-full bg-slate-100 px-3 py-0.5 text-[11px] font-bold text-slate-700 border border-slate-200">
                              Ref: {job.jobRefNo}
                            </span>
                          )}
                          <span className="text-xs text-muted">
                            Posted: {job.postedDate || 'Recent'}
                          </span>
                        </div>

                        <h3 className="font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                          {job.title}
                        </h3>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
                          <span className="flex items-center gap-1.5 font-bold text-foreground">
                            <Building className="h-4 w-4 text-primary" />
                            {job.department}
                          </span>
                          {job.deadline && (
                            <span className={`flex items-center gap-1.5 font-bold px-2.5 py-0.5 rounded-md border ${
                              isExpired
                                ? 'text-rose-700 bg-rose-50 border-rose-200'
                                : 'text-amber-700 bg-amber-50 border-amber-200'
                            }`}>
                              <Calendar className="h-3.5 w-3.5" />
                              Deadline: {job.deadline} {isExpired && '(Passed)'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Actions Bar */}
                      <div className="flex flex-wrap items-center gap-2.5 border-t border-border/60 pt-4 md:border-t-0 md:pt-0 shrink-0">
                        {/* Applicants Badge Button (Clickable if > 0) */}
                        {appCount > 0 ? (
                          <button
                            type="button"
                            onClick={() => {
                              setAppJobFilter(job.id)
                              setActiveTab('applications')
                            }}
                            className="inline-flex items-center gap-1.5 rounded-2xl border border-primary/20 bg-primary/10 px-3.5 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
                            title="Click to view candidate applications for this position"
                          >
                            <Users className="h-4 w-4" />
                            <span>{appCount} {appCount === 1 ? 'Applicant' : 'Applicants'}</span>
                          </button>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-400 cursor-not-allowed">
                            <Users className="h-4 w-4" />
                            <span>0 Applicants</span>
                          </span>
                        )}



                        {/* Edit */}
                        <button
                          type="button"
                          onClick={() => handleOpenEditModal(job)}
                          title="Edit Job Opening"
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-border bg-white px-3.5 py-2 text-xs font-bold text-foreground hover:bg-slate-50 transition-colors shadow-sm"
                        >
                          <Edit3 className="h-3.5 w-3.5 text-muted" />
                          <span>Edit</span>
                        </button>

                        {/* Activate / Deactivate Button */}
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(job.id, job.status)}
                          className={`inline-flex items-center gap-1.5 rounded-2xl border px-3.5 py-2 text-xs font-bold transition-colors shadow-sm ${
                            job.status === 'active'
                              ? 'border-rose-200 bg-rose-50/70 text-rose-700 hover:bg-rose-100'
                              : 'border-emerald-200 bg-emerald-50/70 text-emerald-700 hover:bg-emerald-100'
                          }`}
                        >
                          <span>{job.status === 'active' ? 'Deactivate' : 'Activate'}</span>
                        </button>

                        {/* Overflow Options ⋮ Menu */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              setOpenOverflowId(openOverflowId === job.id ? null : job.id)
                            }}
                            className="rounded-2xl border border-border bg-slate-50 p-2 text-muted hover:bg-slate-100 hover:text-foreground transition-colors"
                            title="More options"
                          >
                            <MoreVertical className="h-4 w-4" />
                          </button>

                          {openOverflowId === job.id && (
                            <div
                              className="absolute right-0 top-11 z-30 w-48 rounded-2xl border border-primary/15 bg-white p-1.5 shadow-xl animate-in fade-in zoom-in-95"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <button
                                type="button"
                                onClick={() => handleDuplicateJob(job.id, job.title)}
                                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                <Copy className="h-3.5 w-3.5 text-muted" />
                                <span>Duplicate Vacancy</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => handleArchiveJob(job.id, job.title)}
                                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
                              >
                                <Archive className="h-3.5 w-3.5 text-purple-600" />
                                <span>Archive Vacancy</span>
                              </button>

                              <button
                                type="button"
                                onClick={() => handleDeleteJob(job.id, job.title)}
                                className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors border-t border-border/50 mt-1 pt-2"
                              >
                                <Trash2 className="h-3.5 w-3.5 text-rose-600" />
                                <span>Delete Job Opening</span>
                              </button>
                            </div>
                          )}
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
            TAB 2: CANDIDATE APPLICATIONS INBOX
            ------------------------------------------------------------------ */}
        {activeTab === 'applications' && (
          <div className="space-y-6">
            {/* Quick Status Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
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
                    onClick={() => selectStatusFilter(tab.id)}
                    className={`flex shrink-0 items-center gap-2.5 rounded-2xl px-4 py-2.5 text-xs font-bold transition-all border ${
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
            <div className="flex flex-col gap-4 rounded-3xl border border-primary/15 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-wrap items-center gap-3">
                {/* Search Input */}
                <div className="relative min-w-[240px] flex-1">
                  <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
                  <input
                    type="text"
                    value={appSearch}
                    onChange={(e) => setAppSearch(e.target.value)}
                    placeholder="Search candidate name, email, phone..."
                    className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                  />
                </div>

                {/* Job Position Filter */}
                <div className="relative">
                  <select
                    value={appJobFilter}
                    onChange={(e) => setAppJobFilter(e.target.value)}
                    className="max-w-[240px] truncate rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
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
                className="gap-2 rounded-2xl border-primary/20 bg-white py-2.5 px-4 text-xs font-bold text-primary shadow-sm hover:bg-primary/5 hover:text-primary shrink-0"
              >
                <Download className="h-4 w-4 text-primary" />
                <span>Export Applications (CSV)</span>
              </Button>
            </div>

            {/* Applications Data Table matching reference screenshot */}
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
              <div className="rounded-3xl border border-primary/15 bg-white shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-border/70 bg-[#faf7f8] text-[11px] font-bold uppercase tracking-wider text-muted">
                        <th className="py-4 px-6">Applicant</th>
                        <th className="py-4 px-6">Applied For</th>
                        <th className="py-4 px-6">Experience</th>
                        <th className="py-4 px-6">Applied On</th>
                        <th className="py-4 px-6">Status</th>
                        <th className="py-4 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {filteredApplications.map((app, index) => {
                        const initials = (app.fullName || 'Candidate')
                          .split(' ')
                          .map((n) => n[0])
                          .join('')
                          .toUpperCase()
                          .slice(0, 2)

                        const avatarColors = [
                          'bg-emerald-600',
                          'bg-teal-600',
                          'bg-rose-600',
                          'bg-sky-600',
                          'bg-amber-600',
                          'bg-purple-600',
                          'bg-indigo-600',
                          'bg-blue-600',
                        ]
                        const avatarBg = avatarColors[index % avatarColors.length]

                        const statusPillStyles = {
                          new: 'bg-sky-100 text-sky-800 border-sky-200',
                          reviewing: 'bg-amber-100 text-amber-800 border-amber-200',
                          shortlisted: 'bg-emerald-100 text-emerald-800 border-emerald-200',
                          interviewed: 'bg-purple-100 text-purple-800 border-purple-200',
                          selected: 'bg-green-100 text-green-800 border-green-200',
                          rejected: 'bg-slate-200 text-slate-700 border-slate-300',
                        }
                        const currentPillStyle = statusPillStyles[app.status || 'new'] || statusPillStyles.new

                        return (
                          <tr
                            key={app.id}
                            onClick={() => handleViewApplication(app)}
                            className="hover:bg-primary/5 cursor-pointer transition-colors"
                          >
                            {/* APPLICANT */}
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${avatarBg} text-xs font-bold text-white shadow-sm`}>
                                  {initials}
                                </div>
                                <div>
                                  <span className="block font-bold text-foreground text-xs sm:text-sm hover:text-primary transition-colors">
                                    {app.fullName}
                                  </span>
                                  <span className="block text-[11px] text-muted">{app.email}</span>
                                </div>
                              </div>
                            </td>

                            {/* APPLIED FOR */}
                            <td className="py-4 px-6">
                              <span className="block font-bold text-foreground truncate max-w-[200px]">
                                {app.jobTitle || 'Faculty Position'}
                              </span>
                              <span className="block text-[11px] font-medium text-muted truncate max-w-[200px]">
                                {app.department || 'Dental Specialty'}
                              </span>
                            </td>

                            {/* EXPERIENCE */}
                            <td className="py-4 px-6 font-semibold text-foreground">
                              {app.experience || 'Fresh'}
                            </td>

                            {/* APPLIED ON */}
                            <td className="py-4 px-6 font-medium text-muted">
                              {app.appliedDate || 'Recent'}
                            </td>

                            {/* STATUS */}
                            <td className="py-4 px-6">
                              <select
                                value={app.status || 'new'}
                                onChange={(e) => {
                                  e.stopPropagation()
                                  handleUpdateAppStatus(app.id, e.target.value)
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className={`rounded-2xl border px-3 py-1.5 text-xs font-bold ${currentPillStyle} focus:outline-none focus:ring-1 focus:ring-primary shadow-sm cursor-pointer`}
                              >
                                <option value="new">Applied</option>
                                <option value="reviewing">Under Review</option>
                                <option value="shortlisted">Shortlisted</option>
                                <option value="interviewed">Interview Scheduled</option>
                                <option value="selected">Selected</option>
                                <option value="rejected">Archived</option>
                              </select>
                            </td>

                            {/* ACTIONS */}
                            <td className="py-4 px-6 text-right">
                              <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                                <button
                                  type="button"
                                  onClick={() => handleViewApplication(app)}
                                  className="inline-flex items-center gap-1 rounded-xl border border-border bg-slate-50 px-3 py-1.5 text-xs font-bold text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
                                >
                                  <span>View</span>
                                  <ChevronRight className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------
            TAB 3: CMS PORTAL SETTINGS (CLEAN 3-CARD LAYOUT)
            ------------------------------------------------------------------ */}
        {activeTab === 'settings' && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* Page Header */}
            <div className="border-b border-border/60 pb-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                CMS Portal Settings
              </h2>
              <p className="text-xs text-muted">
                Configure HR helpline contacts, candidate application limits, and administrator account credentials.
              </p>
            </div>

            <form onSubmit={handleSaveSettings} className="space-y-6">
              {/* Card 1: HR Contact Information */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3 text-primary border-b border-border/60 pb-3">
                  <Mail className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    HR Contact Information
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      value={cmsSettingsForm.hrEmail || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, hrEmail: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Phone
                    </label>
                    <input
                      type="text"
                      value={cmsSettingsForm.hrPhone || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, hrPhone: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Office Location
                    </label>
                    <input
                      type="text"
                      value={cmsSettingsForm.officeAddress || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, officeAddress: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2: Application Settings */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3 text-emerald-700 border-b border-border/60 pb-3">
                  <FileText className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    Application Settings
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Resume Size Limit
                    </label>
                    <select
                      value={cmsSettingsForm.maxResumeSizeMb || 10}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, maxResumeSizeMb: Number(e.target.value) })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    >
                      <option value={5}>5 MB (Standard PDF)</option>
                      <option value={10}>10 MB (Recommended)</option>
                      <option value={20}>20 MB (Large Documents)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Default Vacancy Duration
                    </label>
                    <select
                      value={cmsSettingsForm.defaultJobValidityDays || 30}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, defaultJobValidityDays: Number(e.target.value) })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    >
                      <option value={15}>15 Days</option>
                      <option value={30}>30 Days (Default)</option>
                      <option value={60}>60 Days</option>
                      <option value={90}>90 Days</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-emerald-50/70 p-4 border border-emerald-200/70 mt-2">
                  <div className="space-y-0.5">
                    <span className="block text-xs font-bold text-emerald-950">
                      Confirmation Email Toggle
                    </span>
                    <span className="block text-[11px] text-emerald-800 font-medium">
                      Automatically generate APDCH reference number and prompt candidate receipt email.
                    </span>
                  </div>
                  <input
                    type="checkbox"
                    checked={cmsSettingsForm.autoReceiptEmail ?? true}
                    onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, autoReceiptEmail: e.target.checked })}
                    className="h-5 w-5 rounded border-emerald-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Card 3: Admin Account */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-3 text-purple-700 border-b border-border/60 pb-3">
                  <Lock className="h-5 w-5" />
                  <h3 className="font-display text-base font-bold text-foreground">
                    Admin Account
                  </h3>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Admin Name
                    </label>
                    <input
                      type="text"
                      value={cmsSettingsForm.adminUsername || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, adminUsername: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      value={cmsSettingsForm.adminEmail || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, adminEmail: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Change Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={cmsSettingsForm.adminPassword || ''}
                      onChange={(e) => setCmsSettingsForm({ ...cmsSettingsForm, adminPassword: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs font-semibold text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Form Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCmsSettingsForm(cmsSettings)}
                  className="rounded-2xl border-primary/20 text-xs font-bold px-6 py-2.5 text-muted hover:bg-slate-50"
                >
                  Discard Changes
                </Button>
                <Button
                  type="submit"
                  className="rounded-2xl bg-primary text-white font-bold shadow-brand-button hover:bg-primary/90 text-xs px-6 py-2.5 gap-2"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* ------------------------------------------------------------------
            TAB: CREATE / EDIT JOB OPENING (INLINE PAGE VIEW - NO POPUP)
            ------------------------------------------------------------------ */}
        {activeTab === 'edit-job' && editingJob && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-between border-b border-border/60 pb-4">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
                  {editingJob.id ? 'Edit Job Opening' : 'Create New Job Opening'}
                </h2>
                <p className="text-xs text-muted">
                  Publish or update vacancy details on the official APDCH Careers portal.
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => setActiveTab('jobs')}
                className="gap-2 rounded-2xl border-primary/20 text-xs font-bold text-primary hover:bg-primary/5"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Job Vacancies</span>
              </Button>
            </div>

            {/* Form Container Card */}
            <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm">
              <form onSubmit={handleSaveJob} className="space-y-6">
                {/* Row 1: Title & Job Reference No */}
                <div className="grid gap-5 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label htmlFor={titleId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Job Title <span className="text-primary">*</span>
                    </label>
                    <input
                      id={titleId}
                      type="text"
                      required
                      value={editingJob.title}
                      onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                      placeholder="e.g. Professor / Reader in Prosthodontics & Crown & Bridge"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>

                  <div>
                    <label htmlFor={refId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Job Ref No. / Code
                    </label>
                    <input
                      id={refId}
                      type="text"
                      value={editingJob.jobRefNo || ''}
                      onChange={(e) => setEditingJob({ ...editingJob, jobRefNo: e.target.value })}
                      placeholder="e.g. APDCH/HR/2026/001"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Row 2: Department & Position Level */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={deptId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Department / Specialty <span className="text-primary">*</span>
                    </label>
                    <select
                      id={deptId}
                      value={editingJob.department}
                      onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
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
                    <input
                      id={posId}
                      type="text"
                      required
                      value={editingJob.positionLevel}
                      onChange={(e) => setEditingJob({ ...editingJob, positionLevel: e.target.value })}
                      placeholder="e.g. Professor / Reader / Senior Lecturer"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Row 3: Employment Type & Experience */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={typeId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Employment Type
                    </label>
                    <select
                      id={typeId}
                      value={editingJob.employmentType}
                      onChange={(e) => setEditingJob({ ...editingJob, employmentType: e.target.value })}
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
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
                    <input
                      id={expId}
                      type="text"
                      value={editingJob.experience}
                      onChange={(e) => setEditingJob({ ...editingJob, experience: e.target.value })}
                      placeholder="e.g. 5 to 10 Years / 1 to 3 Years"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Row 4: Minimum Qualification & Vacancies */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={qualId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Minimum Qualification
                    </label>
                    <input
                      id={qualId}
                      type="text"
                      value={editingJob.qualification}
                      onChange={(e) => setEditingJob({ ...editingJob, qualification: e.target.value })}
                      placeholder="e.g. MDS (Master of Dental Surgery) / BDS"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
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
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Row 5: Salary & Application Deadline */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={salId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Salary / Compensation Scale
                    </label>
                    <input
                      id={salId}
                      type="text"
                      value={editingJob.salary}
                      onChange={(e) => setEditingJob({ ...editingJob, salary: e.target.value })}
                      placeholder="As per DCI & Trust Norms"
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
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
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-semibold"
                    />
                  </div>
                </div>

                {/* Row 6: Status */}
                <div>
                  <label htmlFor={statId} className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Publishing Status
                  </label>
                  <select
                    id={statId}
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value })}
                    className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 px-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-bold text-primary"
                  >
                    <option value="active">Active (Visible on Careers Page)</option>
                    <option value="draft">Draft (Private, not published)</option>
                    <option value="closed">Closed (Archived)</option>
                  </select>
                </div>

                {/* Overview Description */}
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
                    className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] p-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-medium"
                  />
                </div>

                {/* Responsibilities & Requirements */}
                <div className="grid gap-5 sm:grid-cols-2">
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
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] p-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-medium"
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
                      className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] p-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex items-center justify-end gap-3 border-t border-border/60 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveTab('jobs')}
                    className="rounded-2xl border-primary/20 text-xs font-bold px-6 py-2.5 text-muted hover:bg-slate-50"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="rounded-2xl bg-primary text-white font-bold shadow-brand-button hover:bg-primary/90 text-xs px-6 py-2.5"
                  >
                    {editingJob.id ? 'Save & Update Job Opening' : 'Publish Job Opening'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

          {/* TAB 4: VIEW APPLICANT DETAILS (INLINE DEDICATED PAGE VIEW) */}
          {activeTab === 'view-application' && selectedApplication && (
            <div className="space-y-6">
              {/* Page Title & Back Header */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border border-primary/10 bg-white p-6 rounded-3xl shadow-sm">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('applications')}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-primary/20 bg-primary/5 px-3.5 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all shadow-sm shrink-0"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Inbox</span>
                  </button>
                  <div>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      {selectedApplication.fullName}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                      <span>Applied Position: <strong className="text-foreground">{selectedApplication.jobTitle || 'Faculty Position'}</strong></span>
                      {selectedApplication.appRefNo && (
                        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-mono font-bold text-slate-700 border border-slate-200">
                          Ref: {selectedApplication.appRefNo}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-muted">Stage:</span>
                  <select
                    value={selectedApplication.status}
                    onChange={(e) => handleUpdateAppStatus(selectedApplication.id, e.target.value)}
                    className="rounded-2xl border border-primary/20 bg-white px-4 py-2 text-xs font-bold text-primary focus:outline-none focus:ring-1 focus:ring-primary shadow-sm cursor-pointer"
                  >
                    <option value="new">Applied / New</option>
                    <option value="reviewing">Under Review</option>
                    <option value="shortlisted">Shortlisted</option>
                    <option value="interviewed">Interview Scheduled</option>
                    <option value="selected">Selected / Hired</option>
                    <option value="rejected">Archived / Rejected</option>
                  </select>
                </div>
              </div>

              {/* Application Details Card */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                {/* Contact Info Card */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Applicant Profile Details</h4>
                  <div className="grid gap-4 rounded-2xl bg-[#faf7f8] p-5 border border-border/60 sm:grid-cols-2 text-xs">
                    <div>
                      <span className="text-muted block text-[10px] uppercase font-bold">Email Address</span>
                      <a href={`mailto:${selectedApplication.email}`} className="font-semibold text-primary hover:underline flex items-center gap-1.5 mt-1 text-sm">
                        <Mail className="h-4 w-4" />
                        {selectedApplication.email}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted block text-[10px] uppercase font-bold">Phone Number</span>
                      <a href={`tel:${selectedApplication.phone}`} className="font-semibold text-primary hover:underline flex items-center gap-1.5 mt-1 text-sm">
                        <Phone className="h-4 w-4" />
                        {selectedApplication.phone}
                      </a>
                    </div>
                    <div>
                      <span className="text-muted block text-[10px] uppercase font-bold">Highest Qualification</span>
                      <span className="font-bold text-foreground mt-1 block text-xs sm:text-sm">{selectedApplication.qualification}</span>
                    </div>
                    <div>
                      <span className="text-muted block text-[10px] uppercase font-bold">Experience Level</span>
                      <span className="font-bold text-foreground mt-1 block text-xs sm:text-sm">{selectedApplication.experience}</span>
                    </div>
                    {selectedApplication.currentOrg && (
                      <div className="sm:col-span-2">
                        <span className="text-muted block text-[10px] uppercase font-bold">Current / Previous Organization</span>
                        <span className="font-bold text-foreground mt-1 block text-xs sm:text-sm">{selectedApplication.currentOrg}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Cover Message */}
                {selectedApplication.message && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Candidate Cover Statement</h4>
                    <div className="mt-2 rounded-2xl bg-[#faf7f8] p-5 text-xs leading-relaxed text-foreground border border-primary/10 font-medium">
                      {selectedApplication.message}
                    </div>
                  </div>
                )}

                {/* Resume File */}
                {selectedApplication.resumeName && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted">Attached Resume Document</h4>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-5 text-xs">
                      <div className="flex items-center gap-3 font-medium text-foreground">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <FileText className="h-5 w-5" />
                        </div>
                        <div>
                          <span className="font-bold block text-sm">{selectedApplication.resumeName}</span>
                          <span className="text-[10px] text-muted">Candidate Uploaded Document</span>
                        </div>
                      </div>
                      <Button
                        type="button"
                        onClick={(e) => handleViewResume(selectedApplication, e)}
                        className="gap-2 rounded-2xl bg-primary text-white text-xs font-bold px-5 py-2.5 hover:bg-primary/90 shadow-brand-button"
                      >
                        <Download className="h-4 w-4" />
                        <span>View Resume</span>
                      </Button>
                    </div>
                  </div>
                )}

                {/* Scheduled Interview Card */}
                {selectedApplication.interviewDetails && (
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Scheduled Interview Information</h4>
                      <button
                        type="button"
                        onClick={() => handleOpenInterviewModal(selectedApplication)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                      >
                        <Edit3 className="h-3.5 w-3.5" />
                        <span>Edit Schedule</span>
                      </button>
                    </div>

                    <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-white to-amber-50/30 p-5 shadow-sm space-y-4 text-xs">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <span className="text-muted block text-[10px] uppercase font-bold">Interviewer Name</span>
                          <span className="font-bold text-foreground mt-1 block text-sm flex items-center gap-1.5">
                            <UserCheck className="h-4 w-4 text-primary" />
                            {selectedApplication.interviewDetails.interviewer}
                          </span>
                        </div>

                        <div>
                          <span className="text-muted block text-[10px] uppercase font-bold">Date &amp; Time</span>
                          <span className="font-bold text-foreground mt-1 block text-sm flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-primary" />
                            {selectedApplication.interviewDetails.date || selectedApplication.interviewDetails.dateTime
                              ? `${selectedApplication.interviewDetails.date || (typeof selectedApplication.interviewDetails.dateTime === 'string' ? selectedApplication.interviewDetails.dateTime.split('T')[0] : '')}${
                                  selectedApplication.interviewDetails.time ? ` at ${selectedApplication.interviewDetails.time}` : ''
                                }`
                              : 'TBD'}
                          </span>
                        </div>
                      </div>

                      <div className="border-t border-primary/10 pt-3">
                        <span className="text-muted block text-[10px] uppercase font-bold">Interview Format &amp; Venue</span>
                        {selectedApplication.interviewDetails.mode === 'online' ? (
                          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white p-3 border border-primary/20">
                            <div className="flex items-center gap-2 text-foreground font-bold text-xs">
                              <Video className="h-4 w-4 text-emerald-600" />
                              <span>Online Virtual Meeting (GMeet / Zoom)</span>
                            </div>

                            {selectedApplication.interviewDetails.meetingUrl && (
                              <a
                                href={selectedApplication.interviewDetails.meetingUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 text-white px-4 py-2 text-xs font-bold shadow-sm hover:bg-emerald-700 transition-colors"
                              >
                                <Video className="h-3.5 w-3.5" />
                                <span>Join Meeting</span>
                              </a>
                            )}
                          </div>
                        ) : (
                          <div className="mt-2 flex items-center gap-2 rounded-xl bg-white p-3 border border-border text-foreground font-bold text-xs">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{selectedApplication.interviewDetails.location || 'APDCH Melmaruvathur Campus'}</span>
                          </div>
                        )}
                      </div>

                      {selectedApplication.interviewDetails.notes && (
                        <div className="border-t border-primary/10 pt-3 text-[11px] text-muted">
                          <span className="font-bold text-foreground block">Instructions:</span>
                          <p className="mt-0.5">{selectedApplication.interviewDetails.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Application Status Updater */}
                <div className="border-t border-border/60 pt-5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                      Update Candidate Status Pipeline
                    </label>
                    <button
                      type="button"
                      onClick={() => handleOpenInterviewModal(selectedApplication)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Schedule Interview</span>
                    </button>
                  </div>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {Object.entries(APP_STATUS_BADGES).map(([key, info]) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleUpdateAppStatus(selectedApplication.id, key)}
                        className={`rounded-2xl border px-4 py-2 text-xs font-bold transition-all ${
                          selectedApplication.status === key
                            ? `${info.bg} ring-2 ring-primary/40 shadow-sm`
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
                    Internal HR Remarks &amp; Committee Notes
                  </label>
                  <textarea
                    rows="3"
                    defaultValue={selectedApplication.hrNotes || ''}
                    onBlur={(e) => handleSaveAppNotes(selectedApplication.id, e.target.value)}
                    placeholder="Add internal feedback, interview schedule date, committee review remarks..."
                    className="mt-2 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] p-4 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-medium"
                  />
                  <span className="mt-1 text-[11px] text-muted block">Notes are auto-saved upon clicking outside the input box.</span>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between border-t border-border/60 pt-5">
                  <button
                    type="button"
                    onClick={() => handleDeleteApp(selectedApplication.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:underline"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span>Delete Application Record</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ------------------------------------------------------------------
          SCHEDULE INTERVIEW MODAL POPUP
          ------------------------------------------------------------------ */}
      {isInterviewModalOpen && interviewApp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm overflow-y-auto">
          <div className="relative my-8 w-full max-w-lg overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl animate-in fade-in zoom-in-95">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-primary/10 bg-[#f5eef0] p-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Schedule Candidate Interview
                  </h3>
                  <p className="text-xs text-muted">
                    For: <strong className="text-foreground">{interviewApp.fullName}</strong> ({interviewApp.jobTitle || 'Faculty Position'})
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsInterviewModalOpen(false)}
                className="rounded-full p-1.5 text-muted hover:bg-black/5 hover:text-foreground"
              >
                <X className="h-5 w-5 text-muted" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSaveInterviewSchedule} className="p-6 space-y-4 text-xs">
              {/* Interviewer Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Interviewer Name <span className="text-primary">*</span>
                </label>
                <div className="relative mt-1.5">
                  <UserCheck className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    required
                    value={interviewForm.interviewer}
                    onChange={(e) => setInterviewForm({ ...interviewForm, interviewer: e.target.value })}
                    placeholder="e.g. Dr. S. Karthik, MDS"
                    className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                  />
                </div>
              </div>

              {/* Date and Time as separate input boxes */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Interview Date <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Calendar className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      type="date"
                      required
                      value={interviewForm.date}
                      onChange={(e) => setInterviewForm({ ...interviewForm, date: e.target.value })}
                      className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Interview Time <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      type="time"
                      required
                      value={interviewForm.time}
                      onChange={(e) => setInterviewForm({ ...interviewForm, time: e.target.value })}
                      className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                    />
                  </div>
                </div>
              </div>

              {/* Interview Mode: Online / Offline */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                  Interview Mode <span className="text-primary">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setInterviewForm({ ...interviewForm, mode: 'online' })}
                    className={`flex items-center justify-center gap-2 rounded-2xl border py-2.5 px-3 font-bold transition-all ${
                      interviewForm.mode === 'online'
                        ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20 shadow-sm'
                        : 'border-border bg-slate-50 text-muted hover:bg-slate-100'
                    }`}
                  >
                    <Video className="h-4 w-4" />
                    <span>Online (Virtual)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInterviewForm({ ...interviewForm, mode: 'offline' })}
                    className={`flex items-center justify-center gap-2 rounded-2xl border py-2.5 px-3 font-bold transition-all ${
                      interviewForm.mode === 'offline'
                        ? 'border-primary bg-primary/10 text-primary ring-2 ring-primary/20 shadow-sm'
                        : 'border-border bg-slate-50 text-muted hover:bg-slate-100'
                    }`}
                  >
                    <MapPin className="h-4 w-4" />
                    <span>Offline (In-Person)</span>
                  </button>
                </div>
              </div>

              {/* Conditional Field: Meeting Link vs Location Address */}
              {interviewForm.mode === 'online' ? (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Meeting Link <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Globe className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      type="url"
                      required
                      value={interviewForm.meetingUrl}
                      onChange={(e) => setInterviewForm({ ...interviewForm, meetingUrl: e.target.value })}
                      placeholder="https://meet.google.com/abc-defg-hij"
                      className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-muted">Meeting link will be included in the candidate schedule notification.</p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                    Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative mt-1.5">
                    <Building className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                    <input
                      type="text"
                      required
                      value={interviewForm.location}
                      onChange={(e) => setInterviewForm({ ...interviewForm, location: e.target.value })}
                      placeholder="e.g. Conference Room 1, APDCH Administrative Block"
                      className="w-full rounded-2xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-semibold"
                    />
                  </div>
                </div>
              )}

              {/* Special Instructions / Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                  Special Instructions for Candidate
                </label>
                <textarea
                  rows="2"
                  value={interviewForm.notes}
                  onChange={(e) => setInterviewForm({ ...interviewForm, notes: e.target.value })}
                  placeholder="e.g. Please bring original MDS certificates, State Council ID card, and passport photos."
                  className="mt-1.5 w-full rounded-2xl border border-primary/15 bg-[#faf7f8] p-3 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary font-medium"
                />
              </div>

              {/* Modal Buttons */}
              <div className="flex items-center justify-end gap-3 border-t border-border/60 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsInterviewModalOpen(false)}
                  className="rounded-2xl border-primary/20 text-xs font-bold px-5 py-2 text-muted hover:bg-slate-50"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="gap-2 rounded-2xl bg-primary text-white font-bold text-xs py-2 px-6 shadow-brand-button hover:bg-primary/90"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Save &amp; Confirm Interview</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
