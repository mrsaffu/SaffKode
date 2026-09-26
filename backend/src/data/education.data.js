/**
 * education.data.js — interim static data source for the standalone
 * Education page. See portfolio.data.js for the MongoDB migration note.
 *
 * No dedicated Education UI reference was provided, so this page follows
 * the established Hero + Timeline pattern from About/Experience/Projects
 * rather than inventing a new layout. Fields not verified in any
 * reference image (a separate "field of study", a written description)
 * are left null rather than fabricated — the UI hides them when absent.
 */

export const heroStats = [
  { label: 'Degrees', value: '2' },
  { label: 'CGPA', value: '8.07/10' },
  { label: 'Years of Study', value: '4+' },
];

export const education = [
  {
    id: 'be-cse',
    degree: 'B.E. Computer Science and Engineering',
    field: 'Computer Science and Engineering',
    institution: 'Mahendra Institute of Technology',
    location: 'Tamil Nadu, India',
    startYear: 2020,
    endYear: 2024,
    score: 'CGPA: 8.07/10',
    description: null,
  },
  {
    id: 'intermediate-pcmb',
    degree: 'Intermediate (PCMB)',
    field: 'Physics, Chemistry, Mathematics, Biology',
    institution: 'M.B.D Inter College',
    location: 'Rampura, Bihar, India',
    startYear: null,
    endYear: null,
    score: 'Percentage: 65.4%',
    description: null,
  },
];

export default { heroStats, education };
