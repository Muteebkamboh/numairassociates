import { motion } from 'framer-motion';
import { hero } from '../data/content';
import { ArrowIcon, Container, Eyebrow, ease } from './ui';

// Text appears one line after another on page load
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

function Hero() {
  return (
    // On desktop the hero is exactly one screen tall minus the 5rem navbar, so the whole
    // composition is visible without scrolling. Phones and tablets use a natural stacked
    // layout with the photograph first and the text underneath.
    <section
      id="home"
      className="border-b border-line lg:h-[calc(100vh-5rem)] lg:min-h-[600px] lg:max-h-[960px] supports-[height:100svh]:lg:h-[calc(100svh-5rem)]"
    >
      <Container className="grid gap-10 pb-14 pt-5 sm:gap-12 sm:pt-8 lg:h-full lg:grid-cols-12 lg:gap-12 lg:py-10 xl:gap-16">
        {/* Copy: below the photo on small screens, left column on desktop */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="order-2 flex flex-col justify-between lg:order-1 lg:col-span-5 lg:py-4"
        >
          <div>
            <motion.div variants={fadeUp}>
              <Eyebrow>Curated Real Estate</Eyebrow>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              // Slightly smaller on short laptop screens so the hero still fits in one view
              className="mt-6 font-display text-[36px] font-medium leading-[1.08] tracking-[-0.03em] min-[400px]:text-[40px] sm:text-[52px] lg:text-[46px] xl:text-[56px] lg:[@media(max-height:820px)]:text-[44px]"
            >
              <span className="block">Spaces to live.</span>{' '}
              <span className="block">
                Places to <span className="text-charcoal/50">belong.</span>
              </span>{' '}
              <span className="block">Value for generations.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-sm text-[15px] leading-relaxed text-charcoal/70"
            >
              A considered collection of exceptional properties, selected for their architecture,
              location, and enduring value.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-4 bg-charcoal px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-charcoal/85 sm:inline-flex"
              >
                Explore Properties
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex items-center justify-between border-t border-line pt-5 text-[11px] uppercase tracking-label text-taupe lg:mt-8"
          >
            <span>Lahore, Pakistan</span>
            <span className="hidden sm:inline">31.52° N · 74.36° E</span>
          </motion.div>
        </motion.div>

        {/* Photograph: first on small screens, right column on desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="order-1 aspect-[4/3] overflow-hidden bg-line sm:aspect-[16/10] lg:order-2 lg:col-span-7 lg:aspect-auto lg:h-full"
        >
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            className="h-full w-full object-cover object-[60%_center]"
          />
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
