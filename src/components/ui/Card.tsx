import type { ReactNode } from 'react'

type CardProps = {
  icon?: ReactNode
  title: string
  children: ReactNode
  className?: string
}

export function Card({ icon, title, children, className }: CardProps) {
  const classes = [
    'grid min-w-full flex-1 grid-cols-[auto_1fr] items-center gap-x-3.5 gap-y-2 rounded-lg bg-white p-6 shadow-md md:min-w-[250px]',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {icon && (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f3ec] text-[22px] text-[#2A6041]">
          {icon}
        </span>
      )}
      <h3 className="self-center font-semibold text-[#333]">{title}</h3>
      <p className="col-span-2 text-sm leading-relaxed text-[#666]">{children}</p>
    </div>
  )
}
