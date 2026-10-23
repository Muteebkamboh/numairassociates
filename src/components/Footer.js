import { navLinks, projects, services } from '../data/content';
import { Container, Reveal } from './ui';

function FooterColumn({ title, children }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-label text-ink-muted/70">{title}</p>
      <ul className="mt-5 space-y-3 text-[14px]">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-ink-muted transition-colors duration-300 hover:text-ink-text"
      >
        {children}
      </a>
    </li>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-line bg-ink pb-10 pt-16 text-ink-text lg:pt-20">
      <Container>
        <Reveal y={16}>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
            <div className="sm:col-span-2 lg:col-span-4">
              <a href="#home" className="font-serif text-xl tracking-[0.18em]">
                THE SIGNATURE ESTATE
              </a>
              <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink-muted">
                Exceptional properties in Lahore, selected for their architecture, location and
                enduring value.
              </p>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <FooterColumn title="Explore">
                <FooterLink href="#home">Home</FooterLink>
                {navLinks.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterColumn>
            </div>

            <div className="lg:col-span-2">
              <FooterColumn title="Projects">
                {projects.map((project) => (
                  <FooterLink key={project.name} href="#projects">
                    {project.name}
                  </FooterLink>
                ))}
              </FooterColumn>
            </div>

            <div className="lg:col-span-2 lg:col-start-11">
              <FooterColumn title="Services">
                {services.map((service) => (
                  <FooterLink key={service.title} href="#services">
                    {service.title}
                  </FooterLink>
                ))}
              </FooterColumn>
              <p className="mt-8 text-[13px] leading-relaxed text-ink-muted">
                Contact details coming soon —{' '}
                <a href="#contact" className="text-ink-text underline-offset-4 hover:underline">
                  send an enquiry
                </a>
                .
              </p>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-3 border-t border-ink-line pt-6 text-[12px] text-ink-muted/70 sm:flex-row sm:justify-between">
            <p>© {year} The Signature Estate. All rights reserved.</p>
            <p>Photography via Pexels. Projects and figures shown are illustrative.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}

export default Footer;
