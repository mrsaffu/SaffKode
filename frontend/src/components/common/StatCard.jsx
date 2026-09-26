import Card from '../ui/Card';
import styles from './StatCard.module.css';

/**
 * StatCard — the small icon/value/label card seen repeatedly beneath every
 * hero ("2+ Years", "10+ Projects Completed", "100% Passion", ...).
 */
function StatCard({ icon, value, label, className = '' }) {
  return (
    <Card padding="sm" className={`${styles.statCard} ${className}`}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <div>
        <p className={styles.value}>{value}</p>
        <p className={styles.label}>{label}</p>
      </div>
    </Card>
  );
}

export default StatCard;
