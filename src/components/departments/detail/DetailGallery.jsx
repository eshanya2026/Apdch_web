import { Reveal, SectionHeading } from '@/components/shared/Reveal'

export default function DetailGallery({ department }) {
  if (!department?.gallery?.length) return null

  return (
    <section className="mesh-bg px-5 py-24 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Inside the department"
            title="Department Gallery"
            description={`Moments from clinics, labs, and learning spaces in ${department.name}.`}
          />
        </Reveal>
        {department.gallery.length <= 4 ? (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {department.gallery.map((item, i) => (
              <Reveal key={item.caption} delay={i * 0.05}>
                <figure className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-sm text-white opacity-90">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {department.gallery.map((item, i) => (
              <Reveal key={item.caption} delay={i * 0.05} className="mb-4 break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      i % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                    }`}
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 text-sm text-white opacity-90">
                    {item.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
