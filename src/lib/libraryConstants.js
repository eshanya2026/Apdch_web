export const LIBRARY_HERO = {
  eyebrow: 'LIBRARY · LEARNING RESOURCE CENTRE',
  title: 'Knowledge That Powers Learning',
  description:
    'The APDCH Library serves as a learning resource centre supporting academic, clinical and research activities of students and faculty.',
  image:
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80&auto=format&fit=crop',
}

export const LIBRARY_HIGHLIGHTS = [
  { value: '8,700 sq. ft.', label: 'Library Area' },
  { value: '320', label: 'Seating Capacity' },
  { value: 'Nearly 6,000', label: 'Books' },
  { value: '25', label: 'Computer Systems' },
]

export const LIBRARY_OVERVIEW = {
  eyebrow: 'Library as a Learning Resource Centre',
  title: 'A Space for Learning, Research & Discovery',
  paragraphs: [
    'APDCH has a spacious library spread over 8,700 sq. ft., with seating capacity for 320 persons. It houses nearly 6,000 books, around 65 national and international journals, and approximately 150 CDs/DVDs and other periodicals.',
    'The collection is organized using the Dewey Decimal Classification (DDC) system. Books and periodicals are barcoded, and WEBOPAC enables users to search the collection by author, title, subject and keyword.',
    'The library is fully automated, Wi-Fi enabled, and provides 25 computer systems with printers for users. It is also part of the EBSCO consortium of The Tamil Nadu Dr. M.G.R. Medical University and DVL Digital Library.',
    'The library is governed by the institutional Library Advisory Committee ensuring continuous resource enrichment, with 24×7 CCTV surveillance installed across all wings for student safety and resource security.',
  ],
}

export const LIBRARY_COLLECTION = [
  { value: '6,000', label: 'Books', icon: 'BookOpen' },
  { value: '1,846', label: 'Titles', icon: 'Layers' },
  { value: '28', label: 'National Journals', icon: 'Newspaper' },
  { value: '35', label: 'International Journals', icon: 'Globe' },
  { value: '730', label: 'E-Journals', icon: 'FileText' },
  { value: '150', label: 'E-Books', icon: 'Bookmark' },
  { value: '300', label: 'Videos', icon: 'Video' },
  { value: '80', label: 'Dissertations', icon: 'GraduationCap' },
]

export const COMPLETE_ILMS_STATS = [
  { metric: 'Classification System', detail: 'Dewey Decimal Classification (DDC)' },
  { metric: 'Cataloguing & Discovery', detail: 'WEBOPAC — Search by Author, Title, Subject & Keyword' },
  { metric: 'Circulation System', detail: 'Barcoded Books & Periodicals' },
  { metric: 'Authors', detail: '1,722', isNumber: true },
  { metric: 'Non-Book Materials', detail: '1,650', isNumber: true },
  { metric: 'Back Volumes', detail: '1,750', isNumber: true },
  { metric: 'Newspapers', detail: '4', isNumber: true },
  { metric: 'DVD / CD-ROMs', detail: '150', isNumber: true },
  { metric: 'Subscribed Resource', detail: 'AVAGS Info System' },
]

