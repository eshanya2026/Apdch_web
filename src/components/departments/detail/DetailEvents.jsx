import { useMemo, useState } from 'react'
import { MapPin, Users, Sparkles } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

function getDefaultEvents(department) {
  if (department?.id === 'conservative-dentistry') {
    return [
      {
        id: 'cons-event-1',
        year: '2024',
        date: 'ANNUAL CDE',
        title: 'RACE 2024 — Rapid Academic & Clinical Enhancement Program',
        organizers: 'Department of Conservative Dentistry & Endodontics, APDCH',
        venue: 'APDCH Main Auditorium & Clinical Lecture Hall',
        description: 'Annual flagship academic refresher and continuing dental education program focusing on modern operative dentistry, pulp preservation, and clinical endodontic excellence.',
        type: 'Academic Refresher & CDE',
      },
      {
        id: 'cons-event-2',
        year: '2024',
        date: 'SPECIALTY DAY',
        title: 'CONS-ENDO DAY — Annual Specialty Celebrations & Competitions',
        organizers: 'Department Faculty, PG Residents & Student Council',
        venue: 'APDCH Campus Auditorium & Preclinical Laboratories',
        description: 'Specialty awareness drive, patient oral health screening camps, aesthetic tooth restoration competitions, and interactive quiz sessions celebrating Conservative Dentistry & Endodontics.',
        type: 'Specialty Day Celebration',
      },
      {
        id: 'cons-event-3',
        year: '2024',
        date: 'HANDS-ON WORKSHOP',
        title: 'Micro Endodontics Workshop – Basic & Advanced Module',
        organizers: 'Microscopic Endodontics Unit & Senior Faculty Team',
        venue: 'Microsurgery Room & Preclinical Simulation Laboratory with Phantom Heads',
        description: 'Intensive hands-on training workshop covering Dental Operating Microscope ergonomics, rubber dam isolation, canal location under magnification, and advanced NiTi rotary instrumentation.',
        type: 'Hands-on Workshop',
      },
    ]
  }

  const deptName = department?.name || 'Oral Medicine & Radiology'
  const isOMR = department?.id === 'oral-medicine' || deptName.toLowerCase().includes('oral medicine')

  return [
    {
      id: 'event-1',
      year: '2024',
      date: 'OCTOBER 2024',
      title: `National Workshop on 3D CBCT Imaging & AI-Driven Diagnostics in ${deptName}`,
      organizers: isOMR ? 'Dr. M. Deivanayagi (Organizing Chair) & Dr. Elamparithi' : 'Department Organizing Committee',
      venue: 'APDCH Auditorium & Digital Simulation Lab',
      description: 'A national workshop featuring live clinical CBCT demonstrations, 3D volumetric rendering workflows, interactive case discussions, and hands-on software training.',
      type: 'National Workshop',
    },
    {
      id: 'event-2',
      year: '2023',
      date: 'JULY 2023',
      title: 'Continuing Dental Education (CDE) Program on TMJ Disorders & Orofacial Pain',
      organizers: 'Department Faculty & Alumni Association',
      venue: 'APDCH Main Conference Center',
      description: 'Full-day state-accredited CDE symposium covering non-surgical TMJ protocols, diagnostic splint therapy, and multidisciplinary pain management.',
      type: 'CDE Symposium',
    },
    {
      id: 'event-3',
      year: '2023',
      date: 'MARCH 2023',
      title: 'Hands-on Clinical Seminar: Early Screening of Potentially Malignant Oral Disorders',
      organizers: 'Department Clinical Faculty',
      venue: 'Oral Medicine Outpatient Clinic',
      description: 'Interactive clinical training seminar focusing on chairside diagnostic aids, biopsy techniques, and early lesion detection.',
      type: 'Clinical Seminar',
    },
  ]
}

export default function DetailEvents({ department }) {
  const [selectedYear, setSelectedYear] = useState('All')
  const events = useMemo(
    () => department?.events?.length
      ? department.events
      : department?.useDefaultEvents
        ? getDefaultEvents(department)
        : [],
    [department]
  )

  // Extract available unique years
  const availableYears = useMemo(() => {
    const yearsSet = new Set(events.map((e) => e.year || '2024'))
    const yearsArr = Array.from(yearsSet).sort((a, b) => Number(b) - Number(a))
    return ['All', ...yearsArr]
  }, [events])

  // Filter events by selected year
  const filteredEvents = useMemo(() => {
    if (selectedYear === 'All') return events
    return events.filter((e) => (e.year || '2024') === selectedYear)
  }, [events, selectedYear])

  if (events.length === 0) return null

  return (
    <section id="department-events" className="relative overflow-hidden bg-foreground py-28 text-white md:py-36">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 glow-radial-t opacity-60" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Academic Events & CDE"
            title="Department Events & Workshops"
            description={`Continuing Dental Education programs, hands-on workshops, and national symposiums hosted by the ${department?.name || 'department'}.`}
          />
        </Reveal>

        {/* Year Filter Buttons */}
        {availableYears.length > 2 && (
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-white/50">Filter by year:</span>
              {availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => setSelectedYear(year)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                    selectedYear === year
                      ? 'bg-accent text-white shadow-md'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, i) => (
            <Reveal key={event.id || i} delay={i * 0.06} className="h-full w-full">
              <article className="group flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-white/10 hover:shadow-2xl md:p-7">
                <div>
                  {/* Top Bar: Event Type & Date */}
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/20 px-3.5 py-1 text-xs font-bold text-accent">
                      <Sparkles className="h-3 w-3" />
                      {event.type}
                    </span>
                    <span className="text-xs font-bold tracking-wider text-white/60">
                      {event.date || event.year}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="mt-5 font-display text-base font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-accent md:text-lg">
                    {event.title}
                  </h3>

                  {/* Details Grid */}
                  <div className="mt-4 space-y-2.5 text-xs text-white/70">
                    <div className="flex items-start gap-2">
                      <Users className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      <span className="font-medium text-white/90">{event.organizers}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent/80" />
                      <span className="font-medium text-white/80">{event.venue}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
