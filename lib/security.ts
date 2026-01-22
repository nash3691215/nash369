// Security utilities

/**
 * Sanitize email to prevent injection attacks
 */
export function sanitizeEmail(email: string): string {
  // Remove any potential script tags or HTML
  const cleaned = email
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s@.-]/gi, '')
    .trim()
    .toLowerCase()

  return cleaned
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Sanitize text input to prevent XSS
 */
export function sanitizeText(text: string): string {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim()
}

/**
 * Validate form data
 */
export function validateFormData(data: {
  name?: string
  email?: string
  message?: string
  [key: string]: any
}): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check email
  if (data.email) {
    if (!isValidEmail(data.email)) {
      errors.push('Invalid email format')
    }
    if (data.email.length > 254) {
      errors.push('Email too long')
    }
  }

  // Check name
  if (data.name) {
    if (data.name.length > 100) {
      errors.push('Name too long')
    }
    if (data.name.length < 2) {
      errors.push('Name too short')
    }
  }

  // Check message
  if (data.message) {
    if (data.message.length > 5000) {
      errors.push('Message too long')
    }
  }

  // Check for suspicious patterns (basic spam detection)
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /onerror=/i,
    /onclick=/i,
    /eval\(/i,
  ]

  Object.values(data).forEach((value) => {
    if (typeof value === 'string') {
      suspiciousPatterns.forEach((pattern) => {
        if (pattern.test(value)) {
          errors.push('Suspicious content detected')
        }
      })
    }
  })

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Generate a simple CSRF token (for demo purposes)
 * In production, use a proper session-based CSRF protection
 */
export function generateCSRFToken(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

/**
 * Check if request is from a bot (basic check)
 */
export function isPotentialBot(userAgent: string | null): boolean {
  if (!userAgent) return true

  const botPatterns = [
    /bot/i,
    /crawler/i,
    /spider/i,
    /scraper/i,
    /curl/i,
    /wget/i,
    /python/i,
  ]

  return botPatterns.some((pattern) => pattern.test(userAgent))
}

/**
 * Honeypot field check (anti-spam)
 */
export function checkHoneypot(honeypotValue: any): boolean {
  // If honeypot field is filled, it's likely a bot
  return honeypotValue !== undefined && honeypotValue !== ''
}
