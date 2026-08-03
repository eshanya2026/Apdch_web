import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AdmissionsHero from '@/components/admissions/AdmissionsHero'
import AdmissionProcess from '@/components/admissions/AdmissionProcess'
import Eligibility from '@/components/admissions/Eligibility'
import AdmissionCategories from '@/components/admissions/AdmissionCategories'
import { BdsAdmission, MdsAdmission } from '@/components/admissions/ProgrammeAdmissions'
import NeetInformation from '@/components/admissions/NeetInformation'
import FeeStructure from '@/components/admissions/FeeStructure'
import WhyChooseAPDCH from '@/components/admissions/WhyChooseAPDCH'
import CampusFacilities from '@/components/admissions/CampusFacilities'
import ProfessionalDevelopment from '@/components/admissions/ProfessionalDevelopment'
import AdmissionTimeline from '@/components/admissions/AdmissionTimeline'
import AdmissionResources from '@/components/admissions/AdmissionResources'
import AdmissionsFAQ from '@/components/admissions/AdmissionsFAQ'
import ApplyNow from '@/components/admissions/ApplyNow'

export default function Admissions() {
  return (
    <>
      <Navbar />
      <main>
        <AdmissionsHero />
        <AdmissionProcess />
        <Eligibility />
        <AdmissionCategories />
        <BdsAdmission />
        <MdsAdmission />
        <NeetInformation />
        <FeeStructure />
        <WhyChooseAPDCH />
        <CampusFacilities />
        <ProfessionalDevelopment />
        <AdmissionTimeline />
        <AdmissionResources />
        <AdmissionsFAQ />
        <ApplyNow />
      </main>
      <Footer />
    </>
  )
}
