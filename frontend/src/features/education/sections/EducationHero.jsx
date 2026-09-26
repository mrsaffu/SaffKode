import { GraduationCap } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { StatCard } from '../../../components/common';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './EducationHero.module.css';

/**
 * EducationHero — headline + stat strip. No dedicated reference image
 * exists for a standalone Education page, so this follows the same
 * Hero pattern established on About/Experience/Projects/Skills rather
 * than inventing a new layout.
 */
function EducationHero({ stats = [] }) {
  return (
    <Section spacing="lg">
      <div className={styles.copy}>
        <FadeIn>
          <Badge variant="outline" icon={<GraduationCap size={14} />}>
            Education
          </Badge>
        </FadeIn>

        <SlideUp as="h1" delay={0.05} className={styles.headline}>
          Academic <span className={styles.highlight}>Background</span>
        </SlideUp>

        <SlideUp as="p" delay={0.1} className={styles.subhead}>
          My formal education and the foundation it gave me for a career in
          software development.
        </SlideUp>
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

export default EducationHero;
