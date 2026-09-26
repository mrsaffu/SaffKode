import pino from 'pino';
import { env } from './env.js';

/**
 * logger.js — centralized structured logger.
 *
 * Pretty-printed in development for readability; plain JSON lines in
 * production so log aggregators (CloudWatch, Render logs, etc.) can parse
 * them. Never log secrets — request logging middleware redacts sensitive
 * headers (see middleware/requestLogger.js).
 */
const isDev = env.nodeEnv === 'development';

export const logger = pino({
  level: env.logLevel,
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      }
    : undefined,
});

export default logger;
