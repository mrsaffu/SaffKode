import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import TechBadge from './TechBadge';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard — the single reusable project card used on Home's Featured
 * Projects preview (Phase 5) and the full Projects listing (Phase 8).
 * Never duplicate this per page — configure via props/variant instead.
 */
function ProjectCard({ project, variant = 'default' }) {
  return (
    <Card
      as={Link}
      to={`/projects/${project.slug}`}
      padding="none"
      hoverable
      className={`${styles.card} ${styles[`variant-${variant}`]}`}
    >
      <div className={styles.thumbnail} aria-hidden="true">
        {project.featured && (
          <Badge variant="accent" className={styles.featuredBadge}>
            Featured
          </Badge>
        )}
        {project.liveUrl && (
          <span className={styles.externalIcon}>
            <ExternalLink size={14} />
          </span>
        )}
        <span className={styles.thumbnailInitial}>{project.title.charAt(0)}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.category}>{project.category}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.techRow}>
          {project.technologies?.slice(0, 4).map((tech) => (
            <TechBadge key={tech}>{tech}</TechBadge>
          ))}
        </div>

        <span className={styles.link}>
          View Details <ArrowRight size={14} />
        </span>
      </div>
    </Card>
  );
}

export default ProjectCard;
