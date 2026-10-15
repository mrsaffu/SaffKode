import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Section from '../layout/Section';
import SectionHeading from '../layout/SectionHeading';
import TechBadge from './TechBadge';
import TechnologyIcon from '../ui/TechnologyIcon/TechnologyIcon';

import styles from './TechStackStrip.module.css';

/**
 * Number of technology cards visible at each viewport size.
 */
const getSlidesPerView = (width) => {
  if (width <= 480) return 2;
  if (width <= 768) return 3;
  if (width <= 1024) return 4;
  if (width <= 1280) return 7;

  return 9;
};

/**
 * TechnologyIcon is a shared/reusable component.
 *
 * We therefore DO NOT modify TechnologyIcon itself.
 *
 * Instead, only this section normalizes backend names into
 * names that TechnologyIcon already understands.
 */
const ICON_NAME_MAP = {
  React: 'React.js',
  ReactJS: 'React.js',
  'React JS': 'React.js',

  'Node JS': 'Node.js',
  NodeJS: 'Node.js',

  Express: 'Express.js',
  ExpressJS: 'Express.js',
  'Express JS': 'Express.js',

  JWT: 'JWT Authentication',

  Mongo: 'MongoDB',

  MongooseJS: 'Mongoose',

  JS: 'JavaScript',
  TS: 'TypeScript',

  VSCode: 'VS Code',
  'Visual Studio Code': 'VS Code',

  EC2: 'AWS EC2',
  'Amazon EC2': 'AWS EC2',
  'AWS (EC2)': 'AWS EC2',
};

/**
 * Only used by this section.
 *
 * The backend may eventually return either:
 *
 * "React"
 *
 * or:
 *
 * {
 *   name: "React",
 *   category: "Frontend"
 * }
 */
function normalizeTechnology(technology) {
  if (typeof technology === 'string') {
    const name = technology.trim();

    return {
      name,
      iconName: ICON_NAME_MAP[name] || name,
      category: 'Other',
    };
  }

  if (technology && typeof technology === 'object') {
    const name = String(
      technology.name || technology.title || technology.label || ''
    ).trim();

    return {
      name,
      iconName: ICON_NAME_MAP[name] || name,
      category: technology.category || 'Other',
    };
  }

  return {
    name: '',
    iconName: '',
    category: 'Other',
  };
}

/**
 * TechStackStrip
 *
 * Important:
 * - Does NOT modify TechBadge.
 * - Does NOT modify TechnologyIcon.
 * - Does NOT hardcode the backend technology list.
 * - Receives technologies from API.
 * - Uses native horizontal scrolling + scroll snap.
 */
