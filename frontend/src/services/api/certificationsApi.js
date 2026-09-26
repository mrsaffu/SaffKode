import { apiGet } from './client';

export function getCertificationsOverview() {
  return apiGet('/certifications');
}

export default { getCertificationsOverview };
