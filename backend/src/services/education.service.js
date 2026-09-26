import * as educationData from '../data/education.data.js';

export function getEducationOverview() {
  return {
    heroStats: educationData.heroStats,
    education: educationData.education,
  };
}

export default { getEducationOverview };
