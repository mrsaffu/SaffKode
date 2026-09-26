import { Search } from 'lucide-react';
import { FadeIn } from '../../../components/animation';
import styles from './ProjectsFilterBar.module.css';

/**
 * ProjectsFilterBar — the pill-style category filter row plus a compact
 * search box, matching the "All Projects / Web Applications / ..." row.
 * Filtering is server-driven (ProjectsPage re-fetches on change) so this
 * component is purely presentational/controlled.
 */
function ProjectsFilterBar({ filters = [], activeCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <FadeIn className={styles.bar}>
      <div className={styles.pills} role="group" aria-label="Filter projects by category">
        {filters.map((filter) => {
          const isActive = filter === activeCategory;
          return (
            <button
              key={filter}
              type="button"
              className={`${styles.pill} ${isActive ? styles.pillActive : ''}`}
              aria-pressed={isActive}
              onClick={() => onCategoryChange(filter)}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className={styles.searchWrapper}>
        <label htmlFor="project-search" className={styles.srOnly}>
          Search projects
        </label>
        <Search size={16} className={styles.searchIcon} aria-hidden="true" />
        <input
          id="project-search"
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects..."
          className={styles.searchInput}
        />
      </div>
    </FadeIn>
  );
}

export default ProjectsFilterBar;
