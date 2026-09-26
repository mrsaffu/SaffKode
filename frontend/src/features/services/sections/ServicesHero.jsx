import { ShieldCheck, Zap, Users } from 'lucide-react';
import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './ServicesHero.module.css';

const FEATURES = [
  { icon: ShieldCheck, label: 'Reliable & Secure Solutions' },
  { icon: Zap, label: 'Scalable & Maintainable Code' },
  { icon: Users, label: 'Client-Focused Approach' },
];

function ServicesHero() {
  return (
    <section className={styles.hero} aria-labelledby="services-hero-title">
      <div className={styles.background} aria-hidden="true" />

      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>Services</span>
            </div>
          </FadeIn>

          <SlideUp
            as="h1"
            delay={0.05}
            className={styles.headline}
            id="services-hero-title"
          >
            Turning Ideas Into
            <span className={styles.highlight}>Digital Solutions</span>
          </SlideUp>

          <SlideUp as="p" delay={0.1} className={styles.subhead}>
         I help individuals, startups, and businesses turn their ideas into modern, scalable, and user-friendly web applications. From planning and design to development, optimization, and deployment, I provide end-to-end solutions tailored to your goals. My focus is on building fast, reliable, and engaging digital experiences that are easy to use, maintain, and grow with your business.

          </SlideUp>

          <Stagger className={styles.featureRow}>
            {FEATURES.map(({ icon: Icon, label }) => (
              <StaggerItem key={label}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>
                    <Icon size={25} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <span>{label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
