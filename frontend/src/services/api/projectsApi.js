import { apiGet } from './client';

/**
 * projectsApi — GET /api/v1/projects (with optional category/search query
 * params) and GET /api/v1/projects/:slug.
 */
export function getProjects({ category, search } = {}) {
  const params = new URLSearchParams();
  if (category && category !== 'All Projects') params.set('category', category);
  if (search) params.set('search', search);
  const query = params.toString();
  return apiGet(`/projects${query ? `?${query}` : ''}`);
}

export function getProjectBySlug(slug) {
  return apiGet(`/projects/${slug}`);
}

export default { getProjects, getProjectBySlug };
