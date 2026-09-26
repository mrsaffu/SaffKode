import { Download, ArrowRight } from 'lucide-react';

import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import { SocialLinks } from '../../../components/common';

import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';

import heroBg from '../../../assets/images/hero/hero.png';
import heroMobile from '../../../assets/images/hero/hero-mobile.png';

import styles from './Hero.module.css';

/**
 * Hero
 *
 * Desktop / Tablet:
 * - Uses hero.png as the background artwork.
 *
 * Mobile:
 * - Hides the desktop background.
 * - Uses hero-mobile.png as a real <img>.
 * - Mobile image appears after CTA + social links.
 * - Statistics appear below the mobile image.
 */
function Hero({ stats = [] }) {
  return (
    <Section spacing="lg" className={styles.hero}>
      {/* =====================================================
          DESKTOP / TABLET BACKGROUND
          ===================================================== */}

      <div
        className={styles.background}
        style={{
          '--hero-bg': `url("${heroBg}")`,
        }}
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT OVERLAY
          ===================================================== */}

      <div className={styles.overlay} aria-hidden="true" />

      {/* =====================================================
          VIGNETTE
          ===================================================== */}

      <div className={styles.vignette} aria-hidden="true" />

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className={styles.content}>
        <div className={styles.copy}>
          {/* Availability badge */}

          <FadeIn>
            <div className={styles.badgeWrap}>
              <Badge variant="outline">
                <span className={styles.statusDot} aria-hidden="true" />
                Available for Opportunities
              </Badge>
            </div>
          </FadeIn>

          {/* Main headline */}

          <SlideUp as="h1" delay={0.05} className={styles.headline}>
            <span className={styles.headingLine}>Building Digital</span>

            <span className={styles.headingLine}>Solutions for a</span>

            <span className={styles.highlight}>Better Tomorrow</span>
          </SlideUp>

          {/* Description */}

          <SlideUp as="p" delay={0.1} className={styles.subhead}>
            Hi, I&apos;m Safwan Ahmad — a Full-Stack Developer passionate about building
            scalable, responsive, and user-centric web applications using the MERN stack.
            I turn ideas into real-world products that create impact.
          </SlideUp>

          {/* CTA buttons */}

          <SlideUp delay={0.15} className={styles.actions}>
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              View My Work
            </Button>

            <Button
              href="/resume.pdf"
              variant="outline"
              size="lg"
              icon={<Download size={18} />}
            >
              Download Resume
            </Button>
          </SlideUp>

          {/* Social links */}

          <FadeIn delay={0.2}>
            <div className={styles.socials}>
              <SocialLinks />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* =====================================================
          MOBILE ONLY IMAGE
          ===================================================== */}

      <div className={styles.mobileImage}>
        <img
          src={heroMobile}
          alt="Safwan Ahmad"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* =====================================================
          STATISTICS
          ===================================================== */}

      {stats.length > 0 && (
        <Stagger className={styles.statGrid}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className={styles.statItem}>
              <div className={styles.stat}>
                <div className={styles.statValue}>{stat.value}</div>

                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </Section>
  );
}

export default Hero;
