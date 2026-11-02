import { Navigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Carregando } from '../components/ui/Carregando'
import { ErroCarregamento } from '../components/ui/ErroCarregamento'
import { NivelBadge } from '../components/ui/NivelBadge'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useRequisicao } from '../hooks/useRequisicao'
import { buscarPosicao } from '../services/rankingService'
import { buscarPerfil } from '../services/usuarioService'
import type { EstadoNavegacao } from '../types'
import type { PerfilUsuario, PosicaoUsuario } from '../types/api'
import { formatarCO2, formatarNumero } from '../utils/formatadores'

interface DetalheUsuario {
  perfil: PerfilUsuario
  posicao: PosicaoUsuario
}

const naoEncontrado: EstadoNavegacao = {
  mensagem: 'Não encontramos esse usuário no ranking.',
  tipoMensagem: 'erro',
}

async function buscarDetalhe(id: number, signal: AbortSignal): Promise<DetalheUsuario> {
  const [perfil, posicao] = await Promise.all([buscarPerfil(id, signal), buscarPosicao(id, signal)])
  return { perfil, posicao }
}

export function RankingDetalhe() {
  const { id } = useParams<{ id: string }>()
  const idNumerico = Number(id)
  const idValido = Number.isInteger(idNumerico) && idNumerico > 0

  const { usuario } = useAuth()
  const { estado, recarregar } = useRequisicao(
    // com id inválido nem chama a API: o componente já redireciona abaixo
    (signal) => (idValido ? buscarDetalhe(idNumerico, signal) : new Promise<DetalheUsuario>(() => {})),
    [idNumerico],
  )

  useDocumentTitle(estado.status === 'sucesso' ? `${estado.dados.perfil.nome} - Ranking - RankUp+` : 'Ranking - RankUp+')

  if (!idValido || (estado.status === 'erro' && estado.codigo === 404)) {
    return <Navigate to="/ranking" replace state={naoEncontrado} />
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <Button to="/ranking" variant="ghost" className="mb-8">
        Voltar para o ranking
      </Button>

      {estado.status === 'carregando' && <Carregando texto="Carregando o perfil..." />}

      {estado.status === 'erro' && <ErroCarregamento mensagem={estado.mensagem} onTentarNovamente={recarregar} />}

      {estado.status === 'sucesso' && (
        <div className="mx-auto max-w-[480px] rounded-lg bg-white p-6 text-center shadow-md sm:p-8">
          <p className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-verde-suave text-2xl font-bold text-verde-escuro">
            {estado.dados.posicao.posicao}º
          </p>
          <h1 className="mb-3 break-words text-2xl font-bold text-verde-escuro">
            {estado.dados.perfil.nome}
            {estado.dados.perfil.id === usuario?.id && <span className="ml-2 text-base text-cinza">(você)</span>}
          </h1>
          <NivelBadge nivel={estado.dados.perfil.nivel} />

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold text-verde-escuro">{formatarNumero(estado.dados.perfil.pontuacaoTotal)}</p>
              <p className="text-sm text-cinza">Pontos</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-verde-escuro">{formatarCO2(estado.dados.perfil.co2TotalEvitado)}</p>
              <p className="text-sm text-cinza">CO₂ evitado</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-verde-escuro">
                {estado.dados.posicao.posicao}º de {estado.dados.posicao.totalUsuarios}
              </p>
              <p className="text-sm text-cinza">Posição geral</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
