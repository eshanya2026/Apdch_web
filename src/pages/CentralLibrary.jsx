import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  Newspaper,
  Monitor,
  Search,
  Armchair,
  Printer,
  Clock,
  CheckCircle2,
  Library as LibraryIcon,
  GraduationCap,
  ArrowRight,
  Building2,
  Users,
  Layers,
  Laptop,
  Globe,
  FileText,
  Bookmark,
  Video,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpenCheck,
  Bell,
  Share2,
  Check,
  Camera,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import {
  LIBRARY_HERO,
  LIBRARY_HIGHLIGHTS,
  LIBRARY_OVERVIEW,
  LIBRARY_COLLECTION,
  COMPLETE_ILMS_STATS,
  DIGITAL_RESOURCES_TABS,
  LIBRARY_SERVICES_SECTION,
  LIBRARY_FACILITIES,
  PRIMARY_LIBRARY_RULES,
  EXPANDED_LIBRARY_RULES,
  LIBRARY_TIMINGS,
  LIBRARY_GALLERY,
} from '@/lib/libraryConstants'

const ICONS = {
  BookOpen,
  Newspaper,
  Search,
  Monitor,
  Armchair,
  Printer,
  Layers,
  Globe,
  FileText,
  Bookmark,
  Video,
  GraduationCap,
  BookOpenCheck,
  Bell,
  Share2,
}

const HIGHLIGHT_ICONS = [Building2, Users, Layers, Laptop]

