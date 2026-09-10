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
      className="cursor-pointer border-b border-[#eee] last:border-0 hover:bg-[#f9f9f9] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#2A6041]"
    >
      <td className="p-[14px] text-lg font-bold text-[#2A6041]">{user.posicao}</td>
      <td className="p-[14px]">{user.nome}</td>
      <td className="p-[14px]">{user.cidade}</td>
      <td className="p-[14px]">{user.co2}</td>
      <td className="p-[14px]">{user.pontos}</td>
    </tr>
  )
}
