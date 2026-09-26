import { SearchX } from 'lucide-react';
import { ProjectCard, EmptyState } from '../../../components/common';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ProjectsGrid.module.css';

/**
 * ProjectsGrid — the filtered/searched project card grid. Distinct from
 * "no projects exist" (which shouldn't happen) — this EmptyState is for
 * "your filter/search matched nothing", with a clear-filters affordance.
 */
function ProjectsGrid({ projects = [], hasActiveFilter, onClearFilters }) {
  if (projects.length === 0) {
    return (
      <EmptyState
        icon={<SearchX size={28} />}
        title="No projects match your filters"
        message="Try a different category or search term."
        action={
          hasActiveFilter && (
            <button type="button" className={styles.clearButton} onClick={onClearFilters}>
              Clear filters
            </button>
          )
        }
      />
    );
  }

  return (
    <Stagger className={styles.grid}>
      {projects.map((project) => (
        <StaggerItem key={project.slug}>
          <ProjectCard project={project} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default ProjectsGrid;
