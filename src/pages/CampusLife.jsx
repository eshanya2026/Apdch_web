import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CampusLifeHero from '@/components/campus-life/CampusLifeHero'
import CampusLifeHighlights from '@/components/campus-life/CampusLifeHighlights'
import CampusLifeHostel from '@/components/campus-life/CampusLifeHostel'
import CampusLifeSports from '@/components/campus-life/CampusLifeSports'
import CampusLifeClubs from '@/components/campus-life/CampusLifeClubs'
import CampusLifeLibrary from '@/components/campus-life/CampusLifeLibrary'
import CampusLifeOutreach from '@/components/campus-life/CampusLifeOutreach'
import CampusLifeFacilities from '@/components/campus-life/CampusLifeFacilities'
import CampusLifeGallery from '@/components/campus-life/CampusLifeGallery'

export default function CampusLife() {
  return (
    <>
      <Navbar />
      <main>
        <CampusLifeHero />
        <CampusLifeHighlights />
        <CampusLifeHostel />
        <CampusLifeSports />
        <CampusLifeClubs />
        <CampusLifeLibrary />
        <CampusLifeOutreach />
        <CampusLifeFacilities />
        <CampusLifeGallery />
      </main>
      <Footer />
    </>
  )
}
