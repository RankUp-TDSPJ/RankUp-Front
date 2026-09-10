import { PodiumCard } from '../components/ranking/PodiumCard'
import { RankingTable } from '../components/ranking/RankingTable'
import { SectionTitle } from '../components/ui/SectionTitle'
import { ranking } from '../data/ranking'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Ranking() {
  useDocumentTitle('Ranking - RankUp+')
  const top3 = ranking.filter((user) => user.posicao <= 3)

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle subtitle="Os usuários que mais economizaram CO₂ com ações sustentáveis este mês.">
        Ranking dos usuários
      </SectionTitle>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
        {top3.map((user) => (
          <PodiumCard key={user.id} user={user} />
        ))}
      </div>

      <RankingTable users={ranking} />
    </div>
  )
}
