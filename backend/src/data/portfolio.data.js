/**
 * portfolio.data.js — interim static data source for GET /api/v1/portfolio.
 *
 * Phase 5 only needs the Home page's optimized payload; the full Mongoose
 * models for About/Services/Projects/etc. are built incrementally as each
 * of those features' own phase (6 through 14) lands. Until then, this file
 * is the single source of truth so Home has real, verified content instead
 * of invented facts — every value here is taken directly from the
 * approved reference designs, never fabricated.
 *
 * When a feature's model ships in its own phase, its slice of this file is
 * deleted and the portfolio controller instead aggregates data from that
 * feature's service layer.
 */

export const aboutSummary = {
  name: 'Safwan Ahmad',
  title: 'Full-Stack Developer',
  location: 'Delhi, India',
  summary:
    "I'm Safwan Ahmad, a Full-Stack Developer who loves turning ideas into real-world digital products. I build scalable, secure, and user-friendly web applications using the MERN stack.",
  strengths: [
    {
      title: 'Problem Solver',
      description: 'I enjoy breaking down complex problems into simple solutions.',
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving my skills.',
    },
    {
      title: 'Team Player',
      description: 'I believe great products are built through collaboration.',
    },
    {
      title: 'Real-World Focus',
      description: 'I build practical solutions that create real impact.',
    },
  ],
};

export const heroStats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Dedication', value: '100%' },
];

export const featuredSkills = [
  // Frontend
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'React.js',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    level: 85,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 85,
  },
  {
    name: 'React Router',
    category: 'Frontend',
    level: 85,
  },
  {
    name: 'Redux Toolkit',
    category: 'Frontend',
    level: 80,
  },
  {
    name: 'Context API',
    category: 'Frontend',
    level: 85,
  },
  {
    name: 'Responsive Design',
    category: 'Frontend',
    level: 90,
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'REST APIs',
    category: 'Backend',
    level: 90,
  },
  {
    name: 'JWT Authentication',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'RBAC',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'Mongoose',
    category: 'Backend',
    level: 85,
  },
  {
    name: 'API Architecture',
    category: 'Backend',
    level: 80,
  },

  // Database
  {
    name: 'MongoDB',
    category: 'Database',
    level: 85,
  },
  {
    name: 'MongoDB Atlas',
    category: 'Database',
    level: 85,
  },
  {
    name: 'MySQL',
    category: 'Database',
    level: 55,
  },
  {
    name: 'Database Design',
    category: 'Database',
    level: 80,
  },

  // DevOps & Cloud
  {
    name: 'Docker',
    category: 'Tools & Cloud',
    level: 75,
  },
  {
    name: 'AWS EC2',
    category: 'Tools & Cloud',
    level: 70,
  },
  {
    name: 'Vercel',
    category: 'Tools & Cloud',
    level: 75,
  },
  {
    name: 'Git',
    category: 'Tools & Cloud',
    level: 85,
  },
  {
    name: 'GitHub',
    category: 'Tools & Cloud',
    level: 85,
  },

  // Development Tools
  {
    name: 'Postman',
    category: 'Tools',
    level: 85,
  },
  {
    name: 'Vite',
    category: 'Tools',
    level: 80,
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 90,
  },

  // Additional / Growing Skills
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 70,
  },
  {
    name: 'Axios',
    category: 'Frontend',
    level: 75,
  },
  {
    name: 'Socket.IO',
    category: 'Backend',
    level: 65,
  },
];

export const featuredServices = [
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    description:
      'End-to-end web applications using the MERN stack with modern UI/UX and best practices.',
    technologies: ['React.js', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'backend-api-development',
    title: 'Backend API Development',
    description:
      'Scalable and secure REST APIs using Node.js and Express.js with authentication, authorization, and database design.',
    technologies: ['Node.js', 'Express.js', 'MongoDB'],
  },
  {
    slug: 'database-design-optimization',
    title: 'Database Design & Optimization',
    description:
      'Well-structured database design, query optimization, and scalable data handling for large applications.',
    technologies: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    slug: 'consultation-technical-guidance',
    title: 'Consultation & Technical Guidance',
    description:
      'Expert advice on technology stack, project architecture, and product development strategy.',
    technologies: ['Architecture', 'Tech Stack', 'Planning'],
  },
];

