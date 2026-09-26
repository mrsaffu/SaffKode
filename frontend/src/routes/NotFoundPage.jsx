import { Compass } from 'lucide-react';
import Button from '../components/ui/Button';
import PageContainer from '../components/layout/PageContainer';
import SlideUp from '../components/animation/SlideUp';
import styles from './NotFoundPage.module.css';

/**
 * NotFoundPage — rendered for any unmatched route (the `*` route in
 * routes/AppRoutes.jsx). Offers a way back rather than a dead end.
 */
function NotFoundPage() {
  return (
    <PageContainer as="main" className={styles.wrapper}>
      <SlideUp className={styles.content}>
        <span className={styles.iconWrapper} aria-hidden="true">
          <Compass size={32} />
        </span>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>This page doesn&apos;t exist</h1>
        <p className={styles.message}>
          The page you&apos;re looking for may have been moved or never
          existed. Let&apos;s get you back on track.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </SlideUp>
    </PageContainer>
  );
}

export default NotFoundPage;
