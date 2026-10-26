import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { stats } from '../data/content';
import Icon from './icons';
import { Container, Reveal, SectionHeader } from './ui';

const COUNT_DURATION = 1800; // milliseconds

// Counts from 0 up to `to` the first time the number scrolls into view.
// It starts on the final value, so the real figure still shows if the animation never runs;
// the card fades in at the same moment, which hides the reset to 0.
// Screen readers get the final value straight away via the hidden label.
function CountUp({ to, suffix }) {
  const reduceMotion = useReducedMotion();
  const [current, setCurrent] = useState(to);
  const frame = useRef(null);

  const start = () => {
    if (reduceMotion) return;
    const startTime = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - startTime) / COUNT_DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out: fast start, gentle finish
      setCurrent(Math.round(eased * to));
      if (progress < 1) frame.current = requestAnimationFrame(tick);
    };
    setCurrent(0);
    frame.current = requestAnimationFrame(tick);
  };

  // Stop counting if the component disappears mid-animation
  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const format = (n) => `${String(n).padStart(2, '0')}${suffix}`;

  return (
    <motion.span onViewportEnter={start} viewport={{ once: true, margin: '-40px' }}>
      <span aria-hidden="true" className="tabular-nums">
        {format(current)}
      </span>
      <span className="sr-only">{format(to)}</span>
    </motion.span>
  );
}

function Stats() {
  return (
    <section aria-labelledby="stats-heading" className="bg-ink py-20 text-ink-text lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="At a Glance"
          title={<span id="stats-heading">Numbers That Speak for Us</span>}
          align="center"
          tone="dark"
        >
          Thoughtful decisions, meaningful relationships, and a long-term approach to property.
        </SectionHeader>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-20 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              as="li"
              delay={index * 0.1}
              className="group flex min-h-[13rem] flex-col justify-between border border-ink-line bg-ink-card p-5 transition-colors duration-500 hover:border-lime/40 sm:min-h-[15rem] sm:p-8"
            >
              <Icon
                name={stat.icon}
                className="h-7 w-7 text-lime transition-transform duration-500 group-hover:-translate-y-0.5 sm:h-8 sm:w-8"
              />
              <div>
                <p className="font-display text-[38px] font-bold leading-none tracking-tight sm:text-[50px] lg:text-[54px]">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-[13px] text-ink-muted sm:text-sm">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-center text-[11px] text-ink-muted/70">
          Figures shown are illustrative placeholders.
        </p>
      </Container>
    </section>
  );
}

export default Stats;
