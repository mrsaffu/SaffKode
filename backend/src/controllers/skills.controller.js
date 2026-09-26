import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import skillsService from '../services/skills.service.js';

export const getSkills = asyncHandler(async (req, res) => {
  const data = skillsService.getSkillsOverview();
  return ApiResponse.ok(res, data, 'Skills retrieved successfully');
});

export default { getSkills };
