import { ApiError } from '../utils/ApiError.js';

/**
 * notFoundHandler — catches any request that didn't match a route and
 * forwards a consistent 404 ApiError to the centralized error handler,
 * instead of Express's default HTML error page.
 */
export function notFoundHandler(req, res, next) {
  next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
}

export default notFoundHandler;
