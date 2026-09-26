/**
 * experience.data.js — interim static data source for the Experience page.
 * See portfolio.data.js for the MongoDB migration note.
 */

export const heroStats = [
  { label: 'Professional Experience', value: '2+', suffix: 'Years' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Teams Collaborated', value: '5+' },
  { label: 'Continuous Learning', value: '100%' },
];

export const heroQuote =
  "Every project, every challenge, and every team I've worked with has shaped me into a better developer.";

export const experience = [
  {
    id: 'conflux-business-ventures',
    company: 'Conflux Business Ventures Pvt. Ltd.',
    position: 'Web Developer (Node.js)',
    location: 'Delhi, India',
    employmentType: 'Full-time',
    startDate: '2026-03',
    endDate: null,
    current: true,
    responsibilities: [
      'Develop and maintain scalable REST APIs using Node.js, Express.js, and MongoDB.',
      'Implemented role-based access control (RBAC) and hierarchical geography (State → District → Assembly → Booth) for a Booth Management System.',
      'Built member onboarding and candidate application workflows for a membership platform.',
      'Collaborate with designers, product managers, and developers to deliver secure and high-performance applications.',
    ],
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'RBAC', 'REST APIs', 'Team Collaboration'],
  },
  {
    id: 'jspiders',
    company: 'JSpiders',
    position: 'Full-Stack Development Training',
    location: 'Delhi, India',
    employmentType: 'Training',
    startDate: '2024-07',
    endDate: '2026-03',
    current: false,
    responsibilities: [
      'Completed hands-on training in MERN stack development.',
      'Built multiple projects using React.js, Node.js, Express.js, and MongoDB.',
      'Developed REST APIs and implemented authentication.',
      'Learned best practices for clean code, reusable components, and responsive design.',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript'],
  },
  {
    id: 'goodworklabs',
    company: 'GoodWorkLabs',
    position: 'Software Developer',
    location: '(To Verify)',
    employmentType: 'Full-time',
    startDate: null,
    endDate: null,
    current: false,
    unverified: true,
    responsibilities: [
      'Worked on React.js and JavaScript applications.',
      'Focused on performance optimization and responsive interfaces.',
      'Developed reusable UI components.',
      'Contributed to building scalable and maintainable web applications.',
    ],
    technologies: ['React.js', 'JavaScript', 'Performance', 'Reusable Components', 'Responsive UI'],
  },
];

export const education = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Mahendra Institute of Technology, Tamil Nadu',
    startYear: 2020,
    endYear: 2024,
    score: 'CGPA: 8.07/10',
  },
  {
    degree: 'Intermediate (PCMB)',
    institution: 'M.B.D Inter College, Rampura, Bihar',
    score: 'Percentage: 65.4%',
  },
];

export const certifications = [
  {
    title: 'NodeJS, ExpressJS and MongoDB',
    issuer: 'Knowledge Gate',
    credentialUrl: null,
  },
  {
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM / Coursera',
    credentialUrl: null,
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM / Coursera',
    credentialUrl: null,
  },
];

export default { heroStats, heroQuote, experience, education, certifications };
