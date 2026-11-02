import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { ApiError } from '../../services/api'
import type { LoginRequest, Usuario } from '../../types/api'
import { EMAIL_PATTERN, inputClasses, submitButtonClasses } from '../forms/estilos'
import { FormField } from '../forms/FormField'
import { Alerta } from '../ui/Alerta'
import { AvisoServidor } from '../ui/AvisoServidor'

type LoginFormProps = {
  onSucesso: (usuario: Usuario) => void
}

export function LoginForm({ onSucesso }: LoginFormProps) {
  const { entrar } = useAuth()
  const [erroApi, setErroApi] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>()

  async function onSubmit({ email }: LoginRequest) {
    setErroApi(null)
    try {
      onSucesso(await entrar(email.trim()))
    } catch (error) {
      setErroApi(error instanceof ApiError ? error.message : 'Não foi possível entrar. Tente novamente.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-xl bg-white p-6 ring-1 ring-borda sm:p-8">
      {erroApi && (
        <Alerta tipo="erro" className="mb-2">
          {erroApi}
        </Alerta>
      )}

      <FormField label="E-mail" htmlFor="login-email" error={errors.email?.message}>
        <input
          id="login-email"
          type="email"
          autoComplete="email"
          placeholder="exemplo@email.com"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.email))}
          {...register('email', {
            required: 'Digite seu e-mail.',
            pattern: { value: EMAIL_PATTERN, message: 'Digite um e-mail válido.' },
          })}
        />
      </FormField>

      <button type="submit" disabled={isSubmitting} className={submitButtonClasses}>
        {isSubmitting ? 'Entrando...' : 'Entrar'}
      </button>

      {isSubmitting && <AvisoServidor />}
    </form>
  )
}
