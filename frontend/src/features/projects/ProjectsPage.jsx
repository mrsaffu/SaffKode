import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { getProjects } from '../../services/api/projectsApi';
import PageContainer from '../../components/layout/PageContainer';
import Section from '../../components/layout/Section';
import SectionHeading from '../../components/layout/SectionHeading';

import {
  LoadingState,
  ErrorState,
  ProcessSteps,
  CTABanner,
  TechStackStrip,
} from '../../components/common';
import ProjectsHero from './sections/ProjectsHero';
import ProjectsFilterBar from './sections/ProjectsFilterBar';
import ProjectsGrid from './sections/ProjectsGrid';

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [searchInput, setSearchInput] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search input so filtering doesn't re-fetch on every keystroke.
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchInput), 300);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const { data, error, isLoading, retry } = useApi(
    () => getProjects({ category: activeCategory, search: debouncedSearch }),
    [activeCategory, debouncedSearch]
  );

  const hasActiveFilter = activeCategory !== 'All Projects' || debouncedSearch.length > 0;

  function handleClearFilters() {
    setActiveCategory('All Projects');
    setSearchInput('');
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState message="We couldn't load projects right now." onRetry={retry} />
      </PageContainer>
    );
  }

  return (
    <main>
      <ProjectsHero stats={data?.stats} />

      <Section>
        <ProjectsFilterBar
          filters={data?.filters || []}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          search={searchInput}
          onSearchChange={setSearchInput}
        />

        {isLoading ? (
          <LoadingState variant="grid" count={6} label="Loading projects" />
        ) : (
          <ProjectsGrid
            projects={data?.projects}
            hasActiveFilter={hasActiveFilter}
            onClearFilters={handleClearFilters}
          />
        )}
      </Section>
      <TechStackStrip
        technologies={data?.technologies}
        eyebrow="Technology Stack"
        title="Technologies We"
        highlight="Use"
      />

      {data?.developmentProcess?.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Process"
            title="My Development"
            highlight="Process"
            description="A structured approach to turning ideas into successful products."
          />
          <ProcessSteps steps={data.developmentProcess} />
        </Section>
      )}

      <CTABanner
        title="Have
         a Project in Mind?"
        subtitle="Let's turn your ideas into reality. I'm open to freelance work, collaborations, and full-time opportunities."
      />
    </main>
  );
}

export default ProjectsPage;
