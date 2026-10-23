import { properties } from '../data/content';
import { ArrowIcon, Container, Reveal, SectionHeader } from './ui';

function PropertyCard({ property }) {
  return (
    <article className="group">
      <div className="aspect-[4/5] overflow-hidden bg-line">
        <img
          src={property.image}
          alt={property.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-label text-taupe">
        <span>{property.type}</span>
        <span>{property.location}</span>
      </div>
      <h3 className="mt-3 font-serif text-[28px] leading-tight">{property.name}</h3>
      <p className="mt-3 text-[14px] text-charcoal/65">{property.details.join(' · ')}</p>

      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-3 border-b border-charcoal/30 pb-1 text-[12px] uppercase tracking-[0.16em] transition-colors duration-300 hover:border-charcoal"
      >
        Enquire
        <ArrowIcon className="h-3.5 w-3.5" />
      </a>
    </article>
  );
}

function SelectedProperties() {
  return (
    <section id="properties" className="border-b border-line py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Selected Properties" title="A considered collection" />
          <Reveal>
            <p className="max-w-xs text-[13px] leading-relaxed text-taupe">
              Listings shown are illustrative examples of the homes we represent, not live
              availability.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {properties.map((property, index) => (
            <Reveal
              key={property.name}
              delay={index * 0.1}
              className={index === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-1/2 lg:col-span-1 lg:w-auto' : ''}
            >
              <PropertyCard property={property} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SelectedProperties;
