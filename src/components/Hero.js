import { motion } from "framer-motion";
import { hero } from "../data/content";
import { ArrowIcon, Container, Eyebrow, ease } from "./ui";

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
    // Full-screen cinematic hero. -mt-20 pulls it up underneath the 5rem sticky navbar, so the
    // transparent navbar sits over the photograph. Capped at 1000px tall on very tall screens.
    <section
      id="home"
      className="relative isolate -mt-20 flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ink-text lg:min-h-[min(100svh,1000px)]"
    >
      {/*
        Background photograph: src/assets/images/Hero.png, set by `hero.background` in
        src/data/content.js. The residence sits on the right of the photo, so on narrow
        screens the image is shifted right to keep it in view.
      */}
      <motion.div
        role="img"
        aria-label={hero.imageAlt}
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease }}
        className="absolute inset-0 -z-20 bg-cover bg-[position:80%_center] bg-no-repeat lg:bg-[position:center_center]"
        style={{ backgroundImage: `url(${hero.background})` }}
      />

      {/* Dark overlays: strongest on the left (text), softer at the bottom and top (navbar) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/35 lg:from-black/80 lg:via-black/40 lg:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-black/75 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/60 to-transparent"
      />

      {/* Main copy, left aligned and vertically centred (top padding clears the navbar) */}
      <Container className="flex flex-1 items-center pb-16 pt-32 lg:pb-20 lg:pt-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[760px]"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="text-[10px] leading-relaxed text-gold sm:text-[11px]">
              {/* Each phrase stays on one line when the eyebrow wraps on phones */}
              <span className="whitespace-nowrap">
                Property Solutions&nbsp;&nbsp;/
              </span>
              {"  "}
              <span className="whitespace-nowrap">
                Property Consultation&nbsp;&nbsp;/
              </span>
              {"  "}
              <span className="whitespace-nowrap">Investment Advisory</span>
            </Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            // Slightly smaller on short laptop screens so the composition fits the first view
            className="heading-hero mt-6 text-[34px] text-[#F4EEE2] min-[400px]:text-[38px] sm:text-[50px] lg:text-[56px] xl:text-[62px] lg:[@media(max-height:760px)]:text-[52px]"
          >
            <span className="block">The Right Property</span>{" "}
            <span className="block text-gold">A Smarter Investment</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-[500px] text-[15px] leading-relaxed text-ink-text/75 sm:text-base"
          >
            From property selection to expert consultation, we help you explore
            plots, homes, and investment opportunities with clarity, insight,
            and confidence.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10"
          >
            <a
              href="#plots"
              className="group flex items-center justify-center gap-4 rounded-[2px] bg-gold px-8 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-gold-light sm:inline-flex"
            >
              Explore Our Services
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="self-center border-b border-ink-text/40 pb-1 text-[12px] uppercase tracking-[0.18em] text-ink-text transition-colors duration-300 hover:border-gold hover:text-gold sm:self-auto"
            >
              Book a Consultation
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;
