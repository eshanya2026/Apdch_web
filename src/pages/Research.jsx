import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ResearchHero from '@/components/research/ResearchHero'
import ResearchOverview from '@/components/research/ResearchOverview'
import InnovationCentre from '@/components/research/InnovationCentre'
import ResearchProjects from '@/components/research/ResearchProjects'
import Publications from '@/components/research/Publications'
import Patents from '@/components/research/Patents'
import Collaborations from '@/components/research/Collaborations'
import ResearchLabs from '@/components/research/ResearchLabs'
import ResearchStatistics from '@/components/research/ResearchStatistics'
import ResearchTimeline from '@/components/research/ResearchTimeline'
import ResearchCTA from '@/components/research/ResearchCTA'

export default function Research() {
  return (
    <>
      <Navbar />
      <main>
        <ResearchHero />
        <ResearchOverview />
        <InnovationCentre />
        <ResearchProjects />
        <Publications />
        <Patents />
        <Collaborations />
        <ResearchLabs />
        <ResearchStatistics />
        <ResearchTimeline />
        <ResearchCTA />
      </main>
      <Footer />
    </>
  )
}
