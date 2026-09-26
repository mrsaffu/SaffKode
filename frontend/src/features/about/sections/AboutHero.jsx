import {
  Download,
  ArrowRight,
  Code2,
  Users,
  Rocket,
  MapPin,
  BriefcaseBusiness,
  GraduationCap,
  Heart,
} from 'lucide-react';

import Section from '../../../components/layout/Section';
import Button from '../../../components/ui/Button';
import Badge from '../../../components/ui/Badge';
import { SlideUp, FadeIn } from '../../../components/animation';
import aboutHeroImage from '../../../assets/images/hero/aboutBG.png';
import styles from './AboutHero.module.css';

const statIcons = {
  'Based In': MapPin,
  Experience: BriefcaseBusiness,
  Education: GraduationCap,
  Passion: Heart,
};

function AboutHero({ profile }) {
  // console.log(aboutHeroImage)
  if (!profile) return null;

  const taglineWords = profile.tagline?.trim().split(/\s+/) || [];

  const taglineFirstPart = taglineWords.slice(0, -1).join(' ');
  const taglineLastWord = taglineWords.at(-1) || '';

  const getStatIcon = (label) => {
    const Icon = statIcons[label] || Code2;

    return <Icon aria-hidden="true" />;
  };

  return (
    <Section spacing="0" className={styles.aboutHero}>
      {/* Ambient background glow */}
      <div className={styles.ambientGlow} aria-hidden="true" />

      <div className={styles.grid}>
        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}
        <div className={styles.copy}>
          {/* Eyebrow */}
          <FadeIn>
            <Badge variant="outline" className={styles.badge}>
              About Me
            </Badge>
          </FadeIn>

          {/* Dynamic tagline */}
          <SlideUp as="h1" delay={0.05} className={styles.headline}>
            {taglineFirstPart}

            {taglineLastWord && (
              <span className={styles.highlight}>{taglineLastWord}</span>
            )}
          </SlideUp>

          {/* Intro + summary */}
          <SlideUp delay={0.1} className={styles.content}>
            {profile.intro && <p className={styles.lead}>{profile.intro}</p>}

            {profile.summary && <p className={styles.summary}>{profile.summary}</p>}
          </SlideUp>

          {/* CTA buttons */}
          <SlideUp delay={0.15} className={styles.actions}>
            {profile.resumeUrl && (
              <Button
                href={profile.resumeUrl}
                variant="primary"
                size="lg"
                icon={<Download size={18} />}
                className={styles.downloadBtn}
              >
                Download CV
              </Button>
            )}

            <Button
              to="/contact"
              variant="outline"
              size="lg"
              icon={<ArrowRight size={18} />}
              className={styles.talkBtn}
            >
              <span>Let&apos;s Talk</span>
            </Button>
          </SlideUp>

          {/* ===================================================
              DYNAMIC STATS
          ==================================================== */}
          {Array.isArray(profile.stats) && profile.stats.length > 0 && (
            <SlideUp delay={0.2} className={styles.statBar}>
              {profile.stats.map((stat) => (
                <div className={styles.statItem} key={`${stat.label}-${stat.value}`}>
                  {getStatIcon(stat.label)}

                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </SlideUp>
          )}
        </div>

        {/* =====================================================
            RIGHT VISUAL
        ====================================================== */}
        <FadeIn delay={0.15} className={styles.visual}>
          {/* Yellow ambient glow */}
          <div className={styles.photoGlow} aria-hidden="true" />

          {/* Main image frame */}
          <div className={styles.visualFrame}>
            <div className={styles.words} aria-hidden="true">
              <span>Build</span>
              <span>Learn</span>
              <span>Grow</span>
              <span>Repeat</span>
            </div>

            <img
              src={aboutHeroImage}
              alt={`${profile.name} - ${profile.title}`}
              className={styles.profileImage}
            />

            <div className={styles.imageShade} aria-hidden="true" />
          </div>

          {/* =================================================
              QUOTE CARD
          ================================================== */}
          {profile.quote && (
            <div className={styles.quoteCard}>
              <p>&ldquo;{profile.quote}&rdquo;</p>

              {profile.name && <strong>— {profile.name}</strong>}
            </div>
          )}

          {/* =================================================
              FEATURE RAIL
          ================================================== */}
          <div className={styles.featureRail}>
            <div className={styles.feature}>
              <Code2 aria-hidden="true" />

              <span>
                Clean
                <br />
                Code
              </span>
            </div>

            <div className={styles.feature}>
              <Users aria-hidden="true" />

              <span>
                Better
                <br />
                Experiences
              </span>
            </div>

            <div className={styles.feature}>
              <Rocket aria-hidden="true" />

              <span>
                Real-World
                <br />
                Impact
              </span>
            </div>
          </div>

          {/* =================================================
              DYNAMIC ROLE
          ================================================== */}
          <div className={styles.role}>
            <Code2 size={14} aria-hidden="true" />

            <span>{profile.title?.toUpperCase()}</span>

            <i aria-hidden="true" />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

export default AboutHero;
