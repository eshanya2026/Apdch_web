import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HospitalHero from '@/components/hospital/HospitalHero'
import PatientCare from '@/components/hospital/PatientCare'
import DentalServices from '@/components/hospital/DentalServices'
import HospitalSpecialties from '@/components/hospital/HospitalSpecialties'
import AdvancedTechnology from '@/components/hospital/AdvancedTechnology'
import HospitalFacilities from '@/components/hospital/HospitalFacilities'
import HospitalAppointmentCTA from '@/components/hospital/HospitalAppointmentCTA'
import HospitalDoctors from '@/components/hospital/HospitalDoctors'
import HospitalTestimonials from '@/components/hospital/HospitalTestimonials'
import EmergencyContact from '@/components/hospital/EmergencyContact'

export default function Hospital() {
  return (
    <>
      <Navbar />
      <main>
        <HospitalHero />
        <PatientCare />
        <DentalServices />
        <HospitalSpecialties />
        <AdvancedTechnology />
        <HospitalFacilities />
        <HospitalAppointmentCTA />
        <HospitalDoctors />
        <HospitalTestimonials />
        <EmergencyContact />
      </main>
      <Footer />
    </>
  )
}
