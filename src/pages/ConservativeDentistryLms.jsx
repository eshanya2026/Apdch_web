import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Cross, PlayCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'
import VideoCarouselGrid from '@/components/lms/VideoCarouselGrid'

const TOPICS = [
  'Diagnosis and treatment planning',
  'Dental caries and cavity preparation',
  'Restorative materials and techniques',
  'Aesthetic and adhesive dentistry',
  'Pulp biology and endodontic diagnosis',
  'Root canal instrumentation and irrigation',
  'Obturation and post-endodontic restoration',
  'Management of endodontic complications',
]

const VIDEO_IDS = [
  '1eTHRGSJ2pQ', '2G2HHHxUZ-U', 'x-PU-vJCLUg', 'A1YE_dmS7Ss', 'PuogEYudXK8',
  'lQrWMnwOHtA', '3rjBp8NagdE', 'S2j99MVQXvA', '8spGTwKMnUs', 'h7wusEyb6IQ',
  'wKcoIs-nlRU', 'O8ALyUvKVZc', '0OOS7-C58_E', 'ByP8vgnFJqM', 'sCEUQPJr-RU',
  'GxagMeTJKtk', 'v9qzOCEJMAI', 'V9wJXQuP3Yg',
]

const PRESENTATIONS_2024_25 = [
  ['Introduction to Operative Dentistry', '1cwyvhMx3XhFPUV1wf-RzrODztX8ytxti'],
  ['Principles of Cavity Preparation', '1v4qAgibHPNY_H0mDmvZtZnlx_Lmxbe-N'],
  ['Pulp Protection', '1M7ZFN017qwvDMCQefpdo6TbiuPnBS9pT'],
  ['Operative Cutting Instruments', '1XiSzh2pllFCs3D4JBaG1oL9EDL_tFH0T'],
  ['Infection Control in Operative Dentistry', '1B5rxNWT2GPUhBtJ6oo_q9QM70mC5LTCf'],
  ['Diagnosis and Treatment Planning', '1noBwnG2w6g6JU57cQZ7wT6oay-oxuXgm'],
  ['Pain Control in Operative Dentistry', '17dYyeqAb54N_I7G2B1my6XomIePp0WWM'],
  ['Dentin Hypersensitivity', '1NFqX81vi01vE5SXMZLQIeDVAvLiFRltA'],
  ['Gingival Tissue Management', '1S02dXtZwIWCNFX1sbSlrEoKf43fG43Vt'],
  ['Contacts and Contours', '1JhVfSjLRltVvkYGW_1YGqgYcsW4qvgOW'],
  ['Difference Between Inlay and Amalgam Restorations', '1ohPGTmmXjBzkLY7ks1YzZsdSQjJVegTV'],
  ['Cavity Modification for Amalgam Restoration', '1OHtBqhnVGEGPuAsYo48p0Rku4qxW4FRL'],
  ['Deep Caries Management', '1awp-36QrdihaA2u2RakJaQAQqqUhtL8y'],
  ['Preventive Resin Restoration', '1g-hOWNfQYNR_2HREB4A_sCYc9eqQTeKT'],
  ['Casting Procedures', '1kiEZvk9Y8xQ1qR2lIDPCU9WnMPWbN0xM'],
  ['Non-carious Lesion', '1-dgs2xqbbZkOSy3VFpVbnCTUpkCJZQBw'],
  ['Minimal Intervention Dentistry', '1v7RPetgAYAABN1Qt_Ly2mVFY1WnDtDcj'],
  ['Impression Techniques and Materials in FPD', '1M4L_qRMFQp13E_2BDCt2kqxFr2H_Be6I'],
  ['Provisional Restoration', '1trXfC6K10atbql1HM5Jg9dNd2RXNM1-Z'],
  ['Try-in and Cementation in FPD', '1soSIS2fcG890wa-pAUTyF6Ze4k6sVQnJ'],
  ['Smile Design', '1-05VA1EItvuVChQD3JyG5GRAD7PiDK3F'],
  ['Diseases of Pulp', '1E6I8kq7RFAcFgYtr8h7Ve4lAKf7pJ9E9'],
  ['Diseases of the Periradicular Tissues', '18MxME3wERRs4kDRF62xj_6WWBAtKIeVK'],
  ['Smear Layer and Its Importance', '1ODnE9lQtRHP9qCPk8YARbkX5lsD00lrR'],
  ['Rationale of Endodontic Treatment', '1Q13Wh5dbCEx5T3Vobt8nuPSRZK7v-Vrw'],
  ['Clinical Diagnostic Methods in Endodontics', '1Dlx845R0MIrGWXk47pedQNONjkexa-pp'],
  ['Pulp Vitality Test', '1t6LuMolMJrTcJb8BEIWcqRhdBai-O5aQ'],
  ['Anatomy of Pulp Cavity and Access Opening', '1Hm2kh_H4pQhHigBxP-wTUO5hQ8PB9ZNZ'],
  ['Access Cavity Preparation', '1kxtQe0dELjLST09jQwegHtewZj67eknK'],
  ['Irrigation Techniques', '1TM_DOCAsb7bqGsAl8b8pm5fl6YhdPD4W'],
  ['Working Length Determination', '1ucZ-V-NlLJI0DohJOqT5P6BsKU5gkadP'],
  ['Cleaning and Shaping', '1BJKBwi_vIe4GuAHnf6QCmGdGCiDlI11m'],
  ['Obturation Techniques', '1Oeyb053OiCsLlVMxM0it5wPpfw6FlIbh'],
  ['Endodontic Emergencies', '1Oeyb053OiCsLlVMxM0it5wPpfw6FlIbh'],
  ['Endodontic Mishaps', '1QnhGXmilsAVwJaNVLqmo1ZXgHPxG5lw4'],
  ['Management of Discolored Tooth', '1EErcNUBijcV9RQOxX7LqkzzupplEdkQw'],
  ['Root Resorption', '1dEDSbpbIv_JonGFz8wtY-HNZyJ3GL5ad'],
  ['Vital Pulp Therapy', '1SZFrD57qURnSsBmFovSos29sFvv6oEOS'],
  ['Regenerative Endodontics', '1v17sbICOf5OZQTuN25F_D3uqCJ-Z7olj'],
  ['Magnification', '1wvG3B2Z5Ley4-D7KuqO3D_B0yV27RF4C'],
]

