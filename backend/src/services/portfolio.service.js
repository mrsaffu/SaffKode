import * as portfolioData from '../data/portfolio.data.js';

/**
 * portfolio.service.js — assembles the optimized homepage payload.
 *
 * Today this simply reads the interim static data source. Once About,
 * Services, Projects, Experience, Education, Certifications, and Blog
 * each get their own Mongoose model (their respective phases), this
 * service is updated to query each one directly instead — the controller
 * and route contract stay identical either way.
 */
export function getPortfolioOverview() {
  return {
    about: portfolioData.aboutSummary,
    heroStats: portfolioData.heroStats,
    skills: portfolioData.featuredSkills,
    services: portfolioData.featuredServices,
    projects: portfolioData.featuredProjects,
    experience: portfolioData.experiencePreview,
    education: portfolioData.educationPreview,
    certifications: portfolioData.certificationsPreview,
    blog: portfolioData.blogPreview,
  };
}

export default { getPortfolioOverview };
