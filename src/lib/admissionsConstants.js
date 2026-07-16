export const ADMISSIONS_HERO = {
  eyebrow: 'Admissions 2026–27',
  title: 'Begin your journey in dental excellence',
  description:
    'Join Adhiparasakthi Dental College and Hospital — a structured pathway from application to enrolment, guided by clarity, merit, and care.',
  image:
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=2000&q=80&auto=format&fit=crop',
}

export const ADMISSION_PROCESS = [
  {
    step: '01',
    title: 'Check eligibility',
    description: 'Confirm academic qualifications and NEET requirements for BDS or MDS.',
  },
  {
    step: '02',
    title: 'Appear for NEET',
    description: 'Qualify NEET-UG for BDS or NEET-MDS for postgraduate programmes.',
  },
  {
    step: '03',
    title: 'Register for counselling',
    description: 'Complete state / All-India counselling registration within published windows.',
  },
  {
    step: '04',
    title: 'Choice filling',
    description: 'Select APDCH as your preferred institution during online counselling.',
  },
  {
    step: '05',
    title: 'Seat allotment',
    description: 'Receive provisional allotment and download the allotment order.',
  },
  {
    step: '06',
    title: 'Report & enrol',
    description: 'Submit documents, complete fee remittance, and begin orientation.',
  },
]

export const ELIGIBILITY = {
  bds: [
    'Passed Higher Secondary (10+2) or equivalent with Physics, Chemistry, Biology / Biotechnology, and English.',
    'Minimum aggregate as prescribed by the Dental Council of India and affiliating university.',
    'Qualified NEET-UG in the relevant academic year.',
    'Age criteria as notified by counselling authorities.',
  ],
  mds: [
    'Recognised BDS degree from a DCI-approved institution.',
    'Completed compulsory rotating internship on or before the date notified.',
    'Qualified NEET-MDS in the relevant academic year.',
    'Valid registration with the State Dental Council / DCI as applicable.',
  ],
}

export const BDS_ADMISSION = {
  title: 'BDS Admission',
  duration: '5 Years',
  seats: 'As per sanctioned intake',
  description:
    'The Bachelor of Dental Surgery programme at APDCH combines biomedical foundations, early clinical exposure, and supervised chairside practice in our teaching hospital.',
  highlights: [
    'DCI-recognised undergraduate pathway',
    'Integrated preclinical & clinical training',
    'Mentorship from specialty faculty',
    'Campus housing for first-year students',
  ],
  image:
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&q=80&auto=format&fit=crop',
}

export const MDS_ADMISSION = {
  title: 'MDS Admission',
  duration: '3 Years',
  seats: 'Specialty-wise intake',
  description:
    'Master of Dental Surgery residencies prepare clinicians for advanced practice, research, and academic leadership across key dental specialities.',
  highlights: [
    'Specialty training with high case volume',
    'Thesis mentorship & research support',
    'Operating theatre & clinical privilege pathways',
    'Seminar culture and journal clubs',
  ],
  specialities: [
    'Oral & Maxillofacial Surgery',
    'Orthodontics',
    'Periodontology',
    'Prosthodontics',
    'Endodontics',
    'Pedodontics',
    'Oral Medicine & Radiology',
    'Oral Pathology',
    'Public Health Dentistry',
  ],
  image:
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1000&q=80&auto=format&fit=crop',
}

export const NEET_INFO = [
  {
    title: 'NEET-UG',
    subtitle: 'For BDS aspirants',
    points: [
      'Conducted by the National Testing Agency (NTA).',
      'Mandatory for admission to the BDS programme.',
      'Counselling handled through designated state / AIQ authorities.',
      'Keep admit card, scorecard, and rank letter ready for verification.',
    ],
  },
  {
    title: 'NEET-MDS',
    subtitle: 'For MDS aspirants',
    points: [
      'National entrance examination for postgraduate dental seats.',
      'Qualify within the percentile cut-off applicable to your category.',
      'Participate in counselling rounds as notified each year.',
      'Allotment is subject to document verification at reporting.',
    ],
  },
]

