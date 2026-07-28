import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useTransform } from 'framer-motion'
import {
  ShieldCheck,
  Users,
  Check,
  Search,
  Download,
  ArrowRight,
  FileText,
  GraduationCap,
  Microscope,
  Heart,
  Phone,
  X,
  ChevronRight,
  Info,
  Layers,
  ChevronDown,
} from 'lucide-react'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { useHeroOvalClip } from '@/hooks/useHeroOvalClip'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

// --- Governance Overview Pillars ---
const GOVERNANCE_PILLARS = [
  {
    id: 'iqac',
    title: 'Internal Quality Assurance Cell (IQAC)',
    desc: 'Quality benchmarks, reviews, and continuous institutional growth',
    target: '#iqac-section',
    icon: ShieldCheck,
  },
  {
    id: 'policies',
    title: 'Administration Policies',
    desc: 'Official governance handbooks, ethics, and administrative guidelines',
    target: '#documents',
    icon: FileText,
  },
  {
    id: 'structure',
    title: 'Organizational Structure',
    desc: 'Decentralized participative framework from leadership to students',
    target: '#governance-framework',
    icon: Layers,
  },
  {
    id: 'committees',
    title: 'Institutional Committees',
    desc: '23+ statutory and non-statutory committees across 5 categories',
    target: '#committee-categories',
    icon: Users,
  },
]

// --- IQAC Highlights ---
const IQAC_HIGHLIGHTS = [
  'Continuous Quality Monitoring',
  'Academic & Administrative Review',
  'Regular IQAC Meetings',
  'Institutional Development Planning',
]

// --- Governance Framework Tiers ---
const FRAMEWORK_TIERS = [
  { step: '01', title: 'Management', desc: 'Top Level Governance & Strategic Oversight', role: 'Policy Approval & Financial Stewardship' },
  { step: '02', title: 'Principal', desc: 'Executive Institutional Head & Administrative Leader', role: 'Academic & Operational Governance' },
  { step: '03', title: 'Vice Principal', desc: 'Academic & Administrative Directorate', role: 'Institutional Planning & Co-ordination' },
  { step: '04', title: 'Heads of Departments', desc: 'Departmental Clinical & Academic Leaders', role: 'Departmental Execution & Standards' },
  { step: '05', title: 'Committees and Cells', desc: 'Functional Specialized Governance Bodies', role: 'Targeted Initiatives & Quality Assurance' },
  { step: '06', title: 'Faculty and Staff', desc: 'Academic, Clinical & Administrative Force', role: 'Teaching, Healthcare & Operational Execution' },
  { step: '07', title: 'Students', desc: 'Primary Institutional Stakeholders', role: 'Feedback, Learning & Student Welfare' },
]

// --- Category Data ---
const CATEGORIES = [
  {
    id: 'Teaching',
    title: 'Teaching & Learning',
    icon: GraduationCap,
    desc: 'Supports curriculum planning, academic quality, examinations, and faculty development to enhance the learning experience.',
    count: '5 Committees',
  },
  {
    id: 'Student Welfare',
    title: 'Student Welfare',
    icon: Users,
    desc: 'Promotes student well-being, safety, mentoring, grievance redressal, and an inclusive campus environment.',
    count: '7 Committees',
  },
  {
    id: 'Research',
    title: 'Research & Innovation',
    icon: Microscope,
    desc: 'Encourages ethical research, scientific publications, academic collaborations, and innovation among faculty and students.',
    count: '4 Committees',
  },
  {
    id: 'Community',
    title: 'Community Outreach',
    icon: Heart,
    desc: 'Coordinates extension activities, health awareness programs, NSS initiatives, and community service.',
    count: '3 Committees',
  },
  {
    id: 'Administration',
    title: 'Administration',
    icon: ShieldCheck,
    desc: 'Ensures effective governance through institutional planning, quality assurance, policy implementation, and operational management.',
    count: '4 Committees',
  },
]

