import type {
  AtualizarUsuarioRequest,
  CadastroUsuarioRequest,
  LoginRequest,
  PerfilUsuario,
  Usuario,
  UsuarioResumo,
} from '../types/api'
import { request } from './api'

// rotas de admin identificam quem está pedindo por esse cabeçalho
function cabecalhoAdmin(idAdmin: number) {
  return { 'X-Usuario-Id': String(idAdmin) }
}

export function cadastrarUsuario(dados: CadastroUsuarioRequest) {
  return request<Usuario>('/usuarios', { method: 'POST', body: dados })
}

export function login(dados: LoginRequest) {
  return request<Usuario>('/login', { method: 'POST', body: dados })
}

export function buscarPerfil(id: number, signal?: AbortSignal) {
  return request<PerfilUsuario>(`/usuarios/${id}`, { signal })
}

export function atualizarUsuario(id: number, dados: AtualizarUsuarioRequest) {
  return request<Usuario>(`/usuarios/${id}`, { method: 'PUT', body: dados })
}

export function listarUsuarios(idAdmin: number, signal?: AbortSignal) {
  return request<UsuarioResumo[]>('/usuarios', { headers: cabecalhoAdmin(idAdmin), signal })
}

export function excluirUsuario(idAdmin: number, id: number) {
  return request<void>(`/usuarios/${id}`, { method: 'DELETE', headers: cabecalhoAdmin(idAdmin) })
}
