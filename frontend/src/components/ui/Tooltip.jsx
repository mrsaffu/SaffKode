import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Tooltip.module.css';

/**
 * Tooltip — wraps a single focusable/hoverable child and shows a small
 * label above it. Used for tech icons, truncated labels, and icon-only
 * controls that need extra context beyond their aria-label.
 */
function Tooltip({ children, label, position = 'top' }) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {typeof children === 'function'
        ? children({ 'aria-describedby': tooltipId })
        : children}
      <AnimatePresence>
        {visible && (
          <motion.span
            role="tooltip"
            id={tooltipId}
            className={`${styles.tooltip} ${styles[position]}`}
            initial={{ opacity: 0, y: position === 'top' ? 4 : -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 4 : -4 }}
            transition={{ duration: 0.15 }}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default Tooltip;
