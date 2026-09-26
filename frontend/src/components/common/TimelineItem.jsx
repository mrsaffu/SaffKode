import styles from './TimelineItem.module.css';

/**
 * TimelineItem — one entry in a Timeline. `active` highlights the marker
 * (e.g. "current" role/education), `icon` renders inside the marker dot,
 * `isLast` suppresses the connector line for the final item.
 */
function TimelineItem({ icon, active = false, isLast = false, children }) {
  return (
    <div className={styles.item}>
      <div className={styles.markerColumn}>
        <span
          className={`${styles.marker} ${active ? styles.markerActive : ''}`}
        >
          {icon}
        </span>
        {!isLast && <span className={styles.connector} aria-hidden="true" />}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default TimelineItem;
