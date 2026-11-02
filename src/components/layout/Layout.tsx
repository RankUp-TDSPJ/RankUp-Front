import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { MensagemDaRota } from './MensagemDaRota'

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-fundo text-grafite">
      <Header />
      <main className="flex-1">
        <MensagemDaRota />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
