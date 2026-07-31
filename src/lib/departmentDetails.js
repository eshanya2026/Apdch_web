import { DEPARTMENTS } from '@/lib/departmentsConstants'

const GALLERY_POOL = [
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&q=80&auto=format&fit=crop',
]

const FACULTY_IMAGES = [
  'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80&auto=format&fit=crop',
]

/** Department-specific detail content keyed by id */
export const DEPARTMENT_DETAILS = {
  'oral-medicine': {
    tagline:
      'Department dedicated to the diagnosis, prevention, and non-surgical management of oral diseases using advanced clinical and radiological techniques.',
    aboutTitle: 'About Oral Medicine',
    aboutParagraphs: [
      'Oral Medicine is a specialty in dentistry focused on the diagnosis and management of oral and dentofacial disorders. Every patient undergoes comprehensive medical history assessment, clinical examination, and radiographic evaluation before receiving an appropriate diagnosis and referral for treatment.',
      'The department also focuses on oral cancer screening, potentially malignant disorders, TMJ disorders, oral manifestations of systemic diseases, forensic dentistry, and the care of medically compromised and geriatric patients.',
    ],
    overviewExtra: '',
    stats: [
      { value: '20+', label: 'Years of Academic Excellence' },
      { value: 'Advanced', label: 'CBCT Imaging' },
      { value: 'Specialized', label: 'Diagnostic Care' },
      { value: 'Evidence-Based', label: 'Treatment' },
    ],
    servicesSection: {
      eyebrow: 'Services Offered',
      title: 'Our Specialized Services',
      description:
        'Comprehensive diagnostic, screening, pain management, and imaging services covering everything offered by the department — presented in a cleaner clinical overview.',
    },
    services: [
      {
        title: 'Oral Disease Diagnosis',
        description:
          'Diagnosis of oral lesions, infections, red & white lesions, and potentially malignant disorders.',
      },
      {
        title: 'Oral Cancer Screening',
        description:
          'Early detection, vital staining, investigations, and comprehensive management of oral cancer.',
      },
      {
        title: 'Orofacial Pain & TMJ Clinic',
        description:
          'Management of neuralgias, neuropathies, burning mouth syndrome, TMJ disorders, and TENS therapy.',
      },
      {
        title: 'Biopsy & Diagnostic Procedures',
        description:
          'Incisional biopsy, punch biopsy, and other diagnostic procedures for oral diseases.',
      },
      {
        title: 'Medical Management',
        description:
          'Treatment of oral ulcers, mucocutaneous disorders, autoimmune conditions, OSMF, and medically compromised patients.',
      },
      {
        title: 'Advanced Oral Imaging',
        description:
          'Conventional radiography, RVG, panoramic imaging, cephalometric imaging, CBCT, and sialography.',
      },
    ],
    technologySection: {
      eyebrow: 'Lab & Equipment',
      title: 'Technology & Equipment',
      description:
        'The department is equipped with modern diagnostic and radiographic facilities to support comprehensive oral diagnosis, advanced imaging, pain management, and patient care.',
    },
    technology: [
      {
        title: 'CBCT Imaging Unit',
        description:
          'Large Field-of-View (FOV) Cone Beam Computed Tomography (CBCT) for advanced oral and maxillofacial imaging and interpretation.',
      },
      {
        title: 'Digital Radiography',
        description:
          'Conventional and digital radiography, RVG, panoramic imaging, cephalometric imaging, and extraoral skull projections.',
      },
      {
        title: 'Pain Management Clinic',
        description:
          'Transcutaneous Electrical Nerve Stimulation (TENS) therapy for neuromuscular pain disorders and TMJ management.',
      },
      {
        title: 'Diagnostic Facilities',
        description:
          'Pulp tester, sialography kit, aspiration equipment, histological smear facilities, and medical emergency kit.',
      },
      {
        title: 'Digital Film Processing',
        description:
          'Fujifilm Digital Dry Film Printer for high-quality radiographic image processing.',
      },
    ],
    faculty: [
      { name: 'Dr. M. Deivanayagi', role: 'Vice Principal & HOD', focus: 'Oral Medicine & Diagnostic Radiology', image: '/Dr.-M-DeivanayagiMdsPh.d.png', isHod: true },
      { name: 'Dr. R. Monisha', role: 'Senior Lecturer', focus: 'Maxillofacial Radiology & CBCT', image: '/Dr.-R-MonishaMds.png' },
      { name: 'Dr. B. Elamparithi', role: 'Senior Lecturer', focus: 'Oral Medicine & Radiology', image: '/Dr.-B-Elamparithi-Mds.png' },
      { name: 'Dr. Narmadha Chandran', role: 'Senior Lecturer', focus: 'Oral Medicine & Radiology', image: '/Dr.-NarmadhaChandranMds.png' },
      { name: 'Dr. T. Sindhuja', role: 'Tutor', focus: 'Oral Medicine & Radiology', image: '/Dr.-T-Sindhuja-Mds.png' },
    ],
    infrastructure: [],
    researchSection: {
      eyebrow: 'Research & Innovation',
      title: 'Advancing Knowledge Through Research',
      description:
        'The Department of Oral Medicine & Radiology actively contributes to academic research through scientific publications, conference presentations, books, and evidence-based clinical studies that enhance patient care and dental education.',
      ctaLabel: 'View Research Activities',
      ctaHref: '/research',
    },
    research: [
      {
        title: 'Publications',
        description:
          'Faculty research published in national and international journals.',
      },
      {
        title: 'Books & Chapters',
        description:
          'Academic contributions to textbooks and reference materials.',
      },
      {
        title: 'Scientific Presentations',
        description:
          'Conference papers, keynote lectures and invited talks.',
      },
      {
        title: 'Research Activities',
        description:
          'Evidence-based clinical studies and academic research initiatives.',
      },
    ],
    patientCareTitle: 'Patient-Centred Diagnostic Care',
    patientCare:
      'The department provides comprehensive diagnostic services, oral disease screening, radiographic investigations, non-surgical management of oral lesions, TMJ disorders, medically compromised patients, and AI-assisted dental screening through the Scan-O-Robot system.',
    patientCareItems: [
      'Oral lesion diagnosis',
      'Oral cancer screening',
      'Orofacial pain management',
      'TMJ disorder treatment',
      'CBCT & Digital Imaging',
      'Medical management of oral diseases',
    ],
    achievementsSection: {
      eyebrow: 'Achievements',
      title: 'Awards & Professional Recognition',
      description:
        'Faculty members have been recognized for excellence in academics, research, leadership, and contributions to the dental profession through prestigious national and international awards.',
      ctaLabel: 'View All Achievements',
      ctaHref: '/about',
    },
    achievements: [
      { title: 'Outstanding Academician', icon: 'Trophy' },
      { title: 'Emerging Researcher', icon: 'Medal' },
      { title: 'Academic Excellence', icon: 'GraduationCap' },
      { title: 'National & International Recognition', icon: 'Globe' },
    ],
    gallery: [
      {
        caption: 'CBCT Unit',
        image: 'https://apdch.in/wp-content/uploads/2025/04/1.png',
      },
      {
        caption: 'Oral Medicine Clinic',
        image: 'https://apdch.in/wp-content/uploads/2025/04/2.png',
      },
      {
        caption: 'Radiology Room',
        image: 'https://apdch.in/wp-content/uploads/2025/04/3.png',
      },
      {
        caption: 'Patient Examination',
        image: 'https://apdch.in/wp-content/uploads/2025/04/4.png',
      },
    ],
    faqs: [
      {
        question: 'What services are offered by the department?',
        answer:
          'Diagnosis of oral diseases, oral cancer screening, radiographic investigations, TMJ management, pain management, CBCT imaging, and non-surgical treatment of oral conditions.',
      },
      {
        question: 'Is CBCT imaging available?',
        answer:
          'Yes. The department is equipped with a dedicated CBCT imaging unit for advanced three-dimensional radiographic evaluation.',
      },
      {
        question: 'Do you provide oral cancer screening?',
        answer:
          'Yes. Oral cancer screening, investigations, and management of potentially malignant disorders are among the department\'s core services.',
      },
    ],
  },
  'oral-surgery': {
    tagline: 'Precision surgery rooted in safety and education',
    overviewExtra:
      'From routine exodontia to complex dentoalveolar and trauma exposure, the department pairs sterile excellence with calm patient communication.',
    stats: [
      { label: 'Theatre sessions / week', value: '8+' },
      { label: 'Minor OS chairs', value: '10+' },
      { label: 'Emergency coverage', value: '24×7' },
    ],
    services: [
      { title: 'Exodontia & impactions', description: 'Surgical removal of erupted and impacted teeth with protocol-driven aftercare.' },
      { title: 'Trauma care', description: 'Assessment and management pathways for facial soft-tissue and dentoalveolar injuries.' },
      { title: 'Pre-prosthetic surgery', description: 'Ridge preparation and soft-tissue corrections supporting prosthodontic success.' },
      { title: 'Biopsy procedures', description: 'Incisional and excisional biopsies with pathology follow-through.' },
    ],
    technology: [
      { title: 'Surgical operating theatre', description: 'Dedicated OS theatre with monitoring and sterile workflows.' },
      { title: 'Piezo & rotary systems', description: 'Bone cutting options selected for case complexity and tissue respect.' },
      { title: 'CBCT planning access', description: 'Three-dimensional assessment for difficult extractions and implants exposure.' },
    ],
    faculty: [
      { name: 'Dr. G V V Giri', role: 'Professor & HOD', focus: 'Oral & Maxillofacial Surgery & Trauma', image: '/HOD-Giri.jpg', isHod: true },
      { name: 'Dr. M. James Antony Bhagat', role: 'Professor', focus: 'Maxillofacial Surgery & Trauma', image: '/james.png' },
      { name: 'Dr. S. Vijayakumar Jain', role: 'Reader', focus: 'Maxillofacial Surgery & Trauma', image: '/Dr S Vijayakumar Jain.png' },
      { name: 'Dr. Srinivasulu Pabbaraju', role: 'Reader', focus: 'Maxillofacial Surgery & Trauma', image: '/srini.png' },
      { name: 'Dr. R. Hemnaath', role: 'Senior Lecturer', focus: 'Maxillofacial Surgery & Trauma', image: '/hemanth.png' },
      { name: 'Dr. P. Gajapriya', role: 'Senior Lecturer', focus: 'Maxillofacial Surgery & Trauma', image: '/Dr P Gajapriya.png' },
      { name: 'Dr. S. Sakthi', role: 'Senior Lecturer', focus: 'Maxillofacial Surgery & Trauma', image: '/sakthi.png' },
      { name: 'Dr. S. Nalinkumar', role: 'Senior Lecturer', focus: 'Maxillofacial Surgery & Trauma', image: '/nalinkumar.png' },
      { name: 'Dr. P. Velmurugan', role: 'Senior Lecturer', focus: 'Maxillofacial Surgery & Trauma', image: '/p.velmurugan.png' },
      { name: 'Dr. G. Satheesh', role: 'Reader', focus: 'Maxillofacial Surgery & Trauma', image: '/dr.saathesh.png' },
    ],
    infrastructure: [
      { title: 'Minor OT complex', description: 'Chairs configured for local anaesthesia surgical lists.' },
      { title: 'Recovery bay', description: 'Postoperative observation with clear discharge criteria.' },
      { title: 'Instrument CSSD interface', description: 'Tracked sterile packs and tray sets for every procedure type.' },
    ],
    research: [
      { title: 'Third molar outcomes', description: 'Audits on swelling, dry socket rates, and analgesic protocols.' },
      { title: 'Student competence ladders', description: 'Research into stepwise entrustment for UG surgical skills.' },
    ],
    patientCare:
      'Every surgical plan includes risk discussion, consent, and aftercare that patients can follow at home. Pain control and infection prevention remain non-negotiable standards.',
    achievements: [
      { title: 'High-volume teaching lists', description: 'Sustained case numbers while maintaining complication audits.' },
      { title: 'Emergency readiness', description: 'Integrated acute response for maxillofacial emergencies on campus.' },
    ],
    faqs: [
      { question: 'Is wisdom tooth removal always surgical?', answer: 'Not always. Assessment determines whether a simple extraction or surgical approach is safer based on position and root anatomy.' },
      { question: 'What should I bring on surgery day?', answer: 'Photo ID, investigations, medication list, and an attendant if sedation or complex surgery is planned.' },
    ],
  },
  orthodontics: {
    tagline: 'Aligned smiles shaped by evidence and aesthetics',
    overviewExtra:
      'Treatment plans honour growth, occlusion, and facial harmony. Students learn wire craft alongside digital diagnosis.',
    stats: [
      { label: 'Active ortho cases', value: '450+' },
      { label: 'UG postings', value: 'Structured' },
      { label: 'Retention clinic', value: 'Weekly' },
    ],
    services: [
      { title: 'Growth modification', description: 'Functional approaches for appropriate age and skeletal patterns.' },
      { title: 'Fixed appliance therapy', description: 'Comprehensive straight-wire and specialty appliance care.' },
      { title: 'Interdisciplinary ortho', description: 'Coordination with surgery and prosthodontics for complex rehabilitation.' },
      { title: 'Retention & relapse care', description: 'Long-term stability protocols and retainer monitoring.' },
    ],
    technology: [
      { title: 'Cephalometric analysis', description: 'Digital tracing supporting diagnosis and progress review.' },
      { title: 'Study model workflows', description: 'Physical and digital model analysis for space and occlusion.' },
      { title: 'Photography studio standards', description: 'Intra/extraoral photo protocols for every milestone visit.' },
    ],
    faculty: [
      { name: 'Dr. Mora Sathi Rami Reddy', role: 'Professor & HOD', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/mora-apdch.jpg', isHod: true },
      { name: 'Dr. Kuldeep D Mello', role: 'Professor', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/Dr-Kuldeep-DMello-MDS.png' },
      { name: 'Dr. V. Vijaykumar', role: 'Reader', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/Dr V Vijaykumar.png' },
      { name: 'Dr. Mayank Trivedi', role: 'Reader', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/dr.mayank.png' },
      { name: 'Dr. K. Priya', role: 'Reader', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/dr.priya.png' },
      { name: 'Dr. V. Santhosh Kumar', role: 'Senior Lecturer', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/dr.santhosh.png' },
      { name: 'Dr. J. Sruthi', role: 'Senior Lecturer', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/sruthi.png' },
      { name: 'Dr. S. Kathijathul Hidhaya', role: 'Senior Lecturer', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/athijathul Hidhaya.png' },
      { name: 'Dr. A. Thulasidasan', role: 'Senior Lecturer', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/Dr A Thulasidasan.png' },
      { name: 'Dr. S. Subashree', role: 'Senior Lecturer', focus: 'Orthodontics & Dentofacial Orthopaedics', image: '/Dr S Subashree.png' },
      { name: 'Dr. Sneha Iyer', role: 'Reader', focus: 'Clear clinician communication' },
    ],
    infrastructure: [
      { title: 'Ortho bay', description: 'Multi-chair clinic with wire and instrument stations.' },
      { title: 'Lab support', description: 'Appliance fabrication linkage for custom components.' },
      { title: 'Records room', description: 'Secure archival of models, radiographs, and consent files.' },
    ],
    research: [
      { title: 'Finishing metrics', description: 'Studies on ABO-style finishing criteria in residency training.' },
      { title: 'Patient compliance', description: 'Behavioural research on elastics and retainer adherence.' },
    ],
    patientCare:
      'Families receive transparent timelines, hygiene coaching, and emergency wire guidance — so treatment feels collaborative every month.',
    achievements: [
      { title: 'Case excellence showcases', description: 'Annual board of finished cases used in national-style presentations.' },
      { title: 'School screening camps', description: 'Early interceptive identification through outreach.' },
    ],
    faqs: [
      { question: 'How long does braces treatment usually take?', answer: 'Most comprehensive cases span 18–30 months depending on complexity, growth, and compliance.' },
      { question: 'Are retainers mandatory?', answer: 'Yes. Retention protects your investment; removable or fixed retainers are prescribed case by case.' },
    ],
  },
  periodontics: {
    tagline: 'Healthy foundations for every lasting restoration',
    overviewExtra:
      'We treat periodontitis as a chronic disease needing lifelong partnership, not a one-time cleaning.',
    stats: [
      { label: 'Perio maintenance chairs', value: 'Dedicated' },
      { label: 'Surgical perio lists', value: 'Weekly' },
      { label: 'Implant soft-tissue focus', value: 'Integrated' },
    ],
    services: [
      { title: 'Non-surgical therapy', description: 'Scaling, root planing, and plaque-control coaching with re-evaluation.' },
      { title: 'Periodontal surgery', description: 'Flap procedures, crown lengthening, and regenerative options.' },
      { title: 'Implant supportive care', description: 'Soft-tissue assessment around implants and maintenance protocols.' },
      { title: 'Halitosis & hygiene clinic', description: 'Targeted advice for breath and biofilm control.' },
    ],
    technology: [
      { title: 'Periodontal charting systems', description: 'Digital probing depths and bleeding indices for progress tracking.' },
      { title: 'Ultrasonic & hand instrumentation', description: 'Complementary debridement modalities chosen per site.' },
      { title: 'Magnification optics', description: 'Loupes-supported finesse for surgical and non-surgical care.' },
    ],
    faculty: [
      { name: 'Dr. S. Magesh Kumar', role: 'Professor & HOD', focus: 'Regenerative periodontology & Implantology', image: '/Magesh-home.jpg', isHod: true },
      { name: 'Dr. M. Ebenezer', role: 'Professor', focus: 'Regenerative periodontology & Implantology', image: '/ebenzer.png' },
      { name: 'Dr. Priyanka Pampani', role: 'Reader', focus: 'Regenerative periodontology & Implantology', image: '/dr.priyanka.png' },
      { name: 'Dr. P. Shobana', role: 'Reader', focus: 'Regenerative periodontology & Implantology', image: '/shobana.png' },
      { name: 'Dr. K. Indhu', role: 'Reader', focus: 'Regenerative periodontology & Implantology', image: '/indhu.png' },
      { name: 'Dr. P. Hema', role: 'Reader', focus: 'Regenerative periodontology & Implantology', image: '/hema.png' },
      { name: 'Dr. R. Balaji', role: 'Senior Lecturer', focus: 'Regenerative periodontology & Implantology', image: '/dr.balaji.png' },
      { name: 'Dr. S. Lakshmi Priyanka', role: 'Senior Lecturer', focus: 'Regenerative periodontology & Implantology', image: '/lakshmi.png' },
      { name: 'Dr. M. Ilakiya', role: 'Senior Lecturer', focus: 'Regenerative periodontology & Implantology', image: '/illakiya.png' },
      { name: 'Dr. N. Kowsalya', role: 'Senior Lecturer', focus: 'Regenerative periodontology & Implantology', image: '/kowsalya.png' },
      { name: 'Dr. D. Thavithavakar', role: 'Senior Lecturer', focus: 'Regenerative periodontology & Implantology', image: '/thavi.png' },

    ],
    infrastructure: [
      { title: 'Perio clinic wing', description: 'Quiet chairs suited to longer therapeutic appointments.' },
      { title: 'Surgical perio suite', description: 'Sterile setup for flaps and regenerative kits.' },
      { title: 'Patient education corner', description: 'Models and mirrors for hands-on hygiene coaching.' },
    ],
    research: [
      { title: 'Attachment gain studies', description: 'Outcome audits after regenerative interventions.' },
      { title: 'Diabetes & perio', description: 'Collaborative screening and counselling research.' },
    ],
    patientCare:
      'We measure success by pocket reduction, comfort, and habits patients can sustain. Every re-evaluation is a chance to celebrate progress and adjust the plan.',
    achievements: [
      { title: 'Maintenance recall culture', description: 'High re-appointment rates for chronic periodontitis cohorts.' },
      { title: 'Interdisciplinary cases', description: 'Frequent partnership with prosthodontics for perio-restorative excellence.' },
    ],
    faqs: [
      { question: 'Will my gums grow back after periodontitis?', answer: 'Lost bone and attachment do not fully “grow back” spontaneously, but therapy can halt progression and, in selected cases, regenerate tissues.' },
      { question: 'How often should I return for maintenance?', answer: 'Most patients benefit from 3–4 month recalls; your risk profile decides the interval.' },
    ],
  },
  pedodontics: {
    tagline: 'Gentle expertise for growing smiles',
    overviewExtra:
      'Every visit is designed to lower fear and raise trust — behaviour guidance is taught with the same seriousness as clinical technique.',
    stats: [
      { label: 'Child-friendly chairs', value: 'Dedicated' },
      { label: 'School programmes', value: 'Year-round' },
      { label: 'Sedation pathways', value: 'Protocolised' },
    ],
    services: [
      { title: 'Preventive pediatrics', description: 'Fluoride, sealants, diet counselling, and home-care coaching.' },
      { title: 'Restorative care for children', description: 'Age-appropriate fillings, pulpotomy, and stainless steel crowns.' },
      { title: 'Space management', description: 'Maintainers and interceptive guidance for developing arches.' },
      { title: 'Special needs dentistry', description: 'Adapted approaches for children requiring extra support.' },
    ],
    technology: [
      { title: 'Paediatric radiography protocols', description: 'Dose-conscious imaging with child positioning aids.' },
      { title: 'Behaviour support tools', description: 'Tell-show-do kits, modelling, and distraction resources.' },
      { title: 'Nitrous options where indicated', description: 'Anxiety management under strict safety checklists.' },
    ],
    faculty: [
      { name: 'Dr. A. Vasanthakumari', role: 'Professor & HOD', focus: 'Behaviour guidance & paediatric care', image: '/Dr.A.Vasanthakumari-Proff-HOD-Dept-of-Pedodontics.png', isHod: true },
      { name: 'Dr. A. Selvabalaji', role: 'Professor', focus: 'Pedodontics & Preventive Dentistry', image: '/selva.png' },
      { name: 'Dr. V. Ramesh', role: 'Reader', focus: 'Pedodontics & Preventive Dentistry', image: '/ramesh.png' },
      { name: 'Dr. P. Ramanandvignesh', role: 'Senior Lecturer', focus: 'Pedodontics & Preventive Dentistry', image: '/vignesh.png' },
      { name: 'Dr. D. Philomine Princy', role: 'Senior Lecturer', focus: 'Pedodontics & Preventive Dentistry', image: '/pincy.png' },
      { name: 'Dr. M. Nisha', role: 'Senior Lecturer', focus: 'Pedodontics & Preventive Dentistry', image: '/nisha.png' },
    ],
    infrastructure: [
      { title: 'Colourful pediatric clinic', description: 'Welcoming design that reduces first-visit anxiety.' },
      { title: 'Parent counselling nook', description: 'Space for diet and habit advice away from the chair.' },
      { title: 'Play waiting area', description: 'Age-appropriate waiting experience before treatment.' },
    ],
    research: [
      { title: 'Caries risk models', description: 'Local cohort studies informing prevention intensity.' },
      { title: 'Anxiety scores', description: 'Tracking behaviour outcomes across visit sequences.' },
    ],
    patientCare:
      'Parents leave with clear aftercare, realistic expectations, and praise strategies that reinforce bravery — not just clinical notes.',
    achievements: [
      { title: 'School oral health drives', description: 'Thousands of screenings paired with fluoride varnish days.' },
      { title: 'Fear-free first visits', description: 'Orientation appointments that build trust before invasive care.' },
    ],
    faqs: [
      { question: 'When should my child first visit the dentist?', answer: 'Ideally by the first birthday or within six months of the first tooth erupting.' },
      { question: 'Are baby teeth worth treating?', answer: 'Yes. Primary teeth guide adult teeth, support speech and nutrition, and prevent pain and infection.' },
    ],
  },
  prosthodontics: {
    tagline: 'Restoring dignity, function, and natural beauty',
    overviewExtra:
      'From complete dentures to implant prosthetics, every restoration is planned around occlusion, phonetics, and the patient’s face.',
    stats: [
      { label: 'Lab collaboration', value: 'On campus' },
      { label: 'Digital exposure', value: 'CAD/CAM' },
      { label: 'Full mouth rehab', value: 'Case-based' },
    ],
    services: [
      { title: 'Complete & partial dentures', description: 'Removable prostheses crafted for comfort and speech.' },
      { title: 'Crowns & bridges', description: 'Fixed restorations balancing strength and aesthetics.' },
      { title: 'Implant prosthetics', description: 'Restorative phases for implant-supported solutions.' },
      { title: 'Maxillofacial prosthetics exposure', description: 'Selective rehabilitation support for acquired defects.' },
    ],
    technology: [
      { title: 'Articulators & facebows', description: 'Occlusal registration systems for accurate transfer.' },
      { title: 'CAD/CAM workflows', description: 'Digital design exposure for modern prosthesis fabrication.' },
      { title: 'Shade matching lab', description: 'Colour communication protocols with ceramic teams.' },
    ],
    faculty: [
      { name: 'Dr. Sakshi Madhok', role: 'Professor & HOD', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/sakshi .jpg', isHod: true },
      { name: 'Dr. V. R. Arunkumar', role: 'Professor', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/Dr-V-R-Arunkumar-MDS-2.png' },
      { name: 'Dr. J. Muthuvignesh', role: 'Professor', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/Dr J Muthuvignesh.png' },
      { name: 'Dr. A. Kirubakaran', role: 'Reader', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/kirubakaran.png' },
      { name: 'Dr. V. C. Karthik', role: 'Reader', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/cv karthik.png' },
      { name: 'Dr. Sonia Abraham', role: 'Reader', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/sonia.png' },
      { name: 'Dr. R. Arthi', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/arthi.png' },
      { name: 'Dr. B. Pavithra', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/pavithra.png' },
      { name: 'Dr. M. Rashmi', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/rashmi.png' },
      { name: 'Dr. V. Kalvikarasi', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/kalvikarasai.png' },
      { name: 'Dr. T. Suryanarayanan', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/surya.png' },
      { name: 'Dr. R. Shanmugam', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/shanmugam.png' },
      { name: 'Dr. S. Vinoth Kumar', role: 'Senior Lecturer', focus: 'Full mouth rehabilitation & Crown & Bridge', image: '/vasanth.png' },
    ],
    infrastructure: [
      { title: 'Prostho clinic', description: 'Chairs equipped for lengthy try-in and adjustment visits.' },
      { title: 'Dental laboratory link', description: 'Rapid feedback loop with technicians on campus.' },
      { title: 'Impression & cast bay', description: 'Controlled area for material handling and pouring.' },
    ],
    research: [
      { title: 'Denture satisfaction indices', description: 'Patient comfort and chewing efficiency studies.' },
      { title: 'Material wear tests', description: 'Comparative evaluations of restorative materials.' },
    ],
    patientCare:
      'Try-ins are never rushed. We listen for whistled “s” sounds, sore spots, and social confidence — then refine until the prosthesis feels like part of life again.',
    achievements: [
      { title: 'Complex rehab portfolios', description: 'Documented full-mouth cases used in postgraduate teaching.' },
      { title: 'Lab-clinic synergy awards', description: 'Internal quality recognition for turnaround and fit.' },
    ],
    faqs: [
      { question: 'How many visits does a complete denture need?', answer: 'Typically several: impressions, jaw relation, try-in, delivery, and adjustment visits.' },
      { question: 'Do you offer implant-supported options?', answer: 'Yes, for suitable candidates following surgical and restorative assessment.' },
    ],
  },
  'conservative-dentistry': {
    tagline: 'Preserve the tooth. Perfect the restoration.',
    overviewExtra:
      'Operative and endodontic care here is a craft of conservation — removing only what disease demands and rebuilding with lasting adhesion.',
    stats: [
      { label: 'Endo microscopes', value: 'Available' },
      { label: 'Rubber dam culture', value: 'Standard' },
      { label: 'Aesthetic modules', value: 'Active' },
    ],
    services: [
      { title: 'Operative dentistry', description: 'Caries management, adhesive restorations, and cusp coverage planning.' },
      { title: 'Root canal therapy', description: 'Cleaning, shaping, and obturation with contemporary protocols.' },
      { title: 'Aesthetic reconstructions', description: 'Composite artistry for form, colour, and incisal translucency.' },
      { title: 'Post & core rehabilitation', description: 'Structural recovery of endodontically treated teeth.' },
    ],
    technology: [
      { title: 'Apex locators & rotary systems', description: 'Efficient, measured canal preparation technology.' },
      { title: 'Isolation standards', description: 'Rubber dam as default for restorative and endodontic success.' },
      { title: 'Curing & bonding stations', description: 'Material systems selected for predictable adhesion.' },
    ],
    faculty: [
      { name: 'Dr. N. Bharath', role: 'Professor & HOD', focus: 'Aesthetic operative dentistry & micro-endodontics', image: '/bharath .jpg', isHod: true },
      { name: 'Dr. S. Karthikeyan', role: 'Professor', focus: 'Endodontics & Restorative Dentistry', image: '/Dr-S-Karthikeyan-MDS.png' },
      { name: 'Dr. R. Sujith', role: 'Reader', focus: 'Endodontics & Restorative Dentistry', image: '/Dr-R-Sujith-MDS.png' },
      { name: 'Dr. S. Sathish', role: 'Reader', focus: 'Endodontics & Restorative Dentistry', image: '/Dr-S-Sathish-MDS.png' },
      { name: 'Dr. V. Sudhakar', role: 'Reader', focus: 'Endodontics & Restorative Dentistry', image: '/sudhakar.png' },
      { name: 'Dr. A. Purusothaman', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/purusho.png' },
      { name: 'Dr. Saranya Sivaraj', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/saranya.png' },
      { name: 'Dr. V. Visithra', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr V Visithra.png' },
      { name: 'Dr. R. Raghul', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr R Raghul.png' },
      { name: 'Dr. S. Shobiya', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr S Shobiya.png' },
      { name: 'Dr. M. G. Kayalvizhimeena', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr-M-G-Kayalvizhimeena.png' },
      { name: 'Dr. S. Ramkumar', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr S Ramkumar.png' },
      { name: 'Dr. M. Sujitha', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr M Sujitha.png' },
      { name: 'Dr. C. Praveen Kumar', role: 'Senior Lecturer', focus: 'Endodontics & Restorative Dentistry', image: '/Dr C Praveen Kumar.png' },
    ],
    infrastructure: [
      { title: 'Conservative clinic', description: 'High-volume restorative chairs with isolation setups.' },
      { title: 'Endodontic suites', description: 'Equipped bays for rotary systems and obturation.' },
      { title: 'Preclinical transfer labs', description: 'Phantom practice bridging to first clinical cases.' },
    ],
    research: [
      { title: 'Obturation quality audits', description: 'Radiographic quality and retreat rates analysis.' },
      { title: 'Bonding longevity', description: 'Clinical follow-ups of adhesive restorations.' },
    ],
    patientCare:
      'We explain every step before the handpiece starts — numbness, isolation, and why saving your natural tooth is still the gold standard when feasible.',
    achievements: [
      { title: 'Micro-endo teaching track', description: 'Postgraduate emphasis on magnification and irrigation science.' },
      { title: 'Aesthetic case galas', description: 'Student portfolios judged on form and biology, not only shine.' },
    ],
    faqs: [
      { question: 'Is root canal treatment painful?', answer: 'Modern anaesthesia makes most appointments comfortable; mild tenderness afterward is managed with guidance and medication when needed.' },
      { question: 'Can a tooth be filled instead of crowned after RCT?', answer: 'It depends on remaining structure. Many posterior teeth need cuspal coverage to prevent fracture.' },
    ],
  },
  'oral-pathology': {
    tagline: 'Where the microscope meets clinical truth',
    overviewExtra:
      'Every slide tells a story that can redirect a treatment plan. We teach students to read tissue with rigor and humility.',
    stats: [
      { label: 'Biopsy reporting', value: 'In-house' },
      { label: 'Histo rounds', value: 'Weekly' },
      { label: 'UG microscopy', value: 'Core' },
    ],
    services: [
      { title: 'Histopathology reporting', description: 'Microscopic diagnosis of oral soft-tissue and hard-tissue specimens.' },
      { title: 'Cytology support', description: 'Adjunctive chairside cytology in selected screening pathways.' },
      { title: 'Clinicopathologic correlation', description: 'Joint reviews linking clinical photos, imaging, and slides.' },
      { title: 'Second-opinion reviews', description: 'Reassessment of complex or ambiguous diagnoses.' },
    ],
    technology: [
      { title: 'Histopathology laboratory', description: 'Processing, embedding, sectioning, and staining workflows.' },
      { title: 'Microscopy classrooms', description: 'Multi-head and individual microscopes for teaching.' },
      { title: 'Digital slide archival', description: 'Selected case banking for longitudinal learning.' },
    ],
    faculty: [
      { name: 'Dr. S. Shamala', role: 'Principal & HOD', focus: 'Oral Pathology & Institutional Leadership', image: '/shamala.png', isHod: true },
      { name: 'Dr. T. Maheswaran', role: 'Professor', focus: 'Oral histopathology & oncology', image: '/maheshwaran.png' },
      { name: 'Dr. I. Janani', role: 'Reader', focus: 'Oral histopathology & cytopathology', image: '/janani.png' },
      { name: 'Dr. K. Manisha Kumar', role: 'Senior Lecturer', focus: 'Oral histopathology & cytopathology', image: '/manishakumar.png' },
      { name: 'Dr. B. Adhithya', role: 'Senior Lecturer', focus: 'Oral histopathology & cytopathology', image: '/vinoth.png' },
      { name: 'Dr. S. Kokila', role: 'Senior Lecturer', focus: 'Oral histopathology & cytopathology', image: '/kokila.png' },
      { name: 'Dr. K. Magesh', role: 'Professor', focus: 'Oral oncology pathology', image: '/Magesh-home.jpg' },
      { name: 'Dr. Karthik Subramanian', role: 'Associate Professor', focus: 'Odontogenic tumours' },
    ],
    infrastructure: [
      { title: 'Path lab suite', description: 'Controlled processing areas meeting biosafety norms.' },
      { title: 'Reporting cabin', description: 'Quiet diagnostic workspace for pathologists.' },
      { title: 'Specimen reception', description: 'Chain-of-custody logging from clinic to lab.' },
    ],
    research: [
      { title: 'PMD progression markers', description: 'Histologic and clinical correlate studies.' },
      { title: 'Teaching slide banks', description: 'Curated collections for rare-entity learning.' },
    ],
    patientCare:
      'When patients wait on a biopsy result, speed and clarity matter. Reports are worded for clinicians — and explained in plain language when patients need it.',
    achievements: [
      { title: 'Rapid turnaround culture', description: 'Defined SLAs for routine and urgent specimens.' },
      { title: 'Tumour board participation', description: 'Pathology voice present in multidisciplinary discussions.' },
    ],
    faqs: [
      { question: 'How long do biopsy results take?', answer: 'Routine cases often report within several working days; complex stains may extend the timeline with prior notice.' },
      { question: 'Can students observe reporting?', answer: 'Yes. Structured microscopy sessions and clinicopathologic conferences are integral to training.' },
    ],
  },
  'public-health-dentistry': {
    tagline: 'Oral health for communities, not just chairs',
    overviewExtra:
      'We teach dentists to change populations — through data, school programmes, camps, and health promotion that lasts beyond a single day.',
    stats: [
      { label: 'Outreach camps / year', value: '40+' },
      { label: 'School partnerships', value: 'Active' },
      { label: 'Field epidemiology', value: 'Trained' },
    ],
    services: [
      { title: 'Community screening camps', description: 'Mobile assessment and referral linkages for underserved groups.' },
      { title: 'School oral health', description: 'Education, varnish, and sealant programmes in partner schools.' },
      { title: 'Health promotion design', description: 'Campaigns and materials tailored to local languages and habits.' },
      { title: 'Survey & surveillance', description: 'Structured data collection informing college outreach priorities.' },
    ],
    technology: [
      { title: 'Portable dental units', description: 'Field-ready equipment for community service days.' },
      { title: 'Survey software tools', description: 'Digital forms accelerating epidemiological fieldwork.' },
      { title: 'IEC media kit', description: 'Posters, demos, and AV aids for health education.' },
    ],
    faculty: [
      { name: 'Dr. S. Kalaivani', role: 'Reader', focus: 'Community Dentistry & Field Epidemiology', image: '/kalai.png' },
      { name: 'Dr. N. S. Naveenraj', role: 'Reader', focus: 'Community Dentistry & Field Epidemiology', image: '/dr.naveen.png' },
      { name: 'Dr. V. Malliga', role: 'Senior Lecturer', focus: 'Community Dentistry & Field Epidemiology', image: '/malliga.png' },
      { name: 'Dr. E. Keerthiga', role: 'Tutor', focus: 'Community Dentistry & Field Epidemiology', image: '/keerthiga.png' },
      { name: 'Dr. S. S. Elakkiyaa', role: 'Tutor', focus: 'Community Dentistry & Field Epidemiology', image: '/ellakiya.png' },
      { name: 'Dr. K. Durgalakshmy', role: 'Tutor', focus: 'Community Dentistry & Field Epidemiology', image: '/durga.png' },
    ],
    infrastructure: [
      { title: 'Public health unit', description: 'Planning hub for camps, MOUs, and transport logistics.' },
      { title: 'IEC resource room', description: 'Stored educational materials ready for rapid deployment.' },
      { title: 'Data analysis corner', description: 'Workstations for survey cleaning and presentation.' },
    ],
    research: [
      { title: 'Caries prevalence maps', description: 'Local surveys guiding prevention intensity by block.' },
      { title: 'Behaviour change trials', description: 'Evaluating education formats that actually stick.' },
    ],
    patientCare:
      'In the field, dignity is the first instrument. Consent, privacy, and respectful counselling travel with every mobile chair we unfold.',
    achievements: [
      { title: 'District partnership camps', description: 'Sustained collaboration extending specialty referral pathways.' },
      { title: 'Student leadership in outreach', description: 'UG-led teams managing logistics with faculty oversight.' },
    ],
    faqs: [
      { question: 'Can the public attend college camps?', answer: 'Yes. Camp dates and venues are announced periodically; basic screening and referrals are typically free or subsidised.' },
      { question: 'Do students get field credit?', answer: 'Community postings are part of the curriculum and assessed through participation and reports.' },
    ],
  },
  implantology: {
    tagline: 'Precision implant care from planning to lifelong maintenance',
    overviewExtra:
      'A dedicated unit for implant diagnosis, guided surgery, prosthetic rehabilitation, and long-term maintenance — working closely with periodontics, oral surgery, and prosthodontics.',
    stats: [
      { label: 'Guided planning', value: 'CBCT-led' },
      { label: 'Surgical & prosthetic', value: 'Integrated' },
      { label: 'Maintenance clinic', value: 'Ongoing' },
    ],
    services: [
      {
        title: 'Implant consultation & planning',
        description: 'Comprehensive clinical and radiographic assessment with CBCT-based treatment planning.',
      },
      {
        title: 'Surgical implant placement',
        description: 'Evidence-based placement protocols including guided and conventional approaches.',
      },
      {
        title: 'Bone & soft-tissue management',
        description: 'Ridge preservation, augmentation, and soft-tissue conditioning for stable aesthetics.',
      },
      {
        title: 'Prosthetic rehabilitation',
        description: 'Single crowns, bridges, and implant-supported dentures restored for function and appearance.',
      },
      {
        title: 'Implant maintenance',
        description: 'Recall programmes focused on peri-implant health and long-term success.',
      },
    ],
    technology: [
      {
        title: 'CBCT-guided planning',
        description: 'Three-dimensional imaging for precise implant positioning and risk assessment.',
      },
      {
        title: 'Surgical guides',
        description: 'Guided surgery workflows that improve accuracy and patient comfort.',
      },
      {
        title: 'Digital prosthetic workflows',
        description: 'CAD/CAM and digital impressions supporting predictable restorations.',
      },
    ],
    faculty: [
      { name: 'Dr. Karthik Raman', role: 'Professor & HOD', focus: 'Surgical & prosthetic implantology', isHod: true },
      { name: 'Dr. Divya Natarajan', role: 'Associate Professor', focus: 'Guided implant surgery' },
      { name: 'Dr. Arun Prakash', role: 'Senior Lecturer', focus: 'Implant prosthetics' },
    ],
    infrastructure: [
      {
        title: 'Implant clinic',
        description: 'Dedicated chairs configured for surgical and restorative implant workflows.',
      },
      {
        title: 'Sterile surgical setup',
        description: 'Protocol-driven sterile fields and instrument trays for implant procedures.',
      },
      {
        title: 'Digital planning station',
        description: 'CBCT review and guide design supporting case presentation and consent.',
      },
    ],
    research: [
      {
        title: 'Osseointegration outcomes',
        description: 'Clinical audits on implant survival, loading protocols, and patient-reported outcomes.',
      },
      {
        title: 'Peri-implant health',
        description: 'Studies on maintenance intervals and soft-tissue stability around implants.',
      },
    ],
    patientCareTitle: 'Patient-Centred Implant Care',
    patientCare:
      'Every implant journey begins with clear diagnosis, shared decision-making, and a plan that balances biology, aesthetics, and long-term maintenance.',
    patientCareItems: [
      'Comprehensive implant assessment',
      'CBCT-based treatment planning',
      'Surgical implant placement',
      'Prosthetic rehabilitation',
      'Soft-tissue and bone management',
      'Long-term implant maintenance',
    ],
    achievements: [
      { title: 'Guided Surgery Excellence', icon: 'Trophy' },
      { title: 'Interdisciplinary Care', icon: 'Medal' },
      { title: 'Prosthetic Precision', icon: 'GraduationCap' },
      { title: 'National Recognition', icon: 'Globe' },
    ],
    achievementsSection: {
      eyebrow: 'Achievements',
      title: 'Awards & Professional Recognition',
      description:
        'Recognition for implant education, clinical outcomes, and interdisciplinary collaboration.',
      ctaLabel: 'View All Achievements',
      ctaHref: '/about',
    },
    gallery: [
      {
        caption: 'Implant Planning',
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=900&q=80&auto=format&fit=crop',
      },
      {
        caption: 'Surgical Suite',
        image: 'https://images.unsplash.com/photo-1551076805-e1869033fa8e?w=900&q=80&auto=format&fit=crop',
      },
      {
        caption: 'Prosthetic Lab',
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80&auto=format&fit=crop',
      },
      {
        caption: 'Patient Care',
        image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=900&q=80&auto=format&fit=crop',
      },
    ],
    faqs: [
      {
        question: 'Who is a candidate for dental implants?',
        answer:
          'Suitable candidates typically have adequate bone and soft tissue, good oral hygiene, and controlled medical conditions. A clinical and CBCT assessment confirms suitability.',
      },
      {
        question: 'How long does implant treatment take?',
        answer:
          'Timelines vary by case. Some restorations can be completed sooner; others require healing after placement or grafting before the final prosthesis.',
      },
      {
        question: 'Do you provide implant maintenance?',
        answer:
          'Yes. Regular maintenance visits help protect peri-implant health and support long-term success of the restoration.',
      },
    ],
  },
}

export function getDepartmentById(id) {
  return DEPARTMENTS.find((d) => d.id === id) ?? null
}

export function getDepartmentDetail(id) {
  const base = getDepartmentById(id)
  if (!base) return null
  const extra = DEPARTMENT_DETAILS[id]
  if (!extra) return null

  return {
    ...base,
    tagline: extra.tagline,
    aboutTitle: extra.aboutTitle,
    aboutParagraphs: extra.aboutParagraphs,
    overviewExtra: extra.overviewExtra,
    stats: extra.stats,
    services: extra.services,
    servicesSection: extra.servicesSection,
    technology: extra.technology,
    technologySection: extra.technologySection,
    faculty: extra.faculty.map((f, i) => ({
      ...f,
      image: FACULTY_IMAGES[i % FACULTY_IMAGES.length],
    })),
    infrastructure: extra.infrastructure,
    research: extra.research,
    researchSection: extra.researchSection,
    patientCare: extra.patientCare,
    patientCareTitle: extra.patientCareTitle,
    patientCareItems: extra.patientCareItems,
    achievements: extra.achievements,
    achievementsSection: extra.achievementsSection,
    gallery:
      extra.gallery ??
      GALLERY_POOL.map((image, i) => ({
        image,
        caption: `${base.name} — clinical & academic spaces ${i + 1}`,
      })),
    faqs: extra.faqs,
  }
}

export function getAllDepartmentIds() {
  return DEPARTMENTS.map((d) => d.id)
}