const conservativeLevel = (index) => {
  if (index < 17) return 'Conservative Dentistry'
  if (index < 21) return 'Dental Materials'
  return 'Endodontics'
}

export default function ConservativeDentistryLms() {
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
                <ArrowLeft className="h-4 w-4" />
                Back to LMS Departments
              </Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Department LMS</p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Conservative Dentistry and Endodontics
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for preserving natural teeth through restorative care,
                endodontic diagnosis, root canal treatment, and evidence-based clinical practice.
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
                  This collection supports students in understanding disease diagnosis, tooth
                  preservation, restorative procedures, pulp therapy, and contemporary root canal
                  techniques. The lessons connect foundational science with practical clinical care.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Cross className="h-6 w-6" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    Use these lessons alongside preclinical exercises, clinical demonstrations,
                    faculty supervision, and prescribed academic materials.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-border/80 bg-surface p-7 shadow-brand-xs">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-bold text-foreground">Topics Covered</h2>
                </div>
                <ul className="mt-6 grid gap-3">
                  {TOPICS.map((topic, i) => (
                    <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>
                      {topic}
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
                description="Download the Conservative Dentistry and Endodontics learning material for each chapter as a PowerPoint presentation."
              />
            </Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={conservativeLevel} />
          </div>
        </section>

        <section id="videos-section" className="mesh-bg px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Video Library"
                title="Conservative Dentistry and Endodontics Videos"
                description="Select a lesson and learn directly on the APDCH website."
              />
            </Reveal>
            <VideoCarouselGrid videoIds={VIDEO_IDS} titlePrefix="Conservative Dentistry Lesson" />
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Explore another LMS department</h2>
              <p className="mt-2 text-sm text-white/70">Return to the department directory and continue learning.</p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/academics/lms"><ArrowLeft className="h-4 w-4" />All LMS Departments</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
