import {
  ArrowRight,
  BookOpen,
  Brain,
  BookMarked,
  GraduationCap,
  Award,
} from 'lucide-react';

import { Stagger, StaggerItem, SlideUp } from '../../../components/animation';

import styles from './CredentialsPreview.module.css';

const CERT_ICONS = [BookOpen, Brain, BookMarked];

function CredentialsPreview({ certifications = [], education }) {
  if (certifications.length === 0 && !education) {
    return null;
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* =================================================
            CERTIFICATIONS
        ================================================= */}

        <div className={styles.certifications}>
          <SlideUp className={styles.sectionHeading}>
            <span className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Certifications
            </span>

            <div className={styles.headingRow}>
              <h2 className={styles.heading}>Certifications</h2>

              <button
                type="button"
                className={styles.circleButton}
                aria-label="View all certifications"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </SlideUp>

          <Stagger className={styles.certGrid}>
            {certifications.slice(0, 3).map((cert, index) => {
              const Icon = CERT_ICONS[index % CERT_ICONS.length];

              return (
                <StaggerItem key={cert.title}>
                  <article className={styles.certCard}>
                    <div className={styles.certIcon}>
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <div className={styles.certContent}>
                      <h3>{cert.title}</h3>

                      <p>{cert.issuer}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>

        {/* =================================================
            DIVIDER
        ================================================= */}

        <div className={styles.divider} aria-hidden="true" />

        {/* =================================================
            EDUCATION
        ================================================= */}

        {education && (
          <div className={styles.education}>
            <SlideUp className={styles.sectionHeading}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowLine} />
                Academic Background
              </span>

              <h2 className={styles.heading}>
                Education
                <span className={styles.inlineMeta}>
                  (
                  {education.degree?.includes('Intermediate')
                    ? 'Intermediate'
                    : education.degree}
                  )
                </span>
              </h2>
            </SlideUp>

            <Stagger>
              <StaggerItem>
                <article className={styles.educationCard}>
                  <div className={styles.educationIcon}>
                    <GraduationCap size={28} strokeWidth={1.8} />
                  </div>

                  <div className={styles.educationContent}>
                    <h3>{education.degree}</h3>

                    <p>{education.institution}</p>

                    <span>Percentage: {education.percentage}</span>
                  </div>
                </article>
              </StaggerItem>
            </Stagger>
          </div>
        )}
      </div>
    </section>
  );
}

export default CredentialsPreview;
