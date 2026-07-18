/** Hospital page — APDCH Teaching Hospital */

export const HOSPITAL_HERO = {
  eyebrow: 'APDCH Dental Hospital',
  title: 'Compassionate Care. Clinical Excellence.',
  description:
    'Experience patient-centered dental care delivered by specialist faculty in a modern teaching hospital — where advanced technology, clinical precision, and genuine compassion come together.',
  image:
    'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=2000&q=80&auto=format&fit=crop',
  stats: [
    { value: '9', label: 'Specialties' },
    { value: '24×7', label: 'Emergency' },
    { value: '100+', label: 'Dental Chairs' },
  ],
}

export const DENTAL_TREATMENTS_SECTION = {
  eyebrow: 'Dental Treatments',
  title: 'Complete Oral Healthcare Under One Roof',
  description:
    'From preventive check-ups to complex surgical care, our hospital offers a full spectrum of dental treatments guided by experienced specialists.',
}

export const DENTAL_TREATMENTS = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive check-ups, oral prophylaxis, fillings, and preventive care for everyday oral health.',
    icon: 'Smile',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Smile enhancement through whitening, veneers, aesthetic bonding, and smile design consultations.',
    icon: 'Sparkles',
  },
  {
    title: 'Restorative Care',
    description: 'Crowns, bridges, and tooth-preserving reconstructions designed for strength and longevity.',
    icon: 'Shield',
  },
  {
    title: 'Oral Surgery',
    description: 'Extractions, impacted teeth, biopsies, and complex surgical procedures in sterile settings.',
    icon: 'Scissors',
  },
  {
    title: 'Pediatric Dentistry',
    description: 'Gentle, age-appropriate care that builds trust and healthy habits from the first visit.',
    icon: 'Baby',
  },
  {
    title: 'Emergency Dentistry',
    description: 'Immediate attention for trauma, severe pain, swelling, bleeding, and acute dental emergencies.',
    icon: 'Siren',
  },
]

export const HOSPITAL_SPECIALTIES_SECTION = {
  eyebrow: 'Specialities',
  title: 'Specialty Care Across Every Discipline',
  description:
    'Nine clinical departments and a dedicated Implantology unit working together to deliver accurate diagnosis, specialist treatment, and continuity of care.',
}

export const HOSPITAL_SPECIALTIES = [
  { title: 'Oral Medicine & Radiology', description: 'Diagnosis of oral diseases, orofacial pain, and advanced imaging.', href: '/departments/oral-medicine', icon: 'Scan' },
  { title: 'Conservative Dentistry & Endodontics', description: 'Root canal therapy and restorative excellence that preserves teeth.', href: '/departments/conservative-dentistry', icon: 'Plus' },
  { title: 'Oral & Maxillofacial Surgery', description: 'Surgical care for facial trauma, impactions, and complex procedures.', href: '/departments/oral-surgery', icon: 'Activity' },
  { title: 'Orthodontics & Dentofacial Orthopaedics', description: 'Braces and alignment treatment guided by facial aesthetics and function.', href: '/departments/orthodontics', icon: 'AlignCenter' },
  { title: 'Prosthodontics & Crown & Bridge', description: 'Crowns, bridges, dentures, and implant-supported rehabilitation.', href: '/departments/prosthodontics', icon: 'Gem' },
  { title: 'Periodontics & Implantology', description: 'Gum therapy and periodontal care that protects natural teeth and implants.', href: '/departments/periodontics', icon: 'Leaf' },
  { title: 'Pedodontics & Preventive Dentistry', description: 'Specialist care for children with behaviour guidance and preventive focus.', href: '/departments/pedodontics', icon: 'Heart' },
  { title: 'Public Health Dentistry', description: 'Community outreach and preventive oral healthcare programmes.', href: '/departments/public-health-dentistry', icon: 'Users' },
  { title: 'Oral & Maxillofacial Pathology', description: 'Laboratory diagnosis supporting biopsy and disease confirmation.', href: '/departments/oral-pathology', icon: 'Microscope' },
  { title: 'Department of Implantology', description: 'Dedicated implant planning, placement, and prosthetic rehabilitation.', href: '/departments/implantology', icon: 'Gem' },
]

export const OP_TIMINGS_SECTION = {
  eyebrow: 'OP Timings',
  title: 'Outpatient Department Hours',
  description:
    'Plan your visit with clarity. Specialty clinics run by appointment; emergency services remain available around the clock.',
  note: 'Timings may vary on public holidays. Please call the reception desk to confirm specialty clinic slots.',
}

export const OP_TIMINGS = [
  { day: 'Monday – Friday', hours: '9:00 AM – 4:00 PM', tag: 'Regular OPD' },
  { day: 'Saturday', hours: '9:00 AM – 1:00 PM', tag: 'Half Day' },
  { day: 'Sunday', hours: 'Emergency Only', tag: 'Closed OPD' },
  { day: 'Emergency Care', hours: '24 Hours × 7 Days', tag: 'Always Open' },
]

export const APPOINTMENT_CTA = {
  eyebrow: 'Book Your Visit',
  title: 'Schedule an Appointment Today',
  description:
    'Whether you need a routine check-up or specialist consultation, our team is ready to welcome you with care and clarity.',
  points: [
    'Specialty-wise appointments available',
    'Walk-ins welcomed for triage guidance',
    'Bring prior reports and photo ID',
  ],
}

