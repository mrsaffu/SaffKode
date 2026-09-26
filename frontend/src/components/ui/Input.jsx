import { forwardRef, useId } from 'react';
import styles from './Input.module.css';

/**
 * Input — labeled text input used across the Contact form (and any future
 * form). Label is always rendered (accessibility requirement); error text
 * is announced via aria-describedby + role="alert".
 */
const Input = forwardRef(function Input(
  { label, error, helperText, id, required, className = '', ...rest },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;

  return (
    <div className={`${styles.field} ${className}`}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      <input
        ref={ref}
        id={inputId}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className={styles.errorText}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className={styles.helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Input;
