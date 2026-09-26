import { AlertTriangle } from 'lucide-react';
import Button from '../ui/Button';
import styles from './ErrorState.module.css';

/**
 * ErrorState — shown when an API call fails. Never exposes raw error
 * details (stack traces, status codes) to the user — only a friendly
 * message plus an optional retry action.
 */
function ErrorState({
  title = 'Something went wrong',
  message = "We couldn't load this content right now. Please try again in a moment.",
  onRetry,
}) {
  return (
    <div className={styles.wrapper} role="alert">
      <span className={styles.iconWrapper} aria-hidden="true">
        <AlertTriangle size={28} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry}>
          Try again
        </Button>
      )}
    </div>
  );
}

export default ErrorState;
