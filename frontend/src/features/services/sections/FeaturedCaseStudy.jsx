import { memo, useCallback, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Folder } from 'lucide-react';

import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import IconButton from '../../../components/ui/IconButton';
import { TechBadge } from '../../../components/common';
import { SlideUp, FadeIn } from '../../../components/animation';

import styles from './FeaturedCaseStudy.module.css';

function FeaturedCaseStudy({ caseStudies = [] }) {
  const [index, setIndex] = useState(0);

  const total = caseStudies.length;

  const active = caseStudies[index];

  const next = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((current) => (current - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (index >= total && total > 0) {
      setIndex(0);
    }
  }, [index, total]);

  useEffect(() => {
    if (total <= 1) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [next, prev, total]);

  if (!total || !active) return null;

  const thumbnail =
    active.thumbnail ||
    active.image ||
    active.imageUrl ||
    active.coverImage ||
    active.heroImage;

  return (
    <Section>
      <div className={styles.section}>
        <div className={styles.header}>
          <SlideUp className={styles.headingGroup}>
            <div className={styles.headingIcon} aria-hidden="true">
              <Folder size={25} strokeWidth={1.8} />
            </div>

            <div>
              <p className={styles.eyebrow}>Featured Work</p>

              <h2 className={styles.title}>Real Projects, Real Results</h2>

              <p className={styles.description}>
                A look at some of the web applications I&apos;ve built.
              </p>
            </div>
          </SlideUp>

          <Button
            to="/projects"
            variant="ghost"
            size="sm"
            icon={<ArrowRight size={14} />}
            className={styles.viewAll}
          >
            View All Projects
          </Button>
        </div>

        <FadeIn key={active.slug || index}>
          <article
            className={styles.projectCard}
            aria-label={`Featured project: ${active.title}`}
          >
            <div className={styles.projectGlow} aria-hidden="true" />

            <div className={styles.thumbnail}>
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={`${active.title} project preview`}
                  className={styles.thumbnailImage}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              ) : (
                <div className={styles.thumbnailFallback}>
                  <Folder size={42} strokeWidth={1.3} />
                  <span>Project Preview</span>
                </div>
              )}

              <div className={styles.thumbnailOverlay} aria-hidden="true" />

              <span className={styles.previewLabel}>Project Preview</span>
            </div>

            <div className={styles.body}>
              <div className={styles.bodyTop}>
                <div className={styles.projectMeta}>
                  <span className={styles.featuredLabel}>Featured Project</span>
                </div>

                {total > 1 && (
                  <div className={styles.navigation}>
                    <IconButton
                      size="sm"
                      aria-label="Previous featured project"
                      onClick={prev}
                    >
                      <ChevronLeft size={15} />
                    </IconButton>

                    <IconButton
                      size="sm"
                      aria-label="Next featured project"
                      onClick={next}
                    >
                      <ChevronRight size={15} />
                    </IconButton>

                    <span
                      className={styles.counter}
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                      <span>/</span>
                      {String(total).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{active.title}</h3>

                <p className={styles.projectDescription}>{active.description}</p>

                {active.technologies?.length > 0 && (
                  <div className={styles.techRow} aria-label="Technologies used">
                    {active.technologies.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                )}

                <div className={styles.actionRow}>
                  <Button
                    to={`/projects/${active.slug}`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight size={14} />}
                  >
                    {active.ctaLabel || 'View Case Study'}
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </FadeIn>
      </div>
    </Section>
  );
}

export default memo(FeaturedCaseStudy);
