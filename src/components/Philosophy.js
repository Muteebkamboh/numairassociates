import { philosophyImage, principles } from '../data/content';
import { Container, Eyebrow, Reveal, RevealImage } from './ui';

function Philosophy() {
  return (
    <section id="philosophy" className="bg-sand py-20 lg:py-32">
      <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Left: label, statement and a quiet architectural detail */}
        <div className="lg:col-span-5">
          <Reveal>
            <Eyebrow className="text-charcoal/55">Our Philosophy</Eyebrow>
            <h2 className="mt-7 font-display text-[28px] font-medium leading-[1.22] tracking-[-0.025em] sm:text-[36px] lg:text-[40px]">
              We believe every property decision deserves careful research, clear guidance, and a
              long-term perspective —{' '}
              <span className="text-charcoal/50">helping our clients choose opportunities with
              confidence.</span>
            </h2>
          </Reveal>

          <RevealImage
            src={philosophyImage.src}
            alt={philosophyImage.alt}
            delay={0.15}
            className="mt-12 hidden aspect-[4/5] w-2/3 max-w-xs lg:block"
          />
        </div>

        {/* Right: the three principles, with large editorial numerals */}
        <ol className="space-y-3 lg:col-span-6 lg:col-start-7 lg:pt-4">
          {principles.map((principle, index) => (
            <Reveal
              key={principle.number}
              as="li"
              delay={index * 0.12}
              className="grid grid-cols-[4.5rem_1fr] gap-x-4 border border-charcoal/10 bg-clay px-6 py-10 sm:grid-cols-[7rem_1fr] sm:px-8 lg:py-12"
            >
              <span className="font-serif text-[44px] leading-none text-[#8C7550] sm:text-[64px]">
                {principle.number}
              </span>
              <div className="pt-1 sm:pt-2">
                <h3 className="font-display text-[22px] font-medium leading-tight tracking-[-0.02em] sm:text-[26px]">
                  {principle.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-charcoal/75">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

export default Philosophy;
