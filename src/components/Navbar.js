import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { logo, navLinks, primaryLinks } from '../data/content';
import { ArrowIcon } from './ui';

// How far (in px) the page must move in one direction before the navbar reacts.
// This stops it flickering on slow scrolls or tiny trackpad movements.
const SCROLL_THRESHOLD = 10;
// Always show the navbar within this distance of the top of the page
const TOP_ZONE = 80;

// Hides the navbar while scrolling down and brings it back when scrolling up
function useHideOnScroll() {
  const [isHidden, setIsHidden] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY;

      if (y < TOP_ZONE) {
        setIsHidden(false);
        lastY = y;
      } else if (Math.abs(delta) >= SCROLL_THRESHOLD) {
        setIsHidden(delta > 0); // moving down hides, moving up shows
        lastY = y;
      }
      setIsAtTop(y < 8);
      ticking = false;
    };

    // Read the scroll position at most once per frame
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isHidden, isAtTop };
}

// Tracks which section is in the middle of the screen, for the gold active-link indicator
function useActiveSection(hrefs) {
  const [active, setActive] = useState(hrefs[0]);
  const key = hrefs.join(',');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const sections = key
      .split(',')
      .map((href) => document.querySelector(href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      // A thin band across the middle of the viewport
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isHidden, isAtTop } = useHideOnScroll();
  const activeHref = useActiveSection(primaryLinks.map((link) => link.href));
  const hidden = isHidden && !isOpen; // never hide while the menu is open

  // Close the menu with the Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    // Transparent over the hero photograph at the top of the page; a dark translucent bar once
    // the page scrolls, so the white links stay readable over the light sections below.
    <header
      className={`sticky top-0 z-50 border-b transition-[transform,opacity,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${
        isAtTop && !isOpen
          ? 'border-white/10 bg-transparent'
          : 'border-white/10 bg-ink/90 backdrop-blur-md'
      }`}
    >
      <nav
        className="relative flex h-20 items-center justify-between gap-6 px-5 sm:px-8 lg:px-14"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex h-full shrink-0 items-center py-2" aria-label="Back to top">
          {/* Light version of the logo (transparent background, ivory lettering) for dark backgrounds */}
          <img
            src={logo.lightSrc}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </a>

        {/* Centre links (desktop) with a champagne-gold indicator under the active section */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex xl:gap-11">
          {primaryLinks.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-2 text-[13px] tracking-[0.04em] transition-colors duration-300 hover:text-ink-text ${
                    isActive ? 'text-ink-text' : 'text-ink-text/75'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-1 h-px origin-center bg-gold transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="group hidden items-center gap-3 rounded-full border border-gold/70 px-6 py-2.5 text-[12px] tracking-[0.06em] text-ink-text transition-colors duration-300 hover:border-gold hover:bg-gold hover:text-ink sm:inline-flex"
          >
            Book a Consultation
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          {/* Mobile and tablet menu control: a plus that turns into a cross */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-ink-text transition-colors duration-300 hover:border-gold hover:text-gold lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="site-menu"
          >
            <svg
              className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              aria-hidden="true"
            >
              <path d="M8 1v14M1 8h14" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full menu panel for mobile and tablet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full h-[calc(100svh-5rem)] overflow-y-auto border-b border-white/10 bg-ink text-ink-text sm:h-auto sm:max-h-[calc(100svh-5rem)] lg:hidden"
          >
            <ul className="grid gap-x-10 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-14 lg:py-10">
              {navLinks.map((link, index) => (
                <li key={link.href} className="border-b border-white/10">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-4 transition-colors duration-300 hover:text-gold"
                  >
                    <span className="text-[11px] tracking-label text-gold">0{index + 1}</span>
                    <span className="font-display text-2xl font-medium tracking-[-0.02em] lg:text-3xl">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
