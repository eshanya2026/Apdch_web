import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Navigation, Phone, MessageSquare } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { INSTITUTION } from '@/lib/constants'

const todayString = new Date().toISOString().split('T')[0]

const DENTAL_DEPARTMENTS = [
  'Conservative Dentistry & Endodontics',
  'Oral & Maxillofacial Surgery',
  'Orthodontics & Dentofacial Orthopaedics',
  'Periodontics & Implantology',
  'Prosthodontics & Crown & Bridge',
  'Pedodontics & Preventive Dentistry',
  'Oral Medicine & Radiology',
  'Oral Pathology & Microbiology',
  'Public Health Dentistry',
]

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const enquiryType = data.get('enquiryType')

  const extraFields = []
  if (data.get('courseType')) extraFields.push(`Course Type: ${data.get('courseType')}`)
  if (data.get('admissionYear')) extraFields.push(`Admission Year: ${data.get('admissionYear')}`)
  if (data.get('programme')) extraFields.push(`Programme: ${data.get('programme')}`)
  if (data.get('academicQuery')) extraFields.push(`Academic Query: ${data.get('academicQuery')}`)
  if (data.get('hospitalService')) extraFields.push(`Hospital Service: ${data.get('hospitalService')}`)
  if (data.get('preferredDepartment')) extraFields.push(`Preferred Department: ${data.get('preferredDepartment')}`)
  if (data.get('preferredDate')) extraFields.push(`Preferred Date: ${data.get('preferredDate')}`)
  if (data.get('preferredSession')) extraFields.push(`Preferred Session: ${data.get('preferredSession')}`)

  const extraDetails = extraFields.join('\n')
  const subject = encodeURIComponent(`${enquiryType || 'General'} Enquiry from ${data.get('name')}`)
  const body = encodeURIComponent(
    `Enquiry Type: ${enquiryType}\n${extraDetails ? `${extraDetails}\n` : ''}Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\n\nMessage:\n${data.get('message')}`
  )
  window.location.href = `mailto:${INSTITUTION.email}?subject=${subject}&body=${body}`
}

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('')
  const [hospitalService, setHospitalService] = useState('')

  const handleEnquiryChange = (e) => {
    const value = e.target.value
    setEnquiryType(value)
    setHospitalService('')
  }

  const showDateAndSession =
    enquiryType === 'Hospital' &&
    (hospitalService === 'Book an Appointment' || hospitalService === 'Dental Consultation')

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* ==================================================
            HERO PAGE HEADER BANNER
            ================================================== */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-[#fdf8f9] to-[#faf7f8] px-5 pb-10 pt-36 md:px-8 md:pb-14 md:pt-44 border-b border-primary/10 text-center">
          <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          
          <Reveal>
            <div className="relative mx-auto max-w-4xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary shadow-sm backdrop-blur">
                <MessageSquare className="h-4 w-4 text-primary" /> Contact APDCH
              </span>

              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Contact Us
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                We’re here to help with admissions, academics, patient hospital services, and general enquiries.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ==================================================
            MAIN CONTENT CONTAINER
            ================================================== */}
        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-5xl space-y-12">

            {/* ==================================================
                BLOCK 1: TOP CONTACT DETAILS CARD (CALL US / OFFICE / EMAIL)
                ================================================== */}
            <Reveal>
              <div className="rounded-[2.5rem] border border-primary/15 bg-white p-7 sm:p-10 shadow-sm">
                <div className="grid gap-8 sm:grid-cols-3 sm:divide-x divide-border/60">
                  {/* Column 1: Call Us */}
                  <div className="flex flex-col items-center text-center space-y-2 sm:px-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600 border border-rose-200/80 shadow-xs">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground pt-1">
                      Call Us
                    </h3>
                    <p className="text-xs text-muted">
                      Mon–Sat from 8am to 6pm
                    </p>
                    <div className="pt-1">
                      <a
                        href={`tel:${INSTITUTION.phone}`}
                        className="text-xs font-bold text-primary hover:underline"
                      >
                        {INSTITUTION.phone}
                      </a>
                    </div>
                  </div>

                  {/* Column 2: Our Office */}
                  <div className="flex flex-col items-center text-center space-y-2 sm:px-4 pt-6 sm:pt-0 border-t sm:border-t-0 border-border/60">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 border border-purple-200/80 shadow-xs">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground pt-1">
                      Our Office
                    </h3>
                    <p className="text-xs text-muted">
                      Come say hello at our campus location.
                    </p>
                    <div className="pt-1 text-xs font-bold text-foreground max-w-xs leading-snug">
                      {INSTITUTION.address}
                    </div>
                  </div>

                  {/* Column 3: Email Us */}
                  <div className="flex flex-col items-center text-center space-y-2 sm:px-4 pt-6 sm:pt-0 border-t sm:border-t-0 border-border/60">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 border border-sky-200/80 shadow-xs">
                      <Mail className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground pt-1">
                      Email Us
                    </h3>
                    <p className="text-xs text-muted">
                      Drop us an email anytime.
                    </p>
                    <div className="pt-1">
                      <a
                        href={`mailto:${INSTITUTION.email}`}
                        className="text-xs font-bold text-primary hover:underline break-all"
                      >
                        {INSTITUTION.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* ==================================================
                BLOCK 2: MAIN HERO FORM CARD (MATCHING REFERENCE IMAGE)
                ================================================== */}
            <Reveal>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#25000c] via-[#1a0008] to-[#120005] p-6 sm:p-12 md:p-14 text-white shadow-2xl border border-white/10">
                {/* Subtle Ambient Radial Lighting */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-purple-900/20 blur-3xl" />

                <div className="relative z-10 mx-auto max-w-3xl text-center space-y-3">
                  {/* Contact Badge */}
                  <div className="flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400 animate-pulse" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-rose-300">
                      CONTACT US
                    </span>
                  </div>

                  {/* Main Heading */}
                  <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-white/85 max-w-xl mx-auto leading-relaxed">
                    Have a question about admissions, academics, hospital services, or general enquiries? Send us a message and our team will assist you.
                  </p>

                  {/* Form Container */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5 text-left">
                    {/* Row 1: Full Name & Email */}
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                          Full Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="Name"
                          className="mt-1.5 w-full rounded-2xl border border-white/25 bg-white/15 py-3 px-4 text-xs sm:text-sm font-semibold text-white placeholder:text-white/50 focus:border-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                          Email Address <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="Email"
                          className="mt-1.5 w-full rounded-2xl border border-white/25 bg-white/15 py-3 px-4 text-xs sm:text-sm font-semibold text-white placeholder:text-white/50 focus:border-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Enquiry Type */}
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                          Phone Number <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          required
                          placeholder="Phone"
                          className="mt-1.5 w-full rounded-2xl border border-white/25 bg-white/15 py-3 px-4 text-xs sm:text-sm font-semibold text-white placeholder:text-white/50 focus:border-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                          Enquiry Type <span className="text-rose-400">*</span>
                        </label>
                        <select
                          name="enquiryType"
                          required
                          value={enquiryType}
                          onChange={handleEnquiryChange}
                          className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-3 px-4 text-xs sm:text-sm font-semibold text-white focus:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                        >
                          <option value="" disabled className="bg-[#2a000f] text-white">Select Enquiry Type</option>
                          <option value="Hospital" className="bg-[#2a000f] text-white">Hospital</option>
                          <option value="Admissions" className="bg-[#2a000f] text-white">Admissions (BDS / MDS)</option>
                          <option value="Academics" className="bg-[#2a000f] text-white">Academics &amp; Curriculum</option>
                          <option value="General Enquiry" className="bg-[#2a000f] text-white">General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Conditional Fields: Hospital */}
                    {enquiryType === 'Hospital' && (
                      <div className="space-y-4 rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                            Hospital Service
                          </label>
                          <select
                            name="hospitalService"
                            required
                            value={hospitalService}
                            onChange={(e) => setHospitalService(e.target.value)}
                            className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                          >
                            <option value="" disabled className="bg-[#2a000f] text-white">Select Hospital Service</option>
                            <option value="Book an Appointment" className="bg-[#2a000f] text-white">Book an Appointment</option>
                            <option value="Dental Consultation" className="bg-[#2a000f] text-white">Dental Consultation</option>
                            <option value="Treatment Follow-up" className="bg-[#2a000f] text-white">Treatment Follow-up</option>
                            <option value="Other Hospital Enquiry" className="bg-[#2a000f] text-white">Other Hospital Enquiry</option>
                          </select>
                        </div>

                        {/* Preferred Date & Session (only for Book an Appointment OR Dental Consultation) */}
                        {showDateAndSession && (
                          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                                Preferred Date
                              </label>
                              <input
                                type="date"
                                name="preferredDate"
                                required
                                min={todayString}
                                className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                                Preferred Session
                              </label>
                              <select
                                name="preferredSession"
                                required
                                defaultValue=""
                                className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                              >
                                <option value="" disabled className="bg-[#2a000f] text-white">Select Session</option>
                                <option value="Morning Session (9:00 AM – 1:00 PM)" className="bg-[#2a000f] text-white">Morning (9 AM – 1 PM)</option>
                                <option value="Afternoon Session (2:00 PM – 4:30 PM)" className="bg-[#2a000f] text-white">Afternoon (2 PM – 4:30 PM)</option>
                              </select>
                            </div>
                          </div>
                        )}

                        {hospitalService === 'Dental Consultation' && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                              Preferred Specialty Department
                            </label>
                            <select
                              name="preferredDepartment"
                              required
                              defaultValue=""
                              className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                            >
                              <option value="" disabled className="bg-[#2a000f] text-white">Select Specialty Department</option>
                              {DENTAL_DEPARTMENTS.map((dept) => (
                                <option key={dept} value={dept} className="bg-[#2a000f] text-white">{dept}</option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Conditional Fields: Admissions */}
                    {enquiryType === 'Admissions' && (
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                            Course Type
                          </label>
                          <select
                            name="courseType"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                          >
                            <option value="" disabled className="bg-[#2a000f] text-white">Select Course Type</option>
                            <option value="BDS" className="bg-[#2a000f] text-white">BDS (Undergraduate)</option>
                            <option value="MDS" className="bg-[#2a000f] text-white">MDS (Postgraduate Specialty)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                            Admission Academic Year
                          </label>
                          <select
                            name="admissionYear"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                          >
                            <option value="" disabled className="bg-[#2a000f] text-white">Select Academic Year</option>
                            <option value="2026–2027" className="bg-[#2a000f] text-white">2026–2027</option>
                            <option value="2027–2028" className="bg-[#2a000f] text-white">2027–2028</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Conditional Fields: Academics */}
                    {enquiryType === 'Academics' && (
                      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 rounded-2xl border border-white/20 bg-white/10 p-4 sm:p-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                            Programme
                          </label>
                          <select
                            name="programme"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                          >
                            <option value="" disabled className="bg-[#2a000f] text-white">Select Programme</option>
                            <option value="BDS" className="bg-[#2a000f] text-white">BDS</option>
                            <option value="MDS" className="bg-[#2a000f] text-white">MDS</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                            Academic Query
                          </label>
                          <select
                            name="academicQuery"
                            required
                            defaultValue=""
                            className="mt-1.5 w-full rounded-2xl border border-white/25 bg-[#2a000f] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white focus:outline-none"
                          >
                            <option value="" disabled className="bg-[#2a000f] text-white">Select Academic Query</option>
                            <option value="Curriculum" className="bg-[#2a000f] text-white">Curriculum</option>
                            <option value="Examinations" className="bg-[#2a000f] text-white">Examinations</option>
                            <option value="Academic Resources" className="bg-[#2a000f] text-white">Academic Resources</option>
                            <option value="Certificates" className="bg-[#2a000f] text-white">Certificates</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Row 3: Message Textarea */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-white/90">
                        Message <span className="text-rose-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        placeholder="Message"
                        className="mt-1.5 w-full rounded-2xl border border-white/25 bg-white/15 py-3 px-4 text-xs sm:text-sm font-semibold text-white placeholder:text-white/50 focus:border-white/50 focus:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/20 resize-none"
                      />
                    </div>

                    {/* Row 4: Centered Send Message Button */}
                    <div className="pt-4 text-center">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/15 px-8 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg backdrop-blur hover:bg-white hover:text-primary transition-all duration-300 active:scale-95"
                      >
                        <span>Send Message</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </Reveal>

            {/* ==================================================
                BLOCK 3: LOCATION MAP SECTION
                ================================================== */}
            <Reveal>
              <div className="rounded-[2.5rem] border border-primary/15 bg-white p-6 sm:p-8 shadow-sm text-center space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">FIND US</span>
                  <h3 className="font-display text-2xl font-bold text-foreground">Visit APDCH Campus</h3>
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-slate-50">
                  <iframe
                    title="APDCH location"
                    src={INSTITUTION.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[340px] w-full border-0 md:h-[420px]"
                    allowFullScreen
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={INSTITUTION.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-xs font-bold text-white shadow-brand-button transition-colors hover:bg-primary/90"
                  >
                    <Navigation className="h-4 w-4" />
                    <span>Get Directions on Google Maps</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
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

