import { useContext } from 'react';
import { ThemeContext } from '../app/ThemeContext';

/**
 * useTheme — access { theme, toggleTheme } from any component. Throws
 * early if used outside ThemeProvider so misuse is caught in development
 * rather than silently returning undefined.
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default useTheme;
