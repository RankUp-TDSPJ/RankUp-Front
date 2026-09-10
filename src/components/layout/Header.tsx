import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { IconMenu } from '../icons'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'
import { NAV_ITEMS } from './navItems'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="bg-white py-[15px] shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
      <div className="relative mx-auto flex w-[90%] max-w-[1100px] items-center justify-between">
        <Link
          to="/"
          className="flex items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
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
                      'text-[15px] transition-colors motion-reduce:transition-none hover:text-[#2A6041]',
                      'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]',
                      isActive ? 'font-bold text-[#2A6041]' : 'text-[#333]',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <Button variant="small" className="hidden lg:inline-flex" onClick={() => navigate('/gamificacao')}>
          Começar agora
        </Button>

        <button
          type="button"
          className="text-2xl text-[#2A6041] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041] lg:hidden"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <IconMenu className="h-6 w-6" />
        </button>

        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  )
}
