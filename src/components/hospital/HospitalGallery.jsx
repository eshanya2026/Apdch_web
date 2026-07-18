import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { HOSPITAL_GALLERY, GALLERY_SECTION } from '@/lib/hospitalConstants'
import { cn } from '@/lib/utils'

export default function HospitalGallery() {
  return (
    <section id="gallery" className="mesh-bg px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow={GALLERY_SECTION.eyebrow}
            title={GALLERY_SECTION.title}
            description={GALLERY_SECTION.description}
          />
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] gap-4 sm:auto-rows-[220px] md:grid-cols-4 md:gap-5">
          {HOSPITAL_GALLERY.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className={cn(
                'group relative overflow-hidden rounded-[1.5rem]',
                i === 0 && 'md:col-span-2 md:row-span-2',
                i === 3 && 'md:col-span-2',
                i === 4 && 'md:col-span-2'
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <p className="absolute bottom-4 left-4 text-sm font-semibold text-white md:text-base">
                {item.title}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
