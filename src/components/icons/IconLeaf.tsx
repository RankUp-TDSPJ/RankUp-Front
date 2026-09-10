import type { IconProps } from './types'

export function IconLeaf({ className }: IconProps) {
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
      <path d="M4 20c8 0 15-6 16-16-11 1-17 8-16 16Z" />
      <path d="M4.5 19.5c2.5-5 6.5-9 11.5-11.5" />
    </svg>
  )
}
