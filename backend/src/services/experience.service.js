import * as experienceData from '../data/experience.data.js';

/**
 * experience.service.js — assembles the Experience page payload.
 */
export function getExperienceOverview() {
  return {
    heroStats: experienceData.heroStats,
    heroQuote: experienceData.heroQuote,
    experience: experienceData.experience,
    education: experienceData.education,
    certifications: experienceData.certifications,
  };
}

export default { getExperienceOverview };
