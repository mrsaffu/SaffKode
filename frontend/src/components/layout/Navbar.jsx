import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import Button from '../ui/Button';
import IconButton from '../ui/IconButton';
import MobileMenu from './MobileMenu';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Navbar — fixed header with logo, nav links (active dot indicator, as
 * seen under "About"/"Projects" etc. in the reference images), a
 * light/dark theme toggle, and the "Let's Talk" CTA. Theme state is
 * supplied by the app shell (ThemeProvider, wired in Phase 4) via props
 * so this component stays presentational and testable in isolation.
 */
function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoMark}>SA</span>
          <span className={styles.logoText}>
            <span className={styles.logoName}>
              Safwan <span className={styles.logoAccent}>Ahmad</span>
            </span>
            <span className={styles.logoTitle}>Full-Stack Developer</span>
          </span>
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ''}`
                  }
                >
                  {item.label}
                  <span className={styles.activeDot} aria-hidden="true" />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            role="switch"
            aria-checked={theme === 'light'}
            aria-label="Toggle light and dark theme"
            className={styles.themeToggle}
            onClick={onToggleTheme}
          >
            <Sun size={14} className={styles.themeIconLight} aria-hidden="true" />
            <Moon size={14} className={styles.themeIconDark} aria-hidden="true" />
            <span
              className={styles.themeThumb}
              data-theme-position={theme}
              aria-hidden="true"
            />
          </button>

          <Button to="/contact" variant="primary" size="sm" className={styles.cta}>
            Let&apos;s Talk →
          </Button>

          <IconButton
            aria-label="Open menu"
            size="md"
            className={styles.menuTrigger}
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </IconButton>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_ITEMS}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
    </header>
  );
}

export default Navbar;
