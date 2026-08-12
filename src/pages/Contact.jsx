import { useState } from 'react'
import { ArrowRight, Clock3, Mail, MapPin, MessageSquare, Navigation, Phone } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { INSTITUTION } from '@/lib/constants'

const CONTACT_ITEMS = [
  { title: 'Location', value: INSTITUTION.address, href: INSTITUTION.mapDirectionsUrl, external: true, icon: MapPin },
  { title: 'Phone', value: INSTITUTION.phone, href: `tel:${INSTITUTION.phone}`, icon: Phone },
  { title: 'Email', value: INSTITUTION.email, href: `mailto:${INSTITUTION.email}`, icon: Mail },
  { title: 'Working Hours', value: `${INSTITUTION.hoursDays}\n${INSTITUTION.hoursTime}`, icon: Clock3 },
]

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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f7eef0]">
        <section
          className="relative flex min-h-[430px] items-center justify-center overflow-hidden px-5 pb-20 pt-44 text-white md:min-h-[500px] md:px-8 md:pb-24 md:pt-48"
          style={{ backgroundColor: '#2b0d14' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />
          <Reveal className="w-full">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <MessageSquare className="h-4 w-4 text-[#e5a9b5]" /> Contact APDCH
              </span>
              <h1 className="mt-6 w-full text-center font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">We’re here to help with admissions, academics, patient services, and general enquiries.</p>
            </div>
          </Reveal>
        </section>

        <section className="relative z-10 px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_ITEMS.map((item, index) => {
              const Icon = item.icon
              const card = (
                <article className="flex h-full min-h-48 flex-col items-center justify-center rounded-3xl border border-white/80 bg-white p-6 text-center shadow-[0_20px_50px_-32px_rgba(82,24,34,.55)] transition-colors hover:border-primary/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-5 font-display text-lg text-foreground">{item.title}</h2>
                  <p className="mt-2 whitespace-pre-line break-words text-sm leading-relaxed text-muted">{item.value}</p>
                </article>
              )
              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  {item.href ? <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined} className="block h-full">{card}</a> : card}
                </Reveal>
              )
            })}
          </div>
        </section>

        <section className="px-5 pb-12 pt-6 md:px-8 md:pb-16 md:pt-10">
          <div className="mx-auto max-w-[960px]">
            <Reveal className="w-full">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Send an enquiry</p>
                <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Send Us a Message</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">Fill in the details below and we&apos;ll prepare your enquiry email.</p>

                <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5">
                  <label className="text-sm font-medium text-foreground">Full Name
                    <input name="name" required placeholder="Enter your name" className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5" />
                  </label>
                  <label className="text-sm font-medium text-foreground">Email Address
                    <input name="email" type="email" required placeholder="Enter your email" className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5" />
                  </label>
                  <label className="text-sm font-medium text-foreground">Phone Number
                    <input name="phone" type="tel" placeholder="Enter your phone number" className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5" />
                  </label>

                  {/* Step 1: Enquiry Type */}
                  <label className="text-sm font-medium text-foreground">Enquiry Type
                    <select
                      name="enquiryType"
                      required
                      value={enquiryType}
                      onChange={handleEnquiryChange}
                      className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                    >
                      <option value="" disabled>Select Enquiry Type</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Academics">Academics</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </label>

                  {/* Hospital Flow */}
                  {enquiryType === 'Hospital' && (
                    <>
                      <label className="text-sm font-medium text-foreground">Hospital Service
                        <select
                          name="hospitalService"
                          required
                          value={hospitalService}
                          onChange={(e) => setHospitalService(e.target.value)}
                          className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                        >
                          <option value="" disabled>Select Hospital Service</option>
                          <option value="Book an Appointment">Book an Appointment</option>
                          <option value="Dental Consultation">Dental Consultation</option>
                          <option value="Treatment Follow-up">Treatment Follow-up</option>
                          <option value="Other Hospital Enquiry">Other Hospital Enquiry</option>
                        </select>
                      </label>

                      {hospitalService === 'Book an Appointment' && (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                          <label className="text-sm font-medium text-foreground">Preferred Date
                            <input
                              type="date"
                              name="preferredDate"
                              required
                              min={todayString}
                              className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                            />
                          </label>
                          <label className="text-sm font-medium text-foreground">Preferred Session
                            <select
                              name="preferredSession"
                              required
                              defaultValue=""
                              className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                            >
                              <option value="" disabled>Select Session</option>
                              <option value="Morning Session (9:00 AM – 1:00 PM)">Morning Session (9:00 AM – 1:00 PM)</option>
                              <option value="Afternoon Session (2:00 PM – 4:30 PM)">Afternoon Session (2:00 PM – 4:30 PM)</option>
                            </select>
                          </label>
                        </div>
                      )}

                      {hospitalService === 'Dental Consultation' && (
                        <label className="text-sm font-medium text-foreground">Preferred Department
                          <select
                            name="preferredDepartment"
                            required
                            defaultValue=""
                            className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                          >
                            <option value="" disabled>Select Department</option>
                            {DENTAL_DEPARTMENTS.map((dept) => (
                              <option key={dept} value={dept}>{dept}</option>
                            ))}
                          </select>
                        </label>
                      )}
                    </>
                  )}

                  {/* Admissions Flow */}
                  {enquiryType === 'Admissions' && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="text-sm font-medium text-foreground">Course Type
                        <select
                          name="courseType"
                          required
                          defaultValue=""
                          className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                        >
                          <option value="" disabled>Select Course Type</option>
                          <option value="BDS">BDS</option>
                          <option value="MDS">MDS</option>
                        </select>
                      </label>
                      <label className="text-sm font-medium text-foreground">Admission Year
                        <select
                          name="admissionYear"
                          required
                          defaultValue=""
                          className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                        >
                          <option value="" disabled>Select Admission Year</option>
                          <option value="2026–2027">2026–2027</option>
                          <option value="2027–2028">2027–2028</option>
                        </select>
                      </label>
                    </div>
                  )}

                  {/* Academics Flow */}
                  {enquiryType === 'Academics' && (
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <label className="text-sm font-medium text-foreground">Programme
                        <select
                          name="programme"
                          required
                          defaultValue=""
                          className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                        >
                          <option value="" disabled>Select Programme</option>
                          <option value="BDS">BDS</option>
                          <option value="MDS">MDS</option>
                        </select>
                      </label>
                      <label className="text-sm font-medium text-foreground">Academic Query
                        <select
                          name="academicQuery"
                          required
                          defaultValue=""
                          className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5"
                        >
                          <option value="" disabled>Select Academic Query</option>
                          <option value="Curriculum">Curriculum</option>
                          <option value="Examinations">Examinations</option>
                          <option value="Academic Resources">Academic Resources</option>
                          <option value="Certificates">Certificates</option>
                        </select>
                      </label>
                    </div>
                  )}

                  <label className="text-sm font-medium text-foreground">Message
                    <textarea name="message" required rows="6" placeholder="How can we help you?" className="mt-2 w-full resize-none rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5" />
                  </label>
                  <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-button transition-colors hover:bg-primary/90">
                    Send Enquiry <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal className="mt-12 w-full md:mt-14" delay={0.1}>
              <div className="mb-7 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Find Us</p>
                <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Visit APDCH</h2>
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-white bg-white p-2 shadow-[0_20px_50px_-32px_rgba(82,24,34,.55)]">
                <iframe title="APDCH location" src={INSTITUTION.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-[360px] w-full rounded-[1.6rem] border-0 md:h-[440px]" allowFullScreen />
              </div>
              <div className="mt-6 text-center">
                <a href={INSTITUTION.mapDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-button transition-colors hover:bg-primary/90">
                  <Navigation className="h-4 w-4" /> Get Directions <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
