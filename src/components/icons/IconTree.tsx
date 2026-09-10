import type { IconProps } from './types'

export function IconTree({ className }: IconProps) {
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
      <polygon points="12 3 18 13 6 13" />
      <polygon points="12 8 19 17 5 17" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  )
}
