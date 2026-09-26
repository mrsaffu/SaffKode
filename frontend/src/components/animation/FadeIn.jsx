import { motion } from 'framer-motion';
import { fadeInVariants, reduceMotionVariants } from './variants';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * FadeIn — wraps children in an opacity fade, triggered once when scrolled
 * into view. Use for any element that should appear gently rather than pop.
 */
function FadeIn({
  children,
  as = 'div',
  delay = 0,
  amount = 0.3,
  className,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? reduceMotionVariants(fadeInVariants)
    : fadeInVariants;
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

export default FadeIn;
