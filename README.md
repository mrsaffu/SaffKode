# Safwan Ahmad — Portfolio

Production-ready full-stack personal portfolio for **Safwan Ahmad**, Full-Stack
Developer (Delhi, India). Built as a public, read-only application — no
login, signup, authentication, or admin dashboard.

> **Status:** Phase 1 — Project Setup & Architecture complete. Feature pages
> (Home, About, Services, Projects, etc.) are implemented in later phases.

## Tech Stack

**Frontend:** React, JSX, Vite, React Router, feature-based architecture,
Framer Motion (animation, added Phase 2), Tailwind-style design tokens
(added Phase 2).

**Backend:** Node.js, Express.js, MongoDB/Mongoose (added Phase 3), REST API
under `/api/v1`, centralized error handling, security middleware, rate
limiting.

## Project Structure

```
root/
├── frontend/               React + Vite application
│   ├── src/
│   │   ├── app/             Root app shell
│   │   ├── assets/          Static assets
│   │   ├── components/      Shared, reusable, presentational components
│   │   │   ├── ui/          Button, Card, Badge, Modal, etc.
│   │   │   ├── layout/      Navbar, Footer, PageContainer
│   │   │   ├── animation/   FadeIn, Stagger, PageTransition wrappers
│   │   │   └── common/      StatCard, Timeline, LoadingState, etc.
│   │   ├── features/        One folder per page/domain (home, about, ...)
│   │   ├── hooks/           Shared React hooks
│   │   ├── lib/              Small internal libraries/helpers
│   │   ├── services/api/    Centralized API modules (no fetch in components)
│   │   ├── routes/          Route definitions
│   │   ├── styles/          Global styles & design tokens
│   │   └── utils/           Pure utility functions
│   └── public/
│
├── backend/                 Node.js + Express API
│   ├── src/
│   │   ├── config/          Env config, DB connection (Phase 3)
│   │   ├── controllers/     Thin request handlers
│   │   ├── middleware/      Security, error handling, rate limiting
│   │   ├── models/          Mongoose schemas
│   │   ├── routes/          Versioned API routes
│   │   ├── services/        Business logic
│   │   ├── validators/      Request validation schemas
│   │   ├── utils/           ApiError, asyncHandler, response helpers
│   │   ├── app.js           Express app definition
│   │   └── server.js        Process entry point
│   └── tests/
│
├── .env.example              Documents every environment variable
├── .gitignore
└── package.json              Root scripts (dev, build, lint)
```

## Prerequisites

- Node.js ≥ 18
- npm ≥ 9
- A MongoDB Atlas connection string (added when Phase 3 lands)

## Installation

```bash
npm run install:all
```

This installs root, `frontend/`, and `backend/` dependencies.

## Environment Variables

Copy `.env.example` to `frontend/.env` (for `VITE_*` keys) and `backend/.env`
(for everything else), then fill in real values. Never commit either `.env`
file — both are ignored by `.gitignore`.

## Development

Run both frontend and backend together from the root:

```bash
npm run dev
```

Or individually:

```bash
npm run dev:frontend   # Vite dev server → http://localhost:5173
npm run dev:backend    # Express dev server (nodemon) → http://localhost:5000
```

## Build

```bash
npm run build           # Builds the frontend for production
npm run start:backend   # Starts the backend in production mode
```

## Linting & Formatting

```bash
npm run lint
npm run format
```

## API Overview

All endpoints are versioned under `/api/v1` and return a consistent
envelope:

```json
{ "success": true, "data": {}, "message": "Success", "meta": {} }
```

Full endpoint list, database models, and API contracts are documented as
each corresponding phase (3 and onward) is implemented.

## Roadmap / Phases

This project is built incrementally, one phase at a time, with an explicit
approval gate between phases:

1. Project Setup & Architecture ✅
2. Design System & Reusable Components
3. Backend Foundation
4. Frontend Foundation
5. Home Section
6. About Section
7. Services Section
8. Projects Section
9. Project Details Section
10. Experience Section
11. Skills Section
12. Education Section
13. Certifications Section
14. Blog Section
15. Contact Section
16. SEO & Performance Optimization
17. Testing & Security
18. Production Deployment

## Deployment (planned)

- **Frontend:** Vercel or equivalent
- **Backend:** Render/Railway/AWS or equivalent
- **Database:** MongoDB Atlas

Deployment configuration, environment setup, and rollback procedure are
documented in full during Phase 18.
