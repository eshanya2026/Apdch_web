// ============================================================================
// APDCH CAREERS STORE & CMS STATE MANAGEMENT SERVICE
// Handles persistent CRUD operations for Job Postings and Applications
// ============================================================================

const JOBS_STORAGE_KEY = 'apdch_careers_jobs_v2'
const APPLICATIONS_STORAGE_KEY = 'apdch_careers_applications_v2'

export const INITIAL_JOB_POSTINGS = [
  {
    id: 'job-prostho-prof-2026',
    title: 'Professor / Reader in Prosthodontics & Crown & Bridge',
    department: 'Prosthodontics & Crown & Bridge',
    positionLevel: 'Professor / Reader',
    employmentType: 'Full Time',
    experience: '5 to 10 Years',
    qualification: 'MDS (Master of Dental Surgery)',
    vacancies: 2,
    location: 'Melmaruvathur Campus, APDCH',
    salary: '',
    deadline: '2026-09-30',
    status: 'active', // 'active' | 'draft' | 'closed'
    featured: true,
    tags: ['Faculty Opening', 'DCI Approved', 'Immediate Requirement'],
    description:
      'We are looking for an experienced and committed academician to join the Department of Prosthodontics & Crown & Bridge as Professor / Reader. The role involves postgraduate and undergraduate teaching, clinical supervision, research guidance, and advanced prosthodontic patient rehabilitation.',
    responsibilities: [
      'Conduct high-quality didactic lectures and clinical demonstrations for BDS and MDS students.',
      'Supervise clinical work in fixed prosthodontics, removable prosthodontics, maxillofacial prosthetics, and implantology.',
      'Guide postgraduate dissertations, research papers, and scientific presentations.',
      'Participate actively in departmental academic meetings, curriculum delivery, and NAAC/DCI compliance audits.',
      'Maintain compassionate, high-standard patient care and clinical documentation in the teaching hospital.',
    ],
    requirements: [
      'Recognized MDS degree in Prosthodontics and Crown & Bridge from a DCI-approved institution.',
      'Minimum 4–5 years of recognized teaching experience as Senior Lecturer / Reader as per DCI regulations.',
      'Valid registration with the State Dental Council / Dental Council of India.',
      'Strong research portfolio with indexed publications in peer-reviewed journals (PubMed / Scopus / Web of Science).',
      'Excellent leadership, communication, and interpersonal skills.',
    ],
    postedDate: '2026-08-10',
  },
  {
    id: 'job-ortho-sr-lecturer-2026',
    title: 'Senior Lecturer in Orthodontics & Dentofacial Orthopaedics',
    department: 'Orthodontics & Dentofacial Orthopaedics',
    positionLevel: 'Senior Lecturer / Assistant Professor',
    employmentType: 'Full Time',
    experience: '1 to 3 Years',
    qualification: 'MDS (Master of Dental Surgery)',
    vacancies: 1,
    location: 'Melmaruvathur Campus, APDCH',
    salary: '',
    deadline: '2026-09-25',
    status: 'active',
    featured: true,
    tags: ['Immediate Joining', 'Clinical & Academic'],
    description:
      'The Department of Orthodontics & Dentofacial Orthopaedics invites applications from dynamic and motivated orthodontists for the position of Senior Lecturer. The selected faculty will manage patient clinical records, guide undergraduate and postgraduate trainees, and participate in orthodontic research.',
    responsibilities: [
      'Deliver lectures, tutorials, and practical laboratory sessions for undergraduate dental students.',
      'Supervise clinical orthodontic cases including fixed appliance mechanics, clear aligners, and myofunctional therapy.',
      'Contribute to ongoing clinical trials, cephalometric studies, and journal club presentations.',
      'Maintain cephalometric archives, digital diagnostic models, and patient follow-up registries.',
    ],
    requirements: [
      'MDS in Orthodontics & Dentofacial Orthopaedics from a recognized dental college.',
      'Valid State Dental Council Registration Certificate.',
      'Experience in pre-adjusted edgewise appliance systems, clear aligner therapy, and digital orthodontics is preferred.',
      'Published research articles in recognized national/international orthodontic journals.',
    ],
    postedDate: '2026-08-12',
  },
  {
    id: 'job-omfs-sr-resident-2026',
    title: 'Senior Resident / Consultant - Oral & Maxillofacial Surgery',
    department: 'Oral & Maxillofacial Surgery',
    positionLevel: 'Senior Resident / Junior Resident',
    employmentType: 'Full Time',
    experience: '1 to 3 Years',
    qualification: 'MDS (Master of Dental Surgery)',
    vacancies: 2,
    location: 'APDCH Hospital OPD & Trauma Center',
    salary: '',
    deadline: '2026-10-05',
    status: 'active',
    featured: false,
    tags: ['Hospital Block', 'Trauma & Minor OT'],
    description:
      'Opportunity for an energetic Maxillofacial Surgeon to manage emergency trauma services, minor oral surgical procedures, implant surgeries, and inpatient care in coordination with the medical college and hospital.',
    responsibilities: [
      'Manage 24/7 maxillofacial trauma emergencies, complex extractions, and minor oral surgery operatory.',
      'Assist in major elective maxillofacial surgeries (orthognathic surgery, trauma reconstruction, pathology resection).',
      'Train undergraduate students and interns in local anaesthesia, exodontia, and surgical protocols.',
      'Coordinate post-operative ward care, medication management, and patient documentation.',
    ],
    requirements: [
      'MDS in Oral and Maxillofacial Surgery from a DCI recognized institution.',
      'Hands-on experience in trauma care, impactions, cyst enucleations, and minor surgical procedures.',
      'BLS / ACLS certification is desirable.',
    ],
    postedDate: '2026-08-15',
  },
  {
    id: 'job-cons-tutor-2026',
    title: 'Tutor / Clinical Demonstrator - Conservative Dentistry & Endodontics',
    department: 'Conservative Dentistry & Endodontics',
    positionLevel: 'Tutor / Clinical Demonstrator',
    employmentType: 'Full Time',
    experience: 'Fresh Graduate / 0 – 1 Year',
    qualification: 'BDS (Bachelor of Dental Surgery)',
    vacancies: 3,
    location: 'Phantom Head & Pre-Clinical Lab, APDCH',
    salary: '',
    deadline: '2026-09-20',
    status: 'active',
    featured: false,
    tags: ['Entry Level', 'BDS Graduates'],
    description:
      'Ideal role for recently graduated dental surgeons looking to gain comprehensive pre-clinical teaching experience and chairside demonstration expertise in endodontics and operative dentistry.',
    responsibilities: [
      'Instruct and evaluate students during pre-clinical operative dentistry and endodontic exercises on phantom head simulators.',
      'Assist senior faculty during clinical operatory sessions and restorative procedures.',
      'Maintain laboratory equipment, cavity preparation models, and student logbook assessments.',
    ],
    requirements: [
      'BDS degree from a DCI recognized dental college with completed 1-year rotatory internship (CRRI).',
      'Valid State Dental Council Registration.',
      'Proficiency in dental anatomy wax-up, cavity preparation principles, and endodontic procedures.',
    ],
    postedDate: '2026-08-08',
  },
  {
    id: 'job-nursing-supervisor-2026',
    title: 'Clinical & Nursing Supervisor - Dental Hospital Block',
    department: 'Hospital Administration & Support',
    positionLevel: 'Clinical & Nursing Staff',
    employmentType: 'Full Time',
    experience: '3 to 5 Years',
    qualification: 'Bachelor’s Degree (Administration / Nursing / Technical)',
    vacancies: 2,
    location: 'Central OPD & Day Care Center, APDCH',
    salary: '',
    deadline: '2026-09-30',
    status: 'active',
    featured: false,
    tags: ['Hospital Operations', 'Infection Control'],
    description:
      'Oversee clinical nursing staff, sterilization protocols, CSSD operations, patient triage, and hygiene management across 9 clinical departments and minor surgical suites.',
    responsibilities: [
      'Supervise chairside dental assistants, nursing staff, and patient attendants.',
      'Enforce biomedical waste segregation, sterilization monitoring, and NABH/ISO standard infection control protocols.',
      'Maintain daily clinic supplies, emergency drug kits, and oxygen cylinders in operatory areas.',
    ],
    requirements: [
      'B.Sc Nursing / General Nursing and Midwifery (GNM) / Healthcare Administration degree.',
      'Minimum 3 years of clinical or hospital supervisory experience.',
      'Knowledge of NABH infection control standards and sterilization methodologies.',
    ],
    postedDate: '2026-08-05',
  },
  {
    id: 'job-research-fellow-2026',
    title: 'Research Associate / Fellow - Oral Biomaterials & Diagnostics',
    department: 'Central Library & IT Services',
    positionLevel: 'Research Associate / Fellow',
    employmentType: 'Contract',
    experience: '1 to 3 Years',
    qualification: 'PhD in Dental / Allied Sciences',
    vacancies: 1,
    location: 'APDCH Central Multidisciplinary Research Lab',
    salary: '',
    deadline: '2026-10-15',
    status: 'active',
    featured: false,
    tags: ['Research Grant', 'Oral Diagnostics'],
    description:
      'Join the APDCH Multidisciplinary Research Wing on funded projects focusing on dental biomaterials, diagnostic salivary biomarkers, and oral microbiome studies.',
    responsibilities: [
      'Execute laboratory experiments including PCR, spectrophotometry, histochemical staining, and material tensile testing.',
      'Prepare research manuscripts, statistical analysis reports, and grant proposals.',
      'Assist faculty and PG residents in institutional ethics committee (IEC) documentation.',
    ],
    requirements: [
      'Master’s degree / PhD in Dental Sciences (MDS / MSc / PhD) or Biotechnology / Biomedical Sciences.',
      'Demonstrated research publication track record in Scopus/WoS indexed journals.',
      'Hands-on proficiency with laboratory analytical instrumentation and scientific statistical packages.',
    ],
    postedDate: '2026-08-01',
  },
]

