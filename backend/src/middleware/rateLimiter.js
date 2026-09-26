import rateLimit from 'express-rate-limit';
import { env } from '../config/env.js';
import { ApiError } from '../utils/ApiError.js';

/**
 * rateLimiters — general API throttling plus a stricter limiter reserved
 * for the contact endpoint (Phase 15), which is the app's only write path
 * and the most likely target for abuse/spam.
 */
function buildLimiter({ windowMs, max, message }) {
  return rateLimit({
    windowMs,
    max,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (req, res, next) => {
      next(ApiError.tooManyRequests(message));
    },
  });
}

export const generalLimiter = buildLimiter({
  windowMs: env.rateLimit.windowMs,
  max: env.rateLimit.max,
  message: 'Too many requests from this IP. Please try again later.',
});

export const contactLimiter = buildLimiter({
  windowMs: env.contactRateLimit.windowMs,
  max: env.contactRateLimit.max,
  message: 'Too many contact form submissions. Please try again later.',
});

export default generalLimiter;