export default function CentralLibrary() {
  const [showFullStats, setShowFullStats] = useState(false)
  const [activeTab, setActiveTab] = useState('e-journals')
  const [showAllRules, setShowAllRules] = useState(false)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* 1. Hero Section */}
        <section
          className="relative flex min-h-[460px] items-center justify-center overflow-hidden px-5 pb-24 pt-44 text-white md:min-h-[540px] md:px-8 md:pb-28 md:pt-48"
          style={{ backgroundColor: '#2b0d14' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />

          {/* Newton's 3rd Law Interactive Floating Line Icons */}
          <FloatingHeroIcons />

          <Reveal className="w-full">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <LibraryIcon className="h-4 w-4 text-[#e5a9b5]" />
                {LIBRARY_HERO.eyebrow}
              </span>
              <h1 className="mt-6 w-full font-display text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {LIBRARY_HERO.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                {LIBRARY_HERO.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-primary text-white shadow-brand-button hover:bg-primary/90">
                  <a href="#digital">
                    Explore E-Resources
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <a href="#services">
                    Library Services
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 2. Library as a Learning Resource Centre */}
        <section className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow={LIBRARY_OVERVIEW.eyebrow}
                title={LIBRARY_OVERVIEW.title}
                description="The intellectual foundation of APDCH, integrating comprehensive dental literature with high-speed digital research systems."
              />
            </Reveal>

            {/* Bento Grid Top Row */}
            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              {/* Left Main Editorial Card (7 Cols) */}
              <Reveal className="lg:col-span-7">
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-primary/10 bg-white p-7 shadow-brand-xs sm:p-9">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />

                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3.5 w-3.5" />
                      <span>Knowledge Infrastructure</span>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl">
                      A Comprehensive Environment Built for Dental Scholars
                    </h3>

                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-foreground/80 sm:text-base">
                      <p>{LIBRARY_OVERVIEW.paragraphs[0]}</p>
                      <p className="text-xs text-muted sm:text-sm">{LIBRARY_OVERVIEW.paragraphs[3]}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-primary/5">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted">Key Facilities &amp; Standards</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Check className="h-3.5 w-3.5" /> 8,700 Sq. Ft. Facility
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Check className="h-3.5 w-3.5" /> 320 Seater AC Reading Halls
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Check className="h-3.5 w-3.5" /> Nearly 6,000 Books
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Check className="h-3.5 w-3.5" /> 65+ National &amp; Int'l Journals
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                        <Check className="h-3.5 w-3.5" /> 24×7 CCTV Surveillance
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Right 4 Highlights Card Grid (5 Cols) */}
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="grid h-full grid-cols-2 gap-4">
                  {LIBRARY_HIGHLIGHTS.map((stat, i) => {
                    const Icon = HIGHLIGHT_ICONS[i] || Building2
                    return (
                      <div
                        key={stat.label}
                        className="group relative flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-brand-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="mt-6">
                          <span className="font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                            {stat.value}
                          </span>
                          <p className="mt-1 text-xs font-semibold text-muted sm:text-sm">
                            {stat.label}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Reveal>
            </div>

            {/* Bento Grid Bottom Row: 2 Technology & Classification Pillars */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Classification Card */}
              <Reveal delay={0.15}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-white p-7 shadow-brand-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                        <Layers className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-700">
                        Classification &amp; Catalog
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-xl font-bold text-foreground">
                      Dewey Decimal Classification &amp; WEBOPAC
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {LIBRARY_OVERVIEW.paragraphs[1]}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-primary/5">
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">DDC System</span>
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">100% Barcoded</span>
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">Online Public Access</span>
                  </div>
                </div>
              </Reveal>

              {/* Automation & Consortium Card */}
              <Reveal delay={0.2}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-white p-7 shadow-brand-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600">
                        <Globe className="h-6 w-6" />
                      </span>
                      <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-bold text-blue-700">
                        Digital Consortium
                      </span>
                    </div>

                    <h4 className="mt-5 font-display text-xl font-bold text-foreground">
                      Automation, Wi-Fi &amp; EBSCO Consortium
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {LIBRARY_OVERVIEW.paragraphs[2]}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-primary/5">
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">25 Workstations</span>
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">EBSCO Consortium</span>
                    <span className="rounded-md bg-[#faf7f8] px-2.5 py-1 text-xs font-medium text-muted">DVL Digital Library</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Library Collection (Modern Cards + Complete ILMS Toggle) */}
        <section id="collection" className="bg-[#f5eef0]/60 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Library Collection"
                title="Explore Our Collection"
                description="Comprehensive academic volumes, national &amp; international journal subscriptions, and digital resources maintained under the Dewey Decimal Classification (DDC) system."
              />
            </Reveal>

            {/* 8 Modern Collection Cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {LIBRARY_COLLECTION.map((item, index) => {
                const Icon = ICONS[item.icon] || BookOpen
                return (
                  <Reveal key={item.label} delay={index * 0.04}>
                    <div className="group relative flex flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full bg-primary/5 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                          APDCH
                        </span>
                      </div>
                      <div className="mt-6">
                        <span className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                          {item.value}
                        </span>
                        <h3 className="mt-1 text-sm font-semibold text-muted">
                          {item.label}
                        </h3>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* Expandable Complete Statistics */}
            <div className="mt-10 text-center">
              <button
                type="button"
                onClick={() => setShowFullStats(!showFullStats)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span>{showFullStats ? 'Hide Detailed Statistics' : 'View Complete Library Statistics →'}</span>
                {showFullStats ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showFullStats && (
                <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-6 text-left shadow-brand-md md:p-8 animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span>Official ILMS Data</span>
                  </div>
                  <h4 className="mt-2 font-display text-xl font-bold text-foreground md:text-2xl">
                    Integrated Library Management System (ILMS)
                  </h4>
                  <p className="mt-1 text-xs text-muted sm:text-sm">
                    Verified catalog and institutional library management statistics.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {COMPLETE_ILMS_STATS.map((item) => (
                      <div
                        key={item.metric}
                        className={`flex flex-col justify-between rounded-2xl border p-5 transition-all ${
                          item.isNumber
                            ? 'border-primary/15 bg-gradient-to-br from-[#faf7f8] to-primary/[0.03]'
                            : 'border-primary/10 bg-[#faf7f8]'
                        }`}
                      >
                        <p className="text-xs font-bold uppercase tracking-wider text-primary">
                          {item.metric}
                        </p>
                        <p
                          className={`mt-2 font-semibold text-foreground ${
                            item.isNumber
                              ? 'font-display text-2xl font-bold text-primary sm:text-3xl'
                              : 'text-sm leading-snug'
                          }`}
                        >
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 4. Digital Library & E-Resources (Compact 3 Tabbed Sections) */}
        <section id="digital" className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Digital Library &amp; E-Resources"
                title="Learning Beyond the Library"
                description="Direct gateways to leading international journal publishers, electronic textbooks, national e-learning portals, and subscribed institutional consortiums."
              />
            </Reveal>

            {/* Tabs Header */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
              {Object.keys(DIGITAL_RESOURCES_TABS).map((tabKey) => {
                const isActive = activeTab === tabKey
                return (
                  <button
                    key={tabKey}
                    type="button"
                    onClick={() => setActiveTab(tabKey)}
                    className={`rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'bg-primary text-white shadow-brand-button scale-105'
                        : 'border border-primary/15 bg-white text-foreground hover:border-primary/30 hover:bg-primary/5'
                    }`}
                  >
                    {DIGITAL_RESOURCES_TABS[tabKey].label}
                  </button>
                )
              })}
            </div>

            <p className="mx-auto mt-4 max-w-xl text-center text-xs text-muted md:text-sm">
              {DIGITAL_RESOURCES_TABS[activeTab].description}
            </p>

            {/* Tabbed Content Grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIGITAL_RESOURCES_TABS[activeTab].items.map((res, index) => (
                <Reveal key={res.name} delay={index * 0.03}>
                  <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Globe className="h-4 w-4" />
                        </span>
                        <span className="rounded-full bg-primary/5 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                          Online Portal
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                        {res.name}
                      </h4>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        {res.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-primary/5 pt-4">
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-primary transition-colors hover:text-primary/80"
                      >
                        <span>Access Resource ↗</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Library Services (Icon-Card UI) */}
        <section id="services" className="bg-[#f5eef0]/60 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow={LIBRARY_SERVICES_SECTION.eyebrow}
                title={LIBRARY_SERVICES_SECTION.title}
                description={LIBRARY_SERVICES_SECTION.description}
              />
            </Reveal>

            {/* 6 Core Services */}
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LIBRARY_SERVICES_SECTION.services.map((service, index) => {
                const Icon = ICONS[service.icon] || BookOpen
                return (
                  <Reveal key={service.title} delay={index * 0.05}>
                    <div className="group flex h-full flex-col justify-between rounded-3xl border border-primary/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                      <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                          {service.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            {/* Also Available Strip */}
            <Reveal delay={0.15}>
              <div className="mt-12 rounded-3xl border border-primary/15 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Also Available
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {LIBRARY_SERVICES_SECTION.alsoAvailable.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary/25 hover:bg-primary/10"
                    >
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. Library Facilities (Dark Theme) */}
        <section id="facilities" className="bg-[#2b0d14] px-5 py-16 text-white md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                light
                eyebrow="Library Facilities"
                title="Facilities for Focused Learning"
                description="Dedicated learning spaces, advanced reading rooms, and scanning facilities designed for student and faculty productivity."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LIBRARY_FACILITIES.map((facility, index) => (
                <Reveal key={facility.title} delay={index * 0.04}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                    <div>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-accent">
                        <Sparkles className="h-3.5 w-3.5" />
                        Facility
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-white md:text-xl">
                        {facility.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/70 sm:text-sm">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Library Timings (Simple Premium Card) */}
        <section className="px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="rounded-3xl border border-primary/15 bg-white p-7 shadow-brand-xs sm:p-9 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                  <Clock className="h-4 w-4" />
                  <span>Opening Hours</span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Library Timings
                </h2>
                <p className="mx-auto mt-2 max-w-md text-xs text-muted sm:text-sm">
                  Official operating schedule currently published by APDCH.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-primary/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#faf7f8] border-b border-primary/10 text-xs uppercase tracking-wider text-muted">
                      <tr>
                        <th className="px-6 py-3.5 font-semibold">Day</th>
                        <th className="px-6 py-3.5 font-semibold text-right">Timing</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-primary/5">
                      {LIBRARY_TIMINGS.map((row) => (
                        <tr key={row.day} className="hover:bg-primary/[0.02]">
                          <td className="px-6 py-4 font-medium text-foreground">{row.day}</td>
                          <td className="px-6 py-4 font-bold text-primary text-right">{row.timing}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 8. Library Rules & Regulations (Accordion Approach) */}
        <section id="rules" className="bg-[#f5eef0]/60 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <SectionHeading
                eyebrow="Conduct &amp; Regulations"
                title="Library Rules &amp; Regulations"
                description="Essential general principles for maintaining an orderly and scholarly learning atmosphere."
              />
            </Reveal>

            {/* 8 Priority Rules */}
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {PRIMARY_LIBRARY_RULES.map((rule, idx) => (
                <Reveal key={rule} delay={idx * 0.03}>
                  <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-xs font-semibold leading-relaxed text-foreground sm:text-sm">
                      {rule}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Accordion: View All Library Rules */}
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAllRules(!showAllRules)}
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-bold text-primary shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5"
              >
                <span>{showAllRules ? 'Hide All Library Rules ↑' : 'View All Library Rules ↓'}</span>
                {showAllRules ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showAllRules && (
                <div className="mt-8 grid gap-4 text-left md:grid-cols-2 animate-in fade-in slide-in-from-top-4 duration-300">
                  {EXPANDED_LIBRARY_RULES.map((group) => (
                    <div key={group.title} className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                      <h4 className="font-display text-base font-bold text-primary">
                        {group.title}
                      </h4>
                      <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {group.rules.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 9. Library Gallery */}
        <section id="gallery" className="bg-[#f5eef0]/60 px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Campus Infrastructure"
                title="Library Gallery"
                description="Explore learning spaces, reading halls, digital labs, and journal archives inside the APDCH Central Library."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {LIBRARY_GALLERY.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.05}>
                  <div className="group overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm">
                    <div className="relative aspect-4/3 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                        <Camera className="h-3 w-3" />
                        {item.title}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h4 className="font-display text-base font-bold text-foreground">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs text-muted">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 11. Academic Exploration CTA */}
        <section className="relative overflow-hidden px-5 py-16 text-white md:px-8 md:py-20">
          <div className="absolute inset-0 cta-gradient" />
          <div className="absolute inset-0 glow-cta-overlay" />

          <div className="relative mx-auto max-w-5xl text-center">
            <Reveal>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Ready to Access APDCH Learning Resources?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                Explore our digital journals, academic repositories, and dental e-learning systems.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-white font-bold text-primary hover:bg-white/95">
                  <a href="#digital">
                    <Globe className="h-4 w-4" />
                    Explore E-Resources
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 text-white hover:bg-white hover:text-primary">
                  <Link to="/academics/lms">
                    <GraduationCap className="h-4 w-4" />
                    Visit Dental LMS
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
