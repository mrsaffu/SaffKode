import Section from '../../../components/layout/Section';
import { CredentialCard } from '../../../components/common';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './CertificationsGrid.module.css';

/**
 * CertificationsGrid — renders every certification via the shared
 * CredentialCard. `certifications` comes from GET /api/v1/certifications.
 */
function CertificationsGrid({ certifications = [] }) {
  if (certifications.length === 0) return null;

  return (
    <Section>
      <Stagger className={styles.grid}>
        {certifications.map((cert) => (
          <StaggerItem key={cert.id}>
            <CredentialCard credential={cert} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default CertificationsGrid;
