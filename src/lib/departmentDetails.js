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
    tagline: 'Clarity at the intersection of medicine and the mouth',
    overviewExtra:
      'Our clinics welcome referrals for chronic oral ulcers, burning mouth, TMJ-related pain, and unexplained radiographic findings. Every consultation balances clinical reasoning with empathetic communication.',
    stats: [
      { label: 'Specialist clinics / week', value: '12+' },
      { label: 'Diagnostic pathways', value: '20+' },
      { label: 'UG clinical hours', value: 'High' },
    ],
    services: [
      { title: 'Mucosal disease clinic', description: 'Evaluation of ulcers, white and red patches, and potentially malignant disorders.' },
      { title: 'Orofacial pain service', description: 'Structured assessment of TMJ disorders, neuropathic pain, and headache overlap.' },
      { title: 'Medically complex care', description: 'Pre-treatment oral clearance and risk stratification for systemic disease.' },
      { title: 'Imaging correlation', description: 'Interpretation support linking clinical signs with radiographic findings.' },
    ],
    technology: [
      { title: 'Digital imaging suite', description: 'High-resolution intraoral and extraoral imaging for diagnostic precision.' },
      { title: 'Soft-tissue photography', description: 'Standardised lesion documentation for monitoring and teaching.' },
      { title: 'Chairside chair lights & optics', description: 'Optimised illumination for subtle mucosal change detection.' },
    ],
    faculty: [
      { name: 'Dr. Meera Krishnan', role: 'Professor & HOD', focus: 'Oral mucosal oncology pathways' },
      { name: 'Dr. Arjun Desai', role: 'Associate Professor', focus: 'Orofacial pain & TMD' },
      { name: 'Dr. Lakshmi Rao', role: 'Reader', focus: 'Oral manifestations of systemic disease' },
    ],
    infrastructure: [
      { title: 'Consultation suites', description: 'Private rooms designed for unhurried history taking and examination.' },
      { title: 'Seminar bay', description: 'Case discussion space adjoining the teaching clinic.' },
      { title: 'Referral coordination desk', description: 'Seamless handoff to pathology, surgery, and medical services.' },
    ],
    research: [
      { title: 'Early detection protocols', description: 'Studies on screening tools for potentially malignant disorders.' },
      { title: 'Pain outcome metrics', description: 'Patient-reported outcomes in chronic orofacial pain care.' },
    ],
    patientCare:
      'Patients receive clear explanations, staged investigations, and collaborative plans that never rush diagnosis. Follow-up pathways ensure nothing suspicious is lost to time.',
    achievements: [
      { title: 'Integrated referral network', description: 'Established multi-specialty oral medicine–pathology–oncology corridor.' },
      { title: 'Teaching excellence', description: 'Recognised for structured UG diagnostic clinics and viva readiness.' },
    ],
    faqs: [
      { question: 'Do I need a referral for oral medicine?', answer: 'Self-referrals for persistent lesions or unexplained pain are welcome; referred patients receive priority coordination with the referring clinician.' },
      { question: 'How long is a typical first visit?', answer: 'Allow 30–45 minutes for history, examination, and counselling. Investigations may be scheduled separately.' },
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
      { name: 'Dr. Suresh Natarajan', role: 'Professor & HOD', focus: 'Trauma & dentoalveolar surgery' },
      { name: 'Dr. Priya Menon', role: 'Associate Professor', focus: 'Minor oral surgery pedagogy' },
      { name: 'Dr. Farhan Ali', role: 'Senior Lecturer', focus: 'Infection control & theatre safety' },
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
      { name: 'Dr. Anitha Selvan', role: 'Professor & HOD', focus: 'Biomechanics & finish quality' },
      { name: 'Dr. Rohit Kapoor', role: 'Associate Professor', focus: 'Growth & dentofacial orthopaedics' },
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
      { name: 'Dr. Kavitha Sundaram', role: 'Professor & HOD', focus: 'Regenerative periodontology' },
      { name: 'Dr. Imran Qureshi', role: 'Associate Professor', focus: 'Perio-systemic interlinks' },
      { name: 'Dr. Nisha Thomas', role: 'Senior Lecturer', focus: 'Maintenance science' },
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
      { name: 'Dr. Divya Banerjee', role: 'Professor & HOD', focus: 'Behaviour guidance & prevention' },
      { name: 'Dr. Harish Kumar', role: 'Associate Professor', focus: 'Pulp therapy in primary teeth' },
      { name: 'Dr. Ayesha Rahman', role: 'Reader', focus: 'Special care dentistry' },
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
      { name: 'Dr. Ramesh Pillai', role: 'Professor & HOD', focus: 'Full mouth rehabilitation' },
      { name: 'Dr. Sofie Abraham', role: 'Associate Professor', focus: 'Implant prosthodontics' },
      { name: 'Dr. Vivek Sharma', role: 'Senior Lecturer', focus: 'Removable prosthodontics pedagogy' },
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
      { name: 'Dr. Gayathri Mohan', role: 'Professor & HOD', focus: 'Endodontics & microdentistry' },
      { name: 'Dr. Nikhil Bose', role: 'Associate Professor', focus: 'Aesthetic operative dentistry' },
      { name: 'Dr. Fatima Noor', role: 'Reader', focus: 'Vital pulp therapy' },
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
      { name: 'Dr. Padma Venkatesh', role: 'Professor & HOD', focus: 'Oral oncology pathology' },
      { name: 'Dr. Karthik Subramanian', role: 'Associate Professor', focus: 'Odontogenic tumours' },
      { name: 'Dr. Reena Joseph', role: 'Senior Lecturer', focus: 'UG microscopy pedagogy' },
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
      { name: 'Dr. Manjula Krishnan', role: 'Professor & HOD', focus: 'Community programme design' },
      { name: 'Dr. Ajay Pratap', role: 'Associate Professor', focus: 'Epidemiology & biostatistics' },
      { name: 'Dr. Sara Fernandes', role: 'Reader', focus: 'School health partnerships' },
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
    overviewExtra: extra.overviewExtra,
    stats: extra.stats,
    services: extra.services,
    technology: extra.technology,
    faculty: extra.faculty.map((f, i) => ({
      ...f,
      image: FACULTY_IMAGES[i % FACULTY_IMAGES.length],
    })),
    infrastructure: extra.infrastructure,
    research: extra.research,
    patientCare: extra.patientCare,
    achievements: extra.achievements,
    gallery: GALLERY_POOL.map((image, i) => ({
      image,
      caption: `${base.name} — clinical & academic spaces ${i + 1}`,
    })),
    faqs: extra.faqs,
  }
}

export function getAllDepartmentIds() {
  return DEPARTMENTS.map((d) => d.id)
}
