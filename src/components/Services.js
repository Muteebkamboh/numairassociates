import { services } from '../data/content';
import Icon from './icons';
import { ArrowIcon, Container, Reveal, SectionHeader } from './ui';

function ServiceCard({ service }) {
  return (
    // The hover lift lives on this inner element, so it never fights the scroll reveal
    <a
      href="#contact"
      aria-label={`${service.title}: enquire about this service`}
      className="group flex h-full flex-col border border-charcoal/10 bg-ivory p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-charcoal/25 hover:bg-paper sm:p-10 lg:p-12"
    >
      <div className="flex items-start justify-between">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition-colors duration-500 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
          <Icon name={service.icon} className="h-6 w-6" />
        </span>
        <span className="text-[11px] tracking-label text-taupe">{service.number}</span>
      </div>

      <h3 className="mt-12 font-display text-[24px] font-medium leading-tight tracking-[-0.02em] sm:mt-16 sm:text-[28px]">
        {service.title}
      </h3>
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-charcoal/70">{service.text}</p>

      <span className="mt-auto flex items-center gap-3 pt-10 text-[11px] uppercase tracking-label text-charcoal/60 transition-colors duration-300 group-hover:text-charcoal">
        <span className="h-px w-8 bg-charcoal/30 transition-all duration-500 group-hover:w-12 group-hover:bg-accent" />
        Enquire
        <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </a>
  );
}

function Services() {
  return (
    <section id="services" className="bg-sand py-24 lg:py-36">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            eyebrow="Our Services"
            title="Considered Services. Lasting Value."
            className="lg:col-span-7"
          />
          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              Clear guidance and a thoughtful approach at every stage of your property journey.
            </p>
          </Reveal>
        </div>

        {/* Two spacious columns on tablet and desktop, one column on phones */}
        <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-20 lg:gap-6">
          {services.map((service, index) => (
            <Reveal key={service.number} as="li" delay={(index % 2) * 0.12} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Services;
