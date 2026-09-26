import { memo } from 'react';
import {
  Code2,
  Database,
  Server,
  Wrench,
  Package,
} from 'lucide-react';

import styles from './TechnologyIcon.module.css';

const ICONS = {
  JavaScript: 'https://cdn.simpleicons.org/javascript',
  'React.js': 'https://cdn.simpleicons.org/react',
  'React Router': 'https://cdn.simpleicons.org/reactrouter',
  HTML5: 'https://cdn.simpleicons.org/html5',
  CSS3: 'https://cdn.simpleicons.org/css3',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss',
  'Redux Toolkit': 'https://cdn.simpleicons.org/redux',
  Axios: 'https://cdn.simpleicons.org/axios',
  TypeScript: 'https://cdn.simpleicons.org/typescript',
  Vite: 'https://cdn.simpleicons.org/vite',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs',
  'Express.js': 'https://cdn.simpleicons.org/express',
  'JWT Authentication': 'https://cdn.simpleicons.org/jsonwebtokens',
  Mongoose: 'https://cdn.simpleicons.org/mongoose',
  'Socket.IO': 'https://cdn.simpleicons.org/socketdotio',
  MongoDB: 'https://cdn.simpleicons.org/mongodb',
  'MongoDB Atlas': 'https://cdn.simpleicons.org/mongodb',
  MySQL: 'https://cdn.simpleicons.org/mysql',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql',
  Redis: 'https://cdn.simpleicons.org/redis',
  Git: 'https://cdn.simpleicons.org/git',
  GitHub: 'https://cdn.simpleicons.org/github',
  Docker: 'https://cdn.simpleicons.org/docker',
  AWS: 'https://cdn.simpleicons.org/amazonwebservices',
  Vercel: 'https://cdn.simpleicons.org/vercel',
  Postman: 'https://cdn.simpleicons.org/postman',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode',
  npm: 'https://cdn.simpleicons.org/npm',
  Yarn: 'https://cdn.simpleicons.org/yarn',
  GitLab: 'https://cdn.simpleicons.org/gitlab',
  Bitbucket: 'https://cdn.simpleicons.org/bitbucket',
  Figma: 'https://cdn.simpleicons.org/figma',
  Linux: 'https://cdn.simpleicons.org/linux',
  Nginx: 'https://cdn.simpleicons.org/nginx',
  Firebase: 'https://cdn.simpleicons.org/firebase',
  Netlify: 'https://cdn.simpleicons.org/netlify',
};

const ALIASES = {
  'AWS (EC2)': 'AWS EC2',
  EC2: 'AWS EC2',
  'Amazon EC2': 'AWS EC2',
  'VSCode': 'VS Code',
  'Visual Studio Code': 'VS Code',
  'Express JS': 'Express.js',
  Express: 'Express.js',
  MongooseJS: 'Mongoose',
  Mongo: 'MongoDB',
};

const BRAND_COLORS = {
  JavaScript: '#F7DF1E',
  'React.js': '#61DAFB',
  'React Router': '#CA4245',
  HTML5: '#E34F26',
  CSS3: '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'Redux Toolkit': '#764ABC',
  Axios: '#5A29E4',
  TypeScript: '#3178C6',
  Vite: '#646CFF',
  'Node.js': '#339933',
  'Express.js': '#000000',
  'JWT Authentication': '#D63AFF',
  Mongoose: '#880000',
  'Socket.IO': '#010101',
  MongoDB: '#47A248',
  'MongoDB Atlas': '#47A248',
  MySQL: '#4479A1',
  PostgreSQL: '#4169E1',
  Redis: '#DC382D',
  Git: '#F05032',
  GitHub: '#FFFFFF',
  Docker: '#2496ED',
  AWS: '#FF9900',
  'AWS EC2': '#FF9900',
  Vercel: '#FFFFFF',
  Postman: '#FF6C37',
  'VS Code': '#007ACC',
  npm: '#CB3837',
  Yarn: '#2C8EBB',
  GitLab: '#FC6D26',
  Bitbucket: '#2684FF',
  Figma: '#F24E1E',
  Linux: '#FCC624',
  Nginx: '#009639',
  Firebase: '#FFCA28',
  Netlify: '#00C7B7',
};

const FALLBACK_ICONS = {
  Frontend: Code2,
  Backend: Server,
  Database,
  'Tools & Cloud': Wrench,
  Other: Package,
};

function normalizeName(name) {
  if (!name) return '';

  const trimmedName = name.trim();

  return ALIASES[trimmedName] || trimmedName;
}

function TechnologyIcon({
  name,
  category,
  size = 'md',
  className = '',
  showFallback = true,
  title,
}) {
  const normalizedName = normalizeName(name);
  const iconSource = ICONS[normalizedName];
  const brandColor = BRAND_COLORS[normalizedName];

  const FallbackIcon =
    FALLBACK_ICONS[category] || Package;

  if (!iconSource) {
    if (!showFallback) return null;

    return (
      <FallbackIcon
        className={`${styles.icon} ${styles[size]} ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <img
      src={iconSource}
      alt={title || normalizedName}
      className={`${styles.icon} ${styles[size]} ${className}`}
      style={{
        '--technology-color': brandColor || 'currentColor',
      }}
      width="50"
      height="50"
      loading="lazy"
      decoding="async"
      draggable="false"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export default memo(TechnologyIcon);