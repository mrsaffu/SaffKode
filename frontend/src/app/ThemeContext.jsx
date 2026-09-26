import { createContext, useCallback, useEffect, useMemo, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(null);

const THEME_STORAGE_KEY = 'theme';

function getInitialTheme() {
  if (typeof document === 'undefined') return 'dark';
  // index.html's inline script already set this attribute before React
  // mounted, so reading it back here keeps React state and the DOM in sync
  // without re-deciding (and without re-introducing a flash).
  return document.documentElement.getAttribute('data-theme') || 'dark';
}

/**
 * ThemeProvider — owns theme state, persists changes to localStorage, and
 * applies `data-theme` to <html> so every CSS token in tokens.css resolves
 * to the right value. Wraps the whole app in App.jsx.
 */
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // localStorage may be unavailable (private browsing, disabled) —
      // theme still works for the session, it just won't persist.
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
