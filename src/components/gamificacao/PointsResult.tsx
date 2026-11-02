import type { AcaoSustentavel } from '../../types/api'
import { formatarCO2, formatarNumero } from '../../utils/formatadores'

type PointsResultProps = {
  acao: AcaoSustentavel | null
  quantidade: number
}

// prévia calculada com os valores que vieram de GET /acoes; quem grava de verdade é a API
export function PointsResult({ acao, quantidade }: PointsResultProps) {
  if (!acao) return null

  const quantidadeValida = Number.isFinite(quantidade) && quantidade > 0 ? quantidade : 1

  return (
    <div
      // key força a animação a rodar de novo a cada troca de ação
      key={acao.nome}
      className="animate-sobe-fade rounded-xl bg-gradient-to-br from-verde-escuro to-verde-claro p-6 text-center text-white shadow-lg shadow-verde-escuro/20 motion-reduce:animate-none"
      aria-live="polite"
    >
      <p className="text-sm text-white/80">Você vai ganhar</p>
      <p className="my-1 text-[40px] font-bold leading-none sm:text-[52px]">
        {formatarNumero(acao.pontosPorAcao * quantidadeValida)}
      </p>
      <p className="text-sm text-white/80">
        pontos e evitar {formatarCO2(acao.fatorCO2 * quantidadeValida)} de CO₂
      </p>
    </div>
  )
}
