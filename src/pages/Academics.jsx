import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AcademicsHero from '@/components/academics/AcademicsHero'
import AcademicPrograms from '@/components/academics/AcademicPrograms'
import Curriculum from '@/components/academics/Curriculum'
import AcademicCalendar from '@/components/academics/AcademicCalendar'
import ClinicalTraining from '@/components/academics/ClinicalTraining'
import AcademicsResearch from '@/components/academics/AcademicsResearch'
import Library from '@/components/academics/Library'
import Examinations from '@/components/academics/Examinations'
import LearningResources from '@/components/academics/LearningResources'
import StudentSupport from '@/components/academics/StudentSupport'
import AcademicsTimeline from '@/components/academics/AcademicsTimeline'
import AcademicsCTA from '@/components/academics/AcademicsCTA'

export default function Academics() {
  return (
    <>
      <Navbar />
      <main>
        <AcademicsHero />
        <AcademicPrograms />
        <Curriculum />
        <AcademicCalendar />
        <ClinicalTraining />
        <AcademicsResearch />
        <Library />
        <Examinations />
        <LearningResources />
        <StudentSupport />
        <AcademicsTimeline />
        <AcademicsCTA />
      </main>
      <Footer />
    </>
  )
}
