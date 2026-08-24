import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, PlayCircle, Smile } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'
import VideoCarouselGrid from '@/components/lms/VideoCarouselGrid'

const TOPICS = [
  'Diagnosis and prosthodontic treatment planning',
  'Complete denture prosthodontics',
  'Removable partial dentures',
  'Fixed partial dentures and crown preparation',
  'Dental materials and impression techniques',
  'Occlusion and articulators',
  'Implant-supported prostheses',
  'Aesthetic and maxillofacial prosthodontics',
]

const VIDEO_IDS = [
  '8croxSuDP2I',
  'chVua2WmAek',
  'b-i2Bv_QC14',
  'EUa-nlPRA5g',
  '_S1OMC6TOfY',
  '_EtkBhNtYuM',
  '7ltlVPhd2tM',
]

const PRESENTATIONS_2024_25 = [
  ['Mouth Preparation in Complete Dentures', '1ySFyhEjlWsumajA_LSdGHk2Zq7kZiFuL'],
  ['Mandibular Movement', '12IneAJRwK7YCtkcv9p9Go6m2PgUuzUT1'],
  ['Orientation Jaw Relation', '1OCzbI8uVLiIZR9UaY7MWdJArxpb9H2k-'],
  ['Vertical Jaw Relation', '1w0i-aIZ_K5b3g06gL_kjJ60kPcBNzPZA'],
  ['Speech Considerations in Complete Dentures', '1T4RWLa9ttLYQYX_zKUKedpYZbcqF8I4O'],
  ['Phonetics in Complete Dentures', '1MafRUDwvKHwG-AvlKe9QkHgrA8PE8If4'],
  ['Balanced Occlusion', '1LwuM1LeQYOmorLDBLJKkrL9ZK1S2u1TH'],
  ['Monoplane and Lingualized Occlusion', '1si8RN4cPVUY_rG2pEG0jRJ1VIcn7ero1'],
  ['Reline and Rebase – Audio', '1_kkjxTGNkWELWaYFkUoFi__wqGAPenUo'],
  ['Reline and Rebase', '1SSlmkvsPmVwccvUpt5rsFMr94ho1uuZR'],
  ['Single Complete Denture', '15cd6FS6O8BdX31jHrGCH3u8M2EjwdQvD'],
  ['Sequelae of Wearing Complete Dentures', '1lKxGCP8YRWYT055a8tRIaf6w_B5WF1SK'],
  ['Impression Techniques and Materials in FPD', '1M4L_qRMFQp13E_2BDCt2kqxFr2H_Be6I'],
  ['Provisional Restoration', '1trXfC6K10atbql1HM5Jg9dNd2RXNM1-Z'],
  ['Try-in and Cementation in FPD', '1soSIS2fcG890wa-pAUTyF6Ze4k6sVQnJ'],
  ['Smile Design', '1-05VA1EItvuVChQD3JyG5GRAD7PiDK3F'],
  ['Implant Occlusion', '1QQdu1yahUUrZAiM8KdDPwVdHrL2-xd1t'],
  ['Extraoral Defects', '10kd5J1t5NNiqdG4zhoVTHukZW3pAeCW5'],
  ['Maxillary and Mandibular Defects', '1y-XsyS3ORAsgOI1wli5KwCeqObMWHeZu'],
  ['Maxillofacial Materials', '1VCJBEJ9SriookZdLv2HGus1PMYHYeB8K'],
  ['Retention in Maxillofacial Prosthodontics', '1GC9PB3FwyKHtaR1kpe-AMvAtUCCgBkZG'],
  ['Major Connectors in RPD', '14pXejF_HC5VTVpY3X5hfYeYoZmhPQ3AZ'],
  ['Indirect Retainers and Minor Connectors', '1bKCoFUPbttBL2E0x9DhZP91ppHdkCEaB'],
  ['Rests and Rest Seats', '1UGWtXG2S8ZBYSvSlxSgzjY2nVDqc95U-'],
]

const prosthodonticsLevel = (index) => {
  if (index < 12) return 'Complete Denture'
  if (index < 16) return 'Fixed Partial Denture'
  if (index < 17) return 'Implant'
  if (index < 21) return 'Maxillofacial Prosthesis'
  return 'Removable Partial Denture'
}

export default function ProsthodonticsLms() {
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
                Prosthodontics Crown and Bridge
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for restoring oral function, comfort, and aesthetics
                through removable, fixed, implant, and maxillofacial prosthodontics.
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
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">Course Overview</h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This collection supports learning across diagnosis, treatment planning, complete
                  and partial dentures, crowns and bridges, occlusion, implants, and contemporary
                  prosthodontic materials and techniques.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><Smile className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">Use these lessons with laboratory exercises, clinical demonstrations, faculty supervision, and prescribed materials.</p>
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
                description="Download the Prosthodontics Crown and Bridge learning material for each chapter as a PowerPoint presentation."
              />
            </Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={prosthodonticsLevel} />
          </div>
        </section>

        <section id="videos-section" className="mesh-bg px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Prosthodontics Crown and Bridge Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <VideoCarouselGrid videoIds={VIDEO_IDS} titlePrefix="Prosthodontics Lesson" />
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
