import { UserCheck, Users, Home, BookOpen } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { STUDENT_SUPPORT } from '@/lib/academicsConstants'

const ICONS = { UserCheck, Users, Home, BookOpen }

export default function StudentSupport() {
  return (
    <section id="support" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="We're with you"
            title="Student Support"
            description="Mentorship, guidance, and campus facilities that help every learner thrive."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STUDENT_SUPPORT.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <Reveal key={item.title} delay={i * 0.07}>
                <article className="group flex h-full flex-col items-center rounded-[1.5rem] border border-border/80 bg-white p-7 text-center transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-brand">
                  <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surface-soft text-primary transition-all group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
