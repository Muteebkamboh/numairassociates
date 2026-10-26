import { plotGuide } from '../data/content';
import Icon from './icons';
import { ArrowIcon, Container, Reveal, RevealImage, SectionHeader } from './ui';

function PlotGuide() {
  return (
    <section id="plots" className="border-b border-line bg-paper py-20 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            eyebrow="Plot Selection"
            title="Find a Plot That Fits Your Vision"
            className="lg:col-span-7"
          />
          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              Whether you are planning to build, diversify your investments, or secure land for the
              future, the right choice begins with understanding your goals.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          {/* Representative photograph with a small honesty note */}
          <figure className="lg:col-span-7">
            <RevealImage
              src={plotGuide.image}
              alt={plotGuide.imageAlt}
              className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[520px]"
            />
            <figcaption className="mt-3 text-[11px] tracking-[0.04em] text-taupe">
              Representative photograph.
            </figcaption>
          </figure>

          <div className="flex flex-col lg:col-span-5">
            <ul className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {plotGuide.points.map((point, index) => (
                <Reveal key={point.title} as="li" delay={index * 0.12} className="flex gap-6 py-8 lg:py-9">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/50 text-[#8C7550]">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[20px] font-medium leading-tight tracking-[-0.02em] sm:text-[22px]">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-charcoal/70">{point.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.3} className="mt-10 lg:mt-auto lg:pt-10">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-4 bg-charcoal px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-charcoal/85 sm:inline-flex"
              >
                Discuss Your Requirements
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PlotGuide;
