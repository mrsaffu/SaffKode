/**
 * client.js — the single place that knows how to talk to the backend.
 *
 * In development, API requests use the relative `/api/v1` path so Vite
 * proxies them to the backend. This allows the application to work from
 * localhost as well as other devices on the local network.
 *
 * Feature API modules call apiGet()/apiPost() instead of using fetch
 * directly.
 */

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || '/api/v1';

/**
 * ApiClientError — thrown for any non-2xx response or network failure.
 * Carries the server's safe message/errors when available.
 */
export class ApiClientError extends Error {
  constructor(message, status, errors = []) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.errors = errors;
  }
}

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;

  let response;

  try {
    response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
  } catch {
    throw new ApiClientError(
      'Unable to reach the server. Please check your connection and try again.',
      0
    );
  }

  let payload = null;

  try {
    payload = await response.json();
  } catch {
    // Non-JSON response body — payload remains null.
  }

  if (!response.ok) {
    throw new ApiClientError(
      payload?.message || 'Something went wrong. Please try again.',
      response.status,
      payload?.errors || []
    );
  }

  return payload;
}

export function apiGet(path, options) {
  return request(path, {
    method: 'GET',
    ...options,
  });
}

export function apiPost(path, body, options) {
  return request(path, {
    method: 'POST',
    body: JSON.stringify(body),
    ...options,
  });
}

export default {
  apiGet,
  apiPost,
  ApiClientError,
};