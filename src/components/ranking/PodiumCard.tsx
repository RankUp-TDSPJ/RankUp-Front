import type { RankingUser } from '../../types'

type PodiumCardProps = {
  user: RankingUser
}

const podiumStyles: Record<number, string> = {
  1: 'sm:order-2 border-2 border-[#2A6041] bg-gradient-to-br from-[#2A6041] to-[#4A8B5F] text-white sm:-translate-y-3',
  2: 'sm:order-1 bg-white text-[#333]',
  3: 'sm:order-3 bg-white text-[#333]',
}

export function PodiumCard({ user }: PodiumCardProps) {
  const isFirst = user.posicao === 1
  const styles = podiumStyles[user.posicao] ?? 'bg-white text-[#333]'

  return (
    <div className={`w-full min-w-0 flex-1 rounded-lg p-5 text-center shadow-md ${styles}`}>
      <p
        className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold ${
          isFirst ? 'bg-white text-[#2A6041]' : 'bg-[#e8f3ec] text-[#2A6041]'
        }`}
      >
        {user.posicao}
      </p>
      <h3 className="mb-1 font-semibold">{user.nome}</h3>
      <p className={`mb-2 text-xs ${isFirst ? 'text-white/80' : 'text-[#666]'}`}>{user.cidade}</p>
      <p className="text-xl font-bold">
        {user.pontos} <span className="text-xs font-normal">pts</span>
      </p>
    </div>
  )
}
