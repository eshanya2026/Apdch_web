import {
  GraduationCap,
  Shield,
  Heart,
  Lightbulb,
  Award,
  HandHeart,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { VALUES, VALUES_SECTION } from '@/lib/aboutConstants'

const ICONS = { GraduationCap, Shield, Heart, Lightbulb, Award, HandHeart }

export default function Values() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={VALUES_SECTION.eyebrow}
            title={VALUES_SECTION.title}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="group relative overflow-hidden rounded-[1.5rem] border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:shadow-brand">
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-accent/30 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
