import { useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Target, ShieldCheck, Database, Layers, AlertTriangle, TrendingUp } from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { getProjectBySlug } from '../../services/api/projectsApi';
import PageContainer from '../../components/layout/PageContainer';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { TechBadge, LoadingState, ErrorState, CTABanner } from '../../components/common';
import { GithubIcon } from '../../components/common/BrandIcons';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../components/animation';
import SectionNav from './sections/SectionNav';
import FeaturesCarousel from './sections/FeaturesCarousel';
import TechStackDetailGrid from './sections/TechStackDetailGrid';
import ScreenshotGallery from './sections/ScreenshotGallery';
import ChecklistBlock from './sections/ChecklistBlock';
import styles from './ProjectDetailsPage.module.css';

const STAT_ICONS = [ShieldCheck, Database, Layers];

/** Splits a title so the last word can be highlighted in accent color. */
function splitTitle(title = '') {
  const words = title.trim().split(' ');
  const last = words.pop();
  return { lead: words.join(' '), last };
}

/**
 * ProjectDetailsPage — the single reusable case-study template for every
 * project, entirely data-driven via GET /api/v1/projects/:slug. Never
 * duplicate this per project (no BoothManagementProject.jsx, etc.).
 * Sections render conditionally: a project with only listing-level facts
 * (no case-study detail) still gets a clean page, just a shorter one.
 */
function ProjectDetailsPage() {
  const { slug } = useParams();
  const { data: project, error, isLoading, retry } = useApi(
    () => getProjectBySlug(slug),
    [slug]
  );

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={6} label="Loading project details" />
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState
          title={error.status === 404 ? 'Project not found' : 'Something went wrong'}
          message={
            error.status === 404
              ? "The project you're looking for doesn't exist or may have been renamed."
              : "We couldn't load this project right now."
          }
          onRetry={error.status === 404 ? undefined : retry}
        />
        <div className={styles.backLinkWrapper}>
          <Button to="/projects" variant="ghost" icon={<ArrowLeft size={16} />}>
            Back to Projects
          </Button>
        </div>
      </PageContainer>
    );
  }

  const { lead, last } = splitTitle(project.title);

  const sections = [
    { id: 'overview', label: 'Overview' },
    project.keyFeatures?.length && { id: 'features', label: 'Features' },
    project.techStackDetailed?.length && { id: 'tech-stack', label: 'Tech Stack' },
    project.screenshots?.length && { id: 'screenshots', label: 'Screenshots' },
    project.challenges?.length && { id: 'challenges', label: 'Challenges' },
    project.results?.length && { id: 'results', label: 'Results' },
  ].filter(Boolean);

  return (
    <main>
      <Section spacing="lg">
        <FadeIn>
          <Button to="/projects" variant="ghost" size="sm" icon={<ArrowLeft size={16} />}>
            Back to Projects
          </Button>
        </FadeIn>

        {project.eyebrow && (
          <FadeIn delay={0.05} className={styles.eyebrow}>
            {project.eyebrow}
          </FadeIn>
        )}

        <SlideUp as="h1" delay={0.1} className={styles.title}>
          {lead && `${lead} `}
          <span className={styles.highlight}>{last}</span>
        </SlideUp>

        <SlideUp as="p" delay={0.15} className={styles.description}>
          {project.description}
        </SlideUp>

        <FadeIn delay={0.2} className={styles.actions}>
          {project.liveUrl && (
            <Button href={project.liveUrl} variant="primary" icon={<ExternalLink size={16} />}>
              Live Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="outline" icon={<GithubIcon size={16} />}>
              View Code
            </Button>
          )}
        </FadeIn>

        {!project.liveUrl && !project.githubUrl && (
          <FadeIn delay={0.2} className={styles.techRow}>
            {project.technologies?.map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
          </FadeIn>
        )}

        {project.stats?.length > 0 && (
          <Stagger className={styles.statRow}>
            {project.stats.map((stat, index) => {
              const Icon = STAT_ICONS[index % STAT_ICONS.length];
              return (
                <StaggerItem key={stat.label}>
                  <Card padding="sm" className={styles.statCard}>
                    <Icon size={18} className={styles.statIcon} aria-hidden="true" />
                    <div>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        )}
      </Section>

      {sections.length > 1 && <SectionNav sections={sections} />}

      <Section id="overview">
        <div className={project.keyFeatures?.length ? styles.overviewGrid : undefined}>
          <div>
            <h2 className={styles.sectionTitle}>
              Project <span className={styles.highlight}>Overview</span>
            </h2>
            <p className={styles.overviewText}>{project.description}</p>
            {project.goal && (
              <Card padding="md" className={styles.goalCard}>
                <span className={styles.goalIcon} aria-hidden="true">
                  <Target size={18} />
                </span>
                <div>
                  <p className={styles.goalLabel}>Goal</p>
                  <p className={styles.goalText}>{project.goal}</p>
                </div>
              </Card>
            )}
          </div>

          {project.keyFeatures?.length > 0 && (
            <div id="features">
              <h2 className={styles.sectionTitle}>
                Key <span className={styles.highlight}>Features</span>
              </h2>
              <FeaturesCarousel features={project.keyFeatures} />
            </div>
          )}
        </div>
      </Section>

      {project.techStackDetailed?.length > 0 && (
        <Section id="tech-stack" background="secondary">
          <h2 className={styles.sectionTitle}>Technology Stack</h2>
          <TechStackDetailGrid items={project.techStackDetailed} />
        </Section>
      )}

      {project.screenshots?.length > 0 && (
        <Section id="screenshots">
          <h2 className={styles.sectionTitle}>Application Screenshots</h2>
          <ScreenshotGallery screenshots={project.screenshots} />
        </Section>
      )}

      {(project.challenges?.length > 0 || project.results?.length > 0) && (
        <Section id="challenges" background="secondary">
          <div className={styles.checklistGrid}>
            <ChecklistBlock
              icon={<AlertTriangle size={18} />}
              title="Challenges & Learnings"
              items={project.challenges}
            />
            <ChecklistBlock
              id="results"
              icon={<TrendingUp size={18} />}
              title="Results & Impact"
              items={project.results}
            />
          </div>
        </Section>
      )}

      <CTABanner
        title="Let's Build Something Amazing Together!"
        subtitle="Interested in a similar solution? I'm always open to meaningful projects, collaborations, and opportunities."
      />
    </main>
  );
}

export default ProjectDetailsPage;
