import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import AboutAPDCH from '@/components/sections/AboutAPDCH'
import TrustedRecognized from '@/components/sections/TrustedRecognized'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import AcademicPrograms from '@/components/sections/AcademicPrograms'
import ClinicalTrainingHome from '@/components/sections/ClinicalTrainingHome'
import DentalSpecialities from '@/components/sections/DentalSpecialities'
import Specialists from '@/components/sections/Specialists'
import ModernInfrastructure from '@/components/sections/ModernInfrastructure'
import StudentExperience from '@/components/sections/StudentExperience'
import Testimonials from '@/components/sections/Testimonials'
import LatestNews from '@/components/sections/LatestNews'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutAPDCH />
        <TrustedRecognized />
        <WhyChooseUs />
        <AcademicPrograms />
        <ClinicalTrainingHome />
        <DentalSpecialities />
        <Specialists />
        <ModernInfrastructure />
        <StudentExperience />
        <Testimonials />
        <LatestNews />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
