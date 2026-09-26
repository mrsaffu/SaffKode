import styles from './PageContainer.module.css';

/**
 * PageContainer — constrains content to --container-max-width and applies
 * responsive inline padding. Every page/section content block sits inside
 * one of these rather than repeating max-width/padding CSS.
 */
function PageContainer({ children, as: Component = 'div', className = '', ...rest }) {
  return (
    <Component className={`${styles.container} ${className}`} {...rest}>
      {children}
    </Component>
  );
}

export default PageContainer;
