import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, ImageOff, X } from 'lucide-react';
import styles from './ScreenshotGallery.module.css';

function ScreenshotGallery({ screenshots = [] }) {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [failedImages, setFailedImages] = useState(() => new Set());

  const items = screenshots.filter(Boolean);

  const scroll = useCallback((direction) => {
    const track = galleryRef.current;
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('[data-gallery-item]'));
    if (!cards.length) return;

    const trackRect = track.getBoundingClientRect();

    const cardPositions = cards.map(
      (card) => card.getBoundingClientRect().left - trackRect.left + track.scrollLeft
    );

    const currentIndex = cardPositions.reduce(
      (closest, position, index) =>
        Math.abs(position - track.scrollLeft) <
        Math.abs(cardPositions[closest] - track.scrollLeft)
          ? index
          : closest,
      0
    );

    const targetIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));

    track.scrollTo({
      left: cardPositions[targetIndex],
      behavior: 'smooth',
    });
  }, []);

  const closePreview = useCallback(() => setActiveIndex(null), []);

  const markFailed = useCallback((src) => {
    if (!src) return;
    setFailedImages((previous) => {
      if (previous.has(src)) return previous;
      return new Set(previous).add(src);
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePreview();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setActiveIndex((index) =>
          index === null ? null : (index - 1 + items.length) % items.length
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setActiveIndex((index) => (index === null ? null : (index + 1) % items.length));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeIndex, closePreview, items.length]);

  useEffect(() => {
    if (activeIndex !== null && activeIndex >= items.length) {
      setActiveIndex(items.length ? items.length - 1 : null);
    }
  }, [activeIndex, items.length]);

  if (!items.length) return null;

  const activeScreenshot = activeIndex === null ? null : items[activeIndex];

  const renderFallback = (large = false) => (
    <div className={`${styles.fallback} ${large ? styles.fallbackLarge : ''}`}>
      <ImageOff size={large ? 32 : 26} strokeWidth={1.5} aria-hidden="true" />
      <span>Screenshot unavailable</span>
    </div>
  );

  return (
    <>
      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrevious}`}
          onClick={() => scroll(-1)}
          aria-label="Show previous screenshot"
          disabled={items.length < 2}
        >
          <ChevronLeft size={21} strokeWidth={1.8} />
        </button>

        <div
          ref={galleryRef}
          className={styles.track}
          aria-label="Application screenshots"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
              event.preventDefault();
              scroll(event.key === 'ArrowRight' ? 1 : -1);
            }
          }}
        >
          {items.map((screenshot, index) => {
            const imageUnavailable =
              !screenshot.image || failedImages.has(screenshot.image);

            return (
              <article
                key={`${screenshot.title ?? 'screenshot'}-${index}`}
                className={styles.card}
                data-gallery-item
              >
                <button
                  type="button"
                  className={styles.imageButton}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Enlarge ${screenshot.title ?? `screenshot ${index + 1}`}`}
                >
                  <div className={styles.imageFrame}>
                    {imageUnavailable ? (
                      renderFallback()
                    ) : (
                      <img
                        className={styles.image}
                        src={screenshot.image}
                        alt={
                          screenshot.alt ?? screenshot.title ?? 'Application screenshot'
                        }
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                        onError={() => markFailed(screenshot.image)}
                      />
                    )}
                  </div>
                </button>

                <div className={styles.caption}>
                  <h3 className={styles.title}>
                    {screenshot.title ?? `Screenshot ${index + 1}`}
                  </h3>

                  {screenshot.description && (
                    <p className={styles.description}>{screenshot.description}</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={() => scroll(1)}
          aria-label="Show next screenshot"
          disabled={items.length < 2}
        >
          <ChevronRight size={21} strokeWidth={1.8} />
        </button>
      </div>

      {activeScreenshot &&
        createPortal(
          <div
            className={styles.lightbox}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closePreview();
            }}
          >
            <section
              className={styles.lightboxPanel}
              role="dialog"
              aria-modal="true"
              aria-label={activeScreenshot.title ?? 'Screenshot preview'}
            >
              <header className={styles.lightboxHeader}>
                <div>
                  <span className={styles.lightboxEyebrow}>APPLICATION PREVIEW</span>
                  <h2>{activeScreenshot.title ?? 'Screenshot preview'}</h2>
                </div>

                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={closePreview}
                  aria-label="Close preview"
                  autoFocus
                >
                  <X size={21} />
                </button>
              </header>

              <div className={styles.lightboxContent}>
                {activeScreenshot.image && !failedImages.has(activeScreenshot.image) ? (
                  <img
                    src={activeScreenshot.image}
                    alt={
                      activeScreenshot.alt ??
                      activeScreenshot.title ??
                      'Application screenshot'
                    }
                    className={styles.lightboxImage}
                    onError={() => markFailed(activeScreenshot.image)}
                  />
                ) : (
                  renderFallback(true)
                )}
              </div>

              {activeScreenshot.description && (
                <p className={styles.lightboxDescription}>
                  {activeScreenshot.description}
                </p>
              )}

              {items.length > 1 && (
                <div className={styles.lightboxNavigation}>
                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() =>
                      setActiveIndex((index) => (index - 1 + items.length) % items.length)
                    }
                    aria-label="Previous preview"
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <span>
                    {activeIndex + 1} / {items.length}
                  </span>

                  <button
                    type="button"
                    className={styles.closeButton}
                    onClick={() => setActiveIndex((index) => (index + 1) % items.length)}
                    aria-label="Next preview"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </section>
          </div>,
          document.body
        )}
    </>
  );
}

export default ScreenshotGallery;
