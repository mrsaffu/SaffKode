import { memo } from 'react';
import {
  AlertTriangle,
  Clock,
  Frown,
  TrendingDown,
  Unlink,
  ShieldAlert,
  Target,
} from 'lucide-react';

import Section from '../../../components/layout/Section';
import { SlideUp, Stagger, StaggerItem } from '../../../components/animation';

import styles from './ProblemsSolved.module.css';

const ICONS = [AlertTriangle, Clock, Frown, TrendingDown, Unlink, ShieldAlert];

function ProblemsSolved({ problems = [] }) {
  if (problems.length === 0) return null;

  return (
    <Section background="secondary" className={styles.section}>
      <div className={styles.border}></div>
      <div className={styles.shell}>
        <div className={styles.layout}>
          {/* =====================================================
              LEFT INTRO
          ===================================================== */}
          <SlideUp className={styles.header}>
            <div className={styles.headerTop}>
              <span className={styles.headerIcon} aria-hidden="true">
                <Target size={24} strokeWidth={1.8} />
              </span>

              <div>
                <p className={styles.eyebrow}>Problems I Solve</p>

                <h2 className={styles.title}>
                  Is Your Current Solution Holding You Back?
                </h2>
              </div>
            </div>

            <p className={styles.description}>
              I help you overcome common challenges and build a better, faster and more
              reliable web application.
            </p>
          </SlideUp>

          {/* =====================================================
              PROBLEM CARDS
          ===================================================== */}
          <Stagger className={styles.grid}>
            {problems.map((problem, index) => {
              const Icon = ICONS[index % ICONS.length];

              return (
                <StaggerItem key={problem.title} className={styles.cardWrapper}>
                  <article className={styles.card}>
                    <span className={styles.icon} aria-hidden="true">
                      <Icon size={17} strokeWidth={1.9} />
                    </span>

                    <div className={styles.cardContent}>
                      <h3 className={styles.cardTitle}>{problem.title}</h3>

                      <p className={styles.cardDescription}>{problem.description}</p>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      <div className={styles.borderbtm}></div>

      </div>
    </Section>
  );
}

export default memo(ProblemsSolved);
