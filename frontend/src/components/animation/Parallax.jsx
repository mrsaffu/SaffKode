import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Parallax — moves its children vertically at a fraction of scroll speed.
 * Used sparingly (e.g. hero background glow) per the "don't over-animate"
 * rule. Fully disabled under prefers-reduced-motion.
 */
function Parallax({ children, strength = 40, className, ...rest }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  if (prefersReduced) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className} {...rest}>
      {children}
    </motion.div>
  );
}

export default Parallax;
