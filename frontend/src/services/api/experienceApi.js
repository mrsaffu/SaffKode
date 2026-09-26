import { apiGet } from './client';

export function getExperienceOverview() {
  return apiGet('/experience');
}

export default { getExperienceOverview };
