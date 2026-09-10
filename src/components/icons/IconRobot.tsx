import type { IconProps } from './types'

export function IconRobot({ className }: IconProps) {
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
      <rect x="4" y="9" width="16" height="11" rx="2" />
      <line x1="12" y1="9" x2="12" y2="4" />
      <circle cx="12" cy="3" r="1" fill="currentColor" stroke="none" />
      <circle cx="9" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.5" r="1.2" fill="currentColor" stroke="none" />
      <line x1="9" y1="18" x2="15" y2="18" />
    </svg>
  )
}
