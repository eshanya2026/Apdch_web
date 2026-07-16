import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AdmissionsHero from '@/components/admissions/AdmissionsHero'
import AdmissionProcess from '@/components/admissions/AdmissionProcess'
import Eligibility from '@/components/admissions/Eligibility'
import { BdsAdmission, MdsAdmission } from '@/components/admissions/ProgrammeAdmissions'
import NeetInformation from '@/components/admissions/NeetInformation'
import RequiredDocuments from '@/components/admissions/RequiredDocuments'
import FeeStructure from '@/components/admissions/FeeStructure'
import Scholarships from '@/components/admissions/Scholarships'
import AdmissionTimeline from '@/components/admissions/AdmissionTimeline'
import AdmissionsFAQ from '@/components/admissions/AdmissionsFAQ'
import DownloadBrochure from '@/components/admissions/DownloadBrochure'
import ApplyNow from '@/components/admissions/ApplyNow'

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main>
        <AdmissionsHero />
        <AdmissionProcess />
        <Eligibility />
        <BdsAdmission />
        <MdsAdmission />
        <NeetInformation />
        <RequiredDocuments />
        <FeeStructure />
        <Scholarships />
        <AdmissionTimeline />
        <AdmissionsFAQ />
        <DownloadBrochure />
        <ApplyNow />
      </main>
      <Footer />
    </>
  )
}
