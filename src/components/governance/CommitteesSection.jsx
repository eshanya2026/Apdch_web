import { BookOpen, Heart, Microscope, Users, Building, CheckCircle2, UserCheck, ArrowRight, ArrowDown, User, GraduationCap, Briefcase, FileText } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const COMMITTEE_GROUPS = [
  {
    title: 'Teaching Learning Process',
    icon: BookOpen,
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
    title: 'Student Welfare Committees',
    icon: Heart,
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
    title: 'Research & Academic Development',
    icon: Microscope,
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
    title: 'Community Outreach',
    icon: Users,
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
    title: 'Institutional Administration',
    icon: Building,
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
  { title: 'Chairperson', subtitle: 'Committee Leadership', icon: UserCheck, badge: 'Level 1' },
  { title: 'Member Secretary', subtitle: 'Executive Convenor', icon: FileText, badge: 'Level 2' },
  { title: 'Faculty Members', subtitle: 'Teaching Staff Representatives', icon: User, badge: 'Level 3' },
  { title: 'Students', subtitle: 'Student Body Representatives', icon: GraduationCap, badge: 'Level 4' },
  { title: 'Non-Teaching Staff', subtitle: 'Administrative & Support Staff', icon: Briefcase, badge: 'Level 5' },
]

export default function CommitteesSection() {
  return (
    <section id="committees" className="scroll-mt-24 bg-background px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Supporting Academic Excellence, Student Welfare & Institutional Governance"
            title="Committees & Cells"
            description="The institution has established various statutory and non-statutory committees and cells to ensure effective governance, quality education, student welfare, research, ethical practices, and community engagement."
          />
        </Reveal>

        {/* Overview Box */}
        <Reveal delay={0.1}>
          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-white p-8 text-center shadow-brand-card md:p-10">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Overview</span>
            <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Institutional Committee Framework
            </h3>
            <p className="mt-4 mx-auto max-w-3xl text-sm leading-relaxed text-muted md:text-base">
              APDCH has constituted various committees comprising faculty members, students, and non-teaching staff wherever applicable. Each committee functions within its defined scope to promote transparent administration, academic excellence, quality assurance, and continuous institutional improvement.
            </p>
          </div>
        </Reveal>

        {/* 5 Committee Groups */}
        <div className="mt-12 space-y-10">
          {COMMITTEE_GROUPS.map((group, index) => {
            const IconComponent = group.icon
            return (
              <Reveal key={group.title} delay={index * 0.07}>
                <article className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-9">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-accent">{group.subtitle}</span>
                        <h4 className="font-display text-2xl font-bold text-foreground">{group.title}</h4>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 text-sm font-medium leading-relaxed text-muted">
                    {group.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {group.committees.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl border border-border/70 bg-background p-3.5 shadow-brand-xs">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm font-bold text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-xl bg-primary/5 p-4 text-xs font-medium leading-relaxed text-primary border border-primary/15">
                    💡 {group.footerNote}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        {/* Committee Composition / Structure */}
        <Reveal delay={0.2}>
          <div className="mt-16 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-card md:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Committee Structure</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                Committee Composition
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                Staff, students, and non-teaching staff are members of committees wherever applicable. Each committee consists of a Chairperson, Member Secretary, and members from various departments.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                Committees meet periodically to review activities, monitor implementation, and revise action plans. This participative governance framework promotes leadership, teamwork, accountability, and continuous institutional improvement.
              </p>
            </div>

            {/* Simple Flow Hierarchy */}
            <div className="mt-12 mx-auto max-w-xl flex flex-col items-center">
              {SIMPLE_STRUCTURE_FLOW.map((node, index) => {
                const IconComponent = node.icon
                const isLast = index === SIMPLE_STRUCTURE_FLOW.length - 1

                return (
                  <div key={node.title} className="w-full flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group relative w-full flex items-center justify-between rounded-2xl border border-primary/30 bg-white p-4 shadow-brand-xs transition-all duration-300 hover:shadow-brand-sm hover:border-primary"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-lg font-bold text-foreground">{node.title}</h4>
                          <p className="text-xs text-muted">{node.subtitle}</p>
                        </div>
                      </div>

                      <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-extrabold text-primary">
                        {node.badge}
                      </span>
                    </motion.div>

                    {!isLast && (
                      <div className="relative my-2 flex flex-col items-center">
                        <div className="h-6 w-0.5 bg-primary/40" />
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-white text-primary shadow-brand-xs">
                          <ArrowDown className="h-3.5 w-3.5" />
                        </div>
                        <div className="h-2 w-0.5 bg-primary/40" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>

        {/* Committee Documents CTA */}
        <Reveal delay={0.25}>
          <div className="mt-14 overflow-hidden rounded-[1.75rem] bg-gradient-to-r from-primary via-primary/95 to-secondary p-8 text-center text-white shadow-brand-md md:p-12">
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Looking for Committee Documents?
            </h3>
            <p className="mt-3 text-sm text-white/80 md:text-base">
              Access the official committee list, roles & responsibilities, and governance-related documents.
            </p>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-brand-xs px-8">
                <a href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf" target="_blank" rel="noopener noreferrer">
                  <span>View Committee Documents</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
