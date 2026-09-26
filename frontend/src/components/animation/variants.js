
/**
 * variants.js
 *
 * Centralized Framer Motion animation variants.
 *
 * Keeping variants here ensures consistent animation behavior
 * across the application and keeps reduced-motion handling
 * centralized.
 */

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const slideDownVariants = {
  hidden: {
    opacity: 0,
    y: -24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const revealVariants = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const staggerContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants = {
  hidden: {
    opacity: 0,
    y: 16,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const pageTransitionVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: 'easeIn',
    },
  },
};

/**
 * Creates reduced-motion variants by removing
 * translate/scale transformations while preserving
 * a short opacity transition.
 */
export function reduceMotionVariants(variants) {
  const stripped = {};

  for (const key of Object.keys(variants)) {
    const state = variants[key];

    stripped[key] = {
      ...(typeof state.opacity !== 'undefined'
        ? { opacity: state.opacity }
        : {}),
      ...(state.transition
        ? { transition: { duration: 0.2 } }
        : {}),
    };
  }

  return stripped;
}

