import Section from '../layout/Section';
import SectionHeading from '../layout/SectionHeading';
import TechBadge from './TechBadge';
import { Stagger, StaggerItem } from '../animation';
import styles from './TechStackStrip.module.css';

/**
 * TechStackStrip — the "Technologies I Work With" / "Technologies I Use"
 * badge row. Shared by the Services page (Phase 7) and Projects page
 * (Phase 8) rather than duplicated per page — only the heading copy and
 * optional trailing action differ.
 */
function TechStackStrip({
  technologies = [],
  eyebrow = 'Tech Stack',
  title = 'Technologies I',
  highlight = 'Work With',
  description,
  action,
  background,
}) {
  if (technologies.length === 0) return null;

  return (
    <Section background={background}>
      <div className={styles.header}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
        />
        {action}
      </div>
      <Stagger className={styles.grid}>
        {technologies.map((tech) => (
          <StaggerItem key={tech}>
            <TechBadge>{tech}</TechBadge>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default TechStackStrip;
