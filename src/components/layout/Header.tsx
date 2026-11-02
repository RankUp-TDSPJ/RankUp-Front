import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import type { EstadoNavegacao } from '../../types'
import { IconMenu } from '../icons'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'
import { NAV_ITEMS } from './navItems'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { usuario, sair } = useAuth()

  function handleSair() {
    sair()
    const estado: EstadoNavegacao = { mensagem: 'Você saiu da sua conta.', tipoMensagem: 'info' }
    navigate('/', { state: estado })
  }

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="bg-white py-[15px] shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
      <div className="relative mx-auto flex w-[90%] max-w-[1100px] items-center justify-between">
        <Link
          to="/"
          className="flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
        >
          <img src="/img/logo.png" alt="RankUp+" className="h-[50px]" />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex gap-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    [
                      'text-[15px] transition-colors motion-reduce:transition-none hover:text-verde-escuro',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro',
                      isActive ? 'font-bold text-verde-escuro' : 'text-grafite',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {usuario ? (
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="small" to="/gamificacao">
              Meu painel
            </Button>
            <button
              type="button"
              onClick={handleSair}
              className="text-[13px] font-bold text-cinza transition-colors motion-reduce:transition-none hover:text-verde-escuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro"
            >
              Sair
            </button>
          </div>
        ) : (
          <Button variant="small" className="hidden lg:inline-flex" to="/entrar">
            Entrar
          </Button>
        )}

        <button
          type="button"
          className="text-2xl text-verde-escuro focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-verde-escuro lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <IconMenu className="h-6 w-6" />
        </button>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} logado={Boolean(usuario)} onSair={handleSair} />
      </div>
    </header>
  )
}
