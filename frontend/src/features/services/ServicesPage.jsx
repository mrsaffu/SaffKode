import { useApi } from '../../hooks/useApi';
import { getServices } from '../../services/api/servicesApi';
import PageContainer from '../../components/layout/PageContainer';
import Section from '../../components/layout/Section';
import SectionHeading from '../../components/layout/SectionHeading';
import { LoadingState, ErrorState, ProcessSteps, CTABanner } from '../../components/common';
import ServicesHero from './sections/ServicesHero';
import ServicesGrid from './sections/ServicesGrid';
import TechStackStrip from './sections/TechStackStrip';

/**
 * ServicesPage — Phase 7. Fetches GET /api/v1/services once and renders
 * the full listing: hero, the 8-card services grid, development process,
 * tech stack, and the closing CTA. Services are entirely data-driven —
 * adding a new one only requires a new entry in services.data.js.
 */
function ServicesPage() {
  const { data, error, isLoading, retry } = useApi(getServices, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="grid" count={6} label="Loading services" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState message="We couldn't load services right now." onRetry={retry} />
      </PageContainer>
    );
  }

  return (
    <main>
      <ServicesHero />
      <ServicesGrid services={data?.services} />
      <Section>
        <SectionHeading
          eyebrow="My Process"
          title="My Development"
          highlight="Process"
        />
        <ProcessSteps steps={data?.developmentProcess} />
      </Section>
      <TechStackStrip technologies={data?.technologies} />
      <CTABanner
        title="Have a Project in Mind?"
        subtitle="I'm always open to discussing new opportunities, exciting ideas, or just a tech conversation."
      />
    </main>
  );
}

export default ServicesPage;
