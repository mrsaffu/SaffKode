import { forwardRef } from 'react';
import styles from './IconButton.module.css';

/**
 * IconButton — circular icon-only control. Requires aria-label since there
 * is no visible text. Used for theme toggle, carousel arrows, mobile menu
 * trigger, social icon links.
 */
const IconButton = forwardRef(function IconButton(
  {
    children,
    variant = 'outline',
    size = 'md',
    'aria-label': ariaLabel,
    as: Component = 'button',
    className = '',
    ...rest
  },
  ref
) {
  const classes = [
    styles.iconButton,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component ref={ref} className={classes} aria-label={ariaLabel} {...rest}>
      {children}
    </Component>
  );
});

export default IconButton;
