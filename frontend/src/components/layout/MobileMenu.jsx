import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { X, Sun, Moon } from 'lucide-react';
import IconButton from '../ui/IconButton';
import Button from '../ui/Button';
import styles from './MobileMenu.module.css';

/**
 * MobileMenu — full-screen overlay nav shown below the 1024px breakpoint.
 * Closes on Escape, link click, or backdrop tap. Rendered via portal so it
 * always sits above page content regardless of stacking context.
 */
function MobileMenu({ isOpen, onClose, items, theme, onToggleTheme }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.header}>
              <button
                type="button"
                role="switch"
                aria-checked={theme === 'light'}
                aria-label="Toggle light and dark theme"
                className={styles.themeToggle}
                onClick={onToggleTheme}
              >
                {theme === 'light' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'light' ? 'Light' : 'Dark'} mode</span>
              </button>
              <IconButton aria-label="Close menu" onClick={onClose}>
                <X size={20} />
              </IconButton>
            </div>

            <nav aria-label="Mobile primary">
              <ul className={styles.list}>
                {items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `${styles.link} ${isActive ? styles.active : ''}`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className={styles.cta}
              onClick={onClose}
            >
              Let&apos;s Talk →
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default MobileMenu;
