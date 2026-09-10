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
    <div className="mb-3 overflow-hidden rounded-lg bg-white">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={answerId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-[#333] hover:bg-[#f9f9f9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
      >
        {item.pergunta}
        <IconChevronDown
          className={`h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        id={answerId}
        className={`overflow-hidden px-5 text-[#666] transition-[max-height] motion-reduce:transition-none ${
          open ? 'max-h-[200px] pb-4' : 'max-h-0'
        }`}
      >
        <p>{item.resposta}</p>
      </div>
    </div>
  )
}
