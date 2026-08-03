import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { BookOpen, Heart, Microscope, Users, Building, CheckCircle2, UserCheck, ArrowRight, FileText, ArrowDown, User, GraduationCap, Briefcase, Sparkles, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const COMMITTEE_GROUPS = [
  {
    id: 'teaching',
    tabLabel: 'Teaching',
    title: 'Teaching Learning Process',
    icon: BookOpen,
    badge: 'Academics',
    badgeStyle: 'border-primary/30 bg-primary/10 text-primary',
    iconBg: 'bg-primary/10 text-primary border-primary/20',
    accentBorder: 'hover:border-primary',
    subtitle: 'Academic Quality & Curriculum Implementation',
    description: 'The following committees ensure effective curriculum implementation and continuous improvement in academic quality:',
    footerNote: 'These committees ensure that the syllabus is implemented as recommended by the statutory bodies and that the teaching-learning process is maintained at the highest standards.',
    committees: [
      'Institutional Board of Studies',
      'Academic Cell',
      'Examination Committee',
      'Online Enhance Committee',
      'PG Committee',
    ],
  },
  {
    id: 'welfare',
    tabLabel: 'Student Welfare',
    title: 'Student Welfare Committees',
    icon: Heart,
    badge: 'Student Care',
    badgeStyle: 'border-accent/40 bg-accent/15 text-primary',
    iconBg: 'bg-accent/15 text-primary border-accent/30',
    accentBorder: 'hover:border-accent',
    subtitle: 'Student Welfare, Safety & Inclusion',
    description: 'The institution is committed to providing a safe, inclusive, and student-friendly learning environment through:',
    footerNote: 'These committees work towards ensuring student welfare, safety, discipline, and holistic development.',
    committees: [
      'Anti-Ragging Committee',
      'Mentor Committee',
      'Student Welfare & Hostel Committee',
      'Gender Sensitization Cell & Sexual Harassment Committee',
    ],
  },
  {
    id: 'research',
    tabLabel: 'Research',
    title: 'Research & Academic Development',
    icon: Microscope,
    badge: 'Innovation',
    badgeStyle: 'border-secondary/30 bg-secondary/10 text-secondary',
    iconBg: 'bg-secondary/10 text-secondary border-secondary/20',
    accentBorder: 'hover:border-secondary',
    subtitle: 'Scientific Inquiry & Research Ethics',
    description: 'Research-oriented committees encourage scientific thinking and ethical research practices.',
    footerNote: 'These committees provide opportunities for students and faculty to engage in research and academic advancement.',
    committees: [
      'Scientific Academic Forum',
      'Institutional Review Board',
      'Ethics & Research Committee',
      'Library Committee',
    ],
  },
  {
    id: 'social',
    tabLabel: 'Community',
    title: 'Community Outreach',
    icon: Users,
    badge: 'Outreach',
    badgeStyle: 'border-primary/20 bg-primary/5 text-primary',
    iconBg: 'bg-primary/5 text-primary border-primary/15',
    accentBorder: 'hover:border-primary/60',
    subtitle: 'Social Responsibility & Safety',
    description: 'The institution promotes social responsibility through:',
    footerNote: 'These committees organize outreach programmes, awareness activities, emergency preparedness, and community service initiatives.',
    committees: [
      'Facility Management & Safety Committee',
      'NSS Committee',
      'Youth Red Cross (YRC)',
      'CPR Committee',
    ],
  },
  {
    id: 'admin',
    tabLabel: 'Administration',
    title: 'Institutional Administration',
    icon: Building,
    badge: 'Governance',
    badgeStyle: 'border-primary/30 bg-primary/10 text-primary',
    iconBg: 'bg-primary/10 text-primary border-primary/20',
    accentBorder: 'hover:border-primary',
    subtitle: 'Administrative Oversight & Governance',
    description: 'The institution has also constituted the following committees for effective governance and administration:',
    footerNote: 'These committees ensure quality standards are maintained in academics, administration, and patient care.',
    committees: [
      'MRD Committee',
      'Staff Selection Committee',
      'Grievance Redressal Committee',
      'Infection Control Committee',
      'Purchase & Condemnation Committee',
      'Staff Welfare Committee',
      'Alumni Committee',
      'Internal Quality Assurance Cell (IQAC)',
      'Management Review Board',
    ],
  },
]

const SIMPLE_STRUCTURE_FLOW = [
  { level: '01', title: 'Chairperson', subtitle: 'Committee Leadership & Strategic Head', icon: UserCheck, tag: 'Apex Officer' },
  { level: '02', title: 'Member Secretary', subtitle: 'Executive Convenor & Administrative Head', icon: FileText, tag: 'Executive Head' },
  { level: '03', title: 'Faculty Members', subtitle: 'Teaching Staff & Specialty Representatives', icon: User, tag: 'Academic Core' },
  { level: '04', title: 'Students', subtitle: 'UG & PG Student Body Representatives', icon: GraduationCap, tag: 'Student Voice' },
  { level: '05', title: 'Non-Teaching Staff', subtitle: 'Administrative & Support Staff Representatives', icon: Briefcase, tag: 'Operations' },
]

const HERO_STATS = [
  { value: '25+', label: 'Institutional Committees', icon: Building },
  { value: '5', label: 'Functional Categories', icon: BookOpen },
  { value: '100%', label: 'Regulatory Compliance', icon: ShieldCheck },
  { value: 'Participative', label: 'Governance Framework', icon: UserCheck },
]

export default function Committees() {
  const [selectedGroup, setSelectedGroup] = useState('all')

  const filteredGroups = selectedGroup === 'all'
    ? COMMITTEE_GROUPS
    : COMMITTEE_GROUPS.filter((g) => g.id === selectedGroup)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        
        {/* 1. Ultra-Premium Glassmorphism Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/15 via-primary/5 to-background pb-20 pt-36 md:pb-24 md:pt-44">
          {/* Ambient Glow Orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-brand-xs backdrop-blur-md">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Statutory & Non-Statutory Framework
                </div>
                <h1 className="mt-3 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
                  Committees & Cells
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted md:text-lg lg:text-xl">
                  The institution has established various statutory and non-statutory committees and cells to ensure effective governance, quality education, student welfare, research, ethical practices, and community engagement.
                </p>
              </Reveal>
            </div>

            {/* Hero 4 Statistics Grid */}
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {HERO_STATS.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <Reveal key={stat.label} delay={index * 0.08}>
                    <div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-white p-5 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-brand-md md:p-6">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">
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

            {/* Quick Interactive Category Pill Nav (Short Labels) */}
            <Reveal delay={0.15}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setSelectedGroup('all')}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 shadow-brand-xs ${
                    selectedGroup === 'all'
                      ? 'bg-primary text-white shadow-brand-sm scale-105'
                      : 'bg-white text-muted hover:bg-white/80 hover:text-foreground border border-border/80'
                  }`}
                >
                  All
                </button>
                {COMMITTEE_GROUPS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGroup(g.id)}
                    className={`rounded-full px-4.5 py-2 text-xs font-bold transition-all duration-300 shadow-brand-xs ${
                      selectedGroup === g.id
                        ? 'bg-primary text-white shadow-brand-sm scale-105'
                        : 'bg-white text-muted hover:bg-white/80 hover:text-foreground border border-border/80'
                    }`}
                  >
                    {g.tabLabel}
                  </button>
                ))}
              </div>
            </Reveal>
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
                    Statutory & Non-Statutory Committees
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                    APDCH has constituted various committees comprising faculty members, students, and non-teaching staff wherever applicable. Each committee functions within its defined scope to promote transparent administration, academic excellence, quality assurance, and continuous institutional improvement.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Five Committee Groups Display Cards */}
        <section className="px-5 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8">
          <div className="mx-auto max-w-7xl space-y-8">
            {filteredGroups.map((group, index) => {
              const IconComponent = group.icon
              return (
                <Reveal key={group.title} delay={index * 0.06}>
                  <article className={`group relative overflow-hidden rounded-[2rem] border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:shadow-brand-md md:p-10 ${group.accentBorder}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border shadow-brand-xs transition-transform duration-300 group-hover:scale-110 ${group.iconBg}`}>
                          <IconComponent className="h-7 w-7" />
                        </div>
                        <div>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-accent">{group.subtitle}</span>
                          <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{group.title}</h3>
                        </div>
                      </div>
                      <span className={`self-start sm:self-auto rounded-full border px-3.5 py-1 text-xs font-extrabold ${group.badgeStyle}`}>
                        {group.badge} • {group.committees.length} Members
                      </span>
                    </div>

                    <p className="mt-6 text-sm font-medium leading-relaxed text-muted md:text-base">
                      {group.description}
                    </p>

                    {/* Committee List Cards */}
                    <div className="mt-6 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
                      {group.committees.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background p-4 shadow-brand-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:border-primary/40 hover:shadow-brand-sm"
                        >
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <CheckCircle2 className="h-4 w-4" />
                          </div>
                          <span className="text-sm font-bold leading-snug text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-start gap-2.5 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 text-xs font-semibold leading-relaxed text-primary">
                      <span className="text-base">💡</span>
                      <span>{group.footerNote}</span>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* 4. Committee Composition & Flowchart */}
        <section className="bg-gradient-to-b from-muted/30 via-background to-muted/20 px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Participative Governance"
                title="Committee Composition & Hierarchy"
                description="Staff, students, and non-teaching staff are members of committees wherever applicable. Each committee consists of a Chairperson, Member Secretary, and members from various departments."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-4 mx-auto max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
                Committees meet periodically to review activities, monitor implementation, and revise action plans. This participative governance framework promotes leadership, teamwork, accountability, and continuous institutional improvement.
              </div>
            </Reveal>

            {/* Premium Vertical Hierarchy Flowchart */}
            <div className="mt-14 mx-auto max-w-2xl flex flex-col items-center">
              {SIMPLE_STRUCTURE_FLOW.map((node, index) => {
                const IconComponent = node.icon
                const isLast = index === SIMPLE_STRUCTURE_FLOW.length - 1

                return (
                  <div key={node.title} className="w-full flex flex-col items-center">
                    {/* Node Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative w-full flex items-center justify-between rounded-2xl border border-primary/30 bg-white p-5 shadow-brand-card transition-all duration-300 hover:shadow-brand-md hover:border-primary"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-display text-lg font-bold shadow-brand-xs">
                          {node.level}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-display text-xl font-bold text-foreground">{node.title}</h4>
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-extrabold uppercase text-primary">
                              {node.tag}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs font-medium text-muted">{node.subtitle}</p>
                        </div>
                      </div>

                      <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <IconComponent className="h-5 w-5" />
                      </div>
                    </motion.div>

                    {/* Connecting Vertical Stem & Downward Pulse */}
                    {!isLast && (
                      <div className="relative my-3 flex flex-col items-center">
                        <div className="h-8 w-1 bg-gradient-to-b from-primary/60 via-primary/30 to-primary/60 rounded-full" />
                        <div className="absolute top-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border border-primary/40 bg-white text-primary shadow-brand-xs">
                          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* 5. Sleek CTA Banner with Official Committee Download Cards */}
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="absolute inset-0 cta-gradient" />
          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-white backdrop-blur-md">
                Inspection & Statutory Compliance
              </span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
                Looking for Committee Documents?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg max-w-2xl mx-auto">
                Access official committee rosters, roles & responsibilities, and statutory governance-related documents.
              </p>

              {/* Official Download Cards Grid */}
              <div className="mt-10 grid gap-5 text-left sm:grid-cols-2">
                {/* Download 1: Committee List */}
                <div className="group flex flex-col justify-between rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 shadow-brand-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                        Official Doc
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-white">
                      📄 Committee List
                    </h3>
                    <p className="mt-1.5 text-xs text-white/90 font-medium leading-relaxed">
                      Complete statutory & non-statutory committee roster, chairpersons, and member lists.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-xs font-semibold text-white/80">1.2 MB PDF • 2025–2026</span>
                    <a
                      href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-primary shadow-brand-xs transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <span>Download List</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Download 2: Roles & Responsibilities */}
                <div className="group flex flex-col justify-between rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 shadow-brand-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white shadow-brand-xs">
                        <FileText className="h-5 w-5" />
                      </div>
                      <span className="rounded-full bg-white/20 border border-white/30 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                        Official Manual
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold text-white">
                      📄 Roles & Responsibilities
                    </h3>
                    <p className="mt-1.5 text-xs text-white/90 font-medium leading-relaxed">
                      Detailed governance manual specifying terms of reference, powers, and operating guidelines.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
                    <span className="text-xs font-semibold text-white/80">1.8 MB PDF • Official Guide</span>
                    <a
                      href="https://apdch.in/wp-content/uploads/2022/09/6.1.2_roles_and_responsibility_of_each_committees.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-xs font-bold text-primary shadow-brand-xs transition-colors hover:bg-accent hover:text-foreground"
                    >
                      <span>Download Manual</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
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
