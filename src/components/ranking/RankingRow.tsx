import type { KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { RankingUser } from '../../types'

type RankingRowProps = {
  user: RankingUser
}

export function RankingRow({ user }: RankingRowProps) {
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
      className="group cursor-pointer border-b border-borda transition-colors last:border-0 motion-reduce:transition-none hover:bg-verde-suave/60 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-verde-escuro"
    >
      <td className="p-4">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-verde-suave font-bold text-verde-escuro transition-colors motion-reduce:transition-none group-hover:bg-verde-escuro group-hover:text-white">
          {user.posicao}
        </span>
      </td>
      <td className="p-4 font-medium text-grafite">{user.nome}</td>
      <td className="p-4 text-cinza">{user.cidade}</td>
      <td className="p-4 text-cinza">{user.co2}</td>
      <td className="p-4 font-bold text-verde-escuro">{user.pontos}</td>
    </tr>
  )
}
