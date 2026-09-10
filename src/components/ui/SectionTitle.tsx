import type { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  subtitle?: ReactNode
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-10 text-center">
      <h2 className="text-[22px] font-bold leading-tight text-verde-escuro sm:text-[30px]">{children}</h2>
      {/* filete decorativo: dá um ponto de respiro entre o título e o conteúdo */}
      <span className="mx-auto mt-3 block h-1 w-12 rounded-full bg-verde-claro" />
      {subtitle && <p className="mx-auto mt-4 max-w-[560px] text-cinza">{subtitle}</p>}
    </div>
  )
}
