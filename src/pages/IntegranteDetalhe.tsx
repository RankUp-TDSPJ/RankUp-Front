import { useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { IconGithub, IconLinkedin } from '../components/icons'
import { integrantes } from '../data/integrantes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function IntegranteDetalhe() {
  const { slug } = useParams<{ slug: string }>()
  const integrante = integrantes.find((i) => i.slug === slug)

  useDocumentTitle(integrante ? `${integrante.nome} - Equipe - RankUp+` : 'Integrante não encontrado - RankUp+')

  if (!integrante) {
    return (
      <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col items-center gap-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#2A6041]">Integrante não encontrado</h1>
        <p className="text-[#666]">Não encontramos esse integrante na equipe.</p>
        <Button to="/integrantes">Voltar para a equipe</Button>
      </div>
    )
  }

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <Button to="/integrantes" variant="ghost" className="mb-8">
        Voltar para a equipe
      </Button>

      <div className="mx-auto max-w-[400px] rounded-lg bg-white p-8 text-center shadow-md">
        <div className="mx-auto mb-5 h-[160px] w-[160px] overflow-hidden rounded-full bg-gradient-to-br from-[#2A6041] to-[#4A8B5F]">
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className={['h-full w-full object-cover', integrante.fotoClassName].filter(Boolean).join(' ')}
          />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-[#2A6041]">{integrante.nome}</h1>
        <p className="mb-1 text-[#666]">
          <strong>RM:</strong> {integrante.rm}
        </p>
        <p className="mb-4 text-[#666]">
          <strong>Turma:</strong> {integrante.turma}
        </p>
        <div className="flex justify-center gap-3">
          <a
            href={integrante.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`LinkedIn de ${integrante.nome}`}
            className="text-[#2A6041] hover:text-[#4A8B5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
          >
            <IconLinkedin className="h-6 w-6" />
          </a>
          <a
            href={integrante.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub de ${integrante.nome}`}
            className="text-[#2A6041] hover:text-[#4A8B5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
          >
            <IconGithub className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}
