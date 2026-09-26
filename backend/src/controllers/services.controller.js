import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import servicesService from '../services/services.service.js';

/**
 * getServices — GET /api/v1/services
 */
export const getServices = asyncHandler(async (req, res) => {
  const data = servicesService.listServices();
  return ApiResponse.ok(res, data, 'Services retrieved successfully');
});

/**
 * getServiceDetail — GET /api/v1/services/:slug
 */
export const getServiceDetail = asyncHandler(async (req, res) => {
  const service = servicesService.getServiceBySlug(req.params.slug);
  return ApiResponse.ok(res, service, 'Service retrieved successfully');
});

export default { getServices, getServiceDetail };