export const ADVANCED_TECH_SECTION = {
  eyebrow: 'Technology',
  title: 'Advanced Technology for Precise Care',
  description:
    'Our hospital is equipped with modern diagnostic and treatment systems that support safer procedures and better clinical outcomes.',
}

export const ADVANCED_TECH = [
  { title: 'Cone-Beam CT', description: '3D imaging for implants, impactions, and precision treatment planning.', icon: 'Scan' },
  { title: 'Digital Scanners', description: 'Comfortable digital impressions for accurate prosthetic workflows.', icon: 'Cpu' },
  { title: 'Surgical Microscopes', description: 'High magnification for endodontic and microsurgical precision.', icon: 'Microscope' },
  { title: 'CAD/CAM Systems', description: 'Faster, highly accurate restorations with digital design support.', icon: 'Monitor' },
  { title: 'Laser Dentistry', description: 'Select soft-tissue procedures with refined comfort and healing.', icon: 'Zap' },
  { title: 'Sterilisation Protocols', description: 'Tracked CSSD standards ensuring instrument safety on every case.', icon: 'ShieldCheck' },
]

export const FACILITIES_SECTION = {
  eyebrow: 'Facilities',
  title: 'Designed for Comfort, Safety & Clinical Excellence',
  description:
    'Every space in our hospital is planned to support patient comfort, clinical efficiency, and the highest standards of care.',
}

export const FACILITIES = [
  {
    title: 'Specialty Clinics',
    description: 'Dedicated clinical bays across departments for focused, unhurried consultations and treatment.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Operation Theatre',
    description: 'A dedicated oral surgical theatre with sterile discipline and post-procedure observation.',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Radiology Suite',
    description: 'Digital radiography and CBCT imaging under radiation-safety protocols.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop',
  },
  {
    title: 'Patient Lounge',
    description: 'Calm, welcoming waiting spaces designed for patients and accompanying families.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop',
  },
]

export const EMERGENCY_CARE = {
  eyebrow: 'Emergency Care',
  title: 'Help When Every Minute Matters',
  description:
    'For dental trauma, uncontrolled bleeding, spreading infection, or severe pain — our emergency pathway is ready to respond with urgency and compassion.',
  hours: 'Available 24×7',
  location: 'Hospital Reception · Emergency Triage Desk',
  points: [
    'Facial & dental trauma response',
    'Acute pain and infection management',
    'Immediate triage and specialist referral',
  ],
}

export const GALLERY_SECTION = {
  eyebrow: 'Gallery',
  title: 'A Glimpse Inside Our Hospital',
  description: 'Explore the clinical spaces, technology, and care environment that define APDCH Dental Hospital.',
}

export const HOSPITAL_GALLERY = [
  {
    title: 'Clinical Bay',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1000&q=80&auto=format&fit=crop',
  },
  {
    title: 'Consultation Suite',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop',
  },
  {
    title: 'Surgical Environment',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=1000&q=80&auto=format&fit=crop',
  },
  {
    title: 'Diagnostic Imaging',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&q=80&auto=format&fit=crop',
  },
  {
    title: 'Reception & Care Desk',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80&auto=format&fit=crop',
  },
  {
    title: 'Patient Pathway',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1000&q=80&auto=format&fit=crop',
  },
]

export const HOSPITAL_DOCTORS_SECTION = {
  eyebrow: 'Doctors',
  title: 'Meet Our Specialist Doctors',
  description:
    'Learn from and receive care under experienced faculty clinicians who lead departments across the teaching hospital.',
}

export const HOSPITAL_DOCTORS = [
  {
    name: 'Dr. Suresh Natarajan',
    specialty: 'Oral & Maxillofacial Surgery',
    role: 'Professor & HOD',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Anitha Selvan',
    specialty: 'Orthodontics',
    role: 'Professor & HOD',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Gayathri Mohan',
    specialty: 'Conservative Dentistry & Endodontics',
    role: 'Professor & HOD',
    image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&q=80&auto=format&fit=crop',
  },
  {
    name: 'Dr. Divya Banerjee',
    specialty: 'Pedodontics',
    role: 'Professor & HOD',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500&q=80&auto=format&fit=crop',
  },
]

export const HOSPITAL_TESTIMONIALS_SECTION = {
  eyebrow: 'Patient Testimonials',
  title: 'Stories of Care & Confidence',
  description: 'Patients share their experience of comfort, clarity, and clinical excellence at APDCH Dental Hospital.',
}

export const HOSPITAL_TESTIMONIALS = [
  {
    quote:
      'Every step of my treatment was explained clearly. The clinic felt calm, clean, and genuinely caring — I left with complete confidence.',
    name: 'Meera Subramaniam',
    role: 'Prosthodontics Patient',
    rating: 5,
  },
  {
    quote:
      'When our son needed emergency dental care late at night, the team responded with urgency and kindness. We will always be grateful.',
    name: 'Karthik & Anu',
    role: 'Emergency Visit',
    rating: 5,
  },
  {
    quote:
      'My orthodontic journey was organised and comfortable. Appointments were on time, and the final result exceeded our expectations.',
    name: 'Priya Nair',
    role: 'Orthodontics Patient',
    rating: 4.5,
  },
]
