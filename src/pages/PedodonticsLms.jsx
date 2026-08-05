import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, HeartHandshake, PlayCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'

const TOPICS = [
  'Growth and development of the child',
  'Behaviour guidance and communication',
  'Diagnosis and treatment planning for children',
  'Prevention and management of dental caries',
  'Pulp therapy in primary and young permanent teeth',
  'Traumatic dental injuries',
  'Space management and interceptive orthodontics',
  'Dental care for children with special healthcare needs',
]

const VIDEO_IDS = [
  '_S1OMC6TOfY', 'GF_JMogpjtk', 'NaOB84w2rUA', 'JM21vnwqZlw', '-w05sejR2bM',
  'yCrQ2DiUiJg', 'Z-n8lcSZeG4', '6rCT7eTo06I', 'GqYuIMb6KiI', 'SOhsdzXzf7s',
  'U6dVjm_h8jc', 'IFegT4rF0L0', 'rak5RjPOPwQ', 'GLVKGcWfO3A', '0dQM-9NDMzk',
]

const PRESENTATIONS_2024_25 = [
  ['Introduction to Pediatric Dentistry', '1-R8Zxw91LtRa2ZupfLY5hDpG2r4Mkfou'],
  ['Scope of Pedodontics and the Pedodontic Triangle', '1Qgmg9etM4KpGeCArOPrx9rQScWsCr7_N'],
  ['Case History Presentation', '1UB1QTulTKqv9YS_gAuRGE8szrrAzbQZL'],
  ['Radiology and Its Applications', '19z-p6GyPK-Y71FynDN_kJz2trrKGzQw7'],
  ['Development of Dentition', '13OkRB7QIeNWaB_3Vb12IVcwVBWDhVOYX'],
  ['Growth and Development', '1ApaXHiyj8nEUI5ZOpn9auaMDrWRUPKKd'],
  ['Growth Theories', '1Z3jev0ssYaTR0RztZn8OIohIyCO6uoKZ'],
  ['Development of Occlusion', '1Z3jev0ssYaTR0RztZn8OIohIyCO6uoKZ'],
  ['Developmental Disturbances of Teeth', '146xb_VGb-mveRbH4YLWpKy_xujoK6mYT'],
  ['Early Childhood Caries', '1y5qO00lNkYN7liTUaru276AbnU_3ZdYo'],
  ['Etiology of Caries and Rampant Caries', '1dDRlXXAAgVOLdn6dLsjryByg3rgeVugT'],
  ['Diet Counselling and Infant Oral Health', '1J480DMAnfK_zmbJgavqF8ROCeB40sGIG'],
  ['Child Psychology Theory', '1-hj67dQIqK0zWVHbBDzVmAH_wrLdn88J'],
  ['Theories of Child Psychology', '1i59R4t-mQDsaHiVRUYTnxZ2SShnx_YnW'],
  ['Pit and Fissure Sealants', '1Ei8AhmXmR92PpJdR6rOQipmiYBoxhmnx'],
  ['Behaviour Management Part I', '1WE73x_FoZ76rtxr5fuApvlYIv0FZyNgv'],
  ['Behaviour Management Part II', '15W7MhRgK0eiHnexVoJAeuqg9kISIfic2'],
  ['Isolation Techniques', '1a94RVB4tYGv8jVhgYjozy4dabbDwY9NE'],
  ['Diagnosis of Caries', '1G2TR-4KrJdWxygFCsqDSdvuBrYK2LgFb'],
  ['Systemic Fluorides', '1DWZLpdzyI_s7lWHlG5X__8ReRw5-Z3Cc'],
  ['Topical Fluorides', '1jq3pwZSq8-lbcMmnaJcyqZl8-BdNv8pE'],
  ['Pediatric Endodontics Part I', '1O0uSZXqZ8SIX9SCoCT0Jg3lCnM_p5Exm'],
  ['Pediatric Endodontics Part II', '1T5fO-IPdKXqgy2PRkxoFsLSnuhhXBamP'],
  ['Interceptive Orthodontics', '11lfwY9IoBw1oXyQ6CyvoinRlCj5odYMI'],
  ['Preventive Orthodontics', '1jvRI6t-yPKRQ8pdfouQCpPHPH76fKj_W'],
  ['Oral Habits Part I', '1GOLeb2z8tj8iddCIinIVZIp5VIwyMWwB'],
  ['Oral Habits Part II', '1mQyGZSUxriqQlqmPyEj-PS8Y3qouu799'],
  ['Traumatic Injuries Part I', '1m2zRr1To7Pf0SvtK97hcPourUkyDOZdb'],
  ['Traumatic Injuries Part II', '1VoS9BqhVZyGM0oiDcDGQ2qc1Arv_2J9C'],
  ['Cleft Lip and Palate', '1Pc3YdXMN-GJnUGqDNy2uGugI4XLU3u2W'],
  ['Drugs Used in Pediatric Dentistry I', '111ISmttYBLjyhFhJYgoWFHR1M8P0TMxE'],
  ['Pediatric Prosthodontic Rehabilitation', '1RZFjtG4eCXPb3lixA07-gWf3VWMTTV_x'],
  ['Local Anaesthetic Agents', '1FrTVl6embRfshIUdjanSdjODY4Lxlb1w'],
  ['Pediatric Considerations in Oral Surgery', '1OLlxiDKL3gYFn9Ttl0FCVdY16x7RnzxW'],
  ['Drugs Used in Pediatric Dentistry II', '1YXe77CE5DCTWdNps9UJZYluNpAReMkAK'],
  ['Child Abuse', '1URGL2G4F1G-NTurk4yI4IjCf08hEeZwd'],
  ['Gingival and Periodontal Diseases in Children I', '1wPu9GuGWSpX3O083WO6SzE8t7qDRaq_q'],
  ['Gingival and Periodontal Diseases in Children II', '1J42z7RUdXykbRVpzERebKXGJsrxJMIDL'],
  ['Crowns in Pediatric Dentistry', '1Bookm3s_TmExYup5t9ZgnlGJPDHeph12'],
]

