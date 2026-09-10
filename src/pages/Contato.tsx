import { ContatoInfo } from '../components/contato/ContatoInfo'
import { ContatoForm } from '../components/forms/ContatoForm'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Contato() {
  useDocumentTitle('Contato - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle>Fale com a gente</SectionTitle>

      <div className="grid gap-6 lg:grid-cols-[1fr_340px] lg:items-start">
        <ContatoForm />
        <ContatoInfo />
      </div>
    </div>
  )
}
