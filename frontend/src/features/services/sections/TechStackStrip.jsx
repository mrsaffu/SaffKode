import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import { TechBadge } from '../../../components/common';
import styles from './TechStackStrip.module.css';

/* =========================================================
   TECHNOLOGY ICONS
   Simple Icons CDN
   No react-icons required.
========================================================= */

const technologyIcons = {
  /* ========================= FRONTEND ========================= */

  javascript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  js: 'https://cdn.simpleicons.org/javascript/F7DF1E',

  react: 'https://cdn.simpleicons.org/react/61DAFB',
  'react.js': 'https://cdn.simpleicons.org/react/61DAFB',
  reactjs: 'https://cdn.simpleicons.org/react/61DAFB',

  typescript: 'https://cdn.simpleicons.org/typescript/3178C6',

  'tailwind css': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  tailwind: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',

  'redux toolkit': 'https://cdn.simpleicons.org/redux/764ABC',
  redux: 'https://cdn.simpleicons.org/redux/764ABC',

  html: 'https://cdn.simpleicons.org/html5/E34F26',
  html5: 'https://cdn.simpleicons.org/html5/E34F26',

  css: 'https://cdn.simpleicons.org/css3/1572B6',
  css3: 'https://cdn.simpleicons.org/css3/1572B6',

  vite: 'https://cdn.simpleicons.org/vite/646CFF',

  'react router': 'https://cdn.simpleicons.org/reactrouter/CA4245',
  'react router dom': 'https://cdn.simpleicons.org/reactrouter/CA4245',

  axios: 'https://cdn.simpleicons.org/axios/5A29E4',

  /* ========================= BACKEND ========================= */

  node: 'https://cdn.simpleicons.org/nodedotjs/339933',
  'node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',
  nodejs: 'https://cdn.simpleicons.org/nodedotjs/339933',

  express: 'https://cdn.simpleicons.org/express/FFFFFF',
  'express.js': 'https://cdn.simpleicons.org/express/FFFFFF',
  expressjs: 'https://cdn.simpleicons.org/express/FFFFFF',

  mongoose: 'https://cdn.simpleicons.org/mongoose/880000',

  jwt: 'https://cdn.simpleicons.org/jsonwebtokens/FFFFFF',
  'jwt authentication': 'https://cdn.simpleicons.org/jsonwebtokens/FFFFFF',

  'socket.io': 'https://cdn.simpleicons.org/socketdotio/FFFFFF',

  /* ========================= DATABASE ========================= */

  mongodb: 'https://cdn.simpleicons.org/mongodb/47A248',
  mongo: 'https://cdn.simpleicons.org/mongodb/47A248',
  'mongodb atlas': 'https://cdn.simpleicons.org/mongodb/47A248',

  mysql: 'https://cdn.simpleicons.org/mysql/4479A1',

  postgresql: 'https://cdn.simpleicons.org/postgresql/4169E1',

  redis: 'https://cdn.simpleicons.org/redis/DC382D',

  /* ========================= DEVOPS / CLOUD ========================= */

  docker: 'https://cdn.simpleicons.org/docker/2496ED',

  aws: 'https://cdn.simpleicons.org/amazonwebservices/FF9900',

  'aws ec2': 'https://cdn.simpleicons.org/amazonec2/FF9900',

  'aws (ec2)': 'https://cdn.simpleicons.org/amazonec2/FF9900',

  'amazon web services': 'https://cdn.simpleicons.org/amazonwebservices/FF9900',

  vercel: 'https://cdn.simpleicons.org/vercel/FFFFFF',

  netlify: 'https://cdn.simpleicons.org/netlify/00C7B7',

  firebase: 'https://cdn.simpleicons.org/firebase/FFCA28',

  nginx: 'https://cdn.simpleicons.org/nginx/009639',

  linux: 'https://cdn.simpleicons.org/linux/FCC624',

  /* ========================= DEVELOPMENT TOOLS ========================= */

  git: 'https://cdn.simpleicons.org/git/F05032',

  github: 'https://cdn.simpleicons.org/github/FFFFFF',

  gitlab: 'https://cdn.simpleicons.org/gitlab/FC6D26',

  bitbucket: 'https://cdn.simpleicons.org/bitbucket/0052CC',

  npm: 'https://cdn.simpleicons.org/npm/CB3837',

  yarn: 'https://cdn.simpleicons.org/yarn/2C8EBB',

  postman: 'https://cdn.simpleicons.org/postman/FF6C37',

  'vs code': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',

  vscode: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',

  figma: 'https://cdn.simpleicons.org/figma/F24E1E',
};

/* =========================================================
   NORMALIZE TECHNOLOGY KEY
========================================================= */

function normalizeTechnologyKey(value = '') {
  return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

/* =========================================================
   GET ICON
   Prefer explicit icon key from data.
   Fallback to technology name.
========================================================= */

function getTechnologyIcon(technology) {
  if (!technology) return null;

  const iconKey =
    typeof technology === 'object' ? technology.icon || technology.name : technology;

  const normalizedKey = normalizeTechnologyKey(iconKey);

  return technologyIcons[normalizedKey] || null;
}

/* =========================================================
   TECHNOLOGY ICON COMPONENT
========================================================= */

function TechnologyIcon({ src, alt }) {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) {
    return (
      <span className={styles.iconFallback} aria-hidden="true">
        <span />
        <span />
        <span />
      </span>
    );
  }

  return (
    <img
      src={src}
      alt=""
      className={styles.iconImage}
      loading="lazy"
      decoding="async"
      draggable="false"
      onError={() => setHasError(true)}
      aria-label={alt}
    />
  );
}

