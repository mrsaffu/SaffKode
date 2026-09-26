import { GraduationCap, MapPin } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Card from '../../../components/ui/Card';
import { Timeline, TimelineItem } from '../../../components/common';
import { SlideUp } from '../../../components/animation';
import styles from './EducationTimeline.module.css';

/**
 * EducationTimeline — full degree records with institution, location,
 * dates, and score. `records` comes from GET /api/v1/education.
 */
function EducationTimeline({ records = [] }) {
  if (records.length === 0) return null;

  return (
    <Section>
      <Timeline>
        {records.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            icon={<GraduationCap size={16} />}
            isLast={index === records.length - 1}
          >
            <SlideUp>
              <Card padding="md" className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.degree}>{entry.degree}</h3>
                    <p className={styles.institution}>{entry.institution}</p>
                    {entry.location && (
                      <p className={styles.location}>
                        <MapPin size={12} /> {entry.location}
                      </p>
                    )}
                  </div>
                  {(entry.startYear || entry.endYear) && (
                    <span className={styles.years}>
                      {entry.startYear} – {entry.endYear}
                    </span>
                  )}
                </div>

                {entry.score && <p className={styles.score}>{entry.score}</p>}
                {entry.description && <p className={styles.description}>{entry.description}</p>}
              </Card>
            </SlideUp>
          </TimelineItem>
        ))}
      </Timeline>
    </Section>
  );
}

export default EducationTimeline;
