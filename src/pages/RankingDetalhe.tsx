import { useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { ranking } from '../data/ranking'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function RankingDetalhe() {
  const { id } = useParams<{ id: string }>()
  const user = ranking.find((u) => u.id === id)

  useDocumentTitle(user ? `${user.nome} - Ranking - RankUp+` : 'Usuário não encontrado - RankUp+')

  if (!user) {
    return (
      <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#2A6041]">Usuário não encontrado</h1>
        <p className="text-[#666]">Não encontramos esse usuário no ranking.</p>
        <Button to="/ranking">Voltar para o ranking</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <Button to="/ranking" variant="ghost" className="mb-8">
        Voltar para o ranking
      </Button>

      <div className="mx-auto max-w-[440px] rounded-lg bg-white p-8 text-center shadow-md">
        <p className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#e8f3ec] text-2xl font-bold text-[#2A6041]">
          {user.posicao}
        </p>
        <h1 className="mb-1 text-2xl font-bold text-[#2A6041]">{user.nome}</h1>
        <p className="mb-6 text-[#666]">{user.cidade}</p>

        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <p className="text-2xl font-bold text-[#2A6041]">{user.co2}</p>
            <p className="text-sm text-[#666]">CO₂ economizado</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#2A6041]">{user.pontos}</p>
            <p className="text-sm text-[#666]">Pontos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
