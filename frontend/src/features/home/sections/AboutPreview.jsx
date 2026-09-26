import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  ShieldCheck,
  UserRound,
} from 'lucide-react';

import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import Button from '../../../components/ui/Button';
import Card from '../../../components/ui/Card';
import { Stagger, StaggerItem } from '../../../components/animation';

import styles from './AboutPreview.module.css';

/**
 * AboutPreview
 *
 * Premium homepage About section.
 *
 * Responsibilities:
 * - Presents a concise professional introduction.
 * - Displays four reusable strength cards.
 * - Provides navigation to the full About page.
 *
 * Data is supplied by GET /api/v1/portfolio.
 */

const strengthIcons = {
  'Problem Solver': ShieldCheck,
  'Continuous Learner': GraduationCap,
  'Team Player': UserRound,
  'Real-World Focus': BadgeCheck,
};

function AboutPreview({ about }) {
  if (!about) return null;

  return (
    <Section background="secondary">
      <div className={styles.aboutPreview}>
        {/* Ambient decorative lighting */}
        {/* <span className={styles.ambientGlowLeft} aria-hidden="false" />
        <span className={styles.ambientGlowRight} aria-hidden="true" /> */}

        <div className={styles.layout}>
          {/* ---------------------------------------------
              LEFT — INTRODUCTION
          --------------------------------------------- */}
          <div className={styles.intro}>
            <SectionHeading
              eyebrow="About Me"
              title="Passionate Developer"
              highlight="Who Loves to Build"
              className={styles.heading}
            />

            <p className={styles.summary}>{about.summary}</p>

            <Button
              to="/about"
              variant="primary"
              icon={<ArrowRight size={17} strokeWidth={2.2} />}
              className={styles.cta}
            >
              More About Me
            </Button>
          </div>

          {/* ---------------------------------------------
              RIGHT — STRENGTH CARDS
          --------------------------------------------- */}
          <Stagger className={styles.strengths} staggerDelay={0.1}>
            {about.strengths?.map((strength, index) => {
              const Icon =
                strengthIcons[strength.title] ||
                [ShieldCheck, GraduationCap, UserRound, BadgeCheck][index] ||
                ShieldCheck;

              return (
                <StaggerItem key={strength.title} className={styles.strengthItem}>
                  <Card padding="md" hoverable className={styles.strengthCard}>
                    <div className={styles.cardInner}>
                      <div className={styles.iconWrapper}>
                        <Icon
                          className={styles.strengthIcon}
                          size={30}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </div>

                      <div className={styles.cardContent}>
                        <h3 className={styles.strengthTitle}>{strength.title}</h3>

                        <p className={styles.strengthDescription}>
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

export default AboutPreview;
