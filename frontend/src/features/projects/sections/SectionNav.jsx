import { useEffect, useRef, useState } from 'react';
import styles from './SectionNav.module.css';

/**
 * SectionNav — sticky anchor navigation with scroll-spy, matching the
 * "Overview | Features | Tech Stack | Screenshots | Challenges | Results"
 * tab row on the Project Details reference. Every section on that
 * reference page is actually visible at once (it's one continuous page,
 * not swapped tab panels) — this nav just tracks which section is in
 * view and smooth-scrolls to the clicked one.
 */
function SectionNav({ sections = [] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const observerRef = useRef(null);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, [sections]);

  function handleClick(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const navHeight = 96;
    const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  if (sections.length === 0) return null;

  return (
    <nav className={styles.nav} aria-label="Project sections">
      <ul className={styles.list}>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={`${styles.tab} ${activeId === section.id ? styles.tabActive : ''}`}
              onClick={() => handleClick(section.id)}
              aria-current={activeId === section.id ? 'true' : undefined}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
