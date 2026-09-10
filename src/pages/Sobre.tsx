import { ImageZoom } from '../components/ui/ImageZoom'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Sobre() {
  useDocumentTitle('Sobre - RankUp+')

  return (
    <div className="mx-auto w-[90%] max-w-[1100px] animate-sobe-fade py-16 motion-reduce:animate-none">
      <SectionTitle>Sobre o projeto</SectionTitle>

      <div className="mb-[30px] rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8">
        <p className="mb-[15px] leading-relaxed text-grafite">
          <strong>O problema:</strong> Os usuários passam horas por dia em redes sociais como TikTok e
          Instagram, mas 100% do valor que eles geram fica com as plataformas. Além disso, mesmo com
          interesse em sustentabilidade, falta um incentivo concreto pra adotar ações do dia a dia.
        </p>
        <p className="mb-[15px] leading-relaxed text-grafite">
          <strong>Nossa solução:</strong> O RankUp+ é uma rede social gamificada que recompensa ações
          sustentáveis verificadas com pontos. O usuário grava um vídeo da ação (plantar uma árvore,
          reciclar, usar transporte público), nossa IA valida o impacto em CO₂, e os pontos viram cupons
          em parceiros ESG, doações a ONGs (SOS Mata Atlântica, WWF, Instituto Akatu) ou benefícios
          financeiros.
        </p>
        <p className="mb-[15px] leading-relaxed text-grafite">
          <strong>Público-alvo:</strong> Jovens adultos entre 18 e 34 anos, residentes em São Paulo, que
          já usam redes sociais e têm interesse em sustentabilidade, mas buscam também retorno financeiro
          e privacidade.
        </p>
        <p className="leading-relaxed text-grafite">
          <strong>Tecnologias usadas neste site:</strong> React, Vite, TypeScript e TailwindCSS, com
          React Router DOM para navegação e React Hook Form no formulário de contato. Ícones em SVG
          próprios, sem bibliotecas externas.
        </p>
      </div>

      <SectionTitle>Roadmap</SectionTitle>

      <div className="mb-[30px] rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8">
        <ImageZoom
          src="/img/roadmap.png"
          alt="Roadmap do projeto: registro, validação por IA, ranking, impacto e mundo sustentável"
          className="block h-auto w-full"
        />
      </div>

      <SectionTitle>Como a plataforma funciona</SectionTitle>

      <ul className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8">
        <li className="border-b border-borda py-3">
          <strong className="text-verde-escuro">1. Captura e validação:</strong> usuário grava vídeo, IA
          reconhece a ação via visão computacional, valida geolocalização e metadados.
        </li>
        <li className="border-b border-borda py-3">
          <strong className="text-verde-escuro">2. Cálculo de impacto:</strong> cada ação validada vira
          pontos, calculados pelo equivalente em CO₂ economizado.
        </li>
        <li className="border-b border-borda py-3">
          <strong className="text-verde-escuro">3. Ranking em tempo real:</strong> usuário acompanha a sua
          posição no ranking diário, semanal e mensal.
        </li>
        <li className="py-3">
          <strong className="text-verde-escuro">4. Recompensas:</strong> pontos viram cupons em parceiros
          ESG, doações a ONGs ou benefícios financeiros via carteira digital.
        </li>
      </ul>
    </div>
  )
}
