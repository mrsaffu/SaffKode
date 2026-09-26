import { useApi } from '../../hooks/useApi';
import { getEducationOverview } from '../../services/api/educationApi';
import PageContainer from '../../components/layout/PageContainer';
import { LoadingState, ErrorState, CTABanner } from '../../components/common';
import EducationHero from './sections/EducationHero';
import EducationTimeline from './sections/EducationTimeline';

/**
 * EducationPage — Phase 12. Fetches GET /api/v1/education once and
 * renders the hero and degree timeline.
 */
function EducationPage() {
  const { data, error, isLoading, retry } = useApi(getEducationOverview, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={4} label="Loading education" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState message="We couldn't load this page right now." onRetry={retry} />
      </PageContainer>
    );
  }

  return (
    <main>
      <EducationHero stats={data?.heroStats} />
      <EducationTimeline records={data?.education} />
      <CTABanner
        title="Let's Build Something Amazing Together"
        subtitle="I'm always open to new opportunities, collaborations, or just a tech conversation."
      />
    </main>
  );
}

export default EducationPage;
