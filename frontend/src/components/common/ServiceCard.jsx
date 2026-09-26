import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Monitor,
  Smartphone,
  Server,
  ShieldCheck,
  Database,
  Cloud,
  Code2,
  Lightbulb,
} from 'lucide-react';
import Card from '../ui/Card';
import TechBadge from './TechBadge';
import styles from './ServiceCard.module.css';

const serviceIcons = {
  'web-application-development': Monitor,
  'responsive-frontend-development': Smartphone,
  'backend-api-development': Server,
  'authentication-access-control': ShieldCheck,
  'database-design-optimization': Database,
  'deployment-cloud-solutions': Cloud,
  'maintenance-support': Code2,
  'consultation-technical-guidance': Lightbulb,
};

function ServiceCard({ service, index }) {
  const Icon = serviceIcons[service.slug] || Code2;

  return (
    <Card
      as={Link}
      to={`/services/${service.slug}`}
      padding="md"
      hoverable
      className={styles.card}
    >
      <div className={styles.topRow}>
        <span className={styles.icon} aria-hidden="true">
          <Icon size={31} strokeWidth={1.8} />
        </span>

        <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
      </div>

      <div className={styles.titleRow}>
        <h3 className={styles.title}>{service.title}</h3>

        <span className={styles.arrow} aria-hidden="true">
          <ArrowRight size={18} strokeWidth={2.4} />
        </span>
      </div>

      <p className={styles.description}>{service.shortDescription}</p>

      <div className={styles.techRow}>
        {service.technologies?.map((tech) => (
          <TechBadge key={tech}>{tech}</TechBadge>
        ))}
      </div>
    </Card>
  );
}

export default ServiceCard;
