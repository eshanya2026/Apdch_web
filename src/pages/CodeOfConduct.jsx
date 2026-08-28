import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import {
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Sparkles,
  Award,
  Stethoscope,
  Smile,
  FileText,
  Eye,
  Download,
} from 'lucide-react'

const CONDUCT_STATS = [
  { value: 'S.M.I.L.E.S.', label: 'Core Values', icon: Smile },
  { value: 'Quality Care', label: 'Patient-Centred Approach', icon: Stethoscope },
  { value: 'Eminent Faculty', label: 'Academic & Clinical Guidance', icon: Award },
  { value: 'Human Values', label: 'Ethics & Communication', icon: HeartHandshake },
]

const SMILES_VALUES = [
  {
    letter: 'S',
    word: 'Serving Attitude',
    description: 'Serving attitude and be sensible citizens.',
    badgeBg: 'bg-rose-600 text-white',
  },
  {
    letter: 'M',
    word: 'Masters in Skills',
    description: 'Masters in individual skills and make meaningful contribution to the scientific community.',
    badgeBg: 'bg-sky-600 text-white',
  },
  {
    letter: 'I',
    word: 'Inquiring Mind',
    description: 'Inquiring scientific mind and imbibe cultural values.',
    badgeBg: 'bg-amber-600 text-white',
  },
  {
    letter: 'L',
    word: 'Leadership Qualities',
    description: 'Leadership qualities and exhibit professional loyalty.',
    badgeBg: 'bg-emerald-600 text-white',
  },
  {
    letter: 'E',
    word: 'Ethical Conducts',
    description: 'Ethical conducts and be enriched individuals.',
    badgeBg: 'bg-purple-600 text-white',
  },
  {
    letter: 'S',
    word: 'Strength to Succeed',
    description: 'Strength to succeed in all endeavours.',
    badgeBg: 'bg-indigo-600 text-white',
  },
]

export default function CodeOfConduct() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* 1. Hero Header */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-brand-xs backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Institutional Ethics & Code of Conduct
                </div>
                <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                  Code of Conduct
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg lg:text-xl max-w-3xl mx-auto font-medium">
                  The ethical behaviour of dental professionals is one of the most important factors for delivering quality patient care.
                </p>
                <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg max-w-3xl mx-auto">
                  Our college adheres to the ethical norms and is committed to provide quality dental care to the patients with well-trained dental graduates under the guidance of eminent faculty members.
                </p>
              </Reveal>
            </div>

            {/* 4 Thematic Highlight Cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONDUCT_STATS.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <div className="group relative flex items-center justify-between gap-3 rounded-2xl border border-border/80 bg-white p-5 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-md">
                      <div>
                        <h3 className="font-display text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
                          {stat.value}
                        </h3>
                        <p className="mt-1 text-xs font-medium text-muted">
                          {stat.label}
                        </p>
                      </div>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white shadow-xs">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2. S.M.I.L.E.S. Values Section */}
        <section className="bg-gradient-to-b from-muted/30 via-background to-muted/20 px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                  <Smile className="h-4 w-4" />
                  S.M.I.L.E.S. Values
                </span>
                <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                  The S.M.I.L.E.S. Framework
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                  The Dental graduates from Adhiparasakthi Dental College and Hospital, Melmaruvathur must be able to put on <strong className="text-foreground font-semibold">“S.M.I.L.E.S”</strong>:
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SMILES_VALUES.map((val, idx) => (
                <Reveal key={val.letter + val.word} delay={idx * 0.06}>
                  <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-brand-md">
                    <div>
                      <div className="mb-4 flex items-center justify-between">
                        <span className={`flex h-12 w-12 items-center justify-center rounded-2xl font-display text-2xl font-black shadow-xs ${val.badgeBg}`}>
                          {val.letter}
                        </span>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                          S.M.I.L.E.S.
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {val.word}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted font-medium">
                        {val.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-bold text-primary">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>Institutional Core Value</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Human Values, Ethical Principles & Communication */}
        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-white p-8 shadow-brand-card backdrop-blur-xl md:p-12">
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
                <div className="relative z-10 mx-auto max-w-3xl text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Student Orientation & Handbook
                  </span>
                  <h2 className="mt-3 font-display text-3xl tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
                    Human Values, Ethical Principles & Communication
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg font-medium">
                    The students are oriented towards following human values, ethical principles and communication abilities by
                  </p>

                  {/* Official Code of Conduct Handbook Card */}
                  <div className="mt-8 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/5 via-background to-primary/10 p-6 sm:p-8 shadow-brand-xs">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-4 text-left">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-xs">
                          <FileText className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-extrabold text-primary">
                            Official Handbook PDF
                          </span>
                          <h3 className="mt-1 font-display text-xl font-bold text-foreground">
                            Code of Conduct Handbook
                          </h3>
                          <p className="text-xs text-muted font-medium">
                            Official institutional policy & ethics handbook document
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <a
                          href="https://apdch.in/wp-content/uploads/2022/10/Code-of-Conduct.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white px-4 py-2.5 text-xs font-bold text-foreground hover:border-primary/30 hover:bg-primary/5 hover:text-primary transition-colors shadow-xs"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View PDF</span>
                        </a>
                        <a
                          href="https://apdch.in/wp-content/uploads/2022/10/Code-of-Conduct.pdf"
                          download="Code-of-Conduct.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-xs font-bold text-white hover:bg-primary/90 transition-colors shadow-brand-xs"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download Handbook</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>


      </main>
      <Footer />
    </>
  )
}
