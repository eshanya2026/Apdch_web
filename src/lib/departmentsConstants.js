export const DEPARTMENTS_HERO = {
  eyebrow: 'Clinical departments',
  title: 'Specialities that shape exceptional dentists',
  description:
    'Nine clinical departments plus a dedicated Department of Implantology delivering patient care, specialty teaching, and research across Adhiparasakthi Dental College and Hospital.',
  image:
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=2000&q=80&auto=format&fit=crop',
}

export const DEPARTMENT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'diagnostic', label: 'Diagnostic' },
  { id: 'surgical', label: 'Surgical' },
  { id: 'restorative', label: 'Restorative' },
  { id: 'orthodontic', label: 'Orthodontic' },
  { id: 'pediatric', label: 'Pediatric' },
  { id: 'preventive', label: 'Preventive' },
]

export const DEPARTMENTS = [
  {
    id: 'oral-medicine',
    name: 'Oral Medicine & Radiology',
    category: 'diagnostic',
    shortName: 'OMR',
    overview:
      'Department dedicated to the diagnosis, prevention, and non-surgical management of oral diseases using advanced clinical and radiological techniques.',
    details:
      'The Department of Oral Medicine & Radiology integrates clinical examination, advanced imaging interpretation, and laboratory correlation to uncover complex diagnoses. Students learn to recognise red-flag lesions, manage medically compromised patients, and collaborate with medical specialities for holistic care.',
    image:
      'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80&auto=format&fit=crop',
    highlights: ['Mucosal disease clinics', 'Orofacial pain', 'Medically complex patients'],
  },
  {
    id: 'conservative-dentistry',
    name: 'Conservative Dentistry & Endodontics',
    category: 'restorative',
    shortName: 'CONS',
    overview:
      'Tooth-preserving restorative care including operative dentistry, endodontics, and aesthetic reconstructions.',
    details:
      'Conservative Dentistry & Endodontics teaches cavity design, adhesive dentistry, root canal therapy, and aesthetic build-ups. Emphasis remains on preserving natural tooth structure with modern materials and microscopic precision where indicated.',
    image:
      'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?w=900&q=80&auto=format&fit=crop',
    highlights: ['Operative dentistry', 'Endodontics', 'Aesthetic restorations'],
  },
  {
    id: 'oral-surgery',
    name: 'Oral & Maxillofacial Surgery',
    category: 'surgical',
    shortName: 'OMFS',
    overview:
      'Surgical care spanning extractions, trauma, impacted third molars, and complex maxillofacial procedures under expert supervision.',
    details:
      'Oral & Maxillofacial Surgery trains clinicians in sterile technique, local anaesthesia mastery, minor oral surgery, and exposure to trauma and orthognathic pathways. Residents and undergraduates participate in theatre lists, emergency call, and postoperative management within the teaching hospital.',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=900&q=80&auto=format&fit=crop',
    highlights: ['Minor oral surgery', 'Trauma exposure', 'Theatre training'],
  },
  {
    id: 'orthodontics',
    name: 'Orthodontics & Dentofacial Orthopaedics',
    category: 'orthodontic',
    shortName: 'ORTHO',
    overview:
      'Alignment and growth guidance using evidence-based appliances, wires, and interdisciplinary smile planning.',
    details:
      'Orthodontics & Dentofacial Orthopaedics at APDCH combines cephalometrics, digital study models, and biomechanics to craft personalised treatment. Learners follow cases from diagnosis to retention while collaborating with surgery and prosthodontics for interdisciplinary rehabilitation.',
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80&auto=format&fit=crop',
    highlights: ['Growth modification', 'Fixed appliances', 'Smile design'],
  },
  {
    id: 'prosthodontics',
    name: 'Prosthodontics & Crown & Bridge',
    category: 'restorative',
    shortName: 'PROSTHO',
    overview:
      'Restoring form and function with crowns, bridges, dentures, and implant-supported prostheses crafted with precision.',
    details:
      'Prosthodontics & Crown & Bridge blends aesthetics and biomechanics. Students progress from complete dentures to fixed prostheses and exposure to digital workflows, always guided by occlusion principles and patient-centred outcomes.',
    image:
      'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80&auto=format&fit=crop',
    highlights: ['Fixed & removable', 'Implant prosthetics', 'Occlusion'],
  },
  {
    id: 'periodontics',
    name: 'Periodontics & Implantology',
    category: 'restorative',
    shortName: 'PERIO',
    overview:
      'Prevention and treatment of gum disease, regenerative therapy, and foundation work for lasting restorations and implants.',
    details:
      'Periodontics & Implantology emphasises periodontal charting, non-surgical therapy, flap procedures, and regenerative approaches. Students gain competence in soft-tissue health that underpins every successful restorative and implant outcome.',
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop',
    highlights: ['Scaling & root planing', 'Flap surgery', 'Regeneration'],
  },
  {
    id: 'pedodontics',
    name: 'Pedodontics & Preventive Dentistry',
    category: 'pediatric',
    shortName: 'PEDO',
    overview:
      'Gentle, age-appropriate dentistry for children — from preventive care to behaviour guidance and interceptive treatment.',
    details:
      'Pedodontics & Preventive Dentistry cultivates empathy alongside technical skill. Clinics focus on prevention, pulp therapy, space maintenance, and creating positive dental experiences that protect lifelong oral health habits.',
    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=900&q=80&auto=format&fit=crop',
    highlights: ['Child behaviour guidance', 'Preventive care', 'Interceptive ortho'],
  },
  {
    id: 'public-health-dentistry',
    name: 'Public Health Dentistry',
    category: 'preventive',
    shortName: 'PHD',
    overview:
      'Community strategies, school programmes, and epidemiology that expand access to oral healthcare.',
    details:
      'Public Health Dentistry equips graduates to think beyond the individual chair — surveying populations, designing camps, and advocating preventive policy. Field work complements classroom epidemiology and health education training.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop',
    highlights: ['Community camps', 'School programmes', 'Epidemiology'],
  },
  {
    id: 'oral-pathology',
    name: 'Oral & Maxillofacial Pathology',
    category: 'diagnostic',
    shortName: 'PATH',
    overview:
      'Laboratory excellence interpreting biopsies and linking microscopic findings to clinical decisions.',
    details:
      'Oral & Maxillofacial Pathology bridges the chairside lesion and the laboratory slide. Students engage with histopathology rounds, specimen processing insights, and differential diagnosis skills essential for oncology and mucosal disease pathways.',
    image:
      'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=900&q=80&auto=format&fit=crop',
    highlights: ['Histopathology', 'Biopsy correlation', 'Tumour boards'],
  },
  {
    id: 'implantology',
    name: 'Department of Implantology',
    category: 'surgical',
    shortName: 'IMPLANT',
    overview:
      'Dedicated implant planning, placement, and prosthetic rehabilitation with interdisciplinary support across surgical and restorative specialties.',
    details:
      'The Department of Implantology focuses on evidence-based implant dentistry — from CBCT-guided planning and surgical placement to soft-tissue management and prosthetic restoration. Students and clinicians collaborate with periodontics, oral surgery, and prosthodontics for predictable, long-term outcomes.',
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop',
    highlights: ['Guided implant surgery', 'Prosthetic planning', 'Maintenance protocols'],
  },
]
