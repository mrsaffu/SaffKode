import styles from './Timeline.module.css';

/**
 * Timeline — vertical connector line container. Renders TimelineItem
 * children with a continuous line between their markers. Used by
 * Experience and Education sections.
 */
function Timeline({ children, className = '' }) {
  return <div className={`${styles.timeline} ${className}`}>{children}</div>;
}

export default Timeline;
