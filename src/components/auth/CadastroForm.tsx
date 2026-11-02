import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { ApiError } from '../../services/api'
import type { CadastroUsuarioRequest, Usuario } from '../../types/api'
import { EMAIL_PATTERN, inputClasses, submitButtonClasses } from '../forms/estilos'
import { FormField } from '../forms/FormField'
import { Alerta } from '../ui/Alerta'
import { AvisoServidor } from './AvisoServidor'

type CadastroFormProps = {
  /** pediuAdmin indica se a pessoa digitou um código de administrador */
  onSucesso: (usuario: Usuario, pediuAdmin: boolean) => void
}

export function CadastroForm({ onSucesso }: CadastroFormProps) {
  const { cadastrar } = useAuth()
  const [erroApi, setErroApi] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CadastroUsuarioRequest>()

  async function onSubmit(dados: CadastroUsuarioRequest) {
    setErroApi(null)
    const codigoAdmin = dados.codigoAdmin?.trim() || undefined
    try {
      const criado = await cadastrar({ ...dados, nome: dados.nome.trim(), email: dados.email.trim(), codigoAdmin })
      onSucesso(criado, Boolean(codigoAdmin))
    } catch (error) {
      setErroApi(error instanceof ApiError ? error.message : 'Não foi possível criar sua conta. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8">
      {erroApi && (
        <Alerta tipo="erro" className="mb-2">
          {erroApi}
        </Alerta>
      )}

      <FormField label="Nome" htmlFor="cadastro-nome" error={errors.nome?.message}>
        <input
          id="cadastro-nome"
          type="text"
          autoComplete="name"
          placeholder="Digite seu nome"
          aria-invalid={errors.nome ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.nome))}
          {...register('nome', {
            required: 'O nome precisa ter pelo menos 3 letras.',
            minLength: { value: 3, message: 'O nome precisa ter pelo menos 3 letras.' },
          })}
        />
      </FormField>

      <FormField label="E-mail" htmlFor="cadastro-email" error={errors.email?.message}>
        <input
          id="cadastro-email"
          type="email"
          autoComplete="email"
          placeholder="exemplo@email.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.email))}
          {...register('email', {
            required: 'Digite um e-mail válido.',
            pattern: { value: EMAIL_PATTERN, message: 'Digite um e-mail válido.' },
          })}
        />
      </FormField>

      <FormField label="Idade" htmlFor="cadastro-idade" error={errors.idade?.message}>
        <input
          id="cadastro-idade"
          type="number"
          inputMode="numeric"
          placeholder="Ex.: 25"
          aria-invalid={errors.idade ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.idade))}
          {...register('idade', {
            valueAsNumber: true,
            required: 'Digite sua idade.',
            validate: (idade) => (Number.isInteger(idade) && idade >= 1 && idade <= 120) || 'Digite uma idade entre 1 e 120.',
          })}
        />
      </FormField>

      <FormField label="Código de administrador (opcional)" htmlFor="cadastro-codigo">
        <input
          id="cadastro-codigo"
          type="text"
          autoComplete="off"
          placeholder="Deixe em branco se não tiver"
          className={inputClasses(false)}
          {...register('codigoAdmin')}
        />
      </FormField>

      <button type="submit" disabled={isSubmitting} className={submitButtonClasses}>
        {isSubmitting ? 'Criando conta...' : 'Criar conta'}
      </button>

      {isSubmitting && <AvisoServidor />}
    </form>
  )
}
