import { FaqItem } from './FaqItem'
import type { FaqItemData } from '../../types'

type FaqAccordionProps = {
  items: FaqItemData[]
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div>
      {items.map((item) => (
        <FaqItem key={item.id} item={item} />
      ))}
    </div>
  )
}
