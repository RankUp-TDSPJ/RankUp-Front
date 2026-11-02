import { Route, Routes } from 'react-router-dom'
import { RotaProtegida } from './components/auth/RotaProtegida'
import { Layout } from './components/layout/Layout'
import { Admin } from './pages/Admin'
import { Contato } from './pages/Contato'
import { Entrar } from './pages/Entrar'
import { Faq } from './pages/Faq'
import { Gamificacao } from './pages/Gamificacao'
import { Home } from './pages/Home'
import { IntegranteDetalhe } from './pages/IntegranteDetalhe'
import { Integrantes } from './pages/Integrantes'
import { NotFound } from './pages/NotFound'
import { Ranking } from './pages/Ranking'
import { RankingDetalhe } from './pages/RankingDetalhe'
import { Sobre } from './pages/Sobre'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/integrantes/:slug" element={<IntegranteDetalhe />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/ranking/:id" element={<RankingDetalhe />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route element={<RotaProtegida />}>
          <Route path="/gamificacao" element={<Gamificacao />} />
        </Route>
        <Route element={<RotaProtegida somenteAdmin />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
