import styles from './TechBadge.module.css';

function TechBadge({ children, icon, className = '' }) {
  return (
    <span className={`${styles.techBadge} ${className}`}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}

      <span className={styles.label}>{children}</span>
    </span>
  );
}

export default TechBadge;
