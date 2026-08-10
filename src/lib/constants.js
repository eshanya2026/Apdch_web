export const INSTITUTION = {
  name: 'Adhiparasakthi Dental College and Hospital',
  shortName: 'APDCH',
  hospital: 'Adhiparasakthi Dental College and Hospital',
  brand: 'Adhiparasakthi',
  tagline: 'Educating Future Dentists. Advancing Oral Healthcare. Serving Society.',
  description:
    'Adhiparasakthi Dental College and Hospital — a center for quality education, advanced clinical training, and community-focused healthcare.',
  email: 'admissions@apdch.edu.in',
  phone: '04427528082',
  emergency: '+1 (888) 555-0911',
  address: 'Melmaruvathur, Tamil Nadu 603319',
  hoursLabel: 'Working Hours',
  hoursDays: 'Monday – Saturday',
  hoursTime: '8:00 AM – 5:00 PM',
  hours: 'Monday – Saturday · 8:00 AM – 5:00 PM',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Adhiparasakthi+Dental+College+and+Hospital,+Melmaruvathur&z=15&output=embed',
  mapDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Adhiparasakthi+Dental+College+and+Hospital,+Melmaruvathur,+Tamil+Nadu+603319',
  mapViewUrl:
    'https://www.google.com/maps/search/?api=1&query=Adhiparasakthi+Dental+College+and+Hospital,+Melmaruvathur,+Tamil+Nadu+603319',
}

export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/apdentals/',
    icon: 'facebook',
    hoverClass: 'hover:bg-[#1877F2] hover:text-white',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ap.dentals/',
    icon: 'instagram',
    hoverClass: 'hover:bg-[#E4405F] hover:text-white',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/c/apdentals',
    icon: 'youtube',
    hoverClass: 'hover:bg-[#FF0000] hover:text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/adhiparasakthi-dental-college/',
    icon: 'linkedin',
    hoverClass: 'hover:bg-[#0A66C2] hover:text-white',
  },
]

export const ABOUT_NAV_LINKS = [
  { label: 'About APDCH', href: '/about' },
  { label: 'Campus Life', href: '/about/campus-life' },
]

export const ACADEMICS_NAV_LINKS = [
  { label: 'Academic Programs', href: '/academics' },
  { label: 'Learning Management System (LMS)', href: '/academics/lms' },
]
export const DEPARTMENTS_NAV_LINKS = [
  { label: 'Oral Medicine & Radiology', href: '/departments/oral-medicine' },
  { label: 'Conservative Dentistry & Endodontics', href: '/departments/conservative-dentistry' },
  { label: 'Oral & Maxillofacial Surgery', href: '/departments/oral-surgery' },
  { label: 'Orthodontics & Dentofacial Orthopaedics', href: '/departments/orthodontics' },
  { label: 'Prosthodontics & Crown & Bridge', href: '/departments/prosthodontics' },
  { label: 'Periodontics & Implantology', href: '/departments/periodontics' },
  { label: 'Pedodontics & Preventive Dentistry', href: '/departments/pedodontics' },
  { label: 'Public Health Dentistry', href: '/departments/public-health-dentistry' },
  { label: 'Oral & Maxillofacial Pathology', href: '/departments/oral-pathology' },
  { label: 'Department of Implantology', href: '/departments/implantology' },
]

export const FACULTY_NAV_LINKS = [
  { label: 'Faculty Details', href: '/faculty' },
  { label: 'PG Students Details', href: '/faculty/pg-students' },
]

export const GOVERNANCE_NAV_LINKS = [
  { label: 'Committees & Cells', href: '/governance/committees' },
  { label: 'HR Policy', href: '/governance/hr-policy' },
]

