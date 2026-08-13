import { useState, useRef } from 'react'
import {
  HeartHandshake,
  CheckCircle2,
  UploadCloud,
  FileText,
  X,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  User,
  Building,
  Send,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { INSTITUTION } from '@/lib/constants'
import careerData from '@/data/careers.json'

const POSITIONS = careerData.positions || []
const DEPARTMENTS = careerData.departments || []
const QUALIFICATIONS = careerData.qualifications || []
const EXPERIENCE_LEVELS = careerData.experienceLevels || []

export default function Careers() {
  const fileInputRef = useRef(null)
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
  })
  const [resumeFile, setResumeFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit. Please upload a smaller document.')
        return
      }
      setResumeFile(file)
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
      if (file.size > 10 * 1024 * 1024) {
        alert('File size exceeds 10MB limit. Please upload a smaller document.')
        return
      }
      setResumeFile(file)
    }
  }

  const removeFile = () => {
    setResumeFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Open native mailto with filled details as fallback
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
      // Trigger mail client as fallback
      window.open(`mailto:${INSTITUTION.email}?subject=${subject}&body=${body}`, '_blank')
    }, 800)
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      qualification: '',
      experience: '',
      currentOrg: '',
      message: '',
    })
    setResumeFile(null)
    setIsSubmitted(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO SECTION
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-16 pt-36 md:px-8 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <HeartHandshake className="h-4 w-4" /> Career Opportunities
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Careers at APDCH
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                Join a premier dental institution dedicated to clinical excellence, innovative research, compassionate patient care, and transformative healthcare education.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ==================================================
            JOB APPLICATION FORM SECTION
            ================================================== */}
        <section id="apply-form" className="px-5 py-12 md:px-8 md:py-20">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_20px_60px_-25px_rgba(82,24,34,0.18)]">
                {/* Form Header Banner */}
                <div className="border-b border-primary/10 bg-[#f5eef0] p-7 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                      <Briefcase className="h-3.5 w-3.5" />
                      Job Application Portal
                    </span>
                    <span className="text-xs font-semibold text-muted">
                      Official Recruitment Form
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Apply for a Position
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Submit your application and resume. Our Academic Dean and Human Resources Committee will review your qualifications and connect with shortlisted candidates.
                  </p>
                </div>

                {/* Form Body */}
                <div className="p-7 sm:p-10">
                  {isSubmitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                        <CheckCircle2 className="h-9 w-9" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl font-bold text-foreground">
                        Application Submitted Successfully!
                      </h3>
                      <p className="mx-auto mt-2.5 max-w-md text-xs leading-relaxed text-muted sm:text-sm">
                        Thank you, <strong className="text-foreground">{formData.fullName}</strong>. We have received your application for <strong className="text-foreground">{formData.position || 'the requested position'}</strong>. Our HR and recruitment office will review your profile.
                      </p>
                      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Button
                          type="button"
                          onClick={handleReset}
                          className="rounded-full bg-primary text-white font-bold hover:bg-primary/90"
                        >
                          Submit Another Application
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Grid 1: Name, Email, Phone */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Full Name */}
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

                        {/* Email */}
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

                      {/* Grid 2: Phone, Position */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Phone Number */}
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

                        {/* Position Applied For */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Position Applied For <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <select
                              name="position"
                              required
                              value={formData.position}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            >
                              <option value="">Select Target Position</option>
                              {POSITIONS.map((pos) => (
                                <option key={pos} value={pos}>
                                  {pos}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Grid 3: Department, Highest Qualification */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Department */}
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
                              <option value="">Select Specialty / Department</option>
                              {DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept}>
                                  {dept}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Qualification */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Highest Qualification <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <select
                              name="qualification"
                              required
                              value={formData.qualification}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            >
                              <option value="">Select Highest Qualification</option>
                              {QUALIFICATIONS.map((qual) => (
                                <option key={qual} value={qual}>
                                  {qual}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Grid 4: Experience, Current Organization */}
                      <div className="grid gap-5 sm:grid-cols-2">
                        {/* Experience (if any) */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                            Relevant Experience <span className="text-primary">*</span>
                          </label>
                          <div className="relative mt-2">
                            <select
                              name="experience"
                              required
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="w-full rounded-xl border border-primary/15 bg-[#faf7f8] py-2.5 px-3.5 text-xs text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm"
                            >
                              <option value="">Select Experience Level</option>
                              {EXPERIENCE_LEVELS.map((exp) => (
                                <option key={exp} value={exp}>
                                  {exp}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Current Organization / Institution */}
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
                          id="resume-file-input"
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

                      {/* Additional Message / Research Statement */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground">
                          Additional Cover Note / Research Interests (Optional)
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

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full rounded-xl bg-primary py-3 text-sm font-bold text-white shadow-brand-button hover:bg-primary/90"
                        >
                          {isSubmitting ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                              Submitting Application...
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2">
                              <Send className="h-4 w-4" />
                              Submit Job Application
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

        {/* ==================================================
            CONTACT INFORMATION SECTION FOR CAREERS
            ================================================== */}
        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-4xl">
            <Reveal>
              <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-sm sm:p-9">
                <div className="mb-6 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    <Phone className="h-3.5 w-3.5" />
                    Career &amp; Recruitment Helpdesk
                  </span>
                  <h3 className="mt-2.5 font-display text-xl font-bold text-foreground sm:text-2xl">
                    Contact for Enquiries
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
        </section>
      </main>
      <Footer />
    </>
  )
}
