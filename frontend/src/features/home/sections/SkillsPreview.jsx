import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Network,
  Package,
  Server,
  Wrench,
} from 'lucide-react';

import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import TechnologyIcon from '../../../components/ui/TechnologyIcon/TechnologyIcon';
import { Stagger, StaggerItem } from '../../../components/animation';

import styles from './SkillsPreview.module.css';

/* =========================================================
   CONFIGURATION
   ========================================================= */

const INITIAL_VISIBLE_COUNT = 18;

/* =========================================================
   CATEGORY CONFIGURATION
   ========================================================= */

const categoryConfig = [
  {
    label: 'All',
    value: 'All',
    icon: BrainCircuit,
  },
  {
    label: 'Frontend',
    value: 'Frontend',
    icon: Code2,
  },
  {
    label: 'Backend',
    value: 'Backend',
    icon: Server,
  },
  {
    label: 'Database',
    value: 'Database',
    icon: Database,
  },
  {
    label: 'Tools & Cloud',
    value: 'Tools & Cloud',
    icon: Wrench,
  },
  {
    label: 'Other',
    value: 'Other',
    icon: Layers3,
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

function SkillsPreview({ skills = [] }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  /* =======================================================
     EMPTY STATE
     ======================================================= */

  if (!Array.isArray(skills) || skills.length === 0) {
    return null;
  }

  /* =======================================================
     FILTER SKILLS
     ======================================================= */

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  /* =======================================================
     VISIBLE SKILLS
     ======================================================= */

  const visibleSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, INITIAL_VISIBLE_COUNT);

  /* =======================================================
     MORE BUTTON STATE
     ======================================================= */

  const hasMoreSkills = filteredSkills.length > INITIAL_VISIBLE_COUNT && !showAll;

  const remainingSkills = Math.max(filteredSkills.length - INITIAL_VISIBLE_COUNT, 0);

  /* =======================================================
     CATEGORY CHANGE
     ======================================================= */

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false);
  };

  /* =======================================================
     SHOW MORE
     ======================================================= */

  const handleShowMore = () => {
    setShowAll(true);
  };

  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <Section background="secondary">
      <div className={styles.skillsPreview}>
        {/* =================================================
            HEADER
            ================================================= */}

        <div className={styles.header}>
          {/* Section Identity */}

          <div className={styles.sectionIdentity}>
            <div className={styles.identityMark} aria-hidden="true">
              <Network size={27} strokeWidth={2} />
            </div>

            <span className={styles.eyebrow}>My Skills</span>
          </div>

          {/* Category Navigation */}

          <nav className={styles.categoryNavigation} aria-label="Skill categories">
            {categoryConfig.map((category) => {
              const CategoryIcon = category.icon;

              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  className={`${styles.categoryButton} ${
                    isActive ? styles.categoryButtonActive : ''
                  }`}
                  aria-pressed={isActive}
                  onClick={() => handleCategoryChange(category.value)}
                >
                  <CategoryIcon
                    className={styles.categoryIcon}
                    size={16}
                    strokeWidth={2}
                    aria-hidden="true"
                  />

                  <span>{category.label}</span>
                </button>
              );
            })}
          </nav>

          {/* View All */}

          <Button
            to="/skills"
            variant="ghost"
            icon={<ArrowRight size={16} strokeWidth={2} />}
            className={styles.viewAll}
          >
            View All Skills
          </Button>
        </div>

        {/* =================================================
            SKILL CARDS
            ================================================= */}

        {filteredSkills.length > 0 ? (
          <>
            <Stagger className={styles.skillsTrack} key={`${activeCategory}-${showAll}`}>
              {visibleSkills.map((skill) => (
                <StaggerItem
                  key={`${skill.name}-${skill.category}`}
                  className={styles.skillItem}
                >
                  <article className={styles.skillCard}>
                    {/* Ambient Card Glow */}

                    <div className={styles.cardGlow} aria-hidden="true" />

                    {/* Technology Logo */}

                    <div className={styles.logoContainer}>
                      <TechnologyIcon
                        name={skill.name}
                        category={skill.category}
                        size="md"
                        className={styles.technologyIcon}
                      />
                    </div>

                    {/* Technology Information */}

                    <div className={styles.skillMeta}>
                      <h3 className={styles.skillName}>{skill.name}</h3>

                      <span className={styles.skillCategory}>{skill.category}</span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>

            {/* =================================================
                MORE SKILLS
                ================================================= */}

            {hasMoreSkills && (
              <div className={styles.skillsActions}>
                <button
                  type="button"
                  className={styles.moreButton}
                  onClick={handleShowMore}
                  aria-controls="skills-grid"
                  aria-expanded={showAll}
                >
                  <span>More Skills</span>

                  <ArrowDown size={17} strokeWidth={2} aria-hidden="true" />
                </button>

                <span className={styles.remainingSkills}>{remainingSkills} more</span>
              </div>
            )}
          </>
        ) : (
          /* =================================================
             EMPTY CATEGORY STATE
             ================================================= */

          <div className={styles.emptyState}>
            <Package size={32} strokeWidth={1.8} aria-hidden="true" />

            <span>No skills available in this category.</span>
          </div>
        )}

        {/* =================================================
            MOBILE SCROLL INDICATOR
            ================================================= */}

        {filteredSkills.length > 3 && (
          <div className={styles.mobileHint} aria-hidden="true">
            <span>Swipe to explore</span>

            <ArrowRight size={14} strokeWidth={2} />
          </div>
        )}
      </div>
    </Section>
  );
}

export default SkillsPreview;
