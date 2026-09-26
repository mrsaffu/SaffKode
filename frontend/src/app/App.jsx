
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './ThemeContext';
import useTheme from '../hooks/useTheme';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import AppRoutes from '../routes/AppRoutes';

/**
 * AppShell — reads theme state (must be inside ThemeProvider) and renders
 * the persistent chrome (Navbar/Footer) around the routed page content.
 * Split from App so ThemeProvider can wrap it and still provide context.
 */
function AppShell() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <AppRoutes />
      <Footer />
    </>
  );
}

/**
 * App.jsx — root application shell.
 *
 * Provider order:
 * BrowserRouter
 *   └── ThemeProvider
 *       └── AppShell
 *
 * React Router future flags opt into v7 route behavior early
 * while maintaining the existing React Router v6 architecture.
 */
function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <ThemeProvider>
        <AppShell />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

