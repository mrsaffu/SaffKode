import { forwardRef, useId } from 'react';
import inputStyles from './Input.module.css';
import styles from './Textarea.module.css';

/**
 * Textarea — multi-line counterpart to Input, reusing the same field/label
 * styling via Input.module.css so both look identical in forms.
 */
const Textarea = forwardRef(function Textarea(
  { label, error, helperText, id, required, rows = 5, className = '', ...rest },
  ref
) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;

  return (
    <div className={`${inputStyles.field} ${className}`}>
      <label htmlFor={fieldId} className={inputStyles.label}>
        {label}
        {required && (
          <span className={inputStyles.required} aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      <textarea
        ref={ref}
        id={fieldId}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`${inputStyles.input} ${styles.textarea} ${
          error ? inputStyles.inputError : ''
        }`}
        {...rest}
      />
      {error && (
        <p id={errorId} role="alert" className={inputStyles.errorText}>
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className={inputStyles.helperText}>
          {helperText}
        </p>
      )}
    </div>
  );
});

export default Textarea;
