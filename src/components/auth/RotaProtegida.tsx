import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { EstadoNavegacao } from '../../types'

type RotaProtegidaProps = {
  /** além de logado, exige que o usuário seja ADMIN */
  somenteAdmin?: boolean
}

export function RotaProtegida({ somenteAdmin = false }: RotaProtegidaProps) {
  const { usuario, ehAdmin } = useAuth()
  const location = useLocation()

  if (!usuario) {
    const estado: EstadoNavegacao = {
      from: location.pathname,
      mensagem: 'Faça login para acessar essa página.',
      tipoMensagem: 'info',
    }
    return <Navigate to="/entrar" replace state={estado} />
  }

  if (somenteAdmin && !ehAdmin) {
    const estado: EstadoNavegacao = { mensagem: 'Essa área é só para administradores.', tipoMensagem: 'erro' }
    return <Navigate to="/gamificacao" replace state={estado} />
  }

  return <Outlet />
}
