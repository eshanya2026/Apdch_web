import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Home, Download, ArrowRight, FileCheck, GraduationCap, Award } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'

const RESOURCE_DATA = {
  bds: {
    programme: 'Bachelor of Dental Surgery (BDS)',
    badge: 'Undergraduate',
    items: [
      {
        id: 'bds-fee',
        title: 'Fee Structure',
        category: 'BDS Tuition & Fees',
        icon: FileText,
        href: '#fees',
        description: 'Official BDS fee structure prescribed by the Tamil Nadu Fee Fixation Committee & statutory guidelines.',
        actionText: 'View BDS Fees',
        accent: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      },
      {
        id: 'bds-bond',
        title: 'Bond Agreement',
        category: 'Undergraduate Bond',
        icon: FileCheck,
        href: 'https://apdch.in/wp-content/uploads/2025/08/Bond-Agreement.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'BDS course discontinuation and service bond agreement terms as mandated by the Government of Tamil Nadu.',
        actionText: 'Download Bond PDF',
        accent: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
      },
      {
        id: 'bds-boys-hostel',
        title: 'Boys Hostel',
        category: "Men's Residence",
        icon: Home,
        href: 'https://apdch.in/wp-content/uploads/2025/07/Gents-Hostel.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'Secure, comfortable residential accommodation for male BDS students with 24/7 security & dining.',
        actionText: 'Download Hostel PDF',
        accent: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
      },
      {
        id: 'bds-girls-hostel',
        title: 'Girls Hostel',
        category: "Women's Residence",
        icon: Home,
        href: 'https://apdch.in/wp-content/uploads/2025/07/Ladies-Hostel.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'Safe, fully-furnished residential hostel for female BDS students with modern amenities & warden care.',
        actionText: 'Download Hostel PDF',
        accent: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      },
      {
        id: 'bds-downloads',
        title: 'Downloads',
        category: 'BDS Documents',
        icon: Download,
        href: '#brochure',
        description: 'Download official BDS prospectus, admission document verification checklist, and application guidelines.',
        actionText: 'Download PDF',
        accent: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
      },
    ],
  },
  mds: {
    programme: 'Master of Dental Surgery (MDS)',
    badge: 'Postgraduate',
    items: [
      {
        id: 'mds-fee',
        title: 'Fee Structure',
        category: 'MDS Specialty Fees',
        icon: FileText,
        href: '#fees',
        description: 'Official MDS postgraduate tuition fees across all 7 DCI-approved dental specialty disciplines.',
        actionText: 'View MDS Fees',
        accent: 'bg-purple-500/10 text-purple-700 border-purple-500/20',
      },
      {
        id: 'mds-bond',
        title: 'Bond Agreement',
        category: 'Postgraduate Bond',
        icon: FileCheck,
        href: 'https://apdch.in/wp-content/uploads/2025/08/Bond-Agreement.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'MDS postgraduate service bond agreement and commitment undertaking as per state regulatory norms.',
        actionText: 'Download Bond PDF',
        accent: 'bg-rose-500/10 text-rose-700 border-rose-500/20',
      },
      {
        id: 'mds-boys-hostel',
        title: 'Boys Hostel',
        category: "Men's PG Residence",
        icon: Home,
        href: 'https://apdch.in/wp-content/uploads/2025/07/Gents-Hostel.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'Dedicated residential hostel quarters for male MDS postgraduate residents with study amenities.',
        actionText: 'Download Hostel PDF',
        accent: 'bg-blue-500/10 text-blue-700 border-blue-500/20',
      },
      {
        id: 'mds-girls-hostel',
        title: 'Girls Hostel',
        category: "Women's PG Residence",
        icon: Home,
        href: 'https://apdch.in/wp-content/uploads/2025/07/Ladies-Hostel.pdf',
        target: '_blank',
        rel: 'noopener noreferrer',
        description: 'Secure, modern residential quarters for female MDS postgraduate residents with round-the-clock security.',
        actionText: 'Download Hostel PDF',
        accent: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20',
      },
      {
        id: 'mds-downloads',
        title: 'Downloads',
        category: 'MDS Documents',
        icon: Download,
        href: '#brochure',
        description: 'Download official MDS specialty brochure, NEET-MDS admission guidelines, and verification forms.',
        actionText: 'Download PDF',
        accent: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
      },
    ],
  },
}

export default function AdmissionResources() {
  const [activeTab, setActiveTab] = useState('bds')
  const currentData = RESOURCE_DATA[activeTab]

  return (
    <section id="resources" className="relative overflow-hidden bg-slate-50/70 px-5 py-24 md:px-8 md:py-32">
      {/* Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Official Documentation"
            title="Admission Resources"
            description="Select a programme below to view official fee structures, bond agreements, hostel details, and downloadable admission forms."
          />
        </Reveal>

        {/* Tab Switcher: [BDS] [MDS] */}
        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-border/80 bg-white p-1.5 shadow-brand-card">
              <button
                onClick={() => setActiveTab('bds')}
                className={`flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold transition-all duration-300 ${
                  activeTab === 'bds'
                    ? 'bg-primary text-white shadow-brand-md'
                    : 'text-foreground/75 hover:bg-slate-100 hover:text-foreground'
                }`}
              >
                <GraduationCap className="h-4 w-4" />
                <span>BDS</span>
              </button>

              <button
                onClick={() => setActiveTab('mds')}
                className={`flex items-center gap-2 rounded-full px-7 py-3 text-sm font-extrabold transition-all duration-300 ${
                  activeTab === 'mds'
                    ? 'bg-primary text-white shadow-brand-md'
                    : 'text-foreground/75 hover:bg-slate-100 hover:text-foreground'
                }`}
              >
                <Award className="h-4 w-4" />
                <span>MDS</span>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Divider Line */}
        <div className="my-10 mx-auto max-w-4xl border-t border-border/60" />

        {/* Resource Cards Animated Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentData.items.map((item) => {
              const IconComponent = item.icon
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-white p-7 shadow-brand-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-brand-xl"
                >
                  <div>
                    {/* Top Icon & Badge */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft text-primary transition-transform duration-300 group-hover:scale-110">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold ${item.accent}`}>
                        {item.category}
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="mt-6 font-display text-xl font-extrabold text-foreground transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="mt-8 flex items-center gap-2 border-t border-border/60 pt-4 text-xs font-extrabold text-primary">
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </a>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
