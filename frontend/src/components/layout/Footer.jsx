import { NavLink } from 'react-router-dom';
import PageContainer from './PageContainer';
import SocialLinks from '../common/SocialLinks';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

/**
 * Footer — logo/tagline, quick links, social icons, and a copyright row
 * with the "Code • Create • Innovate" style tagline seen at the bottom of
 * every reference page.
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <PageContainer className={styles.top}>
        <div className={styles.brand}>
          <NavLink to="/" className={styles.logo}>
            <span className={styles.logoMark}>SA</span>
            <span className={styles.logoText}>
              <span className={styles.logoName}>
                Safwan <span className={styles.logoAccent}>Ahmad</span>
              </span>
              <span className={styles.logoTitle}>Full-Stack Developer</span>
            </span>
          </NavLink>
        </div>

        <nav aria-label="Footer">
          <ul className={styles.links}>
            {FOOTER_LINKS.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={styles.link}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <SocialLinks />
      </PageContainer>

      <div className={styles.bottomBar}>
        <PageContainer className={styles.bottomInner}>
          <p>© {year} Safwan Ahmad. All rights reserved.</p>
          <p className={styles.tagline}>Code • Create • Innovate</p>
        </PageContainer>
      </div>
    </footer>
  );
}

export default Footer;
