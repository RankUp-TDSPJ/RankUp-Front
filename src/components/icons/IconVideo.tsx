import type { IconProps } from './types'

export function IconVideo({ className }: IconProps) {
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
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <polygon points="16 9.5 22 6 22 18 16 14.5" />
    </svg>
  )
}
