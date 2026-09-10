import { useState } from 'react'
import { IconChevronDown } from '../icons'
import type { FaqItemData } from '../../types'

type FaqItemProps = {
  item: FaqItemData
}

export function FaqItem({ item }: FaqItemProps) {
  const [open, setOpen] = useState(false)
  const answerId = `faq-resposta-${item.id}`

  return (
    <div
      className={`mb-3 overflow-hidden rounded-xl bg-white ring-1 transition duration-200 motion-reduce:transition-none ${
        open ? 'ring-verde-claro/50' : 'ring-borda'
      }`}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-grafite transition-colors motion-reduce:transition-none hover:bg-verde-suave/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
      >
        {item.pergunta}
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition duration-200 motion-reduce:transition-none ${
            open ? 'rotate-180 bg-verde-escuro text-white' : 'bg-verde-suave text-verde-escuro'
          }`}
        >
          <IconChevronDown className="h-4 w-4" />
        </span>
      </button>
      {/* grid-rows de 0fr para 1fr anima a altura real da resposta, sem max-height chutado */}
      <div
        id={answerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-4 leading-relaxed text-cinza">{item.resposta}</p>
        </div>
      </div>
    </div>
  )
}
