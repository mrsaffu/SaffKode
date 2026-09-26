import { motion } from 'framer-motion';
import { slideUpVariants, reduceMotionVariants } from './variants';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * SlideUp — content rises 24px while fading in. The default entrance
 * animation for section headings, cards, and hero copy blocks.
 */
function SlideUp({
  children,
  as = 'div',
  delay = 0,
  amount = 0.3,
  className,
  ...rest
}) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? reduceMotionVariants(slideUpVariants)
    : slideUpVariants;
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

export default SlideUp;
