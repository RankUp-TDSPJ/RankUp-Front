import { useCallback, useEffect, useRef, useState } from 'react'
import type { DependencyList } from 'react'
import { ApiError } from '../services/api'

export type EstadoRequisicao<T> =
  | { status: 'carregando' }
  | { status: 'sucesso'; dados: T }
  | { status: 'erro'; mensagem: string; codigo: number }

/**
 * Busca dados da API ao montar o componente (e sempre que `deps` mudar).
 * Se o componente sair da tela antes da resposta, a requisição é cancelada.
 */
export function useRequisicao<T>(buscar: (signal: AbortSignal) => Promise<T>, deps: DependencyList) {
  const [estado, setEstado] = useState<EstadoRequisicao<T>>({ status: 'carregando' })
  const [tentativa, setTentativa] = useState(0)
  // recarga silenciosa mantém os dados atuais na tela enquanto busca os novos
  const silenciosoRef = useRef(false)

  useEffect(() => {
    const controller = new AbortController()
    const silencioso = silenciosoRef.current
    silenciosoRef.current = false
    if (!silencioso) setEstado({ status: 'carregando' })

    buscar(controller.signal)
      .then((dados) => setEstado({ status: 'sucesso', dados }))
      .catch((error: unknown) => {
        // numa recarga silenciosa que falha, os dados antigos continuam valendo
        if (controller.signal.aborted || silencioso) return
        setEstado({
          status: 'erro',
          mensagem: error instanceof ApiError ? error.message : 'Não foi possível carregar os dados.',
          codigo: error instanceof ApiError ? error.status : 0,
        })
      })

    return () => controller.abort()
    // `buscar` muda a cada render; quem decide quando buscar de novo é `deps`
  }, [...deps, tentativa])

  const recarregar = useCallback((opcoes?: { silencioso?: boolean }) => {
    silenciosoRef.current = opcoes?.silencioso ?? false
    setTentativa((n) => n + 1)
  }, [])

  return { estado, recarregar }
}
