import { forwardRef, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import inputStyles from './Input.module.css';
import styles from './Select.module.css';

/**
 * Select — native <select> styled to match Input/Textarea. Kept native
 * (rather than a custom listbox) for the strongest accessibility and
 * mobile support out of the box.
 */
const Select = forwardRef(function Select(
  { label, error, helperText, id, required, options = [], className = '', ...rest },
  ref
) {
  const generatedId = useId();
  const fieldId = id || generatedId;
  const errorId = `${fieldId}-error`;
  const helperId = `${fieldId}-helper`;

  return (
    <div className={`${inputStyles.field} ${className}`}>
      {label && (
        <label htmlFor={fieldId} className={inputStyles.label}>
          {label}
          {required && (
            <span className={inputStyles.required} aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      )}
      <div className={styles.selectWrapper}>
        <select
          ref={ref}
          id={fieldId}
          required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : helperText ? helperId : undefined}
          className={`${inputStyles.input} ${styles.select} ${
            error ? inputStyles.inputError : ''
          }`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className={styles.chevron} size={16} aria-hidden="true" />
      </div>
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

export default Select;
