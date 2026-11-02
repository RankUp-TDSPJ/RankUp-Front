import { PodiumCard } from '../components/ranking/PodiumCard'
import { RankingTable } from '../components/ranking/RankingTable'
import { Button } from '../components/ui/Button'
import { Carregando } from '../components/ui/Carregando'
import { ErroCarregamento } from '../components/ui/ErroCarregamento'
import { EstadoVazio } from '../components/ui/EstadoVazio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useRequisicao } from '../hooks/useRequisicao'
import { listarRanking } from '../services/rankingService'

const LIMITE_RANKING = 10

export function Ranking() {
  useDocumentTitle('Ranking - RankUp+')
  const { usuario } = useAuth()
  const { estado, recarregar } = useRequisicao((signal) => listarRanking(LIMITE_RANKING, signal), [])

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle subtitle="Os usuários que mais pontuaram com ações sustentáveis. Clique em um nome para ver os detalhes.">
        Ranking dos usuários
      </SectionTitle>

      {estado.status === 'carregando' && <Carregando texto="Carregando o ranking..." />}

      {estado.status === 'erro' && <ErroCarregamento mensagem={estado.mensagem} onTentarNovamente={recarregar} />}

      {estado.status === 'sucesso' && estado.dados.length === 0 && (
        <EstadoVazio
          titulo="Ninguém pontuou ainda"
          acao={<Button to={usuario ? '/gamificacao' : '/entrar'}>Registrar a primeira ação</Button>}
        >
          Seja a primeira pessoa a aparecer no ranking.
        </EstadoVazio>
      )}

      {estado.status === 'sucesso' && estado.dados.length > 0 && (
        <>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end">
            {estado.dados
              .filter((user) => user.posicao <= 3)
              .map((user) => (
                <PodiumCard key={user.id} user={user} />
              ))}
          </div>

          <RankingTable users={estado.dados} idUsuarioLogado={usuario?.id} />
        </>
      )}
    </div>
  )
}
