import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import portfolioService from '../services/portfolio.service.js';

/**
 * getPortfolio — GET /api/v1/portfolio. Controllers stay thin: fetch from
 * the service, wrap in the standard envelope, respond. No business logic
 * lives here.
 */
export const getPortfolio = asyncHandler(async (req, res) => {
  const data = portfolioService.getPortfolioOverview();
  return ApiResponse.ok(res, data, 'Portfolio overview retrieved successfully');
});

export default { getPortfolio };
