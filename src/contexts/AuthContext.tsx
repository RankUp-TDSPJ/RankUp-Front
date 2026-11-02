import { createContext, useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { cadastrarUsuario, login } from '../services/usuarioService'
import type { CadastroUsuarioRequest, Usuario } from '../types/api'

const CHAVE_SESSAO = 'rankup:usuario'

export interface AuthContextValue {
  usuario: Usuario | null
  ehAdmin: boolean
  entrar: (email: string) => Promise<Usuario>
  cadastrar: (dados: CadastroUsuarioRequest) => Promise<Usuario>
  atualizarSessao: (usuario: Usuario) => void
  sair: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)

// o navegador pode bloquear o localStorage (aba anônima, por exemplo), então nunca deixa o erro subir
function lerSessao(): Usuario | null {
  try {
    const salvo = localStorage.getItem(CHAVE_SESSAO)
    return salvo ? (JSON.parse(salvo) as Usuario) : null
  } catch {
    return null
  }
}

function salvarSessao(usuario: Usuario | null) {
  try {
    if (usuario) localStorage.setItem(CHAVE_SESSAO, JSON.stringify(usuario))
    else localStorage.removeItem(CHAVE_SESSAO)
  } catch {
    // sem localStorage o login continua funcionando, só não sobrevive ao F5
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(lerSessao)

  // salva junto com a troca de estado (e não num useEffect) para um F5 logo após o login não perder a sessão
  const trocarUsuario = useCallback((novo: Usuario | null) => {
    salvarSessao(novo)
    setUsuario(novo)
  }, [])

  const entrar = useCallback(
    async (email: string) => {
      const logado = await login({ email })
      trocarUsuario(logado)
      return logado
    },
    [trocarUsuario],
  )

  const cadastrar = useCallback(
    async (dados: CadastroUsuarioRequest) => {
      const criado = await cadastrarUsuario(dados)
      trocarUsuario(criado)
      return criado
    },
    [trocarUsuario],
  )

  const sair = useCallback(() => trocarUsuario(null), [trocarUsuario])

  const value = useMemo<AuthContextValue>(
    () => ({
      usuario,
      ehAdmin: usuario?.tipo === 'ADMIN',
      entrar,
      cadastrar,
      atualizarSessao: trocarUsuario,
      sair,
    }),
    [usuario, entrar, cadastrar, sair, trocarUsuario],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
