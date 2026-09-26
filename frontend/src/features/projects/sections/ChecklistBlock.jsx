import { CheckCircle2 } from 'lucide-react';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ChecklistBlock.module.css';

/**
 * ChecklistBlock — the checkmark list pattern used for both "Challenges &
 * Learnings" and "Results & Impact" on the Project Details reference.
 * One component, configured via icon/title/items rather than duplicated.
 */
function ChecklistBlock({ id, icon, title, items = [] }) {
  if (items.length === 0) return null;

  return (
    <div id={id}>
      <h3 className={styles.title}>
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
        {title}
      </h3>
      <Stagger className={styles.list} as="ul">
        {items.map((item) => (
          <StaggerItem as="li" key={item} className={styles.item}>
            <CheckCircle2 size={16} className={styles.check} aria-hidden="true" />
            <span>{item}</span>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default ChecklistBlock;
