import type { RankingUser } from '../../types'

type PodiumCardProps = {
  user: RankingUser
}

const podiumStyles: Record<number, string> = {
  1: 'sm:order-2 bg-gradient-to-br from-verde-escuro to-verde-claro text-white shadow-lg shadow-verde-escuro/20 ring-verde-escuro sm:-translate-y-3',
  2: 'sm:order-1 bg-white text-grafite ring-borda',
  3: 'sm:order-3 bg-white text-grafite ring-borda',
}

export function PodiumCard({ user }: PodiumCardProps) {
  const isFirst = user.posicao === 1
  const styles = podiumStyles[user.posicao] ?? 'bg-white text-grafite ring-borda'

  return (
    <div
      className={`w-full min-w-0 flex-1 rounded-xl p-5 text-center ring-1 transition duration-200 motion-reduce:transition-none hover:-translate-y-1 ${styles}`}
    >
      <p
        className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full text-lg font-bold ${
          isFirst ? 'bg-white text-verde-escuro shadow-sm' : 'bg-verde-suave text-verde-escuro'
        }`}
      >
        {user.posicao}
      </p>
      <h3 className="mb-1 font-semibold leading-snug">{user.nome}</h3>
      <p className={`text-xs ${isFirst ? 'text-white/75' : 'text-cinza'}`}>{user.cidade}</p>
      <p className="mt-3 text-2xl font-bold">
        {user.pontos}
        <span className={`ml-1 text-xs font-normal ${isFirst ? 'text-white/75' : 'text-cinza'}`}>pts</span>
      </p>
    </div>
  )
}
