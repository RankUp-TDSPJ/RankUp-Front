import type { FaqItemData } from '../types'

export const faq: FaqItemData[] = [
  {
    id: '1',
    pergunta: 'Como eu ganho pontos no RankUp+?',
    resposta:
      'Você grava um vídeo curto de uma ação sustentável (plantar uma árvore, reciclar, usar transporte público, economizar energia) e envia pelo app. Nossa IA valida a ação e libera os pontos.',
  },
  {
    id: '2',
    pergunta: 'Como o sistema valida as ações?',
    resposta:
      'Usamos visão computacional (Google Cloud Video AI) para reconhecer a ação no vídeo, validação de geolocalização e metadados. Em casos com baixa confiança, a submissão passa por revisão humana.',
  },
  {
    id: '3',
    pergunta: 'O que eu posso fazer com os pontos?',
    resposta:
      'Você pode trocar por cupons em parceiros ESG (como a Natura), doar para ONGs (SOS Mata Atlântica, WWF, Instituto Akatu) ou converter em benefícios financeiros via carteira digital.',
  },
  {
    id: '4',
    pergunta: 'Como eu sei o impacto real das minhas ações?',
    resposta:
      'Cada ação validada é convertida em quilos de CO₂ economizado, usando dados da Climatiq API. Você acompanha esse histórico no seu painel.',
  },
  {
    id: '5',
    pergunta: 'Meus dados estão seguros?',
    resposta:
      'Sim. O RankUp+ segue a LGPD e você tem controle total sobre seus dados, histórico e permissões a qualquer momento.',
  },
  {
    id: '6',
    pergunta: 'O app é gratuito?',
    resposta:
      'Sim, o cadastro e o uso básico são gratuitos (modelo freemium). Tem também um plano premium com mais benefícios.',
  },
  {
    id: '7',
    pergunta: 'Existe ranking entre os usuários?',
    resposta:
      'Sim. Você acompanha sua posição no ranking diário, semanal e mensal, podendo competir com amigos e outros usuários.',
  },
]
