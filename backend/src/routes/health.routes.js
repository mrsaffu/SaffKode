import { Router } from 'express';
import mongoose from 'mongoose';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const router = Router();

/**
 * GET /health — infrastructure health check (uptime monitors, deployment
 * platforms). Reports process uptime and DB connection state. Intentionally
 * outside /api/v1 since it's not part of the public API contract.
 */
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const dbStateMap = ['disconnected', 'connected', 'connecting', 'disconnecting'];

    return ApiResponse.ok(res, {
      uptimeSeconds: Math.round(process.uptime()),
      database: dbStateMap[mongoose.connection.readyState] || 'unknown',
      timestamp: new Date().toISOString(),
    });
  })
);

export default router;
