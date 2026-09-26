import { User, BookOpenCheck, CheckCircle2 } from 'lucide-react';
import Section from '../../../components/layout/Section';
import Badge from '../../../components/ui/Badge';
import { Stagger, StaggerItem, SlideUp } from '../../../components/animation';
import styles from './SoftSkillsAndLearning.module.css';

/**
 * SoftSkillsAndLearning — two-column "Soft Skills" / "My Learning
 * Approach" block matching the Skills page reference. `softSkills`/
 * `learningApproach` come from GET /api/v1/skills.
 */
function SoftSkillsAndLearning({ softSkills = [], learningApproach }) {
  if (softSkills.length === 0 && !learningApproach) return null;

  return (
    <Section background="secondary">
      <div className={styles.grid}>
        <div>
          <h2 className={styles.title}>
            <User size={20} /> Soft Skills
          </h2>
          <Stagger className={styles.badgeRow}>
            {softSkills.map((skill) => (
              <StaggerItem key={skill}>
                <Badge variant="default" className={styles.badge}>
                  {skill}
                </Badge>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {learningApproach && (
          <div>
            <h2 className={styles.title}>
              <BookOpenCheck size={20} /> My Learning Approach
            </h2>
            <ul className={styles.list}>
              {learningApproach.items.map((item) => (
                <li key={item} className={styles.listItem}>
                  <CheckCircle2 size={16} className={styles.check} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            {learningApproach.quote && (
              <SlideUp as="blockquote" className={styles.quote}>
                <p>&ldquo;{learningApproach.quote}&rdquo;</p>
                <cite>— Safwan Ahmad</cite>
              </SlideUp>
            )}
          </div>
        )}
      </div>
    </Section>
  );
}

export default SoftSkillsAndLearning;
