import app from './app.js';
import { env } from './config/env.js';
import { connectDB, disconnectDB } from './config/db.js';
import { logger } from './config/logger.js';

/**
 * server.js — process entry point.
 * Connects to MongoDB, starts the HTTP server,
 * and handles graceful shutdown.
 */
async function start() {
  await connectDB();

  const server = app.listen(env.port, () => {
    const serverUrl = `http://localhost:${env.port}`;

    logger.info(`🚀 Server running at: ${serverUrl}`);
    logger.info(`🌍 Environment: ${env.nodeEnv}`);
    logger.info(`❤️  Health check: ${serverUrl}/health`);
    logger.info(`🔗 API base URL: ${serverUrl}${env.apiPrefix}`);
  });

  async function shutdown(signal) {
    logger.info(`${signal} received. Shutting down gracefully.`);

    server.close(async () => {
      await disconnectDB();
      logger.info('Shutdown complete.');
      process.exit(0);
    });
  }

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));

  process.on('unhandledRejection', (reason) => {
    logger.error({ reason }, 'Unhandled promise rejection');
  });
}

start();