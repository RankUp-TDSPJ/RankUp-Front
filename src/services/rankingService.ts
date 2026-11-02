import type { PosicaoUsuario, RankingItem } from '../types/api'
import { request } from './api'

export function listarRanking(limite = 10, signal?: AbortSignal) {
  return request<RankingItem[]>(`/ranking?limite=${limite}`, { signal })
}

export function buscarPosicao(idUsuario: number, signal?: AbortSignal) {
  return request<PosicaoUsuario>(`/usuarios/${idUsuario}/posicao`, { signal })
}
