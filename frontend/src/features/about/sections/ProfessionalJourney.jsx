import { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Award,
  Building2,
} from 'lucide-react';

import { Stagger, StaggerItem, SlideUp } from '../../../components/animation';

import styles from './ProfessionalJourney.module.css';

const TYPE_ICONS = {
  education: GraduationCap,
  training: Award,
  experience: BriefcaseBusiness,
};

const FALLBACK_ICONS = [GraduationCap, BriefcaseBusiness, Building2, BriefcaseBusiness];

function ProfessionalJourney({ journey = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (journey.length === 0) return null;

  const ordered = [...journey].reverse();

  /*
   * Desktop: 4 visible
   * Tablet: 2 visible
   * Mobile: 1 visible
   *
   * The actual visible count is controlled by CSS.
   * These values determine how many cards one click moves.
   */
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 4;

    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;

    return 4;
  };

  const visibleCount = getVisibleCount();

  const maxIndex = Math.max(0, ordered.length - visibleCount);

  const handlePrevious = () => {
    setCurrentIndex((previous) => Math.max(previous - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((previous) => Math.min(previous + 1, maxIndex));
  };

  /*
   * Each desktop card occupies 1/4 of the viewport.
   * Moving one card means moving exactly one card width
   * plus the corresponding gap.
   */
  const translatePercentage =
    visibleCount === 1
      ? currentIndex * 100
      : visibleCount === 2
        ? currentIndex * 50
        : currentIndex * 25;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className={styles.header}>
          <SlideUp className={styles.headingBlock}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Education & Experience
            </span>

            <h2 className={styles.heading}>
              My Professional <span>Journey</span>
            </h2>
          </SlideUp>

          <div className={styles.headerRight}>
            <p className={styles.handwritten}>
              Every step
              <br />
              shapes a better developer.
            </p>

            <div className={styles.navigation}>
              <button
                type="button"
                className={styles.navButton}
                aria-label="Previous journey item"
                onClick={handlePrevious}
                disabled={currentIndex === 0}
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                className={`${styles.navButton} ${styles.navButtonActive}`}
                aria-label="Next journey item"
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            TIMELINE VIEWPORT
        ===================================================== */}

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />

          <div className={styles.sliderViewport}>
            <div
              className={styles.sliderTrack}
              style={{
                '--slider-index': currentIndex,
                '--slider-visible': visibleCount,
                '--slider-offset': `${translatePercentage}%`,
              }}
            >
              <Stagger className={styles.journeyGrid}>
                {ordered.map((milestone, index) => {
                  const Icon =
                    TYPE_ICONS[milestone.type] ||
                    FALLBACK_ICONS[index % FALLBACK_ICONS.length];

                  return (
                    <StaggerItem
                      key={`${milestone.title}-${milestone.date}`}
                      className={styles.journeyItem}
                    >
                      {/* Timeline node */}

                      <div
                        className={`${styles.timelineNode} ${
                          milestone.current ? styles.timelineNodeActive : ''
                        }`}
                      >
                        <Icon size={21} strokeWidth={2} />
                      </div>

                      {/* Milestone card */}

                      <article
                        className={`${styles.card} ${
                          milestone.current ? styles.cardActive : ''
                        }`}
                      >
                        <div className={styles.cardDate}>
                          {milestone.date}

                          {milestone.unverified && (
                            <span className={styles.verifyBadge}>To Verify</span>
                          )}
                        </div>

                        <h3 className={styles.cardTitle}>{milestone.title}</h3>

                        <p className={styles.cardSubtitle}>{milestone.subtitle}</p>

                        <p className={styles.cardDescription}>{milestone.description}</p>
                      </article>
                    </StaggerItem>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfessionalJourney;
