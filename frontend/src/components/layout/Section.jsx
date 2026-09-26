import PageContainer from './PageContainer';
import styles from './Section.module.css';

/**
 * Section — wraps a page section with consistent vertical spacing and an
 * optional background variant (flat vs. secondary). Every top-level
 * section on every page (Hero, My Story, Featured Projects, ...) uses
 * this instead of ad-hoc <section> padding.
 */
function Section({
  children,
  background = 'base',
  spacing = 'lg',
  containerProps,
  className = '',
  id,
  ...rest
}) {
  const classes = [
    styles.section,
    styles[`background-${background}`],
    styles[`spacing-${spacing}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} className={classes} {...rest}>
      <PageContainer {...containerProps}>{children}</PageContainer>
    </section>
  );
}

export default Section;