export const REQUIRED_DOCUMENTS = {
  bds: [
    'NEET-UG admit card & scorecard',
    'Allotment order / counselling letter',
    'Class 10 & 12 mark sheets and certificates',
    'Transfer / Migration certificate',
    'Community / Income certificate (if applicable)',
    'Aadhaar / Passport / Government ID',
    'Passport-size photographs',
    'Medical fitness certificate',
  ],
  mds: [
    'NEET-MDS admit card & scorecard',
    'BDS degree & consolidated mark sheets',
    'Internship completion certificate',
    'Dental Council registration certificate',
    'Allotment order / counselling letter',
    'Transfer / Migration certificate',
    'Aadhaar / Passport / Government ID',
    'Passport-size photographs',
  ],
}

export const FEE_STRUCTURE = [
  {
    programme: 'BDS',
    category: 'Tuition (indicative)',
    amount: 'As per Govt. / Management norms',
    note: 'Fee components notified annually before counselling.',
  },
  {
    programme: 'BDS',
    category: 'Hostel & mess',
    amount: 'Separate schedule',
    note: 'Optional boarding charged per academic year.',
  },
  {
    programme: 'MDS',
    category: 'Tuition (indicative)',
    amount: 'Specialty-wise schedule',
    note: 'Varies by speciality and admission category.',
  },
  {
    programme: 'MDS',
    category: 'Clinical / lab charges',
    amount: 'As applicable',
    note: 'Published in the postgraduate fee circular.',
  },
]

export const SCHOLARSHIPS = [
  {
    title: 'Merit Scholarships',
    description: 'Awards for outstanding NEET ranks and consistent academic excellence.',
    icon: 'Trophy',
  },
  {
    title: 'Need-based Support',
    description: 'Assistance for deserving students meeting income and documentation criteria.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Government Schemes',
    description: 'Guidance for state and central scholarship portals applicable to dental students.',
    icon: 'Landmark',
  },
  {
    title: 'Research Assistantships',
    description: 'Select postgraduate opportunities to support scholarly and lab work.',
    icon: 'FlaskConical',
  },
]

export const ADMISSION_TIMELINE = [
  { month: 'Jan–Feb', title: 'NEET application window', detail: 'Register and prepare documentation early.' },
  { month: 'May', title: 'NEET examination', detail: 'Appear for NEET-UG / NEET-MDS as applicable.' },
  { month: 'Jun–Jul', title: 'Results & rank lists', detail: 'Download scorecards and check eligibility.' },
  { month: 'Jul–Aug', title: 'Counselling rounds', detail: 'Choice filling, allotment, and verification.' },
  { month: 'Aug–Sep', title: 'Reporting at APDCH', detail: 'Fee payment, enrolment, and orientation.' },
  { month: 'Sep', title: 'Academic session begins', detail: 'Classes and clinical induction commence.' },
]

export const ADMISSION_FAQS = [
  {
    question: 'Is NEET mandatory for admission to APDCH?',
    answer:
      'Yes. Admission to BDS requires a valid NEET-UG score, and MDS requires NEET-MDS qualification, followed by counselling allotment as per applicable rules.',
  },
  {
    question: 'How do I apply directly to the college?',
    answer:
      'Seats are filled through authorised counselling processes. After allotment, report to APDCH with the required documents within the stipulated time. You may also contact admissions for guidance.',
  },
  {
    question: 'When will the exact fee structure be published?',
    answer:
      'Detailed fee circulars are released for each academic year before reporting. The table on this page provides an indicative overview; always refer to the latest official notification.',
  },
  {
    question: 'Is hostel accommodation available for first-year students?',
    answer:
      'Yes. On-campus hostel facilities are available and generally prioritised for first-year students who apply within the published housing deadlines.',
  },
  {
    question: 'Can NRI / management category candidates apply?',
    answer:
      'Category-wise seat availability follows regulatory and university norms for the year. Candidates should follow the counselling notices relevant to their category.',
  },
  {
    question: 'Who can I contact for admissions help?',
    answer:
      'Reach the Admissions Office via admissions@apdch.edu.in or the phone numbers listed on this page. Visit the campus during working hours for in-person counselling support.',
  },
]

export const BROCHURE = {
  title: 'Download Brochure',
  description:
    'Get programme overviews, campus highlights, and a step-by-step admissions checklist in one elegant PDF.',
  fileLabel: 'APDCH Admissions Brochure 2026',
}
