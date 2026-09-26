import { ArrowRight } from 'lucide-react';
import Section from '../../../components/layout/Section';
import SectionHeading from '../../../components/layout/SectionHeading';
import { ProjectCard } from '../../../components/common';
import { Stagger, StaggerItem } from '../../../components/animation';
import styles from './FeaturedProjects.module.css';

function FeaturedProjects({ projects = [] }) {
  if (projects.length === 0) return null;

  return (
    <Section background="secondary">
      <div className={styles.section}>
        <div className={styles.ambientGlow} aria-hidden="true" />
        <div className={styles.decorativeGlow} aria-hidden="true" />

        <div className={styles.header}>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Some of My"
            highlight="Best Work"
            variant="projects"
          />

          <a
            href="/projects"
            className={styles.viewAll}
            aria-label="View all projects"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>

        <Stagger className={styles.grid}>
          {projects.slice(0, 3).map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} variant="featured" />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

export default FeaturedProjects;