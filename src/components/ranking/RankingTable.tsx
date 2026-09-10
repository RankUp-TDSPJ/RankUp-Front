import { RankingRow } from './RankingRow'
import type { RankingUser } from '../../types'

type RankingTableProps = {
  users: RankingUser[]
}

export function RankingTable({ users }: RankingTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-borda">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-gradient-to-br from-verde-escuro to-verde-claro text-left text-white">
            <th className="p-4 text-xs font-bold uppercase tracking-wide">Posição</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wide">Nome</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wide">Cidade</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wide">CO₂ economizado</th>
            <th className="p-4 text-xs font-bold uppercase tracking-wide">Pontos</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <RankingRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
