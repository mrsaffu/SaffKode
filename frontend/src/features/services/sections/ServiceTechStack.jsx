import { memo, useMemo, useState } from 'react';
import {
  Layers3,
  ChevronRight,
} from 'lucide-react';

import Section from '../../../components/layout/Section';
import TechnologyIcon from '../../../components/ui/TechnologyIcon/TechnologyIcon';
import {
  SlideUp,
  FadeIn,
  Stagger,
  StaggerItem,
} from '../../../components/animation';

import styles from './ServiceTechStack.module.css';

/* =========================================================
   TAB GROUPS
   ========================================================= */

const TAB_GROUPS = {
  Frontend: ['Frontend'],
  Backend: ['Backend'],
  Database: ['Database'],
  'Tools & DevOps': ['DevOps', 'Cloud', 'Tools'],
};

/* =========================================================
   CATEGORY NORMALIZATION
   ========================================================= */

const normalizeCategory = (category) => {
  if (!category) {
    return '';
  }

  return String(category).trim();
};

/* =========================================================
   TECHNOLOGY NAME NORMALIZATION
   ========================================================= */

const normalizeTechnology = (tech) => {
  if (!tech) {
    return null;
  }

  if (typeof tech === 'string') {
    return {
      name: tech.trim(),
      category: '',
    };
  }

  return {
    ...tech,
    name: String(tech.name || '').trim(),
    category: normalizeCategory(tech.category),
  };
};

/* =========================================================
   COMPONENT
   ========================================================= */

function ServiceTechStack({
  technologies = [],
}) {
  const tabs = Object.keys(TAB_GROUPS);

  const [activeTab, setActiveTab] = useState(
    tabs[0]
  );

  /* =======================================================
     NORMALIZED TECHNOLOGIES
     ======================================================= */

  const normalizedTechnologies = useMemo(() => {
    if (!Array.isArray(technologies)) {
      return [];
    }

    return technologies
      .map(normalizeTechnology)
      .filter(
        (technology) =>
          technology &&
          technology.name
      );
  }, [technologies]);

  /* =======================================================
     FILTERED TECHNOLOGIES
     ======================================================= */

  const filtered = useMemo(() => {
    const categories =
      TAB_GROUPS[activeTab] || [];

    return normalizedTechnologies.filter(
      (tech) =>
        categories.includes(
          tech.category
        )
    );
  }, [
    normalizedTechnologies,
    activeTab,
  ]);

  /* =======================================================
     EMPTY STATE
     ======================================================= */

  if (
    normalizedTechnologies.length === 0
  ) {
    return null;
  }

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <Section className={styles.section}>
      <div className={styles.shell}>
        <div className={styles.layout}>
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <SlideUp className={styles.header}>
            <div className={styles.headingRow}>
              <span
                className={styles.headingIcon}
                aria-hidden="true"
              >
                <Layers3
                  size={25}
                  strokeWidth={1.8}
                />
              </span>

              <div>
                <p className={styles.eyebrow}>
                  Technology Stack

                  <span
                    className={styles.arrow}
                    aria-hidden="true"
                  >
                    <ChevronRight
                      size={13}
                    />
                  </span>
                </p>

                <h2
                  className={styles.title}
                >
                  Modern Tools for
                  <br />
                  Modern Solutions
                </h2>
              </div>
            </div>

            <p
              className={styles.description}
            >
              I use industry-standard
              technologies to build reliable,
              scalable and high-performance
              applications.
            </p>
          </SlideUp>

          {/* =================================================
              RIGHT TECHNOLOGY PANEL
              ================================================= */}

          <FadeIn
            delay={0.12}
            className={styles.stackPanel}
          >
            {/* =================================================
                TABS
                ================================================= */}

            <div
              className={
                styles.tabsWrapper
              }
            >
              <div
                className={styles.tabs}
                role="tablist"
                aria-label="Technology category"
              >
                {tabs.map((tab) => {
                  const isActive =
                    tab === activeTab;

                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={
                        isActive
                      }
                      aria-controls={`technology-panel-${tab
                        .toLowerCase()
                        .replace(
                          /\s+/g,
                          '-'
                        )}`}
                      className={`${styles.tab} ${
                        isActive
                          ? styles.tabActive
                          : ''
                      }`}
                      onClick={() =>
                        setActiveTab(tab)
                      }
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* =================================================
                TECHNOLOGY VIEWPORT
                ================================================= */}

            <div
              className={
                styles.technologyViewport
              }
              id={`technology-panel-${activeTab
                .toLowerCase()
                .replace(
                  /\s+/g,
                  '-'
                )}`}
              role="tabpanel"
            >
              {filtered.length > 0 ? (
                <Stagger
                  key={activeTab}
                  className={styles.grid}
                >
                  {filtered.map(
                    (tech) => (
                      <StaggerItem
                        key={`${tech.name}-${tech.category}`}
                        className={
                          styles.techItem
                        }
                      >
                        <article
                          className={
                            styles.techTile
                          }
                        >
                          {/* =====================================
                              TECHNOLOGY ICON
                              ===================================== */}

                          <div
                            className={
                              styles.techIconWrapper
                            }
                          >
                            <TechnologyIcon
                              name={
                                tech.name
                              }
                              category={
                                tech.category
                              }
                              size="sm"
                              className={
                                styles.techIcon
                              }
                            />
                          </div>

                          {/* =====================================
                              TECHNOLOGY NAME
                              ===================================== */}

                          <span
                            className={
                              styles.name
                            }
                            title={
                              tech.name
                            }
                          >
                            {tech.name}
                          </span>
                        </article>
                      </StaggerItem>
                    )
                  )}
                </Stagger>
              ) : (
                <div
                  className={
                    styles.emptyState
                  }
                >
                  No technologies available
                  in this category.
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}

export default memo(
  ServiceTechStack
);