export const DIGITAL_RESOURCES_TABS = {
  'e-journals': {
    label: 'E-Journals',
    description: 'Peer-reviewed national, international, and open-access dental & medical journals.',
    items: [
      { name: 'Nature Publishing', desc: 'World-leading peer-reviewed multidisciplinary & dental research.', url: 'https://www.nature.com' },
      { name: 'BMC Oral Health', desc: 'Open access journal covering all aspects of oral health & dental diseases.', url: 'https://bmcoralhealth.biomedcentral.com' },
      { name: 'Springer Open Journals', desc: 'High-impact open access clinical, medical, and dental titles.', url: 'https://www.springeropen.com/journals' },
      { name: 'Wiley Open Journals', desc: 'Global scientific and clinical dental publications repository.', url: 'https://onlinelibrary.wiley.com' },
      { name: 'Spandidos Open Journals', desc: 'International oncology, biological, and clinical pathology research.', url: 'https://www.spandidos-publications.com' },
      { name: 'Academia Open Access', desc: 'Academic platform for sharing dental theses and faculty papers.', url: 'https://www.academia.edu' },
      { name: 'BDA Open Access', desc: 'British Dental Association open access research publications.', url: 'https://www.bda.org/dentists/education-learning/library' },
      { name: 'BMJ Journals', desc: 'British Medical Journal dental, oral medicine, and clinical archives.', url: 'https://journals.bmj.com' },
      { name: 'Medical Science Journals', desc: 'ScienceDirect & Elsevier peer-reviewed medical and dental publications.', url: 'https://www.sciencedirect.com' },
      { name: 'Medical Journals', desc: 'PubMed Central & NCBI international open access medical journal repository.', url: 'https://www.ncbi.nlm.nih.gov/pmc/' },
      { name: 'AMEDEO Medical Journals', desc: 'The Medical Literature Guide with weekly specialty literature updates.', url: 'http://www.amedeo.com' },
      { name: 'OMICS Open Journals', desc: 'Peer-reviewed open access scientific dental and medical conference journals.', url: 'https://www.omicsonline.org' },
      { name: 'Health Magazines', desc: 'Global preventive health, clinical hygiene, and dental wellness periodicals.', url: 'https://www.healthline.com' },
    ],
  },
  'e-books': {
    label: 'E-Books',
    description: 'Online textbook repositories, question banks, and statutory guidelines.',
    items: [
      { name: 'Elsevier Open Access', desc: 'Comprehensive medical and surgical open access textbooks.', url: 'https://www.elsevier.com/open-access/open-access-books' },
      { name: 'WHO Publications', desc: 'World Health Organization global oral health reports & monographs.', url: 'https://www.who.int/publications' },
      { name: 'DCI Publications', desc: 'Dental Council of India statutory curricula, dental acts & norms.', url: 'https://dciindia.gov.in' },
      { name: 'TN Dr. M.G.R. Medical University Question Bank', desc: 'Official previous year question papers for BDS & MDS degree exams.', url: 'https://www.tnmgrmu.ac.in' },
      { name: 'CDE Dental Education', desc: 'Continuing Dental Education guidelines and accredited learning modules.', url: 'https://dciindia.gov.in/CDE.aspx' },
      { name: 'E-Books Directory', desc: 'Categorized directory of free dental, medical, and biology e-books.', url: 'https://www.e-booksdirectory.com' },
      { name: 'Library Genesis', desc: 'Scientific knowledge repository for articles, research books, and clinical guides.', url: 'https://libgen.is' },
    ],
  },
  'e-learning': {
    label: 'E-Learning Databases',
    description: 'National digital repositories, virtual classrooms, and subscribed consortiums.',
    items: [
      { name: 'ShodhSindhu', desc: 'National consortia for higher education electronic resources by INFLIBNET.', url: 'https://ess.inflibnet.ac.in' },
      { name: 'Shodhganga', desc: 'A reservoir of Indian electronic theses and dissertations submitted to universities.', url: 'https://shodhganga.inflibnet.ac.in' },
      { name: 'National Digital Library of India', desc: 'Ministry of Education virtual repository of learning resources for Indian learners.', url: 'https://ndl.iitkgp.ac.in' },
      { name: 'NPTEL', desc: 'Online courses in basic sciences, biomedical sciences, and humanities by IITs.', url: 'https://nptel.ac.in' },
      { name: 'SWAYAM', desc: 'Free online education portal by the Government of India for self-paced learning.', url: 'https://swayam.gov.in' },
      { name: 'INFLIBNET', desc: 'Information and Library Network Centre connecting Indian universities.', url: 'https://www.inflibnet.ac.in' },
      { name: 'NMEICT', desc: 'National Mission on Education through Information & Communication Technology.', url: 'https://www.education.gov.in/technology-enabled-learning' },
      { name: 'E-PG Pathshala', desc: 'Postgraduate level interactive e-content across medical and life sciences.', url: 'https://epgp.inflibnet.ac.in' },
      { name: 'Tamil Virtual Academy', desc: 'Digital heritage, language resources, and cultural databases portal.', url: 'http://www.tamilvu.org' },
      { name: 'Encyclopedia', desc: 'Comprehensive online reference encyclopedia for historical and scientific facts.', url: 'https://www.britannica.com' },
      { name: 'AVAGS Info System', desc: 'Official subscribed institutional library management & info system resource.', url: 'https://www.avags.in' },
    ],
  },
}

