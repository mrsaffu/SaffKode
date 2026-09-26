/**
 * about.data.js — interim static data source for GET /api/v1/about.
 * Same rationale as portfolio.data.js: real, verified content only,
 * replaced by a Mongoose-backed model once persistence is introduced.
 */

export const profile = {
  name: 'Safwan Ahmad',
  title: 'Full-Stack Developer',
  location: 'Delhi, India',
  tagline: 'More Than Just Code',

  intro:
    "I'm Safwan Ahmad, a Full-Stack Developer who loves turning ideas into real-world digital products.",

  summary:
    'I build scalable, secure, and user-friendly web applications using the MERN stack. I enjoy solving complex problems, learning new technologies, and collaborating with amazing people to create meaningful solutions that make an impact.',

  // image: 'http://localhost:5000/images/safwan-about.webp',

  quote: 'Turning ideas into real-world solutions.',

  resumeUrl: '/resume.pdf',

  stats: [
    { label: 'Based In', value: 'Delhi, India' },
    { label: 'Experience', value: '2+ Years' },
    { label: 'Education', value: 'B.E. CSE' },
    { label: 'Passion', value: '100%' },
  ],
};


export const story = {
  eyebrow: 'My Journey',

  title: 'From Curiosity',

  highlight: 'to Creating Solutions',

  paragraphs: [
    "I'm Safwan Ahmad, a Full-Stack Developer based in Delhi, India. My journey into technology started with curiosity and a desire to turn ideas into useful solutions. I completed my B.E. in Computer Science from Mahendra Institute of Technology, Tamil Nadu, in 2024 with a CGPA of 8.07/10.",

    "That curiosity grew into a passion for building software. I've worked across frontend and backend development, creating responsive interfaces, REST APIs, database-driven applications, and authentication systems using React.js, Node.js, Express.js, and MongoDB.",

    "Today, I work as a Web Developer (Node.js) at Conflux Business Ventures Pvt. Ltd., building scalable APIs, implementing role-based access control, and turning requirements into reliable applications.",

    "For me, development is about more than writing code — it's about understanding the problem, keeping things simple, and creating something that delivers real value."
  ],



  pullQuote:
    "I believe great software starts with understanding the problem and ends with creating something people can truly rely on."
};


export const values = [
  {
    title: 'Solve Real Problems',
    description: 'I enjoy understanding real-world challenges and building practical solutions.',
  },
  {
    title: 'Collaborate & Learn',
    description: 'I believe great products come from great teamwork and continuous learning.',
  },
  {
    title: 'Build for Impact',
    description: 'I aim to create scalable and maintainable solutions that make a difference.',
  },
  {
    title: 'Stay Curious',
    description: "I'm always eager to explore new technologies and improve my skills.",
  },
];

export const interests = [
  'Photography',
  'Reading',
  'Traveling',
  'Gaming',
  'Music',
  'Cycling',
];

/**
 * journey — unified timeline combining education and experience milestones,
 * ordered most-recent-first, matching the "My Professional Journey" strip
 * on the About reference page.
 */
export const journey = [


  {
    date: '2016 – 2017',
    type: 'education',
    title: 'Secondary School (10th)',
    subtitle: 'Al-Qalam Academy, CBSE',
    description: 'Secondary School Education',
    current: false,
  },
  {
    date: '2017 – 2019',
    type: 'education',
    title: 'Higher Secondary (12th)',
    subtitle: 'Al-Qalam Academy, CBSE',
    description: 'Higher Secondary Education',
    current: false,
  },

  {
    date: '2020 – 2024',
    type: 'education',
    title: 'B.E. Computer Science',
    subtitle: 'Mahendra Institute of Technology, Tamil Nadu',
    description: 'CGPA: 8.07/10',
    current: false,
  },
  {
    date: 'Jun 2024 – Dec 2025',
    type: 'training',
    title: 'Full-Stack Development Training',
    subtitle: 'JSpiders',
    description: 'MERN stack, project development, hands-on training.',
    current: false,
  },

  {
    date: 'Jan 2025 - jan 2026',
    type: 'experience',
    title: 'Software Developer',
    subtitle: 'GoodWorkLabs',
    description: 'React.js, JavaScript, performance optimization, reusable components.',
    current: false,
    unverified: false,
  },
  {
    date: 'Mar 202 – Present',
    type: 'experience',
    title: 'Web Developer (Node.js)',
    subtitle: 'Conflux Business Ventures Pvt. Ltd.',
    description: 'Scalable APIs, RBAC, team collaboration, real-world products.',
    current: true,
  },
];

export const certificationsPreview = [
  { title: 'NodeJS, ExpressJS and MongoDB', issuer: 'Knowledge Gate' },
  { title: 'Generative AI: Introduction and Applications', issuer: 'IBM / Coursera' },
  { title: 'Machine Learning with Python', issuer: 'IBM / Coursera' },
];

export const educationDetail = {
  degree: 'Intermediate (PCMB)',
  institution: 'M.B.D Inter College, Rampura, Bihar',
  percentage: '65.4%',
};

export default {
  profile,
  story,
  values,
  interests,
  journey,
  certificationsPreview,
  educationDetail,
};
