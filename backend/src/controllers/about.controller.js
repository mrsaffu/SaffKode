import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import aboutService from '../services/about.service.js';

/**
 * getAbout — GET /api/v1/about
 */
export const getAbout = asyncHandler(async (req, res) => {
  const data = aboutService.getAboutPage();
  return ApiResponse.ok(res, data, 'About page retrieved successfully');
});

export default { getAbout };
