import { useState } from 'react';
import { ImageOff, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../../../components/ui/Card';
import Modal from '../../../components/ui/Modal';
import IconButton from '../../../components/ui/IconButton';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './ScreenshotGallery.module.css';

/**
 * ScreenshotGallery — thumbnail grid that opens a Modal lightbox with
 * prev/next navigation, matching the "Application Screenshots" reference
 * section. No real screenshot images exist yet, so thumbnails render a
 * placeholder (never a broken <img> or invented file path) — swap in real
 * asset URLs once screenshots are provided.
 */
function ScreenshotGallery({ screenshots = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (screenshots.length === 0) return null;

  const isOpen = activeIndex !== null;
  const active = isOpen ? screenshots[activeIndex] : null;

  function showNext() {
    setActiveIndex((index) => (index + 1) % screenshots.length);
  }

  function showPrev() {
    setActiveIndex((index) => (index - 1 + screenshots.length) % screenshots.length);
  }

  return (
    <>
      <Stagger className={styles.grid}>
        {screenshots.map((shot, index) => (
          <StaggerItem key={shot.title}>
            <Card
              as="button"
              padding="none"
              hoverable
              className={styles.thumb}
              onClick={() => setActiveIndex(index)}
            >
              <span className={styles.placeholder} aria-hidden="true">
                <ImageOff size={22} />
              </span>
              <div className={styles.caption}>
                <p className={styles.thumbTitle}>{shot.title}</p>
                <p className={styles.thumbDescription}>{shot.description}</p>
              </div>
            </Card>
          </StaggerItem>
        ))}
      </Stagger>

      <Modal isOpen={isOpen} onClose={() => setActiveIndex(null)} title={active?.title}>
        {active && (
          <div className={styles.lightbox}>
            <span className={styles.lightboxPlaceholder} aria-hidden="true">
              <ImageOff size={32} />
            </span>
            <p className={styles.lightboxDescription}>{active.description}</p>
            {screenshots.length > 1 && (
              <div className={styles.lightboxNav}>
                <IconButton size="sm" aria-label="Previous screenshot" onClick={showPrev}>
                  <ChevronLeft size={16} />
                </IconButton>
                <span className={styles.lightboxCount}>
                  {activeIndex + 1} / {screenshots.length}
                </span>
                <IconButton size="sm" aria-label="Next screenshot" onClick={showNext}>
                  <ChevronRight size={16} />
                </IconButton>
              </div>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}

export default ScreenshotGallery;
