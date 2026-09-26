import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import educationService from '../services/education.service.js';

export const getEducation = asyncHandler(async (req, res) => {
  const data = educationService.getEducationOverview();
  return ApiResponse.ok(res, data, 'Education retrieved successfully');
});

export default { getEducation };
