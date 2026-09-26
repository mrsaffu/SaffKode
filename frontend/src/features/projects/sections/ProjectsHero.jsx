import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { StatCard } from '../../../components/common';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './ProjectsHero.module.css';

/**
 * ProjectsHero — headline, quote-card visual, and the 3-stat strip
 * matching the "Real Projects Real Impact" reference layout. `stats`
 * comes from GET /api/v1/projects.
 */
function ProjectsHero({ stats = [] }) {
  return (
    <Section spacing="lg">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <FadeIn>
            <Badge variant="outline">My Projects</Badge>
          </FadeIn>

          <SlideUp as="h1" delay={0.05} className={styles.headline}>
            Real Projects <span className={styles.highlight}>Real Impact</span>
          </SlideUp>

          <SlideUp as="p" delay={0.1} className={styles.subhead}>
            Here are some of the projects I&apos;ve built — each one designed to
            solve real-world problems with clean code, modern technologies,
            and a focus on usability and scalability.
          </SlideUp>
        </div>

        <FadeIn delay={0.15} className={styles.visual} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.visualFrame}>
            <p className={styles.quote}>
              &ldquo;Ideas build the future, but execution brings it to
              life.&rdquo;
            </p>
            <span className={styles.quoteAttribution}>— Safwan Ahmad</span>
          </div>
        </FadeIn>
      </div>

      {stats.length > 0 && (
        <Stagger className={styles.statGrid}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatCard value={stat.value} label={stat.label} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </Section>
  );
}

export default ProjectsHero;
