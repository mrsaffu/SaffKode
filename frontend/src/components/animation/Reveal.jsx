import { motion } from 'framer-motion';
import { revealVariants, reduceMotionVariants } from './variants';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Reveal — a slightly richer entrance (fade + rise + scale) than SlideUp.
 * Best for cards and framed content where a touch more presence helps.
 */
function Reveal({
  children,
  as = 'div',
  delay = 0,
  amount = 0.3,
  className,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? reduceMotionVariants(revealVariants)
    : revealVariants;
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
