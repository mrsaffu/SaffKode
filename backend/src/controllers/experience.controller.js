import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import experienceService from '../services/experience.service.js';

export const getExperience = asyncHandler(async (req, res) => {
  const data = experienceService.getExperienceOverview();
  return ApiResponse.ok(res, data, 'Experience retrieved successfully');
});

export default { getExperience };
