import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Button — the single button primitive for the whole app.
 * Never create variant-specific components (HomeButton, ProjectButton...);
 * configure via props instead.
 *
 * @param {'primary'|'outline'|'ghost'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {string} [to] - if provided, renders as a React Router <Link>
 * @param {string} [href] - if provided, renders as an external <a>
 */
const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconPosition = 'right',
    to,
    href,
    className = '',
    disabled = false,
    type = 'button',
    ...rest
  },
  ref
) {
  const classes = [
    styles.button,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    disabled ? styles.disabled : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled}
      {...rest}
    >
      {content}
    </button>
  );
});

export default Button;
