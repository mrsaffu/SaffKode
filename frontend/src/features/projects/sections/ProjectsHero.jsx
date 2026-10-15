import { SlideUp, FadeIn, Stagger, StaggerItem } from '../../../components/animation';
import styles from './ProjectsHero.module.css';

function ProjectsHero({ stats = [] }) {
  return (
    <section className={styles.hero} aria-labelledby="projects-hero-title">
      <div className={styles.background} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              <span>My Projects</span>
            </div>
          </FadeIn>

          <SlideUp
            as="h1"
            delay={0.05}
            className={styles.headline}
            id="projects-hero-title"
          >
            Real Projects
            <span className={styles.highlight}>Real Impact</span>
          </SlideUp>

          <SlideUp
            as="p"
            delay={0.1}
            className={styles.subhead}
          >
            Here are some of the projects I&apos;ve built — each one designed
            to solve real-world problems with clean code, modern technologies,
            and a focus on usability and scalability.
          </SlideUp>

          {stats.length > 0 && (
            <Stagger className={styles.statRow}>
              {stats.slice(0, 3).map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className={styles.stat}>
                    {stat.icon && (
                      <div className={styles.statIcon}>
                        {stat.icon}
                      </div>
                    )}

                    <div className={styles.statContent}>
                      <span className={styles.statValue}>
                        {stat.value}
                      </span>

                      <span className={styles.statLabel}>
                        {stat.label}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;