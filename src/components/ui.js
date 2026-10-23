import { motion } from 'framer-motion';

// Shared easing so every animation on the page feels like part of one system
export const ease = [0.22, 1, 0.36, 1];

// Small uppercase label used above headings
export function Eyebrow({ children, className = 'text-taupe' }) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-label ${className}`}>{children}</p>
  );
}

// Thin arrow used on links and cards
export function ArrowIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

// Shared side padding so every section lines up
export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full px-5 sm:px-8 lg:px-14 ${className}`}>{children}</div>;
}

// Fades content up gently the first time it scrolls into view.
// `as` picks the HTML element, e.g. as="li" inside a list.
export function Reveal({ children, delay = 0, className = '', as = 'div', y = 28 }) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// Photograph that settles in from a slight zoom as it enters the view.
// The hover zoom sits on the inner <img>, so the two effects never fight.
export function RevealImage({ src, alt, className = '', imgClassName = '', delay = 0 }) {
  return (
    <div className={`overflow-hidden bg-line ${className}`}>
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, delay, ease }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </div>
  );
}

// Section intro: eyebrow and heading rise in first, the supporting text follows a beat later.
// `align="center"` centres it; `tone="dark"` switches to light text for dark sections.
export function SectionHeader({ eyebrow, title, children, className = '', align = 'left', tone = 'light' }) {
  const centered = align === 'center';
  const dark = tone === 'dark';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <Reveal>
        {eyebrow && <Eyebrow className={dark ? 'text-ink-muted' : 'text-taupe'}>{eyebrow}</Eyebrow>}
        <h2
          className={`mt-5 font-display text-[32px] font-medium leading-[1.1] tracking-[-0.025em] sm:text-[42px] lg:text-[48px] ${
            dark ? 'text-ink-text' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={0.12}>
          <p
            className={`mt-5 text-[15px] leading-relaxed ${centered ? 'mx-auto max-w-lg' : 'max-w-md'} ${
              dark ? 'text-ink-muted' : 'text-charcoal/70'
            }`}
          >
            {children}
          </p>
        </Reveal>
      )}
    </div>
  );
}
