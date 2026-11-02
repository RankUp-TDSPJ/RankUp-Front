import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { UsuarioResumo } from '../../types/api'
import { formatarNumero } from '../../utils/formatadores'

type UsuarioAdminItemProps = {
  usuario: UsuarioResumo
  ehVoce: boolean
  onExcluir: (usuario: UsuarioResumo) => Promise<void>
}

const botaoBase =
  'rounded-md border-2 px-3 py-1.5 text-[13px] font-bold transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro disabled:cursor-wait disabled:opacity-70'

export function UsuarioAdminItem({ usuario, ehVoce, onExcluir }: UsuarioAdminItemProps) {
  const [confirmando, setConfirmando] = useState(false)
  const [excluindo, setExcluindo] = useState(false)

  async function confirmar() {
    setExcluindo(true)
    try {
      await onExcluir(usuario)
    } finally {
      // se deu certo o item some da lista; se deu erro, volta ao normal para tentar de novo
      setExcluindo(false)
      setConfirmando(false)
    }
  }

  return (
    <li className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
      <div className="min-w-0">
        <p className="flex flex-wrap items-center gap-2 font-semibold text-grafite">
          <span className="break-all">{usuario.nome}</span>
          {usuario.tipo === 'ADMIN' && (
            <span className="rounded-full bg-verde-escuro px-2 py-0.5 text-[11px] font-bold text-white">Admin</span>
          )}
          {ehVoce && <span className="text-sm font-normal text-cinza">(você)</span>}
        </p>
        <p className="break-all text-sm text-cinza">
          #{usuario.id} · {usuario.email} · {usuario.idade} anos · {formatarNumero(usuario.pontuacaoTotal)} pts
        </p>
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        {confirmando ? (
          <>
            <span className="text-sm font-medium text-red-700">Excluir {usuario.nome}?</span>
            <button
              type="button"
              onClick={confirmar}
              disabled={excluindo}
              className={`${botaoBase} border-red-600 bg-red-600 text-white hover:bg-red-700`}
            >
              {excluindo ? 'Excluindo...' : 'Sim, excluir'}
            </button>
            <button
              type="button"
              onClick={() => setConfirmando(false)}
              disabled={excluindo}
              className={`${botaoBase} border-borda-forte bg-white text-grafite hover:bg-fundo`}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <Link
              to={`/ranking/${usuario.id}`}
              className={`${botaoBase} border-verde-escuro bg-white text-verde-escuro hover:bg-verde-suave`}
            >
              Ver perfil
            </Link>
            <button
              type="button"
              onClick={() => setConfirmando(true)}
              disabled={ehVoce}
              title={ehVoce ? 'Você não pode excluir a própria conta por aqui' : undefined}
              aria-label={`Excluir ${usuario.nome}`}
              className={`${botaoBase} border-red-600 bg-white text-red-700 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40`}
            >
              Excluir
            </button>
          </>
        )}
      </div>
    </li>
  )
}
