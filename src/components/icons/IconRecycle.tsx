import type { IconProps } from './types'

export function IconRecycle({ className }: IconProps) {
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
      <path d="M12 3a9 9 0 1 0 8.2 5.3" />
      <polyline points="21 3 20.7 8.6 15.2 8.1" />
    </svg>
  )
}
