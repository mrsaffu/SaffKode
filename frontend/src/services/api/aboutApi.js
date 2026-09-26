import { apiGet } from './client';

export function getAboutPage() {
  return apiGet('/about');
}

export default { getAboutPage };
