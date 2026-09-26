import { useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { getServiceBySlug } from '../../services/api/servicesApi';
import PageContainer from '../../components/layout/PageContainer';
import Button from '../../components/ui/Button';
import { LoadingState, ErrorState } from '../../components/common';
import ServiceDetailsHero from './sections/ServiceDetailsHero';
import ServiceOverview from './sections/ServiceOverview';
import ProblemsSolved from './sections/ProblemsSolved';
import WhatYouGet from './sections/WhatYouGet';
import ServiceProcess from './sections/ServiceProcess';
import ServiceTechStack from './sections/ServiceTechStack';
import IdealFor from './sections/IdealFor';
import FeaturedCaseStudy from './sections/FeaturedCaseStudy';
import ServiceFAQ from './sections/ServiceFAQ';
import RelatedServices from './sections/RelatedServices';
import CTABanner from '../../components/common/CTABanner';

const CTA_CHECKLIST = [
  'Free initial consultation',
  'Clear communication',
  'On-time delivery',
  'Long-term support',
];

const CONTACT_EMAIL = 'safwanahmad.dev@gmail.com';

/**
 * ServiceDetailsPage — the single reusable case-study-style template for
 * every service, entirely data-driven via GET /api/v1/services/:slug.
 * Never duplicate this per service (no WebAppService.jsx, etc.) — a new
 * service only ever requires a new entry in services.data.js.
 */
function ServiceDetailsPage() {
  const { slug } = useParams();
  const { data: service, error, isLoading, retry } = useApi(
    () => getServiceBySlug(slug),
    [slug]
  );

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={6} label="Loading service details" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState
          title={error.status === 404 ? 'Service not found' : 'Something went wrong'}
          message={
            error.status === 404
              ? "The service you're looking for doesn't exist or may have been renamed."
              : "We couldn't load this service right now."
          }
          onRetry={error.status === 404 ? undefined : retry}
        />
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
          <Button to="/services" variant="ghost" icon={<ArrowLeft size={16} />}>
            Back to Services
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <main>
      <ServiceDetailsHero service={service} />
      <ServiceOverview overview={service.overview} whyItMatters={service.whyItMatters} />
      <ProblemsSolved problems={service.problemsSolved} />
      <WhatYouGet capabilities={service.capabilities} />
      <ServiceProcess steps={service.process} />
      <ServiceTechStack technologies={service.technologiesUsed} />
      <IdealFor idealFor={service.idealFor} />
      <FeaturedCaseStudy caseStudies={service.caseStudies} />
      <ServiceFAQ faqs={service.faqs} />
      <CTABanner
        eyebrow={service.cta?.eyebrow}
        title={service.cta?.title}
        subtitle={service.cta?.description}
        buttonLabel={service.cta?.primaryLabel}
        secondaryLabel={service.cta?.secondaryLabel}
        checklist={CTA_CHECKLIST}
        email={CONTACT_EMAIL}
        to="/contact"
      />
      <RelatedServices services={service.relatedServicesResolved} />
    </main>
  );
}

export default ServiceDetailsPage;