export const RESEARCH_NAV_LINKS = [
  { label: 'Journal', href: 'https://review.jow.medknow.com/IJCDR', external: true },
  { label: 'Newsletter', href: '/research/newsletter' },
  { label: 'Magazine', href: '/research/magazine' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/', type: 'route' },
  { label: 'About', href: '/about', type: 'route', children: ABOUT_NAV_LINKS },
  { label: 'Admissions', href: '/admissions', type: 'route' },
  { label: 'Academics', href: '/academics', type: 'route', children: ACADEMICS_NAV_LINKS },
  { label: 'Departments', href: '/departments', type: 'route', children: DEPARTMENTS_NAV_LINKS },
  { label: 'Faculty', href: '/faculty', type: 'route', children: FACULTY_NAV_LINKS },
  { label: 'Governance', href: '/governance', type: 'route', children: GOVERNANCE_NAV_LINKS },
  { label: 'Research', href: '/research', type: 'route', children: RESEARCH_NAV_LINKS },
  { label: 'Hospital', href: '/hospital', type: 'route' },
]

export const HERO_STATS = [
  { value: 45, suffix: 'K+', label: 'Dental Students' },
  { value: 72, suffix: '+', label: 'Faculty Courses' },
  { value: 90, suffix: '+', label: 'Best Professors' },
  { value: 35, suffix: '+', label: 'Award Achieved' },
]

export const QUICK_ACTIONS = [
  {
    title: 'Apply Now',
    description: 'Begin your journey toward clinical mastery.',
    href: '#cta',
    icon: 'GraduationCap',
  },
  {
    title: 'Book Appointment',
    description: 'Schedule care with our teaching faculty.',
    href: '#cta',
    icon: 'CalendarDays',
  },
  {
    title: 'Find Doctor',
    description: 'Search specialists across every discipline.',
    href: '#specialities',
    icon: 'Stethoscope',
  },
  {
    title: 'Departments',
    description: 'Explore academic and clinical departments.',
    href: '#programs',
    icon: 'Building2',
  },
  {
    title: 'Campus Tour',
    description: 'Walk our studios, labs, and quiet courtyards.',
    href: '#infrastructure',
    icon: 'MapPinned',
  },
  {
    title: 'Emergency',
    description: '24×7 trauma and urgent dental response.',
    href: '#hospital',
    icon: 'Siren',
  },
]

export const WHY_CHOOSE = [
  {
    title: 'Faculty Who Practice',
    description:
      'Every module is shaped by clinicians who treat complex cases daily — theory never drifts from the chairside.',
    icon: 'Users',
  },
  {
    title: 'Simulation-First Training',
    description:
      'Immersive phantoms, VR operatory suites, and haptic feedback prepare you before you ever see a patient.',
    icon: 'Cpu',
  },
  {
    title: 'Integrated Teaching Hospital',
    description:
      'A high-volume hospital campus means exposure to rare pathology alongside everyday restorative excellence.',
    icon: 'Hospital',
  },
  {
    title: 'Global Clinical Network',
    description:
      'Exchange fellowships spanning twelve partner institutions across North America, Europe, and East Asia.',
    icon: 'Globe2',
  },
  {
    title: 'Research with Impact',
    description:
      'From biomaterials to AI diagnostics, student investigators publish alongside principal investigators.',
    icon: 'FlaskConical',
  },
  {
    title: 'Whole-Person Mentorship',
    description:
      'Dedicated academic advisors, wellness coaches, and peer circles support you from orientation to residency.',
    icon: 'HeartHandshake',
  },
]

export const PROGRAMS = [
  {
    title: 'Bachelor of Dental Surgery',
    short: 'BDS',
    duration: '5 Years',
    description:
      'A rigorously sequenced undergraduate pathway blending biomedical science, clinical immersion, and community dentistry from year one.',
    highlights: ['Early clinical exposure', 'Anatomy & simulation labs', 'Community outreach rotations'],
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Master of Dental Surgery',
    short: 'MDS',
    duration: '3 Years',
    description:
      'Specialty residencies designed for clinicians ready to lead operative, surgical, or orthodontic practice at an international standard.',
    highlights: ['Nine specialty tracks', 'Thesis mentorship', 'Operating theatre privilege'],
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Certificate Programs',
    short: 'CERT',
    duration: '6–18 Months',
    description:
      'Focused credentials in implantology, digital prosthodontics, pediatric sedation, and laser-assisted periodontics.',
    highlights: ['Modular weekends', 'Case portfolios', 'Faculty preceptorship'],
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Continuing Education',
    short: 'CE',
    duration: 'Flexible',
    description:
      'Accredited workshops and masterclasses for practicing dentists advancing chairside technique and digital workflows.',
    highlights: ['Live patient demos', 'Hands-on CAD/CAM', 'CPD accredited hours'],
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop',
  },
]

export const HOSPITAL_PILLARS = [
  {
    title: 'Patient Care',
    description:
      'Multidisciplinary teams deliver personalised treatment plans with clear communication, dignity, and measurable outcomes.',
    icon: 'HeartPulse',
    image:
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Modern Equipment',
    description:
      'Cone-beam CT, surgical microscopes, and fully digital operatories equip every resident and attending clinician.',
    icon: 'Microscope',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Digital Dentistry',
    description:
      'Intraoral scanners, chairside milling, and AI-assisted diagnostics shorten timelines without compromising artistry.',
    icon: 'Scan',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: '24×7 Services',
    description:
      'Round-the-clock emergency pathways for trauma, acute pain, and medically complex patients who need us now.',
    icon: 'Clock',
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80&auto=format&fit=crop',
  },
]

export const SPECIALITIES = [
  { title: 'Oral Medicine & Radiology', description: 'Diagnostic clarity for systemic oral disease.', icon: 'ScanSearch' },
  { title: 'Conservative Dentistry & Endodontics', description: 'Tooth-preserving restorative and endodontic care.', icon: 'Target' },
  { title: 'Oral & Maxillofacial Surgery', description: 'Complex craniofacial reconstruction and trauma care.', icon: 'Bone' },
  { title: 'Orthodontics & Dentofacial Orthopaedics', description: 'Aligned smiles shaped by evidence and aesthetics.', icon: 'Smile' },
  { title: 'Prosthodontics & Crown & Bridge', description: 'Restoring form and function with digital precision.', icon: 'Sparkles' },
  { title: 'Periodontics & Implantology', description: 'Foundational gum health for lifelong dentitions.', icon: 'Leaf' },
  { title: 'Pedodontics & Preventive Dentistry', description: 'Gentle, specialist care for growing smiles.', icon: 'Baby' },
  { title: 'Public Health Dentistry', description: 'Population strategies that expand access to care.', icon: 'UsersRound' },
  { title: 'Oral & Maxillofacial Pathology', description: 'Laboratory excellence informing every biopsy.', icon: 'FlaskConical' },
]

export const RESEARCH = [
  {
    title: 'Research Laboratories',
    description:
      'Purpose-built suites for biomaterials, microbiome study, and regenerative tissue engineering — open to student investigators.',
    icon: 'Microscope',
    metric: '18 active labs',
  },
  {
    title: 'Innovation Center',
    description:
      'A hub where clinicians, engineers, and designers prototype next-generation chairside tools and diagnostic software.',
    icon: 'Lightbulb',
    metric: '40+ spinouts',
  },
  {
    title: 'Clinical Research',
    description:
      'IRB-approved trials spanning implant longevity, pediatric sedation safety, and AI radiographic interpretation.',
    icon: 'ClipboardList',
    metric: '76 trials running',
  },
  {
    title: 'Publications',
    description:
      'Faculty and scholars contribute to leading journals — with open-access pathways for high-impact findings.',
    icon: 'BookOpen',
    metric: '320 papers / year',
  },
]

export const STUDENT_EXPERIENCE = [
  {
    title: 'Campus',
    description: 'A walkable academic village with light-filled lecture halls, sculpture gardens, and riverside study trails.',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Hostel',
    description: 'Secure residential houses with shared kitchens, mentoring lounges, and quiet floors for deep study.',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Library',
    description: 'The Crown Collection — rare anatomical atlases alongside 24-hour digital research commons.',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Sports',
    description: 'Courts, a wellness pool, and faculty-led recovery clinics keep bodies as sharp as minds.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Events',
    description: 'Grand rounds, research symposia, cultural nights, and the annual APDCH Clinical Challenge.',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format&fit=crop',
  },
]

export const GALLERY = [
  {
    title: 'Main Academic Atrium',
    category: 'Campus',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&auto=format&fit=crop',
    tall: true,
  },
  {
    title: 'Digital Operatory Suite',
    category: 'Clinic',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Simulation Wing',
    category: 'Labs',
    image:
      'https://images.unsplash.com/photo-1581595220892-b0739db3b8c5?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Healing Courtyard',
    category: 'Hospital',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Research Pavilion',
    category: 'Innovation',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1000&q=80&auto=format&fit=crop',
    tall: true,
  },
  {
    title: 'Student Commons',
    category: 'Life',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80&auto=format&fit=crop',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Choosing this college for my son was the best decision we made. The faculty involvement and infrastructure are world-class. He is thriving academically and personally.',
    name: 'Lakshmi Venkatesan',
    role: 'Parent of BDS Student',
    type: 'Parent',
    rating: 4.8,
  },
  {
    quote:
      'From my first consultation to the completion of my treatment, the care I received was exceptional. The doctors explained every step clearly, and the staff made me feel comfortable throughout the process. I truly appreciate the professionalism and compassion shown by the entire team.',
    name: 'Sudha',
    role: 'Patient',
    type: 'Patient',
    rating: 4.5,
  },
  {
    quote:
      'The education and mentorship I received here continue to guide my professional journey. The institution not only taught dentistry but also instilled compassion, responsibility, and lifelong learning.',
    name: 'Dr. Arjun Sekar',
    role: 'MDS Orthodontics · Alumni',
    type: 'Alumni',
    rating: 4.2,
  },
  {
    quote:
      'Every clinical session challenged me to learn, improve, and grow. The guidance from our faculty and exposure to diverse cases have prepared me to become a confident and compassionate dental professional.',
    name: 'Anjana',
    role: 'Final Year Student',
    type: 'Student',
    rating: 5.0,
  },
]

export const NEWS = [
  {
    title: 'APDCH opens the new Digital Clinic wing',
    excerpt:
      'A 28-chair smart clinic with chairside milling and real-time faculty oversight launches this autumn.',
    date: 'July 8, 2026',
    category: 'Campus',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Faculty paper unlocks new implant coating',
    excerpt:
      'A regenerative titanium surface protocol from our biomaterials lab shows promise in early-stage trials.',
    date: 'June 22, 2026',
    category: 'Research',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Students host global oral health summit',
    excerpt:
      'Delegates from 19 schools gathered for three days of policy workshops and clinical skills showcases.',
    date: 'June 4, 2026',
    category: 'Events',
    image:
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop',
  },
]

export const FAQS = [
  {
    question: 'When does the next BDS intake open?',
    answer:
      'Applications for the autumn cohort open February 1 and close April 15. Early-decision candidates receive decisions by March 20. International applicants should allow additional time for credential evaluation.',
  },
  {
    question: 'Can patients book appointments without a referral?',
    answer:
      'Yes. Most outpatient services accept self-referrals. Specialty clinics such as oral surgery and orthodontics may recommend a referring dentist for continuity of care, though emergencies are always seen without referral.',
  },
  {
    question: 'Are scholarships available for international students?',
    answer:
      'APDCH offers merit scholarships covering up to 60% of tuition, need-based grants, and research assistantships. Eligibility criteria and deadlines are published on the Financial Aid portal each January.',
  },
  {
    question: 'How early do students enter the clinical environment?',
    answer:
      'Observation begins in the first semester. Supervised chairside assist starts in year two, with independent patient care under faculty supervision from the middle of year three onward.',
  },
  {
    question: 'Is campus housing guaranteed for first-year students?',
    answer:
      'Yes. All first-year BDS and MDS students who apply by June 1 receive housing in one of our four residential houses within a five-minute walk of the academic core.',
  },
  {
    question: 'What emergency dental services are available overnight?',
    answer:
      'Our Trauma & Acute Care pathway operates 24×7 for facial trauma, uncontrolled bleeding, severe odontogenic infection, and uncontrolled pain. Call the emergency line listed in the footer.',
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Academics',
    links: ['BDS Program', 'MDS Residencies', 'Certificates', 'Continuing Education', 'Academic Calendar'],
  },
  {
    title: 'Hospital',
    links: ['Find a Doctor', 'Patient Portal', 'Departments', 'Emergency Care', 'Insurance & Billing'],
  },
  {
    title: 'Campus Life',
    links: ['Housing', 'Library', 'Student Affairs', 'Wellness', 'Career Services'],
  },
  {
    title: 'About',
    links: ['Leadership', 'Accreditation', 'Careers', 'Newsroom', 'Contact'],
  },
]