// --- Directory Committees List (23 Committees) ---
const COMMITTEES_LIST = [
  {
    id: 'iqac',
    name: 'Internal Quality Assurance Cell (IQAC)',
    category: 'Administration',
    purpose: 'Maintains quality benchmarks across academic, clinical, and administrative processes.',
    chair: 'Principal / Quality Coordinator',
    frequency: 'Quarterly',
    composition: 'Principal, Management Representatives, HODs, External Experts, Alumni, Student Delegates',
    keyFocus: ['Academic Audits', 'NAAC & Quality Accreditation', 'Feedback Analytics', 'Teaching Innovation'],
  },
  {
    id: 'cgc',
    name: 'College Governing Council',
    category: 'Administration',
    purpose: 'Top institutional body providing strategic direction, policy approval, and financial oversight.',
    chair: 'Management Trustee / Chairman',
    frequency: 'Bi-annually',
    composition: 'Trust Members, Principal, DCI Nominee, University Nominee, Senior Professors',
    keyFocus: ['Strategic Vision', 'Infrastructure Growth', 'Regulatory Approvals', 'Annual Budgets'],
  },
  {
    id: 'iec',
    name: 'Institutional Ethics Committee (IEC)',
    category: 'Research',
    purpose: 'Ensures ethical standards in human biomedical and dental clinical research studies.',
    chair: 'Senior External Legal / Medical Bioethicist',
    frequency: 'Bi-monthly',
    composition: 'Clinicians, Pharmacologist, Legal Expert, Basic Scientist, Social Worker, Lay Person',
    keyFocus: ['Clinical Trial Reviews', 'Informed Consent Protocols', 'Patient Risk Mitigation', 'ICMR Guideline Compliance'],
  },
  {
    id: 'aac',
    name: 'Academic Advisory Committee',
    category: 'Teaching',
    purpose: 'Monitors curriculum implementation, teaching quality, and clinical training outcomes.',
    chair: 'Vice Principal / Academic Dean',
    frequency: 'Monthly',
    composition: 'Vice Principal, All Department HODs, Exam In-charge, Academic Coordinators',
    keyFocus: ['Syllabus Completion', 'Clinical Logbook Reviews', 'Student Competency Tracking', 'Innovative Teaching Aids'],
  },
  {
    id: 'arc',
    name: 'Anti-Ragging Committee & Squad',
    category: 'Student Welfare',
    purpose: 'Ensures a safe, respectful, and ragging-free learning environment in accordance with UGC regulations.',
    chair: 'Principal',
    frequency: 'Continuous / Monthly',
    composition: 'Principal, Hostel Wardens, Local Police Inspector, Revenue Official, Parent Representatives, Students',
    keyFocus: ['24/7 Campus Surveillance', 'Surprise Hostel Inspections', 'UGC Anti-Ragging Undertakings', 'Student Safety Patrols'],
  },
  {
    id: 'posh',
    name: 'Gender Sensitization & Internal Complaints Committee (POSH)',
    category: 'Administration',
    purpose: 'Addresses complaints related to workplace dignity, equality, and prevention of harassment.',
    chair: 'Senior Female Professor',
    frequency: 'Quarterly / On-Demand',
    composition: 'Presiding Officer, Female Faculty, Non-Teaching Staff, NGO Representative, Student Representative',
    keyFocus: ['Gender Sensitization Workshops', 'Confidential Complaint Hearings', 'Workplace Safety Protocols', 'Legal Compliance'],
  },
  {
    id: 'sgrc',
    name: 'Students Grievance Redressal Cell',
    category: 'Student Welfare',
    purpose: 'Addresses student academic, accommodation, and campus life concerns.',
    chair: 'Senior Professor',
    frequency: 'Monthly',
    composition: 'Faculty Representatives, Student Nominees, Hostel Warden, Administrative Officer',
    keyFocus: ['Anonymous Suggestion Boxes', 'Academic Appeals', 'Facility Maintenance Support', 'Student Counseling'],
  },
  {
    id: 'rac',
    name: 'Research Advisory Committee',
    category: 'Research',
    purpose: 'Promotes research culture, publication quality, ethical practices, and funded research initiatives.',
    chair: 'Research Convener / Senior Professor',
    frequency: 'Quarterly',
    composition: 'Research Heads, Biostatistician, Department Scientific Officers, External Research Consultants',
    keyFocus: ['Seed Grant Proposals', 'Journal Publication Assistance', 'Patent Guidance', 'Interdisciplinary Grants'],
  },
  {
    id: 'academic-cell',
    name: 'Academic Cell',
    category: 'Teaching',
    purpose: 'Oversees overall academic planning, curriculum execution, and timetable coordination.',
    chair: 'Vice Principal / Academic Dean',
    frequency: 'Monthly',
    composition: 'Vice Principal, Academic Coordinators, HODs',
    keyFocus: ['Curriculum Planning', 'Academic Scheduling', 'Syllabus Audits'],
  },
  {
    id: 'exam-comm',
    name: 'Examination Committee',
    category: 'Teaching',
    purpose: 'Manages internal assessments, university examinations, evaluation standards, and results processing.',
    chair: 'Controller of Examinations',
    frequency: 'Monthly',
    composition: 'Exam In-charges, Evaluation Officers, Registrar',
    keyFocus: ['Examination Timetables', 'Question Paper Moderation', 'Assessment Security'],
  },
  {
    id: 'pg-comm',
    name: 'PG Committee',
    category: 'Teaching',
    purpose: 'Supervises Master of Dental Surgery (MDS) post-graduate training, dissertation progress, and seminar schedules.',
    chair: 'PG Director / Senior Professor',
    frequency: 'Bi-monthly',
    composition: 'Post-Graduate Guides, Department PG Coordinators',
    keyFocus: ['MDS Dissertation Monitoring', 'PG Journal Clubs', 'Advanced Clinical Training'],
  },
  {
    id: 'online-enhancement',
    name: 'Online Enhancement Committee',
    category: 'Teaching',
    purpose: 'Drives digital learning initiatives, e-learning platforms, online lectures, and educational technology integration.',
    chair: 'Digital Learning Coordinator',
    frequency: 'Quarterly',
    composition: 'E-Learning Leads, IT Officers, Student Tech Reps',
    keyFocus: ['LMS Portal Governance', 'Virtual Simulation Labs', 'Digital Study Repositories'],
  },
  {
    id: 'lac',
    name: 'Library Advisory Committee',
    category: 'Administration',
    purpose: 'Oversees library development, learning resources, digital services, and student access.',
    chair: 'Chief Librarian / Senior Faculty',
    frequency: 'Quarterly',
    composition: 'Chief Librarian, Department Library In-charges, Student Literature Representatives',
    keyFocus: ['E-Resource Subscriptions', 'Dental Textbook Purchases', 'Digital Library Kiosks', 'Quiet Study Zone Governance'],
  },
  {
    id: 'hmc',
    name: 'Hostel & Mess Monitoring Committee',
    category: 'Student Welfare',
    purpose: 'Supervises residential hygiene, nutrition, security, and hostel infrastructure.',
    chair: 'Chief Warden',
    frequency: 'Monthly',
    composition: 'Resident Wardens, Student Hostel Captains, Mess Caterer, Estate Engineer',
    keyFocus: ['Dietary Quality Audits', 'Water Purification Checks', 'Security Access Control', 'Recreational Amenities'],
  },
  {
    id: 'coc',
    name: 'Community Outreach & Extension Cell',
    category: 'Community',
    purpose: 'Coordinates rural dental camps, school oral health drives, and public awareness.',
    chair: 'HOD Public Health Dentistry',
    frequency: 'Bi-monthly',
    composition: 'Outreach Faculty, Mobile Unit Surgeons, Social Workers, Student Intern Volunteers',
    keyFocus: ['Free Dental Camp Scheduling', 'School Screening Drives', 'Oral Cancer Awareness', 'Tobacco Cessation Support'],
  },
  {
    id: 'scst',
    name: 'SC/ST & OBC Cell',
    category: 'Student Welfare',
    purpose: 'Ensures welfare, scholarships, and equal opportunities for reserved category students.',
    chair: 'Liaison Officer / Associate Professor',
    frequency: 'Quarterly',
    composition: 'Liaison Officer, Faculty Representatives, Welfare Officers, Student Delegates',
    keyFocus: ['Government Scholarship Guidance', 'Book Bank Distribution', 'Remedial Coaching Support', 'Grievance Resolution'],
  },
  {
    id: 'dac',
    name: 'Discipline & Anti-Drug Committee',
    category: 'Student Welfare',
    purpose: 'Maintains institutional discipline and conducts anti-substance abuse awareness.',
    chair: 'Vice Principal',
    frequency: 'Monthly',
    composition: 'Chief Proctor, Department Proctors, Security Head, Counselor',
    keyFocus: ['Campus Code of Conduct', 'Substance Abuse Awareness', 'Dress Code Compliance', 'Student Behavior Counseling'],
  },
  {
    id: 'icpc',
    name: 'Infection Control & Patient Safety Cell',
    category: 'Administration',
    purpose: 'Enforces sterilisation standards, biomedical waste management, and clinical safety.',
    chair: 'HOD Oral Surgery / Pathology',
    frequency: 'Monthly',
    composition: 'Infection Control Officer, Hospital Superintendent, Chief Nursing Officer, Bio-Waste Manager',
    keyFocus: ['Autoclave Spore Testing', 'Biomedical Waste Segregation', 'Personal Protective Equipment', 'Occupational Needle-Stick Safety'],
  },
  {
    id: 'scc',
    name: 'Sports & Cultural Committee',
    category: 'Student Welfare',
    purpose: 'Organizes annual sports meets, cultural fests, and extra-curricular events.',
    chair: 'Sports Coordinator / Faculty Adviser',
    frequency: 'Monthly',
    composition: 'Physical Director, Student Cultural Secretaries, Event Coordinators',
    keyFocus: ['Annual College Sports Meet', 'Inter-Collegiate Fests', 'Gymnasium Management', 'Art & Talent Showcases'],
  },
  {
    id: 'alumni',
    name: 'Alumni Association Cell',
    category: 'Administration',
    purpose: 'Connects alumni network for mentorship, placements, and institutional growth.',
    chair: 'Alumni President / Faculty Convener',
    frequency: 'Quarterly',
    composition: 'Alumni Office Bearers, Faculty Delegates, Graduating Class Representatives',
    keyFocus: ['Annual Alumni Meet', 'Career Mentorship Series', 'Alumni Endowment Funds', 'Global Practitioner Directory'],
  },
  {
    id: 'cpc',
    name: 'Career Guidance & Placement Cell',
    category: 'Student Welfare',
    purpose: 'Provides career counseling, NEET-MDS coaching, and internship opportunities.',
    chair: 'Placement Officer / Professor',
    frequency: 'Monthly',
    composition: 'Placement Coordinators, Career Guidance Counselors, Industry Liaison Officers',
    keyFocus: ['NEET-MDS Preparation Classes', 'Clinical Practice Workshops', 'Corporate Hospital Interviews', 'Abroad Practice Seminars'],
  },
  {
    id: 'ibc',
    name: 'Institutional Bio-safety Committee',
    category: 'Research',
    purpose: 'Monitors safe handling of biological agents, hazardous materials, and lab safety.',
    chair: 'HOD Microbiology / Pathology',
    frequency: 'Bi-annually',
    composition: 'Bio-Safety Officer, Lab Technicians, External Safety Specialist',
    keyFocus: ['Lab Safety Protocols', 'Hazardous Waste Clearance', 'Chemical Storage Audits', 'Disaster Preparedness'],
  },
  {
    id: 'mic',
    name: 'Maintenance & Infrastructure Committee',
    category: 'Administration',
    purpose: 'Manages campus facilities, dental equipment maintenance, and civil works.',
    chair: 'Campus Estate Manager',
    frequency: 'Monthly',
    composition: 'Bio-Medical Engineers, Electrical Supervisors, Dental Chair Technicians, Plumbing Overseer',
    keyFocus: ['Dental Chair Preventative Maintenance', 'Solar & Generator Backup', 'Air Conditioning Maintenance', 'Civil Renovations'],
  },
  {
    id: 'nss',
    name: 'NSS & Youth Red Cross Cell',
    category: 'Community',
    purpose: 'Organizes social outreach activities, health camps, and community service programs.',
    chair: 'NSS Programme Officer',
    frequency: 'Monthly',
    composition: 'NSS Officers, Student Volunteer Leaders, Red Cross Coordinators',
    keyFocus: ['Blood Donation Camps', 'Environmental Plantation Drives', 'Swachh Bharat Campaigns', 'Village Adoption Projects'],
  },
  {
    id: 'eoc',
    name: 'Equal Opportunity Cell',
    category: 'Student Welfare',
    purpose: 'Fosters an inclusive campus environment for students with diverse needs.',
    chair: 'Senior Professor',
    frequency: 'Quarterly',
    composition: 'Equal Opportunity Officer, Special Educators, Student Representatives',
    keyFocus: ['Barrier-Free Ramp & Lift Access', 'Assistive Technology Provision', 'Inclusion Counseling', 'Equal Learning Support'],
  },
  {
    id: 'ptac',
    name: 'Pharma & Therapeutics Advisory Committee',
    category: 'Administration',
    purpose: 'Formulates clinical drug formulary and monitors hospital pharmacy standards.',
    chair: 'Hospital Superintendent',
    frequency: 'Quarterly',
    composition: 'Chief Pharmacologist, Senior Surgeons, Hospital Pharmacist',
    keyFocus: ['Hospital Drug Formulary', 'Adverse Drug Reaction Monitoring', 'Antibiotic Stewardship', 'Emergency Medicine Supply'],
  },
]

