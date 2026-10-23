import { journal } from '../data/content';
import { Container, Reveal, SectionHeader } from './ui';

function Journal() {
  return (
    <section id="insights" className="border-b border-line bg-paper py-20 lg:py-28">
      <Container>
        <SectionHeader eyebrow="Insights" title="From the journal">
          Notes on architecture, neighbourhoods and living well. New essays are being prepared.
        </SectionHeader>

        <div className="mt-14 grid gap-12 md:grid-cols-3 lg:mt-20 lg:gap-10">
          {journal.map((entry, index) => (
            <Reveal key={entry.title} as="article" delay={index * 0.1}>
              <div className="aspect-[4/3] overflow-hidden bg-line">
                <img
                  src={entry.image}
                  alt={entry.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-label text-taupe">
                <span>{entry.category}</span>
                <span>Forthcoming</span>
              </div>
              <h3 className="mt-3 font-serif text-[24px] leading-snug">{entry.title}</h3>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Journal;
