import type { ApiErrorBody } from '../types/api'

// sem .env a aplicação usa a API publicada, então roda direto depois do npm install
export const API_URL = import.meta.env.VITE_API_URL ?? 'https://rankup-java.onrender.com'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  method?: HttpMethod
  body?: unknown
  headers?: Record<string, string>
  signal?: AbortSignal
}

export class ApiError extends Error {
  readonly status: number

  constructor(status: number, message: string) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

const MENSAGENS_PADRAO: Record<number, string> = {
  400: 'Dados inválidos. Confira os campos e tente novamente.',
  403: 'Você não tem permissão para fazer isso.',
  404: 'Não encontramos o que você procurou.',
  409: 'Esse registro já existe.',
}

function mensagemPadrao(status: number) {
  return MENSAGENS_PADRAO[status] ?? 'Algo deu errado no servidor. Tente novamente em instantes.'
}

export async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const { method = 'GET', body, headers, signal } = options

  let response: Response
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      signal,
      headers: {
        ...(body !== undefined && { 'Content-Type': 'application/json' }),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    })
  } catch (error) {
    // cancelamento é intencional (ex.: usuário saiu da página), então repassa sem trocar a mensagem
    if (error instanceof DOMException && error.name === 'AbortError') throw error
    throw new ApiError(0, 'Não foi possível conectar ao servidor. Verifique sua internet e tente novamente.')
  }

  if (!response.ok) {
    const corpo = (await response.json().catch(() => null)) as ApiErrorBody | null
    throw new ApiError(response.status, corpo?.erro ?? mensagemPadrao(response.status))
  }

  if (response.status === 204) return undefined as T

  return (await response.json()) as T
}
