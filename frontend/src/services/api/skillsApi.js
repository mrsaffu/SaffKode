import { apiGet } from './client';

export function getSkillsOverview() {
  return apiGet('/skills');
}

export default { getSkillsOverview };
