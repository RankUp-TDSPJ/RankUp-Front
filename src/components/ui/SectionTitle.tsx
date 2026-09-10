import type { ReactNode } from 'react'

type SectionTitleProps = {
  children: ReactNode
  subtitle?: ReactNode
}

export function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-[30px] text-center">
      <h2 className="text-[20px] font-bold text-[#2A6041] sm:text-[28px]">{children}</h2>
      {subtitle && <p className="mt-[10px] text-[#666]">{subtitle}</p>}
    </div>
  )
}
