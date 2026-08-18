import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { HOME_LATEST_EVENTS, NEWS_HOME } from '@/lib/homeConstants'

export default function LatestNews() {
  return (
    <section id="news" className="bg-background px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={NEWS_HOME.eyebrow}
            title={NEWS_HOME.title}
            description={NEWS_HOME.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {HOME_LATEST_EVENTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Link
                to={item.id ? `/news-events/${item.id}` : '/news-events'}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand text-left"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-muted/20">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                        e.currentTarget.src = item.fallbackImage
                      }
                    }}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-sm backdrop-blur">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs font-medium text-muted">{item.date}</time>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                    {item.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read story
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="soft">
              <Link to="/news-events">
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