/* =========================================================
   GIT + GITHUB
========================================================= */

function GitGithubIcon() {
  return (
    <span className={styles.combinedIcon} aria-label="Git and GitHub">
      <TechnologyIcon src="https://cdn.simpleicons.org/git/F05032" alt="Git" />

      <TechnologyIcon src="https://cdn.simpleicons.org/github/FFFFFF" alt="GitHub" />
    </span>
  );
}

/* =========================================================
   TECH STACK STRIP
========================================================= */

function TechStackStrip({ technologies = [] }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     CLEAN TECHNOLOGY DATA

     Supports:

     {
       name: 'React.js',
       category: 'Frontend',
       icon: 'react'
     }
  ======================================================= */

  const techItems = useMemo(() => {
    if (!Array.isArray(technologies)) {
      return [];
    }

    return technologies
      .filter(Boolean)
      .map((technology) => {
        if (typeof technology === 'string') {
          return {
            name: technology.trim(),
            category: '',
            icon: technology.trim(),
          };
        }

        return {
          name: String(technology.name || '').trim(),
          category: String(technology.category || '').trim(),
          icon: String(technology.icon || technology.name || '')
            .trim()
            .toLowerCase(),
        };
      })
      .filter((technology) => technology.name);
  }, [technologies]);

  /* =======================================================
     RESPONSIVE CARD COUNT
  ======================================================= */

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(2);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(4);
      } else {
        setVisibleCount(6);
      }
    };

    updateVisibleCount();

    window.addEventListener('resize', updateVisibleCount);

    return () => {
      window.removeEventListener('resize', updateVisibleCount);
    };
  }, []);

  /* =======================================================
     TOTAL PAGES
  ======================================================= */

  const totalPages = Math.max(1, Math.ceil(techItems.length / visibleCount));

  /* =======================================================
     KEEP CURRENT PAGE VALID
  ======================================================= */

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(totalPages - 1, 0)));
  }, [totalPages]);

  /* =======================================================
     NEXT
  ======================================================= */

  const nextSlide = useCallback(() => {
    setCurrentPage((page) => {
      if (totalPages <= 1) return 0;

      return (page + 1) % totalPages;
    });
  }, [totalPages]);

  /* =======================================================
     PREVIOUS
  ======================================================= */

  const previousSlide = useCallback(() => {
    setCurrentPage((page) => {
      if (totalPages <= 1) return 0;

      return (page - 1 + totalPages) % totalPages;
    });
  }, [totalPages]);

  /* =======================================================
     AUTO SCROLL
  ======================================================= */

  useEffect(() => {
    if (isPaused || totalPages <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      window.clearInterval(timer);
    };
  }, [isPaused, nextSlide, totalPages]);

  /* =======================================================
     PAUSE WHEN TAB IS HIDDEN
  ======================================================= */

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  /* =======================================================
     EMPTY
  ======================================================= */

  if (techItems.length === 0) {
    return null;
  }

  const translatePercentage = currentPage * 100;

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <Section>
      <SectionHeading eyebrow="Tech Stack" title="Technologies I" highlight="Work With" />

      <div
        className={styles.stackContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={styles.ambientGlow} aria-hidden="true" />

        {/* Previous */}
        <button
          type="button"
          className={`${styles.navigationButton} ${styles.previousButton}`}
          onClick={previousSlide}
          disabled={totalPages <= 1}
          aria-label="Previous technologies"
        >
          <ChevronLeft size={20} strokeWidth={2} />
        </button>

        {/* Viewport */}
        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{
              transform: `translate3d(-${translatePercentage}%, 0, 0)`,
            }}
          >
            {techItems.map((technology, index) => {
              const normalizedIcon = normalizeTechnologyKey(technology.icon);

              const iconSrc = getTechnologyIcon(technology);

              const isGitGithub =
                normalizedIcon === 'git' &&
                normalizeTechnologyKey(technology.name) === 'git & github';

              return (
                <div className={styles.slide} key={`${technology.name}-${index}`}>
                  <TechBadge
                    className={styles.techBadge}
                    icon={
                      isGitGithub ? (
                        <GitGithubIcon />
                      ) : (
                        <TechnologyIcon src={iconSrc} alt={technology.name} />
                      )
                    }
                  >
                    {technology.name}
                  </TechBadge>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next */}
        <button
          type="button"
          className={`${styles.navigationButton} ${styles.nextButton}`}
          onClick={nextSlide}
          disabled={totalPages <= 1}
          aria-label="Next technologies"
        >
          <ChevronRight size={20} strokeWidth={2} />
        </button>
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.pagination}>
          {Array.from({
            length: totalPages,
          }).map((_, index) => (
            <button
              type="button"
              key={index}
              className={`${styles.paginationDot} ${
                currentPage === index ? styles.paginationDotActive : ''
              }`}
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to technology slide ${index + 1}`}
              aria-current={currentPage === index ? 'true' : undefined}
            />
          ))}
        </div>

        <div className={styles.controlMeta}>
          <button
            type="button"
            className={styles.autoScrollButton}
            onClick={() => setIsPaused((paused) => !paused)}
            aria-label={
              isPaused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'
            }
          >
            <span className={styles.controlIcon}>
              {isPaused ? <Play size={12} fill="currentColor" /> : <Pause size={12} />}
            </span>

            <span>{isPaused ? 'Resume' : 'Auto Scroll'}</span>
          </button>

          <span className={styles.controlDivider} />

          <span className={styles.statusText}>{techItems.length} Technologies</span>
        </div>
      </div>
    </Section>
  );
}

export default TechStackStrip;
