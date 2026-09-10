export type RankingUser = {
  id: string
  posicao: number
  nome: string
  cidade: string
  co2: string
  pontos: number
}

export type Integrante = {
  slug: string
  nome: string
  rm: string
  turma: string
  foto: string
  /** classes utilitárias extras pra ajustar o enquadramento de fotos específicas */
  fotoClassName?: string
  linkedin: string
  github: string
}

export type FaqItemData = {
  id: string
  pergunta: string
  resposta: string
}

export type AcaoIcone = 'tree' | 'recycle' | 'bus' | 'bulb'

export type Acao = {
  id: string
  nome: string
  pontos: number
  icone: AcaoIcone
}

export type ContatoFormData = {
  nome: string
  email: string
  assunto: 'duvida' | 'sugestao' | 'parceria'
  mensagem: string
}
