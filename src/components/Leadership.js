import { motion } from 'framer-motion';
import { ceo } from '../data/content';
import { ArrowIcon, Container, Eyebrow, Reveal, ease } from './ui';

// Shown until src/assets/images/ceo-numair.jpg is added (see the TODO in data/content.js)
function PortraitPlaceholder() {
  return (
    <div
      role="img"
      aria-label={`Portrait of ${ceo.name} to be added`}
      className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#3A3733_0%,#2B2926_45%,#1E1D1B_100%)]"
    >
      <span className="font-display text-[180px] font-extrabold leading-none text-ivory/10 sm:text-[240px]">N</span>
      <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-label text-taupe">
        Portrait to be added
      </span>
    </div>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="relative isolate overflow-hidden bg-charcoal py-20 text-ivory lg:py-32">
      {/* Soft warm glow behind the portrait */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/4 -z-10 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
      />

      <Container className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Portrait with an offset gold hairline frame and a name plate */}
        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="absolute -bottom-4 -right-3 left-4 top-4 border border-gold/40 sm:-bottom-6 sm:-right-6 sm:left-6 sm:top-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            {/* Official photograph: src/assets/images/ceo-numair.jpg (see data/content.js) */}
            {ceo.photo ? (
              // The source photo is square and shows a whole desk; this crop centres on Numair
              // and zooms in gently towards his face and shoulders for an editorial portrait
              <img
                src={ceo.photo}
                alt={ceo.photoAlt}
                className="h-full w-full origin-[53%_42%] scale-[1.18] object-cover object-[53%_center]"
              />
            ) : (
              <PortraitPlaceholder />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-20">
              <p className="font-display text-lg font-semibold text-ivory">{ceo.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-label text-gold">{ceo.title}</p>
            </div>
          </motion.div>
        </div>

        {/* Introduction */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15} x={40} y={0}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" aria-hidden="true" />
              <Eyebrow className="text-gold">Leadership &amp; Vision</Eyebrow>
            </div>
            <h2 className="heading-section mt-7 text-[34px] sm:text-[42px] lg:text-[48px]">
              {ceo.name}
            </h2>
            <p className="mt-4 text-[12px] uppercase tracking-label text-ivory/55">
              {ceo.title}, Numair Associates
            </p>
          </Reveal>

          <Reveal delay={0.3} x={40} y={0}>
            <blockquote className="mt-10 border-l border-gold/60 pl-6 font-display text-[21px] font-normal leading-snug tracking-[-0.015em] text-ivory/90 sm:text-[26px]">
              “{ceo.statement}”
            </blockquote>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-ivory/65">{ceo.bio}</p>
          </Reveal>

          {/* The principles behind his approach */}
          <ul className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
            {ceo.approach.map((item, index) => (
              <Reveal key={item.title} as="li" delay={0.4 + index * 0.1} className="border-t border-gold/30 pt-5">
                <p className="heading-card text-[16px] text-ivory">
                  {item.title}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-ivory/55">{item.text}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.6}>
            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-4 border border-gold/60 px-7 py-4 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              Speak With Our Team
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Leadership;
