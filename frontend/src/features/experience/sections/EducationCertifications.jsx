import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Card from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './EducationCertifications.module.css';

/**
 * EducationCertifications — two-column "Education" / "Certifications"
 * block matching the Experience page reference. `education`/
 * `certifications` come from GET /api/v1/experience.
 */
function EducationCertifications({ education = [], certifications = [] }) {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <Section background="secondary">
      <div className={styles.grid}>
        <div>
          <div className={styles.columnHeader}>
            <h2 className={styles.columnTitle}>
              <GraduationCap size={20} /> Education
            </h2>
          </div>
          <Stagger className={styles.list}>
            {education.map((entry) => (
              <StaggerItem key={entry.degree}>
                <Card padding="md" className={styles.entryCard}>
                  <h3 className={styles.entryTitle}>{entry.degree}</h3>
                  <p className={styles.entrySubtitle}>{entry.institution}</p>
                  <p className={styles.entryMeta}>
                    {entry.startYear && `${entry.startYear} – ${entry.endYear} · `}
                    {entry.score}
                  </p>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <div>
          <div className={styles.columnHeader}>
            <h2 className={styles.columnTitle}>
              <Award size={20} /> Certifications
            </h2>
          </div>
          <Stagger className={styles.list}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.title}>
                <Card padding="md" className={styles.entryCard}>
                  <div className={styles.certRow}>
                    <div>
                      <h3 className={styles.entryTitle}>{cert.title}</h3>
                      <p className={styles.entrySubtitle}>{cert.issuer}</p>
                    </div>
                    {cert.credentialUrl && (
                      <Button
                        href={cert.credentialUrl}
                        variant="ghost"
                        size="sm"
                        icon={<ExternalLink size={14} />}
                        aria-label={`View credential: ${cert.title}`}
                      />
                    )}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}

export default EducationCertifications;
