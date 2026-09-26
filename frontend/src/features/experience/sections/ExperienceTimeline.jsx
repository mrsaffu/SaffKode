import { Briefcase, MapPin } from 'lucide-react';
import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';
import { TechBadge, Timeline, TimelineItem } from '../../../components/common';
import { SlideUp } from '../../../components/animation';
import styles from './ExperienceTimeline.module.css';

function formatRange(startDate, endDate, current) {
  if (!startDate) return null;
  const format = (value) => {
    const [year, month] = value.split('-');
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };
  return `${format(startDate)} – ${current ? 'Present' : format(endDate)}`;
}

/**
 * ExperienceTimeline — the full "Professional Experience" vertical
 * timeline with responsibilities and tech badges per role, matching the
 * reference layout. `roles` comes from GET /api/v1/experience.
 */
function ExperienceTimeline({ roles = [] }) {
  if (roles.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow="My Experience" title="Professional" highlight="Experience" />

      <Timeline>
        {roles.map((role, index) => {
          const dateLabel = formatRange(role.startDate, role.endDate, role.current);
          return (
            <TimelineItem
              key={role.id}
              icon={<Briefcase size={16} />}
              active={role.current}
              isLast={index === roles.length - 1}
            >
              <SlideUp>
                <Card padding="md" className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <div className={styles.titleRow}>
                        <h3 className={styles.role}>{role.position}</h3>
                        {role.current && <Badge variant="accent">Current</Badge>}
                        {role.unverified && <Badge variant="muted">To Verify</Badge>}
                      </div>
                      <p className={styles.company}>{role.company}</p>
                      <div className={styles.meta}>
                        {role.location && (
                          <span className={styles.metaItem}>
                            <MapPin size={12} /> {role.location}
                          </span>
                        )}
                        {role.employmentType && <span>{role.employmentType}</span>}
                      </div>
                    </div>
                    {dateLabel && <span className={styles.dateLabel}>{dateLabel}</span>}
                  </div>

                  <ul className={styles.responsibilities}>
                    {role.responsibilities?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className={styles.techRow}>
                    {role.technologies?.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                </Card>
              </SlideUp>
            </TimelineItem>
          );
        })}
      </Timeline>
    </Section>
  );
}

export default ExperienceTimeline;