export const LIBRARY_SERVICES_SECTION = {
  eyebrow: 'Library Services',
  title: 'Services Designed to Support Learning',
  description:
    'Dedicated academic assistance, resource circulation, and digital information sharing for faculty and students.',
  services: [
    {
      title: 'Circulation Service',
      description: 'Borrowing and returning library resources.',
      icon: 'BookOpenCheck',
    },
    {
      title: 'Reference Service',
      description: 'Assistance in locating relevant academic and reference materials.',
      icon: 'Search',
    },
    {
      title: 'Book Reservation',
      description: 'Facility for students to reserve books.',
      icon: 'Bookmark',
    },
    {
      title: 'Current Awareness Service',
      description: 'Updates for faculty and students through email.',
      icon: 'Bell',
    },
    {
      title: 'Digital Resource Sharing',
      description: 'Articles and e-resources shared through email and WhatsApp.',
      icon: 'Share2',
    },
    {
      title: 'Print & Reprographic Services',
      description: 'Printing and related reprographic facilities.',
      icon: 'Printer',
    },
  ],
  alsoAvailable: [
    'Spiral Binding',
    'Study Book Service',
    'Question Bank',
    'NPTEL E-Learning',
    'New Arrivals Display',
    'Library Orientation',
    'SMS/E-mail Alerts',
    'Library Exhibitions',
  ],
}

export const LIBRARY_FACILITIES = [
  {
    title: 'Web-OPAC',
    description: 'Online Public Access Catalogue for rapid author, title, and subject book discovery.',
  },
  {
    title: 'Digital Library',
    description: '25 multimedia computer systems with university consortium and e-resource access.',
  },
  {
    title: 'Book Section',
    description: 'Curated curriculum and specialty dental books classified under DDC.',
  },
  {
    title: 'Journal Section',
    description: 'National and international print journals and bound back-volume archives.',
  },
  {
    title: 'Audio-Video Section',
    description: 'Multimedia dental education CDs/DVDs and recorded surgical video lectures.',
  },
  {
    title: 'UG Students Reading Room',
    description: 'Spacious, air-conditioned study hall designed for undergraduate dental learners.',
  },
  {
    title: 'PG Students Reading Room',
    description: 'Quiet research environment tailored for postgraduate specialty scholars.',
  },
  {
    title: 'Faculty Reading Room',
    description: 'Dedicated reference and academic session preparation space for teaching faculty.',
  },
  {
    title: 'Scanning Facility',
    description: 'High-resolution scanning of study materials and anatomical illustrations.',
  },
  {
    title: 'Photocopying Facility',
    description: 'Available subject to copyright restrictions.',
  },
  {
    title: '24×7 CCTV Surveillance',
    description: 'High-definition security cameras ensuring complete safety and resource protection.',
  },
  {
    title: 'Library Advisory Committee',
    description: 'Institutional faculty committee ensuring continuous book and journal enrichment.',
  },
]

export const PRIMARY_LIBRARY_RULES = [
  'APDCH students and staff may use the library subject to its rules.',
  'ID card is compulsory.',
  'Biometric entry and exit are compulsory.',
  'Visitors require prior permission.',
  'Mobile phone use is prohibited.',
  'Computers and internet are for academic purposes.',
  'Marking or writing on books and journals is prohibited.',
  'Silence must be maintained inside the library.',
]

export const EXPANDED_LIBRARY_RULES = [
  {
    title: 'General Conduct & Discipline',
    rules: [
      'Strict silence must be maintained in the reading rooms and reference halls at all times.',
      'Personal belongings including bags, files, personal books, and umbrellas must be deposited in the property counter before entering.',
      'No eatables, beverages, or chewing gums are allowed inside any section of the library.',
      'Use of mobile phones for calls or loud audio is strictly prohibited; devices must remain on silent mode.',
      'Smoking, disorderly conduct, or sleeping inside the reading area is strictly prohibited.',
    ],
  },
  {
    title: 'Access & Membership',
    rules: [
      'All bona fide APDCH students and staff are eligible for library membership upon registration.',
      'Valid institutional smart ID card is mandatory for entry, book issue, and renewal transactions.',
      'Biometric authentication at entry and exit gates is compulsory for record-keeping and attendance tracking.',
      'Outside visitors, alumni, and guest scholars must obtain prior written permission from the Principal/Librarian before using library facilities.',
    ],
  },
  {
    title: 'Care of Books & Materials',
    rules: [
      'Marking, writing, underlining, tearing, or dog-earing of pages in books and journals is strictly prohibited.',
      'Users are advised to inspect books at the time of borrowing and report any pre-existing damage to the circulation desk.',
      'Unauthorized removal of library property or deliberate mutilation of resources will result in heavy fines and suspension of membership.',
      'Physical inspection of bags or files may be conducted by the library security staff at the exit checkpoint.',
    ],
  },
  {
    title: 'Computer Lab & E-Resource Ethics',
    rules: [
      'Digital library workstations and campus Wi-Fi are strictly intended for academic, clinical, and research literature searches.',
      'Downloading non-academic multimedia, playing video games, or tampering with computer settings/hardware is strictly forbidden.',
      'Users must comply with copyright, intellectual property, and institutional fair-use licensing agreements while downloading research papers.',
    ],
  },
]

