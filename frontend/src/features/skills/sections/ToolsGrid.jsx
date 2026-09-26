import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import Card from '../../../components/ui/Card';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ToolsGrid.module.css';

/**
 * ToolsGrid — "Tools I Use" tile grid matching the reference. Every tool
 * from GET /api/v1/skills is shown (no pagination needed at 11 items),
 * so there's no "view all" link to a page that wouldn't exist yet.
 */
function ToolsGrid({ tools = [] }) {
  if (tools.length === 0) return null;

  return (
    <Section>
      <SectionHeading eyebrow="Tools I Use" title="Tools I" highlight="Use" />
      <Stagger className={styles.grid}>
        {tools.map((tool) => (
          <StaggerItem key={tool}>
            <Card padding="sm" className={styles.tile}>
              <span className={styles.monogram} aria-hidden="true">
                {tool.charAt(0)}
              </span>
              <span className={styles.name}>{tool}</span>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export default ToolsGrid;
