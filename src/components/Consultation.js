import { consultationSteps } from '../data/content';
import { ArrowIcon, Container, Eyebrow, Reveal } from './ui';

function Consultation() {
  return (
    <section id="consultation" className="border-b border-line bg-ivory py-20 lg:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="lg:col-span-6">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <Eyebrow>Your Property Journey</Eyebrow>
            </div>
            <h2 className="heading-section mt-6">
              Clarity Before Every <span className="text-[#8C7550]">Property Decision.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5 lg:col-start-8">
            <p className="text-[15px] leading-relaxed text-charcoal/70">
              Real estate decisions deserve more than guesswork. We help you define your
              objectives, understand the opportunity, evaluate relevant information, and plan your
              next steps with confidence.
            </p>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 border-b border-charcoal/30 pb-1 text-[12px] uppercase tracking-[0.18em] transition-colors duration-300 hover:border-accent hover:text-[#8C7550]"
            >
              Book a Consultation
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Four steps: a row on desktop, a 2×2 grid on tablets, a single column on phones */}
        <ol className="mt-16 grid gap-px overflow-hidden border border-charcoal/10 bg-charcoal/10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {consultationSteps.map((step, index) => (
            <Reveal key={step.number} as="li" delay={index * 0.12} className="group flex flex-col bg-ivory p-8 transition-colors duration-500 hover:bg-paper lg:p-9">
              <div className="flex items-center gap-4">
                <span className="font-display text-[40px] font-semibold leading-none text-[#8C7550] lg:text-[46px]">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-accent/40 transition-colors duration-500 group-hover:bg-accent" aria-hidden="true" />
              </div>
              <h3 className="heading-card mt-10 text-[19px] sm:text-[21px]">
                {step.title}
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-charcoal/70">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-8 text-[12px] leading-relaxed text-taupe">
            Our guidance supports informed decisions; it is not a guarantee of returns or future
            property values.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default Consultation;
