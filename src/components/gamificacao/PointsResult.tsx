import type { Acao } from '../../types'

type PointsResultProps = {
  acao: Acao | null
}

export function PointsResult({ acao }: PointsResultProps) {
  if (!acao) return null

  return (
    <div
      // key força a animação a rodar de novo a cada troca de ação
      key={acao.id}
      className="animate-sobe-fade rounded-xl bg-gradient-to-br from-verde-escuro to-verde-claro p-6 text-center text-white shadow-lg shadow-verde-escuro/20 motion-reduce:animate-none"
      aria-live="polite"
    >
      <p className="text-sm text-white/80">Você ganharia</p>
      <p className="my-1 text-[40px] font-bold leading-none sm:text-[52px]">{acao.pontos}</p>
      <p className="text-sm text-white/80">pontos com essa ação!</p>
    </div>
  )
}
