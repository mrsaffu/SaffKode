import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { StatCard } from '../../../components/common';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './ExperienceHero.module.css';

/**
 * ExperienceHero — headline, quote-card visual, and the 4-stat strip
 * matching the "A Journey of Growth" reference layout. `stats`/`quote`
 * come from GET /api/v1/experience.
 */
function ExperienceHero({ stats = [], quote }) {
  return (
    <Section spacing="lg">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <FadeIn>
            <Badge variant="outline">My Experience</Badge>
          </FadeIn>

          <SlideUp as="h1" delay={0.05} className={styles.headline}>
            A Journey <span className={styles.highlight}>of Growth</span>
          </SlideUp>

          <SlideUp as="p" delay={0.1} className={styles.subhead}>
            From learning the basics to building real-world applications,
            here&apos;s a timeline of my professional journey, education,
            certifications, and key milestones.
          </SlideUp>

          {quote && (
            <SlideUp delay={0.15} as="blockquote" className={styles.quoteCard}>
              <p>&ldquo;{quote}&rdquo;</p>
              <cite>— Safwan Ahmad</cite>
            </SlideUp>
          )}
        </div>

        <FadeIn delay={0.15} className={styles.visual} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.visualFrame}>
            <p className={styles.visualNote}>Experience Builds Better Developers</p>
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

export default ExperienceHero;
