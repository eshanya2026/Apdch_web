import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, GraduationCap, PlayCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'

const TOPICS = [
  'Introduction to Orthodontics',
  'Growth Principles and Theories',
  'Craniofacial Growth and Development',
  'Development of Dentition',
  'Classification and Etiology of Malocclusion',
  'Case History and Clinical Examination',
  'Functional and Intraoral Examination',
  'Cephalometrics and Treatment Planning',
]

const VIDEO_IDS = [
  'PHFv7UIaH5E', 'jl9eL5hjehE', 'rbKkkDJcicg', '4UClzAA0I0g', 'iTp0z0qgJl4',
  '6fXUmWL3UaU', 'LWz7hjjMUL8', 'pY0rt36a3Rg', '_85D9iSPN8U', 'snQX0oPZAuE',
  'RZqla414ceY', 'jF39sWhSZDs', 'N7M9C7K5A5Y', '8oXVInE9XhQ', 'yBRSvw_tvxA',
  '7OufMbpa7jo', 'KjTqFXOq-cI',
]

const CHAPTERS_2024_25 = [
  ['Introduction to Orthodontics', '1EIaCV-l0818PD9YohXHCQZHGAopKbKwQ'],
  ['Growth – General Principles & Theories', '1iq5UeeQFgi-z14LW0muBXvXbcJOAyGQE'],
  ['Nasomaxillary Growth', '1mpLMZsObtC12-OXxakGPwKsA9wnoWGJO'],
  ['Mandible Pre & Post Natal Growth', '1eSv-DyxZ9go62mIOxq31g8JMf-h3mobL'],
  ['Development of Dentition', '1gCoG2sKYNrOCUwNOIKU_dfEYAf0sVLQ-'],
  ['Classification of Malocclusion', '1HtqY0jZVjPTrQ841FXwTJ9iaJYAfXPku'],
  ['Epidemiology and Etiology of Malocclusion', '1m5SUsuuN1r9N8whHdNFwKF0lxqj7p8Ga'],
  ['Habits', '10WxlAmp2hqYJe_5A0D9hTRnMjO5OPFzk'],
  ['Case History and Clinical Examination', '13_krl8fGEr5E81qsNpVIjUdHcxBWSksD'],
  ['Intraoral Examination', '16oUrV86N9CEDgol-IoneanvptHEYaQ52'],
  ['Functional Examination', '1A_z56-XdL1lOru8nn_qJyjhApbXisiKO'],
  ['Cephalometrics', '1rhIITcGht9qwbIfKmkx-U3PeBUsp--Sd'],
  ['Diagnostic Aids I', '1MSkh66nLK-_EvLjjiu7zztKnrm3LNZjR'],
  ['Diagnostic Aids II', '1A-MLYk1U9pMXIXBHIgr2TdkPGz-noF4Z'],
  ['Model Analysis', '1BM7xhm2ye8up2wI_snyAtpBVqj0zBu0j'],
  ['Skeletal Age Assessment I', '1DBI-RZVXnbZFkZwsqlSYQ9a-0R-48X_p'],
  ['Skeletal Maturity Indicators II', '1WFxwu7h7F0oxHbBB7SUUBhxPTPR2EMld'],
  ['Skeletal Age Assessment', '1f2kmJv2rLht707Ap3AqOsFuaxlxFHzI1'],
  ['Biology of Tooth Movement I', '1IBZ6btBiFXvOXb57e1Z_Ld6ipykv3Y3j'],
  ['Biology of Tooth Movement II', '1DiXX9QQHM2cJin_r80ieufMbUbgHle3j'],
  ['Biomechanics', '1w6Sqay6JunSNi8wnaEr4Lc5i5I4HjfhU'],
  ['Anchorage', '1FNOVKk5cjTcl8DvvdafsHahcmsxf_LPu'],
  ['Adult Orthodontics I', '1Js1H4ct7URkc3sdZfRulEE-WOWBB_fmb'],
  ['Adult Orthodontics II', '1ZO81MsihtC_UH8ziGwYcE9Gv1gFRXJ4e'],
  ['Early and Interceptive Treatment', '1KDLexNlYHHenEmRSPPERI5VF-N0J7k_y'],
  ['Expansion', '1mfqsKu9Tc2LPHMnuwEwdW7A5G5vchjtq'],
  ['Extraction in Orthodontics I', '1ql9yYVD6O6oP2EYEDWfzxSk5c2HJNeFO'],
  ['Extraction in Orthodontics II', '1I-SH74aD7cD8qgIFPEz9ahv-TEvYAsk_'],
  ['Removable Appliance', '1kBMEfR1hnUwigU72m7AhvgS3taRuFnGW'],
  ['Fixed Appliance', '1oeDCKeJ6opk2YRDKfVYapWX6IWgSqeVE'],
  ['Bonding', '1zgq4NV3mMkY2-223Q0bYG45EOtRiSslV'],
  ['Materials', '1ZncQuvjClIs2m_PRe8OPml00iQ_Q25jT'],
  ['Soldering and Welding', '1q3Axxsz6t8N_lBYmo7LkkvRV9IbnO_2j'],
  ['Magnets in Orthodontics', '1Gt8KpWxfvV3FmpSkqc2gZ1TfHKjqTfWB'],
  ['Functional Appliances', '1d8WYZNthK_pHmxnV0nf22UmUhbNyil8N'],
  ['Twin Block', '1xg-kN0bgObCfBJd4ARdjlzbCR6Hkx2gh'],
  ['Orthopaedic Appliance', '19HatQoXl7VVswQFTjZm4I9-SazcqogbG'],
  ['Headgear', '1m63TYt-xBdCvnlmQHHGaEw8wVS5O-pXn'],
  ['Orthopedic Revision', '1NlePTLC1xKskZYcqC3CzzXVohXbsg-Xf'],
  ['Diagnosis & Treatment', '19r34cidkS2C2EVGcb6K1ZR3HBdk6Pa-Q'],
  ['Class II Management', '1sIrGZ2rUnA5k5eNey0AYOsPSh7AdLLfI'],
  ['Class III Treatment', '1qaSiISru02evDHni9CsOb8Jfhv9ubZex'],
  ['Crossbite', '1g9MscyiMOckCkypQuh5-IQcBKV7kJ8d2'],
  ['Open Bite Treatment', '1amdW5WVSv_DJQqc3q_2NWCGYBC3-GeHs'],
  ['Treatment Planning', '19sVTvCa2ra0HhqNSfPCcNYmbMgn12YC9'],
  ['Surgical Orthodontics', '1HVgCLPJqMtY1_3vPfDMcdyoG7PQXRqN2'],
  ['Major Surgeries in Orthodontics', '1DyezKLmpzJKOI7BE1zPMBvUoQlehi8qM'],
  ['Temporary Anchorage Device', '1Yq_lZgt7K8_ouh5_C4iPp5yk-0mzu6ce'],
  ['Troubleshooting TAD', '10mcm-K1vLjDur0BqrWjxSclJJhbD9jgE'],
  ['Impacted Teeth', '1nFyhzphbBEhPgHIXRVLW9w08vUMF8gC2'],
  ['Implants in Orthodontics', '17i258QHpes2GRNvqDUTPCMUr70BmClK-'],
  ['Infection Control in Orthodontics', '1lZKWzU7n2ebuwxMOme3jeSdrNYFD-fd9'],
  ['Computers in Orthodontics', '1kutFaGu3VohJOLdcXhvFGev9jKt9m5cI'],
]

