/**
 * projects.data.js — interim static data source for Projects listing +
 * details. See portfolio.data.js for the MongoDB migration note.
 *
 * Only "booth-management-system" has full case-study fields (goal,
 * keyFeatures, techStackDetailed, screenshots, challenges, results) since
 * it's the only project with a detailed reference design. The other five
 * projects intentionally omit those fields rather than inventing case
 * study content — ProjectDetailsPage renders each section conditionally,
 * so a project with only listing-level facts still gets a clean detail
 * page without fabricated sections.
 *
 * `liveUrl`/`githubUrl` are left null until real deployment/repo links are
 * confirmed — buttons only render when a URL is actually present.
 */

export const projects = [
  {
    slug: 'booth-management-system',
    title: 'Booth Management System',
    category: 'Full Stack',
    eyebrow: 'Political Management Platform',
    shortDescription:
      'A political management platform with hierarchical geography, RBAC, and scalable APIs.',
    description:
      'A comprehensive political management platform with hierarchical geography, role-based access control, and scalable APIs to manage booths, members, and election workflows efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 1,

    stats: [
      { value: 'RBAC', label: 'Access Control' },
      { value: '10K+', label: 'Records Handled' },
      { value: 'Scalable', label: 'Architecture' },
    ],

    goal: 'To build a scalable, secure, and user-friendly platform that simplifies political organization management and improves ground-level coordination.',

    keyFeatures: [
      {
        title: 'Hierarchical Geography',
        description: 'State → District → Assembly → Booth',
      },
      {
        title: 'Role-Based Access Control',
        description: 'Multiple user roles and permissions',
      },
      {
        title: 'Member Management',
        description: 'Add, update, and manage members efficiently',
      },
      {
        title: 'Dynamic Assignments',
        description: 'Assign users and geography at multiple levels',
      },
      {
        title: 'Reports & Analytics',
        description: 'Real-time data and insights',
      },
      {
        title: 'Scalable APIs',
        description: 'Built to handle large datasets',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend' },
      { name: 'Node.js', role: 'Backend' },
      { name: 'Express.js', role: 'Framework' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'JWT', role: 'Authentication' },
      { name: 'RBAC', role: 'Access Control' },
      { name: 'Docker', role: 'Deployment' },
      { name: 'AWS EC2', role: 'Cloud Hosting' },
    ],

    screenshots: [
      { title: 'Dashboard', description: 'Overview and key metrics' },
      { title: 'Geography Management', description: 'Manage state, district, assembly and booths' },
      { title: 'Member Management', description: 'Add and manage members' },
      { title: 'Role & Permissions', description: 'Control access with different roles' },
    ],

    challenges: [
      'Handling large hierarchical data with performance in mind.',
      'Implementing flexible role-based access control.',
      'Designing scalable APIs for real-world usage.',
      'Learned best practices in database design, API security, and system scalability.',
    ],

    results: [
      '10K+ data records handled efficiently.',
      'Improved ground-level coordination.',
      'Secure and scalable architecture.',
      'Positive feedback from users and stakeholders.',
    ],
  },
  {
    slug: 'al-qalam-academy',
    title: 'Al-Qalam Academy',
    category: 'Web Applications',
    eyebrow: 'School Management Platform',
    shortDescription:
      'School management web app with 6+ academic modules and a responsive UI.',
    description:
      'A school management web application with 6+ academic modules and a fully responsive UI, built to streamline day-to-day academic administration.',
    technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
    featured: false,
    liveUrl: null,
    githubUrl: null,
    order: 2,
  },
  {
    slug: 'bus-booking-system-api',
    title: 'Bus Booking System API',
    category: 'APIs & Backend',
    eyebrow: 'Booking Platform API',
    shortDescription:
      'Complete booking system with JWT auth, admin APIs, and Docker deployment.',
    description:
      'A complete bus booking system API with JWT-based authentication, admin management APIs, and Docker-based deployment.',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Docker'],
    featured: false,
    liveUrl: null,
    githubUrl: null,
    order: 3,
  },
  {
    slug: 'membership-platform',
    title: 'Membership Platform',
    category: 'Full Stack',
    eyebrow: 'Membership & Onboarding',
    shortDescription:
      'Member onboarding and candidate application workflows with secure access control.',
    description:
      'A membership platform handling member onboarding and candidate application workflows with secure, role-based access control.',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT'],
    featured: false,
    liveUrl: null,
    githubUrl: null,
    order: 4,
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Personal',
    eyebrow: 'Personal Project',
    shortDescription: 'A modern, animated portfolio to showcase my work and skills.',
    description:
      'A modern, animated personal portfolio website built to showcase projects, skills, and experience.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    featured: false,
    liveUrl: null,
    githubUrl: null,
    order: 5,
  },
  {
    slug: 'rest-api-bus-booking',
    title: 'REST API (Bus Booking)',
    category: 'APIs & Backend',
    eyebrow: 'Backend API',
    shortDescription:
      'Well-documented REST APIs with Postman collection and deployment.',
    description:
      'A well-documented set of REST APIs for a bus booking system, complete with a Postman collection and production deployment on AWS EC2.',
    technologies: ['Node.js', 'Express.js', 'JWT', 'AWS EC2'],
    featured: false,
    liveUrl: null,
    githubUrl: null,
    order: 6,
  },
];

export const projectFilters = ['All Projects', 'Web Applications', 'APIs & Backend', 'Full Stack', 'Personal'];

export const projectStats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Hands-on Development', value: '100%' },
  { label: 'Problem Solving', value: 'Real-world' },
];

export const developmentProcess = [
  { step: 1, title: 'Understand', description: 'Analyze requirements and define goals' },
  { step: 2, title: 'Plan', description: 'Design architecture and tech stack' },
  { step: 3, title: 'Build', description: 'Write clean, scalable and maintainable code' },
  { step: 4, title: 'Test', description: 'Ensure quality, security and performance' },
  { step: 5, title: 'Deploy', description: 'Launch and monitor for continuous improvement' },
];

export const technologiesUsed = [
  'React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript',
  'JavaScript', 'Tailwind CSS', 'Docker', 'AWS', 'Git', 'GitHub', 'Postman',
];

export default {
  projects,
  projectFilters,
  projectStats,
  developmentProcess,
  technologiesUsed,
};
