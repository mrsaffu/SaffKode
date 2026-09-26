import Section from '../../../components/layout/Section';
import { ProcessSteps } from '../../../components/common';
import { SlideUp } from '../../../components/animation';
import styles from './ServiceProcess.module.css';

/**
 * ServiceProcess — "A Structured Approach for Better Results" section.
 * Reuses the shared ProcessSteps component (already used on the Services
 * listing and Projects pages) rather than duplicating the step UI.
 */
function ServiceProcess({ steps = [] }) {
  if (steps.length === 0) return null;

  return (
    <Section background="secondary">
      <SlideUp className={styles.header}>
        <p className={styles.eyebrow}>My Development Process</p>
        <h2 className={styles.title}>A Structured Approach for Better Results</h2>
        <p className={styles.description}>
          A transparent and collaborative process to ensure high-quality
          outcomes.
        </p>
      </SlideUp>
      <ProcessSteps steps={steps} />
    </Section>
  );
}

export default ServiceProcess;
