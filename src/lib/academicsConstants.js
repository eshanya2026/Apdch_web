export const ACADEMICS_HERO = {
  eyebrow: 'Academics at APDCH',
  title: 'Where science meets the chairside',
  description:
    'Structured programmes, immersive clinical training, and scholarly resources designed to form dentists of skill, judgment, and compassion.',
  image:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=2000&q=80&auto=format&fit=crop',
}

export const ACADEMIC_PROGRAMS = [
  {
    title: 'Bachelor of Dental Surgery',
    short: 'BDS',
    duration: '5 Years',
    description:
      'A comprehensive undergraduate pathway spanning biomedical sciences, preclinical skills, and supervised clinical practice.',
    topics: ['Anatomy & Physiology', 'Dental Materials', 'Clinical Dentistry', 'Community Oral Health'],
    icon: 'GraduationCap',
  },
  {
    title: 'Master of Dental Surgery',
    short: 'MDS',
    duration: '3 Years',
    description:
      'Specialty residencies across oral surgery, orthodontics, prosthodontics, periodontics, and allied disciplines.',
    topics: ['Specialty Clinics', 'Thesis Research', 'Seminars', 'Advanced Techniques'],
    icon: 'Award',
  },
  {
    title: 'Certificate Programmes',
    short: 'CERT',
    duration: '6–18 Months',
    description:
      'Focused credentials in implantology, aesthetic dentistry, digital workflows, and pediatric care.',
    topics: ['Modular Learning', 'Hands-on Modules', 'Case Portfolios', 'Faculty Mentorship'],
    icon: 'ScrollText',
  },
  {
    title: 'Continuing Education',
    short: 'CE',
    duration: 'Flexible',
    description:
      'Workshops and masterclasses for practising clinicians advancing technique and digital fluency.',
    topics: ['Live Demonstrations', 'CAD/CAM', 'CPD Hours', 'Peer Exchange'],
    icon: 'BookOpenCheck',
  },
]

export const CURRICULUM = [
  {
    phase: 'Foundation',
    years: 'Years 1–2',
    title: 'Biomedical & Preclinical Core',
    description:
      'Build scientific literacy and hand skills through anatomy, physiology, dental materials, and phantom-head training.',
    items: ['Basic medical sciences', 'Oral biology', 'Preclinical operative & prosthodontics', 'Ethics & communication'],
  },
  {
    phase: 'Integration',
    years: 'Years 3–4',
    title: 'Clinical Immersion',
    description:
      'Transition into supervised patient care across departments with progressive responsibility and case review.',
    items: ['Specialty postings', 'Diagnostic clinics', 'Treatment planning', 'Emergency dental care'],
  },
  {
    phase: 'Mastery',
    years: 'Year 5 / MDS',
    title: 'Independent Practice Readiness',
    description:
      'Consolidate clinical judgment, community dentistry, and specialty depth for graduation or residency completion.',
    items: ['Comprehensive clinics', 'Outreach programmes', 'Research projects', 'Internship rotations'],
  },
]

export const ACADEMIC_CALENDAR = [
  { period: 'June – July', title: 'Session opening', detail: 'Orientation, registration, and foundation modules begin.' },
  { period: 'Aug – Oct', title: 'Odd semester peak', detail: 'Core teaching, labs, and first clinical postings.' },
  { period: 'Nov – Dec', title: 'Assessments', detail: 'Internal evaluations, viva voce, and semester exams.' },
  { period: 'Jan – Mar', title: 'Even semester', detail: 'Advanced clinics, seminars, and project milestones.' },
  { period: 'Apr – May', title: 'University exams', detail: 'Final examinations, results, and vacation window.' },
  { period: 'Year-round', title: 'Clinical services', detail: 'Teaching hospital clinics continue with academic supervision.' },
]

export const CLINICAL_TRAINING = [
  {
    title: 'Specialty clinics',
    description: 'Rotations through oral surgery, orthodontics, prosthodontics, endodontics, periodontics, and pedodontics.',
    icon: 'Hospital',
  },
  {
    title: 'Simulation labs',
    description: 'Phantom-head and skill labs that refine technique before chairside independence.',
    icon: 'Cpu',
  },
  {
    title: 'Case conferences',
    description: 'Weekly discussions where treatment plans are critiqued by faculty and peers.',
    icon: 'MessagesSquare',
  },
  {
    title: 'Outreach camps',
    description: 'Community dental programmes that build preventive awareness and clinical confidence.',
    icon: 'MapPinned',
  },
]

