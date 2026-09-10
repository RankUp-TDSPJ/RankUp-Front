import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { IconArrowRight, IconCloud, IconGift, IconLeaf, IconRobot, IconUsers, IconVideo } from '../components/icons'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function Home() {
  useDocumentTitle('RankUp+')

  return (
    <>
      <section className="mx-auto flex w-[90%] max-w-[1100px] animate-sobe-fade flex-col-reverse items-center gap-12 py-16 text-center motion-reduce:animate-none md:flex-row md:py-24 md:text-left">
        <div className="w-full min-w-0 flex-1">
          <h1 className="mb-5 text-[26px] font-bold leading-[1.15] text-verde-escuro sm:text-[32px] md:text-[38px] lg:text-[46px]">
            A rede social que te paga{' '}
            <span className="text-verde-medio">pra cuidar do planeta</span>
          </h1>
          <p className="mx-auto mb-8 max-w-[480px] leading-relaxed text-cinza md:mx-0">
            O RankUp+ é uma rede social gamificada que recompensa ações sustentáveis
            verificadas com pontos conversíveis em benefícios reais.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <Button to="/gamificacao">
              Começar agora <IconArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/sobre" variant="ghost">
              Saiba mais <IconArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative flex w-full min-w-0 flex-1 items-center justify-center">
          <span
            className="absolute h-[240px] w-[240px] rounded-full bg-verde-suave blur-2xl sm:h-[300px] sm:w-[300px]"
            aria-hidden="true"
          />
          <img
            src="/img/planta2.png"
            alt=""
            className="relative h-auto w-full max-w-[240px] sm:max-w-[300px]"
          />
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-[1100px] pb-20">
        <h2 className="mb-3 text-center text-[22px] font-bold text-verde-escuro sm:text-[30px]">
          Como funciona
        </h2>
        <span className="mx-auto mb-10 block h-1 w-12 rounded-full bg-verde-claro" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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

      <section className="mx-auto w-[90%] max-w-[1100px] pb-8">
        <div className="flex flex-col items-center gap-8 rounded-2xl bg-verde-suave p-8 text-center md:flex-row md:gap-10 md:p-10 md:text-left">
          <img src="/img/planta2.png" alt="" className="h-auto w-[88px] shrink-0" />

          <div className="w-full min-w-0 flex-1">
            <h2 className="mb-2 text-[22px] font-bold leading-tight text-verde-escuro">
              Pequenas ações, <span className="text-verde-medio">grandes mudanças.</span>
            </h2>
            <p className="text-sm leading-relaxed text-cinza">
              Junte-se a milhares de pessoas que estão transformando o planeta e sendo recompensadas por isso.
            </p>
          </div>

          <div className="grid w-full shrink-0 grid-cols-3 gap-6 md:w-auto md:gap-8">
            <div className="text-center">
              <IconUsers className="mx-auto mb-2 h-6 w-6 text-verde-escuro" />
              <p className="text-[22px] font-bold leading-none text-verde-escuro">12.548</p>
              <p className="mt-1 text-xs text-cinza">Membros ativos</p>
            </div>
            <div className="text-center">
              <IconLeaf className="mx-auto mb-2 h-6 w-6 text-verde-escuro" />
              <p className="text-[22px] font-bold leading-none text-verde-escuro">85.672</p>
              <p className="mt-1 text-xs text-cinza">Ações realizadas</p>
            </div>
            <div className="text-center">
              <IconCloud className="mx-auto mb-2 h-6 w-6 text-verde-escuro" />
              <p className="text-[22px] font-bold leading-none text-verde-escuro">412 ton</p>
              <p className="mt-1 text-xs text-cinza">CO₂ economizado</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
