import {
  MessageSquare,
  FileText,
  Code2,
  CircleCheck,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import Card from '../ui/Card';
import { Stagger, StaggerItem } from '../animation';
import styles from './ProcessSteps.module.css';

const stepIcons = {
  1: MessageSquare,
  2: FileText,
  3: Code2,
  4: CircleCheck,
  5: Rocket,
};

function ProcessSteps({ steps = [] }) {
  if (steps.length === 0) return null;

  return (
    <Stagger className={styles.grid}>
      {steps.map((item, index) => {
        const Icon = stepIcons[item.step] || Code2;
        const isLast = index === steps.length - 1;

        return (
          <StaggerItem key={item.step} className={styles.item}>
            <div className={styles.stepWrapper}>
              <Card padding="md" className={styles.card}>
                <div className={styles.topRow}>
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} size={29} strokeWidth={1.8} />
                    <span className={styles.iconGlow} />
                  </div>

                  <span className={styles.stepNumber}>
                    {String(item.step).padStart(2, '0')}
                  </span>
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>

                  <p className={styles.description}>{item.description}</p>
                </div>

                <div className={styles.progressBar}>
                  <span />
                </div>
              </Card>

              {!isLast && (
                <div className={styles.connector} aria-hidden="true">
                  <span className={styles.connectorLine} />
                  <ArrowRight
                    className={styles.connectorArrow}
                    size={17}
                    strokeWidth={2}
                  />
                </div>
              )}
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}

export default ProcessSteps;
