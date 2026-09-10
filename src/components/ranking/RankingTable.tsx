import { RankingRow } from './RankingRow'
import type { RankingUser } from '../../types'

type RankingTableProps = {
  users: RankingUser[]
}

export function RankingTable({ users }: RankingTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg bg-white">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="bg-gradient-to-br from-[#2A6041] to-[#4A8B5F] text-left text-white">
            <th className="p-[14px] font-semibold">Posição</th>
            <th className="p-[14px] font-semibold">Nome</th>
            <th className="p-[14px] font-semibold">Cidade</th>
            <th className="p-[14px] font-semibold">CO₂ economizado</th>
            <th className="p-[14px] font-semibold">Pontos</th>
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
