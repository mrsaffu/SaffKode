import Skeleton from '../ui/Skeleton';
import styles from './LoadingState.module.css';

/**
 * LoadingState — shown while a feature page/section awaits its API
 * response. `variant="grid"` renders skeleton cards for card grids;
 * `variant="lines"` renders text-line skeletons for prose sections.
 */
function LoadingState({ variant = 'grid', count = 3, label = 'Loading content' }) {
  const items = Array.from({ length: count });

  return (
    <div
      className={styles.wrapper}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      {variant === 'grid' ? (
        <div className={styles.grid}>
          {items.map((_, index) => (
            <div key={index} className={styles.card}>
              <Skeleton height="160px" radius="md" />
              <Skeleton height="20px" width="70%" />
              <Skeleton height="14px" width="90%" />
              <Skeleton height="14px" width="60%" />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.lines}>
          {items.map((_, index) => (
            <Skeleton key={index} height="16px" width={`${90 - index * 10}%`} />
          ))}
        </div>
      )}
      <span className={styles.srOnly}>{label}…</span>
    </div>
  );
}

export default LoadingState;
