import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon, XIcon, InstagramIcon } from './BrandIcons';
import IconButton from '../ui/IconButton';
import styles from './SocialLinks.module.css';

/**
 * SocialLinks — icon row used in the footer and Contact page. Real profile
 * URLs are confirmed data, not invented (per project data-quality rules).
 */
const SOCIAL_LINKS = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mrrsaffu',
    icon: LinkedinIcon,
  },
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/mrsaffu',
    icon: GithubIcon,
  },
  {
    key: 'email',
    label: 'Email',
    href: 'mailto:ahmadsafwan034.com',
    icon: Mail,
  },
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/mrr_saffu/',
    icon: InstagramIcon,
  },
];

function SocialLinks({ size = 'md', className = '' }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {SOCIAL_LINKS.map(({ key, label, href, icon: Icon }) => (
        <li key={key}>
          <IconButton
            as="a"
            href={href}
            aria-label={label}
            size={size}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          >
            <Icon size={20} />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
