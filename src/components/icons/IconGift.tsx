import type { IconProps } from './types'

export function IconGift({ className }: IconProps) {
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
      <rect x="3" y="9" width="18" height="4" rx="1" />
      <rect x="4" y="13" width="16" height="8" rx="1" />
      <line x1="12" y1="9" x2="12" y2="21" />
      <path d="M12 9c-1-3-3-5-4.5-3.5S9 9 12 9Z" />
      <path d="M12 9c1-3 3-5 4.5-3.5S15 9 12 9Z" />
    </svg>
  )
}