const pedodonticsLevel = () => 'Pedodontics'

export default function PedodonticsLms() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-foreground px-5 pb-24 pt-44 text-white md:px-8 md:pb-28 md:pt-52">
          <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <Link to="/academics/lms" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to LMS Departments</Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Department LMS</p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Pedodontics and Preventive Dentistry</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for compassionate, preventive, restorative, and
                developmentally appropriate oral healthcare for infants, children, and adolescents.
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

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">Course Overview</h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This collection supports learning across child development, behaviour guidance,
                  caries prevention, pulp therapy, dental trauma, interceptive care, and treatment
                  for children with special healthcare needs.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><HeartHandshake className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">Use these lessons with clinical postings, paediatric demonstrations, faculty supervision, and prescribed materials.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-border/80 bg-surface p-7 shadow-brand-xs">
                <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-primary" /><h2 className="text-lg font-bold text-foreground">Topics Covered</h2></div>
                <ul className="mt-6 grid gap-3">
                  {TOPICS.map((topic, i) => <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-muted"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>{topic}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Academic Year 2024–2025" title="Chapter-wise Presentations" description="Download the Pedodontics and Preventive Dentistry learning material for each chapter as a PowerPoint presentation." /></Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={pedodonticsLevel} />
          </div>
        </section>

        <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Pedodontics and Preventive Dentistry Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VIDEO_IDS.map((videoId, i) => (
                <Reveal key={videoId} delay={(i % 6) * 0.04}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-brand-xs transition-shadow hover:shadow-brand-md">
                    <div className="aspect-video bg-foreground"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={`Pedodontics and Preventive Dentistry learning video ${i + 1}`} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                    <div className="flex items-center gap-3 p-5"><PlayCircle className="h-5 w-5 shrink-0 text-primary" /><h3 className="font-bold text-foreground">Pedodontics Lesson {i + 1}</h3></div>
                  </article>
                </Reveal>
              ))}
            </div>
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
