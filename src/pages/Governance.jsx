import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import GovernanceHero from '@/components/governance/GovernanceHero'
import CommitteesSection from '@/components/governance/CommitteesSection'
import InstitutionalPolicies from '@/components/governance/InstitutionalPolicies'
import DownloadsSection from '@/components/governance/DownloadsSection'
import GovernanceCTA from '@/components/governance/GovernanceCTA'

export default function Governance() {
  const [activeTab, setActiveTab] = useState('committees')

  const scrollToSection = (id) => {
    setActiveTab(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Governance Hero Header */}
        <GovernanceHero activeTab={activeTab} onTabChange={scrollToSection} />

        {/* Committees & Cells Section */}
        <CommitteesSection />

        {/* Institutional Policies & Code of Conduct */}
        <InstitutionalPolicies />

        {/* Downloads & Reports Section */}
        <DownloadsSection />

        {/* Governance CTA */}
        <GovernanceCTA />
      </main>
      <Footer />
    </>
  )
}