export const INITIAL_APPLICATIONS = []

// ============================================================================
// HELPER FUNCTIONS FOR JOB POSTINGS
// ============================================================================

export function getJobPostings() {
  try {
    const data = localStorage.getItem(JOBS_STORAGE_KEY)
    if (!data) {
      localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(INITIAL_JOB_POSTINGS))
      return INITIAL_JOB_POSTINGS
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to load job postings from localStorage:', error)
    return INITIAL_JOB_POSTINGS
  }
}

export function getJobPostingById(id) {
  const jobs = getJobPostings()
  return jobs.find((j) => j.id === id) || null
}

export function getActiveJobPostings() {
  const jobs = getJobPostings()
  return jobs.filter((j) => j.status === 'active')
}

export function saveJobPosting(jobData) {
  const jobs = getJobPostings()
  let updatedJobs = []

  if (jobData.id) {
    // Update existing job
    const index = jobs.findIndex((j) => j.id === jobData.id)
    if (index !== -1) {
      updatedJobs = [...jobs]
      updatedJobs[index] = {
        ...updatedJobs[index],
        ...jobData,
        updatedDate: new Date().toISOString().split('T')[0],
      }
    } else {
      updatedJobs = [jobData, ...jobs]
    }
  } else {
    // Create new job
    const newJob = {
      ...jobData,
      id: `job-${Date.now()}`,
      postedDate: new Date().toISOString().split('T')[0],
      status: jobData.status || 'active',
      vacancies: Number(jobData.vacancies) || 1,
      tags: Array.isArray(jobData.tags) ? jobData.tags : [],
      responsibilities: Array.isArray(jobData.responsibilities) ? jobData.responsibilities : [],
      requirements: Array.isArray(jobData.requirements) ? jobData.requirements : [],
    }
    updatedJobs = [newJob, ...jobs]
  }

  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(updatedJobs))
  return updatedJobs
}

