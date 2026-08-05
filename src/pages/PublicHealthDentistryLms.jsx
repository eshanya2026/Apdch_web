import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, PlayCircle, Users } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'

const TOPICS = [
  'Principles of public health and dentistry',
  'Epidemiology and oral health surveys',
  'Biostatistics and research methodology',
  'Preventive dentistry and health promotion',
  'Community oral health programmes',
  'Dental health education and communication',
  'Healthcare delivery systems and policy',
  'Ethics, programme planning, and evaluation',
]

const VIDEO_IDS = ['sfiOgYMuXYs', 'HqEQlC8aH74', 'ft89y1p6FKQ', 'O2Z5cah9BR0', 'Jxae4D2-xDM']

const PRESENTATIONS_2024_25 = [
  ['Concepts of Health', '1vOZB9ycbUdexl0okm3n8LYcU2izuKBhM'],
  ['Introduction to Epidemiology', '1i_Vyj_BUIqJLv2qXeqfnh_XA7cXlqfqD'],
  ['Descriptive Epidemiology', '1Y8JUUH7AIHT1qsdL5cLw48KE3b2Exfhm'],
  ['Biomedical Waste Management', '1MPwXdV2thBFtJ4l-YdTCGfNFF0ETR6qV'],
  ['Epidemiology and Etiology of Dental Caries', '18GozfIoTx6aorCzAW_Fao6L0jvwF1Fe3'],
  ['Pit and Fissure Sealants', '1gkKc4kM0kFtaGt7V3LqqV95Z2_s3uEu4'],
  ['Epidemiology of Periodontal Diseases', '1dDUj9Gz0qM8FcxX92o8riYURmvc7qI-a'],
  ['Prevention of Periodontal Diseases', '1g2Wn1-AkTZCy54RBhRHOaC2msiZdYsaz'],
  ['Planning and Evaluation', '1ycmZF-HvoIfFPMULd4JjmagcrKWGcd1G'],
  ['Introduction to Fluorides', '1WcMw001Yfxh9mNSU4mpKWNNEGA4PXLOY'],
]

const publicHealthLevel = () => 'Public Health Dentistry'

export default function PublicHealthDentistryLms() {
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
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Public Health Dentistry</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for disease prevention, oral health promotion,
                epidemiology, community programmes, research, and equitable dental care.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">BDS</span>
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
                  This collection supports learning in epidemiology, prevention, health education,
                  biostatistics, survey methods, programme planning, and the delivery of effective
                  oral healthcare across diverse populations.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><Users className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">Use these lessons with field visits, community postings, survey exercises, faculty guidance, and prescribed materials.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-border/80 bg-surface p-7 shadow-brand-xs">
                <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-primary" /><h2 className="text-lg font-bold text-foreground">Topics Covered</h2></div>
                <ul className="mt-6 grid gap-3">{TOPICS.map((topic, i) => <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-muted"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>{topic}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Academic Year 2024–2025" title="Chapter-wise Presentations" description="Download the Public Health Dentistry learning material for each chapter as a PowerPoint presentation." /></Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={publicHealthLevel} />
          </div>
        </section>

        <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Public Health Dentistry Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VIDEO_IDS.map((videoId, i) => (
                <Reveal key={videoId} delay={(i % 6) * 0.04}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-brand-xs transition-shadow hover:shadow-brand-md">
                    <div className="aspect-video bg-foreground"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={`Public Health Dentistry learning video ${i + 1}`} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                    <div className="flex items-center gap-3 p-5"><PlayCircle className="h-5 w-5 shrink-0 text-primary" /><h3 className="font-bold text-foreground">Public Health Dentistry Lesson {i + 1}</h3></div>
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
