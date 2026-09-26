import { memo, useMemo, useState } from 'react';
import { ArrowRight, Monitor, ShieldCheck, UsersRound, Zap } from 'lucide-react';

import Breadcrumb from '../../../components/layout/Breadcrumb';
import Button from '../../../components/ui/Button';
import { TechBadge } from '../../../components/common';
import { SlideUp, FadeIn } from '../../../components/animation';
import { getServiceIcon } from './serviceIcons';
import { getServiceHeroImage } from '../../../services/utils/serviceHeroImages';

import styles from './ServiceDetailsHero.module.css';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Reliable & Secure',
    description: 'Solutions',
  },
  {
    icon: Zap,
    title: 'Scalable &',
    description: 'Maintainable Code',
  },
  {
    icon: UsersRound,
    title: 'Client-Focused',
    description: 'Approach',
  },
];

function splitTitle(title = '') {
  const words = title.trim().split(/\s+/);

  if (words.length <= 1) {
    return {
      lead: '',
      last: words[0] || '',
    };
  }

  const last = words.pop();

  return {
    lead: words.join(' '),
    last,
  };
}

function ServiceDetailsHero({ service }) {
  const [imageFailed, setImageFailed] = useState(false);

  const Icon = getServiceIcon(service?.icon) || Monitor;

  const { lead, last } = splitTitle(service?.title);

  const backgroundImage = useMemo(
    () => getServiceHeroImage(service?.slug),
    [service?.slug]
  );

  const hasBackgroundImage = Boolean(backgroundImage) && !imageFailed;

  const heroStyle = useMemo(() => {
    if (!hasBackgroundImage) {
      return undefined;
    }

    return {
      '--hero-bg': `url("${backgroundImage}")`,
    };
  }, [backgroundImage, hasBackgroundImage]);

  return (
    <section className={styles.hero} style={heroStyle}>
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          aria-hidden="true"
          className={styles.backgroundPreloader}
          onError={() => setImageFailed(true)}
        />
      )}

      <div className={styles.background} aria-hidden="true" />

      <div className={styles.backgroundOverlay} aria-hidden="true" />

      <div className={styles.backgroundGlow} aria-hidden="true" />

      <div className={styles.noise} aria-hidden="true" />

      <div className={styles.container}>
        <FadeIn className={styles.breadcrumbWrap}>
          <Breadcrumb
            items={[
              {
                label: 'Services',
                to: '/services',
              },
              {
                label: service.title,
              },
            ]}
          />
        </FadeIn>

        <div className={styles.content}>
          <div className={styles.copy}>
            <FadeIn delay={0.05} className={styles.serviceMeta}>
              <span className={styles.iconWrapper}>
                <Icon size={25} strokeWidth={1.8} />
              </span>

              <span className={styles.eyebrow}>
                {service.hero?.eyebrow || 'SERVICE 01'}
              </span>
            </FadeIn>

            <SlideUp as="h1" delay={0.08} className={styles.title}>
              {lead && <span className={styles.titleLead}>{lead}</span>}

              {last && <span className={styles.titleHighlight}>{last}</span>}
            </SlideUp>

            <SlideUp as="p" delay={0.14} className={styles.description}>
              {service.hero?.description ||
                service.shortDescription ||
                'End-to-end digital solutions that are modern, scalable, secure and built around your business goals.'}
            </SlideUp>

            {service.technologies?.length > 0 && (
              <FadeIn delay={0.2} className={styles.techRow}>
                {service.technologies.map((tech) => (
                  <TechBadge key={tech} className={styles.techBadge}>
                    {tech}
                  </TechBadge>
                ))}
              </FadeIn>
            )}

            <FadeIn delay={0.26} className={styles.actions}>
              <Button to="/contact" variant="primary" icon={<ArrowRight size={17} />}>
                {service.hero?.primaryCta || 'Get Started'}
              </Button>

              <Button to="/projects" variant="outline">
                {service.hero?.secondaryCta || 'View My Work'}
              </Button>
            </FadeIn>

            <FadeIn delay={0.32} className={styles.featureRow}>
              {FEATURES.map(({ icon: FeatureIcon, title, description }, index) => (
                <div
                  className={`${styles.feature} ${
                    index !== 0 ? styles.featureWithBorder : ''
                  }`}
                  key={title}
                >
                  <span className={styles.featureIcon}>
                    <FeatureIcon size={23} strokeWidth={1.8} />
                  </span>

                  <span className={styles.featureText}>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                </div>
              ))}
            </FadeIn>
          </div>

          <div className={styles.visualSpace} aria-hidden="true">
            <div className={styles.visualGlow} />
            <div className={styles.visualHighlight} />
          </div>
        </div>
      </div>

      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}

export default memo(ServiceDetailsHero);
