import {
  ArrowRight,
  ArrowUpRight,
  Database,
  Monitor,
  Settings,
  UsersRound,
} from 'lucide-react';
import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ServicesPreview.module.css';

const SERVICE_ICONS = [Monitor, Settings, Database, UsersRound];

function ServicesPreview({ services = [] }) {
  if (services.length === 0) return null;

  return (
    <Section background="secondary">
      <div className={styles.services}>
        <div className={styles.backgroundGlow} aria-hidden="true" />
        <div className={styles.decorativeSpark} aria-hidden="true" />

        <div className={styles.header}>
          <SectionHeading
            eyebrow="Services"
            title="How I Can"
            highlight="Help You"
            variant="services"
          />

          <a
            href="/services"
            className={styles.viewAll}
            aria-label="View all services"
          >
            <span>View All Services</span>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <Stagger className={styles.grid}>
          {services.slice(0, 4).map((service, index) => {
            const Icon = SERVICE_ICONS[index % SERVICE_ICONS.length];

            return (
              <StaggerItem key={service.slug || service.title}>
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.serviceIdentity}>
                      <span className={styles.icon} aria-hidden="true">
                        <Icon size={25} strokeWidth={1.2} />
                      </span>

                      <h3 className={styles.title}>{service.title}</h3>
                    </div>

                    <span className={styles.arrow} aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={1.9} />
                    </span>
                  </div>

                  <p className={styles.description}>
                    {service.description}
                  </p>

                  <span className={styles.cardLine} aria-hidden="true" />
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}

export default ServicesPreview;