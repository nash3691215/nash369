// Simple in-memory rate limiter
// For production, use Redis or a proper rate limiting service

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

const store: RateLimitStore = {}

// Clean up old entries every hour
setInterval(() => {
  const now = Date.now()
  Object.keys(store).forEach(key => {
    if (store[key].resetTime < now) {
      delete store[key]
    }
  })
}, 60 * 60 * 1000)

export interface RateLimitConfig {
  interval: number // milliseconds
  uniqueTokenPerInterval: number // max requests per interval
}

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'RateLimitError'
  }
}

export async function rateLimit(
  identifier: string,
  config: RateLimitConfig = {
    interval: 60 * 1000, // 1 minute
    uniqueTokenPerInterval: 10, // 10 requests per minute
  }
): Promise<void> {
  const now = Date.now()
  const key = `${identifier}`

  if (!store[key] || store[key].resetTime < now) {
    store[key] = {
      count: 1,
      resetTime: now + config.interval,
    }
    return
  }

  store[key].count++

  if (store[key].count > config.uniqueTokenPerInterval) {
    throw new RateLimitError('Rate limit exceeded')
  }
}

export function getClientIdentifier(request: Request): string {
  // Try to get real IP from various headers
  const forwarded = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  if (realIp) {
    return realIp
  }

  return 'unknown'
}
