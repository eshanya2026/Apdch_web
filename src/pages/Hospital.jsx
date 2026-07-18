import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HospitalHero from '@/components/hospital/HospitalHero'
import DentalServices from '@/components/hospital/DentalServices'
import HospitalSpecialties from '@/components/hospital/HospitalSpecialties'
import OPTimings from '@/components/hospital/OPTimings'
import HospitalAppointmentCTA from '@/components/hospital/HospitalAppointmentCTA'
import AdvancedTechnology from '@/components/hospital/AdvancedTechnology'
import HospitalFacilities from '@/components/hospital/HospitalFacilities'
import EmergencyContact from '@/components/hospital/EmergencyContact'
import HospitalGallery from '@/components/hospital/HospitalGallery'
import HospitalDoctors from '@/components/hospital/HospitalDoctors'
import HospitalTestimonials from '@/components/hospital/HospitalTestimonials'

export default function Hospital() {
  return (
    <>
      <Navbar />
      <main>
        <HospitalHero />
        <DentalServices />
        <HospitalSpecialties />
        <OPTimings />
        <HospitalAppointmentCTA />
        <AdvancedTechnology />
        <HospitalFacilities />
        <EmergencyContact />
        <HospitalGallery />
        <HospitalDoctors />
        <HospitalTestimonials />
      </main>
      <Footer />
    </>
  )
}
