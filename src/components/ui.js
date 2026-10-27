import { motion, useReducedMotion } from 'framer-motion';

/*
  Shared motion system, so every animation on the page feels like part of one family.
  Visitors who prefer reduced motion get fades only (MotionConfig reducedMotion="user" in App.js
  removes the movement; RevealImage also skips its clip reveal).
*/
export const ease = [0.22, 1, 0.36, 1];
export const motionTokens = {
  duration: 0.9, // seconds for text and cards
  imageDuration: 1.3, // seconds for photographs
  distance: 36, // px of travel for fade-ups
  stagger: 0.1, // seconds between items in a group
};

// Starts each reveal once the element is 12% of the screen height into view, so the movement
// is actually seen rather than finishing just below the fold. Runs once per element.
export const revealViewport = { once: true, margin: '0px 0px -12% 0px' };

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

// Fades content up the first time it scrolls into view.
// `as` picks the HTML element, e.g. as="li" inside a list. Pass `x` (and y={0}) for a sideways
// entrance in split layouts; use `delay={index * motionTokens.stagger}` to stagger groups.
export function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
  y = motionTokens.distance,
  x = 0,
}) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={revealViewport}
      transition={{ duration: motionTokens.duration, delay, ease }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// Photograph that is unveiled from the bottom up while settling in from a slight zoom.
// The hover zoom sits on the inner <img>, so the two effects never fight.
export function RevealImage({ src, alt, className = '', imgClassName = '', delay = 0 }) {
  const reduceMotion = useReducedMotion();
  const transition = { duration: motionTokens.imageDuration, delay, ease };
  return (
    <motion.div
      className={`overflow-hidden bg-line ${className}`}
      initial={reduceMotion ? false : { clipPath: 'inset(14% 0% 0% 0%)' }}
      whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={revealViewport}
      transition={transition}
    >
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, scale: 1.12 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={revealViewport}
        transition={transition}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      </motion.div>
    </motion.div>
  );
}

// Section intro: eyebrow, heading and supporting text rise in one after another.
// `align="center"` centres it; `tone="dark"` switches to light text for dark sections.
export function SectionHeader({ eyebrow, title, children, className = '', align = 'left', tone = 'light' }) {
  const centered = align === 'center';
  const dark = tone === 'dark';
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <Reveal y={16}>
          <Eyebrow className={dark ? 'text-ink-muted' : 'text-taupe'}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={motionTokens.stagger}>
        <h2
          className={`heading-section mt-5 ${
            dark ? 'text-ink-text' : 'text-charcoal'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {children && (
        <Reveal delay={motionTokens.stagger * 2}>
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
