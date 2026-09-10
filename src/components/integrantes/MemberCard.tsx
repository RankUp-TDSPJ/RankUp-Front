import { Link } from 'react-router-dom'
import { IconGithub, IconLinkedin } from '../icons'
import type { Integrante } from '../../types'

type MemberCardProps = {
  integrante: Integrante
}

export function MemberCard({ integrante }: MemberCardProps) {
  return (
    <div className="flex h-full w-full flex-col items-center rounded-xl bg-white p-6 text-center ring-1 ring-borda transition duration-200 motion-reduce:transition-none hover:-translate-y-1 hover:shadow-lg hover:ring-verde-claro/40">
      <Link
        to={`/integrantes/${integrante.slug}`}
        className="group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
      >
        <div className="mx-auto mb-4 h-[100px] w-[100px] overflow-hidden rounded-full bg-gradient-to-br from-verde-escuro to-verde-claro ring-2 ring-verde-suave sm:h-[112px] sm:w-[112px]">
          <img
            src={integrante.foto}
            alt={`Foto de ${integrante.nome}`}
            className={['h-full w-full object-cover', integrante.fotoClassName].filter(Boolean).join(' ')}
          />
        </div>
        <h3 className="mb-2 font-semibold leading-snug text-grafite transition-colors motion-reduce:transition-none group-hover:text-verde-escuro">
          {integrante.nome}
        </h3>
      </Link>

      <p className="text-sm text-cinza">RM {integrante.rm}</p>
      <p className="text-sm text-cinza">Turma {integrante.turma}</p>

      <div className="mt-auto flex justify-center gap-2 pt-4">
        <a
          href={integrante.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`LinkedIn de ${integrante.nome}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-verde-suave text-verde-escuro transition-colors motion-reduce:transition-none hover:bg-verde-escuro hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          <IconLinkedin className="h-[18px] w-[18px]" />
        </a>
        <a
          href={integrante.github}
          target="_blank"
          rel="noreferrer"
          aria-label={`GitHub de ${integrante.nome}`}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-verde-suave text-verde-escuro transition-colors motion-reduce:transition-none hover:bg-verde-escuro hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          <IconGithub className="h-[18px] w-[18px]" />
        </a>
      </div>
    </div>
  )
}
