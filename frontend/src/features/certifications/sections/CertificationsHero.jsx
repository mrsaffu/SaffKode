import { Award } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { StatCard } from '../../../components/common';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './CertificationsHero.module.css';

/**
 * CertificationsHero — headline + stat strip. No dedicated reference
 * image exists for a standalone Certifications page, so this follows
 * the same Hero pattern established elsewhere in the app.
 */
function CertificationsHero({ stats = [] }) {
  return (
    <Section spacing="lg">
      <div className={styles.copy}>
        <FadeIn>
          <Badge variant="outline" icon={<Award size={14} />}>
            Certifications
          </Badge>
        </FadeIn>

        <SlideUp as="h1" delay={0.05} className={styles.headline}>
          Continuous <span className={styles.highlight}>Learning</span>
        </SlideUp>

        <SlideUp as="p" delay={0.1} className={styles.subhead}>
          Certifications and courses I&apos;ve completed to keep sharpening
          my skills and staying current with new technologies.
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

export default CertificationsHero;
