import type { RegistroHistorico } from '../../types/api'
import { formatarCO2, formatarData, formatarNumero } from '../../utils/formatadores'
import { EstadoVazio } from '../ui/EstadoVazio'

type HistoricoAcoesProps = {
  registros: RegistroHistorico[]
}

// mais recentes primeiro; no mesmo dia, o último registrado vem antes
function ordenar(registros: RegistroHistorico[]) {
  return [...registros].sort((a, b) => b.data.localeCompare(a.data) || b.idRegistro - a.idRegistro)
}

export function HistoricoAcoes({ registros }: HistoricoAcoesProps) {
  if (registros.length === 0) {
    return (
      <EstadoVazio titulo="Nenhuma ação registrada ainda">
        Registre sua primeira ação acima para começar a pontuar.
      </EstadoVazio>
    )
  }

  return (
    <ul className="divide-y divide-borda overflow-hidden rounded-xl bg-white ring-1 ring-borda">
      {ordenar(registros).map((registro) => (
        <li key={registro.idRegistro} className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-grafite">{registro.nomeAcao}</p>
            <p className="text-sm text-cinza">
              {formatarNumero(registro.quantidade)} {registro.unidade} · {formatarData(registro.data)}
            </p>
          </div>
          <div className="flex gap-4 text-sm sm:text-right">
            <span className="font-bold text-verde-escuro">+{formatarNumero(registro.pontos)} pts</span>
            <span className="text-cinza">{formatarCO2(registro.co2Evitado)} de CO₂</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