export const featuredProjects = [
  {
    slug: 'booth-management-system',
    title: 'Booth Management System',
    category: 'Full Stack',
    shortDescription:
      'A political management platform with hierarchical geography, role-based access control, and scalable APIs.',
    technologies: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    featured: true,
    image:"https://5.imimg.com/data5/FC/UV/OJ/SELLER-11762657/electomaze-shakti-v3-0-polling-booth-management-system.png"
  },
  {
    slug: 'al-qalam-academy',
    title: 'Al-Qalam Academy',
    category: 'Web Application',
    shortDescription:
      'School management web app with 6+ academic modules and a responsive UI.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    featured: false,
    image:"https://cdn.dribbble.com/userupload/46146780/file/eb5720dab5de37a0cc59b47ea34eca67.png"
  },
  {
    slug: 'bus-booking-system-api',
    title: 'Bus Booking System API',
    category: 'APIs & Backend',
    shortDescription:
      'Complete booking system with JWT auth, admin APIs, and Docker deployment.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Docker'],
    featured: false,
    image:"https://bos.center/assets/bus-booking/bus-api-og.jpg"
  },
];

export const experiencePreview = [
  {
    company: 'Conflux Business Ventures Pvt. Ltd.',
    position: 'Web Developer (Node.js)',
    location: 'Delhi, India',
    startDate: '2026-03',
    endDate: null,
    current: true,
    description: 'Working with Node.js, Express.js, MongoDB, RBAC, and REST APIs to develop and maintain modern web applications.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'RBAC', 'REST APIs'],
  },
  {
    company: 'JSpiders',
    position: 'Full-Stack Development Training',
    location: 'Delhi, India',
    startDate: '2024-07',
    endDate: '2026-03',
    current: false,
    description: 'Hands-on full-stack development training focused on React.js, Node.js, Express.js, MongoDB, REST APIs, and building real-world applications.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
  },
];

export const educationPreview = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Mahendra Institute of Technology, Tamil Nadu',
    startYear: 2020,
    endYear: 2024,
    score: 'CGPA 8.07/10',
  },

  {
    degree: 'Higher Secondary Education (12th), PCMB', institution: 'M.B.D Inter College, Rampura, Bihar', startYear: 2017,
    endYear: 2019,
    score: '65.4%',
  },

  { degree: 'Secondary Education (10th), CBSE', institution: 'Al-Qalam Academy', startYear: 2016, endYear: 2017, score: '90%+', },
];

export const certificationsPreview = [
  {
    title: 'NodeJS, ExpressJS and MongoDB',
    issuer: 'Knowledge Gate',
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM / Coursera',
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM / Coursera',
  },
];

export const blogPreview = [
  {
    slug: 'complete-mern-stack-guide-for-beginners-2026',
    title: 'How I Improved My Productivity as a Developer',
    excerpt:
      'A practical look at the habits, tools, and workflow improvements that helped me become more productive as a developer.',
    category: 'Web Development',
    publishedAt: '2026-09-10',
    readingTime: 5,
    image: 'https://jessup.edu/wp-content/uploads/2023/12/How-to-Become-a-Web-Developer.jpg',
  },
  {
    slug: 'building-scalable-rest-apis-with-nodejs-and-expressjs',
    title: 'MERN Stack Best Practices for Scalable Apps',
    excerpt:
      'Practical architecture and development practices for building scalable MERN applications.',
    category: 'Backend',
    publishedAt: '2026-08-28',
    readingTime: 7,
    image: 'https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp',
  },
  {
    slug: 'react-performance-optimization-tips',
    title: 'The Role of AI in Modern Web Development',
    excerpt:
      'Exploring how AI is changing the way modern web applications are designed and developed.',
    category: 'Frontend',
    publishedAt: '2026-08-15',
    readingTime: 6,
    image: 'https://cdn.prakashinfotech.com/wp-content/uploads/2025/01/ai-in-web-development-application.jpg',
  },
];
export default {
  aboutSummary,
  heroStats,
  featuredSkills,
  featuredServices,
  featuredProjects,
  experiencePreview,
  educationPreview,
  certificationsPreview,
  blogPreview,
};
