import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Users, GraduationCap, HeartHandshake, Sparkles, CheckCircle2, ArrowRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const TEACHING_STAFF_WELFARE_GROUPS = [
  {
    category: 'Welfare & Campus Amenities',
    items: [
      'Free accommodation in and around the campus',
      'Leave benefits',
      'Free aprons',
      'Annual staff meetings and family outings',
      'Gym and yoga facilities',
      'Free Wi-Fi',
    ],
  },
  {
    category: 'Professional Development',
    items: [
      'Faculty Development Programmes (FDPs)',
      'Continuing Dental Education (CDE) programmes',
      'Interdisciplinary academic programmes',
      'National and international conference participation',
      'Staff Development & Welfare Committee',
    ],
  },
  {
    category: 'Employee Benefits & Security',
    items: [
      'Employee Provident Fund (EPF)',
      'Gratuity Scheme',
      'Group Health Insurance',
      'Free transport facility',
      'Concessional medical and dental care for family members',
      'Staff canteen facility',
    ],
  },
]

const NON_TEACHING_STAFF_WELFARE = [
  'Employee Provident Fund (EPF)',
  'Group Health Insurance',
  'Bangaru Adigalar Health Scheme',
  'Interest-free salary advance',
  'Concessional medical and dental care',
  'Transport facility',
  'Staff canteen',
  'Clinical skill development programmes',
  'Gym and yoga facilities',
  'Free Wi-Fi',
]

const HR_HERO_STATS = [
  { value: '15+', label: 'Teaching Staff Benefits', icon: GraduationCap },
  { value: '10+', label: 'Employee Welfare Schemes', icon: HeartHandshake },
  { value: 'Continuous', label: 'Faculty Development', icon: Sparkles },
  { value: 'Year-round', label: 'Employee Support', icon: Users },
]

export default function HrPolicy() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">

        {/* 1. Ultra-Premium Glassmorphism Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background pb-20 pt-36 md:pb-24 md:pt-44">
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-brand-xs backdrop-blur-md">
                  <Users className="h-4 w-4 text-primary" />
                  Staff Welfare & Institutional Care
                </div>
                <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                  HR Policy
                </h1>
                <p className="mt-4 font-display text-xl tracking-tight text-primary md:text-2xl font-medium">
                  Empowering People. Enabling Excellence.
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted md:text-lg lg:text-xl max-w-3xl mx-auto">
                  APDCH is committed to fostering a supportive, inclusive, and professional work environment through comprehensive welfare measures, faculty development initiatives, and continuous opportunities for personal and professional growth.
                </p>
              </Reveal>
            </div>

            {/* Hero 4 Metrics Cards */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HR_HERO_STATS.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-white p-5 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-brand-md md:p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                          {stat.value}
                        </span>
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <IconComponent className="h-5 w-5" />
                        </div>
                      </div>
                      <p className="mt-3 text-xs font-bold uppercase tracking-wider text-muted group-hover:text-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* 2. Overview Framework Card */}
        <section className="px-5 py-10 md:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-white p-8 shadow-brand-card backdrop-blur-xl md:p-12">
                <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-2xl" />
                <div className="relative z-10 mx-auto max-w-4xl text-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Overview
                  </span>
                  <h2 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                    Staff Welfare Measures
                  </h2>
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-accent max-w-2xl mx-auto">
                    Supporting teaching and non-teaching staff through welfare, professional development, employee benefits, and institutional well-being.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                    The Human Resource Policy of APDCH focuses on attracting, developing, and retaining competent teaching and non-teaching staff by providing welfare schemes, professional development opportunities, and a positive work environment that supports academic excellence and quality patient care.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Teaching Staff Welfare Section */}
        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-brand-xs">
                      <GraduationCap className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-accent">Teaching Staff Welfare</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Welfare & Professional Development</h3>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-extrabold text-primary">
                    17 Key Initiatives
                  </span>
                </div>

                <p className="mt-6 text-sm font-medium leading-relaxed text-muted md:text-base">
                  The institution provides various facilities and welfare measures for teaching staff, categorized below:
                </p>

                <div className="mt-8 space-y-8">
                  {TEACHING_STAFF_WELFARE_GROUPS.map((group) => (
                    <div key={group.category} className="space-y-3.5 border-t border-border/50 pt-6 first:border-0 first:pt-0">
                      <h4 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-primary">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        {group.category} ({group.items.length})
                      </h4>
                      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                        {group.items.map((item) => (
                          <motion.div
                            key={item}
                            whileHover={{ scale: 1.01, y: -1 }}
                            className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-4 shadow-brand-xs transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-brand-sm"
                          >
                            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm font-bold leading-snug text-foreground">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Non-Teaching Staff Welfare Section */}
        <section className="bg-gradient-to-b from-muted/30 via-background to-muted/20 px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/15 text-primary shadow-brand-xs">
                      <HeartHandshake className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-accent">Non-Teaching Staff Welfare</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Employee Support & Benefits</h3>
                    </div>
                  </div>
                  <span className="self-start sm:self-auto rounded-full border border-accent/40 bg-accent/15 px-4 py-1 text-xs font-extrabold text-primary">
                    10 Welfare Schemes
                  </span>
                </div>

                <p className="mt-6 text-sm font-medium leading-relaxed text-muted md:text-base">
                  The institution extends welfare measures to non-teaching staff through:
                </p>

                <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                  {NON_TEACHING_STAFF_WELFARE.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.01, y: -1 }}
                      className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-4 shadow-brand-xs transition-all duration-300 hover:border-accent/50 hover:bg-accent/10 hover:shadow-brand-sm"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-primary font-bold">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-bold leading-snug text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>



        {/* 6. High-Impact CTA Banner */}
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="absolute inset-0 cta-gradient" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md">
                Staff Support & Guidance
              </span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Have Questions About HR Policy & Welfare?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
                Get in touch with our HR desk for staff welfare inquiries, faculty development initiatives, and employment guidelines.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-brand-md px-8 py-6 text-base">
                  <a href="mailto:admissions@apdch.edu.in?subject=HR%20Policy%20Enquiry%20APDCH">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>Contact HR Desk</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary transition-colors font-bold px-8 py-6 text-base">
                  <Link to="/faculty">
                    <Users className="h-5 w-5" />
                    <span>View Faculty Directory</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
