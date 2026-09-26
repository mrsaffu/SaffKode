import { ArrowRight, BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import styles from './JourneyPreview.module.css';

function formatRange(startDate, endDate, current) {
  const format = (value) => {
    if (!value) return '';

    const [year, month] = value.split('-');

    const date = new Date(Number(year), Number(month) - 1);

    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return `${format(startDate)} - ${current ? 'Present' : format(endDate)}`;
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.14,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function TimelineItem({
  date,
  title,
  company,
  description,
  score,
  active = false,
  isLast = false,
  index = 0,
}) {
  return (
    <motion.article
      className={styles.timelineItem}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={itemVariants}
    >
      <div className={styles.date}>{date}</div>

      <div className={styles.timelineTrack}>
        <span
          className={`${styles.timelineDot} ${active ? styles.timelineDotActive : ''}`}
        />

        {!isLast && <span className={styles.timelineLine} aria-hidden="true" />}
      </div>

      <div className={styles.timelineContent}>
        <div className={styles.titleRow}>
          <h3 className={styles.itemTitle}>{title}</h3>

          {active && <span className={styles.currentBadge}>Current</span>}
        </div>

        {company && <p className={styles.company}>{company}</p>}

        {description && <p className={styles.description}>{description}</p>}

        {score && <p className={styles.score}>{score}</p>}
      </div>
    </motion.article>
  );
}

function JourneyPreview({ experience = [], education = [], certifications = [] }) {
  if (experience.length === 0 && education.length === 0 && certifications.length === 0) {
    return null;
  }

  const visibleExperience = experience.slice(0, 2);
  const visibleEducation = education.slice(0, 3);

  return (
    <Section background="secondary" className={styles.journeySection}>
      <div className={styles.journeyWrapper}>
        <div className={styles.journeyGrid}>
          {/* =====================================
              EXPERIENCE
          ====================================== */}

          <div className={styles.column}>
            <header className={styles.columnHeader}>
              <div className={styles.headingIcon}>
                <BriefcaseBusiness size={24} strokeWidth={1.8} />
              </div>

              <div>
                <span className={styles.eyebrow}>Experience</span>

                <h2 className={styles.heading}>My Professional Journey</h2>
              </div>
            </header>

            <div className={styles.timeline}>
              {visibleExperience.map((role, index) => (
                <TimelineItem
                  key={`${role.company}-${role.position}-${index}`}
                  index={index}
                  date={formatRange(role.startDate, role.endDate, role.current)}
                  title={role.position}
                  company={`${role.company} · ${role.location}`}
                  description={role.description}
                  active={role.current}
                  isLast={index === visibleExperience.length - 1}
                />
              ))}
            </div>

            <div className={styles.actionWrapper}>
              <Button
                to="/experience"
                variant="ghost"
                size="sm"
                icon={<ArrowRight size={15} />}
                className={styles.actionButton}
              >
                View Full Experience
              </Button>
            </div>
          </div>

          {/* =====================================
              EDUCATION
          ====================================== */}

          <div className={styles.column}>
            <header className={styles.columnHeader}>
              <div className={styles.headingIcon}>
                <GraduationCap size={24} strokeWidth={1.8} />
              </div>

              <div>
                <span className={styles.eyebrow}>Education</span>

                <h2 className={styles.heading}>My Academic Background</h2>
              </div>
            </header>

            <div className={styles.timeline}>
              {visibleEducation.map((entry, index) => (
                <TimelineItem
                  key={`${entry.degree}-${index}`}
                  index={index}
                  date={`${entry.startYear} - ${entry.endYear}`}
                  title={entry.degree}
                  company={entry.institution}
                  score={entry.score}
                  isLast={index === visibleEducation.length - 1}
                />
              ))}
            </div>

            <div className={styles.actionWrapper}>
              <Button
                to="/education"
                variant="ghost"
                size="sm"
                icon={<ArrowRight size={15} />}
                className={styles.actionButton}
              >
                View More Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default JourneyPreview;
