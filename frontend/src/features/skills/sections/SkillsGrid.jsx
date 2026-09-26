import { SkillCard, EmptyState } from '../../../components/common';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './SkillsGrid.module.css';

/**
 * SkillsGrid — the filtered skill card grid. `skills` is already
 * filtered by the active category (SkillsPage does this client-side).
 */
function SkillsGrid({ skills = [] }) {
  if (skills.length === 0) {
    return (
      <EmptyState title="No skills in this category" message="Try a different category." />
    );
  }

  return (
    <Stagger className={styles.grid} key={skills.map((s) => s.name).join('-')}>
      {skills.map((skill) => (
        <StaggerItem key={skill.name}>
          <SkillCard skill={skill} />
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default SkillsGrid;
