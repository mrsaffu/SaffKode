import { Link } from 'react-router-dom';
import Section from '../../../components/layout/Section';
import Card from '../../../components/ui/Card';
import { SlideUp, Stagger, StaggerItem } from '../../../components/animation';
import { getServiceIcon } from './serviceIcons';
import styles from './RelatedServices.module.css';

/**
 * RelatedServices — "You May Also Need" row, matching the reference.
 * `services` is the already-resolved relatedServicesResolved array from
 * the API (full service objects, not just slugs).
 */
function RelatedServices({ services = [] }) {
  if (services.length === 0) return null;

  return (
    <Section>
      <SlideUp className={styles.header}>
        <p className={styles.eyebrow}>Related Services</p>
        <h2 className={styles.title}>You May Also Need</h2>
        <p className={styles.description}>Explore other services to complement your project.</p>
      </SlideUp>

      <Stagger className={styles.grid}>
        {services.map((service) => {
          const Icon = getServiceIcon(service.icon);
          return (
            <StaggerItem key={service.slug}>
              <Card
                as={Link}
                to={`/services/${service.slug}`}
                padding="md"
                hoverable
                className={styles.card}
              >
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={18} />
                </span>
                <span className={styles.title}>{service.title}</span>
              </Card>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

export default RelatedServices;
