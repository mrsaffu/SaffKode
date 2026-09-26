import { Camera, BookOpen, Plane, Gamepad2, Music, Bike } from 'lucide-react';
import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import Card from '../../../components/ui/Card';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './BeyondCode.module.css';

const INTEREST_ICONS = {
  Photography: Camera,
  Reading: BookOpen,
  Traveling: Plane,
  Gaming: Gamepad2,
  Music: Music,
  Cycling: Bike,
};

/**
 * BeyondCode — small icon+label grid of personal interests. `interests`
 * comes from GET /api/v1/about (a plain string array).
 */
function BeyondCode({ interests = [] }) {
  if (interests.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow="Beyond Code" title="Outside of" highlight="Work" />
      <Stagger className={styles.grid}>
        {interests.map((interest) => {
          const Icon = INTEREST_ICONS[interest] || Camera;
          return (
            <StaggerItem key={interest}>
              <Card padding="sm" className={styles.card}>
                <Icon size={20} aria-hidden="true" />
                <span className={styles.label}>{interest}</span>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export default BeyondCode;
