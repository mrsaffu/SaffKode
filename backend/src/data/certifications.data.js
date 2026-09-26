/**
 * certifications.data.js — interim static data source for the standalone
 * Certifications page. See portfolio.data.js for the MongoDB migration
 * note.
 *
 * Only title and issuer are verified from the reference designs. Issue
 * dates, categories, descriptions, and credential URLs were never shown
 * in any reference image, so they're left null rather than invented —
 * the UI hides each field when absent instead of fabricating a value.
 */

export const heroStats = [
  { label: 'Certifications', value: '3' },
  { label: 'Platforms', value: '2' },
];

export const certifications = [
  {
    id: 'nodejs-expressjs-mongodb',
    title: 'NodeJS, ExpressJS and MongoDB',
    issuer: 'Knowledge Gate',
    category: null,
    issuedDate: null,
    credentialUrl: null,
    description: null,
  },
  {
    id: 'generative-ai-intro',
    title: 'Generative AI: Introduction and Applications',
    issuer: 'IBM / Coursera',
    category: null,
    issuedDate: null,
    credentialUrl: null,
    description: null,
  },
  {
    id: 'machine-learning-python',
    title: 'Machine Learning with Python',
    issuer: 'IBM / Coursera',
    category: null,
    issuedDate: null,
    credentialUrl: null,
    description: null,
  },
];

export default { heroStats, certifications };
