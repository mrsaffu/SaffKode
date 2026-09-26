import { ArrowRight, Rocket, CheckCircle2, Mail } from 'lucide-react';
import Section from '../layout/Section';
import Button from '../ui/Button';
import { Reveal } from '../animation';
import styles from './CTABanner.module.css';

/**
 * CTABanner — the closing "Let's Build Something..." banner that appears
 * near the bottom of every reference page. Configurable via props instead
 * of duplicating this markup per feature page.
 *
 * Extended (backward-compatibly — all new props are optional) to support
 * the richer Service Details CTA: an `eyebrow` label, a `checklist` of
 * short trust points, and a secondary "Send an Email" action alongside
 * the primary button.
 */
function CTABanner({
  eyebrow,
  title = "Let's Build Something Amazing Together",
  subtitle = "I'm always open to new opportunities, collaborations, or just a tech conversation. Feel free to reach out!",
  buttonLabel = "Let's Talk",
  to = '/contact',
  checklist,
  email,
  secondaryLabel,
}) {
  return (
    <Section>
      <Reveal as="div" className={styles.banner}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <Rocket size={22} />
        </span>
        <div className={styles.copy}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {checklist?.length > 0 && (
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item} className={styles.checklistItem}>
                <CheckCircle2 size={14} className={styles.checkIcon} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.actions}>
          <Button to={to} variant="primary" size="lg" icon={<ArrowRight size={18} />}>
            {buttonLabel}
          </Button>
          {email && (
            <div className={styles.emailRow}>
              {secondaryLabel && <span className={styles.emailLabel}>{secondaryLabel}</span>}
              <a href={`mailto:${email}`} className={styles.emailLink}>
                <Mail size={13} aria-hidden="true" /> {email}
              </a>
            </div>
          )}
        </div>
      </Reveal>
    </Section>
  );
}

export default CTABanner;
