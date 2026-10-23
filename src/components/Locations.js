import { locations } from '../data/content';
import { Container, Reveal, SectionHeader } from './ui';

function Locations() {
  return (
    <section id="locations" className="border-b border-line py-20 lg:py-28">
      <Container>
        <SectionHeader eyebrow="Locations" title="Rooted in Lahore">
          From new boulevards to settled, tree-lined streets, we look for addresses whose character
          will hold its value.
        </SectionHeader>

        <div className="mt-14 grid gap-14 md:grid-cols-2 lg:mt-20 lg:gap-10">
          {locations.map((location, index) => (
            <Reveal
              key={location.name}
              delay={index * 0.1}
              // Offset the second image for an editorial, staggered rhythm on larger screens
              className={index === 1 ? 'md:mt-24' : ''}
            >
              <figure>
                <div className="aspect-[4/5] overflow-hidden bg-line">
                  <img
                    src={location.image}
                    alt={location.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-6 grid grid-cols-[3rem_1fr] border-t border-line pt-5">
                  <span className="pt-1.5 text-[11px] tracking-label text-accent">
                    {location.number}
                  </span>
                  <div>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-[26px] leading-tight">{location.name}</h3>
                      <span className="text-[11px] uppercase tracking-label text-taupe">
                        {location.caption}
                      </span>
                    </div>
                    <p className="mt-3 max-w-md text-[14px] leading-relaxed text-charcoal/65">
                      {location.text}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Locations;
