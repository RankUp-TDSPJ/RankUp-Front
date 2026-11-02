import { IconBulb, IconBus, IconLeaf, IconRecycle, IconTree } from '../icons'
import type { IconProps } from '../icons'
import type { AcaoIcone } from '../../types'
import type { AcaoSustentavel } from '../../types/api'
import { formatarNumero } from '../../utils/formatadores'

type ActionPickerProps = {
  acoes: AcaoSustentavel[]
  selecionada: string | null
  onSelect: (nomeAcao: string) => void
}

const ICONS: Record<AcaoIcone, (props: IconProps) => JSX.Element> = {
  tree: IconTree,
  recycle: IconRecycle,
  bus: IconBus,
  bulb: IconBulb,
  leaf: IconLeaf,
}

// a API não manda ícone, então ele sai do nome; ação nova cai na folha
function iconeDaAcao(nome: string): AcaoIcone {
  const texto = nome.toLowerCase()
  if (texto.includes('transporte')) return 'bus'
  if (texto.includes('recicl')) return 'recycle'
  if (texto.includes('energia')) return 'bulb'
  if (texto.includes('rvore') || texto.includes('plant')) return 'tree'
  return 'leaf'
}

// "viagens" → "viagem", "horas" → "hora", "kg" → "kg"
function singular(unidade: string) {
  if (unidade.endsWith('ns')) return `${unidade.slice(0, -2)}m`
  if (unidade.endsWith('s')) return unidade.slice(0, -1)
  return unidade
}

export function ActionPicker({ acoes, selecionada, onSelect }: ActionPickerProps) {
  return (
    <div className="flex flex-wrap gap-3" role="group" aria-label="Escolha uma ação">
      {acoes.map((acao) => {
        const Icon = ICONS[iconeDaAcao(acao.nome)]
        const isActive = acao.nome === selecionada

        return (
          <button
            key={acao.nome}
            type="button"
            onClick={() => onSelect(acao.nome)}
            aria-pressed={isActive}
            title={acao.descricao}
            className={`min-w-[140px] flex-1 rounded-xl border-2 p-4 text-center transition duration-200 motion-reduce:transition-none active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro ${
              isActive
                ? 'border-verde-escuro bg-verde-suave shadow-sm'
                : 'border-borda bg-fundo hover:-translate-y-0.5 hover:border-verde-medio hover:bg-white'
            }`}
          >
            <span
              className={`mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors motion-reduce:transition-none ${
                isActive ? 'bg-verde-escuro text-white' : 'bg-verde-suave text-verde-escuro'
              }`}
            >
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="text-sm font-semibold text-grafite">{acao.nome}</h3>
            <p className="mt-1 text-xs text-cinza">
              {formatarNumero(acao.pontosPorAcao)} pts por {singular(acao.unidade)}
            </p>
          </button>
        )
      })}
    </div>
  )
}
