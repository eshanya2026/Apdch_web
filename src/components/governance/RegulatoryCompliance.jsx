import { ShieldCheck, CheckCircle } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const ACCREDITATIONS = [
  {
    title: 'Dental Council of India (DCI)',
    subtitle: 'Statutory Body Approval',
    description: 'Recognized by the Ministry of Health & Family Welfare, Govt. of India, and DCI for conducting undergraduate (BDS) and postgraduate (MDS) degree courses.',
    badge: 'Statutory Recognition',
    image: '/dci-logo.png',
  },
  {
    title: 'The Tamil Nadu Dr. M.G.R. Medical University',
    subtitle: 'University Affiliation',
    description: 'Permanently affiliated with The Tamil Nadu Dr. M.G.R. Medical University, Chennai, for curriculum implementation and degree awards.',
    badge: 'Official Affiliation',
    image: '/mgr-logo.png',
  },
  {
    title: 'NAAC Accreditation',
    subtitle: 'National Assessment & Accreditation Council',
    description: 'Accredited by NAAC with high institutional grading, demonstrating excellence in teaching, learning resources, research, and governance.',
    badge: 'NAAC Accredited',
    image: '/naac-logo.png',
  },
  {
    title: 'NABH Accreditation',
    subtitle: 'National Accreditation Board for Hospitals',
    description: 'NABH accredited dental hospital ensuring world-class clinical protocols, patient safety, infection control, and healthcare quality standards.',
    badge: 'NABH Hospital Quality',
    image: '/nabh-logo.png',
  },
  {
    title: 'ISO 9001:2015 Certification',
    subtitle: 'Quality Management System',
    description: 'Certified ISO 9001:2015 institution for maintaining standardized educational, administrative, and clinical operating procedures.',
    badge: 'ISO Quality Standard',
    image: '/iso-logo.png',
  },
]

export default function RegulatoryCompliance() {
  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Statutory Recognition"
            title="Regulatory Approvals & Accreditations"
            description="Official recognitions from statutory medical councils, quality rating agencies, and university bodies."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACCREDITATIONS.map((acc, index) => (
            <Reveal key={acc.title} delay={index * 0.08}>
              <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-md">
                <div>
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    <CheckCircle className="h-3.5 w-3.5" />
                    {acc.badge}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{acc.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent">{acc.subtitle}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{acc.description}</p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-semibold text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Compliant & Verified</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
