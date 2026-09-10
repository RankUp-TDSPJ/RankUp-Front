import { Link } from 'react-router-dom'
import { integrantes } from '../../data/integrantes'
import { NAV_ITEMS } from './navItems'

export function Footer() {
  return (
    <footer className="mt-16 bg-verde-escuro text-white">
      <div className="mx-auto grid w-[90%] max-w-[1100px] gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1fr_auto_auto] lg:justify-between lg:gap-20">
        <div className="max-w-[320px]">
          <img src="/img/logo.png" alt="RankUp+" className="mb-4 h-10 brightness-0 invert" />
          <p className="text-sm leading-relaxed text-white/80">
            A rede social que recompensa ações sustentáveis verificadas com pontos conversíveis em
            benefícios reais.
          </p>
        </div>

        <nav>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">Navegação</h2>
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded text-sm text-white/80 transition-colors motion-reduce:transition-none hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-wide text-white/60">Equipe</h2>
          <ul className="flex flex-col gap-2">
            {integrantes.map((integrante) => (
              <li key={integrante.slug}>
                <Link
                  to={`/integrantes/${integrante.slug}`}
                  className="rounded text-sm text-white/80 transition-colors motion-reduce:transition-none hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {integrante.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-[90%] max-w-[1100px] flex-col gap-1 py-6 text-center text-xs text-white/60 sm:flex-row sm:justify-between sm:text-left">
          <p>RankUp+ · 2026</p>
          <p>Challenge FIAP 2026 — 2º Semestre · Turma 1TDSPJ</p>
        </div>
      </div>
    </footer>
  )
}
