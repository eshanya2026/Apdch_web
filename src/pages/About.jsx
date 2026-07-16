import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AboutHero from '@/components/about/AboutHero'
import CollegeHistory from '@/components/about/CollegeHistory'
import VisionMission from '@/components/about/VisionMission'
import { ChairmanMessage, PrincipalMessage } from '@/components/about/LeadershipMessages'
import MilestonesTimeline from '@/components/about/MilestonesTimeline'
import Recognitions from '@/components/about/Recognitions'
import Achievements from '@/components/about/Achievements'
import CampusOverview from '@/components/about/CampusOverview'
import AboutInfrastructure from '@/components/about/AboutInfrastructure'
import Values from '@/components/about/Values'
import WhyAPDCH from '@/components/about/WhyAPDCH'
import AboutCTA from '@/components/about/AboutCTA'

export default function About() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <CollegeHistory />
        <VisionMission />
        <ChairmanMessage />
        <PrincipalMessage />
        <MilestonesTimeline />
        <Recognitions />
        <Achievements />
        <CampusOverview />
        <AboutInfrastructure />
        <Values />
        <WhyAPDCH />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
