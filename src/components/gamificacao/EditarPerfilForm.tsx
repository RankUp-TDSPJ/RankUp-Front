import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { ApiError } from '../../services/api'
import { atualizarUsuario } from '../../services/usuarioService'
import type { TipoMensagem } from '../../types'
import type { AtualizarUsuarioRequest, Usuario } from '../../types/api'
import { inputClasses, submitButtonClasses } from '../forms/estilos'
import { FormField } from '../forms/FormField'
import { regrasEmail, regrasIdade, regrasNome } from '../forms/regrasUsuario'
import { Alerta } from '../ui/Alerta'

type EditarPerfilFormProps = {
  usuario: Usuario
  onAtualizado: () => void
}

export function EditarPerfilForm({ usuario, onAtualizado }: EditarPerfilFormProps) {
  const { atualizarSessao } = useAuth()
  const [resultado, setResultado] = useState<{ tipo: TipoMensagem; texto: string } | null>(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<AtualizarUsuarioRequest>({
    defaultValues: { nome: usuario.nome, email: usuario.email, idade: usuario.idade },
  })

  async function onSubmit(dados: AtualizarUsuarioRequest) {
    setResultado(null)
    try {
      const atualizado = await atualizarUsuario(usuario.id, {
        ...dados,
        nome: dados.nome.trim(),
        email: dados.email.trim(),
      })
      atualizarSessao(atualizado)
      reset({ nome: atualizado.nome, email: atualizado.email, idade: atualizado.idade })
      setResultado({ tipo: 'sucesso', texto: 'Perfil atualizado!' })
      onAtualizado()
    } catch (error) {
      setResultado({
        tipo: 'erro',
        texto: error instanceof ApiError ? error.message : 'Não foi possível salvar. Tente novamente.',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormField label="Nome" htmlFor="perfil-nome" error={errors.nome?.message}>
        <input
          id="perfil-nome"
          type="text"
          autoComplete="name"
          aria-invalid={errors.nome ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.nome))}
          {...register('nome', regrasNome)}
        />
      </FormField>

      <FormField label="E-mail" htmlFor="perfil-email" error={errors.email?.message}>
        <input
          id="perfil-email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.email))}
          {...register('email', regrasEmail)}
        />
      </FormField>

      <FormField label="Idade" htmlFor="perfil-idade" error={errors.idade?.message}>
        <input
          id="perfil-idade"
          type="number"
          inputMode="numeric"
          aria-invalid={errors.idade ? 'true' : 'false'}
          className={inputClasses(Boolean(errors.idade))}
          {...register('idade', regrasIdade)}
        />
      </FormField>

      <button type="submit" disabled={isSubmitting || !isDirty} className={submitButtonClasses}>
        {isSubmitting ? 'Salvando...' : 'Salvar alterações'}
      </button>

      {resultado && (
        <Alerta tipo={resultado.tipo} className="mt-4">
          {resultado.texto}
        </Alerta>
      )}
    </form>
  )
}
