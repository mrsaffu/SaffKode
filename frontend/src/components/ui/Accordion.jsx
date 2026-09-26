import { createContext, useContext, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import useReducedMotion from '../../hooks/useReducedMotion';
import styles from './Accordion.module.css';

const AccordionContext = createContext(null);

/**
 * Accordion — a list of expand/collapse items. Single-open by default
 * (opening one closes the previous); pass `allowMultiple` to let several
 * stay open at once. Used for FAQ sections (Service Details, Contact).
 */
export function Accordion({ children, allowMultiple = false, className = '' }) {
  const [openItems, setOpenItems] = useState(() => new Set());

  function toggle(id) {
    setOpenItems((prev) => {
      const next = allowMultiple ? new Set(prev) : new Set();
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle }}>
      <div className={`${styles.accordion} ${className}`}>{children}</div>
    </AccordionContext.Provider>
  );
}

/**
 * AccordionItem — a single question/answer pair. `id` must be unique
 * within the parent Accordion.
 */
export function AccordionItem({ id, title, children }) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }
  const { openItems, toggle } = context;
  const isOpen = openItems.has(id);
  const contentId = useId();
  const prefersReduced = useReducedMotion();

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => toggle(id)}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className={styles.title}>{title}</span>
        <ChevronDown
          size={18}
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={contentId}
            className={styles.contentWrapper}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReduced ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.content}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
