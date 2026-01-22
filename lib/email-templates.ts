import fs from 'fs'
import path from 'path'

export function getLeadMagnetHTML(): string {
  const filePath = path.join(process.cwd(), 'public', 'products', 'nash369-lead-magnet-ia-2026.html')
  
  try {
    const htmlContent = fs.readFileSync(filePath, 'utf-8')
    return htmlContent
  } catch (error) {
    console.error('Error reading lead magnet HTML:', error)
    throw new Error('Failed to load lead magnet HTML')
  }
}
