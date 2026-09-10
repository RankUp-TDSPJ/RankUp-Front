import { ContatoForm } from '../components/forms/ContatoForm'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Contato() {
  useDocumentTitle('Contato - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <SectionTitle>Fale com a gente</SectionTitle>
      <ContatoForm />
    </div>
  )
}
