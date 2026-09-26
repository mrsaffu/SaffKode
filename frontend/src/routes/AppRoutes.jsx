import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/animation/PageTransition';
import HomePage from '../features/home/HomePage';
import AboutPage from '../features/about/AboutPage';
import ServicesPage from '../features/services/ServicesPage';
import ServiceDetailsPage from '../features/services/ServiceDetailsPage';
import ProjectsPage from '../features/projects/ProjectsPage';
import ProjectDetailsPage from '../features/projects/ProjectDetailsPage';
import ExperiencePage from '../features/experience/ExperiencePage';
import SkillsPage from '../features/skills/SkillsPage';
import EducationPage from '../features/education/EducationPage';
import CertificationsPage from '../features/certifications/CertificationsPage';
import NotFoundPage from './NotFoundPage';
import PlaceholderPage from './PlaceholderPage';

/**
 * AppRoutes — the full route table. Only Home (Phase 5) has a real page
 * component today; every other feature route renders PlaceholderPage
 * until its own phase lands, so navigation and layout work end-to-end
 * without pretending unbuilt features are finished.
 */
function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          }
        />
        <Route
          path="/services"
          element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          }
        />
        <Route
          path="/services/:slug"
          element={
            <PageTransition>
              <ServiceDetailsPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetailsPage />
            </PageTransition>
          }
        />
        <Route
          path="/experience"
          element={
            <PageTransition>
              <ExperiencePage />
            </PageTransition>
          }
        />
        <Route
          path="/skills"
          element={
            <PageTransition>
              <SkillsPage />
            </PageTransition>
          }
        />
        <Route
          path="/education"
          element={
            <PageTransition>
              <EducationPage />
            </PageTransition>
          }
        />
        <Route
          path="/certifications"
          element={
            <PageTransition>
              <CertificationsPage />
            </PageTransition>
          }
        />
        <Route
          path="/blog"
          element={
            <PageTransition>
              <PlaceholderPage title="Blog" />
            </PageTransition>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <PageTransition>
              <PlaceholderPage title="Blog Article" />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <PlaceholderPage title="Contact" />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFoundPage />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
