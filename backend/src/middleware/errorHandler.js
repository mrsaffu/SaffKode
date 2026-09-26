import { ApiError } from '../utils/ApiError.js';
import { logger } from '../config/logger.js';
import { env } from '../config/env.js';

/**
 * errorHandler — the single place that turns any thrown/forwarded error
 * into a client response. Operational errors (ApiError) return their own
 * safe message; anything else (a genuine bug) is logged in full server-side
 * but the client only ever sees a generic message — never a stack trace,
 * database error string, or other internal detail.
 */
export function errorHandler(err, req, res, _next) {
  const isOperational = err instanceof ApiError && err.isOperational;
  const statusCode = isOperational ? err.statusCode : 500;
  const message = isOperational ? err.message : 'Something went wrong on our end.';
  const errors = isOperational ? err.errors : [];

  if (!isOperational) {
    logger.error({ err, path: req.originalUrl, method: req.method }, 'Unhandled error');
  } else if (statusCode >= 500) {
    logger.error({ err, path: req.originalUrl }, err.message);
  } else {
    logger.warn({ path: req.originalUrl, statusCode }, err.message);
  }

  res.status(statusCode).json({
    success: false,
    message,
    errors,
    ...(env.nodeEnv === 'development' && !isOperational
      ? { stack: err.stack }
      : {}),
  });
}

export default errorHandler;
