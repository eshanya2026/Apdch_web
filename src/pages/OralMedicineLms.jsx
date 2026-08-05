import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, PlayCircle, ScanLine } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'

const TOPICS = [
  'Oral diagnosis and clinical examination',
  'Oral manifestations of systemic diseases',
  'Orofacial pain and temporomandibular disorders',
  'Potentially malignant oral disorders',
  'Dental radiographic techniques',
  'Interpretation of maxillofacial radiographs',
  'Advanced imaging and diagnostic applications',
  'Evidence-based treatment planning',
]

const VIDEO_IDS = [
  'AVfOYtYqdxs',
  'SSNi4USE-WU',
  'qQECmMxqjYg',
  'SFC0yQ2WBn8',
  'YkM3lURrgyU',
  'oMOJbxZCl0Y',
  'Eehr_UKMyBw',
  'AiuQOcrNGyA',
  'p0yZGAEndno',
]

const PRESENTATIONS_2024_25 = [
  ['Caries Diagnosis', '13zfC9Mt5VmkCwpM3025nOwHmyjzRiCYi'],
  ['Caries', '1iVkAAZEI0GglZJMgSNA6C0tJk7mNT66b'],
  ['Cervical Lymphadenopathy', '1cOOLGhNplr6KXu67mg8O31I1o_pMEQkB'],
  ['Developmental Abnormalities of Teeth', '1pkOoMFzkrk2w2DT4eqc4vdcxitxWyRxS'],
  ['Developmental Disturbances', '1ScshDqmliNIoOZ8W0dAXy6OwRh2nRyuG'],
  ['Disorders Affecting the Gingiva', '1mJlYRqHphmU1ADR4mDSJ9xhRphH0LVbp'],
  ['Odontomas', '1nM2XEGzrNfALbd6weBhsvIxZSHOnmFPN'],
  ['Management of Osteomyelitis of the Jaws', '1ybPVRvOK-3JtNawXitZ1UateVhOWSvZd'],
  ['Oral Lichen Planus', '1A-A_rT3zF6LhRh3UgBn1ZeSYL970UgGe'],
  ['Oral Submucous Fibrosis', '1xf4bJblUzZdTQFzWv5ZUW-kRfdocH1WZ'],
  ['Red Lesions', '1oRZo2qMUSEShL-kUPNF__OdmNA_PQYmi'],
  ['Vesiculobullous Lesions', '1OQ34MEmJbWepgKpZ3gm37jWCPh0eSlYb'],
  ['White Lesions', '1sQIJD5BVZENHJTjQXyVPGa8Qc4tBeJMk'],
  ['Bone Cells – Osteoblasts, Osteocytes and Osteoclasts', '1xyDQQUEIsHocDVkj9h8Dd9Z2i_l7RdzR'],
  ['Bone Tumours', '1VsH4wxfZbdeQZ5MEQdWA0HAo05YqJtfn'],
  ['Bone', '1_ERVJZIfF8xzGWJ9jYrGBORqxL2cVX5T'],
  ['Disorders of Bone and Teeth', '1GFiCoF7J1NEGSRsF3xbkGjZ3pxV5dRxT'],
  ['Fibro-osseous Lesions', '1YdJvt5sjwzqcGlEO0iFTv4w08C-oZwqh'],
  ['Biopsy', '1uKqT27bUEwyIrdVyz5HAmnedtYI2XG51'],
  ['Candidiasis', '1rMH0TSD9STVPv_Bw7rQG54kDSQLcCjbN'],
  ['Viral Infections of the Oral Cavity', '1Ff7AQUoQ_g5UwgKGe2m_NBqJGf3DSGCm'],
  ['Myofascial Pain Dysfunction Syndrome', '14giNlN2OQ7oRI-6D4ORSBn18uFRZm4yL'],
  ['Cysts', '1dQMP9CFFfQhEMCT8hsDLX5rJgfqLV4OT'],
  ['Cardiovascular Disorders', '1Fv5Sw0-9NmZz1MuHFKaz1OMFlEUV-PbC'],
  ['Gastrointestinal Disorders', '1ZOTFH35DUt2vmn02z7RkGr-fZLCAG3u5'],
  ['Haematology Disorders', '1Dwtdh2zIkx6JrKUrgnUIC4H3NIxBZnSp'],
  ['Hepatic Disorders', '1c6L6rMOTAVqac_LmygBAVA7qsZCa5hjN'],
  ['Renal Disorders', '1MKtCsnC6v7xHirgSf8e1NGKq0qXBrAEd'],
  ['Respiratory Disorders', '1f1iM1WsuNJCvTm_AKD8Da9xc2HFITqJc'],
  ['Facial Palsy', '1JRGOoQ_xtoZqgGw_VuXIgTFZn5cL-rAP'],
  ['Orofacial Pain', '17E_A15nf3WjIWej-1ZmSP4WFkUPWbatY'],
  ['Trigeminal Neuralgia', '14obNqXjgqcK8XSf4XdJf68e9o-R9boPU'],
  ['Corticosteroids', '1qxvGO7HphFZCEUks0M24n9aYFPtwyz96'],
  ['NSAIDs in Oral Medicine', '1TDejYeXYZZ0HJrUzVg39CN6Nr-zJ1sRP'],
  ['Forensic Odontology', '1TyU30DUgg7xYygnOyEPCIXql02amnrvm'],
  ['Salivary Gland Disorders', '18Q9fdM1lq_XMW6WzovK96zPbsQsnNzsX'],
  ["Sjögren's Syndrome", '1kOCVpfNEiS4jpv05tMJgrjJCe8kF_r_x'],
  ['Tongue Development', '1brOFevXUGnC8N20rIvtwPA6_DJYxwa6X'],
  ['Tongue in Oral and Systemic Disorders', '1t_FmeWreyN_TMUAcc-exbT99vQEVPWlO'],
  ['X-ray Tube', '1e4_aedMVFVyQCFTPrK1OspJ3NuuZtMM7'],
  ['Production of X-rays', '1zjUbPX9rfZ0xNKKsqab9gIgX1HFr3o7Q'],
  ['Properties of X-rays', '1BvrMF7R1BcC7fOS3IjcLLHKP7xmSKSTC'],
  ['Radiation Biology', '1ECaDHIMP9WWsKcGVFo5m-ft9ndMk21p-'],
  ['Radiographic Films and Intensifying Screens', '1CiZIx2X_Rc2nvL58P-yMSMHCYiwNB6jZ'],
  ['Processing of X-rays', '1OkKTCFC_yDeSYhCrGeURjIpzLNMOnbsx'],
  ['Faulty Radiograph', '1pnN5dEO3fXYzJj9balFiuqs8DDQkzUl-'],
  ['Quality Assurance and Infection Control', '1_vraiKywwEBZkykh76nBgKRzw8nUe59R'],
  ['Ultrasonography', '1Y_c0DKDJkFVBeQGXU7pUZLxiLji-FOmo'],
  ['Radiation Safety and Protection', '1QqtMOJbw5_1wOhNlHw0avPIRQ2qyrVWF'],
  ['Principles of Radiographic Interpretation', '1_lWP9qZrSZ2oefJ5MokANdejezRkK5Et'],
  ['Digital Imaging', '139FchRLdrXS3Btctck7OszI-86QxeYPe'],
  ['Orthopantomogram (OPG)', '1CZR9tXnqqeACZpOhYIxsvpd7On-R4CCD'],
  ['Cone Beam Computed Tomography (CBCT)', '13p1LiaZ3zgFMVDRByrAzMMA0r94Q6CSn'],
  ['Magnetic Resonance Imaging (MRI)', '1tLAKmfNKIfrJ_P00r0Lb5-EnUxzvNS6v'],
  ['Thermography', '1UY8cke0klcz5bNcgKUez9Lz1AzKDke_e'],
  ['Contrast Radiography', '1yEh55dxmRbyRuPOvG4Hzzrpor2PVfCuM'],
]

