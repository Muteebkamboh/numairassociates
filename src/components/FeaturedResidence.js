import { featured } from '../data/content';
import { ArrowIcon, Container, Reveal } from './ui';

function FeaturedResidence() {
  return (
    <section id="residence" className="bg-charcoal text-ivory">
      <Container className="grid gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <Reveal className="lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-ivory/10 lg:aspect-[5/6]">
            <img
              src={featured.image}
              alt={featured.imageAlt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
          <p className="text-[11px] uppercase tracking-label text-taupe">Featured Residence</p>
          <h2 className="mt-5 font-serif text-[38px] leading-[1.08] sm:text-[48px] lg:text-[56px]">
            {featured.name}
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ivory/70">{featured.description}</p>

          <dl className="mt-10 border-t border-ivory/15">
            {featured.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between gap-6 border-b border-ivory/15 py-4 text-[14px]"
              >
                <dt className="text-taupe">{spec.label}</dt>
                <dd className="text-right">{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[12px] text-taupe">Illustrative residence — details are examples.</p>

          <div className="mt-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 border border-ivory/40 px-7 py-4 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-charcoal"
            >
              Arrange a Private Viewing
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default FeaturedResidence;
