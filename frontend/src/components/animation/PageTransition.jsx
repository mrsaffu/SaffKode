import { motion } from 'framer-motion';
import { pageTransitionVariants, reduceMotionVariants } from './variants';
import useReducedMotion from '../../hooks/useReducedMotion';

/**
 * PageTransition — wraps each routed page so navigation feels intentional
 * rather than an abrupt swap. Wired into the router's route element in
 * Phase 4 (Frontend Foundation).
 */
function PageTransition({ children }) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? reduceMotionVariants(pageTransitionVariants)
    : pageTransitionVariants;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
