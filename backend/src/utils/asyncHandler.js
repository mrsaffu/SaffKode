/**
 * asyncHandler — wraps an async controller/middleware so any rejected
 * promise is forwarded to next(err) instead of crashing the process or
 * requiring a try/catch in every controller.
 */
export function asyncHandler(fn) {
  return function wrapped(req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export default asyncHandler;
