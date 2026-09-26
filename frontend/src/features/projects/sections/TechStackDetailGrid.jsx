import { Code2 } from 'lucide-react';
import Card from '../../../components/ui/Card';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './TechStackDetailGrid.module.css';

/**
 * TechStackDetailGrid — the "React.js / Frontend", "Node.js / Backend"
 * style tile grid on the Project Details reference. Uses a generic icon
 * per tile rather than brand logos, since lucide-react no longer ships
 * brand/trademark icons (see components/common/BrandIcons.jsx for the
 * small set we do maintain locally, which doesn't cover this many stacks).
 */
function TechStackDetailGrid({ items = [] }) {
  if (items.length === 0) return null;

  return (
    <Stagger className={styles.grid}>
      {items.map((item) => (
        <StaggerItem key={item.name}>
          <Card padding="md" className={styles.tile}>
            <span className={styles.icon} aria-hidden="true">
              <Code2 size={20} />
            </span>
            <div>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.role}>{item.role}</p>
            </div>
          </Card>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export default TechStackDetailGrid;
