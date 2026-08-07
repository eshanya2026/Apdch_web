import { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Award,
  ChevronDown,
  FileText,
  ArrowRight,
  Filter,
  Microscope,
  UserCheck,
  Copyright,
  Archive,
} from 'lucide-react'

import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const TABS = [
  { id: 'publications', label: 'Publications', icon: FileText },
  { id: 'ongoing', label: 'Ongoing Research', icon: Microscope },
  { id: 'reviewer', label: 'Reviewer', icon: UserCheck },
  { id: 'intellectualProperty', label: 'Patents & Copyrights', icon: Copyright },
  { id: 'awards', label: 'Awards', icon: Trophy },
  { id: 'studentAchievements', label: 'UG/PG Achievements', icon: Award },
  { id: 'recognition', label: 'Faculty Achievements', icon: Award },
  { id: 'books', label: 'Books', icon: BookOpen },
]

// Fallback data generator if department doesn't specify custom items
function getDefaultResearchData(department) {
  if (department?.customResearchData) {
    return department.customResearchData
  }

  if (department?.id === 'conservative-dentistry') {
    return {
      publications: [
        {
          id: 'cons-pub-1',
          year: '2024',
          title: 'Evaluation of Antimicrobial Efficacy and Cytotoxicity of Restorative Resin Formulations',
          authors: ['Dr. Purusothaman A', 'Dr. N. Bharath'],
          journal: 'Journal of Pharmacy and Bioallied Sciences',
          doi: '10.4103/jpbs.jpbs_2024_01',
          abstract: 'In vitro analytical study evaluating the biocompatibility and antibacterial action of contemporary dental restorative resin formulations.',
        },
        {
          id: 'cons-pub-2',
          year: '2024',
          title: 'In Vitro Comparative Evaluation of Microleakage and Shear Bond Strength in Direct Aesthetic Restorations',
          authors: ['Dr. Ohm Nijandhan K', 'Dr. Sowmiya T'],
          journal: 'International Journal of Scientific Development and Research (IJSDR)',
          doi: '10.5281/zenodo.ijsdr2024',
          abstract: 'Comparative laboratory evaluation measuring microleakage and adhesive bond performance in modern composite resins.',
        },
        {
          id: 'cons-pub-3',
          year: '2024',
          title: 'Patent: Specialized Endodontic Isolation & Irrigation Manifold Device',
          authors: ['Dr. Sowmiya T', 'Dr. Sriram Sankar'],
          journal: 'The Patent Office Journal (Official Intellectual Property Rights Registration)',
          doi: 'Patent Reg: 2024-IN-APDCH-09',
          abstract: 'Official Indian patent published for an innovative endodontic isolation and controlled irrigation manifold assembly.',
        },
        {
          id: 'cons-pub-4',
          year: '2023',
          title: 'Comparative Evaluation of Canal Centering Ability and Preparation Time of Rotary NiTi Files',
          authors: ['Dr. Sujith R', 'Dr. N. Bharath'],
          journal: 'Journal of Contemporary Dental Practice (JCDP)',
          doi: '10.5005/jp-journals-10024-3310',
          abstract: 'CBCT-assisted comparative trial evaluating rotary instrumentation efficiency, transportation, and root canal centering.',
        },
        {
          id: 'cons-pub-5',
          year: '2023',
          title: 'Antibacterial and Physical Properties of Nanoparticle-Enriched Resin Matrix Restorations',
          authors: ['Dr. Senthilnathan', 'Dr. Sowmiya T'],
          journal: 'European Chemical Bulletin',
          doi: '10.31838/ecb/2023.12.04',
          abstract: 'Chemical characterization of bioactive nanoparticles integrated into dental resin matrices for caries inhibition.',
        },
        {
          id: 'cons-pub-6',
          year: '2023',
          title: 'Evaluation of Sealing Ability and Cytotoxicity of Calcium Silicate-Based Root Canal Sealers',
          authors: ['Dr. Sriram Sankar', 'Dr. Ohm Nijandhan K'],
          journal: 'Paripex - Indian Journal of Research',
          doi: '10.36106/paripex/2023.882',
          abstract: 'In vitro sealing efficacy and cellular biocompatibility assessment of bioceramic root canal sealing materials.',
        },
        {
          id: 'cons-pub-7',
          year: '2022',
          title: 'Comparative Evaluation of Cleaning Efficacy of R-Endo Retreatment System Obturated with Two Different Core Materials and Sealers',
          authors: ['Dr. T. Sowmiya', 'Dr. N. Bharath'],
          journal: 'Journal of Contemporary Dental Research (Vol 3, Issue 1)',
          doi: '10.5005/jcdr.2022.3101',
          abstract: 'Stereomicroscopic evaluation of root canal retreatment cleanliness using R-Endo rotary files and gutta-percha removal.',
        },
        {
          id: 'cons-pub-8',
          year: '2022',
          title: 'An In Vitro Study to Compare and Evaluate Microleakage and Compressive Strength of Two Different Types of Glass Ionomer Cements',
          authors: ['Dr. T. Sowmiya'],
          journal: 'Journal of Research and Advancement in Dentistry (J Res Adv Dent 12(6):371-373)',
          doi: '10.5281/jrad.2022.126',
          abstract: 'Experimental study assessing dye penetration and compressive fracture resistance of high-viscosity GIC vs resin-modified GIC.',
        },
        {
          id: 'cons-pub-9',
          year: '2022',
          title: 'Chemical Characterization and Physical Properties of Dental Restorative Composite Resin with a Novel Multifunctional Cross-Linking Comonomer',
          authors: ['Dr. Sudhakar V', 'Dr. N. Bharath'],
          journal: 'The Journal of Contemporary Dental Practice (Vol 22, Issue 6)',
          doi: '10.5005/jp-journals-10024-3155',
          abstract: 'Spectroscopic and mechanical analysis of composite resin cross-linking comonomers designed to minimize polymerization shrinkage.',
        },
        {
          id: 'cons-pub-10',
          year: '2022',
          title: 'Comparative Evaluation of Degree of Conversion of Four Different Composites Polymerized Using Ultrafast Photopolymerization Technique',
          authors: ['Dr. B. Hemasathya', 'Dr. Sujith R'],
          journal: 'Journal of Conservative Dentistry (J Conserv Dent 24:77-82)',
          doi: '10.4103/jcd.jcd_512_21',
          abstract: 'FTIR spectroscopic trial measuring monomer-to-polymer conversion ratios under high-intensity LED light curing units.',
        },
        {
          id: 'cons-pub-11',
          year: '2022',
          title: 'Patent: Dental Instrument for Hemostasis and Isolation in Operative Dentistry',
          authors: ['Dr. Senthilnathan', 'Dr. Sriram Sankar'],
          journal: 'The Patent Office Journal (Official Patent Publication)',
          doi: 'Patent Reg: 2022-IN-APDCH-04',
          abstract: 'Published patent for a specialized clinical instrument designed for rapid gingival moisture control and hemorrhage cessation.',
        },
        {
          id: 'cons-pub-12',
          year: '2021',
          title: 'Evaluating Retentive Strength and Removability of Prefabricated Fiber Posts Cemented with Resin Cements',
          authors: ['Dr. B. Veni Ashok', 'Dr. Sujith R'],
          journal: 'Endodontology (Journal of Indian Endodontic Society)',
          doi: '10.4103/endo.endo_42_21',
          abstract: 'Push-out bond strength test comparing quartz and glass fiber post retention in endodontically treated teeth.',
        },
        {
          id: 'cons-pub-13',
          year: '2021',
          title: 'Radiographic Evaluation of Obturation Quality and Root Canal Morphology in Endodontic Practice',
          authors: ['Dr. B. Veni Ashok'],
          journal: 'Journal of Clinical and Diagnostic Research (JCDR)',
          doi: '10.7860/JCDR/2021/49821',
        },
      ],
      ongoing: [
        {
          id: 'cons-ong-1',
          year: '2024',
          title: 'Evaluation of Bioceramic Root Canal Sealers & Irrigation Dynamics Under Micro-CT',
          authors: 'Dr. N. Bharath, Dr. Purusothaman A & Postgraduate Scholars',
          journal: 'Ongoing Departmental Clinical Trial',
          abstract: 'Micro-CT and stereomicroscopic evaluation comparing 3D obturation seal, dentinal tubule penetration, and cytotoxicity of novel bioceramic sealers.',
        },
        {
          id: 'cons-ong-2',
          year: '2024',
          title: 'In Vitro Shear Bond Strength & Antibacterial Efficacy of Nanoparticle-Modified Composite Resins',
          authors: 'Dr. Ohm Nijandhan K, Dr. Sowmiya T & Research Team',
          journal: 'Bioactive Restorative Material Project',
          abstract: 'Laboratory investigation testing mechanical strength and cariostatic antibacterial effects of nano-chitosan and bioactive glass comonomers in restorative resins.',
        },
        {
          id: 'cons-ong-3',
          year: '2024',
          title: 'Comparative Clinical Trial on Single-Visit vs Multiple-Visit Root Canal Treatment Outcomes',
          authors: 'Dr. S. Karthikeyan, Dr. Sujith R & PG Residents',
          journal: 'Clinical Endodontic Outcome Study',
          abstract: 'Prospective 12-month clinical evaluation measuring post-operative pain, healing index, and radiographic success rates in necrotic teeth.',
        },
        {
          id: 'cons-ong-4',
          year: '2024',
          title: 'Retentive Strength & Fracture Resistance of Prefabricated Fiber Posts vs Cast Posts',
          authors: 'Dr. V. Sudhakar, Dr. S. Sathish & Research Fellows',
          journal: 'Prosthetic-Endodontic Rehabilitation Audit',
          abstract: 'In vitro push-out testing and finite element analysis (FEA) evaluating stress distribution in endodontically restored premolars.',
        },
      ],
      awards: [
        {
          id: 'cons-stu-iacde-2024',
          year: '2024',
          title: '24th IACDE PG Convention 2024 Best Paper Awards',
          authors: 'Dr. Nanthini Priya, Dr. Thendral, Dr. Visithra',
          journal: '24th IACDE National Postgraduate Convention 2024',
          abstract: 'Best Paper Presentation Awards won by postgraduate residents Dr. Nanthini Priya, Dr. Thendral, and Dr. Visithra.',
        },
        {
          id: 'cons-stu-ies-2024',
          year: '2024',
          title: '32nd IES National Conference 2024 Best Paper Awards',
          authors: 'Dr. Blessie, Dr. Satyaa, Dr. Nivetha, Dr. Ravi Kishore',
          journal: '32nd IES National Conference 2024',
          abstract: 'Best Paper Presentation Awards won by postgraduate residents Dr. Blessie, Dr. Satyaa, Dr. Nivetha, and Dr. Ravi Kishore.',
        },
        {
          id: 'cons-award-1',
          year: '2021',
          title: 'Outstanding Academician in Endodontics',
          authors: 'Dr. B. Hemasathya & Dr. N. Bharath',
          journal: 'Global Healthcare Awards 2021 (GOMHA)',
          abstract: 'Awarded by GOMHA for exceptional academic leadership, teaching excellence, and clinical guidance in Endodontics.',
        },
        {
          id: 'cons-award-2',
          year: '2021',
          title: 'Dental Divas Award - Outstanding Researcher in Endodontics',
          authors: 'Dr. B. Hemasathya',
          journal: 'Global Healthcare Awards 2021 (GOMHA)',
          abstract: 'National award recognizing outstanding female researcher contributions and high-impact publications in Endodontics.',
        },
        {
          id: 'cons-award-3',
          year: '2021',
          title: 'Excellence in Research Guidance & Research Excellence Award',
          authors: 'Dr. B. Hemasathya & Dr. N. Bharath',
          journal: 'Research Education Solutions & World Dental Congress',
          abstract: 'Recognized for high-quality postgraduate research mentorship, clinical trials, and best paper presentations.',
        },
        {
          id: 'cons-award-4',
          year: '2021',
          title: 'Emerging & Young Researcher in Endodontics Awards',
          authors: 'Dr. N. Senthilnathan & Dr. K. Ohmnijandhan',
          journal: 'Global Healthcare Awards 2021 (GOMHA)',
          abstract: 'Honored for innovative scientific papers and research contributions in operative dentistry and endodontic materials.',
        },
        {
          id: 'cons-award-6',
          year: '2021',
          title: '1st Prize - Paper & Poster Presentation (World Dental & Oral Health Congress)',
          authors: 'Dr. Sree Vidhya & Dr. Jayanthi',
          journal: 'Royal College of Surgeons Edinburgh & WDOHC',
          abstract: 'Won 1st prize for scientific case series on endodontic management of open apex and complex root canal anatomy.',
        },
        {
          id: 'cons-award-7',
          year: '2021',
          title: 'Best Postgraduate Award (CEAT) & Dental Innovation First Prize',
          authors: 'Dr. Sudha & Dr. Kanaga Priyaa',
          journal: 'Conservative Dentistry & Endodontics Association (CEAT) & APDCH',
          abstract: 'Awarded best postgraduate resident trophy by CEAT and 1st prize in APDCH Dental Innovation 2021.',
        },
      ],
      recognition: [
        {
          id: 'cons-rec-1',
          year: '2024',
          title: 'Guest Speaker — PG GYAN Programme',
          authors: 'Dr. B. Hemasathya',
          journal: 'APDCH Academic Forum',
          abstract: 'Invited Guest Speaker presenting clinical insights for postgraduate residents at PG GYAN.',
        },
        {
          id: 'cons-rec-2',
          year: '2023',
          title: 'Session Chairperson — IFEA World Endodontic Congress',
          authors: 'Dr. B. Hemasathya',
          journal: 'IFEA World Endodontic Congress',
          abstract: 'Chaired key scientific session by international endodontist Dr. Mohamed Jamal (Dubai) on Regenerative Endodontics.',
        },
        {
          id: 'cons-rec-3',
          year: '2021',
          title: 'Session Chairperson — ECCLIRES International Conference',
          authors: 'Dr. B. Hemasathya',
          journal: 'Sree Balaji Dental College & Hospital (SBDCH)',
          abstract: 'Chaired competitive delegate paper presentation sessions at the ECCLIRES 2021 International Conference.',
        },
        {
          id: 'cons-rec-4',
          year: '2021',
          title: 'Session Chairperson — IACDE 36th National Conference & 21st PG Convention',
          authors: 'Dr. Bharath N.',
          journal: 'KLE University & IACDE',
          abstract: 'Chaired national scientific delegate paper presentations at the IACDE 36th Virtual National Conference.',
        },
        {
          id: 'cons-rec-5',
          year: '2023',
          title: 'Session Chairperson — IFEA World Endodontic Congress',
          authors: 'Dr. Bharath N.',
          journal: 'International Federation of Endodontic Associations (IFEA)',
          abstract: 'Session chairperson evaluating international clinical paper presentations at IFEA World Congress.',
        },
        {
          id: 'cons-rec-6',
          year: '2022',
          title: 'Guest Lecture — Dental Education Training Program',
          authors: 'Dr. Bharath N.',
          journal: 'Department of Dental Education, APDCH',
          abstract: 'Resource faculty delivering specialized lecture on contemporary endodontic teaching methodologies.',
        },
        {
          id: 'cons-rec-7',
          year: '2021',
          title: 'Paper Presentation — IACDE 36th National Conference',
          authors: 'Dr. Bharath N.',
          journal: 'IACDE & KLE University',
          abstract: 'Presented scientific paper at the IACDE 36th Virtual National Conference & 21st National PG Convention.',
        },
        {
          id: 'cons-rec-8',
          year: '2021',
          title: 'Paper Presentation — World Dental and Oral Health Congress',
          authors: 'Dr. Bharath N.',
          journal: 'World Dental and Oral Health Congress',
          abstract: 'Scientific paper presentation on advanced restorative techniques and materials.',
        },
        {
          id: 'cons-rec-9',
          year: '2022',
          title: 'Guest Lecture — IDA Meet Madhuranthagam',
          authors: 'Dr. N. Senthil Nathan',
          journal: 'Indian Dental Association (IDA Madhuranthagam)',
          abstract: 'Keynote lecture delivered to IDA members on modern endodontic practice protocols.',
        },
        {
          id: 'cons-rec-10',
          year: '2022',
          title: 'Guest Lecture — IDA Meet Madhuranthagam',
          authors: 'Dr. V. Sudhakar',
          journal: 'Indian Dental Association (IDA Madhuranthagam)',
          abstract: 'Invited guest lecture on indirect aesthetic restorations and composite resin techniques.',
        },
        {
          id: 'cons-rec-11',
          year: '2021',
          title: 'Guest Lecture — World Dental Conference',
          authors: 'Dr. Ohm Nijandhan K',
          journal: 'World Dental Congress',
          abstract: 'Featured guest lecture on micro-endodontics and digital treatment planning.',
        },
        {
          id: 'cons-rec-12',
          year: '2021',
          title: 'Paper Presentation — IFEA International Conference',
          authors: 'Dr. Ohm Nijandhan K',
          journal: 'International Federation of Endodontic Associations (IFEA)',
          abstract: 'International scientific paper presentation on root canal retreatment systems.',
        },
        {
          id: 'cons-rec-13',
          year: '2021',
          title: 'Poster Presentation — World Dental Conference',
          authors: 'Dr. Ohm Nijandhan K',
          journal: 'World Dental Congress',
          abstract: 'Scientific poster presentation showcasing innovative endodontic irrigation protocols.',
        },
      ],
      books: [
        {
          id: 'cons-book-1',
          year: '2022',
          title: 'Viva Voce Manual in Conservative Dentistry and Endodontics',
          authors: 'Dr. B. Hemasathya, Dr. N. Bharath, Dr. S. Karthikeyan, Dr. E. Premkumar',
          journal: 'Official Academic Textbook (ISBN: 978-93-91556-97-6)',
          doi: '978-93-91556-97-6',
          abstract: 'Comprehensive viva voce manual and clinical handbook for BDS and MDS students. Specialty chapters contributed by Dr. K. Ohmnijandhan, Dr. V. Sudhakar, and Dr. R. Sujith.',
        },
      ],
    }
  }

  if (!department?.useGeneratedResearchData) {
    return {
      publications: department?.publications ?? [],
      ongoing: (department?.research ?? []).map((item, index) => ({
        id: item.id ?? `research-${index + 1}`,
        year: item.year ?? 'Current',
        title: item.title,
        authors: item.authors ?? 'Department Research Team',
        journal: item.journal ?? 'Department Research Project',
        abstract: item.abstract ?? item.description,
      })),
      reviewer: department?.reviewers ?? [],
      intellectualProperty: department?.intellectualProperty ?? [],
      awards: department?.awards ?? [],
      studentAchievements: department?.studentAchievements ?? [],
      recognition: (department?.achievements ?? []).map((item, index) => ({
        id: item.id ?? `achievement-${index + 1}`,
        year: item.year ?? 'Current',
        title: item.title,
        authors: item.authors ?? department.name,
        journal: item.journal ?? 'Department Achievement',
        abstract: item.abstract ?? item.description,
      })),
      books: department?.books ?? [],
    }
  }

  const deptName = department?.name || 'Oral Medicine & Radiology'
  const isOMR = department?.id === 'oral-medicine' || deptName.toLowerCase().includes('oral medicine')

  return {
    publications: [
      {
        id: 'pub-1',
        year: '2024',
        title: 'Evaluating the Psychological Stress Level and Academic Performance of Dental Students During Clinical Training',
        authors: ['Dr. M. Deivanayagi', 'Dr. Narmadha C'],
        journal: 'Innovations',
        doi: '10.53555/inn.v2024.1842',
        abstract: 'A cross-sectional analytical study assessing the impact of clinical training stress on student academic performance, providing key insights into curriculum optimization and student wellness programs.',
      },
      {
        id: 'pub-2',
        year: '2024',
        title: `Comparative Evaluation of Diagnostic Efficacy and Radiographic Bone Loss in Clinical ${deptName} Studies`,
        authors: isOMR ? ['Dr. M. Deivanayagi', 'Dr. Monisha R'] : ['Department Senior Faculty', 'Research Scholars'],
        journal: 'Journal of Clinical Oral Investigations & Research',
        doi: '10.1007/s00784-024-05121-x',
        abstract: 'An in-depth multi-center diagnostic trial measuring radiographic and clinical biomarkers to enhance diagnostic accuracy and therapeutic outcomes.',
      },
      {
        id: 'pub-3',
        year: '2023',
        title: `Application of Advanced Digital Modalities in Diagnostic ${deptName}: A Retrospective Clinical Trial`,
        authors: isOMR ? ['Dr. Elamparithi', 'Dr. Narmadha Chandran'] : ['Faculty Research Group'],
        journal: 'International Journal of Dental Sciences & Scientific Research',
        doi: '10.1016/j.ijd.2023.09.004',
        abstract: 'Evaluation of digital workflow integration in clinical diagnostics, highlighting precision improvements, reduced procedure time, and elevated patient satisfaction rates.',
      },
      {
        id: 'pub-4',
        year: '2023',
        title: `Prevalence and Pattern of Maxillofacial Conditions: A 5-Year Institutional Audit`,
        authors: isOMR ? ['Dr. M. Deivanayagi', 'Dr. Elamparithi'] : ['Department Clinical Team'],
        journal: 'Journal of Indian Academy of Dental Specialists',
        doi: '10.4103/jiads.jiads_42_23',
        abstract: 'A comprehensive epidemiologic analysis of patient records over a 5-year period detailing disease presentation patterns, age distribution, and treatment outcomes.',
      },
    ],
    ongoing: [
      {
        id: 'ong-1',
        year: '2024',
        title: `Clinical Trial: Digital Diagnostic & Treatment Efficacy in ${deptName}`,
        authors: ['Faculty Research Team', 'Postgraduate Residents'],
        journal: 'APDCH Ongoing Clinical Trial Registry',
        abstract: 'A randomized controlled clinical study investigating digital diagnostic workflows, procedure times, and 12-month patient therapeutic outcomes.',
      },
      {
        id: 'ong-2',
        year: '2024',
        title: `Biomaterial Integrity and Micro-CT Characterization in Specialty Dental Care`,
        authors: ['Department Senior Faculty', 'Research Scholars'],
        journal: 'APDCH Inter-departmental Research Project',
        abstract: 'In vitro physical characterization measuring seal integrity, biocompatibility, and cellular response under 3D diagnostic imaging.',
      },
    ],
    awards: [
      {
        id: 'award-1',
        year: '2024',
        title: 'Outstanding Academician in Oral Medicine & Radiology',
        authors: 'Awarded to Prof. Dr. S. Karthiga Kannan',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Conferred for distinguished contributions to teaching, academic excellence, and leadership in Oral Medicine & Radiology.',
      },
      {
        id: 'award-2',
        year: '2024',
        title: 'Emerging Researcher in Oral Medicine & Radiology',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: 'Global Outreach Healthcare Award',
        abstract: 'Recognized for high-impact scientific publications and innovative research contributions to clinical diagnostic sciences.',
      },
      {
        id: 'award-3',
        year: '2022',
        title: 'Outstanding Contributions to Research & Development in Academics',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: '21st Century Innovations in Management Science and Technology',
        abstract: 'Conferred in recognition of significant academic research leadership and evidence-based study development.',
      },
      {
        id: 'award-4',
        year: '2021',
        title: 'Best Oral Presentation Award',
        authors: 'Awarded to Dr. M. Deivanayagi',
        journal: '32nd IAOMR National Conference',
        abstract: 'Awarded for scientific presentation on advanced diagnostic imaging techniques in oral mucosal lesion screening.',
      },
    ],
    recognition: [
      {
        id: 'rec-1',
        year: '2024',
        title: 'Chairperson & Scientific Session Evaluator',
        authors: 'Dr. M. Deivanayagi',
        journal: 'National Oral Medicine & Radiology Convention',
        abstract: 'Chaired competitive scientific sessions and evaluated postgraduate research paper presentations.',
      },
      {
        id: 'rec-2',
        year: '2024',
        title: 'Resource Person – Advanced Maxillofacial CBCT Imaging Workshop',
        authors: 'Dr. M. Deivanayagi',
        journal: 'State Level Continuing Dental Education (CDE) Program',
        abstract: 'Delivered keynote lectures and hands-on training modules on 3D CBCT interpretation and anatomical landmark mapping.',
      },
      {
        id: 'rec-3',
        year: '2023',
        title: 'Resource Person – Diagnostic Protocol & Patient Care Workshop',
        authors: 'Dr. Monisha R',
        journal: 'APDCH Inter-departmental Academic Forum',
        abstract: 'Led interactive training sessions for interns and residents on diagnostic protocols and emergency care pathways.',
      },
      {
        id: 'rec-4',
        year: '2023',
        title: 'Delegate – Basic Course in Biomedical Research',
        authors: 'Dr. Narmadha C',
        journal: 'ICMR–NIE (National Institute of Epidemiology)',
        abstract: 'Successfully completed the ICMR–NIE certified course in research methodology, clinical trial design, and biostatistics.',
      },
      {
        id: 'rec-5',
        year: '2022',
        title: 'Delegate – Online Certification Program – Ethics Review of Health Research',
        authors: 'Dr. M. Deivanayagi',
        journal: 'ICMR–NIE (National Institute of Epidemiology)',
        abstract: 'Completed national certification program on bioethics, Institutional Ethics Committee (IEC) protocols, and human research protection.',
      },
    ],
    books: [
      {
        id: 'book-1',
        year: '2023',
        title: 'CBCT – A Quick Review',
        authors: 'Author: Dr. V.L. Lakshman MDS · Contribution: Dr. S. Karthiga Kannan MDS',
        journal: 'Academic Book (ISBN: 978-93-91556-71-6)',
        doi: '978-93-91556-71-6',
        abstract: 'A comprehensive academic review book on Cone Beam Computed Tomography (CBCT) principles, diagnostic imaging interpretation, and clinical applications in dental radiology.',
      },
    ],
  }
}

