import type { Acao } from '../../types'

type PointsResultProps = {
  acao: Acao | null
}

export function PointsResult({ acao }: PointsResultProps) {
  if (!acao) return null

  return (
    <div className="rounded-lg bg-gradient-to-br from-[#2A6041] to-[#4A8B5F] p-[25px] text-center text-white">
      <p>Você ganharia</p>
      <p className="my-[10px] text-[32px] font-bold sm:text-[42px]">{acao.pontos}</p>
      <p>pontos com essa ação!</p>
    </div>
  )
}
