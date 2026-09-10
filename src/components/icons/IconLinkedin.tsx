import type { IconProps } from './types'

export function IconLinkedin({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7" y1="10.5" x2="7" y2="17" />
      <circle cx="7" cy="6.7" r="1" fill="currentColor" stroke="none" />
      <line x1="11" y1="17" x2="11" y2="11" />
      <path d="M11 13.2c0-1.5 1.1-2.5 2.5-2.5S16 11.7 16 13.2V17" />
    </svg>
  )
}
