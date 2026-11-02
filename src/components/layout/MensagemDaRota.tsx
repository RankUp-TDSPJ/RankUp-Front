import { useLocation, useNavigate } from 'react-router-dom'
import type { EstadoNavegacao } from '../../types'
import { Alerta } from '../ui/Alerta'

// mostra o recado que a página anterior deixou ao redirecionar (ex.: "Você saiu da sua conta")
export function MensagemDaRota() {
  const location = useLocation()
  const navigate = useNavigate()
  const estado = location.state as EstadoNavegacao | null

  if (!estado?.mensagem) return null

  function fechar() {
    navigate(location.pathname, { replace: true, state: { ...estado, mensagem: undefined } })
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] pt-6">
      <Alerta tipo={estado.tipoMensagem} onFechar={fechar}>
        {estado.mensagem}
      </Alerta>
    </div>
  )
}
