import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

import { env } from './config/env.js';
import { requestLogger } from './middleware/requestLogger.js';
import { generalLimiter } from './middleware/rateLimiter.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';

import healthRoutes from './routes/health.routes.js';
import v1Routes from './routes/v1/index.js';



const app = express();


app.use(
  helmet({
    contentSecurityPolicy: env.nodeEnv === 'production' ? undefined : false,
  })
);



const allowedOrigins = [
  env.clientOrigin,
  env.clientNetworkOrigin,
  ...(env.nodeEnv === 'development'
    ? [
      'http://localhost:5173',
      'http://127.0.0.1:5173',
    ]
    : []),
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {

      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked origin: ${origin}`));
    },

    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],

    allowedHeaders: [
      'Content-Type',
      'Authorization',
    ],

    credentials: true,

    optionsSuccessStatus: 204,
  })
);

/* =========================================================
   PERFORMANCE
   ========================================================= */
// app.use(express.static('public'));
app.use(compression());

/* =========================================================
   REQUEST LOGGING
   ========================================================= */

app.use(requestLogger);

/* =========================================================
   BODY PARSING
   ========================================================= */

app.use(
  express.json({
    limit: '10kb',
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: '10kb',
  })
);

/* =========================================================
   HEALTH CHECK
   ========================================================= */

app.use('/health', healthRoutes);

/* =========================================================
   API V1
   ========================================================= */

app.use(
  env.apiPrefix,
  generalLimiter,
  v1Routes
);

/* =========================================================
   ERROR HANDLING
   ========================================================= */

app.use(notFoundHandler);

app.use(errorHandler);

export default app;