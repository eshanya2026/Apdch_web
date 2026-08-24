import { Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Microscope, PlayCircle } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import GroupedDownloadGrid from '@/components/lms/GroupedDownloadGrid'
import VideoCarouselGrid from '@/components/lms/VideoCarouselGrid'

const TOPICS = [
  'Developmental disturbances of oral tissues',
  'Dental caries and pulpal pathology',
  'Oral microbial infections',
  'Cysts and tumours of the jaws',
  'Potentially malignant oral disorders',
  'Oral cancer and epithelial pathology',
  'Bone and salivary gland diseases',
  'Histopathology and diagnostic techniques',
]

const VIDEO_IDS = ['d-uFegNwlD0', 'ZSUERRj4bMs', '2UwAZ_ZIk4U', 'rFvTKoEN8_g', '-aHMvwtTC8M']

const PRESENTATIONS_2024_25 = [
  ['Concepts OfIntroduction To Tooth Morphology Health', '1xuRqbiGWzk1Vzf__vN7mnuHAHWQXkHzt'],
  ['Introduction To Oral Histology', '1Pkol5kR1m173s-hR9NT-gIQpyb8gP09O'],
  ['Definitions Terminologies', '1p2psPnmdNM0hiy_3xpL4NjvyGqtGAa3V'],
  ['Maxillary Central Incisor', '17Z0kbCAbvFZcWezVswfOhfQmt7xZzIAo'],
  ['Permanent Mandibular IncisorsSealant', '15_tSzRYC9LDhbF90FRDCEabTGLHDn3N4'],
  ['Dental Lamina', '1G8xyapx1Sm3HeG4_8ySa3phQJJntzcX9'],
  ['Bud Stage Cap Stage', '10Q2lPjIocV7LqkafQh3aXOwQRIBNV_iS'],
  ['Dev Of Tooth Early & Advanced Bell Stage', '1U2JDKDLKHAYleGDKy63bxhFUqUPbkqhg'],
  ['Root Formation', '1jXc0IAQq6Vpu8LKO3qaj5yF3YBioHIOo'],
  ['Maxillary Perm. Canine', '16dODQf93PQOKLnci_lxij5OcIaRe1TWt'],
  ['Enamel - Microscopic Structures', '15gj1aafHFwhwRqHeG2IJtgZgCacBapnH'],
  ['Life Cycle Of Ameloblast', '1llG9enFr0dG-86TG-uacrmHQNai0mW4Y'],
  ['Amelogenesis', '1IuPYlC1empbtbAFyUzPpx6Meta2INPWi'],
  ['Permanent Mandibular Canine', '1oel8b63J5WV8xS6cbYufNOBR5ulIu6cN'],
  ['Physical & Chemical Properties Of Dentin And Structure', '14LkjdVWnA_LEUbXmZK-UEKakGxisUw55'],
  ['Types Of Dentin', '1vC7Z283qHkN-9YO7ZB101bb47asaQtNG'],
  ['Dentin Age Changes', '112wlxbNEzuvDdZ9YKytBghjMY5I9iiWR'],
  ['Pulp', '16HY5ixYk80jZnix1C1NUDFazSK4GN3Qy'],
  ['Cementum', '1R4ElJPV5PZnpfmmwMCB3y91PaUvSBHVx'],
  ['Periodontal Ligament', '1G9wQJrXSFf_bA6gkBh-Jim78iKtje1TX'],
  ['Maxillary First Premolar', '1h34lFHd8Dn8FRDquYw7OSItfGSKemQkY'],
  ['Cementogenesis', '1L6cBZ5-f5lr74l_bExAuvKXXOQJ5bhIj'],
  ['Max 2nd Premolar', '17KPLVAJNv8s2uGHK5fNXSD3rcTnYGKvL'],
  ['Alveolar Bone', '1xW5p1wPbHcCRGXk83I1jTr99fwW1LqC9'],
  ['Salivary Gland', '1os51Tqimd6xTD5GCJFU_bjki2MVqVQB2'],
  ['Composition Control Of Secretion Of Saliva', '1I-OYIJ-QgqVy-JpCumCvnBRd-IJ5HPul'],
  ['Mandibular First Premolar', '15DfYybnYA2LR1gboPmNwin2CHjj9R6ka'],
  ['Mandibular Second Premolar', '1nl5JATPhzlptaDd4EKC1jerp_o4LoGau'],
  ['Mastication', '1ALAPuu9mBGys-zDxFxruYzWUc56JPwT4'],
  ['Deglutition', '1v8o0Cq077ha8DjptbDRh_bMR3YOg2osh'],
  ['Oral Mucosa', '1PRpQpXNU6A2_fc28Ah6BFaE-m_wF31SG'],
  ['Subdivisions Of Oral Mucosa Ke,Nk Mucosa', '1KVZ3dN3kQ1YW2L2dxWu6_OGQVRkEW_2K'],
  ['Gingival Sulcus & Dgjunction', '1hHNmM95YgoK_CwX5wpNWXUhdhapiE8R3'],
  ['Oral Mucous Membrane', '1Yubpz_RbDiTLHX1WMJ54FdRawBSb7ox1'],
  ['Occlusion', '1EFtr1vLbnVBGsRRrT_9yc_x5WLq0KFx9'],
  ['Calcium And Phosphate & Fluoride Metabolism', '1nIml0ZUDBokvDTd2sLvzIJRYY1VRfixw'],
  ['Histochemistry 1', '156Vlvhg3RdsOqoItRYxXpArjI66UBnje'],
  ['Maxillary Sinus', '1g99UMXSFzVzbYu3aibLKmFHyIW1-Dv1-'],
  ['Eruption 1', '1TTStUSHv6ULgbJxdUrU2nRUoETJ5WeFo'],
  ['Eruption 2', '1n7RqNhalPd2J-NP3GFBQs_X3OPmFHQ_4'],
  ['Diff Between primary & Permanent Dentition', '1iYu65go0nmOkyzAageIW51E8gDCkltq7'],
  ['Tmj', '11R_mjmxTVAnN6qly71Z-oVTyBeI5rmVV'],
  ['Shedding', '1mcTXDpWEdy4uMT3XrhSh8p6cIiQZY362'],
  ['Maxillry I Perm Molar', '1xEZTChAP6fwUO6J7eQYFQahz4sGj8eRO'],
  ['Mandibular First Molars', '1PYKxwPXDEQmOHUwEipPmnOv2zlLyITdu'],
  ['Mand 2nd 3rd Molars', '1Jwmlfo7jl-0jD_MdrR009EyA-tvLboge'],
  ['Max 1st Perm Molar', '18CA2sBz9wP1VMZ9UzZBP5QKzsIkxwP9D'],
  ['Maxillary 2nd And 3rd Molars', '13q4vud2mh1PllgGfbHBTiURxvuVZ5sg5'],
  ['Introduction To Oralpathology', '1GoUDHPGoEZ8RXrX5dDT4c3u6RQ9awK-5'],
  ['Regressive Alterations Of Teeth', '1jNFWWfiLlhjZXWoxaxAEhq_THvcHh2g8'],
  ['Craniofacial anomalies', '1dPD2Q_7NB8-MzMqU63yfNZMBPjk1cCSS'],
  ['Dd Of Lips', '1wv_tmDFU09f-IJpTwR8N_cIhRJP1tE8i'],
  ['Dd Of Oral Mucosa And Gingiva', '1mhZJEbDX-azXUpHpuUKZ3y7_ccxpSGYv'],
  ['Tongue Anomalies', '10qiaTeOxiDCygsle58NVN1XA-v476T-0'],
  ['Dd Of Salivary Gland And Oral Lymphoid Tissue', '1jkStjneO5GSwFyV9_DLEkOnAnggeT-r4'],
  ['Dd Size & No', '1SZtwXEf6bn8zT9MqqKBq9zlhpIRJd47O'],
  ['Dd Shape', '1DkonwQzlWS3B6KZ3I_pn5pYpvw4YhH--'],
  ['Dd - Ai, Environmental Enamel Hypoplasia', '1cW7Yn3ViV0syy5HedxRAOZMxMqRSOT_H'],
  ['Dentinogenesis Imperfecta, Dentin Dysplasia, Regional Odontodysplasia', '1e0_WWhExlWxhAdZqf9T_eULaEeOeV86U'],
  ['Dd - Eruption Of Teeth', '1AxQbbOL4SAdioaJPmDcNYcCkIoBDTZkS'],
  ['Introductin Dd Of Jaws,Palate', '1zi4I-uHSF9lVLZewUk8BK5ZC1rYdPve8'],
  ['Dd Of Lips, Om And Gingiva', '1zi4I-uHSF9lVLZewUk8BK5ZC1rYdPve8'],
  ['Dd Tongue', '1RrkubKjpULUB8F2ou_IsNn-02mDD2zhG'],
  ['Dd Size & No', '16T4-g8B6FqOIQWtc--XWT3ah3fqgUJGo'],
  ['Dd Structure', '1lnVC2JSrxcITYRq9FYlwlfj2zaKqwukn'],
  ['Dd Shape', '1AH-j828CrHiI3WDd7Q3kSMrP27JzkZLs'],
  ['Premalignant Lesions', '1fobGdl5ynsoRWbeyl37xNadK-ig0FoKI'],
  ['Premalignant Conditions', '1fobGdl5ynsoRWbeyl37xNadK-ig0FoKI'],
  ['Benign Tumors Of Epithelial Origin', '1nKfxPQNQShoCq1x24yZ7jqqaNTy8Wfu4'],
  ['Malignant Epithelial Tumours', '10UwGjPzLoqmbnhtKZ832GvnAtkkbm6OE'],
  ['Benign Tumors Of Fibrous Tissue', '1yd4vPqnKfu8KbiG1ygBY8sjeQojn_-rQ'],
  ['Malignant Tumors Of Fibrous Tissue Origin', '1WkaF47_VDUOpQVt-g8V4INCwxfJZBO_Q'],
  ['Benign & Malignant Tumours Of Bone', '1EQ48Fwt2B80XxF6Ev6gNpy6Ekd_IT4E0'],
  ['Benign & Malignant Tumors Of Cartilaginous & Myxoid Origin', '15mBV5VmoJLqWqSQXsI9mF0jXRnWOxGZ5'],
  ['Hemangiomas & Vascular Malformations', '1dMF7o8WO7VTZm2Ufwspu1FKOVlB3Zf9h'],
  ['Malignant Tumours Of Endothelial Cell Origin', '1v2DypbRXsNBOINM9E9Oct0nIsUzkdmke'],
  ['Lymphoma', '1BEpcvKdZ7XiJVluosyFQiHdfKL6h4zVm'],
  ['Benign And Malig Tumors Of Muscle', '1pdnHkvpy_UHyFODzpu7XofwYASGD1UjQ'],
  ['Benign And Malignant Tumors Of Adipose Tissue', '17jeYJUedot4BOAe1xlJw7GPlBfyTqfts'],
  ['Benign And Malignant Tumors Of Nerve Tissue', '1RUYfNFvGBZVU6E7BXSNEC6S6NToxZ0mi'],
  ['Classification Pleiomorhic Adenoma Myoepithelioma', '1tqRvotbvC4jvV1CZKrcjWoAcDo5je_0L'],
  ['Other Benign Salivay Gland Tumors', '1mnO1F-CjngRLVFwsVV8dP1f7Vu2-lFj0'],
  ['Dentigerous , Eruption Cysts', '1Zz_hdtOldDAOERGVeFaZSW5R3ThIaUiC'],
  ['Other Odontogenic Cysts', '1Flz6f_t9GoVZDlhsHkxtNNPGgFdLMrsy'],
  ['Inflammatory Odontogenic Cyst And Non Odontogenc Cyt', '1uNm-EP83RvIfOyIk_2r72bH3IgQnEBBL'],
  ['Malignant Sal Gland Tumour', '1p1y01Ps7uN8Ond2-8xp9XDh7rlAFROwj'],
  ['Non Neoplastic Salivary Lesions', '1Bh7JmatPTTkcn8dVCFvZDDRTHf_dAjPo'],
  ['Classification Of Odontogenic Tumors', '1TCnf3eagHyVlpjefrLpzpUcV7YvxHcLN'],
  ['Ameloblastoma', '1K44ywMgaKX62spRlvkRuPP4hakYZn8td'],
  ['Other Benign Epithelial Odontogenic Tumours', '13l_G92n_vFlil_rSzLKGsrpdRhVn9wDz'],
  ['Mixed Odontogenic Tumors', '1lfkoAdThZ_52Gv9JyWnydeBXy_sc_zs1'],
  ['Malignant Odontogenic Tumours', '1Z2cxRdxdsJiS6ZXhu7pu3Kc5nbTD88-i'],
  ['Healing Of Oral Wounds', '1SclYQTWqtJVVJWEqIrggZnE_6d2z6CeT'],
  ['Viral Infections', '1Ydb9YfSRJzQi83OWIuSWrriPyi_bd1RF'],
  ['Dental Caries, Theories', '1C_sDSArYMHxP384qSQ7mJEqwf8WQ8YJI'],
  ['Dental Caries- Clinical Aspects', '1Wygw9hCFVtqKlCsrZQVCIQwoZ5V5u9pR'],
  ['Histopathology Of Dental Caries', '1ftbQRvksBuh9R8ZSYu_sxsl-SsUTwf4J'],
  ['Diseases Of Pulp', '10Qdx_iMqvYU3Xnpf8CtxksLLeFcQdAHC'],
  ['Diseases Of Periapical Tissue', '1Eailg3Wrr7f90zifb0CF8fm0da-lu25y'],
  ['Osteomyelitis', '1_cHFvsAL8zCpPkhwQQYAozuG4lwbtLnZ'],
  ['Bacterial Infections- Oral Cavity', '1zxA8oouSedH6szJNpG2N1ZcPhTxaC6cp'],
  ['Spread Of Oral Infection', '1Qk0EtuUlfji5d_aptUwNFoDcsxbRTaJ6'],
  ['Fungal Infections', '1QLNetuFHnK6ScbHBLBBrPzdGVkB_f4Mj'],
  ['Regressive Alterations Of Teeth', '18jNvsONHiixl0Q-7L_VMS8mQRcZh7bH4'],
  ['Diseases Of Nerves& Muscles', '1sOmpIrarHHlqwkwabUmnS-48El7FsLr-'],
  ['Disease Of Periodontium', '1VGWVrCNQfrlieDwUC5A9XlWrZHJYlryi'],
  ['Diseases Of Rbc', '1CCnzxFqARb1OCrH74myiLcdAw9rtupHJ'],
  ['Disease Of Wbc', '1tJ1ADY_AHQs8EO9RJbba5US0NimfgCZH'],
  ['Diseases Of Platelets And Clotting Factors', '1tJ1ADY_AHQs8EO9RJbba5US0NimfgCZH'],
  ['Oral Aspect Of Metabolic Disorders I', '1tJ1ADY_AHQs8EO9RJbba5US0NimfgCZH'],
  ['Metabolic Disorders', '1HDxwHjNdG2AtcUsE59zHwEICskzX6Ux4'],
  ['Skin Ect Dys White Sponge Nevus Hbid Dys Cong', '13vV67jaiaBBLNoukkcvdT4AqugV-VBrA'],
  ['Lichen Planus & Lichenoid Reaction', '1lkCjoM_VsWNaR3r7kM6mqT0LkYDLgkb3'],
  ['Skin Xp, Darriers Multipl Ham Syn, Eds, Goltz Syn', '1qkJuIiHwm9qLqDT4ep5Cm-rABpudTuC1'],
  ['Pemphigus', '11fW2oLgB9CGIWBaix7S861tpAFipj6mk'],
  ['Lupus Erythemasus, Epidermolysis Bullosa, Erythema Multiforme', '1zuOYUTsR9i-KTFtuC8sPiyZgoQ3ydRbJ'],
  ['Sys Sclerosi Psoriasis', '1kYXAw6lDLu5f0AReT3FEJgLyU1_pYWpw'],
  ['Allergic And Immunologic Diseases', '1i32y3_1V5Xits1VpYZAYDmzzILRW0cUv'],
  ['Forensic Odontology', '1jnuwRT4ulXPg1f3R761d45Wz3FYqz1nW'],
  ['Fibroosseous Lesions - Part 1', '1RmtO2g-x2kM2lyEKDhh0wklefiUbfOXS'],
  ['Fibroosseous Lesions - Part 2', '18a7N4LjhEi4mAWY9aPsRW36LUhXYqQ01'],
  ['Syndromes Of Bone', '1vcSUjV0nvAi6PjH-DqBSSBYgQAWqApAm'],
  ['Bone Herediatry Disorders', '18IZosNFgDJrQx7Rh4Za3NbYKAjpxqfwX'],
  ['Diseases Of Tmj', '1N_2kRAXuUsy5D39huJkrrzIyHaGd64Wh'],
  ['Fibroosseous Lesions ', '1b1hWDLVWvfYwbRRHPrHut5W2iwkt9n_4'],
  ['Behcet Syndrome, Reiters Syndrome, Sarcoidosis', '19MEE6W2e5Uubq3ueEy16W8b0t88UTcjs'],
  ['Allergic Contact Stomatitis, Angioedma Wegeners', '1qrGSCPMzR4gOtRFSuzewp7f5WUZpUMNz'],
  ['Physical Injuries Of Oral Cavity', '18hMF_VdSkN_FX2cXoPbBAc0nc5sb2qgg'],
  ['Radiation Chemical And Occupational Injuries', '14ucKMys_58wNivJ9LFcQqRy3LdEfMo25'],
]