export const CIRCULATION_RULES = {
  eyebrow: 'Borrowing & Circulation',
  title: 'Circulation Rules',
  description:
    'Comprehensive policies governing book borrowing quotas, renewal procedures, overdue fines, and material care.',
  keyPoints: [
    'Barcoded Smart ID Card is mandatory for all book issues and returns.',
    'Undergraduates (BDS): 2 books for 14 days.',
    'Postgraduates (MDS): 4 books for 14 days.',
    'Faculty Members: 6 books for 30 days.',
    'Books can be renewed once if no reservation exists.',
    'Overdue Fine: ₹5.00 per day per book after the due date.',
    'Lost/Damaged books must be replaced with the latest edition or double the replacement cost.',
    'Reference books, journals, CDs/DVDs, and dissertations are strictly for in-library reading.',
  ],
  detailedSections: [
    {
      title: 'Borrowing Limits & Loan Duration',
      items: [
        'Undergraduate Students (BDS): Up to 2 books for a loan duration of 14 days.',
        'Postgraduate Scholars (MDS): Up to 4 books for a loan duration of 14 days.',
        'Teaching Faculty: Up to 6 books for a duration of 30 days.',
        'Non-Teaching Staff: Up to 2 books for 14 days.',
      ],
    },
    {
      title: 'Renewal & Advance Reservation',
      items: [
        'Books may be renewed for an additional loan period provided there is no pending reservation by another user.',
        'Reservations for currently issued books can be placed directly through the WEBOPAC terminal.',
        'Reserved titles are held at the circulation desk for 2 consecutive working days.',
      ],
    },
    {
      title: 'Late Returns & Overdue Penalties',
      items: [
        'Overdue charge: ₹5.00 per book per day will be levied automatically starting the day after the due date.',
        'Continuous overdue defaults will result in temporary suspension of library privileges and clearance withhold.',
      ],
    },
    {
      title: 'Loss, Damage & Non-Circulating Assets',
      items: [
        'Lost materials must be replaced with the latest edition of the same title, or double the current catalog price plus overdue charges.',
        'Any page tearing or writing discovered on return will be charged to the last borrower.',
        'Reference copies, loose journal issues, bound back volumes, CDs/DVDs, and postgraduate dissertations cannot be checked out for external use.',
      ],
    },
  ],
}

export const LIBRARY_TIMINGS = [
  { day: 'Monday – Friday', timing: '08:00 AM – 06:00 PM' },
  { day: 'Saturday', timing: '08:00 AM – 04:00 PM' },
  { day: 'Sunday', timing: 'Holiday' },
]

export const LIBRARY_GALLERY = [
  {
    title: 'Reading Area',
    caption: 'Air-conditioned main reading hall with 320 seating capacity',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Book Collection',
    caption: 'Over 6,000 curriculum & specialty dental volumes organized under DDC',
    image: 'https://images.unsplash.com/photo-1507842229451-77b1a3979ad2?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Digital Library',
    caption: '25 high-speed multimedia workstations connected to university consortium',
    image: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Journal Section',
    caption: 'Current national and international dental journals & bound archives',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Computer & Research Area',
    caption: 'Dedicated research workstations with printing & scanning support',
    image: 'https://images.unsplash.com/photo-1532012164546-f432f2e3ddb5?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Quiet Study Bays',
    caption: 'Naturally lit, ergonomic cubicles for focused dissertation study',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80&auto=format&fit=crop',
  },
]
