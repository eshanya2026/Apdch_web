/** coffee-tech big-type marquee — massive scrolling type section break */
export default function BigTypeMarquee({ text = 'Beyond your expectations' }) {
  const items = Array.from({ length: 4 }, (_, i) => (
    <span
      key={i}
      className="font-hero text-[14vw] font-bold leading-none tracking-tight text-foreground md:text-[9vw]"
    >
      {text}
      <span className="mx-6 inline-block h-[0.5em] w-[0.5em] translate-y-[-0.05em] rounded-full bg-primary align-middle" />
    </span>
  ))

  return (
    <section aria-hidden className="ct-marquee select-none border-y border-border bg-background py-10 md:py-14">
      <div className="ct-marquee-track">{items}</div>
      <div className="ct-marquee-track">{items}</div>
    </section>
  )
}
