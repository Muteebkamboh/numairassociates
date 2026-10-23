import { projects } from '../data/content';
import { ArrowIcon, Container, Reveal, RevealImage, SectionHeader } from './ui';

// Desktop rhythm: wide/narrow, narrow/wide, wide/narrow (out of 12 columns)
const desktopSpans = ['lg:col-span-7', 'lg:col-span-5', 'lg:col-span-5', 'lg:col-span-7', 'lg:col-span-7', 'lg:col-span-5'];

function ProjectCard({ project, index }) {
  const number = String(index + 1).padStart(2, '0');
  return (
    <article className="group">
      <a href="#contact" aria-label={`Enquire about ${project.name}`} className="block">
        <div className="relative">
          <RevealImage
            src={project.image}
            alt={project.imageAlt}
            className="aspect-[4/3] lg:aspect-auto lg:h-[440px]"
            imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute left-4 top-4 bg-ivory/90 px-2.5 py-1 text-[10px] tracking-label text-charcoal">
            {number}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 text-[11px] uppercase tracking-label text-taupe">
          <span>{project.category}</span>
          <span>{project.location}</span>
        </div>
        <div className="mt-3 flex items-start justify-between gap-6">
          <h3 className="font-display text-[24px] font-medium leading-tight tracking-[-0.02em] sm:text-[26px]">{project.name}</h3>
          <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal/20 transition-colors duration-300 group-hover:border-charcoal group-hover:bg-charcoal group-hover:text-ivory">
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-charcoal/65">
          {project.description}
        </p>
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-line bg-ivory py-20 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Our Projects" title="Selected Projects">
            A considered collection of places designed around the way people live.
          </SectionHeader>
          <Reveal>
            <p className="max-w-xs text-[12px] leading-relaxed text-taupe md:text-right">
              Project names and photography are illustrative placeholders.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={(index % 2) * 0.12} className={desktopSpans[index]}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
