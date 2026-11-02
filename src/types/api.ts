// Formatos de dados trocados com a API Java (ver contrato em "RankUp+ endpoints")

export type TipoUsuario = 'COMUM' | 'ADMIN'

export type Nivel = 'INICIANTE' | 'BRONZE' | 'PRATA' | 'OURO'

export interface Usuario {
  id: number
  nome: string
  email: string
  idade: number
  tipo: TipoUsuario
}

export interface Pontuacao {
  pontuacaoTotal: number
}

export type PerfilUsuario = Usuario &
  Pontuacao & {
    nivel: Nivel
    co2TotalEvitado: number
  }

export type UsuarioResumo = Usuario & Pontuacao

export interface CadastroUsuarioRequest {
  nome: string
  email: string
  idade: number
  codigoAdmin?: string
}

export type AtualizarUsuarioRequest = Omit<CadastroUsuarioRequest, 'codigoAdmin'>

export interface LoginRequest {
  email: string
}

export interface AcaoSustentavel {
  nome: string
  descricao: string
  unidade: string
  pontosPorAcao: number
  fatorCO2: number
}

export interface RegistroAcaoRequest {
  nomeAcao: string
  quantidade: number
  /** formato yyyy-MM-dd */
  data: string
}

export interface RegistroCriado extends Pontuacao {
  idRegistro: number
  nomeAcao: string
  quantidade: number
  data: string
  pontosGanhos: number
  co2Evitado: number
  nivel: Nivel
}

export interface RegistroHistorico {
  idRegistro: number
  nomeAcao: string
  unidade: string
  quantidade: number
  data: string
  pontos: number
  co2Evitado: number
}

export type RankingItem = Pick<Usuario, 'id' | 'nome'> &
  Pontuacao & {
    posicao: number
  }

export interface PosicaoUsuario extends Pontuacao {
  posicao: number
  totalUsuarios: number
}

export interface ApiErrorBody {
  erro: string
}
