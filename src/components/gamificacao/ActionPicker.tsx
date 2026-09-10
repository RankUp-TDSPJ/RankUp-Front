import { IconBulb, IconBus, IconRecycle, IconTree } from '../icons'
import type { IconProps } from '../icons'
import type { Acao, AcaoIcone } from '../../types'

type ActionPickerProps = {
  acoes: Acao[]
  selectedId: string | null
  onSelect: (id: string) => void
}

const ICONS: Record<AcaoIcone, (props: IconProps) => JSX.Element> = {
  tree: IconTree,
  recycle: IconRecycle,
  bus: IconBus,
  bulb: IconBulb,
}

export function ActionPicker({ acoes, selectedId, onSelect }: ActionPickerProps) {
  return (
    <div className="mb-5 flex flex-wrap gap-3">
      {acoes.map((acao) => {
        const Icon = ICONS[acao.icone]
        const isActive = acao.id === selectedId

        return (
          <button
            key={acao.id}
            type="button"
            onClick={() => onSelect(acao.id)}
            aria-pressed={isActive}
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
          </button>
        )
      })}
    </div>
  )
}
