import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { Button } from '@/components/ui/button'
import { NEWS } from '@/lib/constants'
import { NEWS_HOME } from '@/lib/homeConstants'

export default function LatestNews() {
  return (
    <section id="news" className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={NEWS_HOME.eyebrow}
            title={NEWS_HOME.title}
            description={NEWS_HOME.description}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {NEWS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/80 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {item.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <time className="text-xs font-medium text-muted">{item.date}</time>
                  <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-foreground group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read story
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex justify-center">
            <Button asChild variant="soft">
              <Link to="/#news">
                View All News
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
