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

const ENQUIRY_FIELDS = {
  Admissions: [
    { name: 'courseType', label: 'Course Type', placeholder: 'Select Course Type', options: ['BDS', 'MDS'] },
    { name: 'admissionYear', label: 'Admission Year', placeholder: 'Select Admission Year', options: ['2026–2027', '2027–2028'] },
  ],
  Academics: [
    { name: 'programme', label: 'Programme', placeholder: 'Select Programme', options: ['BDS', 'MDS'] },
    { name: 'academicQuery', label: 'Academic Query', placeholder: 'Select Academic Query', options: ['Curriculum', 'Examinations', 'Academic Resources', 'Certificates'] },
  ],
  Hospital: [
    { name: 'hospitalService', label: 'Hospital Service', placeholder: 'Select Hospital Service', options: ['Book an Appointment', 'Dental Consultation', 'Other Hospital Enquiry'] },
  ],
}

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(event.currentTarget)
  const enquiryType = data.get('enquiryType')
  const extraDetails = ENQUIRY_FIELDS[enquiryType]
    ?.map((field) => `${field.label}: ${data.get(field.name)}`)
    .join('\n')
  const subject = encodeURIComponent(`${enquiryType} enquiry from ${data.get('name')}`)
  const body = encodeURIComponent(
    `Enquiry Type: ${enquiryType}\n${extraDetails ? `${extraDetails}\n` : ''}Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\n\nMessage:\n${data.get('message')}`
  )
  window.location.href = `mailto:${INSTITUTION.email}?subject=${subject}&body=${body}`
}

export default function Contact() {
  const [enquiryType, setEnquiryType] = useState('')

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

        <section className="px-5 pb-20 pt-8 md:px-8 md:pb-28 md:pt-12">
          <div className="mx-auto max-w-6xl">
            <Reveal className="w-full">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Send an enquiry</p>
                <h2 className="mt-3 font-display text-3xl text-foreground md:text-4xl">Send Us a Message</h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">Complete the form and your email application will open with the enquiry details ready to send.</p>

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
                  <label className="text-sm font-medium text-foreground">Enquiry Type
                    <select name="enquiryType" required value={enquiryType} onChange={(event) => setEnquiryType(event.target.value)} className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5">
                      <option value="" disabled>Select Enquiry Type</option>
                      <option value="Admissions">Admissions</option>
                      <option value="Academics">Academics</option>
                      <option value="Hospital">Hospital</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </label>
                  {ENQUIRY_FIELDS[enquiryType]?.map((field) => (
                    <label key={field.name} className="text-sm font-medium text-foreground">{field.label}
                      <select name={field.name} required defaultValue="" className="mt-2 w-full rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal text-foreground outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5">
                        <option value="" disabled>{field.placeholder}</option>
                        {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
                      </select>
                    </label>
                  ))}
                  <label className="text-sm font-medium text-foreground">Message
                    <textarea name="message" required rows="6" placeholder="How can we help you?" className="mt-2 w-full resize-none rounded-xl border border-primary/10 bg-white px-4 py-3.5 text-sm font-normal outline-none transition focus:border-primary/40 focus:ring-4 focus:ring-primary/5" />
                  </label>
                  <button type="submit" className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-button transition-colors hover:bg-primary/90">
                    Send Message <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal className="mt-20 w-full" delay={0.1}>
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
