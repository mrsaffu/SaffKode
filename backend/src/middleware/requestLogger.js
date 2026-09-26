import pinoHttp from 'pino-http';
import { logger } from '../config/logger.js';

/**
 * requestLogger — structured per-request logging. Redacts cookie/auth
 * headers even though this app has no auth today, so the middleware stays
 * safe if headers are ever added later. Skips noisy health-check logs.
 */
export const requestLogger = pinoHttp({
  logger,
  redact: ['req.headers.cookie', 'req.headers.authorization'],
  autoLogging: {
    ignore: (req) => req.url === '/health',
  },
  customLogLevel: (req, res, err) => {
    if (err || res.statusCode >= 500) return 'error';
    if (res.statusCode >= 400) return 'warn';
    return 'info';
  },
});

export default requestLogger;