export function deleteJobPosting(id) {
  const jobs = getJobPostings()
  const filtered = jobs.filter((j) => j.id !== id)
  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(filtered))
  return filtered
}

export function toggleJobStatus(id, newStatus) {
  const jobs = getJobPostings()
  const updated = jobs.map((job) => {
    if (job.id === id) {
      return { ...job, status: newStatus }
    }
    return job
  })
  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function duplicateJobPosting(id) {
  const jobs = getJobPostings()
  const target = jobs.find((j) => j.id === id)
  if (!target) return jobs

  const cloned = {
    ...target,
    id: `job-${Date.now()}`,
    title: `${target.title} (Copy)`,
    status: 'draft',
    postedDate: new Date().toISOString().split('T')[0],
  }

  const updated = [cloned, ...jobs]
  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(updated))
  return updated
}

// ============================================================================
// HELPER FUNCTIONS FOR CANDIDATE APPLICATIONS
// ============================================================================

export function getApplications() {
  try {
    const data = localStorage.getItem(APPLICATIONS_STORAGE_KEY)
    if (!data) {
      localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS))
      return INITIAL_APPLICATIONS
    }
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to load applications from localStorage:', error)
    return INITIAL_APPLICATIONS
  }
}

export function saveApplication(appData) {
  const apps = getApplications()
  const now = new Date()
  const formattedDate = `${now.toISOString().split('T')[0]} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`

  const newApp = {
    ...appData,
    id: `app-${Date.now()}`,
    status: 'new',
    appliedDate: formattedDate,
    hrNotes: 'Application submitted via Online Portal.',
  }

  const updated = [newApp, ...apps]
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(updated))
  return newApp
}

export function updateApplicationStatus(id, newStatus, hrNotes = null) {
  const apps = getApplications()
  const updated = apps.map((app) => {
    if (app.id === id) {
      return {
        ...app,
        status: newStatus,
        ...(hrNotes !== null ? { hrNotes } : {}),
      }
    }
    return app
  })
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(updated))
  return updated
}

export function deleteApplication(id) {
  const apps = getApplications()
  const filtered = apps.filter((a) => a.id !== id)
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(filtered))
  return filtered
}

// ============================================================================
// DATA BACKUP & RESTORE UTILITIES
// ============================================================================

export function exportCareersDatabase() {
  const jobs = getJobPostings()
  const apps = getApplications()
  const backup = {
    exportedAt: new Date().toISOString(),
    institution: 'Adhiparasakthi Dental College and Hospitals',
    jobs,
    applications: apps,
  }
  return JSON.stringify(backup, null, 2)
}

export function importCareersDatabase(jsonString) {
  try {
    const parsed = JSON.parse(jsonString)
    if (Array.isArray(parsed.jobs)) {
      localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(parsed.jobs))
    }
    if (Array.isArray(parsed.applications)) {
      localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(parsed.applications))
    }
    return { success: true, count: parsed.jobs?.length || 0 }
  } catch (error) {
    console.error('Import failed:', error)
    return { success: false, error: error.message }
  }
}

export function resetCareersToDefaults() {
  localStorage.setItem(JOBS_STORAGE_KEY, JSON.stringify(INITIAL_JOB_POSTINGS))
  localStorage.setItem(APPLICATIONS_STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS))
  return { jobs: INITIAL_JOB_POSTINGS, applications: INITIAL_APPLICATIONS }
}
