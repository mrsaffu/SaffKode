/**
 * skills.data.js — interim static data source for the Skills page.
 * See portfolio.data.js for the MongoDB migration note.
 */

export const heroStats = [
  { label: 'Hands-on Experience' },
  { label: 'Always Learning' },
  { label: 'Real-World Application' },
];

export const heroQuote = 'The more you learn, the more you can create.';

export const categories = ['All Skills', 'Frontend', 'Backend', 'Database', 'Tools & Cloud', 'Other Skills'];

export const skills = [
  { name: 'JavaScript', subtitle: 'ES6+', category: 'Frontend', level: 90 },
  { name: 'React.js', subtitle: null, category: 'Frontend', level: 90 },
  { name: 'Node.js', subtitle: null, category: 'Backend', level: 85 },
  { name: 'Express.js', subtitle: null, category: 'Backend', level: 85 },
  { name: 'MongoDB', subtitle: null, category: 'Database', level: 85 },
  { name: 'TypeScript', subtitle: null, category: 'Frontend', level: 75 },
  { name: 'Redux Toolkit', subtitle: null, category: 'Frontend', level: 80 },
  { name: 'REST APIs', subtitle: null, category: 'Backend', level: 85 },
  { name: 'JWT Authentication', subtitle: null, category: 'Backend', level: 80 },
  { name: 'RBAC', subtitle: null, category: 'Backend', level: 80 },
  { name: 'HTML5', subtitle: null, category: 'Frontend', level: 90 },
  { name: 'CSS3', subtitle: null, category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', subtitle: null, category: 'Frontend', level: 85 },
  { name: 'Git & GitHub', subtitle: null, category: 'Tools & Cloud', level: 85 },
  { name: 'Docker', subtitle: null, category: 'Tools & Cloud', level: 75 },
  { name: 'AWS (EC2)', subtitle: null, category: 'Tools & Cloud', level: 70 },
  { name: 'Postman', subtitle: null, category: 'Tools & Cloud', level: 85 },
  { name: 'MySQL', subtitle: 'Basic', category: 'Database', level: 60 },
  { name: 'Python', subtitle: 'Basic', category: 'Other Skills', level: 60 },
  { name: 'Generative AI', subtitle: null, category: 'Other Skills', level: 70 },
];

export const tools = [
  'VS Code', 'Figma', 'Postman', 'Docker', 'AWS', 'MongoDB Atlas',
  'GitHub', 'Vercel', 'Notion', 'Slack', 'Trello',
];

export const softSkills = [
  'Problem Solving', 'Communication', 'Team Collaboration',
  'Time Management', 'Adaptability', 'Continuous Learning',
];

export const learningApproach = {
  items: [
    'Build real projects',
    'Learn by doing',
    'Stay updated with new technologies',
    'Apply knowledge to solve real-world problems',
  ],
  quote: 'A better Developer every day.',
};

export const footerStats = [
  { label: 'Technologies', value: '15+' },
  { label: 'Projects Built', value: '10+' },
  { label: 'Years Experience', value: '2+' },
  { label: 'Learning Mindset', value: '100%' },
];

export default {
  heroStats,
  heroQuote,
  categories,
  skills,
  tools,
  softSkills,
  learningApproach,
  footerStats,
};
