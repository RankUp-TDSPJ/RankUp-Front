import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFound() {
  useDocumentTitle('Página não encontrada - RankUp+')
  const navigate = useNavigate()

  return (
    <div className="mx-auto flex w-[90%] max-w-[1100px] animate-sobe-fade flex-col items-center gap-6 py-24 text-center motion-reduce:animate-none">
      <h1 className="text-3xl font-bold text-verde-escuro">404 — Página não encontrada</h1>
      <p className="text-cinza">A página que você procura não existe ou foi movida.</p>
      <Button onClick={() => navigate('/')}>Voltar para a Home</Button>
    </div>
  )
}
