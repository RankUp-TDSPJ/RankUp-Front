import { Link } from 'react-router-dom'
import { IconGithub, IconLinkedin } from '../icons'
import type { Integrante } from '../../types'

type MemberCardProps = {
  integrante: Integrante
}

export function MemberCard({ integrante }: MemberCardProps) {
  return (
    <div className="w-full rounded-lg bg-white p-6 text-center shadow-md md:w-[220px]">
      <Link
        to={`/integrantes/${integrante.slug}`}
        className="block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
      >
        <div className="mx-auto mb-[15px] h-[100px] w-[100px] overflow-hidden rounded-full bg-gradient-to-br from-[#2A6041] to-[#4A8B5F] sm:h-[120px] sm:w-[120px]">
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className={['h-full w-full object-cover', integrante.fotoClassName].filter(Boolean).join(' ')}
          />
        </div>
        <h3 className="mb-2 font-semibold text-[#333] hover:text-[#2A6041]">{integrante.nome}</h3>
      </Link>
      <p className="mb-[5px] text-sm text-[#666]">
        <strong>RM:</strong> {integrante.rm}
      </p>
      <p className="mb-[5px] text-sm text-[#666]">
        <strong>Turma:</strong> {integrante.turma}
      </p>
      <div className="mt-3 flex justify-center gap-[10px]">
        <a
          href={integrante.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn de ${integrante.nome}`}
          className="text-[#2A6041] hover:text-[#4A8B5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
        >
          <IconLinkedin className="h-5 w-5" />
        </a>
        <a
          href={integrante.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub de ${integrante.nome}`}
          className="text-[#2A6041] hover:text-[#4A8B5F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
        >
          <IconGithub className="h-5 w-5" />
        </a>
      </div>
    </div>
  )
}
