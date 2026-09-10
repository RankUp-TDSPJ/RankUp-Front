import { MemberCard } from '../components/integrantes/MemberCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { integrantes } from '../data/integrantes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Integrantes() {
  useDocumentTitle('Equipe - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <SectionTitle>Nossa equipe</SectionTitle>

      <div className="flex flex-wrap justify-center gap-5">
        {integrantes.map((integrante) => (
          <MemberCard key={integrante.slug} integrante={integrante} />
        ))}
      </div>
    </div>
  )
}
