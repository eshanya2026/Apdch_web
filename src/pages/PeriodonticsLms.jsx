import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, PlayCircle, ShieldPlus } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'

const TOPICS = [
  'Periodontal anatomy and pathogenesis',
  'Clinical examination and diagnosis',
  'Plaque control and preventive periodontics',
  'Non-surgical periodontal therapy',
  'Periodontal surgical procedures',
  'Mucogingival and regenerative therapy',
  'Dental implant diagnosis and planning',
  'Implant maintenance and complications',
]

const VIDEO_IDS = [
  'SOhsdzXzf7s', 'SAnggmrFoXA', 'mEW1KsJLPnA', 'uy5wAwY_lY4', 'ayqw10XWCeo',
  'uCqvKeOjLVs', 'oIKwoLVfrrg', 'pHIG_U-qtoc', '--5jcZoiNi4', 'FoUxorOkc68',
  'PU6L5o1kIRA',
]

const PRESENTATIONS_2024_25 = [
  ['Introduction to Periodontics', '1pSwYzrngAb6O93kMJCdAzb2ACy9dCn-n'],
  ['Classification Part I', '1QYQDvAzO88WHI93htL8bDU5kd4bAFFo1'],
  ['Classification Part II', '1-oTSrJi7xRu_vp9qlSxoME84tRQH9RPQ'],
  ['Aggressive Periodontitis', '1-oTSrJi7xRu_vp9qlSxoME84tRQH9RPQ'],
  ['Aging and Periodontium', '19Awr7Xz4Hc_NlCWyuOwH0xGtKLVP-63C'],
  ['Acute Herpetic Gingivostomatitis and Pericoronitis', '1NtMszlQ9j8dFeDKzyM0B-T4NUokSE4lz'],
  ['AIDS and Periodontium', '1v2-inFZUqszuMKrtXsJfxMyhnlO69pTv'],
  ['Alveolar Bone', '1X5IhJlYsLnjnapv6GxVhMD4QJAAIsAnr'],
  ['Acute Necrotizing Ulcerative Gingivitis', '1wzLXtMc6xPO_f4vwbLr9B_K34-dwvItt'],
  ['Calculus', '1wF_7dR0W0yxp2SC7kG6f5BGC0qPs6q-M'],
  ['Cementum', '1atHx7IXxmKt_xoc6-xml4SKpXwmJJuf9'],
  ['Chronic Periodontitis I', '1YZj9IPHHgTNAR07n474FWzJT0Ra9LHs_'],
  ['Clinical Features of Gingivitis', '1opizGEfTv-AXr9R2Uo4z85CwIi76hjvN'],
  ['Dental Plaque Part I', '1qIvPvGgPb-3emCIFZ61BYh9c_a19tXuA'],
  ['Dental Plaque Part II', '1wYUGiC91KY6i1mKUyacCk_BBCpzPYrXi'],
  ['Gingiva Part I', '1kayaUTlQ-_UADhD3t8FebcT9EfF2uTn-'],
  ['Gingiva Part II', '1UFU1Ql2nImt7_T3kLG7C81q6JAx_Pqjz'],
  ['Gingival Crevicular Fluid', '1L1ZFTLXbrTqBFuwhhUTKb_1K8ysg-iTP'],
  ['Gingival Enlargement', '166fIfJw1DWH6YtPkKmib5cics1NSiSEG'],
  ['Gingival Inflammation', '1yFdPqKb8-3A2xP7iqXOdUXqXfVLhAhhb'],
  ['Gingivitis', '1dvXSJvY8pOzAC59H_kTsGVPPECwmD5vr'],
  ['Immunity Part I', '1eaM7hu8t4OjfJpwI0wuE0_WHAz-nk5Qz'],
  ['Immunity Part II', '1MXuA4mhyXKkozGvA8z8GqqOUZWYyV--i'],
  ['Periodontal Abscess', '1THqfmgwb2rfzjGX_ImPckwOifIzjb7-k'],
  ['Periodontal Ligament', '1sajAhKV6_9C9fL0lO7oIaDh8MrG397uv'],
  ['Periodontal Pocket', '1ybu9QPPXBTryMJjTmAx-iMZBiTcnIy7o'],
  ['Systemic Diseases and the Periodontium', '1FPtpICFxE6A6ffsp_6fh2-cZv6w1xYgr'],
  ['Smoking and Periodontal Disease', '1ThL7rGuMN3nTvIOWr-TSzRQrgHSp3B0B'],
  ['Acute Gingival Infections', '1O6xPx2hRsg_HypBXJcVkc_zk0m6MqZUC'],
  ['Anti-infective Therapy', '1tCC1akv4NjfrFZElZJLcgVmKF59P8qUF'],
  ['Bone and Patterns of Bone Loss', '1dby6PqqBxKOcEzZ6A4vik27MJoqUtM3A'],
  ['Chronic Periodontitis II', '1ABGsaC1MNRrtTvKKzGNPYw8T8wV6LJP8'],
  ['Clinical Diagnosis Parts I and II', '17QNKVgxvJPedBzX95mJMw3fkqBLK1top'],
  ['Conscious Sedation', '1cf4AdE8JeV83B1uhkHQNX1xqb5bhX_NF'],
  ['Endo-Perio Interrelationship', '1EjN0cLnvue_arT0xbr_Min_OPbBdkjE5'],
  ['Ethics in Dentistry', '1X5IhJlYsLnjnapv6GxVhMD4QJAAIsAnr'],
  ['Lasers in Periodontics', '1_Heba32V806PjnxIyUdbQzhZbdjQQBNc'],
  ['Local Drug Delivery', '1AdjfejwOhhRH-K4v-KildwvRnKlVET1L'],
  ['Microsurgery', '1t3_thuc3nx6kn8YOiUXUpkwtjvvG4c3_'],
  ['Peri-implantitis', '1vUv3-YNpNJ0qR6QGIvjmY2mc7Bw9BepC'],
  ['Periodontal Plastic Surgery Parts I and II', '1qsWkYCfYFoS_OOmWiRbMysPhyLKCTINq'],
  ['Periodontal Flap', '1IVURfeN3aP7dIp69UT7TAwuojYKg-xl1'],
  ['Management of Medically Compromised Patients', '1Jev16CbFVaWuYqQVfnCtYc77_bXCntoV'],
  ['Periodontal Prognosis', '1jU18SdQ2-vAs0u3S3CEezWxNkgMPTieH'],
  ['Phase I Therapy', '1w-eFxGlbsPVSjf0pQ1FhslU-ijwnFqEz'],
  ['Regeneration Part I', '1FSIopVZKzSZ-Jd3_VB1YIJDnFde1i1d7'],
  ['Regeneration Part II', '11vx3jEXT5IqfFVRP8Qc9qcWruLqFmgdQ'],
  ['Resective Osseous Surgery', '1EnW7YW58O8B8rdpvsSOcXifb4TQLyJw2'],
  ['Risk Assessment', '19ZKtAU_lKEsA4Fn-7SfZDfvuCsWKQGP7'],
  ['Sonics and Ultrasonics', '1hpxgeWVjqnAgMSTr9RzIuj5c0s7o0dQr'],
  ['Supportive Periodontal Therapy', '1ObqFdaI7UGGCFN7LjhIaNMsNSF_kioOk'],
  ['Treatment Plan', '1PZ0CgayU-JVJoVQEiGhW7P_kJ1LYlRf-'],
]

