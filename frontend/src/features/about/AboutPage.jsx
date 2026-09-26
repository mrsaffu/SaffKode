import { useApi } from '../../hooks/useApi';
import { getAboutPage } from '../../services/api/aboutApi';

import PageContainer from '../../components/layout/PageContainer';
import { LoadingState, ErrorState, CTABanner } from '../../components/common';

import AboutHero from './sections/AboutHero';
import MyStory from './sections/MyStory';
import ProfessionalJourney from './sections/ProfessionalJourney';
import CredentialsPreview from './sections/CredentialsPreview';

function AboutPage() {
  const { data, error, isLoading, retry } = useApi(getAboutPage, []);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={4} label="Loading about page" />
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
      <AboutHero profile={data?.profile} />

      <MyStory story={data?.story} values={data?.values} interests={data?.interests} />

      <ProfessionalJourney journey={data?.journey} />

      <CredentialsPreview
        certifications={data?.certifications}
        education={data?.education}
      />

      <CTABanner
        title="Let's Build Something Amazing Together!"
        subtitle="I'm always open to meaningful projects, collaborations, and opportunities."
        buttonLabel="Get In Touch"
      />
    </main>
  );
}

export default AboutPage;
