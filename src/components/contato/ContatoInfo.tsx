import { Link } from 'react-router-dom'
import { IconArrowRight, IconGithub, IconLinkedin } from '../icons'
import { integrantes } from '../../data/integrantes'

const REPOSITORIO = 'https://github.com/RankUp-TDSPJ/RankUp-Front'

export function ContatoInfo() {
  return (
    <aside className="flex flex-col gap-5">
      <div className="rounded-xl bg-white p-6 ring-1 ring-borda">
        <h2 className="mb-2 font-bold text-verde-escuro">Antes de escrever</h2>
        <p className="mb-4 text-sm leading-relaxed text-cinza">
          Dúvidas sobre pontuação, validação por IA e recompensas já estão respondidas nas perguntas
          frequentes.
        </p>
        <Link
          to="/faq"
          className="inline-flex items-center gap-2 rounded text-sm font-bold text-verde-medio transition-colors motion-reduce:transition-none hover:text-verde-escuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          Ver perguntas frequentes
          <IconArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-xl bg-white p-6 ring-1 ring-borda">
        <h2 className="mb-4 font-bold text-verde-escuro">Fale direto com a equipe</h2>
        <ul className="flex flex-col gap-3">
          {integrantes.map((integrante) => (
            <li key={integrante.slug} className="flex items-center justify-between gap-3">
              <Link
                to={`/integrantes/${integrante.slug}`}
                className="rounded text-sm text-grafite transition-colors motion-reduce:transition-none hover:text-verde-escuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
              >
                {integrante.nome}
              </Link>
              <span className="flex shrink-0 gap-1.5">
                <a
                  href={integrante.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`LinkedIn de ${integrante.nome}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-verde-suave text-verde-escuro transition-colors motion-reduce:transition-none hover:bg-verde-escuro hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
                >
                  <IconLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={integrante.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`GitHub de ${integrante.nome}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-verde-suave text-verde-escuro transition-colors motion-reduce:transition-none hover:bg-verde-escuro hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
                >
                  <IconGithub className="h-4 w-4" />
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl bg-verde-suave p-6">
        <h2 className="mb-2 font-bold text-verde-escuro">O projeto</h2>
        <p className="mb-4 text-sm leading-relaxed text-cinza">
          Challenge FIAP 2026 — 2º Semestre · Turma 1TDSPJ · Grupo 5
        </p>
        <a
          href={REPOSITORIO}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded text-sm font-bold text-verde-medio transition-colors motion-reduce:transition-none hover:text-verde-escuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          <IconGithub className="h-4 w-4" />
          Repositório no GitHub
        </a>
      </div>
    </aside>
  )
}
