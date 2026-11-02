import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { EstadoNavegacao } from '../../types'

export function RotaProtegida() {
  const { usuario } = useAuth()
  const location = useLocation()

  if (!usuario) {
    const estado: EstadoNavegacao = {
      from: location.pathname,
      mensagem: 'Faça login para acessar essa página.',
      tipoMensagem: 'info',
    }
    return <Navigate to="/entrar" replace state={estado} />
  }

  return <Outlet />
}
