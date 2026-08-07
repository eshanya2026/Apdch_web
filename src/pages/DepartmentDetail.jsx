import { Link, useParams } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import DetailHero from '@/components/departments/detail/DetailHero'
import DetailOverview from '@/components/departments/detail/DetailOverview'
import DetailVisionMission from '@/components/departments/detail/DetailVisionMission'
import {
  DetailServices,
  DetailTechnology,
  DetailInfrastructure,
  DetailResearch,
} from '@/components/departments/detail/FeatureCardGrid'
import DetailFaculty from '@/components/departments/detail/DetailFaculty'
import DetailPatientCare from '@/components/departments/detail/DetailPatientCare'
import DetailCurriculum from '@/components/departments/detail/DetailCurriculum'
import DetailEvents from '@/components/departments/detail/DetailEvents'
import DetailGallery from '@/components/departments/detail/DetailGallery'
import DetailFAQs from '@/components/departments/detail/DetailFAQs'
import DetailAppointmentCTA from '@/components/departments/detail/DetailAppointmentCTA'
import { Button } from '@/components/ui/button'
import { getDepartmentDetail } from '@/lib/departmentDetails'

export default function DepartmentDetail() {
  const { departmentId } = useParams()
  const department = getDepartmentDetail(departmentId)

  if (!department) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[70svh] flex-col items-center justify-center px-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
          <h1 className="mt-3 font-display text-4xl text-foreground">Department not found</h1>
          <p className="mt-3 max-w-md text-muted">
            The department you requested does not exist or the link may be outdated.
          </p>
          <Button asChild className="mt-8">
            <Link to="/departments/oral-medicine">Explore departments</Link>
          </Button>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main>
        <DetailHero department={department} />
        <DetailOverview department={department} />
        <DetailVisionMission department={department} />
        <DetailServices department={department} />
        <DetailCurriculum department={department} />
        <DetailTechnology department={department} />
        <DetailFaculty department={department} />
        <DetailInfrastructure department={department} />
        <DetailPatientCare department={department} />
        <DetailResearch department={department} />
        <DetailEvents department={department} />
        <DetailGallery department={department} />
        <DetailFAQs department={department} />
        <DetailAppointmentCTA department={department} />
      </main>
      <Footer />
    </>
  )
}
