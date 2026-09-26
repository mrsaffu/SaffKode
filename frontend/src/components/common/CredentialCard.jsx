import { Award, ExternalLink } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import styles from './CredentialCard.module.css';

/**
 * CredentialCard — the reusable card for a single certification/credential.
 * Fields that aren't verified (category, issuedDate, description,
 * credentialUrl) render conditionally rather than showing placeholder or
 * invented text. `credentialUrl`, when present, always opens with
 * rel="noopener noreferrer" via Button's built-in external-link handling.
 */
function CredentialCard({ credential }) {
  return (
    <Card padding="md" hoverable className={styles.card}>
      <div className={styles.header}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <Award size={20} />
        </span>
        {credential.category && <Badge variant="outline">{credential.category}</Badge>}
      </div>

      <h3 className={styles.title}>{credential.title}</h3>
      <p className={styles.issuer}>{credential.issuer}</p>

      {credential.issuedDate && <p className={styles.date}>{credential.issuedDate}</p>}
      {credential.description && <p className={styles.description}>{credential.description}</p>}

      {credential.credentialUrl && (
        <Button
          href={credential.credentialUrl}
          variant="ghost"
          size="sm"
          icon={<ExternalLink size={14} />}
          className={styles.link}
        >
          View Credential
        </Button>
      )}
    </Card>
  );
}

export default CredentialCard;