const oralPathologyGroup = (index) => {
  if (index < 49) return 'First Year BDS'
  if (index < 61) return 'Second Year BDS'
  return 'Third Year BDS'
}

export default function OralPathologyLms() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-foreground px-5 pb-24 pt-44 text-white md:px-8 md:pb-28 md:pt-52">
          <div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Reveal>
              <Link to="/academics/lms" className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to LMS Departments</Link>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-accent">Department LMS</p>
              <h1 className="mt-4 max-w-5xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">Oral Pathology and Microbiology</h1>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 md:text-lg">
                Digital learning resources for understanding the causes, mechanisms,
                microscopic features, and diagnosis of oral and maxillofacial diseases.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">BDS & MDS</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{VIDEO_IDS.length} video lessons</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">{PRESENTATIONS_2024_25.length} presentations</span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2">Self-paced learning</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl tracking-tight text-foreground md:text-4xl">Course Overview</h2>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  This collection supports learning across disease mechanisms, oral infections,
                  cysts, tumours, potentially malignant disorders, oral cancer, and the microscopic
                  interpretation of lesions affecting oral and maxillofacial tissues.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white"><Microscope className="h-6 w-6" /></div>
                  <p className="text-sm leading-relaxed text-foreground/75">Use these lessons with microscopy sessions, specimen discussions, faculty guidance, and prescribed materials.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-[1.75rem] border border-border/80 bg-surface p-7 shadow-brand-xs">
                <div className="flex items-center gap-3"><BookOpen className="h-5 w-5 text-primary" /><h2 className="text-lg font-bold text-foreground">Topics Covered</h2></div>
                <ul className="mt-6 grid gap-3">{TOPICS.map((topic, i) => <li key={topic} className="flex items-start gap-3 text-sm leading-relaxed text-muted"><span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">{i + 1}</span>{topic}</li>)}</ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="presentations-section" className="bg-surface px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Academic Year 2024–2025" title="Chapter-wise Presentations" description="Download the Oral Pathology and Microbiology learning material for each chapter as a PowerPoint presentation." /></Reveal>
            <GroupedDownloadGrid items={PRESENTATIONS_2024_25} getGroup={oralPathologyGroup} />
          </div>
        </section>

        <section id="videos-section" className="mesh-bg px-5 py-10 md:px-8 md:py-14 scroll-mt-28">
          <div className="mx-auto max-w-7xl">
            <Reveal><SectionHeading eyebrow="Video Library" title="Oral Pathology and Microbiology Videos" description="Select a lesson and learn directly on the APDCH website." /></Reveal>
            <VideoCarouselGrid videoIds={VIDEO_IDS} titlePrefix="Oral Pathology Lesson" />
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-[2rem] bg-primary p-8 text-center text-white md:flex-row md:p-10 md:text-left">
            <div><h2 className="font-display text-2xl md:text-3xl">Explore another LMS department</h2><p className="mt-2 text-sm text-white/70">Return to the department directory and continue learning.</p></div>
            <Button asChild size="lg" variant="secondary"><Link to="/academics/lms"><ArrowLeft className="h-4 w-4" />All LMS Departments</Link></Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
