import { useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Target,
  ShieldCheck,
  Database,
  Layers,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { useApi } from '../../hooks/useApi';
import { getProjectBySlug } from '../../services/api/projectsApi';
import PageContainer from '../../components/layout/PageContainer';
import Section from '../../components/layout/Section';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { TechBadge, LoadingState, ErrorState, CTABanner } from '../../components/common';
import { GithubIcon } from '../../components/common/BrandIcons';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../components/animation';
// import SectionNav from './sections/SectionNav';
import FeaturesCarousel from './sections/FeaturesCarousel';
import TechStackDetailGrid from './sections/TechStackDetailGrid';
import ScreenshotGallery from './sections/ScreenshotGallery';
import ChecklistBlock from './sections/ChecklistBlock';
import styles from './ProjectDetailsPage.module.css';

const STAT_ICONS = [ShieldCheck, Database, Layers];

function splitTitle(title = '') {
  const words = title.trim().split(/\s+/);
  const last = words.pop() || '';
  return { lead: words.join(' '), last };
}

function ProjectDetailsPage() {
  const { slug } = useParams();

  const {
    data: project,
    error,
    isLoading,
    retry,
  } = useApi(() => getProjectBySlug(slug), [slug]);

  if (isLoading) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <LoadingState variant="lines" count={6} label="Loading project details" />
      </PageContainer>
    );
  }

  if (error || !project) {
    return (
      <PageContainer as="main" style={{ padding: '4rem 0' }}>
        <ErrorState
          title={error?.status === 404 ? 'Project not found' : 'Something went wrong'}
          message={
            error?.status === 404
              ? "The project you're looking for doesn't exist or may have been renamed."
              : "We couldn't load this project right now."
          }
          onRetry={error?.status === 404 ? undefined : retry}
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

  const liveDemo = project.liveDemo ?? project.liveUrl;
  const viewCode = project.viewCode ?? project.githubUrl;

  return (
    <main className={styles.projectPage}>
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <FadeIn>
              <Button
                to="/projects"
                variant="ghost"
                size="sm"
                icon={<ArrowLeft size={16} />}
                className={styles.backButton}
              >
                Back to Projects
              </Button>
            </FadeIn>

            {project.eyebrow && (
              <FadeIn delay={0.05} className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                {project.eyebrow}
              </FadeIn>
            )}

            <SlideUp as="h1" delay={0.1} className={styles.title}>
              {lead && <span>{lead} </span>}
              <span className={styles.highlight}>{last}</span>
            </SlideUp>

            <SlideUp as="p" delay={0.15} className={styles.description}>
              {project.description}
            </SlideUp>

            <FadeIn delay={0.2} className={styles.actions}>
              <a
                href={liveDemo || undefined}
                target={liveDemo ? '_blank' : undefined}
                rel={liveDemo ? 'noopener noreferrer' : undefined}
                aria-disabled={!liveDemo}
                title={
                  liveDemo
                    ? 'Open live project'
                    : 'Add liveDemo URL in project data to enable this link'
                }
                onClick={!liveDemo ? (event) => event.preventDefault() : undefined}
                className={`${styles.primaryAction} ${!liveDemo ? styles.actionDisabled : ''}`}
              >
                Live Demo
                <ArrowUpRight size={19} />
              </a>

              <a
                href={viewCode || undefined}
                target={viewCode ? '_blank' : undefined}
                rel={viewCode ? 'noopener noreferrer' : undefined}
                aria-disabled={!viewCode}
                title={
                  viewCode
                    ? 'View source code'
                    : 'Add viewCode URL in project data to enable this link'
                }
                onClick={!viewCode ? (event) => event.preventDefault() : undefined}
                className={`${styles.secondaryAction} ${!viewCode ? styles.actionDisabled : ''}`}
              >
                <GithubIcon size={21} />
                View Code
              </a>
            </FadeIn>

            {project.technologies?.length > 0 && (
              <div className={styles.techRow}>
                {project.technologies.map((tech) => (
                  <TechBadge key={tech}>{tech}</TechBadge>
                ))}
              </div>
            )}

            {project.stats?.length > 0 && (
              <Stagger className={styles.statRow}>
                {project.stats.map((stat, index) => {
                  const Icon = STAT_ICONS[index % STAT_ICONS.length];

                  return (
                    <StaggerItem key={stat.label}>
                      <div className={styles.statItem}>
                        <span className={styles.statIcon}>
                          <Icon size={22} />
                        </span>
                        <div>
                          <p className={styles.statValue}>{stat.value}</p>
                          <p className={styles.statLabel}>{stat.label}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            )}
          </div>

          <FadeIn delay={0.2} className={styles.previewColumn}>
            {project.heroImage || project.thumbnail ? (
              <div className={styles.previewFrame}>
                <img
                  src={project.heroImage || project.thumbnail}
                  alt={`${project.title} application preview`}
                  className={styles.previewImage}
                />
              </div>
            ) : (
              <div className={styles.previewPlaceholder}>
                <div className={styles.previewTopbar}>
                  <span className={styles.previewBrand}>
                    <span className={styles.previewBrandMark}>B</span>
                    {project.title}
                  </span>
                  <span className={styles.previewStatus}>Project Preview</span>
                </div>

                <div className={styles.previewBody}>
                  <aside className={styles.previewSidebar}>
                    {[
                      'Dashboard',
                      'Geography',
                      'Members',
                      'Assignments',
                      'Reports',
                      'Users',
                      'Settings',
                    ].map((item, index) => (
                      <div
                        key={item}
                        className={`${styles.previewMenuItem} ${index === 1 ? styles.previewMenuActive : ''}`}
                      >
                        <span className={styles.menuDot} />
                        {item}
                      </div>
                    ))}
                  </aside>

                  <div className={styles.previewDashboard}>
                    <div className={styles.previewHeading}>
                      <span>Geography Overview</span>
                      <span className={styles.previewLive}>● Live</span>
                    </div>

                    <div className={styles.previewMetrics}>
                      {[
                        ['28', 'States'],
                        ['746', 'Districts'],
                        ['5,432', 'Booths'],
                        ['12,480', 'Members'],
                      ].map(([value, label]) => (
                        <div key={label} className={styles.previewMetric}>
                          <strong>{value}</strong>
                          <span>{label}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.previewLower}>
                      <div className={styles.mapPanel}>
                        <div className={styles.mapGrid} />
                        <div className={styles.mapShape} aria-hidden="true">
                          <svg
                            viewBox="0 0 200 240"
                            role="img"
                            aria-label="Stylized India map"
                          >
                            <path
                              d="M64 8 L94 18 L105 36 L130 42 L143 62 L128 79 L151 94 L137 112 L126 132 L113 150 L106 174 L91 205 L79 230 L66 210 L56 185 L47 162 L38 145 L30 123 L18 103 L34 83 L28 65 L47 49 L42 28 Z"
                              fill="#9bb8dc"
                              stroke="#d7e8ff"
                              strokeWidth="2"
                            />
                            <path
                              d="M64 8 L94 18 L105 36 L80 48 L47 49 L42 28 Z"
                              fill="#c5d9f3"
                            />
                            <path
                              d="M80 48 L105 36 L130 42 L143 62 L128 79 L99 80 L75 69 Z"
                              fill="#6f95d1"
                            />
                            <path
                              d="M75 69 L99 80 L128 79 L151 94 L137 112 L105 105 L80 98 Z"
                              fill="#91acd8"
                            />
                            <path
                              d="M80 98 L105 105 L137 112 L126 132 L100 140 L76 122 Z"
                              fill="#547ab6"
                            />
                            <path
                              d="M76 122 L100 140 L106 174 L91 205 L79 230 L66 210 L56 185 L47 162 L38 145 Z"
                              fill="#c2d5ef"
                            />
                          </svg>
                        </div>
                        <span className={styles.mapCaption}>Geographic Distribution</span>
                      </div>

                      <div className={styles.activityPanel}>
                        <h3>Recent Activities</h3>
                        {[
                          'New booth created',
                          'Member assigned',
                          'Geography updated',
                          'New user registered',
                        ].map((activity, index) => (
                          <div key={activity} className={styles.activityItem}>
                            <span className={styles.activityDot} />
                            <div>
                              <p>{activity}</p>
                              <small>
                                {
                                  [
                                    '2 minutes ago',
                                    '12 minutes ago',
                                    '1 hour ago',
                                    '2 hours ago',
                                  ][index]
                                }
                              </small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.previewCaption}>
              <span className={styles.captionLine} />
              <span>Real Solutions. Real Impact.</span>
            </div>
          </FadeIn>
        </div>

        {sections.length > 1 && (
          <nav className={styles.heroNav} aria-label="Project sections">
            {sections.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={index === 0 ? styles.heroNavActive : styles.heroNavItem}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </section>

      <Section id="overview">
        <div className={project.keyFeatures?.length ? styles.overviewGrid : undefined}>
          <div>
            <h2 className={styles.sectionTitle}>
              Project <span className={styles.highlight}>Overview</span>
            </h2>
            <p className={styles.overviewText}>{project.overviewDetails}</p>
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
            {project.challenges?.length > 0 && (
              <ChecklistBlock
                icon={<AlertTriangle size={18} />}
                title="Challenges & Learnings"
                items={project.challenges}
              />
            )}
            {project.results?.length > 0 && (
              <ChecklistBlock
                id="results"
                icon={<TrendingUp size={18} />}
                title="Results & Impact"
                items={project.results}
              />
            )}
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
