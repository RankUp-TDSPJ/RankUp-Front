import type { ReactNode } from 'react'
import { IconLeaf } from '../icons'

type EstadoVazioProps = {
  titulo: string
  children?: ReactNode
  /** botão ou link opcional para a pessoa sair do estado vazio */
  acao?: ReactNode
}

export function EstadoVazio({ titulo, children, acao }: EstadoVazioProps) {
  return (
    <div className="mx-auto flex max-w-[480px] flex-col items-center gap-3 rounded-xl bg-white p-8 text-center ring-1 ring-borda">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-verde-suave text-verde-escuro">
        <IconLeaf className="h-6 w-6" />
      </span>
      <p className="font-bold text-grafite">{titulo}</p>
      {children && <p className="text-sm text-cinza">{children}</p>}
      {acao && <div className="mt-2">{acao}</div>}
    </div>
  )
}
