import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import projectsService from '../services/projects.service.js';

/**
 * getProjects — GET /api/v1/projects?category=&search=
 */
export const getProjects = asyncHandler(async (req, res) => {
  const { category, search } = req.query;
  const data = projectsService.getProjects({ category, search });
  return ApiResponse.ok(res, data, 'Projects retrieved successfully');
});

/**
 * getProjectBySlug — GET /api/v1/projects/:slug
 */
export const getProjectBySlug = asyncHandler(async (req, res) => {
  const project = projectsService.getProjectBySlug(req.params.slug);
  return ApiResponse.ok(res, project, 'Project retrieved successfully');
});

export default { getProjects, getProjectBySlug };
