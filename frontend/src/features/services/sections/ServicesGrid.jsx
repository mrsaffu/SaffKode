import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import { ServiceCard } from '../../../components/common';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ServicesGrid.module.css';

function ServicesGrid({ services = [] }) {
  if (services.length === 0) return null;

  return (
    <Section background="secondary">
      <SectionHeading
        eyebrow="What I Offer"
        title="Services Built Around"
        highlight="Your Goals"
      />

      <Stagger className={styles.grid}>
        {services.map((service, index) => (
          <StaggerItem key={service.slug}>
            <ServiceCard service={service} index={index} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ServicesGrid;
