import styles from './Skeleton.module.css';

/**
 * Skeleton — animated placeholder block shown while data loads. Compose
 * multiple Skeletons to mimic the shape of the content that will replace
 * them (e.g. a card skeleton = image skeleton + two text-line skeletons).
 */
function Skeleton({
  width = '100%',
  height = '1rem',
  radius = 'sm',
  className = '',
  ...rest
}) {
  const classes = [styles.skeleton, styles[`radius-${radius}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <span
      className={classes}
      style={{ width, height }}
      aria-hidden="true"
      {...rest}
    />
  );
}

export default Skeleton;
