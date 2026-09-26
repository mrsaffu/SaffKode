import { useApi } from '../../hooks/useApi';
import { getPortfolioOverview } from '../../services/api/portfolioApi';
import PageContainer from '../../components/layout/PageContainer';
import { LoadingState, ErrorState } from '../../components/common';
import Hero from './sections/Hero';
import AboutPreview from './sections/AboutPreview';
import SkillsPreview from './sections/SkillsPreview';
import ServicesPreview from './sections/ServicesPreview';
import FeaturedProjects from './sections/FeaturedProjects';
import JourneyPreview from './sections/JourneyPreview';
import BlogPreview from './sections/BlogPreview';
import CTA from './sections/CTA';
import styles from './Home.module.css';

/**
 * HomePage — the strongest overview/conversion page. Fetches the
 * optimized aggregate payload from GET /api/v1/portfolio once and passes
 * each slice down to its section, rather than each section fetching its
 * own data (which is what the dedicated feature pages do in later phases).
 */
function HomePage() {
  const { data, error, isLoading, retry } = useApi(getPortfolioOverview, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="grid" count={3} label="Loading homepage content" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState
          message="We couldn't load the homepage content right now."
          onRetry={retry}
        />
      </PageContainer>
    );
  }

  return (
    <main className={styles.home}>
      <Hero stats={data?.heroStats} />
      <AboutPreview about={data?.about} />
      <SkillsPreview skills={data?.skills} />
      <ServicesPreview services={data?.services} />
      <FeaturedProjects projects={data?.projects} />
      <JourneyPreview
        experience={data?.experience}
        education={data?.education}
        certifications={data?.certifications}
      />
      <BlogPreview posts={data?.blog} />
      <CTA />
    </main>
  );
}

export default HomePage;
