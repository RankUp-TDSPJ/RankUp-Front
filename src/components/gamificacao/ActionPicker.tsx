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
            className={`min-w-[140px] flex-1 rounded-lg border-2 p-[15px] text-center transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041] ${
              isActive
                ? 'border-[#2A6041] bg-[#e8f3ec]'
                : 'border-transparent bg-[#f5f5f5] hover:border-[#4A8B5F]'
            }`}
          >
            <Icon className="mx-auto mb-[6px] h-7 w-7 text-[#2A6041]" />
            <h3 className="font-semibold text-[#333]">{acao.nome}</h3>
          </button>
        )
      })}
    </div>
  )
}
