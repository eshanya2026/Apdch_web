import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  Calendar,
  Tag,
  ArrowLeft,
  Sparkles,
  MapPin,
  Building,
  CheckCircle2,
  Share2,
  Check,
  BookOpen,
  Newspaper,
  ChevronRight,
  Clock,
  UserCheck,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { OFFICIAL_NEWS_EVENTS } from '@/lib/newsEventsConstants'

export default function NewsEventDetail() {
  const { eventId } = useParams()
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  // Scroll to top on load or ID change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [eventId])

  const event = OFFICIAL_NEWS_EVENTS.find((e) => e.id === eventId)

  if (!event) {
    return (
      <>
        <Navbar />
        <main className="min-h-[70vh] flex items-center justify-center bg-[#faf7f8] px-5 py-24 text-center">
          <div className="max-w-md rounded-3xl border border-primary/15 bg-white p-8 shadow-sm">
            <Newspaper className="mx-auto h-12 w-12 text-muted" />
            <h1 className="mt-4 font-display text-2xl font-bold text-foreground">
              Event Not Found
            </h1>
            <p className="mt-2 text-xs text-muted">
              The news or event story you are looking for does not exist or has been moved.
            </p>
            <Button asChild className="mt-6 rounded-full bg-primary text-white">
              <Link to="/news-events">
                <ArrowLeft className="h-4 w-4" />
                Back to News &amp; Events
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: event.title,
          text: event.excerpt,
          url: window.location.href,
        })
        .catch(() => {})
    } else {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#faf7f8] pt-32 pb-20 md:pt-36 md:pb-28">
        {/* Breadcrumb Navigation & Back Link */}
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/10 pb-5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-muted/60" />
              <Link to="/news-events" className="hover:text-primary transition-colors">
                News &amp; Events
              </Link>
              <ChevronRight className="h-3 w-3 text-muted/60" />
              <span className="font-semibold text-primary truncate max-w-[200px] sm:max-w-xs">
                {event.title}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => navigate('/news-events')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to All Events
            </button>
          </div>
        </div>

        {/* Article Header */}
        <header className="mx-auto mt-8 max-w-5xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <Tag className="h-3.5 w-3.5" />
                {event.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                {event.date}
              </span>
              <span className="rounded-full bg-[#faf7f8] border border-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-muted">
                {event.tag}
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              {event.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {event.excerpt}
            </p>
          </Reveal>
        </header>

        {/* Featured Poster / Event Banner Image */}
        <section className="mx-auto mt-8 max-w-5xl px-5 md:px-8">
          <Reveal delay={0.1}>
            <div className="relative aspect-16/9 w-full overflow-hidden rounded-3xl border border-primary/15 bg-primary/5 shadow-brand-sm">
              <img
                src={event.image}
                alt={event.title}
                onError={(e) => {
                  e.currentTarget.src = event.fallbackImage
                }}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3.5 py-1 text-xs backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {event.location}
                </span>
                <span className="text-xs font-medium text-white/90">
                  Adhiparasakthi Dental College &amp; Hospital
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Main Content & Sidebar Grid */}
        <div className="mx-auto mt-12 max-w-5xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Left Main Article Column (8 Cols) */}
            <article className="lg:col-span-8 space-y-8">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-primary/10 bg-white p-7 sm:p-9 shadow-sm">
                  {/* Speaker Banner (if applicable) */}
                  {event.speaker && (
                    <div className="mb-6 flex items-start gap-3.5 rounded-2xl border border-primary/15 bg-[#f5eef0] p-4.5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                        <UserCheck className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                          Resource Person / Speaker
                        </p>
                        <p className="mt-0.5 text-xs font-bold text-foreground sm:text-sm">
                          {event.speaker}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Organizing Department Banner */}
                  {event.organizer && (
                    <div className="mb-6 flex items-center gap-3 rounded-2xl border border-primary/10 bg-[#faf7f8] p-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Building className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted">
                          Organized by
                        </p>
                        <p className="text-xs font-bold text-foreground sm:text-sm">
                          {event.organizer}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Body Narrative */}
                  <div className="space-y-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
                    <p className="font-medium text-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Key Highlights Card */}
                  {event.highlights && event.highlights.length > 0 && (
                    <div className="mt-8 rounded-2xl border border-primary/15 bg-[#faf7f8] p-6">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
                        <Sparkles className="h-4 w-4" />
                        <span>Key Highlights &amp; Session Takeaways</span>
                      </div>
                      <ul className="mt-4 space-y-3">
                        {event.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-foreground/85 sm:text-sm leading-relaxed">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Share Strip & Back Button */}
                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-primary/10 pt-6">
                    <Button asChild variant="outline" size="sm" className="rounded-full border-primary/25 bg-white text-primary hover:bg-primary/5 font-bold">
                      <Link to="/news-events">
                        <ArrowLeft className="h-4 w-4" />
                        Back to All Events
                      </Link>
                    </Button>

                    <button
                      type="button"
                      onClick={handleShare}
                      className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-xs font-bold text-primary transition-all hover:bg-primary hover:text-white cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-green-600" />
                          <span>Link Copied!</span>
                        </>
                      ) : (
                        <>
                          <Share2 className="h-3.5 w-3.5" />
                          <span>Share Story</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </Reveal>
            </article>

            {/* Right Sticky Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Event Quick Facts Card */}
              <div className="rounded-3xl border border-primary/15 bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-foreground border-b border-primary/10 pb-3">
                  Event Quick Facts
                </h3>

                <div className="mt-4 space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Date</p>
                      <p className="text-muted">{event.date}</p>
                    </div>
                  </div>

                  {event.time && (
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-bold text-foreground">Time / Duration</p>
                        <p className="text-muted">{event.time}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Venue</p>
                      <p className="text-muted">{event.location}</p>
                    </div>
                  </div>

                  {event.speaker && (
                    <div className="flex items-start gap-3">
                      <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <div>
                        <p className="font-bold text-foreground">Speaker / Resource</p>
                        <p className="text-muted">{event.speaker}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start gap-3">
                    <Tag className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-bold text-foreground">Category</p>
                      <p className="text-muted">{event.category}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter Promotion Card (Lite Maroon Theme) */}
              <div className="rounded-3xl border border-primary/15 bg-[#f5eef0] p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
                  <BookOpen className="h-3 w-3" />
                  Newsletter
                </span>
                <h4 className="mt-3 font-display text-lg font-bold text-foreground">
                  Read APDCH Times
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  Download official bi-annual newsletter editions with high-res photo galleries and clinical reports.
                </p>
                <Button asChild size="sm" className="mt-5 w-full rounded-full bg-primary text-white font-bold hover:bg-primary/90 shadow-brand-button">
                  <Link to="/research/newsletter">
                    Explore Newsletters →
                  </Link>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
