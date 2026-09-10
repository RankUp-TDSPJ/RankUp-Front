import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useScrollLock } from '../../hooks/useScrollLock'
import { IconClose } from '../icons'
import { NAV_ITEMS } from './navItems'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  useScrollLock(open)

  useEffect(() => {
    if (!open) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="absolute right-0 top-[60px] z-50 flex w-[200px] flex-col gap-4 rounded-md bg-white p-5 shadow-[0_4px_8px_rgba(0,0,0,0.1)] lg:hidden">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar menu"
        className="self-end text-[#2A6041] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]"
      >
        <IconClose className="h-5 w-5" />
      </button>
      <ul className="flex flex-col gap-[15px]">
        {NAV_ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  'text-[15px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2A6041]',
                  isActive ? 'font-bold text-[#2A6041]' : 'text-[#333]',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
