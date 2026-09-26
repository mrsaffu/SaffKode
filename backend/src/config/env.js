import dotenv from 'dotenv';

dotenv.config();

/**
 * Centralized environment configuration.
 * All application modules should read configuration through this object
 * instead of accessing process.env directly.
 */

export const env = {
  // Server
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  apiPrefix: process.env.API_PREFIX || '/api/v1',

  // Frontend / CORS
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  clientNetworkOrigin: process.env.CLIENT_NETWORK_ORIGIN || '',

  // Database
  mongodbUri: process.env.MONGODB_URI || '',

  // Rate limiting
  rateLimit: {
    windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
    max: Number(process.env.RATE_LIMIT_MAX) || 100,
  },

  // Contact form rate limiting
  contactRateLimit: {
    windowMs:
      Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS) || 60 * 60 * 1000,
    max: Number(process.env.CONTACT_RATE_LIMIT_MAX) || 5,
  },

  // Email
  email: {
    provider: process.env.EMAIL_PROVIDER || 'nodemailer',
    smtpHost: process.env.SMTP_HOST || '',
    smtpPort: Number(process.env.SMTP_PORT) || 587,
    smtpUser: process.env.SMTP_USER || '',
    smtpPassword: process.env.SMTP_PASSWORD || '',
    notificationEmail: process.env.CONTACT_NOTIFICATION_EMAIL || '',
  },

  // Logging
  logLevel: process.env.LOG_LEVEL || 'info',
};

export default env;