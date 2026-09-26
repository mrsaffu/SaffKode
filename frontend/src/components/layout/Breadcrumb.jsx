import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import styles from './Breadcrumb.module.css';

/**
 * Breadcrumb — trail navigation for deep pages (service/project/blog
 * details). `items` is an array of { label, to } — the last item renders
 * as plain text (current page), not a link.
 */
function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            <Home size={13} aria-hidden="true" />
            <span className={styles.srOnly}>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className={styles.item}>
              <ChevronRight size={13} className={styles.separator} aria-hidden="true" />
              {isLast || !item.to ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link to={item.to} className={styles.link}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
