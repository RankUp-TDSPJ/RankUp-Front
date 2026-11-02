import type { AcaoSustentavel, RegistroAcaoRequest, RegistroCriado, RegistroHistorico } from '../types/api'
import { request } from './api'

export function listarAcoes(signal?: AbortSignal) {
  return request<AcaoSustentavel[]>('/acoes', { signal })
}

export function registrarAcao(idUsuario: number, dados: RegistroAcaoRequest) {
  return request<RegistroCriado>(`/usuarios/${idUsuario}/registros`, { method: 'POST', body: dados })
}

export function listarHistorico(idUsuario: number, signal?: AbortSignal) {
  return request<RegistroHistorico[]>(`/usuarios/${idUsuario}/registros`, { signal })
}