const periodonticsLevel = (index) => index < 28
  ? 'Periodontics Third Year'
  : 'Periodontics Fourth Year'

export default function PeriodonticsLms() {
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
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Periodontics and Implantology</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for periodontal health, disease management,
                regenerative care, implant planning, and long-term maintenance.
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
                  This collection supports learning across periodontal diagnosis, prevention,
                  non-surgical and surgical therapy, tissue regeneration, implant placement,
                  peri-implant health, and evidence-based maintenance.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><ShieldPlus className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">Use these lessons with clinical postings, surgical demonstrations, faculty supervision, and prescribed materials.</p>
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
            <Reveal><SectionHeading eyebrow="Academic Year 2024–2025" title="Chapter-wise Presentations" description="Download the Periodontics and Implantology learning material for each chapter as a PowerPoint presentation." /></Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={periodonticsLevel} />
          </div>
        </section>

        <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Periodontics and Implantology Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VIDEO_IDS.map((videoId, i) => (
                <Reveal key={videoId} delay={(i % 6) * 0.04}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-brand-xs transition-shadow hover:shadow-brand-md">
                    <div className="aspect-video bg-foreground"><iframe src={`https://www.youtube-nocookie.com/embed/${videoId}`} title={`Periodontics and Implantology learning video ${i + 1}`} className="h-full w-full" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
                    <div className="flex items-center gap-3 p-5"><PlayCircle className="h-5 w-5 shrink-0 text-primary" /><h3 className="font-bold text-foreground">Periodontics Lesson {i + 1}</h3></div>
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
