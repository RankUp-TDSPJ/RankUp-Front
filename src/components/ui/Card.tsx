import type { ReactNode } from 'react'

type CardProps = {
  icon?: ReactNode
  title: string
  children: ReactNode
  className?: string
}

export function Card({ icon, title, children, className }: CardProps) {
  const classes = [
    'flex h-full flex-col items-start gap-3 rounded-xl bg-white p-6 ring-1 ring-borda transition duration-200 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-lg hover:ring-verde-claro/40',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {icon && (
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-suave text-verde-escuro">
          {icon}
        </span>
      )}
      <h3 className="font-semibold text-grafite">{title}</h3>
      <p className="text-sm leading-relaxed text-cinza">{children}</p>
    </div>
  )
}
