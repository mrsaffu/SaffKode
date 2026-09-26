import { ArrowRight, Rocket } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import { Reveal } from '../../../components/animation';
import styles from './CTA.module.css';

/**
 * CTA — the closing banner that appears (with page-specific copy) at the
 * bottom of every reference page, right before the footer.
 */
function CTA() {
  return (
    <Section>
      <Reveal as="div" className={styles.banner}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <Rocket size={22} />
        </span>
        <div className={styles.copy}>
          <h2 className={styles.title}>Let&apos;s Build Something Amazing Together</h2>
          <p className={styles.subtitle}>
            I&apos;m always open to new opportunities, collaborations, or just a
            tech conversation. Feel free to reach out!
          </p>
        </div>
        <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight size={18} />}>
          Let&apos;s Talk
        </Button>
      </Reveal>
    </Section>
  );
}

export default CTA;
