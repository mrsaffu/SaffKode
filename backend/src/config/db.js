import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from './logger.js';

/**
 * connectDB — establishes the Mongoose connection. Exits the process on
 * initial connection failure since the API is not useful without a
 * database; logs (but does not crash on) transient post-connection drops,
 * letting Mongoose's own reconnection logic handle those.
 */
export async function connectDB() {
  if (!env.mongodbUri) {
    logger.warn(
      'MONGODB_URI is not set — skipping database connection. Set it in backend/.env to enable persistence.'
    );
    return;
  }

  mongoose.connection.on('connected', () => {
    logger.info('MongoDB connected');
  });

  mongoose.connection.on('error', (err) => {
    logger.error({ err }, 'MongoDB connection error');
  });

  mongoose.connection.on('disconnected', () => {
    logger.warn('MongoDB disconnected');
  });

  try {
    await mongoose.connect(env.mongodbUri, {
      serverSelectionTimeoutMS: 8000,
    });
  } catch (err) {
    logger.error({ err }, 'Initial MongoDB connection failed. Exiting.');
    process.exit(1);
  }
}

export async function disconnectDB() {
  await mongoose.disconnect();
}

export default connectDB;
