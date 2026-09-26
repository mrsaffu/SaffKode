import { CheckCircle2, Smartphone, ShieldCheck, Database, Plug, Rocket } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Card from '../../../components/ui/Card';
import { SlideUp, Stagger, StaggerItem } from '../../../components/animation';
import styles from './WhatYouGet.module.css';

const ICONS = [CheckCircle2, Smartphone, ShieldCheck, Database, Plug, Rocket];

/**
 * WhatYouGet — "Complete Development From Idea to Launch" capabilities
 * grid, matching the reference's 6-card layout.
 */
function WhatYouGet({ capabilities = [] }) {
  if (capabilities.length === 0) return null;

  return (
    <Section>
      <SlideUp className={styles.header}>
        <p className={styles.eyebrow}>What You Get</p>
        <h2 className={styles.title}>Complete Development From Idea to Launch</h2>
        <p className={styles.description}>
          A full-cycle development service covering everything you need to
          build, deploy, and grow your application.
        </p>
      </SlideUp>

      <Stagger className={styles.grid}>
        {capabilities.map((capability, index) => {
          const Icon = ICONS[index % ICONS.length];
          return (
            <StaggerItem key={capability.title}>
              <Card padding="md" className={styles.card}>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className={styles.cardTitle}>{capability.title}</h3>
                  <p className={styles.cardDescription}>{capability.description}</p>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export default WhatYouGet;
