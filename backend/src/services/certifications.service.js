import * as certificationsData from '../data/certifications.data.js';

export function getCertificationsOverview() {
  return {
    heroStats: certificationsData.heroStats,
    certifications: certificationsData.certifications,
  };
}

export default { getCertificationsOverview };
