import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { EditarPerfilForm } from '../components/gamificacao/EditarPerfilForm'
import { HistoricoAcoes } from '../components/gamificacao/HistoricoAcoes'
import { RegistrarAcaoForm } from '../components/gamificacao/RegistrarAcaoForm'
import { StatCard } from '../components/gamificacao/StatCard'
import { Carregando } from '../components/ui/Carregando'
import { ErroCarregamento } from '../components/ui/ErroCarregamento'
import { ImageZoom } from '../components/ui/ImageZoom'
import { NivelBadge } from '../components/ui/NivelBadge'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useRequisicao } from '../hooks/useRequisicao'
import { buscarPosicao } from '../services/rankingService'
import { listarAcoes, listarHistorico } from '../services/registroService'
import { buscarPerfil } from '../services/usuarioService'
import type { EstadoNavegacao } from '../types'
import type { AcaoSustentavel, PerfilUsuario, PosicaoUsuario, RegistroHistorico } from '../types/api'
import { formatarCO2, formatarNumero } from '../utils/formatadores'

interface DadosPainel {
  perfil: PerfilUsuario
  posicao: PosicaoUsuario
  historico: RegistroHistorico[]
  acoes: AcaoSustentavel[]
}

async function buscarPainel(idUsuario: number, signal: AbortSignal): Promise<DadosPainel> {
  const [perfil, posicao, historico, acoes] = await Promise.all([
    buscarPerfil(idUsuario, signal),
    buscarPosicao(idUsuario, signal),
    listarHistorico(idUsuario, signal),
    listarAcoes(signal),
  ])
  return { perfil, posicao, historico, acoes }
}

export function Gamificacao() {
  useDocumentTitle('Meu painel - RankUp+')
  const { usuario, sair } = useAuth()
  const navigate = useNavigate()
  // a RotaProtegida garante que existe usuário aqui
  const idUsuario = usuario?.id ?? 0
  const { estado, recarregar } = useRequisicao((signal) => buscarPainel(idUsuario, signal), [idUsuario])

  const contaNaoExiste = estado.status === 'erro' && estado.codigo === 404

  // conta apagada (por um admin, por exemplo) enquanto a sessão ainda estava salva no navegador
  useEffect(() => {
    if (!contaNaoExiste) return
    sair()
    const aviso: EstadoNavegacao = { mensagem: 'Sua conta não foi encontrada. Entre novamente.', tipoMensagem: 'erro' }
    navigate('/entrar', { replace: true, state: aviso })
  }, [contaNaoExiste, sair, navigate])

  const atualizarPainel = () => recarregar({ silencioso: true })

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      {estado.status === 'carregando' && <Carregando texto="Carregando seu painel..." />}

      {estado.status === 'erro' && !contaNaoExiste && (
        <ErroCarregamento mensagem={estado.mensagem} onTentarNovamente={recarregar} />
      )}

      {estado.status === 'sucesso' && (
        <>
          <SectionTitle subtitle={<NivelBadge nivel={estado.dados.perfil.nivel} />}>
            Olá, {estado.dados.perfil.nome}!
          </SectionTitle>

          <div className="mb-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard value={formatarNumero(estado.dados.perfil.pontuacaoTotal)} label="Pontos acumulados" />
            <StatCard value={String(estado.dados.historico.length)} label="Ações realizadas" />
            <StatCard value={formatarCO2(estado.dados.perfil.co2TotalEvitado)} label="CO₂ evitado" />
            <StatCard
              value={`${estado.dados.posicao.posicao}º`}
              label={`Posição no ranking (de ${estado.dados.posicao.totalUsuarios})`}
            />
          </div>

          <div className="mb-16 grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
            <section className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8" aria-labelledby="titulo-registrar">
              <h2 id="titulo-registrar" className="mb-1 text-xl font-bold text-verde-escuro">
                Registrar ação
              </h2>
              <p className="mb-5 text-sm text-cinza">Escolha o que você fez, informe a quantidade e ganhe pontos.</p>
              <RegistrarAcaoForm
                acoes={estado.dados.acoes}
                idUsuario={idUsuario}
                nivelAtual={estado.dados.perfil.nivel}
                onRegistrado={atualizarPainel}
              />
            </section>

            <section className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8" aria-labelledby="titulo-perfil">
              <h2 id="titulo-perfil" className="text-xl font-bold text-verde-escuro">
                Meu perfil
              </h2>
              <EditarPerfilForm usuario={estado.dados.perfil} onAtualizado={atualizarPainel} />
            </section>
          </div>

          <SectionTitle subtitle="Tudo o que você já registrou, do mais recente para o mais antigo.">
            Histórico de ações
          </SectionTitle>
          <HistoricoAcoes registros={estado.dados.historico} />

          <ImageZoom
            src="/img/acao.png"
            alt="Como registrar sua ação pelo celular"
            className="mx-auto mt-16 block w-full max-w-[600px] rounded-xl"
          />
        </>
      )}
    </div>
  )
}
