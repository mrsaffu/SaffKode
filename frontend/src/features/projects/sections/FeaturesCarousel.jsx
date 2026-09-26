import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckSquare } from 'lucide-react';
import Card from '../../../components/ui/Card';
import IconButton from '../../../components/ui/IconButton';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './FeaturesCarousel.module.css';

const PAGE_SIZE = 4;

/**
 * FeaturesCarousel — key features shown 4 at a time with prev/next
 * controls and numbered page indicators, matching the reference's "Key
 * Features ... 01 02 03 04" layout. Falls back to a plain grid (no
 * controls) when there's only one page.
 */
function FeaturesCarousel({ features = [] }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(features.length / PAGE_SIZE);

  if (features.length === 0) return null;

  const start = page * PAGE_SIZE;
  const visible = features.slice(start, start + PAGE_SIZE);

  function goTo(nextPage) {
    setPage(((nextPage % totalPages) + totalPages) % totalPages);
  }

  return (
    <div>
      {totalPages > 1 && (
        <div className={styles.controls}>
          <div className={styles.pageDots} aria-hidden="true">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === page ? styles.dotActive : ''}`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            ))}
          </div>
          <div className={styles.arrows}>
            <IconButton
              size="sm"
              aria-label="Previous features"
              onClick={() => goTo(page - 1)}
            >
              <ChevronLeft size={16} />
            </IconButton>
            <IconButton
              size="sm"
              variant="solid"
              aria-label="Next features"
              onClick={() => goTo(page + 1)}
            >
              <ChevronRight size={16} />
            </IconButton>
          </div>
        </div>
      )}

      <Stagger className={styles.grid} key={page}>
        {visible.map((feature) => (
          <StaggerItem key={feature.title}>
            <Card padding="md" className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                <CheckSquare size={18} />
              </span>
              <div>
                <h4 className={styles.title}>{feature.title}</h4>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}

export default FeaturesCarousel;