function TechStackStrip({
  technologies = [],
  eyebrow = 'Tech Stack',
  title = 'Technologies I',
  highlight = 'Work With',
  description,
  action,
  background,
}) {
  const viewportRef = useRef(null);
  const rafRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(() =>
    typeof window !== 'undefined' ? getSlidesPerView(window.innerWidth) : 7
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  /*
   * Normalize API data without changing the original array.
   */
  const items = technologies
    .map(normalizeTechnology)
    .filter((technology) => technology.name);

  /*
   * Maximum valid starting position.
   *
   * Example:
   *
   * 50 technologies
   * 9 visible
   *
   * maxIndex = 41
   */
  const maxIndex = Math.max(0, items.length - slidesPerView);

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

  /**
   * -------------------------------------------------------
   * RESPONSIVE SLIDES
   * -------------------------------------------------------
   */

  const updateSlidesPerView = useCallback(() => {
    if (typeof window === 'undefined') return;

    setSlidesPerView(getSlidesPerView(window.innerWidth));
  }, []);

  useEffect(() => {
    updateSlidesPerView();

    window.addEventListener('resize', updateSlidesPerView);

    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, [updateSlidesPerView]);

  /**
   * -------------------------------------------------------
   * KEEP INDEX VALID
   * -------------------------------------------------------
   */

  useEffect(() => {
    setCurrentIndex((previousIndex) =>
      Math.min(previousIndex, Math.max(0, items.length - slidesPerView))
    );
  }, [items.length, slidesPerView]);

  /**
   * -------------------------------------------------------
   * GET ONE CARD STEP
   * -------------------------------------------------------
   *
   * Card width + gap.
   */
  const getStep = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) return 0;

    const firstSlide = viewport.querySelector('[data-tech-slide]');

    if (!firstSlide) return 0;

    const slideWidth = firstSlide.getBoundingClientRect().width;

    const track = firstSlide.parentElement;

    if (!track) return slideWidth;

    const computedStyle = window.getComputedStyle(track);

    const gap = parseFloat(computedStyle.columnGap) || parseFloat(computedStyle.gap) || 0;

    return slideWidth + gap;
  }, []);

  /**
   * -------------------------------------------------------
   * SCROLL TO SLIDE
   * -------------------------------------------------------
   */

  const scrollToIndex = useCallback(
    (index, behavior = 'smooth') => {
      const viewport = viewportRef.current;

      if (!viewport) return;

      const step = getStep();

      if (!step) return;

      const targetIndex = Math.min(Math.max(index, 0), maxIndex);

      viewport.scrollTo({
        left: targetIndex * step,
        behavior,
      });

      setCurrentIndex(targetIndex);
    },
    [getStep, maxIndex]
  );

  /**
   * -------------------------------------------------------
   * PREVIOUS
   * -------------------------------------------------------
   */

  const goPrevious = useCallback(() => {
    if (!canGoPrevious) return;

    scrollToIndex(currentIndex - 1);
  }, [canGoPrevious, currentIndex, scrollToIndex]);

  /**
   * -------------------------------------------------------
   * NEXT
   * -------------------------------------------------------
   */

  const goNext = useCallback(() => {
    if (!canGoNext) return;

    scrollToIndex(currentIndex + 1);
  }, [canGoNext, currentIndex, scrollToIndex]);

  /**
   * -------------------------------------------------------
   * SYNCHRONIZE WITH TOUCH / MOUSE SCROLL
   * -------------------------------------------------------
   */

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) return undefined;

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const step = getStep();

        if (!step) return;

        const calculatedIndex = Math.round(viewport.scrollLeft / step);

        const safeIndex = Math.min(Math.max(calculatedIndex, 0), maxIndex);

        setCurrentIndex(safeIndex);
      });
    };

    viewport.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      viewport.removeEventListener('scroll', handleScroll);

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [getStep, maxIndex]);

  /**
   * -------------------------------------------------------
   * RESIZE OBSERVER
   * -------------------------------------------------------
   *
   * Recalculate scroll position after the container
   * changes size.
   */
  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport || !window.ResizeObserver) {
      return undefined;
    }

    const observer = new ResizeObserver(() => {
      const safeIndex = Math.min(currentIndex, Math.max(0, items.length - slidesPerView));

      setCurrentIndex(safeIndex);

      requestAnimationFrame(() => {
        const step = getStep();

        if (!step) return;

        viewport.scrollTo({
          left: safeIndex * step,
          behavior: 'auto',
        });
      });
    });

    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, [currentIndex, getStep, items.length, slidesPerView]);

  /**
   * -------------------------------------------------------
   * KEYBOARD ACCESSIBILITY
   * -------------------------------------------------------
   */

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goPrevious();
        break;

      case 'ArrowRight':
        event.preventDefault();
        goNext();
        break;

      case 'Home':
        event.preventDefault();
        scrollToIndex(0);
        break;

      case 'End':
        event.preventDefault();
        scrollToIndex(maxIndex);
        break;

      default:
        break;
    }
  };

  /**
   * -------------------------------------------------------
   * EMPTY STATE
   * -------------------------------------------------------
   */

  if (!items.length) {
    return null;
  }

  /**
   * -------------------------------------------------------
   * PROGRESS
   * -------------------------------------------------------
   */

  const visibleEnd = Math.min(currentIndex + slidesPerView, items.length);

  const progressWidth =
    items.length <= slidesPerView ? 100 : (visibleEnd / items.length) * 100;

  /**
   * -------------------------------------------------------
   * RENDER
   * -------------------------------------------------------
   */

  return (
    <Section background={background}>
      <div className={styles.header}>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          description={description}
        />

        {action && <div className={styles.action}>{action}</div>}
      </div>

      <div className={styles.carousel}>
        <div
          ref={viewportRef}
          className={styles.viewport}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Technology stack carousel"
          onKeyDown={handleKeyDown}
        >
          <div className={styles.track}>
            {items.map((technology, index) => {
              const isExpress = technology.iconName === 'Express.js';

              return (
                <div
                  key={`${technology.name}-${index}`}
                  className={styles.slide}
                  data-tech-slide
                >
                  <TechBadge
                    className={styles.technologyCard}
                    icon={
                      <TechnologyIcon
                        name={technology.iconName}
                        category={technology.category}
                        size="md"
                        title={technology.name}
                        showFallback
                        className={isExpress ? styles.expressIcon : ''}
                      />
                    }
                  >
                    {technology.name}
                  </TechBadge>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.progress} aria-hidden="true">
            <span
              className={styles.progressBar}
              style={{
                width: `${progressWidth}%`,
              }}
            />
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.control}
              onClick={goPrevious}
              disabled={!canGoPrevious}
              aria-label="Previous technologies"
              title="Previous technologies"
            >
              <ChevronLeft size={18} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className={styles.control}
              onClick={goNext}
              disabled={!canGoNext}
              aria-label="Next technologies"
              title="Next technologies"
            >
              <ChevronRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default TechStackStrip;
