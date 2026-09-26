import { useApi } from '../../hooks/useApi';
import { getExperienceOverview } from '../../services/api/experienceApi';
import PageContainer from '../../components/layout/PageContainer';
import { LoadingState, ErrorState, CTABanner } from '../../components/common';
import ExperienceHero from './sections/ExperienceHero';
import ExperienceTimeline from './sections/ExperienceTimeline';
import EducationCertifications from './sections/EducationCertifications';

/**
 * ExperiencePage — Phase 10. Fetches GET /api/v1/experience once and
 * renders the hero, professional timeline, and education/certifications.
 */
function ExperiencePage() {
  const { data, error, isLoading, retry } = useApi(getExperienceOverview, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={6} label="Loading experience" />
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
      <ExperienceHero stats={data?.heroStats} quote={data?.heroQuote} />
      <ExperienceTimeline roles={data?.experience} />
      <EducationCertifications
        education={data?.education}
        certifications={data?.certifications}
      />
      <CTABanner
        title="I'm always open to new opportunities."
        subtitle="Whether it's a full-time role, freelancing project, or just a tech discussion — let's connect!"
      />
    </main>
  );
}

export default ExperiencePage;