const orthodonticsLevel = () => 'Orthodontics and Dentofacial Orthopedics'

export default function OrthodonticsLms() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-foreground px-5 pb-24 pt-44 text-white md:px-8 md:pb-28 md:pt-52">
          <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <Link
                to="/academics/lms"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to LMS Departments
              </Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                Department LMS
              </p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Orthodontics and Dentofacial Orthopedics
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources covering the diagnosis, prevention, interception,
                and correction of malocclusion and dentofacial irregularities.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">BDS & MDS</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{VIDEO_IDS.length} video lessons</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{CHAPTERS_2024_25.length} chapter PDFs</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Self-paced learning</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  Course Overview
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This department learning collection supports undergraduate and postgraduate
                  study through focused video lessons. Students can review core principles,
                  diagnostic methods, growth and development, malocclusion, clinical examination,
                  cephalometrics, and treatment-planning concepts at their own pace.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    Use these lessons alongside classroom teaching, clinical demonstrations,
                    faculty guidance, and prescribed academic materials.
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
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
                        {i + 1}
                      </span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Academic Year 2024–2025"
                title="Chapter-wise Study Materials"
                description="Open or download the Orthodontics learning material for each chapter as a PDF."
              />
            </Reveal>
            <GroupedDownloadGrid items={CHAPTERS_2024_25} getGroup={orthodonticsLevel} format="pdf" />
          </div>
        </section>

        <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Video Library"
                title="Orthodontics Learning Videos"
                description="Select a lesson and learn directly on the APDCH website."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {VIDEO_IDS.map((videoId, i) => (
                <Reveal key={videoId} delay={(i % 6) * 0.04}>
                  <article className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-white shadow-brand-xs transition-shadow hover:shadow-brand-md">
                    <div className="aspect-video bg-foreground">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                        title={`Orthodontics learning video ${i + 1}`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex items-center gap-3 p-5">
                      <PlayCircle className="h-5 w-5 shrink-0 text-primary" />
                      <h3 className="font-bold text-foreground">Orthodontics Lesson {i + 1}</h3>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Explore another LMS department</h2>
              <p className="mt-2 text-sm text-white/70">Return to the department directory and continue learning.</p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link to="/academics/lms">
                <ArrowLeft className="h-4 w-4" />
                All LMS Departments
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
