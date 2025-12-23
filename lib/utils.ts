import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function to get image path with basePath support
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  // Remove leading slash if basePath already has it
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${basePath}${cleanPath}`
}
