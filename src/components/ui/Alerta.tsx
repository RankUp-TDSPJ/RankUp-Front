import type { ReactNode } from 'react'
import type { TipoMensagem } from '../../types'
import { IconClose } from '../icons'

type AlertaProps = {
  tipo?: TipoMensagem
  children: ReactNode
  onFechar?: () => void
  className?: string
}

const tipoClasses: Record<TipoMensagem, string> = {
  sucesso: 'bg-verde-suave text-verde-profundo ring-verde-claro/40',
  erro: 'bg-red-50 text-red-700 ring-red-200',
  info: 'bg-white text-grafite ring-borda',
}

export function Alerta({ tipo = 'info', children, onFechar, className }: AlertaProps) {
  const classes = [
    'flex items-center justify-center gap-3 rounded-lg p-3 text-center text-sm font-medium ring-1',
    tipoClasses[tipo],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes} role={tipo === 'erro' ? 'alert' : 'status'}>
      <span>{children}</span>
      {onFechar && (
        <button
          type="button"
          onClick={onFechar}
          aria-label="Fechar mensagem"
          className="shrink-0 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          <IconClose className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
