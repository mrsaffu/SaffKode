/**
 * ApiError — thrown for any expected/operational failure (validation,
 * not-found, bad request, etc.). The centralized error handler
 * distinguishes these from unexpected bugs and returns their `message`
 * safely to the client; anything else gets a generic message instead.
 */
export class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(message = 'Bad request', errors = []) {
    return new ApiError(400, message, errors);
  }

  static notFound(message = 'Resource not found') {
    return new ApiError(404, message);
  }

  static validationError(errors = [], message = 'Validation failed') {
    return new ApiError(422, message, errors);
  }

  static tooManyRequests(message = 'Too many requests. Please try again later.') {
    return new ApiError(429, message);
  }

  static internal(message = 'Internal server error') {
    return new ApiError(500, message);
  }
}

export default ApiError;
