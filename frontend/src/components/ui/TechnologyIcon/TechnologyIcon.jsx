import { memo } from 'react';
import { Code2, Database, Server, Wrench, Package } from 'lucide-react';

import styles from './TechnologyIcon.module.css';

const ICONS = {
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  'React.js': 'https://cdn.simpleicons.org/react/61DAFB',
  'React Router': 'https://cdn.simpleicons.org/reactrouter/CA4245',
  HTML5: 'https://cdn.simpleicons.org/html5/E34F26',
  CSS3: 'https://cdn.simpleicons.org/css3/1572B6',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  'Redux Toolkit': 'https://cdn.simpleicons.org/redux/764ABC',
  Axios: 'https://cdn.simpleicons.org/axios/5A29E4',
  TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
  Vite: 'https://cdn.simpleicons.org/vite/646CFF',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/339933',

  // Explicit white color so Express is visible and matches
  // the dark technology-card design.
  'Express.js': 'https://cdn.simpleicons.org/express/FFFFFF',

  'JWT Authentication': 'https://cdn.simpleicons.org/jsonwebtokens/D63AFF',

  Mongoose: 'https://cdn.simpleicons.org/mongoose/880000',
  'Socket.IO': 'https://cdn.simpleicons.org/socketdotio/FFFFFF',
  MongoDB: 'https://cdn.simpleicons.org/mongodb/47A248',
  'MongoDB Atlas': 'https://cdn.simpleicons.org/mongodb/47A248',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479A1',
  PostgreSQL: 'https://cdn.simpleicons.org/postgresql/4169E1',
  Redis: 'https://cdn.simpleicons.org/redis/DC382D',
  Git: 'https://cdn.simpleicons.org/git/F05032',
  GitHub: 'https://cdn.simpleicons.org/github/FFFFFF',
  Docker: 'https://cdn.simpleicons.org/docker/2496ED',
  AWS: 'https://cdn.simpleicons.org/amazonwebservices/FF9900',
  'AWS EC2': 'https://cdn.simpleicons.org/amazonec2/FF9900',
  Vercel: 'https://cdn.simpleicons.org/vercel/FFFFFF',
  Postman: 'https://cdn.simpleicons.org/postman/FF6C37',
  'VS Code': 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
  npm: 'https://cdn.simpleicons.org/npm/CB3837',
  Yarn: 'https://cdn.simpleicons.org/yarn/2C8EBB',
  GitLab: 'https://cdn.simpleicons.org/gitlab/FC6D26',
  Bitbucket: 'https://cdn.simpleicons.org/bitbucket/2684FF',
  Figma: 'https://cdn.simpleicons.org/figma/F24E1E',
  Linux: 'https://cdn.simpleicons.org/linux/FCC624',
  Nginx: 'https://cdn.simpleicons.org/nginx/009639',
  Firebase: 'https://cdn.simpleicons.org/firebase/FFCA28',
  Netlify: 'https://cdn.simpleicons.org/netlify/00C7B7',
};

const ALIASES = {
  React: 'React.js',
  'React JS': 'React.js',
  ReactJS: 'React.js',
  'React.js': 'React.js',

  'Node JS': 'Node.js',
  NodeJS: 'Node.js',
  Node: 'Node.js',

  'Express JS': 'Express.js',
  Express: 'Express.js',
  ExpressJS: 'Express.js',

  Mongo: 'MongoDB',
  MongoDBJS: 'MongoDB',

  MongooseJS: 'Mongoose',

  JS: 'JavaScript',
  TS: 'TypeScript',

  VSCode: 'VS Code',
  'Visual Studio Code': 'VS Code',

  EC2: 'AWS EC2',
  'Amazon EC2': 'AWS EC2',
  'AWS (EC2)': 'AWS EC2',
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
  'Express.js': '#FFFFFF',
  'JWT Authentication': '#D63AFF',
  Mongoose: '#880000',
  'Socket.IO': '#FFFFFF',
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

  const value = String(name).trim();

  return ALIASES[value] || value;
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

  const FallbackIcon = FALLBACK_ICONS[category] || Package;

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
