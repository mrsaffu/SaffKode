import { useApi } from '../../hooks/useApi';
import { getCertificationsOverview } from '../../services/api/certificationsApi';
import PageContainer from '../../components/layout/PageContainer';
import { LoadingState, ErrorState, CTABanner } from '../../components/common';
import CertificationsHero from './sections/CertificationsHero';
import CertificationsGrid from './sections/CertificationsGrid';

/**
 * CertificationsPage — Phase 13. Fetches GET /api/v1/certifications once
 * and renders the hero and credential grid.
 */
function CertificationsPage() {
  const { data, error, isLoading, retry } = useApi(getCertificationsOverview, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="grid" count={3} label="Loading certifications" />
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
      <CertificationsHero stats={data?.heroStats} />
      <CertificationsGrid certifications={data?.certifications} />
      <CTABanner
        title="Let's Build Something Amazing Together"
        subtitle="I'm always open to new opportunities, collaborations, or just a tech conversation."
      />
    </main>
  );
}

export default CertificationsPage;
