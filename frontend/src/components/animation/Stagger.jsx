import { motion } from 'framer-motion';
import {
  staggerContainerVariants,
  staggerItemVariants,
  reduceMotionVariants,
} from './variants';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * Stagger
 *
 * Container for staggered entrance animations.
 * Animation-specific props are consumed here and are never
 * forwarded to the underlying DOM element.
 */
export function Stagger({
  children,
  as = 'div',
  amount = 0.2,
  staggerDelay,
  className,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;

  const variants = staggerDelay
    ? {
        ...staggerContainerVariants,
        visible: {
          ...staggerContainerVariants.visible,
          transition: {
            ...staggerContainerVariants.visible?.transition,
            staggerChildren: staggerDelay,
          },
        },
      }
    : staggerContainerVariants;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * StaggerItem
 *
 * Individual animated item used inside Stagger.
 * Automatically respects the user's reduced-motion preference.
 */
export function StaggerItem({ children, as = 'div', className, ...rest }) {
  const prefersReduced = useReducedMotion();

  const variants = prefersReduced
    ? reduceMotionVariants(staggerItemVariants)
    : staggerItemVariants;

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag className={className} variants={variants} {...rest}>
      {children}
    </MotionTag>
  );
}

export default Stagger;
