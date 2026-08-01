import { Link } from 'react-router-dom'
import {
  Building2,
  Award,
  BookOpen,
  Stethoscope,
  ShieldCheck,
  ArrowDown,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Monitor,
  Coins,
  Users,
  FileSpreadsheet,
  Settings,
  Layers,
  ChevronRight,
  Landmark,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { motion } from 'framer-motion'

const DENTAL_SPECIALTIES = [
  { name: 'Oral & Maxillofacial Surgery', href: '/departments/oral-surgery', tag: 'BDS / MDS' },
  { name: 'Prosthodontics and Crown & Bridge', href: '/departments/prosthodontics', tag: 'BDS / MDS' },
  { name: 'Conservative Dentistry & Endodontics', href: '/departments/conservative-dentistry', tag: 'BDS / MDS' },
  { name: 'Periodontics and Implantology', href: '/departments/periodontics', tag: 'BDS / MDS' },
  { name: 'Oral Medicine & Radiology', href: '/departments/oral-medicine', tag: 'BDS / MDS' },
  { name: 'Orthodontics & Dentofacial Orthopaedics', href: '/departments/orthodontics', tag: 'BDS / MDS' },
  { name: 'Pediatric & Preventive Dentistry', href: '/departments/pedodontics', tag: 'BDS / MDS' },
  { name: 'Public Health Dentistry', href: '/departments/public-health-dentistry', tag: 'BDS / MDS' },
  { name: 'Oral & Maxillofacial Pathology', href: '/departments/oral-pathology', tag: 'BDS / MDS' },
]

const MEDICAL_WINGS = [
  { name: 'General Anatomy & Histology', tag: 'Medical Science' },
  { name: 'Human Physiology & Biochemistry', tag: 'Medical Science' },
  { name: 'General Pathology & Microbiology', tag: 'Medical Science' },
  { name: 'General & Dental Pharmacology', tag: 'Medical Science' },
  { name: 'General Medicine', tag: 'Clinical Medical' },
  { name: 'General Surgery', tag: 'Clinical Medical' },
]

const OPERATIONS_SUPPORT = [
  { name: 'Information Technology (IT) & ERP', tag: 'IT Infrastructure', icon: Monitor },
  { name: 'Finance & Accounts', tag: 'Finance & Audit', icon: Coins },
  { name: 'Human Resources (HR)', tag: 'Administration', icon: Users },
  { name: 'Admissions & Student Affairs', tag: 'Student Cell', icon: FileSpreadsheet },
  { name: 'Central Library & Digital LMS', tag: 'Learning Center', icon: BookOpen },
  { name: 'Hospital Nursing & Sterilization', tag: 'Patient Care', icon: HeartPulse },
  { name: 'Facility Maintenance & Bio-Waste', tag: 'Operations', icon: Settings },
]

export default function OrganizationChart() {

  return (
    <section id="organogram" className="scroll-mt-24 mesh-bg px-5 py-24 md:px-8 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Institutional Hierarchy"
            title="Organization Chart"
            description="APDCH follows a well-defined organizational structure that supports academic excellence, clinical services, research, and institutional administration through clearly established leadership and reporting relationships."
          />
        </Reveal>



        {/* Infographic Tree Container matching user screenshot layout */}
        <Reveal delay={0.2}>
          <div className="mt-10 overflow-x-auto rounded-[2.5rem] border border-primary/20 bg-gradient-to-b from-primary/[0.03] via-white to-primary/[0.02] p-6 shadow-brand-card md:p-12">
            <div className="min-w-[920px] py-4">
              
              {/* LEVEL 1: GOVERNING COUNCIL (Top Apex Capsule Card) */}
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  className="group relative flex w-72 flex-col items-center justify-center rounded-full border-2 border-primary/30 bg-white px-6 py-4 shadow-brand-md transition-all hover:border-primary hover:shadow-brand-lg"
                >
                  <div className="mb-1.5 flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-primary shadow-brand-xs group-hover:bg-primary group-hover:text-white transition-colors">
                    <Landmark className="h-4 w-4" />
                  </div>
                  <h3 className="font-display text-sm font-extrabold uppercase tracking-wider text-foreground">
                    GOVERNING COUNCIL
                  </h3>
                  <span className="text-[10px] font-semibold text-primary">
                    Apex Strategic Authority
                  </span>
                </motion.div>

                {/* Vertical Stem 1 */}
                <div className="h-10 w-0.5 bg-primary/40" />
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-white text-primary shadow-brand-xs">
                  <ArrowDown className="h-3 w-3" />
                </div>
                <div className="h-6 w-0.5 bg-primary/40" />
              </div>

              {/* LEVEL 2: EXECUTIVE ROW (3 Capsule Cards) */}
              <div className="flex flex-col items-center">
                {/* Horizontal Connecting Bar */}
                <div className="w-[72%] border-t-2 border-primary/40" />

                <div className="grid w-full max-w-4xl grid-cols-3 gap-6 pt-3">
                  {/* Left: Management Trustees */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[240px] flex-col items-center rounded-full border border-border/80 bg-white px-4 py-3.5 text-center shadow-brand-xs hover:border-primary/50 hover:shadow-brand-sm transition-all"
                    >
                      <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Building2 className="h-3.5 w-3.5" />
                      </div>
                      <h4 className="font-display text-xs font-bold text-foreground">MANAGEMENT TRUSTEES</h4>
                      <span className="text-[9px] text-muted">Policy & Asset Governance</span>
                    </motion.div>
                  </div>

                  {/* Center: Principal / Dean (Highlighted Filled Burgundy Capsule) */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[250px] flex-col items-center rounded-full border-2 border-primary bg-primary px-5 py-4 text-center text-white shadow-brand-md transition-all"
                    >
                      <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white shadow-brand-xs">
                        <GraduationCap className="h-4 w-4" />
                      </div>
                      <h4 className="font-display text-sm font-extrabold tracking-wider text-white">PRINCIPAL / DEAN</h4>
                      <span className="text-[10px] font-semibold text-accent">Chief Executive Office</span>
                    </motion.div>
                  </div>

                  {/* Right: Admin Directorate */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[240px] flex-col items-center rounded-full border border-border/80 bg-white px-4 py-3.5 text-center shadow-brand-xs hover:border-primary/50 hover:shadow-brand-sm transition-all"
                    >
                      <div className="mb-1 flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Briefcase className="h-3.5 w-3.5" />
                      </div>
                      <h4 className="font-display text-xs font-bold text-foreground">ADMIN DIRECTORATE</h4>
                      <span className="text-[9px] text-muted">Logistics & Compliance</span>
                    </motion.div>
                  </div>
                </div>

                {/* Vertical Stem 2 */}
                <div className="h-8 w-0.5 bg-primary/40" />
              </div>

              {/* LEVEL 3: DIRECTORATE ROW (3 Capsule Cards) */}
              <div className="flex flex-col items-center">
                {/* Horizontal Connecting Bar */}
                <div className="w-[82%] border-t-2 border-primary/40" />

                <div className="grid w-full max-w-5xl grid-cols-3 gap-8 pt-3">
                  {/* Academic Cell */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[230px] flex-col items-center rounded-full border border-border/80 bg-white px-4 py-3 text-center shadow-brand-xs hover:border-primary/50 transition-all"
                    >
                      <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <BookOpen className="h-3 w-3" />
                      </div>
                      <h5 className="font-display text-xs font-bold text-foreground">ACADEMIC CELL</h5>
                      <span className="text-[9px] text-muted">Curriculum & Exams</span>
                    </motion.div>
                    <div className="h-8 w-0.5 bg-primary/40" />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-white text-primary">
                      <ArrowDown className="h-3 w-3" />
                    </div>
                  </div>

                  {/* IQAC Cell */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[230px] flex-col items-center rounded-full border border-border/80 bg-white px-4 py-3 text-center shadow-brand-xs hover:border-primary/50 transition-all"
                    >
                      <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Award className="h-3 w-3" />
                      </div>
                      <h5 className="font-display text-xs font-bold text-foreground">IQAC CELL</h5>
                      <span className="text-[9px] text-muted">Quality Assurance</span>
                    </motion.div>
                    <div className="h-8 w-0.5 bg-primary/40" />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-white text-primary">
                      <ArrowDown className="h-3 w-3" />
                    </div>
                  </div>

                  {/* Hospital Supt. */}
                  <div className="flex flex-col items-center">
                    <div className="h-5 w-0.5 bg-primary/40" />
                    <motion.div
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="flex w-full max-w-[230px] flex-col items-center rounded-full border border-border/80 bg-white px-4 py-3 text-center shadow-brand-xs hover:border-primary/50 transition-all"
                    >
                      <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <HeartPulse className="h-3 w-3" />
                      </div>
                      <h5 className="font-display text-xs font-bold text-foreground">HOSPITAL SUPT.</h5>
                      <span className="text-[9px] text-muted">Clinical Services</span>
                    </motion.div>
                    <div className="h-8 w-0.5 bg-primary/40" />
                    <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/30 bg-white text-primary">
                      <ArrowDown className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </div>

              {/* LEVEL 4: 3 LARGE VERTICAL COLUMN CONTAINERS (Matching User Screenshot) */}
              <div className="mt-4 grid gap-6 grid-cols-1 md:grid-cols-3">
                
                {/* COLUMN 1: DENTAL SPECIALTIES */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col rounded-[2rem] border border-primary/20 bg-primary/[0.03] p-5 shadow-brand-card"
                >
                  {/* Header */}
                  <div className="mb-5 flex items-center gap-3 border-b border-primary/15 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-xs">
                      <Stethoscope className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-foreground">DENTAL SPECIALTIES</h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                        09 Units Operational
                      </span>
                    </div>
                  </div>

                  {/* Stacked White Pill Cards */}
                  <div className="space-y-2.5">
                    {DENTAL_SPECIALTIES.map((dept) => (
                      <motion.div
                        key={dept.name}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="group"
                      >
                        <Link
                          to={dept.href}
                          className="flex items-center justify-between rounded-full border border-border/80 bg-white px-4 py-2.5 shadow-brand-xs transition-all hover:border-primary hover:shadow-brand-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                              <Stethoscope className="h-3 w-3" />
                            </div>
                            <span className="font-display text-xs font-bold text-foreground group-hover:text-primary truncate">
                              {dept.name}
                            </span>
                          </div>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted group-hover:text-primary transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* COLUMN 2: MEDICAL WINGS */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col rounded-[2rem] border border-primary/20 bg-primary/[0.03] p-5 shadow-brand-card"
                >
                  {/* Header */}
                  <div className="mb-5 flex items-center gap-3 border-b border-primary/15 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-xs">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-foreground">MEDICAL WINGS</h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                        06 Specialized Depts
                      </span>
                    </div>
                  </div>

                  {/* Stacked White Pill Cards */}
                  <div className="space-y-2.5">
                    {MEDICAL_WINGS.map((med) => (
                      <motion.div
                        key={med.name}
                        whileHover={{ scale: 1.02, x: 2 }}
                        className="flex items-center justify-between rounded-full border border-border/80 bg-white px-4 py-2.5 shadow-brand-xs transition-all hover:border-primary hover:shadow-brand-sm"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <ShieldCheck className="h-3 w-3" />
                          </div>
                          <span className="font-display text-xs font-bold text-foreground truncate">
                            {med.name}
                          </span>
                        </div>
                        <span className="rounded-full bg-muted/20 px-2 py-0.5 text-[9px] font-bold text-muted shrink-0">
                          {med.tag}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* COLUMN 3: OPERATIONS & SUPPORT */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col rounded-[2rem] border border-primary/20 bg-primary/[0.03] p-5 shadow-brand-card"
                >
                  {/* Header */}
                  <div className="mb-5 flex items-center gap-3 border-b border-primary/15 pb-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-brand-xs">
                      <Monitor className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-extrabold text-foreground">OPERATIONS</h4>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                        IT, HR & Finance Support
                      </span>
                    </div>
                  </div>

                  {/* Stacked White Pill Cards */}
                  <div className="space-y-2.5">
                    {OPERATIONS_SUPPORT.map((op) => {
                      const IconComponent = op.icon
                      return (
                        <motion.div
                          key={op.name}
                          whileHover={{ scale: 1.02, x: 2 }}
                          className="flex items-center justify-between rounded-full border border-border/80 bg-white px-4 py-2.5 shadow-brand-xs transition-all hover:border-primary hover:shadow-brand-sm"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                              <IconComponent className="h-3 w-3" />
                            </div>
                            <span className="font-display text-xs font-bold text-foreground truncate">
                              {op.name}
                            </span>
                          </div>
                          <span className="rounded-full bg-muted/20 px-2 py-0.5 text-[9px] font-bold text-muted shrink-0">
                            {op.tag}
                          </span>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

              </div>

              {/* Bottom Tag (Matching User Screenshot) */}
              <div className="mt-10 flex items-center justify-center gap-2 border-t border-primary/15 pt-6 text-center">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-primary">
                  STRATEGIC FLOW OF AUTHORITY
                </span>
                <span className="h-2 w-2 rounded-full bg-primary" />
              </div>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
