import { Rocket, Building2, TrendingUp, Users } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Card from '../../../components/ui/Card';
import { SlideUp, Stagger, StaggerItem } from '../../../components/animation';
import styles from './IdealFor.module.css';

const ICONS = [Rocket, Building2, TrendingUp, Users];

/**
 * IdealFor — "Who This Is For" section matching the reference's 2x2 grid.
 */
function IdealFor({ idealFor = [] }) {
  if (idealFor.length === 0) return null;

  return (
    <Section background="secondary">
      <SlideUp className={styles.header}>
        <p className={styles.eyebrow}>Who This Is For</p>
        <h2 className={styles.title}>Ideal for Businesses and Individuals</h2>
        <p className={styles.description}>
          Whether you&apos;re a startup, a growing business, or an individual
          with an idea, this service is designed for you.
        </p>
      </SlideUp>

      <Stagger className={styles.grid}>
        {idealFor.map((item, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <StaggerItem key={item.title}>
              <Card padding="md" className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDescription}>{item.description}</p>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export default IdealFor;
