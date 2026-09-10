import type { Acao } from '../types'

export const acoes: Acao[] = [
  { id: 'plantar', nome: 'Plantar árvore', pontos: 50, icone: 'tree' },
  { id: 'reciclar', nome: 'Reciclar lixo', pontos: 30, icone: 'recycle' },
  { id: 'transporte', nome: 'Transporte público', pontos: 25, icone: 'bus' },
  { id: 'energia', nome: 'Economizar energia', pontos: 40, icone: 'bulb' },
]
