import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailVideo({ department }) {
  if (!department.video?.youtubeId) return null

  return (
    <section className="mesh-bg px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading
            eyebrow="Department Video"
            title={department.video.title}
            description="Explore the department's teaching, clinical training, and learning resources."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-border/70 bg-black shadow-brand-card">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${department.video.youtubeId}`}
                title={department.video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
