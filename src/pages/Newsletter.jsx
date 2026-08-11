import { useState, useMemo } from 'react'
import {
  BookOpen,
  Download,
  ExternalLink,
  Sparkles,
  Search,
  X,
  ChevronRight,
  Award,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'

const NEWSLETTER_EDITIONS = [
  {
    id: 'vol-8-issue-2',
    year: '2024',
    volume: 'Volume 08 · Issue 02',
    title: 'APDCH Times — July–Dec 2024',
    subtitle: 'Academic Growth, Professional Development & Global Healthcare Insights',
    period: 'July – December 2024',
    pages: '24 Pages',
    pdf: 'https://apdch.in/wp-content/uploads/2025/05/05-APDCH-Times-December-2025.pdf',
    coverImage: '/newsletters/vol-8-issue-2-cover.png',
    featured: true,
    highlights: [
      'Institutional Accreditations & NAAC Quality Benchmarks',
      'Advanced CAD/CAM & Digital Dentistry Symposium Highlights',
      'Interdisciplinary Implantology Case Series & Outcomes',
      'Community Outreach & Rural Oral Health Initiatives',
    ],
    editorNote:
      'This edition captures the relentless pursuit of educational excellence, celebrating national conference awards, new simulation facilities, and transformative student research projects.',
  },
  {
    id: 'vol-8-issue-1',
    year: '2024',
    volume: 'Volume 08 · Issue 01',
    title: 'APDCH Times — Jan–June 2024',
    subtitle: 'Elevating Professional Dental Standards & Cutting-Edge Infrastructure',
    period: 'January – June 2024',
    pages: '20 Pages',
    pdf: 'https://apdch.in/wp-content/uploads/2024/07/vol8-issue1_compressed.pdf',
    coverImage: '/newsletters/vol-8-issue-1-cover.png',
    featured: false,
    highlights: [
      'Annual Convocation & Gold Medalist Honors',
      'Faculty Research Publications in Indexed Journals',
      'Launch of CBCT & Guided Implant Workflow Modules',
      'Special Care Dentistry & Pediatric Outreach Camps',
    ],
    editorNote:
      'Reflecting on milestone surgical achievements and research publications that shape our academic trajectory.',
  },
  {
    id: 'vol-7-issue-2',
    year: '2023',
    volume: 'Volume 07 · Issue 02',
    title: 'APDCH Times — July–Dec 2023',
    subtitle: 'Clinical Milestones, Scientific Research & Community Health Outreach',
    period: 'July – December 2023',
    pages: '18 Pages',
    pdf: 'https://apdch.in/wp-content/uploads/2024/04/APDCH-TIMES_-Volume-7-issue-2.pdf',
    coverImage: '/newsletters/vol-7-issue-2-cover.png',
    featured: false,
    highlights: [
      'State-Level CDE Workshops & Hands-on Training',
      'Postgraduate Table Clinic & Paper Presentation Wins',
      'Maxillofacial Prosthetics & Reconstruction Feats',
      'World Oral Health Day Awareness Campaigns',
    ],
    editorNote:
      'Spotlighting student clinical skills and community engagements across Melmaruvathur and surrounding districts.',
  },
  {
    id: 'vol-7-issue-1',
    year: '2023',
    volume: 'Volume 07 · Issue 01',
    title: 'APDCH Times — Jan–June 2023',
    subtitle: 'Academic Accomplishments, Student Leadership & Clinical Excellence',
    period: 'January – June 2023',
    pages: '16 Pages',
    pdf: 'https://apdch.in/wp-content/uploads/2024/04/APDCH-TIMES_-Volume-7-issue-1.pdf',
    coverImage: '/newsletters/vol-7-issue-1-cover.png',
    featured: false,
    highlights: [
      'Comprehensive Oral Cancer Screening Missions',
      'Inter-College Sports & Cultural Fest Accolades',
      'Dental Materials Research & Patent Filings',
      'Alumni Spotlight & Global Practice Stories',
    ],
    editorNote:
      'Dedicated to holistic student development, academic rigor, and patient-first clinical ethics.',
  },
  {
    id: 'vol-6-issue-2',
    year: '2022',
    volume: 'Volume 06 · Issue 02',
    title: 'APDCH Times — July–Dec 2022',
    subtitle: 'Institutional Chronicle of Scientific Advancements & Hospital Events',
    period: 'July – December 2022',
    pages: '16 Pages',
    pdf: 'https://apdch.in/wp-content/uploads/2023/08/Times-APDCH-26-x38.pdf',
    coverImage: '/newsletters/vol-6-issue-2-cover.png',
    featured: false,
    highlights: [
      'Inauguration of Digital Dentistry & Laser Wing',
      'National Prosthodontic & Endodontic Conference Awards',
      'Faculty Development Programs & Curriculum Enhancements',
      'Public Health Mobile Dental Clinic Outreaches',
    ],
    editorNote:
      'A showcase of transformative infrastructure upgrades and exemplary academic milestones.',
  },
]

export default function Newsletter() {
  const [selectedYear, setSelectedYear] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const featuredEdition = NEWSLETTER_EDITIONS[0]

  const years = useMemo(() => {
    const unique = Array.from(new Set(NEWSLETTER_EDITIONS.map((e) => e.year)))
    return ['All', ...unique]
  }, [])

  const filteredEditions = useMemo(() => {
    return NEWSLETTER_EDITIONS.filter((edition) => {
      const matchYear = selectedYear === 'All' || edition.year === selectedYear
      const matchSearch =
        searchQuery.trim() === '' ||
        edition.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edition.volume.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edition.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        edition.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchYear && matchSearch
    })
  }, [selectedYear, searchQuery])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF6F7] text-foreground">
        {/* ─── Hero Banner ─── */}
        <section className="relative overflow-hidden bg-foreground pb-20 pt-36 text-white md:pb-28 md:pt-44">
          <div className="pointer-events-none absolute inset-0 glow-radial-t opacity-75" />
          <div className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-accent backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                College Newsletter · APDCH Times
              </div>
              <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[4rem]">
                The Voice of Academic & Clinical Excellence
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                Explore official editions of <strong className="text-white">APDCH Times</strong> — our biannual
                institutional newsletter celebrating academic milestones, clinical innovations, student achievements,
                and research discoveries.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─── Featured 3D Book Spotlight (Latest Issue) ─── */}
        {featuredEdition && (
          <section className="relative -mt-10 px-5 md:-mt-14 md:px-8">
            <div className="mx-auto max-w-7xl">
              <Reveal>
                <div className="relative overflow-hidden rounded-[2.25rem] border border-primary/20 bg-gradient-to-br from-white via-white to-surface-soft p-6 shadow-[0_20px_60px_rgba(132,42,59,0.12)] md:p-10 lg:p-12">
                  <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

                  <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
                    {/* Left: Standing 3D Book Display with Real Cover */}
                    <div className="flex justify-center py-4">
                      <div className="group relative [perspective:1400px]">
                        {/* Realistic 3D Book Link */}
                        <a
                          href={featuredEdition.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative block h-[390px] w-[270px] rounded-r-xl transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(-14deg)_scale(1.03)] sm:h-[460px] sm:w-[320px]"
                          aria-label={`Open ${featuredEdition.title} PDF in new tab`}
                        >
                          {/* Book Shadow underneath */}
                          <div className="absolute -bottom-6 left-6 h-10 w-[88%] rounded-full bg-black/40 blur-xl transition-all duration-700 group-hover:left-8 group-hover:scale-105 group-hover:bg-black/50" />

                          {/* Stacked Pages (Thickness Effect on right) */}
                          <div className="absolute right-0 top-1 h-[98%] w-5 translate-x-3 rounded-r-sm bg-gradient-to-r from-[#e8e0d5] via-[#f7f4ec] to-[#d6cbbe] shadow-[inset_0_0_4px_rgba(0,0,0,0.3)]">
                            {/* Page edge texture lines */}
                            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#d6cbbe,#d6cbbe_1px,#f7f4ec_1px,#f7f4ec_3px)] opacity-60" />
                          </div>
                          <div className="absolute right-0 top-2 h-[96%] w-3 translate-x-5 rounded-r bg-[#c9bfae] shadow-sm" />

                          {/* Book Cover with Real First Page Image */}
                          <div className="relative h-full w-full overflow-hidden rounded-r-xl rounded-l-sm bg-slate-900 shadow-[16px_16px_40px_rgba(0,0,0,0.45),-3px_0_6px_rgba(0,0,0,0.3)] ring-1 ring-black/20">
                            {/* Real First Page Cover Image */}
                            <img
                              src={featuredEdition.coverImage}
                              alt={featuredEdition.title}
                              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                            />

                            {/* Book Spine Texture Line on Left */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-black/50 via-white/10 to-transparent" />
                            <div className="pointer-events-none absolute inset-y-0 left-6 w-[1px] bg-white/20" />

                            {/* Glossy Sheen Overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-white/20 opacity-75" />

                            {/* Interactive Hover Overlay Cue */}
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/45 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-foreground shadow-2xl">
                                Read Official Issue <ExternalLink className="h-3.5 w-3.5 text-primary" />
                              </span>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Right: Editorial Information & Actions */}
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-primary">
                        <Award className="h-3.5 w-3.5" /> Latest Release Spotlight
                      </div>
                      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {featuredEdition.title}
                      </h2>
                      <p className="mt-2 text-base font-semibold text-primary">
                        {featuredEdition.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                        {featuredEdition.editorNote}
                      </p>

                      {/* Key Highlights of this issue */}
                      <div className="mt-6">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                          Featured In This Issue
                        </p>
                        <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                          {featuredEdition.highlights.map((highlight) => (
                            <li key={highlight} className="flex items-start gap-2 text-xs font-medium text-foreground sm:text-sm">
                              <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                                <ChevronRight className="h-3 w-3" />
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Buttons */}
                      <div className="mt-8 flex flex-wrap items-center gap-3.5 border-t border-border pt-6">
                        <Button asChild size="lg" className="shadow-brand-md">
                          <a href={featuredEdition.pdf} target="_blank" rel="noopener noreferrer">
                            <BookOpen className="h-4 w-4" />
                            Read Newsletter (PDF)
                            <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70" />
                          </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-primary/20 text-primary hover:bg-primary/5">
                          <a href={featuredEdition.pdf} download target="_blank" rel="noopener noreferrer">
                            <Download className="h-4 w-4" />
                            Download Edition
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        )}

        {/* ─── Archive Book Shelf Grid Section ─── */}
        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            {/* Header + Filter Bar */}
            <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Publication Archive
                </span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Explore All Newsletter Editions
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Browse every official volume published by Adhiparasakthi Dental College &amp; Hospital.
                </p>
              </div>

              {/* Year Filter Pills & Search */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Search Box */}
                <div className="relative min-w-[200px]">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search editions..."
                    className="w-full rounded-full border border-border bg-white py-2 pl-9 pr-4 text-xs font-medium text-foreground transition-colors placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  )}
                </div>

                {/* Year Filter Buttons */}
                <div className="flex items-center rounded-full border border-border bg-white p-1 shadow-brand-xs">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
                        selectedYear === year
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-muted hover:text-foreground'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Display Grid with Real Cover Thumbnails */}
            {filteredEditions.length > 0 ? (
              <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredEditions.map((edition, idx) => (
                  <Reveal key={edition.id} delay={idx * 0.05}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white p-6 shadow-brand-xs transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-brand-md">
                      {/* 3D Book Display Preview with Real PDF Cover Image */}
                      <a
                        href={edition.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex h-72 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-100 to-slate-200 p-4 [perspective:1000px] cursor-pointer block"
                        aria-label={`Read ${edition.title} PDF`}
                      >
                        {/* Book Representation */}
                        <div className="relative h-[220px] w-[155px] rounded-r-md transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-12deg)_scale(1.05)]">
                          {/* Pages edge on right */}
                          <div className="absolute right-0 top-1 h-[98%] w-3 translate-x-2 rounded-r-sm bg-gradient-to-r from-[#d9cfc1] to-[#f4efe6] shadow-sm">
                            <div className="h-full w-full bg-[repeating-linear-gradient(to_bottom,#d9cfc1,#d9cfc1_1px,#f4efe6_1px,#f4efe6_3px)] opacity-70" />
                          </div>

                          {/* Front cover with Real Image */}
                          <div className="relative h-full w-full overflow-hidden rounded-r-md rounded-l-xs bg-slate-900 shadow-[10px_10px_25px_rgba(0,0,0,0.35)] ring-1 ring-black/20">
                            <img
                              src={edition.coverImage}
                              alt={edition.title}
                              className="h-full w-full object-cover object-top"
                            />

                            {/* Spine shadow line */}
                            <div className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 to-transparent" />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/15" />
                          </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-foreground shadow-md">
                            Read Issue <ExternalLink className="h-3 w-3 text-primary" />
                          </span>
                        </div>
                      </a>

                      {/* Content Details */}
                      <div className="mt-5 flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between text-xs font-semibold text-primary">
                            <span>{edition.volume}</span>
                            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                              {edition.year}
                            </span>
                          </div>
                          <a
                            href={edition.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                          >
                            {edition.title}
                          </a>
                          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted">
                            {edition.subtitle}
                          </p>
                        </div>

                        {/* Action Bar */}
                        <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                          <a
                            href={edition.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
                          >
                            <BookOpen className="h-3.5 w-3.5" /> Read Online <ExternalLink className="h-3 w-3 opacity-60" />
                          </a>
                          <a
                            href={edition.pdf}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-soft px-3 py-1.5 text-xs font-bold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-white"
                          >
                            <Download className="h-3.5 w-3.5" /> PDF
                          </a>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            ) : (
              <div className="mt-14 rounded-2xl border border-dashed border-border bg-white p-12 text-center">
                <BookOpen className="mx-auto h-10 w-10 text-muted" />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  No matching editions found
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Try clearing your search query or selecting &ldquo;All&rdquo; years.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-5"
                  onClick={() => {
                    setSelectedYear('All')
                    setSearchQuery('')
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
