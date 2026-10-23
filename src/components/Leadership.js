import { motion } from 'framer-motion';
import { ceo } from '../data/content';
import { ArrowIcon, Container, Eyebrow, Reveal, ease } from './ui';

// Shown until src/assets/images/ceo-numair.jpg is added (see the TODO in data/content.js)
function PortraitPlaceholder() {
  return (
    <div
      role="img"
      aria-label="Portrait of Numair to be added"
      className="relative flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#3A3733_0%,#2B2926_45%,#1E1D1B_100%)]"
    >
      <span className="font-serif text-[180px] leading-none text-ivory/10 sm:text-[240px]">N</span>
      <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-label text-taupe">
        Portrait to be added
      </span>
    </div>
  );
}

function Leadership() {
  return (
    <section id="leadership" className="overflow-hidden bg-charcoal py-20 text-ivory lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
        {/* Portrait with an offset hairline frame behind it */}
        <div className="relative lg:col-span-5">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.2, delay: 0.4, ease }}
            className="absolute -bottom-4 -right-3 left-4 top-4 border border-accent/40 sm:-bottom-6 sm:-right-6 sm:left-6 sm:top-6"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.1, ease }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            {/* Numair's official photograph: src/assets/images/ceo-numair.jpg (see data/content.js) */}
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
          </motion.div>
        </div>

        {/* Statement and introduction */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            <Eyebrow>Leadership &amp; Vision</Eyebrow>
            <h2 className="mt-6 font-display text-[56px] font-medium leading-none tracking-[-0.04em] sm:text-[80px] lg:text-[92px]">
              {ceo.name}
            </h2>
            <p className="mt-5 text-[12px] uppercase tracking-label text-accent">{ceo.title}</p>
          </Reveal>

          <Reveal delay={0.3}>
            <blockquote className="mt-12 border-l border-accent/50 pl-6 font-display text-[22px] font-normal leading-snug tracking-[-0.015em] text-ivory/90 sm:text-[28px]">
              “{ceo.statement}”
            </blockquote>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-ivory/65">{ceo.bio}</p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-col gap-8 border-t border-ivory/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              {/* Signature-style treatment of the name */}
              <p
                className="font-serif text-[40px] italic leading-none text-ivory/40"
                aria-hidden="true"
              >
                {ceo.name}
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 self-start border border-ivory/35 px-7 py-4 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-ivory hover:bg-ivory hover:text-charcoal sm:self-auto"
              >
                Connect With Our Team
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default Leadership;
