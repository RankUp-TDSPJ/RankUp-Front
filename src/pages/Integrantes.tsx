import { MemberCard } from '../components/integrantes/MemberCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { integrantes } from '../data/integrantes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Integrantes() {
  useDocumentTitle('Equipe - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle subtitle="Grupo 5 — Turma 1TDSPJ">Nossa equipe</SectionTitle>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {integrantes.map((integrante) => (
          <MemberCard key={integrante.slug} integrante={integrante} />
        ))}
      </div>
    </div>
  )
}
