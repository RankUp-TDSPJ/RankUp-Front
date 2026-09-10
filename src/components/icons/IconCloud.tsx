import type { IconProps } from './types'

export function IconCloud({ className }: IconProps) {
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
      <path d="M7 18a4.2 4.2 0 0 1-1-8.3A5.5 5.5 0 0 1 16.5 8a4.2 4.2 0 0 1 .5 10H7Z" />
    </svg>
  )
}
