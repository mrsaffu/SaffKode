import SlideUp from '../animation/SlideUp';
import styles from './SectionHeading.module.css';

/**
 * SectionHeading — the "— EYEBROW / Big Title / description" pattern that
 * appears at the top of nearly every section across every reference image
 * (e.g. "— ABOUT ME / More Than Just Code"). `highlight` renders that
 * portion of the title in the accent color, matching the yellow-keyword
 * treatment in the designs.
 */
function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <SlideUp className={`${styles.heading} ${styles[align]} ${className}`}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={styles.title}>
        {title}
        {highlight && <span className={styles.highlight}> {highlight}</span>}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </SlideUp>
  );
}

export default SectionHeading;
