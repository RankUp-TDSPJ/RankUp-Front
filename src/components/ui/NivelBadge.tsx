import type { Nivel } from '../../types/api'
import { formatarNivel } from '../../utils/formatadores'

const nivelClasses: Record<Nivel, string> = {
  INICIANTE: 'bg-verde-suave text-verde-escuro',
  BRONZE: 'bg-orange-100 text-orange-800',
  PRATA: 'bg-slate-200 text-slate-700',
  OURO: 'bg-amber-100 text-amber-800',
}

export function NivelBadge({ nivel }: { nivel: Nivel }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${nivelClasses[nivel]}`}>
      Nível {formatarNivel(nivel)}
    </span>
  )
}
