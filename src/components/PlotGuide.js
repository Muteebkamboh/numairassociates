import { motion } from 'framer-motion';
import { propertyCategories } from '../data/content';
import { prefillEnquiry } from './Contact';
import { ArrowIcon, Container, Reveal, SectionHeader, ease, motionTokens, revealViewport } from './ui';

/*
  Desktop composition (12 columns): Plots & Land is a tall feature on the left, Houses and
  High-Rise stack on the right. Tablets put the feature full width above the other two;
  phones show one card per row.
*/
const layouts = [
  'md:col-span-2 lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
];
const heights = [
  'h-[460px] sm:h-[480px] lg:h-full lg:min-h-[640px]',
  'h-[460px] sm:h-[440px] lg:h-[310px]',
  'h-[460px] sm:h-[440px] lg:h-[310px]',
];

function CategoryCard({ category, index }) {
  const isFeature = index === 0;
  return (
    // The card links to the enquiry form and fills in what the visitor is looking for
    <a
      href="#contact"
      onClick={() => prefillEnquiry(category.enquiry)}
      className={`group relative flex flex-col justify-end overflow-hidden bg-ink text-ink-text ${heights[index]}`}
    >
      {/* Photograph: unveiled on scroll, then a slow, gentle zoom on hover */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.12 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={revealViewport}
        transition={{ duration: motionTokens.imageDuration, delay: index * motionTokens.stagger, ease }}
      >
        <img
          src={category.image}
          alt={category.imageAlt}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05] ${category.imagePosition}`}
        />
      </motion.div>

      {/* Overlays: a deep base for the text and a soft top edge for the number, deepening on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5 transition-opacity duration-700 group-hover:opacity-95"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/15"
      />

      {/* Number with a gold rule that lengthens on hover */}
      <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
        <span className="font-display text-[13px] font-semibold tracking-[0.12em] text-gold">
          {category.number}
        </span>
        <span
          aria-hidden="true"
          className="h-px w-8 bg-gold/70 transition-all duration-500 group-hover:w-14 group-hover:bg-gold"
        />
      </div>

      <div className={`relative p-6 sm:p-8 ${isFeature ? 'lg:p-12' : 'lg:p-9'}`}>
        <h3
          className={`heading-card text-ink-text ${
            isFeature ? 'text-[26px] sm:text-[32px] lg:text-[38px]' : 'text-[24px] sm:text-[26px]'
          }`}
        >
          {category.title}
        </h3>
        <p
          className={`mt-3 text-[14px] leading-relaxed text-ink-text/75 sm:text-[15px] ${
            isFeature ? 'max-w-md lg:mt-4' : 'max-w-sm'
          }`}
        >
          {category.text}
        </p>
        <span className="mt-6 inline-flex items-center gap-3 border-b border-gold/50 pb-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-300 group-hover:border-gold group-hover:text-gold-light">
          {category.cta}
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </a>
  );
}

function PlotGuide() {
  return (
    <section id="plots" className="border-b border-line bg-paper py-20 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <SectionHeader
            eyebrow="Property Categories"
            title="Discover the Right Property for Your Next Chapter."
            className="lg:col-span-7"
          />
          <Reveal delay={motionTokens.stagger * 2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              From finding the right plot to choosing a home or exploring elevated urban living, we
              help you navigate property opportunities with clarity, insight, and personalized
              guidance.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-5">
          {propertyCategories.map((category, index) => (
            <Reveal
              key={category.title}
              as="li"
              delay={index * motionTokens.stagger}
              className={layouts[index]}
            >
              <CategoryCard category={category} index={index} />
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <p className="mt-6 text-[12px] leading-relaxed text-taupe">
            Representative photography. Each category opens an enquiry so we can discuss options
            that suit your requirements.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default PlotGuide;
