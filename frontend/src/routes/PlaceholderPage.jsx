import PageContainer from '../components/layout/PageContainer';
import SlideUp from '../components/animation/SlideUp';
import Badge from '../components/ui/Badge';
import styles from './PlaceholderPage.module.css';

/**
 * PlaceholderPage — temporary stand-in for routes whose feature phase
 * hasn't been implemented yet (About, Services, Projects, etc. each land
 * in their own phase per the roadmap). Replaced route-by-route as each
 * phase ships; not meant to reach production.
 */
function PlaceholderPage({ title }) {
  return (
    <PageContainer as="main" className={styles.wrapper}>
      <SlideUp className={styles.content}>
        <Badge variant="outline">Coming soon</Badge>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>
          This section is being built in an upcoming phase.
        </p>
      </SlideUp>
    </PageContainer>
  );
}

export default PlaceholderPage;
