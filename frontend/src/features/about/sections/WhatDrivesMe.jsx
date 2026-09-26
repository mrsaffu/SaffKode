import { Lightbulb, Users, BarChart3, Heart } from 'lucide-react';
import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import Card from '../../../components/ui/Card';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './WhatDrivesMe.module.css';

const ICONS = [Lightbulb, Users, BarChart3, Heart];

/**
 * WhatDrivesMe — the 2x2 values grid ("Solve Real Problems", "Collaborate
 * & Learn", ...). `values` comes from GET /api/v1/about.
 */
function WhatDrivesMe({ values = [] }) {
  if (values.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow="My Values" title="What Drives" highlight="Me" />

      <Stagger className={styles.grid}>
        {values.map((value, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <StaggerItem key={value.title}>
              <Card padding="md" hoverable className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={20} />
                </span>
                <h3 className={styles.title}>{value.title}</h3>
                <p className={styles.description}>{value.description}</p>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export default WhatDrivesMe;
