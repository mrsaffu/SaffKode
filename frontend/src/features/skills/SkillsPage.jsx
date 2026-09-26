import { useMemo, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { getSkillsOverview } from '../../services/api/skillsApi';
import PageContainer from '../../components/layout/PageContainer';
import Section from '../../components/layout/Section';
import SectionHeading from '../../components/layout/SectionHeading';
import { LoadingState, ErrorState, CTABanner, StatCard } from '../../components/common';
import { Stagger, StaggerItem } from '../../components/animation';
import SkillsHero from './sections/SkillsHero';
import SkillsFilterBar from './sections/SkillsFilterBar';
import SkillsGrid from './sections/SkillsGrid';
import ToolsGrid from './sections/ToolsGrid';
import SoftSkillsAndLearning from './sections/SoftSkillsAndLearning';
import styles from './SkillsPage.module.css';

/**
 * SkillsPage — Phase 11. Fetches GET /api/v1/skills once; category
 * filtering happens client-side since the full skill set is small.
 */
function SkillsPage() {
  const { data, error, isLoading, retry } = useApi(getSkillsOverview, []);
  const [activeCategory, setActiveCategory] = useState('All Skills');

  const filteredSkills = useMemo(() => {
    if (!data?.skills) return [];
    if (activeCategory === 'All Skills') return data.skills;
    return data.skills.filter((skill) => skill.category === activeCategory);
  }, [data, activeCategory]);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="grid" count={8} label="Loading skills" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState message="We couldn't load skills right now." onRetry={retry} />
      </PageContainer>
    );
  }

  return (
    <main>
      <SkillsHero stats={data?.heroStats} />

      <Section>
        <SectionHeading eyebrow="Technical Skills" title="Technical" highlight="Skills" />
        <SkillsFilterBar
          categories={data?.categories || []}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <SkillsGrid skills={filteredSkills} />
      </Section>

      <ToolsGrid tools={data?.tools} />

      <SoftSkillsAndLearning
        softSkills={data?.softSkills}
        learningApproach={data?.learningApproach}
      />

      {data?.footerStats?.length > 0 && (
        <Section>
          <Stagger className={styles.footerStatsGrid}>
            {data.footerStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <StatCard value={stat.value} label={stat.label} />
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      <CTABanner
        title="Have a project in mind?"
        subtitle="Let's turn your ideas into powerful digital solutions."
      />
    </main>
  );
}

export default SkillsPage;
