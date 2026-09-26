import { projects, projectFilters, projectStats, developmentProcess, technologiesUsed } from '../data/projects.data.js';
import { ApiError } from '../utils/ApiError.js';

/**
 * projects.service.js — listing (with category/search filtering) and
 * single-project lookup by slug. Filtering happens here (not in the
 * frontend) so the contract matches a real DB-backed implementation once
 * this migrates to Mongoose.
 */
export function getProjects({ category, search } = {}) {
  let results = [...projects].sort((a, b) => a.order - b.order);

  if (category && category !== 'All Projects') {
    results = results.filter((project) => project.category === category);
  }

  if (search) {
    const query = search.trim().toLowerCase();
    results = results.filter(
      (project) =>
        project.title.toLowerCase().includes(query) ||
        project.shortDescription.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query))
    );
  }

  return {
    projects: results,
    filters: projectFilters,
    stats: projectStats,
    developmentProcess,
    technologies: technologiesUsed,
    total: results.length,
  };
}

export function getProjectBySlug(slug) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    throw ApiError.notFound(`No project found with slug "${slug}"`);
  }
  return project;
}

export default { getProjects, getProjectBySlug };
