import { apiGet } from './client';

/**
 * portfolioApi — consumes GET /api/v1/portfolio, the optimized homepage
 * payload. Kept as its own module (rather than reusing individual feature
 * APIs) because the backend endpoint is purpose-built to return only what
 * Home needs in a single round trip.
 */
export function getPortfolioOverview() {
  return apiGet('/portfolio');
}

export default { getPortfolioOverview };
