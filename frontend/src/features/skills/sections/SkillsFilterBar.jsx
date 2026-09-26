import { FadeIn } from '../../../components/animation';
import styles from './SkillsFilterBar.module.css';

/**
 * SkillsFilterBar — category pill row. Filtering happens client-side in
 * SkillsPage (the full skill set is small), so this is purely a
 * controlled, presentational component.
 */
function SkillsFilterBar({ categories = [], activeCategory, onCategoryChange }) {
  return (
    <FadeIn className={styles.pills} role="group" aria-label="Filter skills by category">
      {categories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            type="button"
            className={`${styles.pill} ${isActive ? styles.pillActive : ''}`}
            aria-pressed={isActive}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        );
      })}
    </FadeIn>
  );
}

export default SkillsFilterBar;
