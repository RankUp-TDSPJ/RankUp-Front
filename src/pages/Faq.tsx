import { FaqAccordion } from '../components/faq/FaqAccordion'
import { SectionTitle } from '../components/ui/SectionTitle'
import { faq } from '../data/faq'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Faq() {
  useDocumentTitle('FAQ - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <SectionTitle>Perguntas frequentes</SectionTitle>
      <FaqAccordion items={faq} />
    </div>
  )
}
