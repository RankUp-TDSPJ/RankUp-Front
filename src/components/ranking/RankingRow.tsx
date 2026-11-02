import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { RankingItem } from '../../types/api'
import { formatarNumero } from '../../utils/formatadores'

type RankingRowProps = {
  user: RankingItem
  /** destaca a linha do usuário logado */
  ehVoce?: boolean
}

export function RankingRow({ user, ehVoce = false }: RankingRowProps) {
  const navigate = useNavigate()

  function goToDetalhe() {
    navigate(`/ranking/${user.id}`)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTableRowElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      goToDetalhe()
    }
  }

  return (
    <tr
      onClick={goToDetalhe}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Ver detalhes de ${user.nome}`}
      className={`group cursor-pointer border-b border-borda transition-colors last:border-0 motion-reduce:transition-none hover:bg-verde-suave/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-verde-escuro ${
        ehVoce ? 'bg-verde-suave/40' : ''
      }`}
    >
      <td className="p-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-verde-suave font-bold text-verde-escuro transition-colors motion-reduce:transition-none group-hover:bg-verde-escuro group-hover:text-white">
          {user.posicao}
        </span>
      </td>
      <td className="break-words p-4 font-medium text-grafite">
        {user.nome}
        {ehVoce && (
          <span className="ml-2 rounded-full bg-verde-escuro px-2 py-0.5 text-[11px] font-bold text-white">Você</span>
        )}
      </td>
      <td className="p-4 text-right font-bold text-verde-escuro">{formatarNumero(user.pontuacaoTotal)}</td>
    </tr>
  )
}
