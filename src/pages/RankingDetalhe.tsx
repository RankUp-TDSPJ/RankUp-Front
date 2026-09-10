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
      <div className="mx-auto flex w-[90%] max-w-[1100px] animate-sobe-fade flex-col items-center gap-6 py-24 text-center motion-reduce:animate-none">
        <h1 className="text-2xl font-bold text-verde-escuro">Usuário não encontrado</h1>
        <p className="text-cinza">Não encontramos esse usuário no ranking.</p>
        <Button to="/ranking">Voltar para o ranking</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <Button to="/ranking" variant="ghost" className="mb-8">
        Voltar para o ranking
      </Button>

      <div className="mx-auto max-w-[440px] rounded-lg bg-white p-8 text-center shadow-md">
        <p className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-verde-suave text-2xl font-bold text-verde-escuro">
          {user.posicao}
        </p>
        <h1 className="mb-1 text-2xl font-bold text-verde-escuro">{user.nome}</h1>
        <p className="mb-6 text-cinza">{user.cidade}</p>

        <div className="flex flex-wrap justify-center gap-10">
          <div>
            <p className="text-2xl font-bold text-verde-escuro">{user.co2}</p>
            <p className="text-sm text-cinza">CO₂ economizado</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-verde-escuro">{user.pontos}</p>
            <p className="text-sm text-cinza">Pontos</p>
          </div>
        </div>
      </div>
    </div>
  )
}
