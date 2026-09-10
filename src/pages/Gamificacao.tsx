import { useState } from 'react'
import { ActionPicker } from '../components/gamificacao/ActionPicker'
import { PointsResult } from '../components/gamificacao/PointsResult'
import { StatCard } from '../components/gamificacao/StatCard'
import { ImageZoom } from '../components/ui/ImageZoom'
import { SectionTitle } from '../components/ui/SectionTitle'
import { acoes } from '../data/acoes'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Gamificacao() {
  useDocumentTitle('Gamificação - RankUp+')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const acaoSelecionada = acoes.find((acao) => acao.id === selectedId) ?? null

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] py-12">
      <SectionTitle>Meu painel</SectionTitle>

      <div className="mb-10 flex flex-wrap gap-5">
        <StatCard value="320" label="Pontos acumulados" />
        <StatCard value="12" label="Ações realizadas" />
        <StatCard value="48 kg" label="CO₂ economizado" />
        <StatCard value="#28" label="Posição no ranking" />
      </div>

      <SectionTitle subtitle="Escolha uma ação e veja quantos pontos você ganharia.">
        Simulador de pontos
      </SectionTitle>

      <div className="rounded-lg bg-white p-[30px]">
        <ActionPicker acoes={acoes} selectedId={selectedId} onSelect={setSelectedId} />
        <PointsResult acao={acaoSelecionada} />
      </div>

      <ImageZoom
        src="/img/acao.png"
        alt="Como registrar sua ação pelo celular"
        className="mx-auto mt-10 block w-full max-w-[600px] rounded-lg"
      />
    </div>
  )
}
