import {
  GraduationCap,
  Stethoscope,
  Building2,
  Users,
  FlaskConical,
  HeartHandshake,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { WHY_CHOOSE } from '@/lib/homeConstants'

const ICONS = {
  GraduationCap,
  Stethoscope,
  Building2,
  Users,
  FlaskConical,
  HeartHandshake,
}

export default function WhyChooseUs() {
  return (
    <section className="bg-background px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Why APDCH"
            title="The APDCH Advantage"
            description="Our approach combines academic excellence, practical experience, advanced technology, and ethical values to prepare graduates for successful careers in modern dentistry."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand-lg">
                  <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl" />
                  <div className="relative">
                    <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-brand-icon transition-transform duration-500 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
