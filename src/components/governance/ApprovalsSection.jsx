import { ShieldCheck, CheckCircle, GraduationCap, Award, Globe2 } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const ACCREDITATION_GROUPS = [
  {
    category: 'Academic Recognition',
    tag: 'Academic',
    icon: GraduationCap,
    badgeStyle: 'border-primary/20 bg-primary/10 text-primary',
    items: [
      {
        title: 'Dental Council of India (DCI)',
        subtitle: 'Statutory Regulatory Authority',
        description: 'Recognized by the Ministry of Health & Family Welfare, Govt. of India, and DCI for conducting undergraduate (BDS) and postgraduate (MDS) degree courses.',
        badge: 'Statutory Recognition',
      },
      {
        title: 'The Tamil Nadu Dr. M.G.R. Medical University',
        subtitle: 'University Affiliation',
        description: 'Permanently affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, for academic curriculum, examination, and degree awards.',
        badge: 'Official Affiliation',
      },
    ],
  },
  {
    category: 'Quality Accreditations',
    tag: 'Quality',
    icon: Award,
    badgeStyle: 'border-purple-300 bg-purple-50 text-purple-800',
    items: [
      {
        title: 'NAAC Accreditation',
        subtitle: 'National Assessment & Accreditation Council',
        description: 'Accredited by NAAC, demonstrating high quality standards in dental education, clinical resources, research output, and governance.',
        badge: 'NAAC Accredited',
      },
      {
        title: 'NABH Accreditation',
        subtitle: 'National Accreditation Board for Hospitals',
        description: 'NABH accredited dental hospital ensuring world-class clinical protocols, patient safety, infection control, and healthcare quality standards.',
        badge: 'NABH Hospital Quality',
      },
      {
        title: 'ISO Certification',
        subtitle: 'ISO 9001:2015 Quality Management',
        description: 'Certified ISO 9001:2015 institution for maintaining standardized educational, administrative, and clinical operating procedures.',
        badge: 'ISO Quality Standard',
      },
    ],
  },
  {
    category: 'International Recognition',
    tag: 'International',
    icon: Globe2,
    badgeStyle: 'border-blue-300 bg-blue-50 text-blue-800',
    items: [
      {
        title: 'Sri Lankan Medical Council Recognition',
        subtitle: 'International Dental Board Recognition',
        description: 'Officially recognized by the Sri Lankan Medical Council (SLMC), enabling eligible international graduates to pursue dental practice and licensure.',
        badge: 'International Recognition',
      },
    ],
  },
]

export default function ApprovalsSection() {
  return (
    <section id="approvals" className="scroll-mt-24 mesh-bg px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Statutory Authorities & Bodies"
            title="Approvals & Accreditations"
            description="APDCH is recognized by statutory and regulatory authorities, ensuring that its academic programs, institutional practices, and healthcare services meet national standards for quality and excellence."
          />
        </Reveal>

        {/* Grouped Cards Structure */}
        <div className="mt-12 space-y-12">
          {ACCREDITATION_GROUPS.map((group, groupIndex) => {
            const GroupIcon = group.icon
            return (
              <Reveal key={group.category} delay={groupIndex * 0.1}>
                <div className="rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-brand-card md:p-8">
                  {/* Group Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-border/60 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <GroupIcon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-2xl font-bold text-foreground">{group.category}</h3>
                    </div>
                    <span className={`rounded-full border px-3.5 py-1 text-xs font-extrabold ${group.badgeStyle}`}>
                      {group.tag}
                    </span>
                  </div>

                  {/* Grouped Items Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((acc) => (
                      <div
                        key={acc.title}
                        className="group relative flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:shadow-brand-sm"
                      >
                        <div>
                          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                            <CheckCircle className="h-3.5 w-3.5" />
                            {acc.badge}
                          </div>
                          <h4 className="font-display text-lg font-bold text-foreground">{acc.title}</h4>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{acc.subtitle}</p>
                          <p className="mt-3 text-xs leading-relaxed text-muted">{acc.description}</p>
                        </div>

                        <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-3.5 text-xs font-semibold text-primary">
                          <ShieldCheck className="h-4 w-4" />
                          <span>Compliant & Recognized</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
