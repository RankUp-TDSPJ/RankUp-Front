import { useState } from 'react'
import { UsuarioAdminItem } from '../components/admin/UsuarioAdminItem'
import { inputClasses } from '../components/forms/estilos'
import { Alerta } from '../components/ui/Alerta'
import { Carregando } from '../components/ui/Carregando'
import { ErroCarregamento } from '../components/ui/ErroCarregamento'
import { EstadoVazio } from '../components/ui/EstadoVazio'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useRequisicao } from '../hooks/useRequisicao'
import { ApiError } from '../services/api'
import { excluirUsuario, listarUsuarios } from '../services/usuarioService'
import type { TipoMensagem } from '../types'
import type { UsuarioResumo } from '../types/api'

export function Admin() {
  useDocumentTitle('Administração - RankUp+')
  const { usuario } = useAuth()
  // a rota só abre para admin logado
  const idAdmin = usuario?.id ?? 0
  const { estado, recarregar } = useRequisicao((signal) => listarUsuarios(idAdmin, signal), [idAdmin])
  const [busca, setBusca] = useState('')
  const [aviso, setAviso] = useState<{ tipo: TipoMensagem; texto: string } | null>(null)
  // some da lista na hora, sem esperar a recarga terminar
  const [excluidos, setExcluidos] = useState<number[]>([])

  async function excluir(alvo: UsuarioResumo) {
    setAviso(null)
    try {
      await excluirUsuario(idAdmin, alvo.id)
      setExcluidos((ids) => [...ids, alvo.id])
      setAviso({ tipo: 'sucesso', texto: `${alvo.nome} foi excluído, junto com o histórico de ações.` })
      recarregar({ silencioso: true })
    } catch (error) {
      setAviso({
        tipo: 'erro',
        texto: error instanceof ApiError ? error.message : `Não foi possível excluir ${alvo.nome}. Tente novamente.`,
      })
    }
  }

  const termo = busca.trim().toLowerCase()
  const todos = estado.status === 'sucesso' ? estado.dados.filter((u) => !excluidos.includes(u.id)) : []
  const usuarios = todos.filter((u) => u.nome.toLowerCase().includes(termo) || u.email.toLowerCase().includes(termo))

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle subtitle="Veja todos os usuários cadastrados e remova contas quando necessário.">
        Administração
      </SectionTitle>

      {estado.status === 'carregando' && <Carregando texto="Carregando os usuários..." />}

      {estado.status === 'erro' && <ErroCarregamento mensagem={estado.mensagem} onTentarNovamente={recarregar} />}

      {estado.status === 'sucesso' && (
        <>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-cinza">
              {todos.length} usuários · {todos.filter((u) => u.tipo === 'ADMIN').length} administradores
            </p>
            <label className="w-full sm:max-w-[320px]">
              <span className="sr-only">Buscar por nome ou e-mail</span>
              <input
                type="search"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                placeholder="Buscar por nome ou e-mail"
                className={inputClasses(false)}
              />
            </label>
          </div>

          {aviso && (
            <Alerta tipo={aviso.tipo} onFechar={() => setAviso(null)} className="mb-6">
              {aviso.texto}
            </Alerta>
          )}

          {usuarios.length === 0 ? (
            <EstadoVazio titulo={termo ? 'Nenhum usuário encontrado' : 'Nenhum usuário cadastrado'}>
              {termo ? 'Tente buscar por outro nome ou e-mail.' : undefined}
            </EstadoVazio>
          ) : (
            <ul className="divide-y divide-borda rounded-xl bg-white ring-1 ring-borda">
              {usuarios.map((item) => (
                <UsuarioAdminItem key={item.id} usuario={item} ehVoce={item.id === idAdmin} onExcluir={excluir} />
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
