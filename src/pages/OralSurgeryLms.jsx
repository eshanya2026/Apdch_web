import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, PlayCircle, Stethoscope } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'
import VideoCarouselGrid from '@/components/lms/VideoCarouselGrid'

const TOPICS = [
  'Patient evaluation and surgical diagnosis',
  'Local anaesthesia and pain control',
  'Principles of exodontia',
  'Impacted teeth and minor oral surgery',
  'Management of maxillofacial trauma',
  'Oral infections and surgical complications',
  'Cysts, tumours, and pathology of the jaws',
  'Orthognathic and reconstructive surgery',
]

const VIDEO_IDS = [
  'kPMDCuUpvCc', 'PLQydmVm-Hw', 'l03fJ-F2Tgo', 'MAN0Nrzll5Q', '11NB_0jamsw',
  'd0Vrb2A7cGk', 'sNNq6ENF17s', 'RQ-oDO5phJ4', '2A1n4B7JeiE', 'yGZCtts-Okc',
  'oxcwG9hMswQ', 'rWwHa8l2cxw', 'iOZOKa-fs1M', '6zIc-2HfZUE', 'u0Dac6vTPZs',
]

const PRESENTATIONS_2024_25 = [
  ['Exodontia', '14jyVpWjooihc8XOW_4zLH8or7nwLNenB'],
  ['Impaction', '1kIcs9J39RMWg1bsbKoEX6RoKF941k20v'],
  ['Cysts of the Jaws', '1yr_cYIytIjc6strLYIrsdSNhTP1GQjQP'],
  ['Preprosthetic Surgery', '1IoXj4QWOVUp3ksx65e18jBeSj6XglIVY'],
  ['Fracture of the Mandible', '1F_gkhHaTXQoVQ6FjzTEh4OiKu3HHj8YJ'],
  ['Condylar Fracture', '1YjhJh79PT4IVZ_AIjKRPSHVA9OKLOcks'],
  ['TMJ Dislocation', '1EPu02TTlEIGojnrjNLJmY909HMx9NmEt'],
  ['TMJ Ankylosis', '1fy31q9-niqxyLuWBRaZ1fi3dK4LHGnvR'],
  ['Trigeminal Neuralgia', '1xTVfq_BXeSbPUwOiD_VhnjV7mbNWgmyf'],
  ['Cleft Lip and Palate', '17c0nmn8T65QhpqYBXWXec0Mf2E17tl6I'],
]

const oralSurgeryLevel = () => 'Oral and Maxillofacial Surgery'

export default function OralSurgeryLms() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-foreground px-5 pb-24 pt-44 text-white md:px-8 md:pb-28 md:pt-52">
          <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <Link to="/academics/lms" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white">
                <ArrowLeft className="h-4 w-4" /> Back to LMS Departments
              </Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Department LMS</p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Oral and Maxillofacial Surgery
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources covering surgical diagnosis, exodontia, trauma,
                pathology, and contemporary oral and maxillofacial surgical care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">BDS & MDS</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{VIDEO_IDS.length} video lessons</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{PRESENTATIONS_2024_25.length} presentations</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Self-paced learning</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  Course Overview
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This collection supports students in surgical assessment, treatment planning,
                  operative principles, complication management, trauma care, and advanced
                  maxillofacial procedures through focused video-based learning.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><Stethoscope className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    Use these lessons with clinical postings, operative demonstrations, faculty supervision, and prescribed materials.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-border/80 bg-surface p-7 shadow-brand-xs">
                <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-primary" /><h2 className="text-lg font-bold text-foreground">Topics Covered</h2></div>
                <ul className="mt-6 grid gap-3">
                  {TOPICS.map((topic, i) => (
                    <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>{topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="presentations-section" className="bg-surface px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Academic Year 2024–2025"
                title="Chapter-wise Presentations"
                description="Download the Oral and Maxillofacial Surgery learning material for each chapter as a PowerPoint presentation."
              />
            </Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={oralSurgeryLevel} />
          </div>
        </section>

        <section id="videos-section" className="mesh-bg px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Oral and Maxillofacial Surgery Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <VideoCarouselGrid videoIds={VIDEO_IDS} titlePrefix="Oral Surgery Lesson" />
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            <div><h2 className="font-display text-2xl md:text-3xl">Explore another LMS department</h2><p className="mt-2 text-sm text-white/70">Return to the department directory and continue learning.</p></div>
            <Button asChild size="lg" variant="secondary"><Link to="/academics/lms"><ArrowLeft className="h-4 w-4" />All LMS Departments</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
