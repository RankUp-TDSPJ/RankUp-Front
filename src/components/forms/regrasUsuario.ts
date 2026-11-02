import { EMAIL_PATTERN } from './estilos'

// mesmas regras no cadastro e na edição de perfil
export const regrasNome = {
  required: 'O nome precisa ter pelo menos 3 letras.',
  minLength: { value: 3, message: 'O nome precisa ter pelo menos 3 letras.' },
}

export const regrasEmail = {
  required: 'Digite um e-mail válido.',
  pattern: { value: EMAIL_PATTERN, message: 'Digite um e-mail válido.' },
}

export const regrasIdade = {
  valueAsNumber: true,
  required: 'Digite sua idade.',
  validate: (idade: number) => (Number.isInteger(idade) && idade >= 1 && idade <= 120) || 'Digite uma idade entre 1 e 120.',
} as const
