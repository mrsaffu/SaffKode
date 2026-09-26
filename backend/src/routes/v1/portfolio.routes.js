import { Router } from 'express';
import { getPortfolio } from '../../controllers/portfolio.controller.js';

const router = Router();

/**
 * GET /api/v1/portfolio — optimized homepage payload (Phase 5).
 */
router.get('/', getPortfolio);

export default router;
