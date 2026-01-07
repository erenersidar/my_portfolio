// Simple in-memory rate limiter
// In production, use Redis or a dedicated service for distributed rate limiting

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const rateLimitStore: RateLimitStore = {};

const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute per IP

export function rateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitStore[identifier];

  if (!record || now > record.resetTime) {
    // Create new record or reset expired one
    rateLimitStore[identifier] = {
      count: 1,
      resetTime: now + WINDOW_MS,
    };
    return true;
  }

  if (record.count < MAX_REQUESTS) {
    record.count++;
    return true;
  }

  // Rate limit exceeded
  return false;
}

// Clean up expired records every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const key in rateLimitStore) {
    if (now > rateLimitStore[key].resetTime) {
      delete rateLimitStore[key];
    }
  }
}, 5 * 60 * 1000);