// --- Documents / Downloads Data ---
const DOCUMENTS_DATA = [
  {
    id: 'doc-1',
    title: 'List of Committees',
    size: 'PDF · 2.4 MB',
    desc: 'Complete list of statutory and non-statutory committees functioning within the institution.',
    fileName: 'List_of_committee_2022.pdf',
    url: 'https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf',
  },
  {
    id: 'doc-2',
    title: 'Roles & Responsibilities',
    size: 'PDF · 3.8 MB',
    desc: 'Detailed responsibilities, objectives, and scope of every institutional committee.',
    fileName: '6.1.2_roles_and_responsibility_of_each_committees.pdf',
    url: 'https://apdch.in/wp-content/uploads/2022/09/6.1.2_roles_and_responsibility_of_each_committees.pdf',
  },
]

// --- Frequently Asked Questions ---
const COMMITTEES_FAQS = [
  {
    question: 'What is the purpose of institutional committees?',
    answer:
      'Institutional committees help manage academic, administrative, research, and student welfare activities while ensuring transparency and quality across the institution.',
  },
  {
    question: 'What is IQAC?',
    answer:
      'The Internal Quality Assurance Cell (IQAC) is responsible for monitoring and improving the quality of academic and administrative performance through continuous evaluation and quality initiatives.',
  },
  {
    question: 'How often do committees meet?',
    answer:
      'Committee meetings are conducted periodically based on institutional requirements, annual plans, and quality review schedules.',
  },
  {
    question: 'Who can contact a committee?',
    answer:
      'Students, faculty, staff, and stakeholders may contact the respective committee through the institution whenever support or guidance is required.',
  },
  {
    question: 'Where can committee documents be accessed?',
    answer:
      'Committee information, policies, and related documents are available through the official APDCH website and the institutional administration.',
  },
]

