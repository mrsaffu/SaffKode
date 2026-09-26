import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { Users, Infinity as InfinityIcon, BarChart3 } from 'lucide-react';
import Card from '../../../components/ui/Card';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './SkillsHero.module.css';

const STAT_ICONS = [Users, InfinityIcon, BarChart3];

/**
 * SkillsHero — headline, quote visual, and the 3-icon stat strip matching
 * the "Tools for a Bigger Tomorrow" reference layout. `stats` comes from
 * GET /api/v1/skills (label-only; these are feature badges, not numbers).
 */
function SkillsHero({ stats = [] }) {
  return (
    <Section spacing="lg">
      <div className={styles.grid}>
        <div className={styles.copy}>
          <FadeIn>
            <Badge variant="outline">My Skills</Badge>
          </FadeIn>

          <SlideUp as="h1" delay={0.05} className={styles.headline}>
            Tools for a <span className={styles.highlight}>Bigger Tomorrow</span>
          </SlideUp>

          <SlideUp as="p" delay={0.1} className={styles.subhead}>
            A blend of technical skills, practical experience, and a
            constant drive to learn — this is what helps me build scalable,
            secure, and impactful digital solutions.
          </SlideUp>

          {stats.length > 0 && (
            <Stagger className={styles.featureRow}>
              {stats.map((stat, index) => {
                const Icon = STAT_ICONS[index % STAT_ICONS.length];
                return (
                  <StaggerItem key={stat.label}>
                    <Card padding="sm" className={styles.featureCard}>
                      <Icon size={18} aria-hidden="true" />
                      <span>{stat.label}</span>
                    </Card>
                  </StaggerItem>
                );
              })}
            </Stagger>
          )}
        </div>

        <FadeIn delay={0.15} className={styles.visual} aria-hidden="true">
          <div className={styles.visualGlow} />
          <div className={styles.visualFrame}>
            <p className={styles.visualNote}>Good Developers Never Stop Learning</p>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export default SkillsHero;
