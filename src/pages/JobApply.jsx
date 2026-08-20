import { useState, useRef, useEffect } from 'react'
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom'
import {
  Briefcase,
  CheckCircle2,
  UploadCloud,
  FileText,
  X,
  Phone,
  Mail,
  User,
  Building,
  Send,
  ArrowLeft,
  GraduationCap,
  Clock,
  ShieldCheck,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'
import careerData from '@/data/careers.json'
import { getActiveJobPostings, getJobPostingById, saveApplication } from '@/lib/careersStore'

const POSITIONS = careerData.positions || []
const DEPARTMENTS = careerData.departments || []

export default function JobApply() {
  const { jobId } = useParams()
  const [searchParams] = useSearchParams()
  const queryJobId = jobId || searchParams.get('jobId')
  const navigate = useNavigate()

  const fileInputRef = useRef(null)
  const [activeJobs, setActiveJobs] = useState([])
  const [targetJob, setTargetJob] = useState(null)

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    qualification: '',
    experience: '',
    currentOrg: '',
    message: '',
    jobId: '',
  })
  const [resumeFile, setResumeFile] = useState(null)
  const [resumeDataUrl, setResumeDataUrl] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [declarationConfirmed, setDeclarationConfirmed] = useState(false)

  useEffect(() => {
    const jobs = getActiveJobPostings()
    setActiveJobs(jobs)

    if (queryJobId) {
      const found = getJobPostingById(queryJobId)
      if (found) {
        setTargetJob(found)
        setFormData((prev) => ({
          ...prev,
          position: found.title,
          department: found.department,
          jobId: found.id,
        }))
      }
    }
  }, [queryJobId])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const processFile = (file) => {
    if (file.size > 10 * 1024 * 1024) {
      alert('File size exceeds 10MB limit. Please upload a smaller document.')
      return
    }
    setResumeFile(file)

    const reader = new FileReader()
    reader.onload = (evt) => {
      setResumeDataUrl(evt.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const removeFile = () => {
    setResumeFile(null)
    setResumeDataUrl(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Save to persistent CMS store for HR inbox
    saveApplication({
      jobId: formData.jobId || targetJob?.id || 'general-application',
      jobTitle: formData.position || 'General Faculty Application',
      department: formData.department || targetJob?.department || 'General',
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      qualification: formData.qualification,
      experience: formData.experience,
      currentOrg: formData.currentOrg,
      message: formData.message,
      resumeName: resumeFile ? resumeFile.name : 'Resume_Applicant.pdf',
      resumeDataUrl: resumeDataUrl || null,
    })

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      const subject = encodeURIComponent(
        `Job Application: ${formData.position || 'General Position'} - ${formData.fullName}`
      )
      const body = encodeURIComponent(
        `APPLICANT DETAILS:\n` +
          `Name: ${formData.fullName}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Position: ${formData.position}\n` +
          `Department: ${formData.department}\n` +
          `Qualification: ${formData.qualification}\n` +
          `Experience: ${formData.experience}\n` +
          `Current Organization: ${formData.currentOrg || 'N/A'}\n\n` +
          `Resume Attached File: ${resumeFile ? resumeFile.name : 'Not selected'}\n\n` +
          `Cover Note:\n${formData.message || 'No additional note'}`
      )
      window.open(`mailto:${INSTITUTION.email}?subject=${subject}&body=${body}`, '_blank')
    }, 600)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: targetJob?.title || '',
      department: targetJob?.department || '',
      qualification: '',
      experience: '',
      currentOrg: '',
      message: '',
      jobId: targetJob?.id || '',
    })
    setResumeFile(null)
    setDeclarationConfirmed(false)
    setIsSubmitted(false)
  }

  const allPositionOptions = Array.from(
    new Set([...activeJobs.map((j) => j.title), ...POSITIONS])
  )

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO HEADER
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44 border-b border-primary/10">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          
          <div className="relative mx-auto max-w-4xl text-center">
            <Reveal>
              <nav className="mb-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
                <span>/</span>
                <span className="text-foreground">Application Form</span>
              </nav>

              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <Briefcase className="h-4 w-4" /> Official Recruitment Portal
              </span>

              <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Submit Your Application
              </h1>
              
              {targetJob ? (
                <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
                  You are applying for <strong className="text-primary font-bold">{targetJob.title}</strong> in the <strong className="text-foreground">{targetJob.department}</strong>.
                </p>
              ) : (
                <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-muted sm:text-sm">
                  Fill in your professional background, qualifications, and upload your resume to apply to APDCH.
                </p>
              )}
            </Reveal>
          </div>
        </section>

        {/* ==================================================
            APPLICATION FORM SECTION
            ================================================== */}
        <section className="px-5 py-12 md:px-8 md:py-18">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_20px_60px_-25px_rgba(82,24,34,0.18)]">
                {/* Form Header Banner */}
                <div className="border-b border-primary/10 bg-[#f5eef0] p-7 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Academic &amp; Clinical Recruitment
                    </span>
                    <Link
                      to="/careers"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-primary transition-colors"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      <span>Back to Vacancies</span>
                    </Link>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Candidate Details
                  </h2>
                  <p className="mt-1.5 text-xs text-muted sm:text-sm leading-relaxed">
                    Our Selection Committee and HR Office will evaluate your resume and reach out to shortlisted candidates.
                  </p>
                </div>

                {/* Form Body */}
                <div className="p-7 sm:p-10">
                  {isSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">
                        Application Submitted Successfully!
                      </h3>
                      <p className="mx-auto max-w-md text-xs leading-relaxed text-muted sm:text-sm">
                        Thank you, <strong className="text-foreground">{formData.fullName}</strong>. We have received your application for <strong className="text-primary font-bold">{formData.position || 'the target position'}</strong>.
                      </p>
                      <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                        <Button
                          onClick={() => navigate('/careers')}
                          className="rounded-full bg-primary text-white font-bold text-xs hover:bg-primary/90 px-6 py-2.5"
                        >
                          View More Vacancies
                        </Button>
                        <Button
                          type="button"
                          onClick={handleReset}
                          variant="outline"
                          className="rounded-full text-xs font-bold px-6 py-2.5"
                        >
                          Submit Another Application
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Grid 1: Name, Email */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="text"
                              name="fullName"
                              required
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Dr. Rajesh Kumar"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. rajesh.kumar@gmail.com"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid 2: Phone, Position Applied */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Phone Number <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="tel"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Target Position <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <select
                              name="position"
                              required
                              value={formData.position}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm font-medium"
                            >
                              <option value="">Select Position</option>
                              {allPositionOptions.map((pos) => (
                                <option key={pos} value={pos}>
                                  {pos}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Grid 3: Department, Qualification */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Specialty / Department <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <select
                              name="department"
                              required
                              value={formData.department}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            >
                              <option value="">Select Department</option>
                              {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>
                                  {dept}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Highest Qualification <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <GraduationCap className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="text"
                              name="qualification"
                              required
                              value={formData.qualification}
                              onChange={handleInputChange}
                              placeholder="e.g. MDS (Prosthodontics) / BDS"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Grid 4: Experience, Current Organization */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Relevant Experience <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <Clock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="text"
                              name="experience"
                              required
                              value={formData.experience}
                              onChange={handleInputChange}
                              placeholder="e.g. 4 Years Teaching / 2 Years Clinical"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Current Institution / Clinic (Optional)
                          </label>
                          <div className="relative mt-2">
                            <Building className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                            <input
                              type="text"
                              name="currentOrg"
                              value={formData.currentOrg}
                              onChange={handleInputChange}
                              placeholder="e.g. Government Dental College"
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 pl-10 pr-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Resume Upload Box */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                          Upload Resume / CV (PDF or DOC) <span className="text-primary">*</span>
                        </label>
                        <input
                          ref={fileInputRef}
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="hidden"
                          id="page-resume-file-input"
                        />

                        {resumeFile ? (
                          <div className="mt-2 flex items-center justify-between rounded-2xl border border-primary/25 bg-[#f5eef0] p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                                <FileText className="h-5 w-5" />
                              </div>
                              <div className="min-w-0">
                                <p className="truncate text-xs font-bold text-foreground sm:text-sm">
                                  {resumeFile.name}
                                </p>
                                <p className="text-[11px] text-muted">
                                  {(resumeFile.size / (1024 * 1024)).toFixed(2)} MB · Ready for submission
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="flex h-8 w-8 items-center justify-center rounded-full text-muted hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                              title="Remove file"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-6 text-center transition-all ${
                              dragActive
                                ? 'border-primary bg-primary/5'
                                : 'border-primary/20 bg-[#faf7f8] hover:border-primary/40 hover:bg-white'
                            }`}
                          >
                            <UploadCloud className="h-8 w-8 text-primary" />
                            <p className="mt-2 text-xs font-bold text-foreground sm:text-sm">
                              Click to browse or drag &amp; drop your resume
                            </p>
                            <p className="mt-1 text-[11px] text-muted">
                              Supports PDF, DOC, DOCX up to 10 MB
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                          Additional Cover Note / Research Statement (Optional)
                        </label>
                        <textarea
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Briefly describe your clinical background, publications, or career goals at APDCH..."
                          className="mt-2 w-full rounded-xl border border-primary/15 bg-[#faf7f8] p-3.5 text-xs text-foreground placeholder:text-muted/60 focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                        />
                      </div>

                      {/* Declaration Checkbox */}
                      <div className="pt-2">
                        <label className="flex items-start gap-3 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            required
                            checked={declarationConfirmed}
                            onChange={(e) => setDeclarationConfirmed(e.target.checked)}
                            className="mt-0.5 h-4 w-4 rounded border-primary/30 text-primary focus:ring-primary accent-primary"
                          />
                          <span className="text-xs font-medium text-foreground sm:text-sm">
                            I confirm the information provided is accurate.
                          </span>
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          disabled={isSubmitting || !declarationConfirmed}
                          className="w-full rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-brand-button hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Submitting Application...
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Submit Application
                            </span>
                          )}
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
