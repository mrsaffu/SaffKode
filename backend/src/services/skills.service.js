import * as skillsData from '../data/skills.data.js';

/**
 * skills.service.js — assembles the Skills page payload. Category
 * filtering is left to the frontend (the full skill set is small enough
 * that client-side filtering avoids a re-fetch per pill click), so this
 * always returns the complete set plus the category list.
 */
export function getSkillsOverview() {
  return {
    heroStats: skillsData.heroStats,
    heroQuote: skillsData.heroQuote,
    categories: skillsData.categories,
    skills: skillsData.skills,
    tools: skillsData.tools,
    softSkills: skillsData.softSkills,
    learningApproach: skillsData.learningApproach,
    footerStats: skillsData.footerStats,
  };
}

export default { getSkillsOverview };
