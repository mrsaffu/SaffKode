import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';
import styles from './SkillCard.module.css';

/**
 * SkillCard — icon monogram + name + animated progress bar, matching the
 * Skills page reference grid. Uses a colored letter monogram rather than
 * per-technology brand logos, since lucide-react no longer ships brand
 * icons and replicating 20 real logos as custom SVGs is out of scope —
 * see components/common/BrandIcons.jsx for the note on this trade-off.
 */
function SkillCard({ skill }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.monogram} aria-hidden="true">
          {skill.name.charAt(0)}
        </span>
        <div>
          <p className={styles.name}>{skill.name}</p>
          {skill.subtitle && <p className={styles.subtitle}>{skill.subtitle}</p>}
        </div>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-label={`${skill.name} proficiency`}
        aria-valuenow={skill.level}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className={styles.fill}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.6 }}
          transition={
            prefersReduced ? { duration: 0.2 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
        />
      </div>
      <span className={styles.percentLabel}>{skill.level}%</span>
    </div>
  );
}

export default SkillCard;
