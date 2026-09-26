import styles from './Badge.module.css';

/**
 * Badge — small pill label. Used for "Featured", category tags, status
 * indicators, and eyebrow labels ("— ABOUT ME").
 */
function Badge({
  children,
  variant = 'default',
  icon,
  className = '',
  ...rest
}) {
  const classes = [styles.badge, styles[`variant-${variant}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes} {...rest}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </span>
  );
}

export default Badge;
