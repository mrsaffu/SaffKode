import { memo } from 'react';
import { TrendingUp, Zap, Layers, User, Monitor } from 'lucide-react';
import Section from '../../../components/layout/Section';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './ServiceOverview.module.css';

const ICONS = [TrendingUp, Zap, Layers, User];

function ServiceOverview({ overview, whyItMatters = [] }) {
  if (!overview) return null;

  return (
    <Section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.grid}>
          {/* =====================================================
              OVERVIEW
          ===================================================== */}
          <SlideUp className={styles.overview}>
            <div className={styles.sectionHeading}>
              <span className={styles.headingIcon} aria-hidden="true">
                <Monitor size={23} strokeWidth={1.8} />
              </span>

              <div className={styles.headingContent}>
                <p className={styles.eyebrow}>Overview</p>

                <h2 className={styles.title}>{overview.title}</h2>
              </div>
            </div>

            <div className={styles.descriptionGroup}>
              {overview.description && (
                <p className={styles.description}>{overview.description}</p>
              )}

              {overview.secondaryDescription && (
                <p className={styles.description}>{overview.secondaryDescription}</p>
              )}
            </div>
          </SlideUp>

          {/* =====================================================
              WHY IT MATTERS
          ===================================================== */}
          {whyItMatters.length > 0 && (
            <FadeIn delay={0.12} className={styles.whyWrapper}>
              <div className={styles.whyCard}>
                <div className={styles.whyHeader}>
                  <span className={styles.whyTitle}>Why It Matters</span>
                </div>

                <Stagger className={styles.whyList}>
                  {whyItMatters.map((item, index) => {
                    const Icon = ICONS[index % ICONS.length];

                    return (
                      <StaggerItem key={item.title} className={styles.whyItem}>
                        <span className={styles.whyIcon} aria-hidden="true">
                          <Icon size={21} strokeWidth={1.8} />
                        </span>

                        <div className={styles.whyContent}>
                          <h3 className={styles.whyItemTitle}>{item.title}</h3>

                          <p className={styles.whyItemDescription}>{item.description}</p>
                        </div>
                      </StaggerItem>
                    );
                  })}
                </Stagger>
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </Section>
  );
}

export default memo(ServiceOverview);
