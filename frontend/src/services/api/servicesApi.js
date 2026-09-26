import { apiGet } from './client';

export function getServices() {
  return apiGet('/services');
}

export function getServiceBySlug(slug) {
  return apiGet(`/services/${slug}`);
}

export default { getServices, getServiceBySlug };
