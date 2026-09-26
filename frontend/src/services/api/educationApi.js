import { apiGet } from './client';

export function getEducationOverview() {
  return apiGet('/education');
}

export default { getEducationOverview };
