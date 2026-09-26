import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import certificationsService from '../services/certifications.service.js';

export const getCertifications = asyncHandler(async (req, res) => {
  const data = certificationsService.getCertificationsOverview();
  return ApiResponse.ok(res, data, 'Certifications retrieved successfully');
});

export default { getCertifications };
