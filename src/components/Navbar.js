import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { logo, navLinks, primaryLinks } from '../data/content';

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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isHidden, isAtTop } = useHideOnScroll();
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
    <header
      className={`sticky top-0 z-50 border-b border-line transition-[transform,opacity,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? 'pointer-events-none -translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      } ${isAtTop ? 'bg-ivory' : 'bg-ivory/95 backdrop-blur-sm'}`}
    >
      <nav
        className="flex h-20 items-center justify-between px-5 sm:px-8 lg:px-14"
        aria-label="Main navigation"
      >
        <a href="#home" className="flex h-full items-center py-2" aria-label="Back to top">
          {/* mix-blend-multiply lets the logo's white background melt into the ivory bar */}
          <img
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-14 w-auto object-contain mix-blend-multiply sm:h-16"
          />
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {primaryLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-charcoal/70 underline-offset-[6px] transition-colors duration-300 hover:text-charcoal hover:underline hover:decoration-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Circular menu control: a plus that turns into a cross */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/25 text-charcoal transition-colors duration-300 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
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

      {/* Full menu panel, used on every screen size */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute inset-x-0 top-full h-[calc(100svh-5rem)] overflow-y-auto border-b border-line bg-ivory sm:h-auto sm:max-h-[calc(100svh-5rem)]"
          >
            <ul className="grid gap-x-10 px-5 py-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-14 lg:py-10">
              {navLinks.map((link, index) => (
                <li key={link.href} className="border-b border-line">
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-baseline gap-4 py-4 transition-colors duration-300 hover:text-accent"
                  >
                    <span className="text-[11px] tracking-label text-taupe">0{index + 1}</span>
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
