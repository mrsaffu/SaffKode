import { Inbox } from 'lucide-react';
import styles from './EmptyState.module.css';

/**
 * EmptyState — distinct from ErrorState: this means the request succeeded
 * but returned zero results (e.g. a project filter with no matches).
 */
function EmptyState({
  icon,
  title = 'Nothing here yet',
  message = 'There is no content to show right now.',
  action,
}) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.iconWrapper} aria-hidden="true">
        {icon || <Inbox size={28} />}
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {action}
    </div>
  );
}

export default EmptyState;