const oralMedicineLevel = (index) => {
  if (index < 8) return 'Development of Teeth and Disorders'
  if (index < 13) return 'Premalignant and Malignant Lesions'
  if (index < 18) return 'Bone'
  if (index < 21) return 'Infections'
  if (index < 22) return 'Neuromuscular Disorders'
  if (index < 23) return 'Cysts'
  if (index < 29) return 'Oral Manifestations of Systemic Diseases'
  if (index < 32) return 'Orofacial Pain'
  if (index < 34) return 'Therapeutics in Oral Medicine'
  if (index < 35) return 'Forensic Odontology'
  if (index < 37) return 'Salivary Gland Disorders'
  if (index < 39) return 'Tongue in Oral and Systemic Disorders'
  return 'Dental Radiology'
}

export default function OralMedicineLms() {
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
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Department LMS</p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Oral Medicine and Radiology
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for oral diagnosis, medicine, maxillofacial imaging,
                radiographic interpretation, and evidence-based patient care.
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
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  Course Overview
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This video collection supports the systematic evaluation of oral and maxillofacial
                  conditions. It connects patient history and clinical findings with appropriate
                  imaging, interpretation, differential diagnosis, and treatment planning.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <ScanLine className="h-6 w-6" />
                  </div>
                  <p className="text-sm leading-relaxed text-foreground/75">
                    These lessons complement classroom instruction, clinical postings, radiology
                    demonstrations, faculty guidance, and prescribed academic materials.
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
                title="Chapter-wise Presentations"
                description="Download the Oral Medicine and Radiology learning material for each chapter as a PowerPoint presentation."
              />
            </Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={oralMedicineLevel} />
          </div>
        </section>

        <section className="mesh-bg px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Video Library"
                title="Oral Medicine and Radiology Videos"
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
                        title={`Oral Medicine and Radiology learning video ${i + 1}`}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex items-center gap-3 p-5">
                      <PlayCircle className="h-5 w-5 shrink-0 text-primary" />
                      <h3 className="font-bold text-foreground">Oral Medicine Lesson {i + 1}</h3>
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
