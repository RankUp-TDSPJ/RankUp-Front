import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { CadastroForm } from '../components/auth/CadastroForm'
import { LoginForm } from '../components/auth/LoginForm'
import { Button } from '../components/ui/Button'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useAuth } from '../hooks/useAuth'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import type { EstadoNavegacao } from '../types'
import type { Usuario } from '../types/api'

type Aba = 'login' | 'cadastro'

const ABAS: { id: Aba; label: string }[] = [
  { id: 'login', label: 'Entrar' },
  { id: 'cadastro', label: 'Criar conta' },
]

const DESTINO_PADRAO = '/gamificacao'

export function Entrar() {
  const [aba, setAba] = useState<Aba>('login')
  const { usuario } = useAuth()
  const navigate = useNavigate()
  const estado = useLocation().state as EstadoNavegacao | null

  useDocumentTitle(aba === 'login' ? 'Entrar - RankUp+' : 'Criar conta - RankUp+')

  function irParaDestino(mensagem: string) {
    const proximoEstado: EstadoNavegacao = { mensagem, tipoMensagem: 'sucesso' }
    navigate(estado?.from ?? DESTINO_PADRAO, { replace: true, state: proximoEstado })
  }

  function aposLogin(logado: Usuario) {
    irParaDestino(`Bem-vindo(a) de volta, ${logado.nome}!`)
  }

  function aposCadastro(criado: Usuario, pediuAdmin: boolean) {
    const avisoAdmin =
      pediuAdmin && criado.tipo !== 'ADMIN' ? ' O código de administrador não era válido, então a conta é comum.' : ''
    irParaDestino(`Conta criada, ${criado.nome}! Registre sua primeira ação.${avisoAdmin}`)
  }

  if (usuario) {
    return (
      <div className="mx-auto flex w-[90%] max-w-[1100px] animate-sobe-fade flex-col items-center gap-6 py-24 text-center motion-reduce:animate-none">
        <h1 className="text-2xl font-bold text-verde-escuro">Você já está conectado como {usuario.nome}</h1>
        <Button to={DESTINO_PADRAO}>Ir para o meu painel</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-[90%] max-w-[480px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle subtitle="Acompanhe seus pontos, registre ações sustentáveis e suba no ranking.">
        {aba === 'login' ? 'Entre na sua conta' : 'Crie sua conta'}
      </SectionTitle>

      <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-white p-1.5 ring-1 ring-borda">
        {ABAS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setAba(item.id)}
            aria-pressed={aba === item.id}
            className={`rounded-lg py-2.5 text-sm font-bold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro ${
              aba === item.id ? 'bg-verde-escuro text-white' : 'text-grafite hover:bg-verde-suave'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {aba === 'login' ? <LoginForm onSucesso={aposLogin} /> : <CadastroForm onSucesso={aposCadastro} />}
    </div>
  )
}
