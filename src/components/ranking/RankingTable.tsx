import { RankingRow } from './RankingRow'
import type { RankingItem } from '../../types/api'

type RankingTableProps = {
  users: RankingItem[]
  idUsuarioLogado?: number
}

export function RankingTable({ users, idUsuarioLogado }: RankingTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-borda">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gradient-to-br from-verde-escuro to-verde-claro text-left text-white">
            <th className="w-20 p-4 text-xs font-bold uppercase tracking-wide sm:w-28">Posição</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wide">Nome</th>
            <th className="p-4 text-right text-xs font-bold uppercase tracking-wide">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <RankingRow key={user.id} user={user} ehVoce={user.id === idUsuarioLogado} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
