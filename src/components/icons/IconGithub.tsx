import type { IconProps } from './types'

export function IconGithub({ className }: IconProps) {
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
      <circle cx="12" cy="11" r="6" />
      <path d="M9 6.5c.5-1 1.3-1.5 3-1.5s2.5.5 3 1.5" />
      <path d="M9 20v-2.5c-1.5.3-2.2-.3-2.8-1.3" />
      <path d="M15 20v-2.7c0-.7.2-1.1.5-1.4-1.7-.2-3.5-.9-3.5-3.9 0-.9.3-1.6.8-2.1-.1-.2-.4-1.1.1-2.3 0 0 .7-.2 2.1.8a7 7 0 0 1 3.8 0c1.4-1 2.1-.8 2.1-.8.5 1.2.2 2.1.1 2.3.5.5.8 1.2.8 2.1 0 3-1.8 3.7-3.5 3.9.3.3.5.8.5 1.5V20" />
    </svg>
  )
}
