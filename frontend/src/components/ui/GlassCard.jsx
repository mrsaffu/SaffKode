import styles from './GlassCard.module.css';

/**
 * GlassCard — translucent, blurred-backdrop card used over imagery (e.g.
 * the quote card layered on the About hero photo). Distinct from Card
 * because it needs backdrop-filter and sits on non-flat backgrounds.
 */
function GlassCard({ children, padding = 'md', className = '', ...rest }) {
  const classes = [styles.glassCard, styles[`padding-${padding}`], className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default GlassCard;