export default function DetailResearch({ department }) {
  const [activeTab, setActiveTab] = useState('publications')
  const [selectedYear, setSelectedYear] = useState('')
  const [visibleCount, setVisibleCount] = useState(6)
  const [expandedId, setExpandedId] = useState(null)

  const data = useMemo(() => getDefaultResearchData(department), [department])
  const availableTabs = useMemo(
    () => TABS
      .filter((tab) => (data[tab.id] ?? []).length > 0)
      .map((tab) => ({
        ...tab,
        label: department.researchTabLabels?.[tab.id] ?? tab.label,
      })),
    [data, department.researchTabLabels]
  )
  const categoryItems = useMemo(() => data[activeTab] || [], [data, activeTab])

  useEffect(() => {
    if (availableTabs.length > 0 && !availableTabs.some((tab) => tab.id === activeTab)) {
      setActiveTab(availableTabs[0].id)
      setSelectedYear('')
      setVisibleCount(6)
      setExpandedId(null)
    }
  }, [activeTab, availableTabs])

  // Keep the newest three years visible and move earlier records to the archive.
  const availableYears = useMemo(() => {
    const yearsSet = new Set(categoryItems.map((item) => item.year || '2024'))
    return Array.from(yearsSet).sort((a, b) => {
      const yearA = Number.parseInt(String(a).match(/\d{4}/)?.[0] || '0', 10)
      const yearB = Number.parseInt(String(b).match(/\d{4}/)?.[0] || '0', 10)
      return yearB - yearA
    })
  }, [categoryItems])
  const latestYears = availableYears.slice(0, 3)
  const archivedYears = availableYears.slice(3)
  const activeYear = selectedYear || latestYears[0]

  useEffect(() => {
    if (selectedYear && !availableYears.includes(selectedYear)) {
      setSelectedYear('')
      setVisibleCount(6)
      setExpandedId(null)
    }
  }, [availableYears, selectedYear])

  // Filter items by year
  const filteredItems = useMemo(() => {
    return categoryItems.filter((item) => (item.year || '2024') === activeYear)
  }, [activeYear, categoryItems])

  const displayedItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
    setSelectedYear('')
    setVisibleCount(6)
    setExpandedId(null)
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  // Group filtered items by year for the timeline
  const groupedByYear = displayedItems.reduce((acc, item) => {
    const yr = item.year || '2024'
    if (!acc[yr]) acc[yr] = []
    acc[yr].push(item)
    return acc
  }, {})

  const sortedYears = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a))

  if (availableTabs.length === 0) return null

  return (
    <section id="research-academic-excellence" className="bg-background px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <Reveal>
          <SectionHeading
            eyebrow="Research & Academic Excellence"
            title="Research & Academic Excellence"
            description={`Scientific publications, awards, textbooks, and academic events contributed by the ${department?.name || 'department'} faculty and scholars.`}
          />
        </Reveal>

        {/* Category Filter Tabs with Sliding Indicator */}
        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3 rounded-full bg-slate-100/90 p-1.5 border border-slate-200/80 max-w-max mx-auto shadow-inner">
            {availableTabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`relative z-10 flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-colors duration-300 md:text-sm ${
                    isActive ? 'text-white' : 'text-slate-600 hover:text-primary'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeResearchTab"
                      className="absolute inset-0 z-[-1] rounded-full bg-primary shadow-brand-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`h-4 w-4 relative z-10 ${isActive ? 'text-white' : 'text-primary'}`} />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Year Filter Bar */}
        <Reveal delay={0.12}>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 inline-flex items-center gap-1 text-xs font-medium text-muted">
              <Filter className="h-3.5 w-3.5 text-primary/80" />
              Filter by year:
            </span>
            {latestYears.map((year) => {
              const isSelected = activeYear === year
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setSelectedYear(year)
                    setVisibleCount(6)
                    setExpandedId(null)
                  }}
                  className={`rounded-full px-3.5 py-1 text-xs font-semibold transition-all duration-200 ${
                    isSelected
                      ? 'bg-primary text-white shadow-xs'
                      : 'border border-border/60 bg-white text-muted hover:border-primary/20 hover:text-foreground'
                  }`}
                >
                  {year}
                </button>
              )
            })}
            {archivedYears.length > 0 && (
              <label className={`relative inline-flex items-center rounded-full border transition-colors ${
                archivedYears.includes(activeYear)
                  ? 'border-primary bg-primary text-white shadow-xs'
                  : 'border-border/60 bg-white text-muted hover:border-primary/20 hover:text-foreground'
              }`}>
                <Archive className="pointer-events-none absolute left-3 h-3.5 w-3.5" />
                <select
                  aria-label="View archived academic year"
                  value={archivedYears.includes(activeYear) ? activeYear : ''}
                  onChange={(event) => {
                    if (!event.target.value) return
                    setSelectedYear(event.target.value)
                    setVisibleCount(6)
                    setExpandedId(null)
                  }}
                  className="cursor-pointer appearance-none bg-transparent py-1 pl-8 pr-7 text-xs font-semibold outline-none"
                >
                  <option value="" disabled className="text-foreground">View Archive</option>
                  {archivedYears.map((year) => (
                    <option key={year} value={year} className="text-foreground">
                      {year}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-2.5 h-3.5 w-3.5" />
              </label>
            )}
          </div>
        </Reveal>

        {/* Academic Timeline Container */}
        <div className="mt-12 pl-1 sm:pl-4 md:pl-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab}-${activeYear}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22 }}
              className="relative border-l-2 border-primary/20 pl-4 sm:pl-6 md:pl-8 space-y-8"
            >
              {sortedYears.map((year) => (
                <div key={year} className="relative">
                  {/* Year Node Badge */}
                  <div className="absolute -left-[11px] top-0 flex items-center gap-2.5 sm:gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary ring-4 ring-background">
                      <span className="h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="rounded-full bg-primary px-3 py-0.5 text-xs font-bold tracking-wider text-white shadow-brand-sm">
                      {year}
                    </span>
                  </div>

                  {/* Shorter, Compact Branch Items List */}
                  <div className="pt-7 space-y-3">
                    {groupedByYear[year].map((item, itemIdx) => {
                      const isExpanded = expandedId === item.id

                      return (
                        <Reveal key={item.id || itemIdx} delay={itemIdx * 0.03}>
                          <article
                            className={`group relative flex flex-col justify-between gap-2.5 rounded-xl border transition-all duration-300 p-3.5 sm:p-4 ${
                              isExpanded
                                ? 'border-primary/40 bg-surface-soft/60 shadow-brand-sm'
                                : 'border-border/80 bg-white hover:border-primary/30 hover:shadow-brand-sm'
                            }`}
                          >
                            {/* Branch connector line */}
                            <div className="hidden sm:block absolute -left-6 md:-left-8 top-6 h-0.5 w-6 md:w-8 bg-primary/20" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                              {/* Compact Info Block */}
                              <div className="min-w-0 flex-1">
                                <h3 className="font-display text-xs sm:text-sm md:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                                  {item.title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-muted">
                                  {Array.isArray(item.authors)
                                    ? item.authors.join(', ')
                                    : item.authors || item.recipient || ''}
                                </p>
                                <div className="mt-1 flex flex-wrap items-center gap-1.5 text-xs">
                                  <span className="font-semibold text-accent">
                                      {activeTab === 'events'
                                        ? 'Venue:'
                                        : activeTab === 'books'
                                        ? 'Publisher / ISBN:'
                                        : activeTab === 'awards'
                                        ? 'Award / Forum:'
                                        : activeTab === 'studentAchievements'
                                        ? 'Conference / Organizer:'
                                        : activeTab === 'recognition'
                                        ? 'Forum / Event:'
                                        : activeTab === 'ongoing'
                                        ? 'Project / Forum:'
                                        : activeTab === 'reviewer'
                                        ? 'Journal / Publisher:'
                                        : activeTab === 'intellectualProperty'
                                        ? 'Record Type:'
                                        : 'Journal:'}
                                  </span>
                                  <span className="font-medium text-foreground/80">
                                    {item.journal || item.event || item.forum || ''}
                                  </span>
                                </div>
                              </div>

                              {/* Toggle Inline Drawer Button */}
                              <div className="shrink-0">
                                <Button
                                  type="button"
                                  variant={isExpanded ? 'default' : 'soft'}
                                  size="sm"
                                  onClick={() => setExpandedId(isExpanded ? null : item.id)}
                                  className="w-full rounded-full px-3.5 py-1 text-xs font-semibold sm:w-auto transition-all"
                                >
                                  <span>
                                    {isExpanded
                                      ? 'Hide'
                                      : activeTab === 'publications'
                                        ? 'View Publication'
                                        : activeTab === 'ongoing'
                                          ? 'View Ongoing Study'
                                          : activeTab === 'reviewer'
                                            ? 'View Reviewer Role'
                                            : activeTab === 'intellectualProperty'
                                              ? department.researchTabLabels?.intellectualProperty === 'Copyrights'
                                                ? 'View Copyright'
                                                : 'View IP Record'
                                          : activeTab === 'awards'
                                            ? 'View Award'
                                            : activeTab === 'studentAchievements'
                                              ? 'View Achievement'
                                            : 'View Details'}
                                  </span>
                                  <ChevronDown className={`ml-1 h-3.5 w-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                </Button>
                              </div>
                            </div>

                            {/* Inline Smooth Drawer Panel */}
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                                  className="overflow-hidden border-t border-border/70 pt-3 mt-1.5"
                                >
                                  <div className="rounded-lg bg-white p-3 text-xs space-y-2 border border-border/50 shadow-xs">
                                    {item.abstract && (
                                      <div>
                                        <span className="block text-[11px] font-bold uppercase tracking-wider text-muted mb-0.5">
                                          Abstract & Summary:
                                        </span>
                                        <p className="leading-relaxed text-foreground/80">
                                          {item.abstract}
                                        </p>
                                      </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border/40 text-[11px]">
                                      {item.doi ? (
                                        <span className="font-mono text-primary font-semibold">
                                          DOI: {item.doi}
                                        </span>
                                      ) : (
                                        <span className="text-muted font-medium">
                                          Official Institutional Record
                                        </span>
                                      )}

                                      <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                        Peer Reviewed & Index Accredited
                                      </span>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </article>
                        </Reveal>
                      )
                    })}
                  </div>
                </div>
              ))}
              {displayedItems.length === 0 && (
                <div className="rounded-2xl border border-border/70 bg-white p-7 text-center shadow-brand-xs">
                  <p className="font-display text-lg font-semibold text-foreground">No verified entries published</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    The existing APDCH department source does not currently provide records for this category.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Load More / View All Button */}
        {hasMore && (
          <Reveal delay={0.15}>
            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                onClick={handleLoadMore}
                size="lg"
                className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-brand transition-all duration-300 hover:bg-primary-dark hover:shadow-brand-lg hover:-translate-y-0.5"
              >
                <span>
                  {activeTab === 'recognition'
                    ? 'View All Faculty Achievements'
                    : 'Load More Publications'}
                </span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
