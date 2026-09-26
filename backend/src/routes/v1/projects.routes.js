import { Router } from 'express';
import { getProjects, getProjectBySlug } from '../../controllers/projects.controller.js';

const router = Router();

/**
 * GET /api/v1/projects — listing with ?category= and ?search= filters.
 * GET /api/v1/projects/:slug — single project case study.
 */
router.get('/', getProjects);
router.get('/:slug', getProjectBySlug);

export default router;
