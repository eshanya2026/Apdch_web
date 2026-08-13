import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Tag,
  ArrowRight,
  Sparkles,
  Newspaper,
  BookOpen,
  Award,
  MapPin,
  Search,
  ChevronDown,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import FloatingHeroIcons from '@/components/shared/FloatingHeroIcons'
import {
  NEWS_HERO,
  NEWS_CATEGORIES,
  OFFICIAL_NEWS_EVENTS,
} from '@/lib/newsEventsConstants'

const INITIAL_VISIBLE_COUNT = 9
const LOAD_MORE_STEP = 6

export default function NewsEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)

  // Reset pagination when any filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [selectedCategory, selectedYear, searchQuery])

  // Extract available years dynamically
  const availableYears = [
    'All',
    ...Array.from(new Set(OFFICIAL_NEWS_EVENTS.map((e) => e.year || '2026'))).sort(
      (a, b) => Number(b) - Number(a)
    ),
  ]

  const filteredEvents = OFFICIAL_NEWS_EVENTS.filter((item) => {
    const matchesCat =
      selectedCategory === 'All' || item.category === selectedCategory
    const matchesYear =
      selectedYear === 'All' || item.year === selectedYear
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesYear && matchesSearch
  })

  const visibleEvents = filteredEvents.slice(0, visibleCount)
  const hasMore = visibleCount < filteredEvents.length

  const featuredEvent =
    OFFICIAL_NEWS_EVENTS.find((e) => e.featured) || OFFICIAL_NEWS_EVENTS[0]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8]">
        {/* 1. Hero Section */}
        <section
          className="relative flex min-h-[440px] items-center justify-center overflow-hidden px-5 pb-24 pt-44 text-white md:min-h-[500px] md:px-8 md:pb-28 md:pt-48"
          style={{ backgroundColor: '#2b0d14' }}
        >
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/25 blur-3xl" />

          {/* Newton's 3rd Law Interactive Floating Line Icons */}
          <FloatingHeroIcons />

          <Reveal className="w-full">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                <Newspaper className="h-4 w-4 text-[#e5a9b5]" />
                {NEWS_HERO.eyebrow}
              </span>
              <h1 className="mt-6 w-full font-display text-4xl tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {NEWS_HERO.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                {NEWS_HERO.description}
              </p>

              <div className="mt-8 flex items-center justify-center">
                <Button asChild size="lg" className="rounded-full bg-primary text-white shadow-brand-button hover:bg-primary/90">
                  <Link to="/research/newsletter">
                    <BookOpen className="h-4 w-4" />
                    APDCH Times Newsletter →
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* 2. Featured Event / Latest Highlight */}
        <section className="px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <Link
                to={`/news-events/${featuredEvent.id}`}
                className="group relative block overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-[0_20px_50px_-32px_rgba(82,24,34,.35)] transition-all duration-300 hover:border-primary/30 hover:shadow-brand-md text-left"
              >
                <div className="grid lg:grid-cols-12">
                  <div className="relative aspect-16/9 lg:aspect-auto lg:col-span-6 overflow-hidden bg-primary/5">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      onError={(e) => {
                        e.currentTarget.src = featuredEvent.fallbackImage
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-1 text-xs font-bold text-white shadow-md">
                      <Sparkles className="h-3.5 w-3.5" />
                      Latest Highlight
                    </span>
                  </div>

                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:col-span-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 font-bold text-primary">
                          <Tag className="h-3 w-3" />
                          {featuredEvent.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-muted">
                          <Calendar className="h-3.5 w-3.5 text-primary" />
                          {featuredEvent.date}
                        </span>
                      </div>

                      <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-foreground sm:text-3xl group-hover:text-primary transition-colors">
                        {featuredEvent.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base line-clamp-3">
                        {featuredEvent.excerpt}
                      </p>

                      <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-foreground/80">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span>{featuredEvent.location}</span>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-primary/10">
                      <span className="rounded-full bg-[#faf7f8] px-3.5 py-1 text-xs font-bold text-primary">
                        {featuredEvent.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                        <span>Read Full Story</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* 3. Filter Bar (Categories + Year Dropdown + Search Input) */}
        <section id="events-grid" className="px-5 pb-8 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {NEWS_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedCategory(cat)}
                      className={`rounded-full px-4 py-2 text-xs font-bold transition-all duration-300 sm:text-sm ${
                        isActive
                          ? 'bg-primary text-white shadow-brand-button scale-105'
                          : 'border border-primary/15 bg-white text-foreground hover:border-primary/30 hover:bg-primary/5'
                      }`}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>

              {/* Controls: Year Filter + Search Bar */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Year Dropdown Selector */}
                <div className="relative">
                  <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    aria-label="Filter by Year"
                    className="appearance-none rounded-full border border-primary/20 bg-white py-2.5 pl-4 pr-9 text-xs font-bold text-foreground shadow-xs transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm cursor-pointer"
                  >
                    {availableYears.map((y) => (
                      <option key={y} value={y}>
                        {y === 'All' ? 'All Years' : `Year ${y}`}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                </div>

                {/* Search Bar */}
                <div className="relative w-full sm:w-60 md:w-64">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-full border border-primary/20 bg-white py-2.5 pl-10 pr-4 text-xs text-foreground placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:text-sm shadow-xs"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Event Cards Grid (3 Per Row on Desktop) */}
        <section className="px-5 pb-16 md:px-8 md:pb-24">
          <div className="mx-auto max-w-6xl">
            {filteredEvents.length === 0 ? (
              <div className="rounded-3xl border border-primary/15 bg-white p-12 text-center shadow-sm">
                <Newspaper className="mx-auto h-12 w-12 text-muted/50" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">No events found</h3>
                <p className="mt-1 text-xs text-muted">Try choosing another category, year, or clearing your search query.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('All')
                    setSelectedYear('All')
                    setSearchQuery('')
                  }}
                  className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-5 py-2 text-xs font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {visibleEvents.map((evt, idx) => (
                    <Reveal key={evt.id} delay={idx * 0.03}>
                      <Link
                        to={`/news-events/${evt.id}`}
                        className="group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm text-left"
                      >
                        <div>
                          <div className="relative aspect-16/10 overflow-hidden bg-primary/5">
                            <img
                              src={evt.image}
                              alt={evt.title}
                              onError={(e) => {
                                e.currentTarget.src = evt.fallbackImage
                              }}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                              <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-md">
                                {evt.category}
                              </span>
                              <span className="text-[11px] font-medium text-white/90">
                                {evt.date}
                              </span>
                            </div>
                          </div>

                          <div className="p-6">
                            <h3 className="font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                              {evt.title}
                            </h3>
                            <p className="mt-2.5 text-xs leading-relaxed text-muted line-clamp-3">
                              {evt.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-0 border-t border-primary/5 flex items-center justify-between text-xs">
                          <span className="flex items-center gap-1 text-muted">
                            <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                            <span className="truncate max-w-[150px]">{evt.location}</span>
                          </span>

                          <span className="inline-flex items-center gap-1 font-bold text-primary group-hover:underline">
                            <span>Read</span>
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="mt-12 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((prev) => prev + LOAD_MORE_STEP)}
                      className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3.5 text-sm font-bold text-primary shadow-sm transition-all hover:border-primary/40 hover:bg-primary/5 hover:scale-105 cursor-pointer"
                    >
                      <span>Load More Events ↓</span>
                      <span className="text-xs text-muted">
                        ({filteredEvents.length - visibleCount} remaining)
                      </span>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* 5. Newsletter & Publications Cross-Link Section (Lite Maroon Theme) */}
        <section className="border-t border-primary/10 bg-[#f5eef0] px-5 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <Reveal>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    <BookOpen className="h-3.5 w-3.5" />
                    Official Publications
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl text-foreground">
                    Explore APDCH Times &amp; College Journals
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    Access our official bi-annual newsletter archives, student magazines, and peer-reviewed dental research publications.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Link
                    to="/research/newsletter"
                    className="group rounded-3xl border border-primary/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Newspaper className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      APDCH Times
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      Bi-annual institutional newsletter with PDF downloads.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                      Read Newsletters →
                    </span>
                  </Link>

                  <Link
                    to="/research/magazine"
                    className="group rounded-3xl border border-primary/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-brand-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      College Magazine
                    </h3>
                    <p className="mt-1 text-xs text-muted">
                      Annual student magazine featuring arts, poems &amp; essays.
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                      Explore Magazine →
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