export const RESEARCH_ACADEMICS = [
  {
    title: 'Student research',
    description: 'Guided short studies, ICMR-style projects, and conference poster opportunities.',
    metric: 'Active mentorship',
  },
  {
    title: 'Faculty publications',
    description: 'Peer-reviewed work across biomaterials, clinical outcomes, and oral public health.',
    metric: 'Scholarly output',
  },
  {
    title: 'Research methodology',
    description: 'Workshops on study design, biostatistics, ethics clearance, and scientific writing.',
    metric: 'Skill building',
  },
  {
    title: 'Innovation & CDE',
    description: 'Symposia and continuing dental education events that connect campus to practice.',
    metric: 'Knowledge exchange',
  },
]

export const LIBRARY = {
  title: 'Central Library',
  description:
    'A quiet, well-resourced hub of dental literature, digital journals, and collaborative study spaces open to every learner.',
  features: [
    { title: 'Print collection', detail: 'Textbooks, reference encyclopedias, and specialty manuals.' },
    { title: 'E-resources', detail: 'Online journals, databases, and remote access for residents.' },
    { title: 'Reading halls', detail: 'Silent zones and group study rooms for focused preparation.' },
    { title: 'Faculty guidance', detail: 'Librarian support for literature searches and referencing.' },
  ],
  image:
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80&auto=format&fit=crop',
}

export const EXAMINATIONS = [
  {
    title: 'Internal assessment',
    description: 'Continuous evaluation through sessional exams, seminars, practicums, and attendance criteria.',
  },
  {
    title: 'Practical / clinical',
    description: 'Chairside skills, instruments, diagnosis, and treatment sequencing assessed by department faculty.',
  },
  {
    title: 'University examinations',
    description: 'Theory, practical, and viva conducted as per affiliating university and DCI norms.',
  },
  {
    title: 'Results & remediation',
    description: 'Transparent grading with academic counselling and remedial support when needed.',
  },
]

export const LEARNING_RESOURCES = [
  { title: 'Lecture theatres', description: 'AV-enabled halls for didactic sessions and guest lectures.', icon: 'Presentation' },
  { title: 'Skill laboratories', description: 'Preclinical labs engineered for deliberate practice.', icon: 'FlaskConical' },
  { title: 'Digital dentistry', description: 'Intraoral scanners, imaging, and CAD/CAM exposure.', icon: 'Scan' },
  { title: 'e-Learning portal', description: 'Notes, recordings, and assignment workflows online.', icon: 'MonitorPlay' },
  { title: 'Museum & specimens', description: 'Anatomical and pathology collections for visual learning.', icon: 'Bone' },
  { title: 'Seminar suites', description: 'Spaces for journal clubs, MDS seminars, and debates.', icon: 'Users' },
]

export const STUDENT_SUPPORT = [
  { title: 'Academic mentoring', description: 'Faculty advisors track progress and guide study plans.', icon: 'UserCheck' },
  { title: 'Career counselling', description: 'Guidance for NEET-MDS, fellowships, and clinical practice pathways.', icon: 'Compass' },
  { title: 'Wellness services', description: 'Support for stress management, peer groups, and healthy routines.', icon: 'HeartPulse' },
  { title: 'Remedial classes', description: 'Extra sessions for challenging subjects ahead of exams.', icon: 'BookMarked' },
]

export const ACADEMICS_TIMELINE = [
  { step: '01', title: 'Induction', detail: 'Campus orientation and academic briefing.' },
  { step: '02', title: 'Foundation', detail: 'Sciences and preclinical skill building.' },
  { step: '03', title: 'Clinics', detail: 'Supervised patient care across departments.' },
  { step: '04', title: 'Assessment', detail: 'Internals, university exams, feedback loops.' },
  { step: '05', title: 'Research', detail: 'Projects, posters, and scholarly writing.' },
  { step: '06', title: 'Graduation', detail: 'Internship completion and career launch.' },
]
