import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { IconArrowRight, IconCloud, IconGift, IconLeaf, IconRobot, IconUsers, IconVideo } from '../components/icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Home() {
  useDocumentTitle('RankUp+')

  return (
    <>
      <section className="mx-auto flex w-[90%] max-w-[1100px] flex-col-reverse items-center gap-10 py-10 text-center sm:py-10 md:flex-row md:py-[60px] md:text-left">
        <div className="w-full min-w-0 flex-1">
          <h1 className="mb-[18px] text-[22px] font-bold leading-[1.15] text-[#2A6041] sm:text-[26px] md:text-[32px] lg:text-[42px]">
            A rede social que te paga{' '}
            <span className="text-[#4A8B5F]">pra cuidar do planeta</span>
          </h1>
          <p className="mx-auto mb-7 max-w-[480px] text-base leading-relaxed text-[#666] md:mx-0">
            O RankUp+ é uma rede social gamificada que recompensa ações sustentáveis
            verificadas com pontos conversíveis em benefícios reais.
          </p>
          <div className="flex flex-wrap justify-center gap-[14px] md:justify-start">
            <Button to="/gamificacao">
              Começar agora <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/sobre" variant="ghost">
              Saiba mais <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex w-full min-w-0 flex-1 justify-center">
          <img src="/img/logo.png" alt="" className="h-auto max-w-[280px] md:max-w-full" />
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1100px] py-8">
        <h2 className="mb-[30px] text-center text-[20px] font-bold text-[#2A6041] sm:text-[28px]">
          Como funciona
        </h2>

        <div className="flex flex-wrap justify-between gap-5">
          <Card icon={<IconVideo className="h-[22px] w-[22px]" />} title="Grave a sua ação">
            Plantou uma árvore? Reciclou? Usou transporte público? Grave um vídeo curto da sua ação.
          </Card>
          <Card icon={<IconRobot className="h-[22px] w-[22px]" />} title="IA valida o impacto">
            Nosso sistema usa visão computacional para verificar a ação e calcular o CO₂ economizado.
          </Card>
          <Card icon={<IconGift className="h-[22px] w-[22px]" />} title="Troque por recompensa">
            Acumule pontos e troque por cupons em parceiros ESG, doações a ONGs ou benefícios financeiros.
          </Card>
        </div>
      </section>

      <section className="mx-auto mb-[50px] w-[90%] max-w-[1100px]">
        <div className="flex flex-col flex-wrap items-center gap-[30px] rounded-xl bg-[#e8f3ec] p-[30px] text-center md:flex-row md:text-left">
          <img src="/img/planta2.png" alt="" className="w-[100px] shrink-0" />

          <div className="w-full min-w-[220px] flex-1">
            <h2 className="mb-2 text-[22px] font-bold text-[#2A6041]">
              Pequenas ações, <span className="text-[#4A8B5F]">grandes mudanças.</span>
            </h2>
            <p className="text-sm leading-relaxed text-[#666]">
              Junte-se a milhares de pessoas que estão transformando o planeta e sendo recompensadas por isso.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[30px] md:flex-nowrap md:justify-start">
            <div className="text-center">
              <IconUsers className="mx-auto mb-1 h-[22px] w-[22px] text-[#2A6041]" />
              <p className="text-[22px] font-bold text-[#2A6041]">12.548</p>
              <p className="text-xs text-[#666]">Membros ativos</p>
            </div>
            <div className="text-center">
              <IconLeaf className="mx-auto mb-1 h-[22px] w-[22px] text-[#2A6041]" />
              <p className="text-[22px] font-bold text-[#2A6041]">85.672</p>
              <p className="text-xs text-[#666]">Ações realizadas</p>
            </div>
            <div className="text-center">
              <IconCloud className="mx-auto mb-1 h-[22px] w-[22px] text-[#2A6041]" />
              <p className="text-[22px] font-bold text-[#2A6041]">412 ton</p>
              <p className="text-xs text-[#666]">CO₂ economizado</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
