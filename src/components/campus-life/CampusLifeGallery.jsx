import { Reveal, SectionHeading } from '@/components/shared/Reveal'
import { CAMPUS_GALLERY, GALLERY_SECTION } from '@/lib/campusLifeConstants'
import { cn } from '@/lib/utils'

export default function CampusLifeGallery() {
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

        <div className="mt-14 grid auto-rows-[200px] gap-4 sm:auto-rows-[240px] md:grid-cols-4 md:gap-5">
          {CAMPUS_GALLERY.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.05}
              className={cn(
                'group relative cursor-pointer overflow-hidden rounded-[1.5rem]',
                i === 0 && 'md:col-span-2 md:row-span-2',
                i === 3 && 'md:col-span-2'
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-400 group-hover:bg-foreground/25" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent p-5 opacity-90 transition-opacity group-hover:opacity-100">
                <p className="translate-y-1 font-semibold text-white transition-transform duration-400 group-hover:translate-y-0">
                  {item.title}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