export default function Committees() {
  const { ref, clipPath, scrollYProgress } = useHeroOvalClip()
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  // State for Directory Search & Filter (In-Page Flow & Inline Accordion)
  const [selectedCategory, setSelectedCategory] = useState('Teaching')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCommitteeId, setExpandedCommitteeId] = useState(null)

  // Filtered committees list for in-page category flow
  const filteredCommittees = useMemo(() => {
    return COMMITTEES_LIST.filter((committee) => {
      const matchesSearch =
        committee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        committee.purpose.toLowerCase().includes(searchTerm.toLowerCase()) ||
        committee.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || committee.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [selectedCategory, searchTerm])

  return (
    <>
      <Navbar />
      <main>
        {/* ==================================================
            1. HERO SECTION
            ================================================== */}
        <motion.section
          id="top"
          ref={ref}
          style={{ clipPath }}
          className="relative flex min-h-[70svh] items-end overflow-hidden pb-20 pt-32 will-change-[clip-path] md:min-h-[78svh] md:items-center md:pb-28"
        >
          <motion.div style={{ scale }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80&auto=format&fit=crop"
              alt="Adhiparasakthi Dental College governance and administration building"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 hero-overlay" />
            <div className="absolute inset-0 glow-radial-accent" />
          </motion.div>

          <FloatingHeroIcons />

          <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
            {/* Breadcrumb Nav */}
            <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white/70">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 text-accent" />
              <Link to="/about" className="hover:text-white transition-colors">Governance</Link>
              <ChevronRight className="h-3 w-3 text-accent" />
              <span className="text-accent">Committees & Cells</span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.7 }}
              className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-accent"
            >
              INSTITUTIONAL GOVERNANCE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.08 }}
              className="hero-heading-gradient max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]"
            >
              Committees & Cells
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg"
            >
              APDCH promotes excellence through a well-defined committee system that supports academic quality, student welfare, research, administration, and institutional development. These committees ensure transparency, accountability, and continuous improvement across all aspects of the institution.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg">
                <a href="#committee-directory">
                  Explore Committees
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md transition-all"
              >
                <a
                  href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" />
                  Download Committee List
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ==================================================
            2. GOVERNANCE OVERVIEW
            ================================================== */}
        <section className="mesh-bg px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="GOVERNANCE OVERVIEW"
                title="Building Excellence Through Collaborative Leadership"
                description="The institution follows a participative governance model where academic and administrative committees work together to achieve institutional goals. Through regular meetings, structured policies, and collaborative decision-making, APDCH maintains high standards in education, patient care, research, and student support."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GOVERNANCE_PILLARS.map((pillar, i) => {
                const IconComponent = pillar.icon
                return (
                  <Reveal key={pillar.id} delay={i * 0.06} className="h-full">
                    <a
                      href={pillar.target}
                      className="group flex h-full min-h-[220px] flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-brand-xs transition-all duration-400 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md md:p-7"
                    >
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white mb-5">
                          <IconComponent className="h-6 w-6 stroke-[1.75]" />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary leading-snug">
                          {pillar.title}
                        </h3>
                        <p className="mt-2 text-xs md:text-sm leading-relaxed text-muted">
                          {pillar.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs font-bold text-primary group-hover:text-primary-dark transition-colors">
                          Explore Pillar
                        </span>
                        <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </a>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* ==================================================
            3. INTERNAL QUALITY ASSURANCE CELL (IQAC Highlight)
            ================================================== */}
        <section id="iqac-section" className="bg-background px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Left Image */}
              <Reveal>
                <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-surface-soft p-3 shadow-brand-md">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                    <img
                      src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1000&q=80&auto=format&fit=crop"
                      alt="APDCH Internal Quality Assurance Cell meeting and review session"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/90 p-4 backdrop-blur-md border border-white/40">
                      <p className="text-xs font-bold uppercase tracking-wider text-primary">Nodal Governance Body</p>
                      <p className="text-sm font-semibold text-slate-900 mt-0.5">Continuous Quality & Academic Audits at APDCH</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right Content */}
              <Reveal delay={0.1}>
                <div>
                  <SectionHeading
                    align="left"
                    eyebrow="QUALITY ASSURANCE"
                    title="Internal Quality Assurance Cell"
                    description="The Internal Quality Assurance Cell (IQAC) plays a vital role in maintaining and enhancing the quality of education and institutional practices. It regularly reviews academic performance, administrative processes, research activities, and quality initiatives to ensure continuous institutional growth."
                  />
                  <div className="mt-8 space-y-4">
                    {IQAC_HIGHLIGHTS.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl border border-border/60 bg-white p-3.5 shadow-xs transition-all hover:border-primary/25">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check className="h-4 w-4" strokeWidth={3} />
                        </span>
                        <span className="text-sm md:text-base font-semibold text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ==================================================
            4. GOVERNANCE FRAMEWORK
            ================================================== */}
        <section id="governance-framework" className="mesh-bg px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="STRUCTURED HIERARCHY"
                title="Participative Governance Framework"
                description="APDCH follows a decentralized governance structure where institutional leadership, academic departments, and committees work collaboratively to implement policies, monitor performance, and achieve continuous improvement."
              />
            </Reveal>

            <div className="mt-16 relative">
              {/* Connecting Central Line */}
              <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-primary to-primary/20 z-0" />

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
                {FRAMEWORK_TIERS.map((tier, i) => (
                  <Reveal key={tier.title} delay={i * 0.05}>
                    <div className={`relative z-10 flex flex-col lg:flex-row items-center gap-6 rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-brand-xs transition-all duration-400 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-md ${i % 2 === 0 ? 'lg:mr-auto lg:max-w-2xl' : 'lg:ml-auto lg:max-w-2xl'}`}>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white font-bold text-sm shadow-brand-sm">
                        {tier.step}
                      </div>
                      <div className="flex-1 text-center lg:text-left">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground">{tier.title}</h3>
                          <span className="text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-0.5 rounded-md inline-block max-w-max mx-auto lg:mx-0">{tier.role}</span>
                        </div>
                        <p className="mt-1 text-xs md:text-sm text-muted">{tier.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            5. COMMITTEE CATEGORIES & DIRECTORY
            ================================================== */}
        <section id="committee-categories" className="bg-background px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="INSTITUTIONAL COMMITTEES"
                title="Explore Committees & Cells"
                description="Browse the institutional committees responsible for various academic, administrative, research, and student support activities."
              />
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((cat, i) => {
                const IconComponent = cat.icon

                return (
                  <Reveal key={cat.id} delay={i * 0.06} className="h-full w-full">
                    <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-xs transition-all duration-400 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                            <IconComponent className="h-6 w-6 stroke-[1.75]" />
                          </div>
                          <span className="rounded-full bg-surface-soft px-3 py-1 text-xs font-bold text-primary">
                            {cat.count}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {cat.title}
                        </h3>
                        <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted">
                          {cat.desc}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedCategory(cat.id)
                            setSearchTerm('')
                            const el = document.getElementById('committee-directory-flow')
                            if (el) el.scrollIntoView({ behavior: 'smooth' })
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                        >
                          <span>View Committees</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </div>
                    </article>
                  </Reveal>
                )
              })}

              {/* View All Committees Card */}
              <Reveal delay={0.35} className="h-full w-full sm:col-span-2 lg:col-span-1">
                <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-dashed border-primary/40 bg-primary/5 p-7 shadow-xs transition-all duration-400 hover:-translate-y-2 hover:border-primary hover:bg-primary/10">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary text-white">
                        <Search className="h-6 w-6 stroke-[1.75]" />
                      </div>
                      <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-bold text-primary">
                        23+ Committees
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                      All Committees & Cells
                    </h3>
                    <p className="mt-2.5 text-xs md:text-sm leading-relaxed text-muted">
                      Search or view the complete directory of statutory, non-statutory, and governance committees across APDCH.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-primary/15 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('All')
                        setSearchTerm('')
                        const el = document.getElementById('committee-directory-flow')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                    >
                      <span>Explore Full Directory</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* ==================================================
                IN-PAGE COMMITTEES SEQUENTIAL FLOW (NO POPUP)
                ================================================== */}
            <div id="committee-directory-flow" className="mt-20 pt-16 border-t border-slate-200">
              <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {selectedCategory === 'All' ? 'Complete Governance Directory' : `${selectedCategory} Committees`}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                    Committee Flow & Hierarchy
                  </h3>
                </div>

                {/* Search Bar */}
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search committees, purposed keywords..."
                    className="w-full rounded-full border border-border/80 bg-white py-2.5 pl-11 pr-10 text-xs font-medium text-foreground placeholder:text-muted/60 shadow-xs focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter Pills (In-Page) */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                {[
                  { id: 'Teaching', label: 'Teaching & Learning' },
                  { id: 'Student Welfare', label: 'Student Welfare' },
                  { id: 'Research', label: 'Research & Innovation' },
                  { id: 'Community', label: 'Community Outreach' },
                  { id: 'Administration', label: 'Administration' },
                  { id: 'All', label: 'All 23+ Committees' },
                ].map((cat) => {
                  const isActive = selectedCategory === cat.id
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-primary text-white shadow-brand-sm scale-105'
                          : 'border border-border/80 bg-white text-muted hover:border-primary/30 hover:text-foreground'
                      }`}
                    >
                      {cat.label}
                    </button>
                  )
                })}
              </div>

              {/* In-Page Sequential Flow List (Option A Flow) */}
              <div className="mt-12 flex flex-col gap-3 max-w-3xl mx-auto">
                <AnimatePresence mode="popLayout">
                  {filteredCommittees.map((committee, i) => {
                    const isExpanded = expandedCommitteeId === committee.id

                    return (
                      <motion.div
                        layout
                        key={committee.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.2, delay: Math.min(i * 0.03, 0.2) }}
                        className="flex flex-col items-center w-full"
                      >
                        <div
                          className={`w-full rounded-2xl border bg-white p-5 shadow-brand-xs transition-all duration-300 ${
                            isExpanded
                              ? 'border-primary/40 ring-2 ring-primary/10 shadow-brand-md'
                              : 'border-border/80 hover:border-primary/30'
                          }`}
                        >
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold text-sm">
                                0{i + 1}
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-2 mb-1">
                                  <h4 className="text-base font-bold text-foreground transition-colors">
                                    {committee.name}
                                  </h4>
                                  <span className="rounded-full bg-surface-soft px-2.5 py-0.5 text-[10px] font-bold uppercase text-primary">
                                    {committee.category}
                                  </span>
                                  <span className="text-[10px] font-semibold text-muted">
                                    ({committee.frequency})
                                  </span>
                                </div>
                                <p className="text-xs text-muted leading-relaxed">
                                  {committee.purpose}
                                </p>
                              </div>
                            </div>

                            <Button
                              type="button"
                              variant={isExpanded ? "default" : "soft"}
                              size="sm"
                              onClick={() => setExpandedCommitteeId(isExpanded ? null : committee.id)}
                              className="shrink-0 rounded-full text-xs font-semibold h-8 px-4 self-end md:self-center flex items-center gap-1.5"
                            >
                              <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                            </Button>
                          </div>

                          {/* Inline Expandable Details Panel */}
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-5 pt-4 border-t border-slate-100 grid gap-4 text-xs md:text-sm">
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-surface-soft p-3.5 rounded-xl border border-border/50">
                                    <div>
                                      <span className="font-bold text-accent text-[10px] uppercase tracking-wider block mb-0.5">
                                        Leadership & Chairmanship
                                      </span>
                                      <span className="font-semibold text-foreground">{committee.chair}</span>
                                    </div>
                                    <div>
                                      <span className="font-bold text-accent text-[10px] uppercase tracking-wider block mb-0.5">
                                        Meeting Schedule
                                      </span>
                                      <span className="font-semibold text-foreground">{committee.frequency}</span>
                                    </div>
                                  </div>

                                  {committee.composition && (
                                    <div>
                                      <span className="font-bold text-accent text-[10px] uppercase tracking-wider block mb-1">
                                        Committee Composition
                                      </span>
                                      <p className="text-muted leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/60">
                                        {committee.composition}
                                      </p>
                                    </div>
                                  )}

                                  {committee.keyFocus && (
                                    <div>
                                      <span className="font-bold text-accent text-[10px] uppercase tracking-wider block mb-2">
                                        Key Responsibilities & Focus Areas
                                      </span>
                                      <div className="grid sm:grid-cols-2 gap-2">
                                        {committee.keyFocus.map((focus) => (
                                          <div key={focus} className="flex items-center gap-2 text-xs font-semibold text-foreground/80 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                                            <Check className="h-3.5 w-3.5 text-primary shrink-0" strokeWidth={3} />
                                            <span>{focus}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Down Arrow Flow Indicator */}
                        {i < filteredCommittees.length - 1 && (
                          <div className="py-2 text-primary font-bold text-base flex items-center justify-center">
                            ↓
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </AnimatePresence>

                {filteredCommittees.length === 0 && (
                  <div className="py-16 text-center bg-white rounded-3xl border border-dashed border-border/80">
                    <Info className="mx-auto h-8 w-8 text-muted mb-2" />
                    <p className="text-base font-bold text-foreground">No committees found matching your criteria</p>
                    <p className="text-xs text-muted mt-1">Try clearing your search terms or selecting a different category filter.</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            7. FEATURED COMMITTEE (IQAC Deep Dive)
            ================================================== */}
        <section className="bg-background px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-footer via-primary-dark to-primary p-8 md:p-12 text-white shadow-xl relative">
                <div className="pointer-events-none absolute inset-0 glow-radial-accent opacity-40" />

                <div className="relative z-10 max-w-4xl">
                  <span className="inline-block rounded-md bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-rose-100 backdrop-blur-md mb-4 border border-white/20">
                    FEATURED COMMITTEE
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white">
                    Internal Quality Assurance Cell (IQAC)
                  </h2>
                  <p className="mt-4 text-base md:text-lg leading-relaxed text-rose-100/90">
                    The IQAC is responsible for developing quality benchmarks, evaluating institutional performance, promoting best practices, and facilitating continuous improvement across academic and administrative functions.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/15">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">Focus Area 1</p>
                      <p className="text-sm font-semibold text-white mt-1">Academic Excellence</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/15">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">Focus Area 2</p>
                      <p className="text-sm font-semibold text-white mt-1">Institutional Quality</p>
                    </div>
                    <div className="rounded-xl bg-white/10 p-4 backdrop-blur-md border border-white/15">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent">Focus Area 3</p>
                      <p className="text-sm font-semibold text-white mt-1">Continuous Assessment</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button
                      type="button"
                      size="lg"
                      onClick={() => {
                        const el = document.getElementById('iqac-section')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-white text-primary hover:bg-slate-100 font-bold"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================
            8. DOCUMENTS AND DOWNLOADS
            ================================================== */}
        <section id="documents" className="mesh-bg px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="RESOURCES"
                title="Committee Documents & Downloads"
                description="Access important committee-related documents, policies, and institutional resources."
              />
            </Reveal>

            <div className="mt-14 max-w-4xl mx-auto grid gap-6 sm:grid-cols-2">
              {DOCUMENTS_DATA.map((doc, i) => (
                <Reveal key={doc.id} delay={i * 0.06}>
                  <article className="group flex h-full flex-col justify-between rounded-[1.75rem] border border-border/80 bg-white p-7 shadow-brand-xs transition-all duration-400 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-brand-md">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                          <FileText className="h-5.5 w-5.5 stroke-[1.75]" />
                        </div>
                        <span className="text-xs font-bold text-muted font-mono">{doc.size}</span>
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </h3>
                      <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed">
                        {doc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <Button
                        asChild
                        variant="soft"
                        className="w-full justify-between rounded-full text-xs font-semibold"
                      >
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          download={doc.fileName}
                        >
                          <span>Download PDF</span>
                          <Download className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            9. FREQUENTLY ASKED QUESTIONS
            ================================================== */}
        <section className="bg-background px-5 py-28 md:px-8 md:py-36">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <SectionHeading
                eyebrow="QUESTIONS & CLARIFICATIONS"
                title="Frequently Asked Questions"
                description="Common questions about APDCH institutional committees, cell functions, and governance access."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-12">
                <Accordion type="single" collapsible defaultValue="item-0">
                  {COMMITTEES_FAQS.map((faq, i) => (
                    <AccordionItem key={faq.question} value={`item-${i}`}>
                      <AccordionTrigger className="text-left font-bold text-base md:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ==================================================
            10. CALL TO ACTION
            ================================================== */}
        <section className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
          <div className="absolute inset-0 cta-gradient" />
          <div className="absolute inset-0 glow-cta-radial" />

          <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
                GOVERNANCE EXCELLENCE
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                Working Together for Institutional Excellence
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Through effective governance, quality assurance, and collaborative leadership, APDCH's Committees & Cells contribute to academic excellence, student welfare, research, and the institution's continuous growth.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/95 font-bold shadow-md">
                  <a href="mailto:principal@apdch.edu.in">
                    <Phone className="h-4 w-4" />
                    Contact Administration
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white backdrop-blur-md"
                >
                  <a
                    href="https://apdch.in/wp-content/uploads/2022/09/List_of_committee_2022.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="h-4 w-4" />
                    Download Committee List
                  </a>
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
