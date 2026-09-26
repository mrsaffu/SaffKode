import styles from './Card.module.css';

/**
 * Card — base surface component. All feature-specific cards (ProjectCard,
 * ServiceCard, SkillCard, BlogCard...) compose this instead of redefining
 * their own surface/border/radius/shadow.
 */
function Card({
  children,
  as: Component = 'div',
  hoverable = false,
  padding = 'md',
  className = '',
  ...rest
}) {
  const classes = [
    styles.card,
    hoverable ? styles.hoverable : '',
    styles[`padding-${padding}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
}

export default Card;
